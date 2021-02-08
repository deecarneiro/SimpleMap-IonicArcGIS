(function () {
  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["support-schemaValidator-js"], {
    /***/
    "2DLi":
    /*!*****************************************************************!*\
      !*** ./node_modules/@arcgis/core/support/validationUtilsAjv.js ***!
      \*****************************************************************/

    /*! exports provided: convertAjvErrors */

    /***/
    function DLi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "convertAjvErrors", function () {
        return a;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function a(a) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
        var l = {};
        var n = a.map(t).map(function (a, t) {
          return {
            e: a,
            i: t
          };
        }).sort(function (_ref, _ref2) {
          var a = _ref.e,
              t = _ref.i;
          var e = _ref2.e,
              l = _ref2.i;
          var n = a.dataPath ? a.dataPath.split(".").length : 0,
              s = e.dataPath ? e.dataPath.split(".").length : 0;
          return n === s ? t - l : s - n;
        }).map(function (_ref3) {
          var a = _ref3.e;
          return "".concat(a.dataPath ? a.dataPath + ": " : "").concat(a.message);
        }).filter(function (a) {
          var t = !l[a];
          return l[a] = !0, t;
        });

        if (n.length > e) {
          var _a = "(" + (n.length - e) + " more...)";

          n = n.slice(0, e), n.push(_a);
        }

        return n;
      }

      function t(a) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;

        if (null != ((e = a.params) && e.allowedValues)) {
          var _e = a.params.allowedValues;

          if (_e) {
            if (_e = _e.map(function (a) {
              return JSON.stringify(a);
            }), _e.length > t) {
              var _a2 = "(" + (_e.length - t) + " more...)";

              _e = _e.slice(0, t), _e.push(_a2);
            }

            a.message = "should be equal to one of: " + _e.join(", ");
          }
        } else (function (a) {
          return null != (a && a.additionalProperty);
        })(a.params) && (a.message = "should NOT have additional property: " + a.params.additionalProperty);

        var e;
        return a;
      }
      /***/

    },

    /***/
    "8r5S":
    /*!********************************************************!*\
      !*** ./node_modules/@arcgis/core/chunks/ajv.bundle.js ***!
      \********************************************************/

    /*! exports provided: A */

    /***/
    function r5S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "A", function () {
        return a;
      });
      /* harmony import */


      var _commonjsHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./_commonjsHelpers.js */
      "X2wA");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var a = Object(_commonjsHelpers_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_commonjsHelpers_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function (e, r) {
        e.exports = function e(r, a, s) {
          function o(n, l) {
            if (!a[n]) {
              if (!r[n]) {
                var c = "function" == typeof _commonjsHelpers_js__WEBPACK_IMPORTED_MODULE_0__["b"] && _commonjsHelpers_js__WEBPACK_IMPORTED_MODULE_0__["b"];
                if (!l && c) return c(n, !0);
                if (i) return i(n, !0);
                var u = new Error("Cannot find module '" + n + "'");
                throw u.code = "MODULE_NOT_FOUND", u;
              }

              var h = a[n] = {
                exports: {}
              };
              r[n][0].call(h.exports, function (e) {
                return o(r[n][1][e] || e);
              }, h, h.exports, e, r, a, s);
            }

            return a[n].exports;
          }

          for (var i = "function" == typeof _commonjsHelpers_js__WEBPACK_IMPORTED_MODULE_0__["b"] && _commonjsHelpers_js__WEBPACK_IMPORTED_MODULE_0__["b"], n = 0; n < s.length; n++) {
            o(s[n]);
          }

          return o;
        }({
          1: [function (e, r, t) {
            var a = r.exports = function () {
              this._cache = {};
            };

            a.prototype.put = function (e, r) {
              this._cache[e] = r;
            }, a.prototype.get = function (e) {
              return this._cache[e];
            }, a.prototype.del = function (e) {
              delete this._cache[e];
            }, a.prototype.clear = function () {
              this._cache = {};
            };
          }, {}],
          2: [function (e, r, t) {
            var a = e("./error_classes").MissingRef;

            function s(e, r, t) {
              var o = this;
              if ("function" != typeof this._opts.loadSchema) throw new Error("options.loadSchema should be a function");
              "function" == typeof r && (t = r, r = void 0);
              var i = n(e).then(function () {
                var t = o._addSchema(e, void 0, r);

                return t.validate || function e(t) {
                  try {
                    return o._compile(t);
                  } catch (e) {
                    if (e instanceof a) return s(e);
                    throw e;
                  }

                  function s(a) {
                    var s = a.missingSchema;
                    if (c(s)) throw new Error("Schema " + s + " is loaded but " + a.missingRef + " cannot be resolved");
                    var i = o._loadingSchemas[s];
                    return i || (i = o._loadingSchemas[s] = o._opts.loadSchema(s)).then(l, l), i.then(function (e) {
                      if (!c(s)) return n(e).then(function () {
                        c(s) || o.addSchema(e, s, void 0, r);
                      });
                    }).then(function () {
                      return e(t);
                    });

                    function l() {
                      delete o._loadingSchemas[s];
                    }

                    function c(e) {
                      return o._refs[e] || o._schemas[e];
                    }
                  }
                }(t);
              });
              return t && i.then(function (e) {
                t(null, e);
              }, t), i;

              function n(e) {
                var r = e.$schema;
                return r && !o.getSchema(r) ? s.call(o, {
                  $ref: r
                }, !0) : Promise.resolve();
              }
            }

            r.exports = s;
          }, {
            "./error_classes": 3
          }],
          3: [function (e, r, t) {
            var a = e("./resolve");

            function s(e, r, t) {
              this.message = t || s.message(e, r), this.missingRef = a.url(e, r), this.missingSchema = a.normalizeId(a.fullPath(this.missingRef));
            }

            function o(e) {
              return e.prototype = Object.create(Error.prototype), e.prototype.constructor = e;
            }

            r.exports = {
              Validation: o(function (e) {
                this.message = "validation failed", this.errors = e, this.ajv = this.validation = !0;
              }),
              MissingRef: o(s)
            }, s.message = function (e, r) {
              return "can't resolve reference " + r + " from id " + e;
            };
          }, {
            "./resolve": 6
          }],
          4: [function (e, r, t) {
            var a = e("./util"),
                s = /^(\d\d\d\d)-(\d\d)-(\d\d)$/,
                o = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                i = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i,
                n = /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
                l = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
                c = /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
                u = /^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-?)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-?)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i,
                h = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
                d = /^(?:\/(?:[^~/]|~0|~1)*)*$/,
                p = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
                f = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;

            function m(e) {
              return e = "full" == e ? "full" : "fast", a.copy(m[e]);
            }

            function v(e) {
              var r = e.match(s);
              if (!r) return !1;
              var t,
                  a = +r[1],
                  i = +r[2],
                  n = +r[3];
              return 1 <= i && i <= 12 && 1 <= n && n <= (2 != i || (t = a) % 4 != 0 || t % 100 == 0 && t % 400 != 0 ? o[i] : 29);
            }

            function y(e, r) {
              var t = e.match(i);
              if (!t) return !1;
              var a = t[1],
                  s = t[2],
                  o = t[3],
                  n = t[5];
              return (a <= 23 && s <= 59 && o <= 59 || 23 == a && 59 == s && 60 == o) && (!r || n);
            }

            (r.exports = m).fast = {
              date: /^\d\d\d\d-[0-1]\d-[0-3]\d$/,
              time: /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i,
              "date-time": /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i,
              uri: /^(?:[a-z][a-z0-9+-.]*:)(?:\/?\/)?[^\s]*$/i,
              "uri-reference": /^(?:(?:[a-z][a-z0-9+-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
              "uri-template": c,
              url: u,
              email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i,
              hostname: n,
              ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
              ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
              regex: w,
              uuid: h,
              "json-pointer": d,
              "json-pointer-uri-fragment": p,
              "relative-json-pointer": f
            }, m.full = {
              date: v,
              time: y,
              "date-time": function dateTime(e) {
                var r = e.split(g);
                return 2 == r.length && v(r[0]) && y(r[1], !0);
              },
              uri: function uri(e) {
                return P.test(e) && l.test(e);
              },
              "uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
              "uri-template": c,
              url: u,
              email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
              hostname: n,
              ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
              ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
              regex: w,
              uuid: h,
              "json-pointer": d,
              "json-pointer-uri-fragment": p,
              "relative-json-pointer": f
            };
            var g = /t|\s/i,
                P = /\/|:/,
                E = /[^\\]\\Z/;

            function w(e) {
              if (E.test(e)) return !1;

              try {
                return new RegExp(e), !0;
              } catch (e) {
                return !1;
              }
            }
          }, {
            "./util": 10
          }],
          5: [function (e, r, t) {
            var a = e("./resolve"),
                s = e("./util"),
                o = e("./error_classes"),
                i = e("fast-json-stable-stringify"),
                n = e("../dotjs/validate"),
                l = s.ucs2length,
                c = e("fast-deep-equal"),
                u = o.Validation;

            function h(e, r, t, g) {
              var P = this,
                  E = this._opts,
                  w = [void 0],
                  b = {},
                  S = [],
                  _ = {},
                  F = [],
                  x = {},
                  R = [],
                  $ = function (e, r, t) {
                var a = d.call(this, e, r, t);
                return 0 <= a ? {
                  index: a,
                  compiling: !0
                } : (a = this._compilations.length, this._compilations[a] = {
                  schema: e,
                  root: r,
                  baseId: t
                }, {
                  index: a,
                  compiling: !1
                });
              }.call(this, e, r = r || {
                schema: e,
                refVal: w,
                refs: b
              }, g),
                  j = this._compilations[$.index];

              if ($.compiling) return j.callValidate = k;
              var D = this._formats,
                  O = this.RULES;

              try {
                var I = C(e, r, t, g);
                j.validate = I;
                var A = j.callValidate;
                return A && (A.schema = I.schema, A.errors = null, A.refs = I.refs, A.refVal = I.refVal, A.root = I.root, A.$async = I.$async, E.sourceCode && (A.source = I.source)), I;
              } finally {
                (function (e, r, t) {
                  var a = d.call(this, e, r, t);
                  0 <= a && this._compilations.splice(a, 1);
                }).call(this, e, r, g);
              }

              function k() {
                var e = j.validate,
                    r = e.apply(this, arguments);
                return k.errors = e.errors, r;
              }

              function C(e, t, i, d) {
                var g = !t || t && t.schema == e;
                if (t.schema != r.schema) return h.call(P, e, t, i, d);

                var _ = !0 === e.$async,
                    x = n({
                  isTop: !0,
                  schema: e,
                  isRoot: g,
                  baseId: d,
                  root: t,
                  schemaPath: "",
                  errSchemaPath: "#",
                  errorPath: '""',
                  MissingRefError: o.MissingRef,
                  RULES: O,
                  validate: n,
                  util: s,
                  resolve: a,
                  resolveRef: L,
                  usePattern: T,
                  useDefault: q,
                  useCustomRule: Q,
                  opts: E,
                  formats: D,
                  logger: P.logger,
                  self: P
                });

                x = y(w, m) + y(S, p) + y(F, f) + y(R, v) + x, E.processCode && (x = E.processCode(x, e));

                try {
                  var $ = new Function("self", "RULES", "formats", "root", "refVal", "defaults", "customRules", "equal", "ucs2length", "ValidationError", x)(P, O, D, r, w, F, R, c, l, u);
                  w[0] = $;
                } catch (e) {
                  throw P.logger.error("Error compiling schema, function code:", x), e;
                }

                return $.schema = e, $.errors = null, $.refs = b, $.refVal = w, $.root = g ? $ : t, _ && ($.$async = !0), !0 === E.sourceCode && ($.source = {
                  code: x,
                  patterns: S,
                  defaults: F
                }), $;
              }

              function L(e, s, o) {
                s = a.url(e, s);
                var i,
                    n,
                    l = b[s];
                if (void 0 !== l) return z(i = w[l], n = "refVal[" + l + "]");

                if (!o && r.refs) {
                  var c = r.refs[s];
                  if (void 0 !== c) return z(i = r.refVal[c], n = N(s, i));
                }

                n = N(s);
                var u,
                    d,
                    p,
                    f = a.call(P, C, r, s);
                if (void 0 !== f || (u = t && t[s]) && (f = a.inlineRef(u, E.inlineRefs) ? u : h.call(P, u, r, t, e)), void 0 !== f) return d = f, p = b[s], w[p] = d, z(f, n);
                delete b[s];
              }

              function N(e, r) {
                var t = w.length;
                return w[t] = r, "refVal" + (b[e] = t);
              }

              function z(e, r) {
                return "object" == typeof e || "boolean" == typeof e ? {
                  code: r,
                  schema: e,
                  inline: !0
                } : {
                  code: r,
                  $async: e && !!e.$async
                };
              }

              function T(e) {
                var r = _[e];
                return void 0 === r && (r = _[e] = S.length, S[r] = e), "pattern" + r;
              }

              function q(e) {
                switch (typeof e) {
                  case "boolean":
                  case "number":
                    return "" + e;

                  case "string":
                    return s.toQuotedString(e);

                  case "object":
                    if (null === e) return "null";
                    var r = i(e),
                        t = x[r];
                    return void 0 === t && (t = x[r] = F.length, F[t] = e), "default" + t;
                }
              }

              function Q(e, r, t, a) {
                if (!1 !== P._opts.validateSchema) {
                  var s = e.definition.dependencies;
                  if (s && !s.every(function (e) {
                    return Object.prototype.hasOwnProperty.call(t, e);
                  })) throw new Error("parent schema must have all required keywords: " + s.join(","));
                  var o = e.definition.validateSchema;

                  if (o && !o(r)) {
                    var i = "keyword schema is invalid: " + P.errorsText(o.errors);
                    if ("log" != P._opts.validateSchema) throw new Error(i);
                    P.logger.error(i);
                  }
                }

                var n,
                    l = e.definition.compile,
                    c = e.definition.inline,
                    u = e.definition.macro;
                if (l) n = l.call(P, r, t, a);else if (u) n = u.call(P, r, t, a), !1 !== E.validateSchema && P.validateSchema(n, !0);else if (c) n = c.call(P, a, e.keyword, r, t);else if (!(n = e.definition.validate)) return;
                if (void 0 === n) throw new Error('custom keyword "' + e.keyword + '"failed to compile');
                var h = R.length;
                return {
                  code: "customRule" + h,
                  validate: R[h] = n
                };
              }
            }

            function d(e, r, t) {
              for (var a = 0; a < this._compilations.length; a++) {
                var s = this._compilations[a];
                if (s.schema == e && s.root == r && s.baseId == t) return a;
              }

              return -1;
            }

            function p(e, r) {
              return "var pattern" + e + " = new RegExp(" + s.toQuotedString(r[e]) + ");";
            }

            function f(e) {
              return "var default" + e + " = defaults[" + e + "];";
            }

            function m(e, r) {
              return void 0 === r[e] ? "" : "var refVal" + e + " = refVal[" + e + "];";
            }

            function v(e) {
              return "var customRule" + e + " = customRules[" + e + "];";
            }

            function y(e, r) {
              if (!e.length) return "";

              for (var t = "", a = 0; a < e.length; a++) {
                t += r(a, e);
              }

              return t;
            }

            r.exports = h;
          }, {
            "../dotjs/validate": 38,
            "./error_classes": 3,
            "./resolve": 6,
            "./util": 10,
            "fast-deep-equal": 42,
            "fast-json-stable-stringify": 43
          }],
          6: [function (e, r, t) {
            var a = e("uri-js"),
                s = e("fast-deep-equal"),
                o = e("./util"),
                i = e("./schema_obj"),
                n = e("json-schema-traverse");

            function l(e, r, t) {
              var a = this._refs[t];

              if ("string" == typeof a) {
                if (!this._refs[a]) return l.call(this, e, r, a);
                a = this._refs[a];
              }

              if ((a = a || this._schemas[t]) instanceof i) return p(a.schema, this._opts.inlineRefs) ? a.schema : a.validate || this._compile(a);
              var s,
                  o,
                  n,
                  u = c.call(this, r, t);
              return u && (s = u.schema, r = u.root, n = u.baseId), s instanceof i ? o = s.validate || e.call(this, s.schema, r, void 0, n) : void 0 !== s && (o = p(s, this._opts.inlineRefs) ? s : e.call(this, s, r, void 0, n)), o;
            }

            function c(e, r) {
              var t = a.parse(r),
                  s = m(t),
                  o = f(this._getId(e.schema));

              if (0 === Object.keys(e.schema).length || s !== o) {
                var n = y(s),
                    l = this._refs[n];
                if ("string" == typeof l) return function (e, r, t) {
                  var a = c.call(this, e, r);

                  if (a) {
                    var s = a.schema,
                        o = a.baseId;
                    e = a.root;

                    var i = this._getId(s);

                    return i && (o = g(o, i)), h.call(this, t, o, s, e);
                  }
                }.call(this, e, l, t);
                if (l instanceof i) l.validate || this._compile(l), e = l;else {
                  if (!((l = this._schemas[n]) instanceof i)) return;
                  if (l.validate || this._compile(l), n == y(r)) return {
                    schema: l,
                    root: e,
                    baseId: o
                  };
                  e = l;
                }
                if (!e.schema) return;
                o = f(this._getId(e.schema));
              }

              return h.call(this, t, o, e.schema, e);
            }

            (r.exports = l).normalizeId = y, l.fullPath = f, l.url = g, l.ids = function (e) {
              var r = y(this._getId(e)),
                  t = {
                "": r
              },
                  i = {
                "": f(r, !1)
              },
                  l = {},
                  c = this;
              return n(e, {
                allKeys: !0
              }, function (e, r, n, u, h, d, p) {
                if ("" !== r) {
                  var f = c._getId(e),
                      m = t[u],
                      v = i[u] + "/" + h;

                  if (void 0 !== p && (v += "/" + ("number" == typeof p ? p : o.escapeFragment(p))), "string" == typeof f) {
                    f = m = y(m ? a.resolve(m, f) : f);
                    var g = c._refs[f];

                    if ("string" == typeof g && (g = c._refs[g]), g && g.schema) {
                      if (!s(e, g.schema)) throw new Error('id "' + f + '" resolves to more than one schema');
                    } else if (f != y(v)) if ("#" == f[0]) {
                      if (l[f] && !s(e, l[f])) throw new Error('id "' + f + '" resolves to more than one schema');
                      l[f] = e;
                    } else c._refs[f] = v;
                  }

                  t[r] = m, i[r] = v;
                }
              }), l;
            }, l.inlineRef = p, l.schema = c;
            var u = o.toHash(["properties", "patternProperties", "enum", "dependencies", "definitions"]);

            function h(e, r, t, a) {
              if (e.fragment = e.fragment || "", "/" == e.fragment.slice(0, 1)) {
                for (var s = e.fragment.split("/"), i = 1; i < s.length; i++) {
                  var n,
                      l,
                      h,
                      d = s[i];

                  if (d) {
                    if (void 0 === (t = t[d = o.unescapeFragment(d)])) break;
                    u[d] || ((h = this._getId(t)) && (r = g(r, h)), t.$ref && (n = g(r, t.$ref), (l = c.call(this, a, n)) && (t = l.schema, a = l.root, r = l.baseId)));
                  }
                }

                return void 0 !== t && t !== a.schema ? {
                  schema: t,
                  root: a,
                  baseId: r
                } : void 0;
              }
            }

            var d = o.toHash(["type", "format", "pattern", "maxLength", "minLength", "maxProperties", "minProperties", "maxItems", "minItems", "maximum", "minimum", "uniqueItems", "multipleOf", "required", "enum"]);

            function p(e, r) {
              return !1 !== r && (void 0 === r || !0 === r ? function e(r) {
                var t;

                if (Array.isArray(r)) {
                  for (var a = 0; a < r.length; a++) {
                    if ("object" == typeof (t = r[a]) && !e(t)) return !1;
                  }
                } else for (var s in r) {
                  if ("$ref" == s) return !1;
                  if ("object" == typeof (t = r[s]) && !e(t)) return !1;
                }

                return !0;
              }(e) : r ? function e(r) {
                var t,
                    a = 0;

                if (Array.isArray(r)) {
                  for (var s = 0; s < r.length; s++) {
                    if ("object" == typeof (t = r[s]) && (a += e(t)), a == 1 / 0) return 1 / 0;
                  }
                } else for (var o in r) {
                  if ("$ref" == o) return 1 / 0;
                  if (d[o]) a++;else if ("object" == typeof (t = r[o]) && (a += e(t) + 1), a == 1 / 0) return 1 / 0;
                }

                return a;
              }(e) <= r : void 0);
            }

            function f(e, r) {
              return !1 !== r && (e = y(e)), m(a.parse(e));
            }

            function m(e) {
              return a.serialize(e).split("#")[0] + "#";
            }

            var v = /#\/?$/;

            function y(e) {
              return e ? e.replace(v, "") : "";
            }

            function g(e, r) {
              return r = y(r), a.resolve(e, r);
            }
          }, {
            "./schema_obj": 8,
            "./util": 10,
            "fast-deep-equal": 42,
            "json-schema-traverse": 44,
            "uri-js": 45
          }],
          7: [function (e, r, t) {
            var a = e("../dotjs"),
                s = e("./util").toHash;

            r.exports = function () {
              var e = [{
                type: "number",
                rules: [{
                  maximum: ["exclusiveMaximum"]
                }, {
                  minimum: ["exclusiveMinimum"]
                }, "multipleOf", "format"]
              }, {
                type: "string",
                rules: ["maxLength", "minLength", "pattern", "format"]
              }, {
                type: "array",
                rules: ["maxItems", "minItems", "items", "contains", "uniqueItems"]
              }, {
                type: "object",
                rules: ["maxProperties", "minProperties", "required", "dependencies", "propertyNames", {
                  properties: ["additionalProperties", "patternProperties"]
                }]
              }, {
                rules: ["$ref", "const", "enum", "not", "anyOf", "oneOf", "allOf", "if"]
              }],
                  r = ["type", "$comment"];
              return e.all = s(r), e.types = s(["number", "integer", "string", "array", "object", "boolean", "null"]), e.forEach(function (t) {
                t.rules = t.rules.map(function (t) {
                  var s, o;
                  return "object" == typeof t && (o = t[s = Object.keys(t)[0]], t = s, o.forEach(function (t) {
                    r.push(t), e.all[t] = !0;
                  })), r.push(t), e.all[t] = {
                    keyword: t,
                    code: a[t],
                    "implements": o
                  };
                }), e.all.$comment = {
                  keyword: "$comment",
                  code: a.$comment
                }, t.type && (e.types[t.type] = t);
              }), e.keywords = s(r.concat(["$schema", "$id", "id", "$data", "$async", "title", "description", "default", "definitions", "examples", "readOnly", "writeOnly", "contentMediaType", "contentEncoding", "additionalItems", "then", "else"])), e.custom = {}, e;
            };
          }, {
            "../dotjs": 27,
            "./util": 10
          }],
          8: [function (e, r, t) {
            var a = e("./util");

            r.exports = function (e) {
              a.copy(e, this);
            };
          }, {
            "./util": 10
          }],
          9: [function (e, r, t) {
            r.exports = function (e) {
              for (var r, t = 0, a = e.length, s = 0; s < a;) {
                t++, 55296 <= (r = e.charCodeAt(s++)) && r <= 56319 && s < a && 56320 == (64512 & (r = e.charCodeAt(s))) && s++;
              }

              return t;
            };
          }, {}],
          10: [function (e, r, t) {
            function a(e, r, t, a) {
              var s = a ? " !== " : " === ",
                  o = a ? " || " : " && ",
                  i = a ? "!" : "",
                  n = a ? "" : "!";

              switch (e) {
                case "null":
                  return r + s + "null";

                case "array":
                  return i + "Array.isArray(" + r + ")";

                case "object":
                  return "(" + i + r + o + "typeof " + r + s + '"object"' + o + n + "Array.isArray(" + r + "))";

                case "integer":
                  return "(typeof " + r + s + '"number"' + o + n + "(" + r + " % 1)" + o + r + s + r + (t ? o + i + "isFinite(" + r + ")" : "") + ")";

                case "number":
                  return "(typeof " + r + s + '"' + e + '"' + (t ? o + i + "isFinite(" + r + ")" : "") + ")";

                default:
                  return "typeof " + r + s + '"' + e + '"';
              }
            }

            r.exports = {
              copy: function copy(e, r) {
                for (var t in r = r || {}, e) {
                  r[t] = e[t];
                }

                return r;
              },
              checkDataType: a,
              checkDataTypes: function checkDataTypes(e, r, t) {
                switch (e.length) {
                  case 1:
                    return a(e[0], r, t, !0);

                  default:
                    var s = "",
                        i = o(e);

                    for (var n in i.array && i.object && (s = i["null"] ? "(" : "(!" + r + " || ", s += "typeof " + r + ' !== "object")', delete i["null"], delete i.array, delete i.object), i.number && delete i.integer, i) {
                      s += (s ? " && " : "") + a(n, r, t, !0);
                    }

                    return s;
                }
              },
              coerceToTypes: function coerceToTypes(e, r) {
                if (Array.isArray(r)) {
                  for (var t = [], a = 0; a < r.length; a++) {
                    var o = r[a];
                    (s[o] || "array" === e && "array" === o) && (t[t.length] = o);
                  }

                  if (t.length) return t;
                } else {
                  if (s[r]) return [r];
                  if ("array" === e && "array" === r) return ["array"];
                }
              },
              toHash: o,
              getProperty: l,
              escapeQuotes: c,
              equal: e("fast-deep-equal"),
              ucs2length: e("./ucs2length"),
              varOccurences: function varOccurences(e, r) {
                r += "[^0-9]";
                var t = e.match(new RegExp(r, "g"));
                return t ? t.length : 0;
              },
              varReplace: function varReplace(e, r, t) {
                return r += "([^0-9])", t = t.replace(/\$/g, "$$$$"), e.replace(new RegExp(r, "g"), t + "$1");
              },
              schemaHasRules: function schemaHasRules(e, r) {
                if ("boolean" == typeof e) return !e;

                for (var t in e) {
                  if (r[t]) return !0;
                }
              },
              schemaHasRulesExcept: function schemaHasRulesExcept(e, r, t) {
                if ("boolean" == typeof e) return !e && "not" != t;

                for (var a in e) {
                  if (a != t && r[a]) return !0;
                }
              },
              schemaUnknownRules: function schemaUnknownRules(e, r) {
                if ("boolean" != typeof e) for (var t in e) {
                  if (!r[t]) return t;
                }
              },
              toQuotedString: u,
              getPathExpr: function getPathExpr(e, r, t, a) {
                return p(e, t ? "'/' + " + r + (a ? "" : ".replace(/~/g, '~0').replace(/\\//g, '~1')") : a ? "'[' + " + r + " + ']'" : "'[\\'' + " + r + " + '\\']'");
              },
              getPath: function getPath(e, r, t) {
                return p(e, u(t ? "/" + f(r) : l(r)));
              },
              getData: function getData(e, r, t) {
                var a, s, o, i;
                if ("" === e) return "rootData";

                if ("/" == e[0]) {
                  if (!h.test(e)) throw new Error("Invalid JSON-pointer: " + e);
                  s = e, o = "rootData";
                } else {
                  if (!(i = e.match(d))) throw new Error("Invalid JSON-pointer: " + e);

                  if (a = +i[1], "#" == (s = i[2])) {
                    if (r <= a) throw new Error("Cannot access property/index " + a + " levels up, current level is " + r);
                    return t[r - a];
                  }

                  if (r < a) throw new Error("Cannot access data " + a + " levels up, current level is " + r);
                  if (o = "data" + (r - a || ""), !s) return o;
                }

                for (var n = o, c = s.split("/"), u = 0; u < c.length; u++) {
                  var p = c[u];
                  p && (n += " && " + (o += l(m(p))));
                }

                return n;
              },
              unescapeFragment: function unescapeFragment(e) {
                return m(decodeURIComponent(e));
              },
              unescapeJsonPointer: m,
              escapeFragment: function escapeFragment(e) {
                return encodeURIComponent(f(e));
              },
              escapeJsonPointer: f
            };
            var s = o(["string", "number", "integer", "boolean", "null"]);

            function o(e) {
              for (var r = {}, t = 0; t < e.length; t++) {
                r[e[t]] = !0;
              }

              return r;
            }

            var i = /^[a-z$_][a-z$_0-9]*$/i,
                n = /'|\\/g;

            function l(e) {
              return "number" == typeof e ? "[" + e + "]" : i.test(e) ? "." + e : "['" + c(e) + "']";
            }

            function c(e) {
              return e.replace(n, "\\$&").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\f/g, "\\f").replace(/\t/g, "\\t");
            }

            function u(e) {
              return "'" + c(e) + "'";
            }

            var h = /^\/(?:[^~]|~0|~1)*$/,
                d = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;

            function p(e, r) {
              return '""' == e ? r : (e + " + " + r).replace(/([^\\])' \+ '/g, "$1");
            }

            function f(e) {
              return e.replace(/~/g, "~0").replace(/\//g, "~1");
            }

            function m(e) {
              return e.replace(/~1/g, "/").replace(/~0/g, "~");
            }
          }, {
            "./ucs2length": 9,
            "fast-deep-equal": 42
          }],
          11: [function (e, r, t) {
            var a = ["multipleOf", "maximum", "exclusiveMaximum", "minimum", "exclusiveMinimum", "maxLength", "minLength", "pattern", "additionalItems", "maxItems", "minItems", "uniqueItems", "maxProperties", "minProperties", "required", "additionalProperties", "enum", "format", "const"];

            r.exports = function (e, r) {
              for (var t = 0; t < r.length; t++) {
                e = JSON.parse(JSON.stringify(e));

                for (var s = r[t].split("/"), o = e, i = 1; i < s.length; i++) {
                  o = o[s[i]];
                }

                for (i = 0; i < a.length; i++) {
                  var n = a[i],
                      l = o[n];
                  l && (o[n] = {
                    anyOf: [l, {
                      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
                    }]
                  });
                }
              }

              return e;
            };
          }, {}],
          12: [function (e, r, t) {
            var a = e("./refs/json-schema-draft-07.json");
            r.exports = {
              $id: "https://github.com/ajv-validator/ajv/blob/master/lib/definition_schema.js",
              definitions: {
                simpleTypes: a.definitions.simpleTypes
              },
              type: "object",
              dependencies: {
                schema: ["validate"],
                $data: ["validate"],
                statements: ["inline"],
                valid: {
                  not: {
                    required: ["macro"]
                  }
                }
              },
              properties: {
                type: a.properties.type,
                schema: {
                  type: "boolean"
                },
                statements: {
                  type: "boolean"
                },
                dependencies: {
                  type: "array",
                  items: {
                    type: "string"
                  }
                },
                metaSchema: {
                  type: "object"
                },
                modifying: {
                  type: "boolean"
                },
                valid: {
                  type: "boolean"
                },
                $data: {
                  type: "boolean"
                },
                async: {
                  type: "boolean"
                },
                errors: {
                  anyOf: [{
                    type: "boolean"
                  }, {
                    "const": "full"
                  }]
                }
              }
            };
          }, {
            "./refs/json-schema-draft-07.json": 41
          }],
          13: [function (e, r, t) {
            r.exports = function (e, r) {
              var t,
                  a,
                  s,
                  o,
                  i,
                  n,
                  l,
                  c = " ",
                  u = e.level,
                  h = e.dataLevel,
                  d = e.schema[r],
                  p = e.schemaPath + e.util.getProperty(r),
                  f = e.errSchemaPath + "/" + r,
                  m = !e.opts.allErrors,
                  v = "data" + (h || ""),
                  y = e.opts.$data && d && d.$data,
                  g = y ? (c += " var schema" + u + " = " + e.util.getData(d.$data, h, e.dataPathArr) + "; ", "schema" + u) : d,
                  P = "maximum" == r,
                  E = P ? "exclusiveMaximum" : "exclusiveMinimum",
                  w = e.schema[E],
                  b = e.opts.$data && w && w.$data,
                  S = P ? "<" : ">",
                  _ = P ? ">" : "<",
                  F = void 0;

              if (!y && "number" != typeof d && void 0 !== d) throw new Error(r + " must be number");
              if (!b && void 0 !== w && "number" != typeof w && "boolean" != typeof w) throw new Error(E + " must be number or boolean");
              b ? (o = "exclIsNumber" + u, i = "' + " + (n = "op" + u) + " + '", c += " var schemaExcl" + u + " = " + (t = e.util.getData(w.$data, h, e.dataPathArr)) + "; ", F = E, (l = l || []).push(c += " var " + (a = "exclusive" + u) + "; var " + (s = "exclType" + u) + " = typeof " + (t = "schemaExcl" + u) + "; if (" + s + " != 'boolean' && " + s + " != 'undefined' && " + s + " != 'number') { "), c = "", !1 !== e.createErrors ? (c += " { keyword: '" + (F || "_exclusiveLimit") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(f) + " , params: {} ", !1 !== e.opts.messages && (c += " , message: '" + E + " should be boolean' "), e.opts.verbose && (c += " , schema: validate.schema" + p + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + v + " "), c += " } ") : c += " {} ", x = c, c = l.pop(), !e.compositeRule && m ? e.async ? c += " throw new ValidationError([" + x + "]); " : c += " validate.errors = [" + x + "]; return false; " : c += " var err = " + x + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", c += " } else if ( ", y && (c += " (" + g + " !== undefined && typeof " + g + " != 'number') || "), c += " " + s + " == 'number' ? ( (" + a + " = " + g + " === undefined || " + t + " " + S + "= " + g + ") ? " + v + " " + _ + "= " + t + " : " + v + " " + _ + " " + g + " ) : ( (" + a + " = " + t + " === true) ? " + v + " " + _ + "= " + g + " : " + v + " " + _ + " " + g + " ) || " + v + " !== " + v + ") { var op" + u + " = " + a + " ? '" + S + "' : '" + S + "='; ", void 0 === d && (F = E, f = e.errSchemaPath + "/" + E, g = t, y = b)) : (i = S, (o = "number" == typeof w) && y ? (n = "'" + i + "'", c += " if ( ", y && (c += " (" + g + " !== undefined && typeof " + g + " != 'number') || "), c += " ( " + g + " === undefined || " + w + " " + S + "= " + g + " ? " + v + " " + _ + "= " + w + " : " + v + " " + _ + " " + g + " ) || " + v + " !== " + v + ") { ") : (o && void 0 === d ? (a = !0, F = E, f = e.errSchemaPath + "/" + E, g = w, _ += "=") : (o && (g = Math[P ? "min" : "max"](w, d)), w === (!o || g) ? (a = !0, F = E, f = e.errSchemaPath + "/" + E, _ += "=") : (a = !1, i += "=")), n = "'" + i + "'", c += " if ( ", y && (c += " (" + g + " !== undefined && typeof " + g + " != 'number') || "), c += " " + v + " " + _ + " " + g + " || " + v + " !== " + v + ") { ")), F = F || r, (l = l || []).push(c), c = "", !1 !== e.createErrors ? (c += " { keyword: '" + (F || "_limit") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(f) + " , params: { comparison: " + n + ", limit: " + g + ", exclusive: " + a + " } ", !1 !== e.opts.messages && (c += " , message: 'should be " + i + " ", c += y ? "' + " + g : g + "'"), e.opts.verbose && (c += " , schema:  ", c += y ? "validate.schema" + p : "" + d, c += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + v + " "), c += " } ") : c += " {} ";
              var x = c;
              return c = l.pop(), !e.compositeRule && m ? e.async ? c += " throw new ValidationError([" + x + "]); " : c += " validate.errors = [" + x + "]; return false; " : c += " var err = " + x + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", c += " } ", m && (c += " else { "), c;
            };
          }, {}],
          14: [function (e, r, t) {
            r.exports = function (e, r) {
              var t = " ",
                  a = e.level,
                  s = e.dataLevel,
                  o = e.schema[r],
                  i = e.schemaPath + e.util.getProperty(r),
                  n = e.errSchemaPath + "/" + r,
                  l = !e.opts.allErrors,
                  c = "data" + (s || ""),
                  u = e.opts.$data && o && o.$data,
                  h = u ? (t += " var schema" + a + " = " + e.util.getData(o.$data, s, e.dataPathArr) + "; ", "schema" + a) : o;
              if (!u && "number" != typeof o) throw new Error(r + " must be number");
              t += "if ( ", u && (t += " (" + h + " !== undefined && typeof " + h + " != 'number') || "), t += " " + c + ".length " + ("maxItems" == r ? ">" : "<") + " " + h + ") { ";
              var d = r,
                  p = p || [];
              p.push(t), t = "", !1 !== e.createErrors ? (t += " { keyword: '" + (d || "_limitItems") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(n) + " , params: { limit: " + h + " } ", !1 !== e.opts.messages && (t += " , message: 'should NOT have ", t += "maxItems" == r ? "more" : "fewer", t += " than ", t += u ? "' + " + h + " + '" : "" + o, t += " items' "), e.opts.verbose && (t += " , schema:  ", t += u ? "validate.schema" + i : "" + o, t += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + c + " "), t += " } ") : t += " {} ";
              var f = t;
              return t = p.pop(), !e.compositeRule && l ? e.async ? t += " throw new ValidationError([" + f + "]); " : t += " validate.errors = [" + f + "]; return false; " : t += " var err = " + f + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += "} ", l && (t += " else { "), t;
            };
          }, {}],
          15: [function (e, r, t) {
            r.exports = function (e, r) {
              var t = " ",
                  a = e.level,
                  s = e.dataLevel,
                  o = e.schema[r],
                  i = e.schemaPath + e.util.getProperty(r),
                  n = e.errSchemaPath + "/" + r,
                  l = !e.opts.allErrors,
                  c = "data" + (s || ""),
                  u = e.opts.$data && o && o.$data,
                  h = u ? (t += " var schema" + a + " = " + e.util.getData(o.$data, s, e.dataPathArr) + "; ", "schema" + a) : o;
              if (!u && "number" != typeof o) throw new Error(r + " must be number");
              var d = "maxLength" == r ? ">" : "<";
              t += "if ( ", u && (t += " (" + h + " !== undefined && typeof " + h + " != 'number') || "), !1 === e.opts.unicode ? t += " " + c + ".length " : t += " ucs2length(" + c + ") ", t += " " + d + " " + h + ") { ";
              var p = r,
                  f = f || [];
              f.push(t), t = "", !1 !== e.createErrors ? (t += " { keyword: '" + (p || "_limitLength") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(n) + " , params: { limit: " + h + " } ", !1 !== e.opts.messages && (t += " , message: 'should NOT be ", t += "maxLength" == r ? "longer" : "shorter", t += " than ", t += u ? "' + " + h + " + '" : "" + o, t += " characters' "), e.opts.verbose && (t += " , schema:  ", t += u ? "validate.schema" + i : "" + o, t += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + c + " "), t += " } ") : t += " {} ";
              var m = t;
              return t = f.pop(), !e.compositeRule && l ? e.async ? t += " throw new ValidationError([" + m + "]); " : t += " validate.errors = [" + m + "]; return false; " : t += " var err = " + m + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += "} ", l && (t += " else { "), t;
            };
          }, {}],
          16: [function (e, r, t) {
            r.exports = function (e, r) {
              var t = " ",
                  a = e.level,
                  s = e.dataLevel,
                  o = e.schema[r],
                  i = e.schemaPath + e.util.getProperty(r),
                  n = e.errSchemaPath + "/" + r,
                  l = !e.opts.allErrors,
                  c = "data" + (s || ""),
                  u = e.opts.$data && o && o.$data,
                  h = u ? (t += " var schema" + a + " = " + e.util.getData(o.$data, s, e.dataPathArr) + "; ", "schema" + a) : o;
              if (!u && "number" != typeof o) throw new Error(r + " must be number");
              t += "if ( ", u && (t += " (" + h + " !== undefined && typeof " + h + " != 'number') || "), t += " Object.keys(" + c + ").length " + ("maxProperties" == r ? ">" : "<") + " " + h + ") { ";
              var d = r,
                  p = p || [];
              p.push(t), t = "", !1 !== e.createErrors ? (t += " { keyword: '" + (d || "_limitProperties") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(n) + " , params: { limit: " + h + " } ", !1 !== e.opts.messages && (t += " , message: 'should NOT have ", t += "maxProperties" == r ? "more" : "fewer", t += " than ", t += u ? "' + " + h + " + '" : "" + o, t += " properties' "), e.opts.verbose && (t += " , schema:  ", t += u ? "validate.schema" + i : "" + o, t += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + c + " "), t += " } ") : t += " {} ";
              var f = t;
              return t = p.pop(), !e.compositeRule && l ? e.async ? t += " throw new ValidationError([" + f + "]); " : t += " validate.errors = [" + f + "]; return false; " : t += " var err = " + f + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += "} ", l && (t += " else { "), t;
            };
          }, {}],
          17: [function (e, r, t) {
            r.exports = function (e, r) {
              var t = " ",
                  a = e.schema[r],
                  s = e.schemaPath + e.util.getProperty(r),
                  o = e.errSchemaPath + "/" + r,
                  i = !e.opts.allErrors,
                  n = e.util.copy(e),
                  l = "";
              n.level++;
              var c = "valid" + n.level,
                  u = n.baseId,
                  h = !0,
                  d = a;
              if (d) for (var p, f = -1, m = d.length - 1; f < m;) {
                p = d[f += 1], (e.opts.strictKeywords ? "object" == typeof p && 0 < Object.keys(p).length : e.util.schemaHasRules(p, e.RULES.all)) && (h = !1, n.schema = p, n.schemaPath = s + "[" + f + "]", n.errSchemaPath = o + "/" + f, t += "  " + e.validate(n) + " ", n.baseId = u, i && (t += " if (" + c + ") { ", l += "}"));
              }
              return i && (t += h ? " if (true) { " : " " + l.slice(0, -1) + " "), t;
            };
          }, {}],
          18: [function (e, r, t) {
            r.exports = function (e, r) {
              var t = " ",
                  a = e.level,
                  s = e.dataLevel,
                  o = e.schema[r],
                  i = e.schemaPath + e.util.getProperty(r),
                  n = e.errSchemaPath + "/" + r,
                  l = !e.opts.allErrors,
                  c = "data" + (s || ""),
                  u = "valid" + a,
                  h = "errs__" + a,
                  d = e.util.copy(e),
                  p = "";
              d.level++;
              var f = "valid" + d.level;

              if (o.every(function (r) {
                return e.opts.strictKeywords ? "object" == typeof r && 0 < Object.keys(r).length : e.util.schemaHasRules(r, e.RULES.all);
              })) {
                var m = d.baseId;
                t += " var " + h + " = errors; var " + u + " = false;  ";
                var v = e.compositeRule;
                e.compositeRule = d.compositeRule = !0;
                var y = o;
                if (y) for (var g, P = -1, E = y.length - 1; P < E;) {
                  g = y[P += 1], d.schema = g, d.schemaPath = i + "[" + P + "]", d.errSchemaPath = n + "/" + P, t += "  " + e.validate(d) + " ", d.baseId = m, t += " " + u + " = " + u + " || " + f + "; if (!" + u + ") { ", p += "}";
                }
                e.compositeRule = d.compositeRule = v, t += " " + p + " if (!" + u + ") {   var err =   ", !1 !== e.createErrors ? (t += " { keyword: 'anyOf' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(n) + " , params: {} ", !1 !== e.opts.messages && (t += " , message: 'should match some schema in anyOf' "), e.opts.verbose && (t += " , schema: validate.schema" + i + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + c + " "), t += " } ") : t += " {} ", t += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && l && (e.async ? t += " throw new ValidationError(vErrors); " : t += " validate.errors = vErrors; return false; "), t += " } else {  errors = " + h + "; if (vErrors !== null) { if (" + h + ") vErrors.length = " + h + "; else vErrors = null; } ", e.opts.allErrors && (t += " } ");
              } else l && (t += " if (true) { ");

              return t;
            };
          }, {}],
          19: [function (e, r, t) {
            r.exports = function (e, r) {
              var t = " ",
                  a = e.schema[r],
                  s = e.errSchemaPath + "/" + r,
                  o = (e.opts.allErrors, e.util.toQuotedString(a));
              return !0 === e.opts.$comment ? t += " console.log(" + o + ");" : "function" == typeof e.opts.$comment && (t += " self._opts.$comment(" + o + ", " + e.util.toQuotedString(s) + ", validate.root.schema);"), t;
            };
          }, {}],
          20: [function (e, r, t) {
            r.exports = function (e, r) {
              var t = " ",
                  a = e.level,
                  s = e.dataLevel,
                  o = e.schema[r],
                  i = e.schemaPath + e.util.getProperty(r),
                  n = e.errSchemaPath + "/" + r,
                  l = !e.opts.allErrors,
                  c = "data" + (s || ""),
                  u = "valid" + a,
                  h = e.opts.$data && o && o.$data;
              h && (t += " var schema" + a + " = " + e.util.getData(o.$data, s, e.dataPathArr) + "; "), h || (t += " var schema" + a + " = validate.schema" + i + ";"), t += "var " + u + " = equal(" + c + ", schema" + a + "); if (!" + u + ") {   ";
              var d = d || [];
              d.push(t), t = "", !1 !== e.createErrors ? (t += " { keyword: 'const' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(n) + " , params: { allowedValue: schema" + a + " } ", !1 !== e.opts.messages && (t += " , message: 'should be equal to constant' "), e.opts.verbose && (t += " , schema: validate.schema" + i + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + c + " "), t += " } ") : t += " {} ";
              var p = t;
              return t = d.pop(), !e.compositeRule && l ? e.async ? t += " throw new ValidationError([" + p + "]); " : t += " validate.errors = [" + p + "]; return false; " : t += " var err = " + p + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += " }", l && (t += " else { "), t;
            };
          }, {}],
          21: [function (e, r, t) {
            r.exports = function (e, r) {
              var t = " ",
                  a = e.level,
                  s = e.dataLevel,
                  o = e.schema[r],
                  i = e.schemaPath + e.util.getProperty(r),
                  n = e.errSchemaPath + "/" + r,
                  l = !e.opts.allErrors,
                  c = "data" + (s || ""),
                  u = "valid" + a,
                  h = "errs__" + a,
                  d = e.util.copy(e);
              d.level++;
              var p,
                  f,
                  m,
                  v = "valid" + d.level,
                  y = "i" + a,
                  g = d.dataLevel = e.dataLevel + 1,
                  P = "data" + g,
                  E = e.baseId,
                  w = e.opts.strictKeywords ? "object" == typeof o && 0 < Object.keys(o).length : e.util.schemaHasRules(o, e.RULES.all);
              t += "var " + h + " = errors;var " + u + ";", w ? (p = e.compositeRule, e.compositeRule = d.compositeRule = !0, d.schema = o, d.schemaPath = i, d.errSchemaPath = n, t += " var " + v + " = false; for (var " + y + " = 0; " + y + " < " + c + ".length; " + y + "++) { ", d.errorPath = e.util.getPathExpr(e.errorPath, y, e.opts.jsonPointers, !0), f = c + "[" + y + "]", d.dataPathArr[g] = y, m = e.validate(d), d.baseId = E, e.util.varOccurences(m, P) < 2 ? t += " " + e.util.varReplace(m, P, f) + " " : t += " var " + P + " = " + f + "; " + m + " ", t += " if (" + v + ") break; }  ", e.compositeRule = d.compositeRule = p, t += "  if (!" + v + ") {") : t += " if (" + c + ".length == 0) {";
              var b = b || [];
              b.push(t), t = "", !1 !== e.createErrors ? (t += " { keyword: 'contains' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(n) + " , params: {} ", !1 !== e.opts.messages && (t += " , message: 'should contain a valid item' "), e.opts.verbose && (t += " , schema: validate.schema" + i + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + c + " "), t += " } ") : t += " {} ";
              var S = t;
              return t = b.pop(), !e.compositeRule && l ? e.async ? t += " throw new ValidationError([" + S + "]); " : t += " validate.errors = [" + S + "]; return false; " : t += " var err = " + S + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += " } else { ", w && (t += "  errors = " + h + "; if (vErrors !== null) { if (" + h + ") vErrors.length = " + h + "; else vErrors = null; } "), e.opts.allErrors && (t += " } "), t;
            };
          }, {}],
          22: [function (e, r, t) {
            r.exports = function (e, r) {
              var t,
                  a,
                  s,
                  o,
                  i,
                  n,
                  l = " ",
                  c = e.level,
                  u = e.dataLevel,
                  h = e.schema[r],
                  d = e.schemaPath + e.util.getProperty(r),
                  p = e.errSchemaPath + "/" + r,
                  f = !e.opts.allErrors,
                  m = "data" + (u || ""),
                  v = "valid" + c,
                  y = "errs__" + c,
                  g = e.opts.$data && h && h.$data,
                  P = g ? (l += " var schema" + c + " = " + e.util.getData(h.$data, u, e.dataPathArr) + "; ", "schema" + c) : h,
                  E = this,
                  w = "definition" + c,
                  b = E.definition,
                  S = "";

              if (g && b.$data) {
                n = "keywordValidate" + c;
                var _ = b.validateSchema;
                l += " var " + w + " = RULES.custom['" + r + "'].definition; var " + n + " = " + w + ".validate;";
              } else {
                if (!(i = e.useCustomRule(E, h, e.schema, e))) return;
                P = "validate.schema" + d, n = i.code, a = b.compile, s = b.inline, o = b.macro;
              }

              var F,
                  x,
                  R,
                  $,
                  j,
                  D,
                  O,
                  I,
                  A,
                  k,
                  C = n + ".errors",
                  L = "i" + c,
                  N = "ruleErr" + c,
                  z = b.async;
              if (z && !e.async) throw new Error("async keyword in sync schema");
              return s || o || (l += C + " = null;"), l += "var " + y + " = errors;var " + v + ";", g && b.$data && (S += "}", l += " if (" + P + " === undefined) { " + v + " = true; } else { ", _ && (S += "}", l += " " + v + " = " + w + ".validateSchema(" + P + "); if (" + v + ") { ")), s ? b.statements ? l += " " + i.validate + " " : l += " " + v + " = " + i.validate + "; " : o ? (S = "", (F = e.util.copy(e)).level++, x = "valid" + F.level, F.schema = i.validate, F.schemaPath = "", R = e.compositeRule, e.compositeRule = F.compositeRule = !0, $ = e.validate(F).replace(/validate\.schema/g, n), e.compositeRule = F.compositeRule = R, l += " " + $) : ((I = I || []).push(l), l = "", l += "  " + n + ".call( ", e.opts.passContext ? l += "this" : l += "self", a || !1 === b.schema ? l += " , " + m + " " : l += " , " + P + " , " + m + " , validate.schema" + e.schemaPath + " ", l += " , (dataPath || '')", '""' != e.errorPath && (l += " + " + e.errorPath), O = l += " , " + (j = u ? "data" + (u - 1 || "") : "parentData") + " , " + (D = u ? e.dataPathArr[u] : "parentDataProperty") + " , rootData )  ", l = I.pop(), !1 === b.errors ? (l += " " + v + " = ", z && (l += "await "), l += O + "; ") : l += z ? " var " + (C = "customErrors" + c) + " = null; try { " + v + " = await " + O + "; } catch (e) { " + v + " = false; if (e instanceof ValidationError) " + C + " = e.errors; else throw e; } " : " " + C + " = null; " + v + " = " + O + "; "), b.modifying && (l += " if (" + j + ") " + m + " = " + j + "[" + D + "];"), l += "" + S, b.valid ? f && (l += " if (true) { ") : (l += " if ( ", void 0 === b.valid ? (l += " !", l += o ? "" + x : v) : l += " " + !b.valid + " ", l += ") { ", t = E.keyword, (I = I || []).push(l), (I = I || []).push(l = ""), l = "", !1 !== e.createErrors ? (l += " { keyword: '" + (t || "custom") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(p) + " , params: { keyword: '" + E.keyword + "' } ", !1 !== e.opts.messages && (l += " , message: 'should pass \"" + E.keyword + "\" keyword validation' "), e.opts.verbose && (l += " , schema: validate.schema" + d + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), l += " } ") : l += " {} ", A = l, l = I.pop(), !e.compositeRule && f ? e.async ? l += " throw new ValidationError([" + A + "]); " : l += " validate.errors = [" + A + "]; return false; " : l += " var err = " + A + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", k = l, l = I.pop(), s ? b.errors ? "full" != b.errors && (l += "  for (var " + L + "=" + y + "; " + L + "<errors; " + L + "++) { var " + N + " = vErrors[" + L + "]; if (" + N + ".dataPath === undefined) " + N + ".dataPath = (dataPath || '') + " + e.errorPath + "; if (" + N + ".schemaPath === undefined) { " + N + '.schemaPath = "' + p + '"; } ', e.opts.verbose && (l += " " + N + ".schema = " + P + "; " + N + ".data = " + m + "; "), l += " } ") : !1 === b.errors ? l += " " + k + " " : (l += " if (" + y + " == errors) { " + k + " } else {  for (var " + L + "=" + y + "; " + L + "<errors; " + L + "++) { var " + N + " = vErrors[" + L + "]; if (" + N + ".dataPath === undefined) " + N + ".dataPath = (dataPath || '') + " + e.errorPath + "; if (" + N + ".schemaPath === undefined) { " + N + '.schemaPath = "' + p + '"; } ', e.opts.verbose && (l += " " + N + ".schema = " + P + "; " + N + ".data = " + m + "; "), l += " } } ") : o ? (l += "   var err =   ", !1 !== e.createErrors ? (l += " { keyword: '" + (t || "custom") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(p) + " , params: { keyword: '" + E.keyword + "' } ", !1 !== e.opts.messages && (l += " , message: 'should pass \"" + E.keyword + "\" keyword validation' "), e.opts.verbose && (l += " , schema: validate.schema" + d + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), l += " } ") : l += " {} ", l += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && f && (e.async ? l += " throw new ValidationError(vErrors); " : l += " validate.errors = vErrors; return false; ")) : !1 === b.errors ? l += " " + k + " " : (l += " if (Array.isArray(" + C + ")) { if (vErrors === null) vErrors = " + C + "; else vErrors = vErrors.concat(" + C + "); errors = vErrors.length;  for (var " + L + "=" + y + "; " + L + "<errors; " + L + "++) { var " + N + " = vErrors[" + L + "]; if (" + N + ".dataPath === undefined) " + N + ".dataPath = (dataPath || '') + " + e.errorPath + ";  " + N + '.schemaPath = "' + p + '";  ', e.opts.verbose && (l += " " + N + ".schema = " + P + "; " + N + ".data = " + m + "; "), l += " } } else { " + k + " } "), l += " } ", f && (l += " else { ")), l;
            };
          }, {}],
          23: [function (e, r, t) {
            r.exports = function (e, r) {
              var t = " ",
                  a = e.level,
                  s = e.dataLevel,
                  o = e.schema[r],
                  i = e.schemaPath + e.util.getProperty(r),
                  n = e.errSchemaPath + "/" + r,
                  l = !e.opts.allErrors,
                  c = "data" + (s || ""),
                  u = "errs__" + a,
                  h = e.util.copy(e),
                  d = "";
              h.level++;
              var p,
                  f = "valid" + h.level,
                  m = {},
                  v = {},
                  y = e.opts.ownProperties;

              for (P in o) {
                "__proto__" != P && (k = o[P], (p = Array.isArray(k) ? v : m)[P] = k);
              }

              t += "var " + u + " = errors;";
              var g = e.errorPath;

              for (var P in t += "var missing" + a + ";", v) {
                if ((p = v[P]).length) {
                  if (t += " if ( " + c + e.util.getProperty(P) + " !== undefined ", y && (t += " && Object.prototype.hasOwnProperty.call(" + c + ", '" + e.util.escapeQuotes(P) + "') "), l) {
                    t += " && ( ";
                    var E = p;
                    if (E) for (var w = -1, b = E.length - 1; w < b;) {
                      $ = E[w += 1], w && (t += " || "), t += " ( ( " + (I = c + (O = e.util.getProperty($))) + " === undefined ", y && (t += " || ! Object.prototype.hasOwnProperty.call(" + c + ", '" + e.util.escapeQuotes($) + "') "), t += ") && (missing" + a + " = " + e.util.toQuotedString(e.opts.jsonPointers ? $ : O) + ") ) ";
                    }
                    t += ")) {  ";

                    var S = "missing" + a,
                        _ = "' + " + S + " + '";

                    e.opts._errorDataPathProperty && (e.errorPath = e.opts.jsonPointers ? e.util.getPathExpr(g, S, !0) : g + " + " + S);
                    var F = F || [];
                    F.push(t), t = "", !1 !== e.createErrors ? (t += " { keyword: 'dependencies' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(n) + " , params: { property: '" + e.util.escapeQuotes(P) + "', missingProperty: '" + _ + "', depsCount: " + p.length + ", deps: '" + e.util.escapeQuotes(1 == p.length ? p[0] : p.join(", ")) + "' } ", !1 !== e.opts.messages && (t += " , message: 'should have ", 1 == p.length ? t += "property " + e.util.escapeQuotes(p[0]) : t += "properties " + e.util.escapeQuotes(p.join(", ")), t += " when property " + e.util.escapeQuotes(P) + " is present' "), e.opts.verbose && (t += " , schema: validate.schema" + i + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + c + " "), t += " } ") : t += " {} ";
                    var x = t;
                    t = F.pop(), !e.compositeRule && l ? e.async ? t += " throw new ValidationError([" + x + "]); " : t += " validate.errors = [" + x + "]; return false; " : t += " var err = " + x + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
                  } else {
                    t += " ) { ";
                    var R = p;
                    if (R) for (var $, j = -1, D = R.length - 1; j < D;) {
                      $ = R[j += 1];
                      var O = e.util.getProperty($),
                          I = (_ = e.util.escapeQuotes($), c + O);
                      e.opts._errorDataPathProperty && (e.errorPath = e.util.getPath(g, $, e.opts.jsonPointers)), t += " if ( " + I + " === undefined ", y && (t += " || ! Object.prototype.hasOwnProperty.call(" + c + ", '" + e.util.escapeQuotes($) + "') "), t += ") {  var err =   ", !1 !== e.createErrors ? (t += " { keyword: 'dependencies' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(n) + " , params: { property: '" + e.util.escapeQuotes(P) + "', missingProperty: '" + _ + "', depsCount: " + p.length + ", deps: '" + e.util.escapeQuotes(1 == p.length ? p[0] : p.join(", ")) + "' } ", !1 !== e.opts.messages && (t += " , message: 'should have ", 1 == p.length ? t += "property " + e.util.escapeQuotes(p[0]) : t += "properties " + e.util.escapeQuotes(p.join(", ")), t += " when property " + e.util.escapeQuotes(P) + " is present' "), e.opts.verbose && (t += " , schema: validate.schema" + i + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + c + " "), t += " } ") : t += " {} ", t += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ";
                    }
                  }

                  t += " }   ", l && (d += "}", t += " else { ");
                }
              }

              e.errorPath = g;
              var A = h.baseId;

              for (var P in m) {
                var k = m[P];
                (e.opts.strictKeywords ? "object" == typeof k && 0 < Object.keys(k).length : e.util.schemaHasRules(k, e.RULES.all)) && (t += " " + f + " = true; if ( " + c + e.util.getProperty(P) + " !== undefined ", y && (t += " && Object.prototype.hasOwnProperty.call(" + c + ", '" + e.util.escapeQuotes(P) + "') "), t += ") { ", h.schema = k, h.schemaPath = i + e.util.getProperty(P), h.errSchemaPath = n + "/" + e.util.escapeFragment(P), t += "  " + e.validate(h) + " ", h.baseId = A, t += " }  ", l && (t += " if (" + f + ") { ", d += "}"));
              }

              return l && (t += "   " + d + " if (" + u + " == errors) {"), t;
            };
          }, {}],
          24: [function (e, r, t) {
            r.exports = function (e, r) {
              var t = " ",
                  a = e.level,
                  s = e.dataLevel,
                  o = e.schema[r],
                  i = e.schemaPath + e.util.getProperty(r),
                  n = e.errSchemaPath + "/" + r,
                  l = !e.opts.allErrors,
                  c = "data" + (s || ""),
                  u = "valid" + a,
                  h = e.opts.$data && o && o.$data,
                  d = (h && (t += " var schema" + a + " = " + e.util.getData(o.$data, s, e.dataPathArr) + "; "), "i" + a),
                  p = "schema" + a;
              h || (t += " var " + p + " = validate.schema" + i + ";"), t += "var " + u + ";", h && (t += " if (schema" + a + " === undefined) " + u + " = true; else if (!Array.isArray(schema" + a + ")) " + u + " = false; else {"), t += u + " = false;for (var " + d + "=0; " + d + "<" + p + ".length; " + d + "++) if (equal(" + c + ", " + p + "[" + d + "])) { " + u + " = true; break; }", h && (t += "  }  "), t += " if (!" + u + ") {   ";
              var f = f || [];
              f.push(t), t = "", !1 !== e.createErrors ? (t += " { keyword: 'enum' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(n) + " , params: { allowedValues: schema" + a + " } ", !1 !== e.opts.messages && (t += " , message: 'should be equal to one of the allowed values' "), e.opts.verbose && (t += " , schema: validate.schema" + i + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + c + " "), t += " } ") : t += " {} ";
              var m = t;
              return t = f.pop(), !e.compositeRule && l ? e.async ? t += " throw new ValidationError([" + m + "]); " : t += " validate.errors = [" + m + "]; return false; " : t += " var err = " + m + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += " }", l && (t += " else { "), t;
            };
          }, {}],
          25: [function (e, r, t) {
            r.exports = function (e, r, t) {
              var a = " ",
                  s = e.level,
                  o = e.dataLevel,
                  i = e.schema[r],
                  n = e.schemaPath + e.util.getProperty(r),
                  l = e.errSchemaPath + "/" + r,
                  c = !e.opts.allErrors,
                  u = "data" + (o || "");
              if (!1 === e.opts.format) return c && (a += " if (true) { "), a;
              var h,
                  d = e.opts.$data && i && i.$data,
                  p = d ? (a += " var schema" + s + " = " + e.util.getData(i.$data, o, e.dataPathArr) + "; ", "schema" + s) : i,
                  f = e.opts.unknownFormats,
                  m = Array.isArray(f);
              if (d) a += " var " + (h = "format" + s) + " = formats[" + p + "]; var " + (v = "isObject" + s) + " = typeof " + h + " == 'object' && !(" + h + " instanceof RegExp) && " + h + ".validate; var " + (g = "formatType" + s) + " = " + v + " && " + h + ".type || 'string'; if (" + v + ") { ", e.async && (a += " var async" + s + " = " + h + ".async; "), a += " " + h + " = " + h + ".validate; } if (  ", d && (a += " (" + p + " !== undefined && typeof " + p + " != 'string') || "), a += " (", "ignore" != f && (a += " (" + p + " && !" + h + " ", m && (a += " && self._opts.unknownFormats.indexOf(" + p + ") == -1 "), a += ") || "), a += " (" + h + " && " + g + " == '" + t + "' && !(typeof " + h + " == 'function' ? ", e.async ? a += " (async" + s + " ? await " + h + "(" + u + ") : " + h + "(" + u + ")) " : a += " " + h + "(" + u + ") ", a += " : " + h + ".test(" + u + "))))) {";else {
                if (!(h = e.formats[i])) {
                  if ("ignore" == f) return e.logger.warn('unknown format "' + i + '" ignored in schema at path "' + e.errSchemaPath + '"'), c && (a += " if (true) { "), a;
                  if (m && 0 <= f.indexOf(i)) return c && (a += " if (true) { "), a;
                  throw new Error('unknown format "' + i + '" is used in schema at path "' + e.errSchemaPath + '"');
                }

                var v,
                    y,
                    g = (v = "object" == typeof h && !(h instanceof RegExp) && h.validate) && h.type || "string";
                if (v && (y = !0 === h.async, h = h.validate), g != t) return c && (a += " if (true) { "), a;

                if (y) {
                  if (!e.async) throw new Error("async format in sync schema");
                  a += " if (!(await " + (P = "formats" + e.util.getProperty(i) + ".validate") + "(" + u + "))) { ";
                } else {
                  a += " if (! ";
                  var P = "formats" + e.util.getProperty(i);
                  v && (P += ".validate"), a += "function" == typeof h ? " " + P + "(" + u + ") " : " " + P + ".test(" + u + ") ", a += ") { ";
                }
              }
              var E = E || [];
              E.push(a), a = "", !1 !== e.createErrors ? (a += " { keyword: 'format' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { format:  ", a += d ? "" + p : "" + e.util.toQuotedString(i), a += "  } ", !1 !== e.opts.messages && (a += " , message: 'should match format \"", a += d ? "' + " + p + " + '" : "" + e.util.escapeQuotes(i), a += "\"' "), e.opts.verbose && (a += " , schema:  ", a += d ? "validate.schema" + n : "" + e.util.toQuotedString(i), a += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), a += " } ") : a += " {} ";
              var w = a;
              return a = E.pop(), !e.compositeRule && c ? e.async ? a += " throw new ValidationError([" + w + "]); " : a += " validate.errors = [" + w + "]; return false; " : a += " var err = " + w + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a += " } ", c && (a += " else { "), a;
            };
          }, {}],
          26: [function (e, r, t) {
            r.exports = function (e, r) {
              var t = " ",
                  a = e.level,
                  s = e.dataLevel,
                  o = e.schema[r],
                  i = e.schemaPath + e.util.getProperty(r),
                  n = e.errSchemaPath + "/" + r,
                  l = !e.opts.allErrors,
                  c = "data" + (s || ""),
                  u = "valid" + a,
                  h = "errs__" + a,
                  d = e.util.copy(e);
              d.level++;
              var p,
                  f,
                  m = "valid" + d.level,
                  v = e.schema.then,
                  y = e.schema["else"],
                  g = void 0 !== v && (e.opts.strictKeywords ? "object" == typeof v && 0 < Object.keys(v).length : e.util.schemaHasRules(v, e.RULES.all)),
                  P = void 0 !== y && (e.opts.strictKeywords ? "object" == typeof y && 0 < Object.keys(y).length : e.util.schemaHasRules(y, e.RULES.all)),
                  E = d.baseId;
              return g || P ? (d.createErrors = !1, d.schema = o, d.schemaPath = i, d.errSchemaPath = n, t += " var " + h + " = errors; var " + u + " = true;  ", f = e.compositeRule, e.compositeRule = d.compositeRule = !0, t += "  " + e.validate(d) + " ", d.baseId = E, d.createErrors = !0, t += "  errors = " + h + "; if (vErrors !== null) { if (" + h + ") vErrors.length = " + h + "; else vErrors = null; }  ", e.compositeRule = d.compositeRule = f, g ? (t += " if (" + m + ") {  ", d.schema = e.schema.then, d.schemaPath = e.schemaPath + ".then", d.errSchemaPath = e.errSchemaPath + "/then", t += "  " + e.validate(d) + " ", d.baseId = E, t += " " + u + " = " + m + "; ", g && P ? t += " var " + (p = "ifClause" + a) + " = 'then'; " : p = "'then'", t += " } ", P && (t += " else { ")) : t += " if (!" + m + ") { ", P && (d.schema = e.schema["else"], d.schemaPath = e.schemaPath + ".else", d.errSchemaPath = e.errSchemaPath + "/else", t += "  " + e.validate(d) + " ", d.baseId = E, t += " " + u + " = " + m + "; ", g && P ? t += " var " + (p = "ifClause" + a) + " = 'else'; " : p = "'else'", t += " } "), t += " if (!" + u + ") {   var err =   ", !1 !== e.createErrors ? (t += " { keyword: 'if' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(n) + " , params: { failingKeyword: " + p + " } ", !1 !== e.opts.messages && (t += " , message: 'should match \"' + " + p + " + '\" schema' "), e.opts.verbose && (t += " , schema: validate.schema" + i + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + c + " "), t += " } ") : t += " {} ", t += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && l && (e.async ? t += " throw new ValidationError(vErrors); " : t += " validate.errors = vErrors; return false; "), t += " }   ", l && (t += " else { ")) : l && (t += " if (true) { "), t;
            };
          }, {}],
          27: [function (e, r, t) {
            r.exports = {
              $ref: e("./ref"),
              allOf: e("./allOf"),
              anyOf: e("./anyOf"),
              $comment: e("./comment"),
              "const": e("./const"),
              contains: e("./contains"),
              dependencies: e("./dependencies"),
              "enum": e("./enum"),
              format: e("./format"),
              "if": e("./if"),
              items: e("./items"),
              maximum: e("./_limit"),
              minimum: e("./_limit"),
              maxItems: e("./_limitItems"),
              minItems: e("./_limitItems"),
              maxLength: e("./_limitLength"),
              minLength: e("./_limitLength"),
              maxProperties: e("./_limitProperties"),
              minProperties: e("./_limitProperties"),
              multipleOf: e("./multipleOf"),
              not: e("./not"),
              oneOf: e("./oneOf"),
              pattern: e("./pattern"),
              properties: e("./properties"),
              propertyNames: e("./propertyNames"),
              required: e("./required"),
              uniqueItems: e("./uniqueItems"),
              validate: e("./validate")
            };
          }, {
            "./_limit": 13,
            "./_limitItems": 14,
            "./_limitLength": 15,
            "./_limitProperties": 16,
            "./allOf": 17,
            "./anyOf": 18,
            "./comment": 19,
            "./const": 20,
            "./contains": 21,
            "./dependencies": 23,
            "./enum": 24,
            "./format": 25,
            "./if": 26,
            "./items": 28,
            "./multipleOf": 29,
            "./not": 30,
            "./oneOf": 31,
            "./pattern": 32,
            "./properties": 33,
            "./propertyNames": 34,
            "./ref": 35,
            "./required": 36,
            "./uniqueItems": 37,
            "./validate": 38
          }],
          28: [function (e, r, t) {
            r.exports = function (e, r) {
              var t = " ",
                  a = e.level,
                  s = e.dataLevel,
                  o = e.schema[r],
                  i = e.schemaPath + e.util.getProperty(r),
                  n = e.errSchemaPath + "/" + r,
                  l = !e.opts.allErrors,
                  c = "data" + (s || ""),
                  u = "valid" + a,
                  h = "errs__" + a,
                  d = e.util.copy(e),
                  p = "";
              d.level++;
              var f = "valid" + d.level,
                  m = "i" + a,
                  v = d.dataLevel = e.dataLevel + 1,
                  y = "data" + v,
                  g = e.baseId;

              if (t += "var " + h + " = errors;var " + u + ";", Array.isArray(o)) {
                var P,
                    E,
                    w,
                    b = e.schema.additionalItems;
                !1 === b && (t += " " + u + " = " + c + ".length <= " + o.length + "; ", P = n, n = e.errSchemaPath + "/additionalItems", (E = E || []).push(t += "  if (!" + u + ") {   "), t = "", !1 !== e.createErrors ? (t += " { keyword: 'additionalItems' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(n) + " , params: { limit: " + o.length + " } ", !1 !== e.opts.messages && (t += " , message: 'should NOT have more than " + o.length + " items' "), e.opts.verbose && (t += " , schema: false , parentSchema: validate.schema" + e.schemaPath + " , data: " + c + " "), t += " } ") : t += " {} ", w = t, t = E.pop(), !e.compositeRule && l ? e.async ? t += " throw new ValidationError([" + w + "]); " : t += " validate.errors = [" + w + "]; return false; " : t += " var err = " + w + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += " } ", n = P, l && (p += "}", t += " else { "));
                var S = o;
                if (S) for (var _ = -1, F = S.length - 1; _ < F;) {
                  var x,
                      R,
                      $ = S[_ += 1];
                  (e.opts.strictKeywords ? "object" == typeof $ && 0 < Object.keys($).length : e.util.schemaHasRules($, e.RULES.all)) && (t += " " + f + " = true; if (" + c + ".length > " + _ + ") { ", x = c + "[" + _ + "]", d.schema = $, d.schemaPath = i + "[" + _ + "]", d.errSchemaPath = n + "/" + _, d.errorPath = e.util.getPathExpr(e.errorPath, _, e.opts.jsonPointers, !0), d.dataPathArr[v] = _, R = e.validate(d), d.baseId = g, e.util.varOccurences(R, y) < 2 ? t += " " + e.util.varReplace(R, y, x) + " " : t += " var " + y + " = " + x + "; " + R + " ", t += " }  ", l && (t += " if (" + f + ") { ", p += "}"));
                }
                "object" == typeof b && (e.opts.strictKeywords ? "object" == typeof b && 0 < Object.keys(b).length : e.util.schemaHasRules(b, e.RULES.all)) && (d.schema = b, d.schemaPath = e.schemaPath + ".additionalItems", d.errSchemaPath = e.errSchemaPath + "/additionalItems", t += " " + f + " = true; if (" + c + ".length > " + o.length + ") {  for (var " + m + " = " + o.length + "; " + m + " < " + c + ".length; " + m + "++) { ", d.errorPath = e.util.getPathExpr(e.errorPath, m, e.opts.jsonPointers, !0), x = c + "[" + m + "]", d.dataPathArr[v] = m, R = e.validate(d), d.baseId = g, e.util.varOccurences(R, y) < 2 ? t += " " + e.util.varReplace(R, y, x) + " " : t += " var " + y + " = " + x + "; " + R + " ", l && (t += " if (!" + f + ") break; "), t += " } }  ", l && (t += " if (" + f + ") { ", p += "}"));
              } else (e.opts.strictKeywords ? "object" == typeof o && 0 < Object.keys(o).length : e.util.schemaHasRules(o, e.RULES.all)) && (d.schema = o, d.schemaPath = i, d.errSchemaPath = n, t += "  for (var " + m + " = 0; " + m + " < " + c + ".length; " + m + "++) { ", d.errorPath = e.util.getPathExpr(e.errorPath, m, e.opts.jsonPointers, !0), x = c + "[" + m + "]", d.dataPathArr[v] = m, R = e.validate(d), d.baseId = g, e.util.varOccurences(R, y) < 2 ? t += " " + e.util.varReplace(R, y, x) + " " : t += " var " + y + " = " + x + "; " + R + " ", l && (t += " if (!" + f + ") break; "), t += " }");

              return l && (t += " " + p + " if (" + h + " == errors) {"), t;
            };
          }, {}],
          29: [function (e, r, t) {
            r.exports = function (e, r) {
              var t = " ",
                  a = e.level,
                  s = e.dataLevel,
                  o = e.schema[r],
                  i = e.schemaPath + e.util.getProperty(r),
                  n = e.errSchemaPath + "/" + r,
                  l = !e.opts.allErrors,
                  c = "data" + (s || ""),
                  u = e.opts.$data && o && o.$data,
                  h = u ? (t += " var schema" + a + " = " + e.util.getData(o.$data, s, e.dataPathArr) + "; ", "schema" + a) : o;
              if (!u && "number" != typeof o) throw new Error(r + " must be number");
              t += "var division" + a + ";if (", u && (t += " " + h + " !== undefined && ( typeof " + h + " != 'number' || "), t += " (division" + a + " = " + c + " / " + h + ", ", e.opts.multipleOfPrecision ? t += " Math.abs(Math.round(division" + a + ") - division" + a + ") > 1e-" + e.opts.multipleOfPrecision + " " : t += " division" + a + " !== parseInt(division" + a + ") ", t += " ) ", u && (t += "  )  "), t += " ) {   ";
              var d = d || [];
              d.push(t), t = "", !1 !== e.createErrors ? (t += " { keyword: 'multipleOf' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(n) + " , params: { multipleOf: " + h + " } ", !1 !== e.opts.messages && (t += " , message: 'should be multiple of ", t += u ? "' + " + h : h + "'"), e.opts.verbose && (t += " , schema:  ", t += u ? "validate.schema" + i : "" + o, t += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + c + " "), t += " } ") : t += " {} ";
              var p = t;
              return t = d.pop(), !e.compositeRule && l ? e.async ? t += " throw new ValidationError([" + p + "]); " : t += " validate.errors = [" + p + "]; return false; " : t += " var err = " + p + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += "} ", l && (t += " else { "), t;
            };
          }, {}],
          30: [function (e, r, t) {
            r.exports = function (e, r) {
              var t = " ",
                  a = e.level,
                  s = e.dataLevel,
                  o = e.schema[r],
                  i = e.schemaPath + e.util.getProperty(r),
                  n = e.errSchemaPath + "/" + r,
                  l = !e.opts.allErrors,
                  c = "data" + (s || ""),
                  u = "errs__" + a,
                  h = e.util.copy(e);
              h.level++;
              var d,
                  p,
                  f,
                  m,
                  v = "valid" + h.level;
              return (e.opts.strictKeywords ? "object" == typeof o && 0 < Object.keys(o).length : e.util.schemaHasRules(o, e.RULES.all)) ? (h.schema = o, h.schemaPath = i, h.errSchemaPath = n, t += " var " + u + " = errors;  ", d = e.compositeRule, e.compositeRule = h.compositeRule = !0, h.createErrors = !1, h.opts.allErrors && (p = h.opts.allErrors, h.opts.allErrors = !1), t += " " + e.validate(h) + " ", h.createErrors = !0, p && (h.opts.allErrors = p), e.compositeRule = h.compositeRule = d, (f = f || []).push(t += " if (" + v + ") {   "), t = "", !1 !== e.createErrors ? (t += " { keyword: 'not' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(n) + " , params: {} ", !1 !== e.opts.messages && (t += " , message: 'should NOT be valid' "), e.opts.verbose && (t += " , schema: validate.schema" + i + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + c + " "), t += " } ") : t += " {} ", m = t, t = f.pop(), !e.compositeRule && l ? e.async ? t += " throw new ValidationError([" + m + "]); " : t += " validate.errors = [" + m + "]; return false; " : t += " var err = " + m + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += " } else {  errors = " + u + "; if (vErrors !== null) { if (" + u + ") vErrors.length = " + u + "; else vErrors = null; } ", e.opts.allErrors && (t += " } ")) : (t += "  var err =   ", !1 !== e.createErrors ? (t += " { keyword: 'not' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(n) + " , params: {} ", !1 !== e.opts.messages && (t += " , message: 'should NOT be valid' "), e.opts.verbose && (t += " , schema: validate.schema" + i + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + c + " "), t += " } ") : t += " {} ", t += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", l && (t += " if (false) { ")), t;
            };
          }, {}],
          31: [function (e, r, t) {
            r.exports = function (e, r) {
              var t = " ",
                  a = e.level,
                  s = e.dataLevel,
                  o = e.schema[r],
                  i = e.schemaPath + e.util.getProperty(r),
                  n = e.errSchemaPath + "/" + r,
                  l = !e.opts.allErrors,
                  c = "data" + (s || ""),
                  u = "valid" + a,
                  h = "errs__" + a,
                  d = e.util.copy(e),
                  p = "";
              d.level++;
              var f = "valid" + d.level,
                  m = d.baseId,
                  v = "prevValid" + a,
                  y = "passingSchemas" + a;
              t += "var " + h + " = errors , " + v + " = false , " + u + " = false , " + y + " = null; ";
              var g = e.compositeRule;
              e.compositeRule = d.compositeRule = !0;
              var P = o;
              if (P) for (var E, w = -1, b = P.length - 1; w < b;) {
                E = P[w += 1], (e.opts.strictKeywords ? "object" == typeof E && 0 < Object.keys(E).length : e.util.schemaHasRules(E, e.RULES.all)) ? (d.schema = E, d.schemaPath = i + "[" + w + "]", d.errSchemaPath = n + "/" + w, t += "  " + e.validate(d) + " ", d.baseId = m) : t += " var " + f + " = true; ", w && (t += " if (" + f + " && " + v + ") { " + u + " = false; " + y + " = [" + y + ", " + w + "]; } else { ", p += "}"), t += " if (" + f + ") { " + u + " = " + v + " = true; " + y + " = " + w + "; }";
              }
              return e.compositeRule = d.compositeRule = g, t += p + "if (!" + u + ") {   var err =   ", !1 !== e.createErrors ? (t += " { keyword: 'oneOf' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(n) + " , params: { passingSchemas: " + y + " } ", !1 !== e.opts.messages && (t += " , message: 'should match exactly one schema in oneOf' "), e.opts.verbose && (t += " , schema: validate.schema" + i + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + c + " "), t += " } ") : t += " {} ", t += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && l && (e.async ? t += " throw new ValidationError(vErrors); " : t += " validate.errors = vErrors; return false; "), t += "} else {  errors = " + h + "; if (vErrors !== null) { if (" + h + ") vErrors.length = " + h + "; else vErrors = null; }", e.opts.allErrors && (t += " } "), t;
            };
          }, {}],
          32: [function (e, r, t) {
            r.exports = function (e, r) {
              var t = " ",
                  a = e.level,
                  s = e.dataLevel,
                  o = e.schema[r],
                  i = e.schemaPath + e.util.getProperty(r),
                  n = e.errSchemaPath + "/" + r,
                  l = !e.opts.allErrors,
                  c = "data" + (s || ""),
                  u = e.opts.$data && o && o.$data,
                  h = u ? (t += " var schema" + a + " = " + e.util.getData(o.$data, s, e.dataPathArr) + "; ", "schema" + a) : o;
              t += "if ( ", u && (t += " (" + h + " !== undefined && typeof " + h + " != 'string') || "), t += " !" + (u ? "(new RegExp(" + h + "))" : e.usePattern(o)) + ".test(" + c + ") ) {   ";
              var d = d || [];
              d.push(t), t = "", !1 !== e.createErrors ? (t += " { keyword: 'pattern' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(n) + " , params: { pattern:  ", t += u ? "" + h : "" + e.util.toQuotedString(o), t += "  } ", !1 !== e.opts.messages && (t += " , message: 'should match pattern \"", t += u ? "' + " + h + " + '" : "" + e.util.escapeQuotes(o), t += "\"' "), e.opts.verbose && (t += " , schema:  ", t += u ? "validate.schema" + i : "" + e.util.toQuotedString(o), t += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + c + " "), t += " } ") : t += " {} ";
              var p = t;
              return t = d.pop(), !e.compositeRule && l ? e.async ? t += " throw new ValidationError([" + p + "]); " : t += " validate.errors = [" + p + "]; return false; " : t += " var err = " + p + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += "} ", l && (t += " else { "), t;
            };
          }, {}],
          33: [function (e, r, t) {
            r.exports = function (e, r) {
              var t = " ",
                  a = e.level,
                  s = e.dataLevel,
                  o = e.schema[r],
                  i = e.schemaPath + e.util.getProperty(r),
                  n = e.errSchemaPath + "/" + r,
                  l = !e.opts.allErrors,
                  c = "data" + (s || ""),
                  u = "errs__" + a,
                  h = e.util.copy(e),
                  d = "";
              h.level++;

              var p,
                  f,
                  m,
                  v = "valid" + h.level,
                  y = "key" + a,
                  g = "idx" + a,
                  P = h.dataLevel = e.dataLevel + 1,
                  E = "data" + P,
                  w = "dataProperties" + a,
                  b = Object.keys(o || {}).filter(k),
                  S = e.schema.patternProperties || {},
                  _ = Object.keys(S).filter(k),
                  F = e.schema.additionalProperties,
                  x = b.length || _.length,
                  R = !1 === F,
                  $ = "object" == typeof F && Object.keys(F).length,
                  j = e.opts.removeAdditional,
                  D = R || $ || j,
                  O = e.opts.ownProperties,
                  I = e.baseId,
                  A = e.schema.required;

              function k(e) {
                return "__proto__" !== e;
              }

              if (A && (!e.opts.$data || !A.$data) && A.length < e.opts.loopRequired && (p = e.util.toHash(A)), t += "var " + u + " = errors;var " + v + " = true;", O && (t += " var " + w + " = undefined;"), D) {
                if (t += O ? " " + w + " = " + w + " || Object.keys(" + c + "); for (var " + g + "=0; " + g + "<" + w + ".length; " + g + "++) { var " + y + " = " + w + "[" + g + "]; " : " for (var " + y + " in " + c + ") { ", x) {
                  if (t += " var isAdditional" + a + " = !(false ", b.length) if (8 < b.length) t += " || validate.schema" + i + ".hasOwnProperty(" + y + ") ";else {
                    var C = b;
                    if (C) for (var L = -1, N = C.length - 1; L < N;) {
                      U = C[L += 1], t += " || " + y + " == " + e.util.toQuotedString(U) + " ";
                    }
                  }

                  if (_.length) {
                    var z = _;
                    if (z) for (var T = -1, q = z.length - 1; T < q;) {
                      te = z[T += 1], t += " || " + e.usePattern(te) + ".test(" + y + ") ";
                    }
                  }

                  t += " ); if (isAdditional" + a + ") { ";
                }

                "all" == j ? t += " delete " + c + "[" + y + "]; " : (Z = e.errorPath, f = "' + " + y + " + '", e.opts._errorDataPathProperty && (e.errorPath = e.util.getPathExpr(e.errorPath, y, e.opts.jsonPointers)), R ? j ? t += " delete " + c + "[" + y + "]; " : (t += " " + v + " = false; ", G = n, n = e.errSchemaPath + "/additionalProperties", (W = W || []).push(t), t = "", !1 !== e.createErrors ? (t += " { keyword: 'additionalProperties' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(n) + " , params: { additionalProperty: '" + f + "' } ", !1 !== e.opts.messages && (t += " , message: '", e.opts._errorDataPathProperty ? t += "is an invalid additional property" : t += "should NOT have additional properties", t += "' "), e.opts.verbose && (t += " , schema: false , parentSchema: validate.schema" + e.schemaPath + " , data: " + c + " "), t += " } ") : t += " {} ", X = t, t = W.pop(), !e.compositeRule && l ? e.async ? t += " throw new ValidationError([" + X + "]); " : t += " validate.errors = [" + X + "]; return false; " : t += " var err = " + X + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", n = G, l && (t += " break; ")) : $ && ("failing" == j ? (t += " var " + u + " = errors;  ", m = e.compositeRule, e.compositeRule = h.compositeRule = !0, h.schema = F, h.schemaPath = e.schemaPath + ".additionalProperties", h.errSchemaPath = e.errSchemaPath + "/additionalProperties", h.errorPath = e.opts._errorDataPathProperty ? e.errorPath : e.util.getPathExpr(e.errorPath, y, e.opts.jsonPointers), oe = c + "[" + y + "]", h.dataPathArr[P] = y, ie = e.validate(h), h.baseId = I, e.util.varOccurences(ie, E) < 2 ? t += " " + e.util.varReplace(ie, E, oe) + " " : t += " var " + E + " = " + oe + "; " + ie + " ", t += " if (!" + v + ") { errors = " + u + "; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete " + c + "[" + y + "]; }  ", e.compositeRule = h.compositeRule = m) : (h.schema = F, h.schemaPath = e.schemaPath + ".additionalProperties", h.errSchemaPath = e.errSchemaPath + "/additionalProperties", h.errorPath = e.opts._errorDataPathProperty ? e.errorPath : e.util.getPathExpr(e.errorPath, y, e.opts.jsonPointers), oe = c + "[" + y + "]", h.dataPathArr[P] = y, ie = e.validate(h), h.baseId = I, e.util.varOccurences(ie, E) < 2 ? t += " " + e.util.varReplace(ie, E, oe) + " " : t += " var " + E + " = " + oe + "; " + ie + " ", l && (t += " if (!" + v + ") break; "))), e.errorPath = Z), x && (t += " } "), t += " }  ", l && (t += " if (" + v + ") { ", d += "}");
              }

              var Q = e.opts.useDefaults && !e.compositeRule;

              if (b.length) {
                var V = b;
                if (V) for (var U, H = -1, K = V.length - 1; H < K;) {
                  var M,
                      B,
                      J,
                      Z,
                      G,
                      Y,
                      W,
                      X,
                      ee = o[U = V[H += 1]];
                  (e.opts.strictKeywords ? "object" == typeof ee && 0 < Object.keys(ee).length : e.util.schemaHasRules(ee, e.RULES.all)) && (oe = c + (M = e.util.getProperty(U)), B = Q && void 0 !== ee["default"], h.schema = ee, h.schemaPath = i + M, h.errSchemaPath = n + "/" + e.util.escapeFragment(U), h.errorPath = e.util.getPath(e.errorPath, U, e.opts.jsonPointers), h.dataPathArr[P] = e.util.toQuotedString(U), ie = e.validate(h), h.baseId = I, e.util.varOccurences(ie, E) < 2 ? (ie = e.util.varReplace(ie, E, oe), J = oe) : t += " var " + (J = E) + " = " + oe + "; ", B ? t += " " + ie + " " : (p && p[U] ? (t += " if ( " + J + " === undefined ", O && (t += " || ! Object.prototype.hasOwnProperty.call(" + c + ", '" + e.util.escapeQuotes(U) + "') "), t += ") { " + v + " = false; ", Z = e.errorPath, G = n, Y = e.util.escapeQuotes(U), e.opts._errorDataPathProperty && (e.errorPath = e.util.getPath(Z, U, e.opts.jsonPointers)), n = e.errSchemaPath + "/required", (W = W || []).push(t), t = "", !1 !== e.createErrors ? (t += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(n) + " , params: { missingProperty: '" + Y + "' } ", !1 !== e.opts.messages && (t += " , message: '", e.opts._errorDataPathProperty ? t += "is a required property" : t += "should have required property \\'" + Y + "\\'", t += "' "), e.opts.verbose && (t += " , schema: validate.schema" + i + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + c + " "), t += " } ") : t += " {} ", X = t, t = W.pop(), !e.compositeRule && l ? e.async ? t += " throw new ValidationError([" + X + "]); " : t += " validate.errors = [" + X + "]; return false; " : t += " var err = " + X + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", n = G, e.errorPath = Z, t += " } else { ") : l ? (t += " if ( " + J + " === undefined ", O && (t += " || ! Object.prototype.hasOwnProperty.call(" + c + ", '" + e.util.escapeQuotes(U) + "') "), t += ") { " + v + " = true; } else { ") : (t += " if (" + J + " !== undefined ", O && (t += " &&   Object.prototype.hasOwnProperty.call(" + c + ", '" + e.util.escapeQuotes(U) + "') "), t += " ) { "), t += " " + ie + " } ")), l && (t += " if (" + v + ") { ", d += "}");
                }
              }

              if (_.length) {
                var re = _;
                if (re) for (var te, ae = -1, se = re.length - 1; ae < se;) {
                  var oe, ie;
                  ee = S[te = re[ae += 1]], (e.opts.strictKeywords ? "object" == typeof ee && 0 < Object.keys(ee).length : e.util.schemaHasRules(ee, e.RULES.all)) && (h.schema = ee, h.schemaPath = e.schemaPath + ".patternProperties" + e.util.getProperty(te), h.errSchemaPath = e.errSchemaPath + "/patternProperties/" + e.util.escapeFragment(te), t += O ? " " + w + " = " + w + " || Object.keys(" + c + "); for (var " + g + "=0; " + g + "<" + w + ".length; " + g + "++) { var " + y + " = " + w + "[" + g + "]; " : " for (var " + y + " in " + c + ") { ", t += " if (" + e.usePattern(te) + ".test(" + y + ")) { ", h.errorPath = e.util.getPathExpr(e.errorPath, y, e.opts.jsonPointers), oe = c + "[" + y + "]", h.dataPathArr[P] = y, ie = e.validate(h), h.baseId = I, e.util.varOccurences(ie, E) < 2 ? t += " " + e.util.varReplace(ie, E, oe) + " " : t += " var " + E + " = " + oe + "; " + ie + " ", l && (t += " if (!" + v + ") break; "), t += " } ", l && (t += " else " + v + " = true; "), t += " }  ", l && (t += " if (" + v + ") { ", d += "}"));
                }
              }

              return l && (t += " " + d + " if (" + u + " == errors) {"), t;
            };
          }, {}],
          34: [function (e, r, t) {
            r.exports = function (e, r) {
              var t = " ",
                  a = e.level,
                  s = e.dataLevel,
                  o = e.schema[r],
                  i = e.schemaPath + e.util.getProperty(r),
                  n = e.errSchemaPath + "/" + r,
                  l = !e.opts.allErrors,
                  c = "data" + (s || ""),
                  u = "errs__" + a,
                  h = e.util.copy(e);
              h.level++;
              var d,
                  p,
                  f,
                  m,
                  v,
                  y,
                  g,
                  P,
                  E,
                  w,
                  b,
                  S = "valid" + h.level;
              return t += "var " + u + " = errors;", (e.opts.strictKeywords ? "object" == typeof o && 0 < Object.keys(o).length : e.util.schemaHasRules(o, e.RULES.all)) && (h.schema = o, h.schemaPath = i, h.errSchemaPath = n, p = "idx" + a, f = "i" + a, m = "' + " + (d = "key" + a) + " + '", v = "data" + (h.dataLevel = e.dataLevel + 1), y = "dataProperties" + a, g = e.opts.ownProperties, P = e.baseId, g && (t += " var " + y + " = undefined; "), t += g ? " " + y + " = " + y + " || Object.keys(" + c + "); for (var " + p + "=0; " + p + "<" + y + ".length; " + p + "++) { var " + d + " = " + y + "[" + p + "]; " : " for (var " + d + " in " + c + ") { ", t += " var startErrs" + a + " = errors; ", E = d, w = e.compositeRule, e.compositeRule = h.compositeRule = !0, b = e.validate(h), h.baseId = P, e.util.varOccurences(b, v) < 2 ? t += " " + e.util.varReplace(b, v, E) + " " : t += " var " + v + " = " + E + "; " + b + " ", e.compositeRule = h.compositeRule = w, t += " if (!" + S + ") { for (var " + f + "=startErrs" + a + "; " + f + "<errors; " + f + "++) { vErrors[" + f + "].propertyName = " + d + "; }   var err =   ", !1 !== e.createErrors ? (t += " { keyword: 'propertyNames' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(n) + " , params: { propertyName: '" + m + "' } ", !1 !== e.opts.messages && (t += " , message: 'property name \\'" + m + "\\' is invalid' "), e.opts.verbose && (t += " , schema: validate.schema" + i + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + c + " "), t += " } ") : t += " {} ", t += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && l && (e.async ? t += " throw new ValidationError(vErrors); " : t += " validate.errors = vErrors; return false; "), l && (t += " break; "), t += " } }"), l && (t += "  if (" + u + " == errors) {"), t;
            };
          }, {}],
          35: [function (e, r, t) {
            r.exports = function (e, r) {
              var t,
                  a,
                  s = " ",
                  o = e.level,
                  i = e.dataLevel,
                  n = e.schema[r],
                  l = e.errSchemaPath + "/" + r,
                  c = !e.opts.allErrors,
                  u = "data" + (i || ""),
                  h = "valid" + o;
              if ("#" == n || "#/" == n) a = e.isRoot ? (t = e.async, "validate") : (t = !0 === e.root.schema.$async, "root.refVal[0]");else {
                var d,
                    p,
                    f = e.resolveRef(e.baseId, n, e.isRoot);

                if (void 0 === f) {
                  var m,
                      v = e.MissingRefError.message(e.baseId, n);

                  if ("fail" == e.opts.missingRefs) {
                    e.logger.error(v), (m = m || []).push(s), s = "", !1 !== e.createErrors ? (s += " { keyword: '$ref' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { ref: '" + e.util.escapeQuotes(n) + "' } ", !1 !== e.opts.messages && (s += " , message: 'can\\'t resolve reference " + e.util.escapeQuotes(n) + "' "), e.opts.verbose && (s += " , schema: " + e.util.toQuotedString(n) + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), s += " } ") : s += " {} ";
                    var y = s;
                    s = m.pop(), !e.compositeRule && c ? e.async ? s += " throw new ValidationError([" + y + "]); " : s += " validate.errors = [" + y + "]; return false; " : s += " var err = " + y + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", c && (s += " if (false) { ");
                  } else {
                    if ("ignore" != e.opts.missingRefs) throw new e.MissingRefError(e.baseId, n, v);
                    e.logger.warn(v), c && (s += " if (true) { ");
                  }
                } else f.inline ? ((d = e.util.copy(e)).level++, p = "valid" + d.level, d.schema = f.schema, d.schemaPath = "", d.errSchemaPath = n, s += " " + e.validate(d).replace(/validate\.schema/g, f.code) + " ", c && (s += " if (" + p + ") { ")) : (t = !0 === f.$async || e.async && !1 !== f.$async, a = f.code);
              }

              if (a) {
                (m = m || []).push(s), s = "", e.opts.passContext ? s += " " + a + ".call(this, " : s += " " + a + "( ", s += " " + u + ", (dataPath || '')", '""' != e.errorPath && (s += " + " + e.errorPath);
                var g = s += " , " + (i ? "data" + (i - 1 || "") : "parentData") + " , " + (i ? e.dataPathArr[i] : "parentDataProperty") + ", rootData)  ";

                if (s = m.pop(), t) {
                  if (!e.async) throw new Error("async schema referenced by sync schema");
                  c && (s += " var " + h + "; "), s += " try { await " + g + "; ", c && (s += " " + h + " = true; "), s += " } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ", c && (s += " " + h + " = false; "), s += " } ", c && (s += " if (" + h + ") { ");
                } else s += " if (!" + g + ") { if (vErrors === null) vErrors = " + a + ".errors; else vErrors = vErrors.concat(" + a + ".errors); errors = vErrors.length; } ", c && (s += " else { ");
              }

              return s;
            };
          }, {}],
          36: [function (e, r, t) {
            r.exports = function (e, r) {
              var t = " ",
                  a = e.level,
                  s = e.dataLevel,
                  o = e.schema[r],
                  i = e.schemaPath + e.util.getProperty(r),
                  n = e.errSchemaPath + "/" + r,
                  l = !e.opts.allErrors,
                  c = "data" + (s || ""),
                  u = "valid" + a,
                  h = e.opts.$data && o && o.$data,
                  d = (h && (t += " var schema" + a + " = " + e.util.getData(o.$data, s, e.dataPathArr) + "; "), "schema" + a);
              if (!h) if (o.length < e.opts.loopRequired && e.schema.properties && Object.keys(e.schema.properties).length) {
                var p = [],
                    f = o;
                if (f) for (var m, v = -1, y = f.length - 1; v < y;) {
                  m = f[v += 1];
                  var g = e.schema.properties[m];
                  g && (e.opts.strictKeywords ? "object" == typeof g && 0 < Object.keys(g).length : e.util.schemaHasRules(g, e.RULES.all)) || (p[p.length] = m);
                }
              } else p = o;

              if (h || p.length) {
                var P = e.errorPath,
                    E = h || p.length >= e.opts.loopRequired,
                    w = e.opts.ownProperties;
                if (l) {
                  if (t += " var missing" + a + "; ", E) {
                    h || (t += " var " + d + " = validate.schema" + i + "; ");
                    var b = "' + " + ($ = "schema" + a + "[" + (x = "i" + a) + "]") + " + '";
                    e.opts._errorDataPathProperty && (e.errorPath = e.util.getPathExpr(P, $, e.opts.jsonPointers)), t += " var " + u + " = true; ", h && (t += " if (schema" + a + " === undefined) " + u + " = true; else if (!Array.isArray(schema" + a + ")) " + u + " = false; else {"), t += " for (var " + x + " = 0; " + x + " < " + d + ".length; " + x + "++) { " + u + " = " + c + "[" + d + "[" + x + "]] !== undefined ", w && (t += " &&   Object.prototype.hasOwnProperty.call(" + c + ", " + d + "[" + x + "]) "), t += "; if (!" + u + ") break; } ", h && (t += "  }  "), (_ = _ || []).push(t += "  if (!" + u + ") {   "), t = "", !1 !== e.createErrors ? (t += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(n) + " , params: { missingProperty: '" + b + "' } ", !1 !== e.opts.messages && (t += " , message: '", e.opts._errorDataPathProperty ? t += "is a required property" : t += "should have required property \\'" + b + "\\'", t += "' "), e.opts.verbose && (t += " , schema: validate.schema" + i + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + c + " "), t += " } ") : t += " {} ";
                    var S = t;
                    t = _.pop(), !e.compositeRule && l ? e.async ? t += " throw new ValidationError([" + S + "]); " : t += " validate.errors = [" + S + "]; return false; " : t += " var err = " + S + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += " } else { ";
                  } else {
                    t += " if ( ";

                    var _,
                        F = p;

                    if (F) for (var x = -1, R = F.length - 1; x < R;) {
                      D = F[x += 1], x && (t += " || "), t += " ( ( " + (k = c + (A = e.util.getProperty(D))) + " === undefined ", w && (t += " || ! Object.prototype.hasOwnProperty.call(" + c + ", '" + e.util.escapeQuotes(D) + "') "), t += ") && (missing" + a + " = " + e.util.toQuotedString(e.opts.jsonPointers ? D : A) + ") ) ";
                    }
                    t += ") {  ", b = "' + " + ($ = "missing" + a) + " + '", e.opts._errorDataPathProperty && (e.errorPath = e.opts.jsonPointers ? e.util.getPathExpr(P, $, !0) : P + " + " + $), (_ = _ || []).push(t), t = "", !1 !== e.createErrors ? (t += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(n) + " , params: { missingProperty: '" + b + "' } ", !1 !== e.opts.messages && (t += " , message: '", e.opts._errorDataPathProperty ? t += "is a required property" : t += "should have required property \\'" + b + "\\'", t += "' "), e.opts.verbose && (t += " , schema: validate.schema" + i + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + c + " "), t += " } ") : t += " {} ", S = t, t = _.pop(), !e.compositeRule && l ? e.async ? t += " throw new ValidationError([" + S + "]); " : t += " validate.errors = [" + S + "]; return false; " : t += " var err = " + S + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += " } else { ";
                  }
                } else if (E) {
                  var $;
                  h || (t += " var " + d + " = validate.schema" + i + "; "), b = "' + " + ($ = "schema" + a + "[" + (x = "i" + a) + "]") + " + '", e.opts._errorDataPathProperty && (e.errorPath = e.util.getPathExpr(P, $, e.opts.jsonPointers)), h && (t += " if (" + d + " && !Array.isArray(" + d + ")) {  var err =   ", !1 !== e.createErrors ? (t += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(n) + " , params: { missingProperty: '" + b + "' } ", !1 !== e.opts.messages && (t += " , message: '", e.opts._errorDataPathProperty ? t += "is a required property" : t += "should have required property \\'" + b + "\\'", t += "' "), e.opts.verbose && (t += " , schema: validate.schema" + i + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + c + " "), t += " } ") : t += " {} ", t += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (" + d + " !== undefined) { "), t += " for (var " + x + " = 0; " + x + " < " + d + ".length; " + x + "++) { if (" + c + "[" + d + "[" + x + "]] === undefined ", w && (t += " || ! Object.prototype.hasOwnProperty.call(" + c + ", " + d + "[" + x + "]) "), t += ") {  var err =   ", !1 !== e.createErrors ? (t += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(n) + " , params: { missingProperty: '" + b + "' } ", !1 !== e.opts.messages && (t += " , message: '", e.opts._errorDataPathProperty ? t += "is a required property" : t += "should have required property \\'" + b + "\\'", t += "' "), e.opts.verbose && (t += " , schema: validate.schema" + i + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + c + " "), t += " } ") : t += " {} ", t += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ", h && (t += "  }  ");
                } else {
                  var j = p;
                  if (j) for (var D, O = -1, I = j.length - 1; O < I;) {
                    D = j[O += 1];
                    var A = e.util.getProperty(D),
                        k = (b = e.util.escapeQuotes(D), c + A);
                    e.opts._errorDataPathProperty && (e.errorPath = e.util.getPath(P, D, e.opts.jsonPointers)), t += " if ( " + k + " === undefined ", w && (t += " || ! Object.prototype.hasOwnProperty.call(" + c + ", '" + e.util.escapeQuotes(D) + "') "), t += ") {  var err =   ", !1 !== e.createErrors ? (t += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(n) + " , params: { missingProperty: '" + b + "' } ", !1 !== e.opts.messages && (t += " , message: '", e.opts._errorDataPathProperty ? t += "is a required property" : t += "should have required property \\'" + b + "\\'", t += "' "), e.opts.verbose && (t += " , schema: validate.schema" + i + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + c + " "), t += " } ") : t += " {} ", t += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ";
                  }
                }
                e.errorPath = P;
              } else l && (t += " if (true) {");

              return t;
            };
          }, {}],
          37: [function (e, r, t) {
            r.exports = function (e, r) {
              var t,
                  a,
                  s,
                  o,
                  i,
                  n = " ",
                  l = e.level,
                  c = e.dataLevel,
                  u = e.schema[r],
                  h = e.schemaPath + e.util.getProperty(r),
                  d = e.errSchemaPath + "/" + r,
                  p = !e.opts.allErrors,
                  f = "data" + (c || ""),
                  m = "valid" + l,
                  v = e.opts.$data && u && u.$data,
                  y = v ? (n += " var schema" + l + " = " + e.util.getData(u.$data, c, e.dataPathArr) + "; ", "schema" + l) : u;
              return (u || v) && !1 !== e.opts.uniqueItems ? (v && (n += " var " + m + "; if (" + y + " === false || " + y + " === undefined) " + m + " = true; else if (typeof " + y + " != 'boolean') " + m + " = false; else { "), n += " var i = " + f + ".length , " + m + " = true , j; if (i > 1) { ", t = e.schema.items && e.schema.items.type, a = Array.isArray(t), !t || "object" == t || "array" == t || a && (0 <= t.indexOf("object") || 0 <= t.indexOf("array")) ? n += " outer: for (;i--;) { for (j = i; j--;) { if (equal(" + f + "[i], " + f + "[j])) { " + m + " = false; break outer; } } } " : (n += " var itemIndices = {}, item; for (;i--;) { var item = " + f + "[i]; ", s = "checkDataType" + (a ? "s" : ""), n += " if (" + e.util[s](t, "item", e.opts.strictNumbers, !0) + ") continue; ", a && (n += " if (typeof item == 'string') item = '\"' + item; "), n += " if (typeof itemIndices[item] == 'number') { " + m + " = false; j = itemIndices[item]; break; } itemIndices[item] = i; } "), n += " } ", v && (n += "  }  "), (o = o || []).push(n += " if (!" + m + ") {   "), n = "", !1 !== e.createErrors ? (n += " { keyword: 'uniqueItems' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { i: i, j: j } ", !1 !== e.opts.messages && (n += " , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' "), e.opts.verbose && (n += " , schema:  ", n += v ? "validate.schema" + h : "" + u, n += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + f + " "), n += " } ") : n += " {} ", i = n, n = o.pop(), !e.compositeRule && p ? e.async ? n += " throw new ValidationError([" + i + "]); " : n += " validate.errors = [" + i + "]; return false; " : n += " var err = " + i + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", n += " } ", p && (n += " else { ")) : p && (n += " if (true) { "), n;
            };
          }, {}],
          38: [function (e, r, t) {
            r.exports = function (e, r) {
              var t = "",
                  a = !0 === e.schema.$async,
                  s = e.util.schemaHasRulesExcept(e.schema, e.RULES.all, "$ref"),
                  o = e.self._getId(e.schema);

              if (e.opts.strictKeywords) {
                var i = e.util.schemaUnknownRules(e.schema, e.RULES.keywords);

                if (i) {
                  var n = "unknown keyword: " + i;
                  if ("log" !== e.opts.strictKeywords) throw new Error(n);
                  e.logger.warn(n);
                }
              }

              if (e.isTop && (t += " var validate = ", a && (e.async = !0, t += "async "), t += "function(data, dataPath, parentData, parentDataProperty, rootData) { 'use strict'; ", o && (e.opts.sourceCode || e.opts.processCode) && (t += " /*# sourceURL=" + o + " */ ")), "boolean" == typeof e.schema || !s && !e.schema.$ref) {
                r = "false schema";
                var l = e.level,
                    c = e.dataLevel,
                    u = e.schema[r],
                    h = e.schemaPath + e.util.getProperty(r),
                    d = e.errSchemaPath + "/" + r,
                    p = !e.opts.allErrors,
                    f = "data" + (c || ""),
                    m = "valid" + l;
                return !1 === e.schema ? (e.isTop ? p = !0 : t += " var " + m + " = false; ", (H = H || []).push(t), t = "", !1 !== e.createErrors ? (t += " { keyword: 'false schema' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: {} ", !1 !== e.opts.messages && (t += " , message: 'boolean schema is false' "), e.opts.verbose && (t += " , schema: false , parentSchema: validate.schema" + e.schemaPath + " , data: " + f + " "), t += " } ") : t += " {} ", O = t, t = H.pop(), !e.compositeRule && p ? e.async ? t += " throw new ValidationError([" + O + "]); " : t += " validate.errors = [" + O + "]; return false; " : t += " var err = " + O + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ") : e.isTop ? t += a ? " return data; " : " validate.errors = null; return true; " : t += " var " + m + " = true; ", e.isTop && (t += " }; return validate; "), t;
              }

              if (e.isTop) {
                var v = e.isTop;

                if (l = e.level = 0, c = e.dataLevel = 0, f = "data", e.rootId = e.resolve.fullPath(e.self._getId(e.root.schema)), e.baseId = e.baseId || e.rootId, delete e.isTop, e.dataPathArr = [void 0], void 0 !== e.schema["default"] && e.opts.useDefaults && e.opts.strictDefaults) {
                  var y = "default is ignored in the schema root";
                  if ("log" !== e.opts.strictDefaults) throw new Error(y);
                  e.logger.warn(y);
                }

                t += " var vErrors = null; ", t += " var errors = 0;     ", t += " if (rootData === undefined) rootData = data; ";
              } else {
                if (l = e.level, f = "data" + ((c = e.dataLevel) || ""), o && (e.baseId = e.resolve.url(e.baseId, o)), a && !e.async) throw new Error("async schema in sync schema");
                t += " var errs_" + l + " = errors;";
              }

              m = "valid" + l, p = !e.opts.allErrors;
              var g,
                  P = "",
                  E = "",
                  w = e.schema.type,
                  b = Array.isArray(w);

              if (w && e.opts.nullable && !0 === e.schema.nullable && (b ? -1 == w.indexOf("null") && (w = w.concat("null")) : "null" != w && (w = [w, "null"], b = !0)), b && 1 == w.length && (w = w[0], b = !1), e.schema.$ref && s) {
                if ("fail" == e.opts.extendRefs) throw new Error('$ref: validation keywords used in schema at path "' + e.errSchemaPath + '" (see option extendRefs)');
                !0 !== e.opts.extendRefs && (s = !1, e.logger.warn('$ref: keywords ignored in schema at path "' + e.errSchemaPath + '"'));
              }

              if (e.schema.$comment && e.opts.$comment && (t += " " + e.RULES.all.$comment.code(e, "$comment")), w) {
                e.opts.coerceTypes && (g = e.util.coerceToTypes(e.opts.coerceTypes, w));
                var S = e.RULES.types[w];

                if (g || b || !0 === S || S && !G(S)) {
                  h = e.schemaPath + ".type", d = e.errSchemaPath + "/type", h = e.schemaPath + ".type", d = e.errSchemaPath + "/type";

                  var _ = b ? "checkDataTypes" : "checkDataType";

                  if (t += " if (" + e.util[_](w, f, e.opts.strictNumbers, !0) + ") { ", g) {
                    var F = "dataType" + l,
                        x = "coerced" + l;
                    t += " var " + F + " = typeof " + f + "; var " + x + " = undefined; ", "array" == e.opts.coerceTypes && (t += " if (" + F + " == 'object' && Array.isArray(" + f + ") && " + f + ".length == 1) { " + f + " = " + f + "[0]; " + F + " = typeof " + f + "; if (" + e.util.checkDataType(e.schema.type, f, e.opts.strictNumbers) + ") " + x + " = " + f + "; } "), t += " if (" + x + " !== undefined) ; ";
                    var R = g;
                    if (R) for (var $, j = -1, D = R.length - 1; j < D;) {
                      "string" == ($ = R[j += 1]) ? t += " else if (" + F + " == 'number' || " + F + " == 'boolean') " + x + " = '' + " + f + "; else if (" + f + " === null) " + x + " = ''; " : "number" == $ || "integer" == $ ? (t += " else if (" + F + " == 'boolean' || " + f + " === null || (" + F + " == 'string' && " + f + " && " + f + " == +" + f + " ", "integer" == $ && (t += " && !(" + f + " % 1)"), t += ")) " + x + " = +" + f + "; ") : "boolean" == $ ? t += " else if (" + f + " === 'false' || " + f + " === 0 || " + f + " === null) " + x + " = false; else if (" + f + " === 'true' || " + f + " === 1) " + x + " = true; " : "null" == $ ? t += " else if (" + f + " === '' || " + f + " === 0 || " + f + " === false) " + x + " = null; " : "array" == e.opts.coerceTypes && "array" == $ && (t += " else if (" + F + " == 'string' || " + F + " == 'number' || " + F + " == 'boolean' || " + f + " == null) " + x + " = [" + f + "]; ");
                    }
                    (H = H || []).push(t += " else {   "), t = "", !1 !== e.createErrors ? (t += " { keyword: 'type' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { type: '", t += b ? "" + w.join(",") : "" + w, t += "' } ", !1 !== e.opts.messages && (t += " , message: 'should be ", t += b ? "" + w.join(",") : "" + w, t += "' "), e.opts.verbose && (t += " , schema: validate.schema" + h + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + f + " "), t += " } ") : t += " {} ";
                    var O = t;
                    t = H.pop(), !e.compositeRule && p ? e.async ? t += " throw new ValidationError([" + O + "]); " : t += " validate.errors = [" + O + "]; return false; " : t += " var err = " + O + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += " } if (" + x + " !== undefined) {  ";
                    var I = c ? "data" + (c - 1 || "") : "parentData";
                    t += " " + f + " = " + x + "; ", c || (t += "if (" + I + " !== undefined)"), t += " " + I + "[" + (c ? e.dataPathArr[c] : "parentDataProperty") + "] = " + x + "; } ";
                  } else (H = H || []).push(t), t = "", !1 !== e.createErrors ? (t += " { keyword: 'type' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { type: '", t += b ? "" + w.join(",") : "" + w, t += "' } ", !1 !== e.opts.messages && (t += " , message: 'should be ", t += b ? "" + w.join(",") : "" + w, t += "' "), e.opts.verbose && (t += " , schema: validate.schema" + h + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + f + " "), t += " } ") : t += " {} ", O = t, t = H.pop(), !e.compositeRule && p ? e.async ? t += " throw new ValidationError([" + O + "]); " : t += " validate.errors = [" + O + "]; return false; " : t += " var err = " + O + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";

                  t += " } ";
                }
              }

              if (e.schema.$ref && !s) t += " " + e.RULES.all.$ref.code(e, "$ref") + " ", p && (t += " } if (errors === ", t += v ? "0" : "errs_" + l, t += ") { ", E += "}");else {
                var A = e.RULES;
                if (A) for (var k = -1, C = A.length - 1; k < C;) {
                  if (G(S = A[k += 1])) {
                    if (S.type && (t += " if (" + e.util.checkDataType(S.type, f, e.opts.strictNumbers) + ") { "), e.opts.useDefaults) if ("object" == S.type && e.schema.properties) {
                      u = e.schema.properties;
                      var L = Object.keys(u);
                      if (L) for (var N, z = -1, T = L.length - 1; z < T;) {
                        if (void 0 !== (V = u[N = L[z += 1]])["default"]) {
                          var q = f + e.util.getProperty(N);

                          if (e.compositeRule) {
                            if (e.opts.strictDefaults) {
                              if (y = "default is ignored for: " + q, "log" !== e.opts.strictDefaults) throw new Error(y);
                              e.logger.warn(y);
                            }
                          } else t += " if (" + q + " === undefined ", "empty" == e.opts.useDefaults && (t += " || " + q + " === null || " + q + " === '' "), t += " ) " + q + " = ", "shared" == e.opts.useDefaults ? t += " " + e.useDefault(V["default"]) + " " : t += " " + JSON.stringify(V["default"]) + " ", t += "; ";
                        }
                      }
                    } else if ("array" == S.type && Array.isArray(e.schema.items)) {
                      var Q = e.schema.items;

                      if (Q) {
                        j = -1;

                        for (var V, U = Q.length - 1; j < U;) {
                          if (void 0 !== (V = Q[j += 1])["default"]) if (q = f + "[" + j + "]", e.compositeRule) {
                            if (e.opts.strictDefaults) {
                              if (y = "default is ignored for: " + q, "log" !== e.opts.strictDefaults) throw new Error(y);
                              e.logger.warn(y);
                            }
                          } else t += " if (" + q + " === undefined ", "empty" == e.opts.useDefaults && (t += " || " + q + " === null || " + q + " === '' "), t += " ) " + q + " = ", "shared" == e.opts.useDefaults ? t += " " + e.useDefault(V["default"]) + " " : t += " " + JSON.stringify(V["default"]) + " ", t += "; ";
                        }
                      }
                    }
                    var H,
                        K = S.rules;
                    if (K) for (var M, B, J = -1, Z = K.length - 1; J < Z;) {
                      !Y(B = K[J += 1]) || (M = B.code(e, B.keyword, S.type)) && (t += " " + M + " ", p && (P += "}"));
                    }
                    p && (t += " " + P + " ", P = ""), S.type && (t += " } ", w && w === S.type && !g && (t += " else { ", h = e.schemaPath + ".type", d = e.errSchemaPath + "/type", (H = H || []).push(t), t = "", !1 !== e.createErrors ? (t += " { keyword: 'type' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { type: '", t += b ? "" + w.join(",") : "" + w, t += "' } ", !1 !== e.opts.messages && (t += " , message: 'should be ", t += b ? "" + w.join(",") : "" + w, t += "' "), e.opts.verbose && (t += " , schema: validate.schema" + h + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + f + " "), t += " } ") : t += " {} ", O = t, t = H.pop(), !e.compositeRule && p ? e.async ? t += " throw new ValidationError([" + O + "]); " : t += " validate.errors = [" + O + "]; return false; " : t += " var err = " + O + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += " } ")), p && (t += " if (errors === ", t += v ? "0" : "errs_" + l, t += ") { ", E += "}");
                  }
                }
              }

              function G(e) {
                for (var r = e.rules, t = 0; t < r.length; t++) {
                  if (Y(r[t])) return 1;
                }
              }

              function Y(r) {
                return void 0 !== e.schema[r.keyword] || r["implements"] && function (r) {
                  for (var t = r["implements"], a = 0; a < t.length; a++) {
                    if (void 0 !== e.schema[t[a]]) return !0;
                  }
                }(r);
              }

              return p && (t += " " + E + " "), v ? (a ? (t += " if (errors === 0) return data;           ", t += " else throw new ValidationError(vErrors); ") : (t += " validate.errors = vErrors; ", t += " return errors === 0;       "), t += " }; return validate;") : t += " var " + m + " = errors === errs_" + l + ";", t;
            };
          }, {}],
          39: [function (e, r, t) {
            var a = /^[a-z_$][a-z0-9_$-]*$/i,
                s = e("./dotjs/custom"),
                o = e("./definition_schema");

            function i(e, r) {
              i.errors = null;
              var t = this._validateKeyword = this._validateKeyword || this.compile(o, !0);
              if (t(e)) return !0;
              if (i.errors = t.errors, r) throw new Error("custom keyword definition is invalid: " + this.errorsText(t.errors));
              return !1;
            }

            r.exports = {
              add: function add(e, r) {
                var t = this.RULES;
                if (t.keywords[e]) throw new Error("Keyword " + e + " is already defined");
                if (!a.test(e)) throw new Error("Keyword " + e + " is not a valid identifier");

                if (r) {
                  this.validateKeyword(r, !0);
                  var o = r.type;
                  if (Array.isArray(o)) for (var i = 0; i < o.length; i++) {
                    l(e, o[i], r);
                  } else l(e, o, r);
                  var n = r.metaSchema;
                  n && (r.$data && this._opts.$data && (n = {
                    anyOf: [n, {
                      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
                    }]
                  }), r.validateSchema = this.compile(n, !0));
                }

                function l(e, r, a) {
                  for (var o, i = 0; i < t.length; i++) {
                    var n = t[i];

                    if (n.type == r) {
                      o = n;
                      break;
                    }
                  }

                  o || (o = {
                    type: r,
                    rules: []
                  }, t.push(o));
                  var l = {
                    keyword: e,
                    definition: a,
                    custom: !0,
                    code: s,
                    "implements": a["implements"]
                  };
                  o.rules.push(l), t.custom[e] = l;
                }

                return t.keywords[e] = t.all[e] = !0, this;
              },
              get: function get(e) {
                var r = this.RULES.custom[e];
                return r ? r.definition : this.RULES.keywords[e] || !1;
              },
              remove: function remove(e) {
                var r = this.RULES;
                delete r.keywords[e], delete r.all[e], delete r.custom[e];

                for (var t = 0; t < r.length; t++) {
                  for (var a = r[t].rules, s = 0; s < a.length; s++) {
                    if (a[s].keyword == e) {
                      a.splice(s, 1);
                      break;
                    }
                  }
                }

                return this;
              },
              validate: i
            };
          }, {
            "./definition_schema": 12,
            "./dotjs/custom": 22
          }],
          40: [function (e, r, t) {
            r.exports = {
              $schema: "http://json-schema.org/draft-07/schema#",
              $id: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#",
              description: "Meta-schema for $data reference (JSON Schema extension proposal)",
              type: "object",
              required: ["$data"],
              properties: {
                $data: {
                  type: "string",
                  anyOf: [{
                    format: "relative-json-pointer"
                  }, {
                    format: "json-pointer"
                  }]
                }
              },
              additionalProperties: !1
            };
          }, {}],
          41: [function (e, r, t) {
            r.exports = {
              $schema: "http://json-schema.org/draft-07/schema#",
              $id: "http://json-schema.org/draft-07/schema#",
              title: "Core schema meta-schema",
              definitions: {
                schemaArray: {
                  type: "array",
                  minItems: 1,
                  items: {
                    $ref: "#"
                  }
                },
                nonNegativeInteger: {
                  type: "integer",
                  minimum: 0
                },
                nonNegativeIntegerDefault0: {
                  allOf: [{
                    $ref: "#/definitions/nonNegativeInteger"
                  }, {
                    "default": 0
                  }]
                },
                simpleTypes: {
                  "enum": ["array", "boolean", "integer", "null", "number", "object", "string"]
                },
                stringArray: {
                  type: "array",
                  items: {
                    type: "string"
                  },
                  uniqueItems: !0,
                  "default": []
                }
              },
              type: ["object", "boolean"],
              properties: {
                $id: {
                  type: "string",
                  format: "uri-reference"
                },
                $schema: {
                  type: "string",
                  format: "uri"
                },
                $ref: {
                  type: "string",
                  format: "uri-reference"
                },
                $comment: {
                  type: "string"
                },
                title: {
                  type: "string"
                },
                description: {
                  type: "string"
                },
                "default": !0,
                readOnly: {
                  type: "boolean",
                  "default": !1
                },
                examples: {
                  type: "array",
                  items: !0
                },
                multipleOf: {
                  type: "number",
                  exclusiveMinimum: 0
                },
                maximum: {
                  type: "number"
                },
                exclusiveMaximum: {
                  type: "number"
                },
                minimum: {
                  type: "number"
                },
                exclusiveMinimum: {
                  type: "number"
                },
                maxLength: {
                  $ref: "#/definitions/nonNegativeInteger"
                },
                minLength: {
                  $ref: "#/definitions/nonNegativeIntegerDefault0"
                },
                pattern: {
                  type: "string",
                  format: "regex"
                },
                additionalItems: {
                  $ref: "#"
                },
                items: {
                  anyOf: [{
                    $ref: "#"
                  }, {
                    $ref: "#/definitions/schemaArray"
                  }],
                  "default": !0
                },
                maxItems: {
                  $ref: "#/definitions/nonNegativeInteger"
                },
                minItems: {
                  $ref: "#/definitions/nonNegativeIntegerDefault0"
                },
                uniqueItems: {
                  type: "boolean",
                  "default": !1
                },
                contains: {
                  $ref: "#"
                },
                maxProperties: {
                  $ref: "#/definitions/nonNegativeInteger"
                },
                minProperties: {
                  $ref: "#/definitions/nonNegativeIntegerDefault0"
                },
                required: {
                  $ref: "#/definitions/stringArray"
                },
                additionalProperties: {
                  $ref: "#"
                },
                definitions: {
                  type: "object",
                  additionalProperties: {
                    $ref: "#"
                  },
                  "default": {}
                },
                properties: {
                  type: "object",
                  additionalProperties: {
                    $ref: "#"
                  },
                  "default": {}
                },
                patternProperties: {
                  type: "object",
                  additionalProperties: {
                    $ref: "#"
                  },
                  propertyNames: {
                    format: "regex"
                  },
                  "default": {}
                },
                dependencies: {
                  type: "object",
                  additionalProperties: {
                    anyOf: [{
                      $ref: "#"
                    }, {
                      $ref: "#/definitions/stringArray"
                    }]
                  }
                },
                propertyNames: {
                  $ref: "#"
                },
                "const": !0,
                "enum": {
                  type: "array",
                  items: !0,
                  minItems: 1,
                  uniqueItems: !0
                },
                type: {
                  anyOf: [{
                    $ref: "#/definitions/simpleTypes"
                  }, {
                    type: "array",
                    items: {
                      $ref: "#/definitions/simpleTypes"
                    },
                    minItems: 1,
                    uniqueItems: !0
                  }]
                },
                format: {
                  type: "string"
                },
                contentMediaType: {
                  type: "string"
                },
                contentEncoding: {
                  type: "string"
                },
                "if": {
                  $ref: "#"
                },
                then: {
                  $ref: "#"
                },
                "else": {
                  $ref: "#"
                },
                allOf: {
                  $ref: "#/definitions/schemaArray"
                },
                anyOf: {
                  $ref: "#/definitions/schemaArray"
                },
                oneOf: {
                  $ref: "#/definitions/schemaArray"
                },
                not: {
                  $ref: "#"
                }
              },
              "default": !0
            };
          }, {}],
          42: [function (e, r, t) {
            r.exports = function e(r, t) {
              if (r === t) return !0;

              if (r && t && "object" == typeof r && "object" == typeof t) {
                if (r.constructor !== t.constructor) return !1;
                var a, s, o;

                if (Array.isArray(r)) {
                  if ((a = r.length) != t.length) return !1;

                  for (s = a; 0 != s--;) {
                    if (!e(r[s], t[s])) return !1;
                  }

                  return !0;
                }

                if (r.constructor === RegExp) return r.source === t.source && r.flags === t.flags;
                if (r.valueOf !== Object.prototype.valueOf) return r.valueOf() === t.valueOf();
                if (r.toString !== Object.prototype.toString) return r.toString() === t.toString();
                if ((a = (o = Object.keys(r)).length) !== Object.keys(t).length) return !1;

                for (s = a; 0 != s--;) {
                  if (!Object.prototype.hasOwnProperty.call(t, o[s])) return !1;
                }

                for (s = a; 0 != s--;) {
                  var i = o[s];
                  if (!e(r[i], t[i])) return !1;
                }

                return !0;
              }

              return r != r && t != t;
            };
          }, {}],
          43: [function (e, r, t) {
            r.exports = function (e, r) {
              "function" == typeof (r = r || {}) && (r = {
                cmp: r
              });
              var t,
                  a = "boolean" == typeof r.cycles && r.cycles,
                  s = r.cmp && (t = r.cmp, function (e) {
                return function (r, a) {
                  var s = {
                    key: r,
                    value: e[r]
                  },
                      o = {
                    key: a,
                    value: e[a]
                  };
                  return t(s, o);
                };
              }),
                  o = [];
              return function e(r) {
                if (r && r.toJSON && "function" == typeof r.toJSON && (r = r.toJSON()), void 0 !== r) {
                  if ("number" == typeof r) return isFinite(r) ? "" + r : "null";
                  if ("object" != typeof r) return JSON.stringify(r);

                  if (Array.isArray(r)) {
                    for (n = "[", l = 0; l < r.length; l++) {
                      l && (n += ","), n += e(r[l]) || "null";
                    }

                    return n + "]";
                  }

                  if (null === r) return "null";

                  if (-1 !== o.indexOf(r)) {
                    if (a) return JSON.stringify("__cycle__");
                    throw new TypeError("Converting circular structure to JSON");
                  }

                  for (var t = o.push(r) - 1, i = Object.keys(r).sort(s && s(r)), n = "", l = 0; l < i.length; l++) {
                    var c = i[l],
                        u = e(r[c]);
                    u && (n && (n += ","), n += JSON.stringify(c) + ":" + u);
                  }

                  return o.splice(t, 1), "{" + n + "}";
                }
              }(e);
            };
          }, {}],
          44: [function (e, r, t) {
            var a = r.exports = function (e, r, t) {
              "function" == typeof r && (t = r, r = {}), function e(r, t, s, o, i, n, l, c, u, h) {
                if (o && "object" == typeof o && !Array.isArray(o)) {
                  for (var d in t(o, i, n, l, c, u, h), o) {
                    var p = o[d];

                    if (Array.isArray(p)) {
                      if (d in a.arrayKeywords) for (var f = 0; f < p.length; f++) {
                        e(r, t, s, p[f], i + "/" + d + "/" + f, n, i, d, o, f);
                      }
                    } else if (d in a.propsKeywords) {
                      if (p && "object" == typeof p) for (var m in p) {
                        e(r, t, s, p[m], i + "/" + d + "/" + m.replace(/~/g, "~0").replace(/\//g, "~1"), n, i, d, o, m);
                      }
                    } else (d in a.keywords || r.allKeys && !(d in a.skipKeywords)) && e(r, t, s, p, i + "/" + d, n, i, d, o);
                  }

                  s(o, i, n, l, c, u, h);
                }
              }(r, "function" == typeof (t = r.cb || t) ? t : t.pre || function () {}, t.post || function () {}, e, "", e);
            };

            a.keywords = {
              additionalItems: !0,
              items: !0,
              contains: !0,
              additionalProperties: !0,
              propertyNames: !0,
              not: !0
            }, a.arrayKeywords = {
              items: !0,
              allOf: !0,
              anyOf: !0,
              oneOf: !0
            }, a.propsKeywords = {
              definitions: !0,
              properties: !0,
              patternProperties: !0,
              dependencies: !0
            }, a.skipKeywords = {
              "default": !0,
              "enum": !0,
              "const": !0,
              required: !0,
              maximum: !0,
              minimum: !0,
              exclusiveMaximum: !0,
              exclusiveMinimum: !0,
              multipleOf: !0,
              maxLength: !0,
              minLength: !0,
              pattern: !0,
              format: !0,
              maxItems: !0,
              minItems: !0,
              uniqueItems: !0,
              maxProperties: !0,
              minProperties: !0
            };
          }, {}],
          45: [function (e, r, t) {
            var a;
            a = this, function (e) {
              function r() {
                for (var e = arguments.length, r = Array(e), t = 0; t < e; t++) {
                  r[t] = arguments[t];
                }

                if (1 < r.length) {
                  r[0] = r[0].slice(0, -1);

                  for (var a = r.length - 1, s = 1; s < a; ++s) {
                    r[s] = r[s].slice(1, -1);
                  }

                  return r[a] = r[a].slice(1), r.join("");
                }

                return r[0];
              }

              function t(e) {
                return "(?:" + e + ")";
              }

              function a(e) {
                return void 0 === e ? "undefined" : null === e ? "null" : Object.prototype.toString.call(e).split(" ").pop().split("]").shift().toLowerCase();
              }

              function s(e) {
                return e.toUpperCase();
              }

              function o(e) {
                var a = "[A-Za-z]",
                    s = "[0-9]",
                    o = r(s, "[A-Fa-f]"),
                    i = t(t("%[EFef]" + o + "%" + o + o + "%" + o + o) + "|" + t("%[89A-Fa-f]" + o + "%" + o + o) + "|" + t("%" + o + o)),
                    n = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]",
                    l = r("[\\:\\/\\?\\#\\[\\]\\@]", n),
                    c = e ? "[\\uE000-\\uF8FF]" : "[]",
                    u = r(a, s, "[\\-\\.\\_\\~]", e ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]" : "[]"),
                    h = (t(a + r(a, s, "[\\+\\-\\.]") + "*"), t(t(i + "|" + r(u, n, "[\\:]")) + "*"), t("(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9][0-9])|(?:0?[1-9][0-9])|0?0?" + s)),
                    d = t(h + "\\." + h + "\\." + h + "\\." + h),
                    p = t(o + "{1,4}"),
                    f = t(t(p + "\\:" + p) + "|" + d),
                    m = t(t(p + "\\:") + "{6}" + f),
                    v = t("\\:\\:" + t(p + "\\:") + "{5}" + f),
                    y = t(t(p) + "?\\:\\:" + t(p + "\\:") + "{4}" + f),
                    g = t(t(t(p + "\\:") + "{0,1}" + p) + "?\\:\\:" + t(p + "\\:") + "{3}" + f),
                    P = t(t(t(p + "\\:") + "{0,2}" + p) + "?\\:\\:" + t(p + "\\:") + "{2}" + f),
                    E = t(t(t(p + "\\:") + "{0,3}" + p) + "?\\:\\:" + p + "\\:" + f),
                    w = t(t(t(p + "\\:") + "{0,4}" + p) + "?\\:\\:" + f),
                    b = t(t(t(p + "\\:") + "{0,5}" + p) + "?\\:\\:" + p),
                    S = t(t(t(p + "\\:") + "{0,6}" + p) + "?\\:\\:"),
                    _ = t([m, v, y, g, P, E, w, b, S].join("|")),
                    F = t(t(u + "|" + i) + "+"),
                    x = (t("[vV]" + o + "+\\." + r(u, n, "[\\:]") + "+"), t(t(i + "|" + r(u, n)) + "*"), t(i + "|" + r(u, n, "[\\:\\@]")));

                return t(t(i + "|" + r(u, n, "[\\@]")) + "+"), t(t(x + "|" + r("[\\/\\?]", c)) + "*"), {
                  NOT_SCHEME: new RegExp(r("[^]", a, s, "[\\+\\-\\.]"), "g"),
                  NOT_USERINFO: new RegExp(r("[^\\%\\:]", u, n), "g"),
                  NOT_HOST: new RegExp(r("[^\\%\\[\\]\\:]", u, n), "g"),
                  NOT_PATH: new RegExp(r("[^\\%\\/\\:\\@]", u, n), "g"),
                  NOT_PATH_NOSCHEME: new RegExp(r("[^\\%\\/\\@]", u, n), "g"),
                  NOT_QUERY: new RegExp(r("[^\\%]", u, n, "[\\:\\@\\/\\?]", c), "g"),
                  NOT_FRAGMENT: new RegExp(r("[^\\%]", u, n, "[\\:\\@\\/\\?]"), "g"),
                  ESCAPE: new RegExp(r("[^]", u, n), "g"),
                  UNRESERVED: new RegExp(u, "g"),
                  OTHER_CHARS: new RegExp(r("[^\\%]", u, l), "g"),
                  PCT_ENCODED: new RegExp(i, "g"),
                  IPV4ADDRESS: new RegExp("^(" + d + ")$"),
                  IPV6ADDRESS: new RegExp("^\\[?(" + _ + ")" + t(t("\\%25|\\%(?!" + o + "{2})") + "(" + F + ")") + "?\\]?$")
                };
              }

              var i = o(!1),
                  n = o(!0),
                  l = function l(e, r) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return function (e, r) {
                  var t = [],
                      a = !0,
                      s = !1,
                      o = void 0;

                  try {
                    for (var i, n = e[Symbol.iterator](); !(a = (i = n.next()).done) && (t.push(i.value), !r || t.length !== r); a = !0) {
                      ;
                    }
                  } catch (e) {
                    s = !0, o = e;
                  } finally {
                    try {
                      !a && n["return"] && n["return"]();
                    } finally {
                      if (s) throw o;
                    }
                  }

                  return t;
                }(e, r);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
              },
                  c = 2147483647,
                  u = /^xn--/,
                  h = /[^\0-\x7E]/,
                  d = /[\x2E\u3002\uFF0E\uFF61]/g,
                  p = {
                overflow: "Overflow: input needs wider integers to process",
                "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                "invalid-input": "Invalid input"
              },
                  f = Math.floor,
                  m = String.fromCharCode;

              function v(e) {
                throw new RangeError(p[e]);
              }

              function y(e, r) {
                var t = e.split("@"),
                    a = "";
                return 1 < t.length && (a = t[0] + "@", e = t[1]), a + function (e, r) {
                  for (var t = [], a = e.length; a--;) {
                    t[a] = r(e[a]);
                  }

                  return t;
                }((e = e.replace(d, ".")).split("."), r).join(".");
              }

              function g(e) {
                for (var r = [], t = 0, a = e.length; t < a;) {
                  var s,
                      o = e.charCodeAt(t++);
                  55296 <= o && o <= 56319 && t < a ? 56320 == (64512 & (s = e.charCodeAt(t++))) ? r.push(((1023 & o) << 10) + (1023 & s) + 65536) : (r.push(o), t--) : r.push(o);
                }

                return r;
              }

              function P(e, r) {
                return e + 22 + 75 * (e < 26) - ((0 != r) << 5);
              }

              function E(e, r, t) {
                var a = 0;

                for (e = t ? f(e / 700) : e >> 1, e += f(e / r); 455 < e; a += 36) {
                  e = f(e / 35);
                }

                return f(a + 36 * e / (e + 38));
              }

              function w(e) {
                var r = [],
                    t = e.length,
                    a = 0,
                    s = 128,
                    o = 72,
                    i = e.lastIndexOf("-");
                i < 0 && (i = 0);

                for (var n = 0; n < i; ++n) {
                  128 <= e.charCodeAt(n) && v("not-basic"), r.push(e.charCodeAt(n));
                }

                for (var l, u = 0 < i ? i + 1 : 0; u < t;) {
                  for (var h = a, d = 1, p = 36;; p += 36) {
                    t <= u && v("invalid-input");
                    var m = (l = e.charCodeAt(u++)) - 48 < 10 ? l - 22 : l - 65 < 26 ? l - 65 : l - 97 < 26 ? l - 97 : 36;
                    (36 <= m || m > f((c - a) / d)) && v("overflow"), a += m * d;
                    var y = p <= o ? 1 : o + 26 <= p ? 26 : p - o;
                    if (m < y) break;
                    var g = 36 - y;
                    d > f(c / g) && v("overflow"), d *= g;
                  }

                  var P = r.length + 1;
                  o = E(a - h, P, 0 == h), f(a / P) > c - s && v("overflow"), s += f(a / P), a %= P, r.splice(a++, 0, s);
                }

                return String.fromCodePoint.apply(String, r);
              }

              function b(e) {
                var r = [],
                    t = (e = g(e)).length,
                    a = 128,
                    s = 0,
                    o = 72,
                    i = !0,
                    n = !1,
                    l = void 0;

                try {
                  for (var u, h = e[Symbol.iterator](); !(i = (u = h.next()).done); i = !0) {
                    var d = u.value;
                    d < 128 && r.push(m(d));
                  }
                } catch (e) {
                  n = !0, l = e;
                } finally {
                  try {
                    !i && h["return"] && h["return"]();
                  } finally {
                    if (n) throw l;
                  }
                }

                var p = r.length,
                    y = p;

                for (p && r.push("-"); y < t;) {
                  var w = c,
                      b = !0,
                      S = !1,
                      _ = void 0;

                  try {
                    for (var F, x = e[Symbol.iterator](); !(b = (F = x.next()).done); b = !0) {
                      var R = F.value;
                      a <= R && R < w && (w = R);
                    }
                  } catch (e) {
                    S = !0, _ = e;
                  } finally {
                    try {
                      !b && x["return"] && x["return"]();
                    } finally {
                      if (S) throw _;
                    }
                  }

                  var $ = y + 1;
                  w - a > f((c - s) / $) && v("overflow"), s += (w - a) * $, a = w;
                  var j = !0,
                      D = !1,
                      O = void 0;

                  try {
                    for (var I, A = e[Symbol.iterator](); !(j = (I = A.next()).done); j = !0) {
                      var k = I.value;

                      if (k < a && ++s > c && v("overflow"), k == a) {
                        for (var C = s, L = 36;; L += 36) {
                          var N = L <= o ? 1 : o + 26 <= L ? 26 : L - o;
                          if (C < N) break;
                          var z = C - N,
                              T = 36 - N;
                          r.push(m(P(N + z % T, 0))), C = f(z / T);
                        }

                        r.push(m(P(C, 0))), o = E(s, $, y == p), s = 0, ++y;
                      }
                    }
                  } catch (e) {
                    D = !0, O = e;
                  } finally {
                    try {
                      !j && A["return"] && A["return"]();
                    } finally {
                      if (D) throw O;
                    }
                  }

                  ++s, ++a;
                }

                return r.join("");
              }

              var S = {
                version: "2.1.0",
                ucs2: {
                  decode: g,
                  encode: function encode(e) {
                    return String.fromCodePoint.apply(String, function (e) {
                      if (Array.isArray(e)) {
                        for (var r = 0, t = Array(e.length); r < e.length; r++) {
                          t[r] = e[r];
                        }

                        return t;
                      }

                      return Array.from(e);
                    }(e));
                  }
                },
                decode: w,
                encode: b,
                toASCII: function toASCII(e) {
                  return y(e, function (e) {
                    return h.test(e) ? "xn--" + b(e) : e;
                  });
                },
                toUnicode: function toUnicode(e) {
                  return y(e, function (e) {
                    return u.test(e) ? w(e.slice(4).toLowerCase()) : e;
                  });
                }
              },
                  _ = {};

              function F(e) {
                var r = e.charCodeAt(0);
                return r < 16 ? "%0" + r.toString(16).toUpperCase() : r < 128 ? "%" + r.toString(16).toUpperCase() : r < 2048 ? "%" + (r >> 6 | 192).toString(16).toUpperCase() + "%" + (63 & r | 128).toString(16).toUpperCase() : "%" + (r >> 12 | 224).toString(16).toUpperCase() + "%" + (r >> 6 & 63 | 128).toString(16).toUpperCase() + "%" + (63 & r | 128).toString(16).toUpperCase();
              }

              function x(e) {
                for (var r = "", t = 0, a = e.length; t < a;) {
                  var s,
                      o,
                      i,
                      n = parseInt(e.substr(t + 1, 2), 16);
                  n < 128 ? (r += String.fromCharCode(n), t += 3) : 194 <= n && n < 224 ? (6 <= a - t ? (s = parseInt(e.substr(t + 4, 2), 16), r += String.fromCharCode((31 & n) << 6 | 63 & s)) : r += e.substr(t, 6), t += 6) : 224 <= n ? (9 <= a - t ? (o = parseInt(e.substr(t + 4, 2), 16), i = parseInt(e.substr(t + 7, 2), 16), r += String.fromCharCode((15 & n) << 12 | (63 & o) << 6 | 63 & i)) : r += e.substr(t, 9), t += 9) : (r += e.substr(t, 3), t += 3);
                }

                return r;
              }

              function R(e, r) {
                function t(e) {
                  var t = x(e);
                  return t.match(r.UNRESERVED) ? t : e;
                }

                return e.scheme && (e.scheme = String(e.scheme).replace(r.PCT_ENCODED, t).toLowerCase().replace(r.NOT_SCHEME, "")), void 0 !== e.userinfo && (e.userinfo = String(e.userinfo).replace(r.PCT_ENCODED, t).replace(r.NOT_USERINFO, F).replace(r.PCT_ENCODED, s)), void 0 !== e.host && (e.host = String(e.host).replace(r.PCT_ENCODED, t).toLowerCase().replace(r.NOT_HOST, F).replace(r.PCT_ENCODED, s)), void 0 !== e.path && (e.path = String(e.path).replace(r.PCT_ENCODED, t).replace(e.scheme ? r.NOT_PATH : r.NOT_PATH_NOSCHEME, F).replace(r.PCT_ENCODED, s)), void 0 !== e.query && (e.query = String(e.query).replace(r.PCT_ENCODED, t).replace(r.NOT_QUERY, F).replace(r.PCT_ENCODED, s)), void 0 !== e.fragment && (e.fragment = String(e.fragment).replace(r.PCT_ENCODED, t).replace(r.NOT_FRAGMENT, F).replace(r.PCT_ENCODED, s)), e;
              }

              function $(e) {
                return e.replace(/^0*(.*)/, "$1") || "0";
              }

              function j(e, r) {
                var t = e.match(r.IPV4ADDRESS) || [],
                    a = l(t, 2)[1];
                return a ? a.split(".").map($).join(".") : e;
              }

              function D(e, r) {
                var t = e.match(r.IPV6ADDRESS) || [],
                    a = l(t, 3),
                    s = a[1],
                    o = a[2];

                if (s) {
                  for (var i = s.toLowerCase().split("::").reverse(), n = l(i, 2), c = n[0], u = n[1], h = u ? u.split(":").map($) : [], d = c.split(":").map($), p = r.IPV4ADDRESS.test(d[d.length - 1]), f = p ? 7 : 8, m = d.length - f, v = Array(f), y = 0; y < f; ++y) {
                    v[y] = h[y] || d[m + y] || "";
                  }

                  p && (v[f - 1] = j(v[f - 1], r));
                  var g,
                      P,
                      E = v.reduce(function (e, r, t) {
                    var a;
                    return r && "0" !== r || ((a = e[e.length - 1]) && a.index + a.length === t ? a.length++ : e.push({
                      index: t,
                      length: 1
                    })), e;
                  }, []).sort(function (e, r) {
                    return r.length - e.length;
                  })[0],
                      w = void 0;
                  return w = E && 1 < E.length ? (g = v.slice(0, E.index), P = v.slice(E.index + E.length), g.join(":") + "::" + P.join(":")) : v.join(":"), o && (w += "%" + o), w;
                }

                return e;
              }

              var O = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i,
                  I = void 0 === "".match(/(){0}/)[1];

              function A(e) {
                var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                    t = {},
                    a = !1 !== r.iri ? n : i;
                "suffix" === r.reference && (e = (r.scheme ? r.scheme + ":" : "") + "//" + e);
                var s = e.match(O);

                if (s) {
                  I ? (t.scheme = s[1], t.userinfo = s[3], t.host = s[4], t.port = parseInt(s[5], 10), t.path = s[6] || "", t.query = s[7], t.fragment = s[8], isNaN(t.port) && (t.port = s[5])) : (t.scheme = s[1] || void 0, t.userinfo = -1 !== e.indexOf("@") ? s[3] : void 0, t.host = -1 !== e.indexOf("//") ? s[4] : void 0, t.port = parseInt(s[5], 10), t.path = s[6] || "", t.query = -1 !== e.indexOf("?") ? s[7] : void 0, t.fragment = -1 !== e.indexOf("#") ? s[8] : void 0, isNaN(t.port) && (t.port = e.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? s[4] : void 0)), t.host && (t.host = D(j(t.host, a), a)), void 0 !== t.scheme || void 0 !== t.userinfo || void 0 !== t.host || void 0 !== t.port || t.path || void 0 !== t.query ? void 0 === t.scheme ? t.reference = "relative" : void 0 === t.fragment ? t.reference = "absolute" : t.reference = "uri" : t.reference = "same-document", r.reference && "suffix" !== r.reference && r.reference !== t.reference && (t.error = t.error || "URI is not a " + r.reference + " reference.");

                  var o = _[(r.scheme || t.scheme || "").toLowerCase()];

                  if (r.unicodeSupport || o && o.unicodeSupport) R(t, a);else {
                    if (t.host && (r.domainHost || o && o.domainHost)) try {
                      t.host = S.toASCII(t.host.replace(a.PCT_ENCODED, x).toLowerCase());
                    } catch (e) {
                      t.error = t.error || "Host's domain name can not be converted to ASCII via punycode: " + e;
                    }
                    R(t, i);
                  }
                  o && o.parse && o.parse(t, r);
                } else t.error = t.error || "URI can not be parsed.";

                return t;
              }

              var k = /^\.\.?\//,
                  C = /^\/\.(\/|$)/,
                  L = /^\/\.\.(\/|$)/,
                  N = /^\/?(?:.|\n)*?(?=\/|$)/;

              function z(e) {
                for (var r = []; e.length;) {
                  if (e.match(k)) e = e.replace(k, "");else if (e.match(C)) e = e.replace(C, "/");else if (e.match(L)) e = e.replace(L, "/"), r.pop();else if ("." === e || ".." === e) e = "";else {
                    var t = e.match(N);
                    if (!t) throw new Error("Unexpected dot segment condition");
                    var a = t[0];
                    e = e.slice(a.length), r.push(a);
                  }
                }

                return r.join("");
              }

              function T(e) {
                var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                    t = r.iri ? n : i,
                    a = [],
                    s = _[(r.scheme || e.scheme || "").toLowerCase()];

                if (s && s.serialize && s.serialize(e, r), e.host && !t.IPV6ADDRESS.test(e.host) && (r.domainHost || s && s.domainHost)) try {
                  e.host = r.iri ? S.toUnicode(e.host) : S.toASCII(e.host.replace(t.PCT_ENCODED, x).toLowerCase());
                } catch (t) {
                  e.error = e.error || "Host's domain name can not be converted to " + (r.iri ? "Unicode" : "ASCII") + " via punycode: " + t;
                }
                R(e, t), "suffix" !== r.reference && e.scheme && (a.push(e.scheme), a.push(":"));
                var o,
                    l,
                    c,
                    u,
                    h = (o = e, l = !1 !== r.iri ? n : i, c = [], void 0 !== o.userinfo && (c.push(o.userinfo), c.push("@")), void 0 !== o.host && c.push(D(j(String(o.host), l), l).replace(l.IPV6ADDRESS, function (e, r, t) {
                  return "[" + r + (t ? "%25" + t : "") + "]";
                })), "number" == typeof o.port && (c.push(":"), c.push(o.port.toString(10))), c.length ? c.join("") : void 0);
                return void 0 !== h && ("suffix" !== r.reference && a.push("//"), a.push(h), e.path && "/" !== e.path.charAt(0) && a.push("/")), void 0 !== e.path && (u = e.path, r.absolutePath || s && s.absolutePath || (u = z(u)), void 0 === h && (u = u.replace(/^\/\//, "/%2F")), a.push(u)), void 0 !== e.query && (a.push("?"), a.push(e.query)), void 0 !== e.fragment && (a.push("#"), a.push(e.fragment)), a.join("");
              }

              function q(e, r) {
                var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                    a = {};
                return arguments[3] || (e = A(T(e, t), t), r = A(T(r, t), t)), !(t = t || {}).tolerant && r.scheme ? (a.scheme = r.scheme, a.userinfo = r.userinfo, a.host = r.host, a.port = r.port, a.path = z(r.path || ""), a.query = r.query) : (void 0 !== r.userinfo || void 0 !== r.host || void 0 !== r.port ? (a.userinfo = r.userinfo, a.host = r.host, a.port = r.port, a.path = z(r.path || ""), a.query = r.query) : (r.path ? ("/" === r.path.charAt(0) ? a.path = z(r.path) : (void 0 === e.userinfo && void 0 === e.host && void 0 === e.port || e.path ? e.path ? a.path = e.path.slice(0, e.path.lastIndexOf("/") + 1) + r.path : a.path = r.path : a.path = "/" + r.path, a.path = z(a.path)), a.query = r.query) : (a.path = e.path, void 0 !== r.query ? a.query = r.query : a.query = e.query), a.userinfo = e.userinfo, a.host = e.host, a.port = e.port), a.scheme = e.scheme), a.fragment = r.fragment, a;
              }

              function Q(e, r) {
                return e && e.toString().replace(r && r.iri ? n.PCT_ENCODED : i.PCT_ENCODED, x);
              }

              var V = {
                scheme: "http",
                domainHost: !0,
                parse: function parse(e) {
                  return e.host || (e.error = e.error || "HTTP URIs must have a host."), e;
                },
                serialize: function serialize(e) {
                  return e.port !== ("https" !== String(e.scheme).toLowerCase() ? 80 : 443) && "" !== e.port || (e.port = void 0), e.path || (e.path = "/"), e;
                }
              },
                  U = {
                scheme: "https",
                domainHost: V.domainHost,
                parse: V.parse,
                serialize: V.serialize
              },
                  H = {},
                  K = "[A-Za-z0-9\\-\\.\\_\\~\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]",
                  M = r("[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]", '[\\"\\\\]'),
                  B = new RegExp(K, "g"),
                  J = new RegExp("(?:(?:%[EFef][0-9A-Fa-f]%[0-9A-Fa-f][0-9A-Fa-f]%[0-9A-Fa-f][0-9A-Fa-f])|(?:%[89A-Fa-f][0-9A-Fa-f]%[0-9A-Fa-f][0-9A-Fa-f])|(?:%[0-9A-Fa-f][0-9A-Fa-f]))", "g"),
                  Z = new RegExp(r("[^]", "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]", "[\\.]", '[\\"]', M), "g"),
                  G = new RegExp(r("[^]", K, "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]"), "g"),
                  Y = G;

              function W(e) {
                var r = x(e);
                return r.match(B) ? r : e;
              }

              var X = {
                scheme: "mailto",
                parse: function parse(e, r) {
                  var t = e,
                      a = t.to = t.path ? t.path.split(",") : [];

                  if (t.path = void 0, t.query) {
                    for (var s = !1, o = {}, i = t.query.split("&"), n = 0, l = i.length; n < l; ++n) {
                      var c = i[n].split("=");

                      switch (c[0]) {
                        case "to":
                          for (var u = c[1].split(","), h = 0, d = u.length; h < d; ++h) {
                            a.push(u[h]);
                          }

                          break;

                        case "subject":
                          t.subject = Q(c[1], r);
                          break;

                        case "body":
                          t.body = Q(c[1], r);
                          break;

                        default:
                          s = !0, o[Q(c[0], r)] = Q(c[1], r);
                      }
                    }

                    s && (t.headers = o);
                  }

                  t.query = void 0;

                  for (var p = 0, f = a.length; p < f; ++p) {
                    var m = a[p].split("@");
                    if (m[0] = Q(m[0]), r.unicodeSupport) m[1] = Q(m[1], r).toLowerCase();else try {
                      m[1] = S.toASCII(Q(m[1], r).toLowerCase());
                    } catch (e) {
                      t.error = t.error || "Email address's domain name can not be converted to ASCII via punycode: " + e;
                    }
                    a[p] = m.join("@");
                  }

                  return t;
                },
                serialize: function serialize(e, r) {
                  var t,
                      a = e,
                      o = null != (t = e.to) ? t instanceof Array ? t : "number" != typeof t.length || t.split || t.setInterval || t.call ? [t] : Array.prototype.slice.call(t) : [];

                  if (o) {
                    for (var i = 0, n = o.length; i < n; ++i) {
                      var l = String(o[i]),
                          c = l.lastIndexOf("@"),
                          u = l.slice(0, c).replace(J, W).replace(J, s).replace(Z, F),
                          h = l.slice(c + 1);

                      try {
                        h = r.iri ? S.toUnicode(h) : S.toASCII(Q(h, r).toLowerCase());
                      } catch (e) {
                        a.error = a.error || "Email address's domain name can not be converted to " + (r.iri ? "Unicode" : "ASCII") + " via punycode: " + e;
                      }

                      o[i] = u + "@" + h;
                    }

                    a.path = o.join(",");
                  }

                  var d = e.headers = e.headers || {};
                  e.subject && (d.subject = e.subject), e.body && (d.body = e.body);
                  var p = [];

                  for (var f in d) {
                    d[f] !== H[f] && p.push(f.replace(J, W).replace(J, s).replace(G, F) + "=" + d[f].replace(J, W).replace(J, s).replace(Y, F));
                  }

                  return p.length && (a.query = p.join("&")), a;
                }
              },
                  ee = /^([^\:]+)\:(.*)/,
                  re = {
                scheme: "urn",
                parse: function parse(e, r) {
                  var t,
                      a,
                      s,
                      o,
                      i,
                      n = e.path && e.path.match(ee),
                      l = e;
                  return n ? (t = r.scheme || l.scheme || "urn", a = n[1].toLowerCase(), s = n[2], o = t + ":" + (r.nid || a), i = _[o], l.nid = a, l.nss = s, l.path = void 0, i && (l = i.parse(l, r))) : l.error = l.error || "URN can not be parsed.", l;
                },
                serialize: function serialize(e, r) {
                  var t = r.scheme || e.scheme || "urn",
                      a = e.nid,
                      s = t + ":" + (r.nid || a),
                      o = _[s];
                  o && (e = o.serialize(e, r));
                  var i = e,
                      n = e.nss;
                  return i.path = (a || r.nid) + ":" + n, i;
                }
              },
                  te = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/,
                  ae = {
                scheme: "urn:uuid",
                parse: function parse(e, r) {
                  var t = e;
                  return t.uuid = t.nss, t.nss = void 0, r.tolerant || t.uuid && t.uuid.match(te) || (t.error = t.error || "UUID is not valid."), t;
                },
                serialize: function serialize(e) {
                  var r = e;
                  return r.nss = (e.uuid || "").toLowerCase(), r;
                }
              };
              _[V.scheme] = V, _[U.scheme] = U, _[X.scheme] = X, _[re.scheme] = re, _[ae.scheme] = ae, e.SCHEMES = _, e.pctEncChar = F, e.pctDecChars = x, e.parse = A, e.removeDotSegments = z, e.serialize = T, e.resolveComponents = q, e.resolve = function (e, r, t) {
                var a = function (e, r) {
                  var t = {
                    scheme: "null"
                  };
                  if (r) for (var a in r) {
                    t[a] = r[a];
                  }
                  return t;
                }(0, t);

                return T(q(A(e, a), A(r, a), a, !0), a);
              }, e.normalize = function (e, r) {
                return "string" == typeof e ? e = T(A(e, r), r) : "object" === a(e) && (e = A(T(e, r), r)), e;
              }, e.equal = function (e, r, t) {
                return "string" == typeof e ? e = T(A(e, t), t) : "object" === a(e) && (e = T(e, t)), "string" == typeof r ? r = T(A(r, t), t) : "object" === a(r) && (r = T(r, t)), e === r;
              }, e.escapeComponent = function (e, r) {
                return e && e.toString().replace(r && r.iri ? n.ESCAPE : i.ESCAPE, F);
              }, e.unescapeComponent = Q, Object.defineProperty(e, "__esModule", {
                value: !0
              });
            }("object" == typeof t && void 0 !== r ? t : a.URI = a.URI || {});
          }, {}],
          ajv: [function (e, r, t) {
            var a = e("./compile"),
                s = e("./compile/resolve"),
                o = e("./cache"),
                i = e("./compile/schema_obj"),
                n = e("fast-json-stable-stringify"),
                l = e("./compile/formats"),
                c = e("./compile/rules"),
                u = e("./data"),
                h = e("./compile/util");
            (r.exports = y).prototype.validate = function (e, r) {
              var t;

              if ("string" == typeof e) {
                if (!(t = this.getSchema(e))) throw new Error('no schema with key or ref "' + e + '"');
              } else {
                var a = this._addSchema(e);

                t = a.validate || this._compile(a);
              }

              var s = t(r);
              return !0 !== t.$async && (this.errors = t.errors), s;
            }, y.prototype.compile = function (e, r) {
              var t = this._addSchema(e, void 0, r);

              return t.validate || this._compile(t);
            }, y.prototype.addSchema = function (e, r, t, a) {
              if (Array.isArray(e)) {
                for (var o = 0; o < e.length; o++) {
                  this.addSchema(e[o], void 0, t, a);
                }

                return this;
              }

              var i = this._getId(e);

              if (void 0 !== i && "string" != typeof i) throw new Error("schema id must be string");
              return S(this, r = s.normalizeId(r || i)), this._schemas[r] = this._addSchema(e, t, a, !0), this;
            }, y.prototype.addMetaSchema = function (e, r, t) {
              return this.addSchema(e, r, t, !0), this;
            }, y.prototype.validateSchema = function (e, r) {
              var t = e.$schema;
              if (void 0 !== t && "string" != typeof t) throw new Error("$schema must be a string");
              if (!(t = t || this._opts.defaultMeta || function (e) {
                var r = e._opts.meta;
                return e._opts.defaultMeta = "object" == typeof r ? e._getId(r) || r : e.getSchema(f) ? f : void 0, e._opts.defaultMeta;
              }(this))) return this.logger.warn("meta-schema not available"), !(this.errors = null);
              var a = this.validate(t, e);

              if (!a && r) {
                var s = "schema is invalid: " + this.errorsText();
                if ("log" != this._opts.validateSchema) throw new Error(s);
                this.logger.error(s);
              }

              return a;
            }, y.prototype.getSchema = function (e) {
              var r = g(this, e);

              switch (typeof r) {
                case "object":
                  return r.validate || this._compile(r);

                case "string":
                  return this.getSchema(r);

                case "undefined":
                  return function (e, r) {
                    var t = s.schema.call(e, {
                      schema: {}
                    }, r);

                    if (t) {
                      var o = t.schema,
                          n = t.root,
                          l = t.baseId,
                          c = a.call(e, o, n, void 0, l);
                      return e._fragments[r] = new i({
                        ref: r,
                        fragment: !0,
                        schema: o,
                        root: n,
                        baseId: l,
                        validate: c
                      }), c;
                    }
                  }(this, e);
              }
            }, y.prototype.removeSchema = function (e) {
              if (e instanceof RegExp) return P(this, this._schemas, e), P(this, this._refs, e), this;

              switch (typeof e) {
                case "undefined":
                  return P(this, this._schemas), P(this, this._refs), this._cache.clear(), this;

                case "string":
                  var r = g(this, e);
                  return r && this._cache.del(r.cacheKey), delete this._schemas[e], delete this._refs[e], this;

                case "object":
                  var t = this._opts.serialize,
                      a = t ? t(e) : e;

                  this._cache.del(a);

                  var o = this._getId(e);

                  o && (o = s.normalizeId(o), delete this._schemas[o], delete this._refs[o]);
              }

              return this;
            }, y.prototype.addFormat = function (e, r) {
              return "string" == typeof r && (r = new RegExp(r)), this._formats[e] = r, this;
            }, y.prototype.errorsText = function (e, r) {
              if (!(e = e || this.errors)) return "No errors";

              for (var t = void 0 === (r = r || {}).separator ? ", " : r.separator, a = void 0 === r.dataVar ? "data" : r.dataVar, s = "", o = 0; o < e.length; o++) {
                var i = e[o];
                i && (s += a + i.dataPath + " " + i.message + t);
              }

              return s.slice(0, -t.length);
            }, y.prototype._addSchema = function (e, r, t, a) {
              if ("object" != typeof e && "boolean" != typeof e) throw new Error("schema should be object or boolean");

              var o = this._opts.serialize,
                  n = o ? o(e) : e,
                  l = this._cache.get(n);

              if (l) return l;
              a = a || !1 !== this._opts.addUsedSchema;
              var c = s.normalizeId(this._getId(e));
              c && a && S(this, c);
              var u,
                  h = !1 !== this._opts.validateSchema && !r;
              h && !(u = c && c == s.normalizeId(e.$schema)) && this.validateSchema(e, !0);
              var d = s.ids.call(this, e),
                  p = new i({
                id: c,
                schema: e,
                localRefs: d,
                cacheKey: n,
                meta: t
              });
              return "#" != c[0] && a && (this._refs[c] = p), this._cache.put(n, p), h && u && this.validateSchema(e, !0), p;
            }, y.prototype._compile = function (e, r) {
              if (e.compiling) return (e.validate = o).schema = e.schema, o.errors = null, o.root = r || o, !0 === e.schema.$async && (o.$async = !0), o;
              var t, s;
              e.compiling = !0, e.meta && (t = this._opts, this._opts = this._metaOpts);

              try {
                s = a.call(this, e.schema, r, e.localRefs);
              } catch (r) {
                throw delete e.validate, r;
              } finally {
                e.compiling = !1, e.meta && (this._opts = t);
              }

              return e.validate = s, e.refs = s.refs, e.refVal = s.refVal, e.root = s.root, s;

              function o() {
                var r = e.validate,
                    t = r.apply(this, arguments);
                return o.errors = r.errors, t;
              }
            }, y.prototype.compileAsync = e("./compile/async");
            var d = e("./keyword");
            y.prototype.addKeyword = d.add, y.prototype.getKeyword = d.get, y.prototype.removeKeyword = d.remove, y.prototype.validateKeyword = d.validate;
            var p = e("./compile/error_classes");
            y.ValidationError = p.Validation, y.MissingRefError = p.MissingRef, y.$dataMetaSchema = u;
            var f = "http://json-schema.org/draft-07/schema",
                m = ["removeAdditional", "useDefaults", "coerceTypes", "strictDefaults"],
                v = ["/properties"];

            function y(r) {
              if (!(this instanceof y)) return new y(r);
              r = this._opts = h.copy(r) || {}, function (e) {
                var r = e._opts.logger;
                if (!1 === r) e.logger = {
                  log: _,
                  warn: _,
                  error: _
                };else {
                  if (void 0 === r && (r = console), !("object" == typeof r && r.log && r.warn && r.error)) throw new Error("logger must implement log, warn and error methods");
                  e.logger = r;
                }
              }(this), this._schemas = {}, this._refs = {}, this._fragments = {}, this._formats = l(r.format), this._cache = r.cache || new o(), this._loadingSchemas = {}, this._compilations = [], this.RULES = c(), this._getId = function (e) {
                switch (e.schemaId) {
                  case "auto":
                    return b;

                  case "id":
                    return E;

                  default:
                    return w;
                }
              }(r), r.loopRequired = r.loopRequired || 1 / 0, "property" == r.errorDataPath && (r._errorDataPathProperty = !0), void 0 === r.serialize && (r.serialize = n), this._metaOpts = function (e) {
                for (var r = h.copy(e._opts), t = 0; t < m.length; t++) {
                  delete r[m[t]];
                }

                return r;
              }(this), r.formats && function (e) {
                for (var r in e._opts.formats) {
                  var t = e._opts.formats[r];
                  e.addFormat(r, t);
                }
              }(this), r.keywords && function (e) {
                for (var r in e._opts.keywords) {
                  var t = e._opts.keywords[r];
                  e.addKeyword(r, t);
                }
              }(this), function (r) {
                var t;

                if (r._opts.$data && (t = e("./refs/data.json"), r.addMetaSchema(t, t.$id, !0)), !1 !== r._opts.meta) {
                  var a = e("./refs/json-schema-draft-07.json");
                  r._opts.$data && (a = u(a, v)), r.addMetaSchema(a, f, !0), r._refs["http://json-schema.org/schema"] = f;
                }
              }(this), "object" == typeof r.meta && this.addMetaSchema(r.meta), r.nullable && this.addKeyword("nullable", {
                metaSchema: {
                  type: "boolean"
                }
              }), function (e) {
                var r = e._opts.schemas;
                if (r) if (Array.isArray(r)) e.addSchema(r);else for (var t in r) {
                  e.addSchema(r[t], t);
                }
              }(this);
            }

            function g(e, r) {
              return r = s.normalizeId(r), e._schemas[r] || e._refs[r] || e._fragments[r];
            }

            function P(e, r, t) {
              for (var a in r) {
                var s = r[a];
                s.meta || t && !t.test(a) || (e._cache.del(s.cacheKey), delete r[a]);
              }
            }

            function E(e) {
              return e.$id && this.logger.warn("schema $id ignored", e.$id), e.id;
            }

            function w(e) {
              return e.id && this.logger.warn("schema id ignored", e.id), e.$id;
            }

            function b(e) {
              if (e.$id && e.id && e.$id != e.id) throw new Error("schema $id is different from id");
              return e.$id || e.id;
            }

            function S(e, r) {
              if (e._schemas[r] || e._refs[r]) throw new Error('schema with key or id "' + r + '" already exists');
            }

            function _() {}
          }, {
            "./cache": 1,
            "./compile": 5,
            "./compile/async": 2,
            "./compile/error_classes": 3,
            "./compile/formats": 4,
            "./compile/resolve": 6,
            "./compile/rules": 7,
            "./compile/schema_obj": 8,
            "./compile/util": 10,
            "./data": 11,
            "./keyword": 39,
            "./refs/data.json": 40,
            "./refs/json-schema-draft-07.json": 41,
            "fast-json-stable-stringify": 43
          }]
        }, {}, [])("ajv");
      }));
      /***/
    },

    /***/
    "HIOE":
    /*!****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/portal/schemas/buildingSceneLayerItem.js ***!
      \****************************************************************************/

    /*! exports provided: json */

    /***/
    function HIOE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "json", function () {
        return i;
      });
      /* harmony import */


      var _definitions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./definitions.js */
      "tlKZ");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var i = {
        title: "Building Scene Layer config on layer item",
        type: "object",
        properties: {
          layers: {
            type: "array",
            items: {
              properties: {
                activeFilterId: {
                  type: "string",
                  description: "specifies the id of the currently active filter"
                },
                filters: {
                  type: "array",
                  description: "A list of filters available for this layer. Overrides filters defined on the service.",
                  items: {
                    type: "object",
                    $ref: "#/definitions/buildingSceneLayer_filter_schema.json"
                  },
                  uniqueItems: !0
                },
                id: {
                  type: "integer",
                  description: "ID of the service layer."
                },
                layerDefinition: {
                  type: "object",
                  description: "Additional properties that can define an elevation offset for the layer.",
                  allOf: [{
                    $ref: "#/definitions/layerDefinition_schema.json"
                  }, {
                    properties: {
                      elevationInfo: {},
                      minScale: {},
                      maxScale: {}
                    },
                    additionalProperties: !1
                  }]
                },
                listMode: {
                  type: "string",
                  description: "To show or hide the sublayer in the layer list. If the layer has sublayers, selecting `hide-children` will hide them in the layer list.",
                  "enum": ["hide", "hide-children", "show"]
                },
                opacity: {
                  type: "number",
                  description: "The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.",
                  minimum: 0,
                  maximum: 1,
                  "default": 1
                },
                popupInfo: {
                  type: "object",
                  description: "A popupInfo object defining the content of pop-up windows when you click or query a feature.",
                  $ref: "#/definitions/popupInfo_schema.json"
                },
                sublayers: {
                  type: "array",
                  description: "An array of objects specifying overrides for building scene layer sublayers",
                  items: {
                    type: "object",
                    $ref: "#/definitions/buildingSceneLayer_sublayer_schema.json"
                  },
                  uniqueItems: !0
                },
                visibility: {
                  type: "boolean",
                  description: "Boolean property determining whether the layer is initially visible in the web scene",
                  "default": !0
                }
              },
              additionalProperties: !1
            }
          }
        },
        additionalProperties: !1,
        $schema: "http://json-schema.org/draft-07/schema",
        definitions: _definitions_js__WEBPACK_IMPORTED_MODULE_0__["schema_definitions"]
      };
      /***/
    },

    /***/
    "Jbjn":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/portal/schemas/integratedMeshLayerItem.js ***!
      \*****************************************************************************/

    /*! exports provided: json */

    /***/
    function Jbjn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "json", function () {
        return i;
      });
      /* harmony import */


      var _definitions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./definitions.js */
      "tlKZ");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var i = {
        title: "Integrated Mesh Layer config on layer item",
        type: "object",
        properties: {
          layers: {
            type: "array",
            items: {
              properties: {
                id: {
                  type: "integer",
                  description: "ID of the service layer."
                },
                layerDefinition: {
                  type: "object",
                  description: "A layerDefinition object defining the attribute schema and drawing information for the layer.",
                  allOf: [{
                    $ref: "#/definitions/layerDefinition_schema.json"
                  }, {
                    properties: {
                      elevationInfo: {},
                      minScale: {},
                      maxScale: {}
                    },
                    additionalProperties: !1
                  }]
                },
                listMode: {
                  type: "string",
                  "enum": ["hide", "show"]
                },
                modifications: {
                  type: "string",
                  description: "URL to modifications json file, typically stored in `ITEM/resources`. Content of the file follows the $ref:[Modifications schema](modifications_schema.json)."
                },
                opacity: {
                  type: "number",
                  description: "The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.",
                  minimum: 0,
                  maximum: 1,
                  "default": 1
                },
                visibility: {
                  type: "boolean",
                  description: "Boolean property determining whether the layer is initially visible in the web scene.",
                  "default": !0
                }
              },
              additionalProperties: !1
            }
          }
        },
        additionalProperties: !1,
        $schema: "http://json-schema.org/draft-07/schema",
        definitions: _definitions_js__WEBPACK_IMPORTED_MODULE_0__["schema_definitions"]
      };
      /***/
    },

    /***/
    "RpF8":
    /*!********************************************************************!*\
      !*** ./node_modules/@arcgis/core/portal/schemas/sceneLayerItem.js ***!
      \********************************************************************/

    /*! exports provided: json */

    /***/
    function RpF8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "json", function () {
        return i;
      });
      /* harmony import */


      var _definitions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./definitions.js */
      "tlKZ");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var i = {
        title: "Scene Layer config on layer item",
        type: "object",
        properties: {
          layers: {
            type: "array",
            items: {
              properties: {
                disablePopup: {
                  type: "boolean",
                  description: "disablePopups allows a client to ignore popups defined by the service item."
                },
                id: {
                  type: "integer",
                  description: "ID of the service layer."
                },
                layerDefinition: {
                  type: "object",
                  description: "A layerDefinition object defining the attribute schema and drawing information for the layer.",
                  allOf: [{
                    $ref: "#/definitions/layerDefinition_schema.json"
                  }, {
                    properties: {
                      definitionExpression: {},
                      drawingInfo: {},
                      elevationInfo: {},
                      featureReduction: {},
                      minScale: {},
                      maxScale: {},
                      rangeInfos: {}
                    },
                    additionalProperties: !1
                  }]
                },
                listMode: {
                  type: "string",
                  description: "To show or hide layers in the layer list",
                  "enum": ["hide", "show"]
                },
                opacity: {
                  type: "number",
                  description: "The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.",
                  minimum: 0,
                  maximum: 1,
                  "default": 1
                },
                popupInfo: {
                  type: "object",
                  description: "A popupInfo object defining the content of pop-up windows when you click or query a feature.",
                  $ref: "#/definitions/popupInfo_schema.json"
                },
                screenSizePerspective: {
                  type: "boolean",
                  description: "Apply [perspective scaling](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#screenSizePerspectiveEnabled) to screen-size symbols.",
                  "default": !1
                },
                showLabels: {
                  type: "boolean",
                  description: "If the layer has a labelingInfo property then labels show on the scene only if the showLabels property it true.",
                  "default": !1
                },
                showLegend: {
                  type: "boolean",
                  description: "Boolean value indicating whether to display the layer in the legend. Default value is `true`.",
                  "default": !0
                },
                visibility: {
                  type: "boolean",
                  description: "Boolean property determining whether the layer is initially visible in the web scene",
                  "default": !0
                }
              },
              additionalProperties: !1
            }
          }
        },
        additionalProperties: !1,
        $schema: "http://json-schema.org/draft-07/schema",
        definitions: _definitions_js__WEBPACK_IMPORTED_MODULE_0__["schema_definitions"]
      };
      /***/
    },

    /***/
    "X2wA":
    /*!**************************************************************!*\
      !*** ./node_modules/@arcgis/core/chunks/_commonjsHelpers.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, g */

    /***/
    function X2wA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return n;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

      function n(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e["default"] : e;
      }

      function o(e, n, o) {
        return e(o = {
          path: n,
          exports: {},
          require: function require(e, n) {
            return r(null == n && o.path);
          }
        }, o.exports), o.exports;
      }

      function r() {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
      }
      /***/

    },

    /***/
    "p+sB":
    /*!*********************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/schemaValidator.js ***!
      \*********************************************************************/

    /*! exports provided: validate */

    /***/
    function pSB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "validate", function () {
        return m;
      });
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _support_validationUtilsAjv_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../support/validationUtilsAjv.js */
      "2DLi");
      /* harmony import */


      var _chunks_ajv_bundle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../chunks/ajv.bundle.js */
      "8r5S");
      /* harmony import */


      var _portal_schemas_buildingSceneLayerItem_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../portal/schemas/buildingSceneLayerItem.js */
      "HIOE");
      /* harmony import */


      var _portal_schemas_integratedMeshLayerItem_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../portal/schemas/integratedMeshLayerItem.js */
      "Jbjn");
      /* harmony import */


      var _portal_schemas_pointCloudLayerItem_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../portal/schemas/pointCloudLayerItem.js */
      "vVTq");
      /* harmony import */


      var _portal_schemas_sceneLayerItem_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../portal/schemas/sceneLayerItem.js */
      "RpF8");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var i = new _chunks_ajv_bundle_js__WEBPACK_IMPORTED_MODULE_2__["A"]({
        allErrors: !0,
        extendRefs: !0
      });

      function m(e, t) {
        return i.validate(e, c(t)) ? [] : Object(_support_validationUtilsAjv_js__WEBPACK_IMPORTED_MODULE_1__["convertAjvErrors"])(i.errors);
      }

      function c(r) {
        switch (r) {
          case "building-scene":
            return _portal_schemas_buildingSceneLayerItem_js__WEBPACK_IMPORTED_MODULE_3__["json"];

          case "integrated-mesh":
            return _portal_schemas_integratedMeshLayerItem_js__WEBPACK_IMPORTED_MODULE_4__["json"];

          case "point-cloud":
            return _portal_schemas_pointCloudLayerItem_js__WEBPACK_IMPORTED_MODULE_5__["json"];

          case "scene":
            return _portal_schemas_sceneLayerItem_js__WEBPACK_IMPORTED_MODULE_6__["json"];

          default:
            throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("portalitemlayertype:unknown", "Can not validate against unknown PortalItemLayerType.");
        }
      }
      /***/

    },

    /***/
    "tlKZ":
    /*!*****************************************************************!*\
      !*** ./node_modules/@arcgis/core/portal/schemas/definitions.js ***!
      \*****************************************************************/

    /*! exports provided: schema_definitions */

    /***/
    function tlKZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "schema_definitions", function () {
        return e;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e = {
        "applicationProperties_schema.json": {
          title: "applicationProperties",
          type: "object",
          description: "Configuration of application and UI elements.",
          properties: {
            viewing: {
              type: "object",
              $ref: "#/definitions/viewing_schema.json"
            }
          },
          additionalProperties: !1
        },
        "baseMap_schema.json": {
          title: "baseMap",
          type: "object",
          description: "The basemap provides geographic context to the map and scene.",
          properties: {
            baseMapLayers: {
              type: "array",
              description: "An array of baseMapLayer objects defining the basemaps used in the web scene.",
              items: {
                type: "object",
                $ref: "#/definitions/baseMapLayer_schema.json"
              },
              uniqueItems: !0
            },
            elevationLayers: {
              type: "array",
              description: '<em>Deprecated, use `ground.layers` instead <a href="#elevationLayers"><sup>1</sup></a>.</em> An array of elevationLayer objects defining the basemaps used in the web scene.',
              items: {
                type: "object",
                $ref: "#/definitions/elevationLayers_schema.json"
              },
              uniqueItems: !0
            },
            id: {
              type: "string",
              description: "A unique identifying string for the basemap."
            },
            title: {
              type: "string",
              description: "Required string title for the basemap that can be used in a table of contents."
            }
          },
          required: ["baseMapLayers", "title"],
          additionalProperties: !1
        },
        "clippingArea_schema.json": {
          title: "clippingArea",
          type: "object",
          description: "Defines area to be clipped for display.",
          properties: {
            clip: {
              type: "boolean",
              description: "enable / disable clipping"
            },
            geometry: {
              type: "object",
              description: "envelope of clip area",
              $ref: "#/definitions/extent_schema.json"
            }
          }
        },
        "ground_schema.json": {
          title: "Ground",
          type: "object",
          description: "Ground defines the main surface of the web scene, based on elevation layers.",
          properties: {
            layers: {
              type: "array",
              description: "An array of elevationLayer objects defining the elevation of the ground in the web scene.",
              items: {
                type: "object",
                $ref: "#/definitions/elevationLayers_schema.json"
              },
              uniqueItems: !0
            },
            navigationConstraint: {
              description: "Object determining whether the camera is constrained to navigate only above, or also under the ground surface. If not specified, navigation is constrained to above ground.",
              $ref: "#/definitions/navigationConstraint_schema.json"
            },
            surfaceColor: {
              description: "Defines the color of the ground surface, displayed underneath the basemap. If no color, the default grid is shown.",
              $ref: "#/definitions/color_schema.json"
            },
            transparency: {
              type: "integer",
              description: "The transparency of the ground surface. It is used for seeing through the ground, therefore this property also changes the transparency of the basemap. Draped operational layers are not affected by this property. The value has to lie between `100` (full transparency) and `0` (full opacity).",
              minimum: 0,
              maximum: 100
            }
          },
          required: ["layers"],
          additionalProperties: !1
        },
        "heightModelInfo_schema.json": {
          title: "heightModelInfo",
          type: "object",
          description: "An object that defines the characteristics of the vertical coordinate system used by the web scene.",
          properties: {
            heightModel: {
              type: "string",
              description: "The surface type or height model of the vertical coordinate system.",
              "enum": ["ellipsoidal", "gravity_related_height"],
              "default": "ellipsoidal"
            },
            heightUnit: {
              type: "string",
              description: 'The unit of the vertical coordinate system.<a href="#heightUnit"><sup>1</sup></a>',
              "enum": ["150-kilometers", "50-kilometers", "benoit-1895-b-chain", "clarke-foot", "clarke-link", "clarke-yard", "foot", "gold-coast-foot", "indian-1937-yard", "indian-yard", "meter", "sears-1922-truncated-chain", "sears-chain", "sears-foot", "sears-yard", "us-foot"]
            },
            vertCRS: {
              type: "string",
              description: "(Optional) The datum realization of the vertical coordinate system."
            }
          },
          required: ["heightModel", "heightUnit"],
          additionalProperties: !1
        },
        "initialState_schema.json": {
          title: "initialState",
          type: "object",
          description: "An object that provides information about the initial environment settings and viewpoint of the web scene.",
          properties: {
            environment: {
              type: "object",
              $ref: "#/definitions/environment_schema.json"
            },
            viewpoint: {
              type: "object",
              description: "Describes a point of view for a 2D or 3D view. In a 3D view, it is determined using a camera position.",
              $ref: "#/definitions/viewpoint_schema.json"
            }
          },
          required: ["environment", "viewpoint"],
          additionalProperties: !1
        },
        "mapRangeInfo_schema.json": {
          title: "Map Range Information",
          description: "Map range information",
          properties: {
            activeRangeName: {
              type: "string",
              description: "Active range ID that slider/picker acts upon."
            },
            currentRangeExtent: {
              type: "array",
              description: "Current range for the active range.",
              items: {
                type: "number"
              },
              minItems: 2,
              maxItems: 2
            },
            fullRangeExtent: {
              type: "array",
              description: "Full range extent for the active range to be presented in the UI.",
              items: {
                type: "number"
              },
              minItems: 2,
              maxItems: 2
            }
          },
          required: ["activeRangeName"],
          additionalProperties: !1
        },
        "operationalLayers_schema.json": {
          title: "operationalLayers",
          type: "object",
          description: "Operational layers contain your data. Usually, a basemap sits beneath your operational layers to give them geographic context.",
          oneOf: [{
            $ref: "#/definitions/buildingSceneLayer_schema.json"
          }, {
            $ref: "#/definitions/csvLayer_schema.json"
          }, {
            $ref: "#/definitions/featureLayer_schema.json"
          }, {
            $ref: "#/definitions/groupLayer_schema.json"
          }, {
            $ref: "#/definitions/imageServiceLayer_schema.json"
          }, {
            $ref: "#/definitions/integratedMeshLayer_schema.json"
          }, {
            $ref: "#/definitions/kmlLayer_schema.json"
          }, {
            $ref: "#/definitions/mapServiceLayer_schema.json"
          }, {
            $ref: "#/definitions/pointCloudLayer_schema.json"
          }, {
            $ref: "#/definitions/rasterDataLayer_schema.json"
          }, {
            $ref: "#/definitions/sceneLayer_schema.json"
          }, {
            $ref: "#/definitions/tiledImageServiceLayer_schema.json"
          }, {
            $ref: "#/definitions/tiledMapServiceLayer_schema.json"
          }, {
            $ref: "#/definitions/vectorTileLayer_schema.json"
          }, {
            $ref: "#/definitions/webTiledLayer_schema.json"
          }, {
            $ref: "#/definitions/wmsLayer_schema.json"
          }]
        },
        "presentation_schema.json": {
          title: "presentation",
          type: "object",
          description: "A presentation consists of multiple slides, where each slide is a specific view into the web scene.",
          properties: {
            slides: {
              type: "array",
              description: "Array of slide objects.",
              items: {
                type: "object",
                $ref: "#/definitions/slide_schema.json"
              }
            }
          },
          additionalProperties: !1
        },
        "spatialReference_schema.json": {
          title: "spatialReference",
          type: "object",
          description: "The spatialReference object is located at the top level of the JSON hierarchy. In addition to this, it is also available within the operationalLayer and basemap objects.\n\nMany predefined spatial references have already been defined and are available for use. A spatial reference can be defined using a well-known ID (WKID) or well-known text (WKT). The default tolerance and resolution values for the associated coordinate system are used.\n\nA spatial reference can optionally include a definition for a vertical coordinate system (VCS), which is used to interpret the z values of a geometry.",
          properties: {
            latestVcsWkid: {
              type: "integer",
              description: "(Optional) The current wkid value of the vertical coordinate system."
            },
            latestWkid: {
              type: "integer",
              description: "(Optional) Identifies the current wkid value associated with the same spatial reference. For example a WKID of '102100' (Web Mercator) has a latestWKid of '3857'."
            },
            vcsWkid: {
              type: "integer",
              description: "(Optional) The wkid value of the vertical coordinate system."
            },
            wkid: {
              type: "integer",
              description: "The well-known ID (WKID) of the coordinate system. Specify either WKID or the well-known text (WKT) of the coordinate system."
            },
            wkt: {
              type: "string",
              description: "The well-known text (WKT) of the coordinate system. Specify either WKT or WKID of the coordinate system."
            }
          },
          oneOf: [{
            required: ["wkt"]
          }, {
            required: ["wkid"]
          }],
          additionalProperties: !1
        },
        "table_schema.json": {
          title: "table",
          type: "object",
          description: "Root element in the web scene specifying an array of table objects.",
          properties: {
            capabilities: {
              type: "string",
              description: "A comma-separated string listing which editing operations are allowed on an editable feature service. Available operations include: `Create`, `Delete`, `Query`, `Update`, and `Editing`."
            },
            definitionEditor: {
              type: "object",
              description: "Object indicating the definitionEditor used as a layer's interactive filter.",
              $ref: "#/definitions/definitionEditor_schema.json"
            },
            id: {
              type: "string",
              description: "Unique string identifier for the table."
            },
            itemId: {
              type: "string",
              description: "Unique string value indicating an item registered in ArcGIS Online or your organization's portal."
            },
            layerDefinition: {
              type: "object",
              description: "A layerDefinition object defining a definition expression for the table.",
              $ref: "#/definitions/layerDefinition_schema.json"
            },
            path: {
              type: "string",
              description: "For offline data, a path to a geodatabase file. A URI format is used starting with `file:` followed by a file system path with a `.geodatabase` extension. A query parameter `itemId` must also be present specifying the ID of a table in the geodatabase's `GDB_ServiceItems` table. A relative path must be from the file which defines the table. For example `file:../p20/northamerica.geodatabase?itemId=5`.",
              pattern: "^file:.+\\.geodatabase\\?itemId=\\d+$"
            },
            popupInfo: {
              type: "object",
              description: "An object defining the content of popup windows when you query a record and the sort option for child related records.",
              $ref: "#/definitions/popupInfo_schema.json"
            },
            title: {
              type: "string",
              description: "String value for the title of the table."
            },
            url: {
              type: "string",
              description: "String value indicating the URL reference of the hosted table."
            }
          },
          required: ["title", "url"],
          additionalProperties: !1
        },
        "transportationNetwork_schema.json": {
          title: "Transportation Network",
          type: "object",
          description: "The transportation network used for routing in the scene.",
          properties: {
            name: {
              type: "string",
              description: "The name of the transportation network. The name must be unique within a scene."
            },
            path: {
              type: "string",
              description: "The path to the geodatabase which contains the network.",
              pattern: "^file:.+\\.geodatabase?$"
            },
            title: {
              type: "string",
              description: "A title or alias of the network layer. This can be used in the client user interface."
            }
          },
          required: ["name", "path", "title"],
          additionalProperties: !1
        },
        "version_schema.json": {
          title: "version",
          type: "string",
          description: "Root element in the web scene specifying a string value indicating the web scene version.",
          "enum": ["1.8", "1.9", "1.10", "1.11", "1.12", "1.13", "1.14", "1.15", "1.16", "1.17", "1.18", "1.19", "1.20", "1.21", "1.22"]
        },
        "widgets_schema.json": {
          title: "widgets",
          type: "object",
          description: "The widgets object contains widgets that should be exposed to the user.",
          properties: {
            range: {
              type: "object",
              description: "Active range.",
              $ref: "#/definitions/range_schema.json"
            }
          },
          additionalProperties: !1
        },
        "buildingSceneLayer_filter_schema.json": {
          title: "Building Scene Layer Filter",
          type: "object",
          description: "Filter allows client applications to reduce the drawn elements of a building to specific types and values. Filters on the webscene override the list of existing filters on the service.",
          properties: {
            description: {
              type: "string",
              description: "Description of the filter."
            },
            filterAuthoringInfo: {
              type: "object",
              description: "Metadata about the athoring process for this filter.",
              $ref: "#/definitions/buildingSceneLayer_filterAuthoringInfoCheckbox_schema.json"
            },
            filterBlocks: {
              type: "array",
              description: "Array of filter blocks defining the filter. A filter contains at least one filter block.",
              items: {
                type: "object",
                $ref: "#/definitions/buildingSceneLayer_filterBlock_schema.json"
              },
              minItems: 1
            },
            id: {
              type: "string",
              description: "unique filter id (uuid). Either a new id to extend the list of filters, or an existing id to override properties of an existing filter."
            },
            name: {
              type: "string",
              description: "Name of the filter."
            }
          },
          required: ["filterBlocks", "id", "name"],
          additionalProperties: !1
        },
        "layerDefinition_schema.json": {
          title: "layerDefinition",
          type: "object",
          description: "An object that defines the attribute schema and drawing information for a layer drawn using client-side graphics.",
          properties: {
            allowGeometryUpdates: {
              type: "boolean",
              description: "Boolean value indicating whether the geometry of the features in the layer can be edited."
            },
            capabilities: {
              type: "string",
              description: "A comma separated list of supported capabilities, e.g. `Query,Editing`."
            },
            copyrightText: {
              type: "string",
              description: "String value for the copyright text information for the layer."
            },
            currentVersion: {
              type: "number",
              description: "Numeric value indicating the server version of the layer."
            },
            defaultVisibility: {
              type: "boolean",
              description: "Boolean value indicating whether the layer's visibility is turned on."
            },
            definitionExpression: {
              type: "string",
              description: "SQL-based definition expression string that narrows the data to be displayed in the layer."
            },
            description: {
              type: "string",
              description: "String value of the layer as defined in the map service."
            },
            displayField: {
              type: "string",
              description: "A string value that summarizes the feature."
            },
            drawingInfo: {
              type: "object",
              description: "Contains the drawing and labeling information.",
              $ref: "#/definitions/drawingInfo_schema.json"
            },
            elevationInfo: {
              type: "object",
              $ref: "#/definitions/elevationInfo_schema.json"
            },
            extent: {
              description: "An object defining the rectangular area.",
              oneOf: [{
                $ref: "#/definitions/extent_schema.json"
              }, {
                type: "null"
              }]
            },
            featureReduction: {
              type: "object",
              description: "An object that specifies how features are reduced or aggregated, with the goal of decluttering the view or presenting the user with an aggregate visualization. If unset, every feature is rendered individually.",
              $ref: "#/definitions/featureReduction_select_schema.json"
            },
            fields: {
              type: "array",
              description: "An array of field objects containing information about the attribute fields for the feature collection or layer.",
              items: {
                type: "object",
                $ref: "#/definitions/field_schema.json"
              },
              uniqueItems: !0
            },
            filters: {
              type: "array",
              description: "Filters for PointCloud layers",
              items: {
                type: "object",
                $ref: "#/definitions/pointCloudFilter_schema.json"
              }
            },
            geometryType: {
              type: "string",
              description: "A string defining the type of geometry. Possible geometry types are: `esriGeometryPoint`, `esriGeometryMultipoint`, `esriGeometryPolyline`, `esriGeometryPolygon`, and `esriGeometryEnvelope`."
            },
            globalIdField: {
              type: "string",
              description: "The unique identifier for a feature or table row within a geodatabase."
            },
            hasAttachments: {
              type: "boolean",
              description: "Indicates whether attachments should be loaded for the layer."
            },
            hasM: {
              type: "boolean",
              description: "Boolean value indicating whether layer has M values."
            },
            hasStaticData: {
              type: "boolean",
              description: "Boolean value indicating whether data changes. True if it does not."
            },
            hasZ: {
              type: "boolean",
              description: "Boolean value indicating whether layer has Z values."
            },
            htmlPopupType: {
              type: "string",
              description: "String value indicating the HTML popup type.",
              "enum": ["esriServerHTMLPopupTypeAsHTMLText", "esriServerHTMLPopupTypeAsURL", "esriServerHTMLPopupTypeNone"]
            },
            id: {
              type: "integer",
              description: "The identifier assigned to the layer."
            },
            isDataVersioned: {
              type: "boolean",
              description: "Boolean value indicating whether the data is versioned."
            },
            maxRecordCount: {
              type: "integer",
              description: "Numeric value indicating tbe maximum number of records that will be returned at once for a query."
            },
            maxScale: {
              type: "number",
              description: "Represents the maximum scale (most zoomed in) at which the layer is visible in the view. If the web scene is zoomed in beyond this scale, the layer will not be visible. A value of 0 means the layer does not have a maximum scale. If set, the maxScale value should always be smaller than the minScale value, and greater than or equal to the service specification."
            },
            minScale: {
              type: "number",
              description: "Represents the minimum scale (most zoomed out) at which the layer is visible in the view. If the web scene is zoomed out beyond this scale, the layer will not be visible. A value of 0 means the layer does not have a minimum scale. If set, the minScale value should always be larger than the maxScale value, and lesser than or equal to the service specification."
            },
            name: {
              type: "string",
              description: "Contains a unique name for the layer that can be displayed in a legend."
            },
            objectIdField: {
              type: "string",
              description: "Indicates the name of the object ID field in the dataset."
            },
            overrideSymbols: {
              type: "boolean",
              description: "Dictates whether a client can support having an end user modify symbols on individual features."
            },
            rangeInfos: {
              type: "array",
              description: "Indicates range information",
              items: {
                type: "object",
                $ref: "#/definitions/rangeInfo_schema.json"
              },
              minItems: 1
            },
            source: {
              type: "object",
              description: "An object indicating the layerDefinition's layer source.",
              $ref: "#/definitions/source_schema.json"
            },
            spatialReference: {
              type: "object",
              description: "An object containing the WKID or WKT identifying the spatial reference of the layer's geometry.",
              $ref: "#/definitions/spatialReference_schema.json"
            },
            supportedQueryFormats: {
              type: "string",
              description: "String value indicating the output formats that are supported in a query."
            },
            supportsAdvancedQueries: {
              type: "boolean",
              description: "Boolean value indicating whether the layer supports orderByFields in a query operation."
            },
            supportsAttachmentsByUploadId: {
              type: "boolean",
              description: "Boolean value indicating whether the layer supports uploading attachments with the Uploads operation. This can then be used in the Add Attachment and Update Attachment operations."
            },
            supportsCalculate: {
              type: "boolean",
              description: "Boolean value indicating whether the layer supports the Calculate REST operation when updating features."
            },
            supportsRollbackOnFailureParameter: {
              type: "boolean",
              description: "Boolean value indicating whether the layer supports rolling back edits made on a feature layer if some of the edits fail."
            },
            supportsStatistics: {
              type: "boolean",
              description: "Boolean value indicating whether feature layer query operations support statistical functions."
            },
            supportsValidateSql: {
              type: "boolean",
              description: "Boolean value indicating whether the validateSQL operation is supported across a feature service layer."
            },
            type: {
              type: "string",
              description: "Indicates whether the layerDefinition applies to a Feature Layer or a Table.",
              "enum": ["Feature Layer", "Table"],
              "default": "Feature Layer"
            },
            typeIdField: {
              type: "string",
              description: "Contains the name of the field holding the type ID for the features."
            },
            types: {
              type: "array",
              description: "Contains information about an attribute field.",
              items: {
                type: "object",
                $ref: "#/definitions/type_schema.json"
              },
              uniqueItems: !0
            },
            visibilityField: {
              type: "string",
              description: "String value indicating the attribute field that is used to control the visibility of a feature. If applicable, when rendering a feature the client should use this field to control visibility. The field's values are 0 = do not display, 1 = display."
            }
          },
          additionalProperties: !1
        },
        "popupInfo_schema.json": {
          title: "popupInfo",
          type: "object",
          description: "Defines the look and feel of popup windows when a user clicks or queries a feature.",
          properties: {
            description: {
              type: ["string"],
              description: "A string that appears in the body of the popup window as a description. A basic subset of HTML may also be used to enrich the text. The supported HTML for ArcGIS Online can be seen in the [Supported HTML](https://doc.arcgis.com/en/arcgis-online/reference/supported-html.htm) page."
            },
            expressionInfos: {
              type: "array",
              description: "List of Arcade expressions added to the pop-up.",
              items: {
                type: "object",
                $ref: "#/definitions/popupExpressionInfo_schema.json"
              }
            },
            fieldInfos: {
              type: "array",
              description: "Array of fieldInfo information properties. This information is provided by the service layer definition.",
              items: {
                type: "object",
                $ref: "#/definitions/fieldInfo_schema.json"
              }
            },
            layerOptions: {
              type: "object",
              description: "Additional options that can be defined for the popup layer.",
              $ref: "#/definitions/popupLayerOptions_schema.json"
            },
            mediaInfos: {
              type: "array",
              description: "Array of various mediaInfo to display. Can be of type `image`, `piechart`, `barchart`, `columnchart`, or `linechart`. The order given is the order in which it displays.",
              items: {
                type: "object",
                $ref: "#/definitions/mediaInfo_schema.json"
              }
            },
            popupElements: {
              type: "array",
              description: "An array of popupElement objects that represent an ordered list of popup elements.",
              items: {
                type: "object",
                $ref: "#/definitions/popupElement_schema.json"
              }
            },
            relatedRecordsInfo: {
              type: "object",
              description: "Indicates whether to enable related records if they exist on a layer.",
              $ref: "#/definitions/relatedRecordsInfo_schema.json"
            },
            showAttachments: {
              type: "boolean",
              description: "Indicates whether attachments will be loaded for feature layers that have attachments."
            },
            showLastEditInfo: {
              type: "boolean",
              description: "Indicates whether popup will display information about when and who last edited the feature. Applicable only to layers that have been configured to keep track of such information.",
              "default": !0
            },
            title: {
              type: "string",
              description: "A string that appears at the top of the popup window as a title."
            }
          },
          additionalProperties: !1
        },
        "buildingSceneLayer_sublayer_schema.json": {
          title: "Building Scene Sublayer",
          type: "object",
          description: "The BuildingSceneLayer sublayer is a part of a building scene layer.",
          properties: {
            disablePopup: {
              type: "boolean",
              description: "disablePopups allows a client to ignore popups defined by the service item."
            },
            id: {
              type: "integer",
              description: "Identifies the sublayer inside the building scene layer."
            },
            layerDefinition: {
              type: "object",
              description: "Additional properties that can define drawing information and a definition expression for the sublayer.",
              allOf: [{
                $ref: "#/definitions/layerDefinition_schema.json"
              }, {
                properties: {
                  definitionExpression: {},
                  drawingInfo: {
                    allOf: [{
                      $ref: "#/definitions/drawingInfo_schema.json"
                    }, {
                      properties: {
                        renderer: {}
                      },
                      additionalProperties: !1
                    }]
                  }
                },
                additionalProperties: !1
              }]
            },
            listMode: {
              type: "string",
              description: "To show or hide the sublayer in the layer list.",
              "enum": ["hide", "show"]
            },
            opacity: {
              type: "number",
              description: "The degree of transparency applied to the sublayer on the client side, where 0 is full transparency and 1 is no transparency. This is multiplied with the opacity of the containing layers.",
              minimum: 0,
              maximum: 1,
              "default": 1
            },
            popupInfo: {
              type: "object",
              description: "A popupInfo object defining the content of pop-up windows when you click or query a feature.",
              $ref: "#/definitions/popupInfo_schema.json"
            },
            title: {
              type: "string",
              description: "A user-friendly string title for the sublayer that can be used in a table of contents."
            },
            visibility: {
              type: "boolean",
              description: "Boolean property determining whether the sublayer is initially visible in the web scene"
            }
          },
          required: ["id"],
          additionalProperties: !1
        },
        "drawingInfo_schema.json": {
          title: "drawingInfo",
          type: "object",
          description: "The drawingInfo object contains drawing information for a feature layer.",
          properties: {
            labelingInfo: {
              type: "array",
              description: "An array of labelingInfo objects.",
              items: {
                type: "object",
                $ref: "#/definitions/labelingInfo_schema.json"
              }
            },
            renderer: {
              $ref: "#/definitions/renderer_schema.json"
            },
            showLabels: {
              type: "boolean",
              description: "Labels will display if this property is set to `true` and the layer also has a [labelingInfo](labelingInfo.md) property associated with it.",
              "default": !1
            },
            transparency: {
              type: "number",
              description: "Number value ranging between 0 (no transparency) to 100 (completely transparent).",
              minimum: 0,
              maximum: 100
            }
          },
          additionalProperties: !1
        },
        "viewing_schema.json": {
          title: "viewing",
          type: "object",
          description: "View-specific properties of application and UI elements.",
          properties: {
            search: {
              type: "object",
              $ref: "#/definitions/search_schema.json"
            }
          },
          additionalProperties: !1
        },
        "baseMapLayer_schema.json": {
          title: "baseMapLayer",
          type: "object",
          description: "A basemap layer is a layer that provides geographic context to the scene. The following is a list of possible basemap layer types.",
          oneOf: [{
            $ref: "#/definitions/imageServiceLayer_schema.json"
          }, {
            $ref: "#/definitions/mapServiceLayer_schema.json"
          }, {
            $ref: "#/definitions/openStreetMapLayer_schema.json"
          }, {
            $ref: "#/definitions/rasterDataLayer_schema.json"
          }, {
            $ref: "#/definitions/tiledImageServiceLayer_schema.json"
          }, {
            $ref: "#/definitions/tiledMapServiceLayer_schema.json"
          }, {
            $ref: "#/definitions/vectorTileLayer_schema.json"
          }, {
            $ref: "#/definitions/webTiledLayer_schema.json"
          }, {
            $ref: "#/definitions/wmsLayer_schema.json"
          }]
        },
        "elevationLayers_schema.json": {
          title: "elevationLayers",
          type: "object",
          description: "Elevation layers provide elevation for the ground.",
          oneOf: [{
            $ref: "#/definitions/rasterDataElevationLayer_schema.json"
          }, {
            $ref: "#/definitions/tiledElevationLayer_schema.json"
          }]
        },
        "extent_schema.json": {
          title: "extent",
          type: "object",
          description: "This object defines the bounding geometry given the lower-left and upper-right corners of the bounding box. A [spatial reference](spatialReference.md) is also required.",
          properties: {
            spatialReference: {
              type: "object",
              description: "An object used to specify the spatial reference of the given geometry.",
              $ref: "#/definitions/spatialReference_schema.json"
            },
            xmax: {
              type: "number",
              description: "A numeric value indicating the top-right X-coordinate of an extent envelope."
            },
            xmin: {
              description: "A numeric value indicating the bottom-left X-coordinate of an extent envelope.",
              oneOf: [{
                type: "number"
              }, {
                type: "null"
              }, {
                type: "string",
                "enum": ["NaN"]
              }]
            },
            ymax: {
              type: "number",
              description: "A numeric value indicating the top-right Y-coordinate of an extent envelope."
            },
            ymin: {
              type: "number",
              description: "A numeric value indicating the bottom-left Y-coordinate of an extent envelope."
            }
          },
          additionalProperties: !1
        },
        "navigationConstraint_schema.json": {
          title: "Navigation Constraint",
          type: "object",
          description: "Object determining whether the camera is constrained to navigate only above, or also under the ground surface.",
          properties: {
            type: {
              type: "string",
              "enum": ["none", "stayAbove"]
            }
          },
          required: ["type"],
          additionalProperties: !1
        },
        "color_schema.json": {
          title: "color",
          type: "array",
          description: "Color is represented as a three or four-element array. The four elements represent values for red, green, blue, and alpha in that order. Values range from 0 through 255. If color is undefined for a symbol, the color value is null.",
          items: {
            type: "integer",
            minimum: 0,
            maximum: 255
          },
          minItems: 3,
          maxItems: 4,
          additionalProperties: !1
        },
        "environment_schema.json": {
          title: "environment",
          type: "object",
          description: "Represents settings that affect the environment in which the web scene is displayed. It is entirely stored as part of the initial state of the web scene, and partially in the slides in the presentation.",
          properties: {
            atmosphereEnabled: {
              type: "boolean",
              description: "Whether the atmosphere should be visualized. This includes sky and haze effects.",
              "default": !0
            },
            background: {
              type: "object",
              description: "The background is what is displayed behind any scene objects, stars and atmosphere.",
              $ref: "#/definitions/environment_background_color_schema.json"
            },
            lighting: {
              type: "object",
              $ref: "#/definitions/lighting_schema.json"
            },
            starsEnabled: {
              type: "boolean",
              description: "Whether stars should be displayed in the sky.",
              "default": !0
            }
          },
          additionalProperties: !1
        },
        "viewpoint_schema.json": {
          title: "viewpoint",
          type: "object",
          description: "The location or camera position from which to view the scene.",
          properties: {
            camera: {
              type: "object",
              $ref: "#/definitions/camera_schema.json"
            },
            rotation: {
              type: "number",
              description: "The rotation of due north in relation to the top of the view in degrees.",
              minimum: 0,
              maximum: 360
            },
            scale: {
              type: "number",
              description: "The scale of the viewpoint."
            },
            targetGeometry: {
              type: "object",
              description: "The target geometry framed by the viewpoint.",
              oneOf: [{
                description: "",
                $ref: "#/definitions/geometry_schema.json"
              }, {
                description: "",
                $ref: "#/definitions/extent_schema.json"
              }]
            }
          },
          required: ["camera"],
          additionalProperties: !1
        },
        "buildingSceneLayer_schema.json": {
          title: "Building Scene Layer (BuildingSceneLayer)",
          type: "object",
          description: "The BuildingSceneLayer is a layer type designed for on-demand streaming and displaying building data.",
          properties: {
            activeFilterId: {
              type: "string",
              description: "specifies the id of the currently active filter"
            },
            filters: {
              type: "array",
              description: "A list of filters available for this layer. Overrides filters defined on the service.",
              items: {
                type: "object",
                $ref: "#/definitions/buildingSceneLayer_filter_schema.json"
              },
              uniqueItems: !0
            },
            id: {
              type: "string",
              description: "A unique identifying string for the layer."
            },
            itemId: {
              type: "string",
              description: "Optional string containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal."
            },
            layerDefinition: {
              type: "object",
              description: "Additional properties that can define an elevation offset for the layer.",
              allOf: [{
                $ref: "#/definitions/layerDefinition_schema.json"
              }, {
                properties: {
                  elevationInfo: {},
                  minScale: {},
                  maxScale: {}
                },
                additionalProperties: !1
              }]
            },
            layerType: {
              type: "string",
              description: "String indicating the layer type.",
              "enum": ["BuildingSceneLayer"]
            },
            listMode: {
              type: "string",
              description: "To show or hide the sublayer in the layer list. If the layer has sublayers, selecting `hide-children` will hide them in the layer list.",
              "enum": ["hide", "hide-children", "show"]
            },
            opacity: {
              type: "number",
              description: "The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.",
              minimum: 0,
              maximum: 1,
              "default": 1
            },
            sublayers: {
              type: "array",
              description: "An array of objects specifying overrides for building scene layer sublayers",
              items: {
                type: "object",
                $ref: "#/definitions/buildingSceneLayer_sublayer_schema.json"
              },
              uniqueItems: !0
            },
            title: {
              type: "string",
              description: "A user-friendly string title for the layer that can be used in a table of contents."
            },
            url: {
              type: "string",
              description: "The URL to the service."
            },
            visibility: {
              type: "boolean",
              description: "Boolean property determining whether the layer is initially visible in the web scene",
              "default": !0
            }
          },
          required: ["id", "layerType", "title", "url"],
          additionalProperties: !1
        },
        "csvLayer_schema.json": {
          title: "CSV Layer (CSV)",
          type: "object",
          description: "The CSV layer type references a CSV or TXT file from a publically-accessible web server. It then dynamically loads into the scene at run time. The CSV layer will maintain a reference to the CSV resource.",
          properties: {
            columnDelimiter: {
              type: "string",
              description: "A string defining the character used to separate columns in a CSV file.",
              "enum": ["\t", " ", ",", ";", "|"]
            },
            disablePopup: {
              type: "boolean",
              description: "Indicates whether to allow a client to ignore popups defined by the service item."
            },
            id: {
              type: "string",
              description: "A unique identifying string for the layer."
            },
            layerDefinition: {
              description: "Additional properties that define drawing information and other configurations for the layer.",
              allOf: [{
                $ref: "#/definitions/layerDefinition_schema.json"
              }, {
                properties: {
                  definitionExpression: {},
                  drawingInfo: {
                    allOf: [{
                      $ref: "#/definitions/drawingInfo_schema.json"
                    }, {
                      properties: {
                        labelingInfo: {},
                        renderer: {},
                        transparency: {}
                      },
                      additionalProperties: !1
                    }]
                  },
                  elevationInfo: {},
                  featureReduction: {},
                  fields: {},
                  maxScale: {},
                  minScale: {}
                },
                additionalProperties: !1
              }]
            },
            layerType: {
              type: "string",
              description: "String indicating the layer type.",
              "enum": ["CSV"]
            },
            listMode: {
              type: "string",
              description: "To show or hide the layer in the layer list",
              "enum": ["hide", "show"]
            },
            locationInfo: {
              type: "object",
              description: "A locationInfo object defining how location information will be retrieved from a CSV file.",
              $ref: "#/definitions/locationInfo_schema.json"
            },
            opacity: {
              type: "number",
              description: "The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.",
              minimum: 0,
              maximum: 1,
              "default": 1
            },
            popupInfo: {
              type: "object",
              description: "A popupInfo object defining the content of popup windows when you click or query a feature.",
              $ref: "#/definitions/popupInfo_schema.json"
            },
            refreshInterval: {
              type: "number",
              description: "Refresh interval of the layer in minutes. Non-zero value indicates automatic layer refresh at the specified interval. Value of 0 indicates auto refresh is not enabled."
            },
            screenSizePerspective: {
              type: "boolean",
              description: "Apply [perspective scaling](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#screenSizePerspectiveEnabled) to screen-size symbols.",
              "default": !1
            },
            showLabels: {
              type: "boolean",
              description: "Labels will display if this property is set to `true` and the layer also has a [labelingInfo](labelingInfo.md) property associated with it.",
              "default": !1
            },
            showLegend: {
              type: "boolean",
              description: "Boolean value indicating whether to display the layer in the legend. Default value is `true`.",
              "default": !0
            },
            title: {
              type: "string",
              description: "A user-friendly string title for the layer that can be used in a table of contents."
            },
            url: {
              type: "string",
              description: "The URL to the layer."
            },
            visibility: {
              type: "boolean",
              description: "Boolean property determining whether the layer is initially visible in the web scene.",
              "default": !0
            }
          },
          required: ["id", "layerType", "title", "url"],
          additionalProperties: !1
        },
        "featureLayer_schema.json": {
          title: "Feature Layer (ArcGISFeatureLayer)",
          type: "object",
          description: "Feature layers can be created by referencing a layer from either a map service or a feature service. Use a map service if you just want to retrieve geometries and attributes from the server and symbolize them yourself. Use a feature service if you want to take advantage of symbols from the service's source map document. Also, use a feature service if you plan on doing editing with the feature layer. Feature layers honor any feature templates configured in the source map document. Feature collection objects are used to create a feature layer based on the supplied definition.",
          properties: {
            disablePopup: {
              type: "boolean",
              description: "Indicates whether to allow a client to ignore popups defined by the service item."
            },
            id: {
              type: "string",
              description: "A unique identifying string for the layer."
            },
            itemId: {
              type: "string",
              description: "Optional string containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal."
            },
            layerDefinition: {
              description: "Additional properties that define drawing information and other configurations for the layer.",
              allOf: [{
                $ref: "#/definitions/layerDefinition_schema.json"
              }, {
                properties: {
                  capabilities: {},
                  definitionExpression: {},
                  drawingInfo: {
                    allOf: [{
                      $ref: "#/definitions/drawingInfo_schema.json"
                    }, {
                      properties: {
                        labelingInfo: {},
                        renderer: {},
                        transparency: {}
                      },
                      additionalProperties: !1
                    }]
                  },
                  elevationInfo: {},
                  featureReduction: {},
                  maxScale: {},
                  minScale: {}
                },
                additionalProperties: !1
              }]
            },
            layerType: {
              type: "string",
              description: "String indicating the layer type.",
              "enum": ["ArcGISFeatureLayer"]
            },
            listMode: {
              type: "string",
              description: "To show or hide layers in the layer list",
              "enum": ["hide", "show"]
            },
            opacity: {
              type: "number",
              description: "The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.",
              minimum: 0,
              maximum: 1,
              "default": 1
            },
            path: {
              type: "string",
              description: "For offline data, a path to a geodatabase file. A URI format is used starting with `file:` followed by a file system path with a `.geodatabase` extension. A query parameter `itemId` must also be present specifying the ID of a table in the geodatabase's `GDB_ServiceItems` table. A relative path must be from the file which defines the layer. For example `file:../p20/northamerica.geodatabase?itemId=1`.",
              pattern: "^file:.+\\.geodatabase\\?itemId=\\d+$"
            },
            popupInfo: {
              type: "object",
              description: "A popupInfo object defining the content of popup windows when you click or query a feature.",
              $ref: "#/definitions/popupInfo_schema.json"
            },
            refreshInterval: {
              type: "number",
              description: "Refresh interval of the layer in minutes. Non-zero value indicates automatic layer refresh at the specified interval. Value of 0 indicates auto refresh is not enabled."
            },
            screenSizePerspective: {
              type: "boolean",
              description: "Apply [perspective scaling](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#screenSizePerspectiveEnabled) to screen-size symbols.",
              "default": !1
            },
            showLabels: {
              type: "boolean",
              description: "Labels will display if this property is set to `true` and the layer also has a [labelingInfo](labelingInfo.md) property associated with it. This property can get stored in the web scene config and in the item/data.",
              "default": !1
            },
            showLegend: {
              type: "boolean",
              description: "Boolean value indicating whether to display the layer in the legend. Default value is `true`.",
              "default": !0
            },
            title: {
              type: "string",
              description: "A user-friendly string title for the layer that can be used in a table of contents."
            },
            url: {
              type: "string",
              description: "The URL to the layer. If the layer is not from a web service but rather a feature collection, then the url property is omitted."
            },
            visibility: {
              type: "boolean",
              description: "Boolean property determining whether the layer is initially visible in the web scene.",
              "default": !0
            }
          },
          required: ["id", "layerType", "title"],
          additionalProperties: !1
        },
        "groupLayer_schema.json": {
          title: "Group Layer",
          type: "object",
          description: "GroupLayer provides the ability to organize several sublayers into one common layer. Suppose there are several FeatureLayers that all represent water features in different dimensions. For example, wells (points), streams (lines), and lakes (polygons). The GroupLayer provides the functionality to treat them as one layer called Water Features even though they are stored as separate feature layers.",
          properties: {
            id: {
              type: "string",
              description: "A unique identifying string for the layer"
            },
            layerType: {
              type: "string",
              description: "String indicating the layer type",
              "enum": ["GroupLayer"]
            },
            layers: {
              type: "array",
              description: "list of child operationalLayers",
              items: {
                type: "object",
                $ref: "#/definitions/operationalLayers_schema.json"
              },
              uniqueItems: !0
            },
            listMode: {
              type: "string",
              description: "To show or hide the group layer in the layer list",
              "enum": ["hide", "hide-children", "show"]
            },
            opacity: {
              type: "number",
              description: "The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency."
            },
            title: {
              type: "string",
              description: "A user-friendly string title for the layer that can be used in a table of contents. If this is not included, a title is derived from the service"
            },
            visibility: {
              type: "boolean",
              description: "Boolean property determining whether the layer is initially visible in the web scene",
              "default": !0
            },
            visibilityMode: {
              type: "string",
              description: "How visibility of children is affected:independent, exclusive, inherited",
              "enum": ["exclusive", "independent", "inherited"]
            }
          },
          required: ["id", "layerType", "title"],
          additionalProperties: !1
        },
        "imageServiceLayer_schema.json": {
          title: "Image Service Layer (ArcGISImageServiceLayer)",
          type: "object",
          description: "An image service provides access to raster data through a web service. Multiple rasters can be served as one image service through mosaic dataset technology, dynamically processed and mosaicked on the fly. An image service supports accessing both the mosaicked image and its catalog, as well as individual rasters in the catalog. Also, image services can be cached (tiled) or uncached (dynamic). This object specifically details properties within uncached image services.",
          properties: {
            bandIds: {
              type: "array",
              description: "An array of bandIds that are visible for a multispectral dataset. It can specify bands to export or rearrange band order(from image service).",
              items: {
                type: "integer"
              }
            },
            compressionQuality: {
              type: "number",
              description: "Controls how much loss the image will be subjected to by the compression algorithm (from image service).",
              minimum: 0,
              maximum: 100
            },
            compressionTolerance: {
              type: "number",
              description: "Controls the tolerance of the lerc compression algorithm. The tolerance defines the maximum possible error of pixel values in the compressed image.",
              minimum: 0,
              "default": .01
            },
            disablePopup: {
              type: "boolean",
              description: "Boolean property indicating whether to ignore popups defined by the service item.",
              "default": !1
            },
            format: {
              type: "string",
              description: "String value representing image format.",
              "enum": ["bmp", "gif", "jpg", "jpgpng", "lerc", "png", "png24", "png32", "png8", "tiff"],
              "default": "png"
            },
            id: {
              type: "string",
              description: "A unique identifying string for the layer."
            },
            interpolation: {
              type: "string",
              description: "The algorithm used for interpolation.",
              "enum": ["RSP_BilinearInterpolation", "RSP_CubicConvolution", "RSP_Majority", "RSP_NearestNeighbor"]
            },
            isReference: {
              type: "boolean",
              description: "This is applicable if used as a baseMapLayer. A boolean value indicating whether or not the baseMapLayer draws on top (true) of other layers, including operationalLayers , or below (false).",
              "default": !1
            },
            itemId: {
              type: "string",
              description: "Optional string containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal."
            },
            layerDefinition: {
              allOf: [{
                $ref: "#/definitions/layerDefinition_schema.json"
              }, {
                properties: {
                  definitionExpression: {},
                  drawingInfo: {
                    allOf: [{
                      $ref: "#/definitions/drawingInfo_schema.json"
                    }, {
                      properties: {
                        renderer: {},
                        transparency: {}
                      },
                      additionalProperties: !1
                    }]
                  }
                },
                additionalProperties: !1
              }]
            },
            layerType: {
              type: "string",
              description: "String indicating the layer type.",
              "enum": ["ArcGISImageServiceLayer"]
            },
            listMode: {
              type: "string",
              description: "To show or hide layers in the layer list",
              "enum": ["hide", "show"],
              "default": "show"
            },
            maxScale: {
              type: "number",
              description: "A number representing the maximum scale at which the layer will be visible. The number is the scale's denominator.",
              minimum: 0
            },
            minScale: {
              type: "number",
              description: "A number representing the minimum scale at which the layer will be visible. The number is the scale's denominator.",
              minimum: 0
            },
            mosaicRule: {
              type: "object",
              description: "Specifies the mosaic rule when defining how individual images should be mosaicked.",
              $ref: "#/definitions/mosaicRule_schema.json"
            },
            noData: {
              type: "integer",
              description: "The pixel value that represents no information."
            },
            noDataInterpretation: {
              type: "string",
              description: "A string value of interpretation of noData setting. Default is `esriNoDataMatchAny` when noData is a number, and `esriNoDataMatchAll` when noData is an array.",
              "enum": ["esriNoDataMatchAll", "esriNoDataMatchAny"],
              "default": "esriNoDataMatchAny"
            },
            opacity: {
              type: "number",
              description: "The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.",
              minimum: 0,
              maximum: 1,
              "default": 1
            },
            pixelType: {
              type: "string",
              description: "Pertains to the type of values stored in the raster, such as signed integer, unsigned integer, or floating point.",
              "enum": ["C128", "C64", "F32", "F64", "S16", "S32", "S8", "U1", "U16", "U2", "U32", "U4", "U8", "UNKNOWN"]
            },
            popupInfo: {
              type: "object",
              description: "A popupInfo object defining the content of popup windows when you click on the image.",
              $ref: "#/definitions/popupInfo_schema.json"
            },
            refreshInterval: {
              type: "number",
              description: "Refresh interval of the layer in minutes. Non-zero value indicates automatic layer refresh at the specified interval. Value of 0 indicates auto refresh is not enabled."
            },
            renderingRule: {
              type: "object",
              description: "Specifies the rendering rule for how the requested image should be rendered.",
              $ref: "#/definitions/renderingRule_schema.json"
            },
            showLegend: {
              type: "boolean",
              description: "Indicates whether to allow map authors the ability to control what layers should be shown in a client's legend control.",
              "default": !0
            },
            title: {
              type: "string",
              description: "A user-friendly string title for the layer that can be used in a table of contents."
            },
            url: {
              type: "string",
              description: "The URL to the layer."
            },
            visibility: {
              type: "boolean",
              description: "Boolean property determining whether the layer is initially visible in the web map.",
              "default": !0
            }
          },
          required: ["layerType", "title", "url"],
          additionalProperties: !1
        },
        "integratedMeshLayer_schema.json": {
          title: "Integrated Mesh Layer (IntegratedMeshLayer)",
          type: "object",
          description: "An integrated mesh can represent built and natural 3D features, such as building walls, trees, valleys, and cliffs, with realistic textures and includes elevation information.",
          properties: {
            id: {
              type: "string",
              description: "A unique identifying string for the layer."
            },
            itemId: {
              type: "string",
              description: "Optional string containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal."
            },
            layerDefinition: {
              type: "object",
              description: "A layerDefinition object defining the attribute schema and drawing information for the layer.",
              allOf: [{
                $ref: "#/definitions/layerDefinition_schema.json"
              }, {
                properties: {
                  elevationInfo: {},
                  minScale: {},
                  maxScale: {}
                },
                additionalProperties: !1
              }]
            },
            layerType: {
              type: "string",
              description: "String indicating the layer type.",
              "enum": ["IntegratedMeshLayer"]
            },
            listMode: {
              type: "string",
              "enum": ["hide", "show"]
            },
            modifications: {
              type: "string",
              description: "URL to modifications json file, typically stored in `ITEM/resources`. Content of the file follows the $ref:[Modifications schema](modifications_schema.json)."
            },
            opacity: {
              type: "number",
              description: "The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.",
              minimum: 0,
              maximum: 1,
              "default": 1
            },
            path: {
              type: "string",
              description: "For offline data, a path to integrated mesh data in a scene layer package file. A URI format is used, starting with `file:` followed by a file system path with an extension of `.slpk`. A relative path must be from the file which defines the layer. For example `file:../p20/edinburgh.slpk`.",
              pattern: "^file:.+\\.slpk$"
            },
            title: {
              type: "string",
              description: "A user-friendly string title for the layer that can be used in a table of contents. If this is not included, a title is derived from the service."
            },
            url: {
              type: "string",
              description: "The URL to the layer. If the layer is not from a web service but rather a feature collection, then the url property is omitted."
            },
            visibility: {
              type: "boolean",
              description: "Boolean property determining whether the layer is initially visible in the web scene.",
              "default": !0
            }
          },
          anyOf: [{
            required: ["id", "layerType", "title", "url"]
          }, {
            required: ["id", "layerType", "path", "title"]
          }],
          additionalProperties: !1
        },
        "kmlLayer_schema.json": {
          title: "KML Layer (KML)",
          type: "object",
          description: "Keyhole Markup Language (KML) is an XML-based format for storing geographic data and associated content and is an official Open Geospatial Consortium (OGC) standard. KML is a common format for sharing geographic data with non-GIS users as it can be easily delivered on the Internet.",
          properties: {
            id: {
              type: "string",
              description: "A unique identifying string for the layer."
            },
            itemId: {
              type: "string",
              description: "A string containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal."
            },
            layerType: {
              type: "string",
              description: "String indicating the layer type.",
              "enum": ["KML"]
            },
            listMode: {
              type: "string",
              description: "To show or hide the sublayer in the layer list.",
              "enum": ["hide", "show"]
            },
            maxScale: {
              type: "number",
              description: "A number representing the maximum scale at which the layer will be visible. The number is the scale's denominator.",
              minimum: 0
            },
            minScale: {
              type: "number",
              description: "A number representing the minimum scale at which the layer will be visible. The number is the scale's denominator.",
              minimum: 0
            },
            opacity: {
              type: "number",
              description: "The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.",
              minimum: 0,
              maximum: 1,
              "default": 1
            },
            path: {
              type: "string",
              description: "For offline data, a path to a KML file. A URI format is used, starting with `file:` followed by a file system path with an extension of `.kml` or `.kmz`.  A relative path must be from the file which defines the layer. For example `file:../commondata/kml/paris.kml`.",
              pattern: "^file:.+\\.km[lz]$"
            },
            refreshInterval: {
              type: "number",
              description: "Refresh interval of the layer in minutes. Non-zero value indicates automatic layer refresh at the specified interval. Value of 0 indicates auto refresh is not enabled."
            },
            showLegend: {
              type: "boolean",
              description: "Indicates whether to allow scene authors the ability to control what layers should be shown in a client's legend.",
              "default": !0
            },
            title: {
              type: "string",
              description: "A user-friendly string title for the layer that can be used in a table of contents."
            },
            url: {
              type: "string",
              description: "The URL to the layer."
            },
            visibility: {
              type: "boolean",
              description: "Boolean property determining whether the layer is initially visible in the web scene.",
              "default": !0
            },
            visibleFolders: {
              type: "array",
              description: "Array of numeric IDs of folders that will be made visible.",
              items: {
                type: "integer"
              },
              uniqueItems: !0
            }
          },
          anyOf: [{
            required: ["id", "layerType", "title", "url"]
          }, {
            required: ["id", "layerType", "path", "title"]
          }],
          additionalProperties: !1
        },
        "mapServiceLayer_schema.json": {
          title: "Map Service Layer (ArcGISMapServiceLayer)",
          type: "object",
          description: "Map services can be cached (tiled) or uncached (dynamic). This object specifically details properties within uncached map services.",
          properties: {
            id: {
              type: "string",
              description: "A unique identifying string for the layer."
            },
            isReference: {
              type: "boolean",
              description: "This is applicable if used as a baseMapLayer. A boolean value indicating whether or not the baseMapLayer draws on top (true) of other layers, including operationalLayers, or below (false).",
              "default": !1
            },
            itemId: {
              type: "string",
              description: "Optional string containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal."
            },
            layerType: {
              type: "string",
              description: "String indicating the layer type.",
              "enum": ["ArcGISMapServiceLayer"]
            },
            layers: {
              type: "array",
              description: "An array of layer objects defining the styling, geometry, and attribute information for the features.",
              items: {
                allOf: [{
                  $ref: "#/definitions/layer_schema.json"
                }, {
                  properties: {
                    defaultVisibility: {},
                    disablePopup: {},
                    id: {},
                    layerDefinition: {},
                    listMode: {},
                    maxScale: {},
                    minScale: {},
                    name: {},
                    parentLayerId: {},
                    popupInfo: {},
                    showLabels: {},
                    showLegend: {},
                    subLayerIds: {}
                  },
                  additionalProperties: !1
                }]
              },
              uniqueItems: !0
            },
            listMode: {
              type: "string",
              description: "To show or hide the sublayer in the layer list. If the layer has sublayers, selecting `hide-children` will hide them in the layer list.",
              "enum": ["hide", "hide-children", "show"]
            },
            maxScale: {
              type: "number",
              description: "A number representing the maximum scale at which the layer will be visible. The number is the scale's denominator.",
              minimum: 0
            },
            minScale: {
              type: "number",
              description: "A number representing the minimum scale at which the layer will be visible. The number is the scale's denominator.",
              minimum: 0
            },
            opacity: {
              type: "number",
              description: "The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.",
              minimum: 0,
              maximum: 1,
              "default": 1
            },
            refreshInterval: {
              type: "number",
              description: "Refresh interval of the layer in minutes. Non-zero value indicates automatic layer refresh at the specified interval. Value of 0 indicates auto refresh is not enabled."
            },
            showLegend: {
              type: "boolean",
              description: "Boolean value indicating whether to display the layer in the legend. Default value is `true`.",
              "default": !0
            },
            title: {
              type: "string",
              description: "A user-friendly string title for the layer that can be used in a table of contents."
            },
            url: {
              type: "string",
              description: "The URL to the layer."
            },
            visibility: {
              type: "boolean",
              description: "Boolean property determining whether the layer is initially visible in the web scene.",
              "default": !0
            },
            visibleLayers: {
              type: "array",
              description: "An array of sublayer ids that should appear visible. Used with map service layers that are not tiled.",
              items: {
                type: "integer"
              },
              uniqueItems: !0
            }
          },
          required: ["id", "layerType", "title", "url"],
          additionalProperties: !1
        },
        "pointCloudLayer_schema.json": {
          title: "PointCloud Layer",
          type: "object",
          description: "Point cloud data is post-processed spatially organized lidar data that consists of large collections of 3D points. Elevations for the ground, buildings, forest canopy, highway overpasses, and anything else encountered during the lidar survey make up the point cloud data. Point cloud layers allow for fast visualisation of point cloud data in the browser.",
          properties: {
            disablePopup: {
              type: "boolean",
              description: "disablePopups allows a client to ignore popups defined by the service item."
            },
            id: {
              type: "string",
              description: "A unique identifying string for the layer"
            },
            itemId: {
              type: "string",
              description: "Optional string containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal"
            },
            layerDefinition: {
              type: "object",
              description: "A layerDefinition object defining the attribute schema and drawing information for the layer.",
              allOf: [{
                $ref: "#/definitions/layerDefinition_schema.json"
              }, {
                properties: {
                  drawingInfo: {
                    allOf: [{
                      $ref: "#/definitions/drawingInfo_schema.json"
                    }, {
                      properties: {
                        renderer: {},
                        transparency: {}
                      },
                      additionalProperties: !1
                    }]
                  },
                  elevationInfo: {},
                  filters: {},
                  minScale: {},
                  maxScale: {}
                },
                additionalProperties: !1
              }]
            },
            layerType: {
              type: "string",
              description: "String indicating the layer type",
              "enum": ["PointCloudLayer"]
            },
            listMode: {
              type: "string",
              description: "To show or hide the layer in the layer list",
              "enum": ["hide", "show"]
            },
            path: {
              type: "string",
              description: "For offline data, a path to point cloud layer data in a scene layer package file. A URI format is used, starting with `file:` followed by a file system path with an extension of `.slpk`. A relative path must be from the file which defines the layer. For example `file:../p20/zurich.slpk`.",
              pattern: "^file:.+\\.slpk$"
            },
            popupInfo: {
              type: "object",
              description: "A popupInfo object defining the content of pop-up windows when you click a point.",
              $ref: "#/definitions/popupInfo_schema.json"
            },
            showLegend: {
              type: "boolean",
              description: "Boolean value indicating whether to display the layer in the legend. Default value is `true`.",
              "default": !0
            },
            title: {
              type: "string",
              description: "A user-friendly string title for the layer that can be used in a table of contents. If this is not included, a title is derived from the service"
            },
            url: {
              type: "string",
              description: "The URL to the layer."
            },
            visibility: {
              type: "boolean",
              description: "Boolean property determining whether the layer is initially visible",
              "default": !0
            }
          },
          anyOf: [{
            required: ["id", "layerType", "title", "url"]
          }, {
            required: ["id", "layerType", "path", "title"]
          }],
          additionalProperties: !1
        },
        "rasterDataLayer_schema.json": {
          title: "Raster Data Layer",
          type: "object",
          description: "A layer for displaying raster data. This layer only applies to offline data.",
          properties: {
            copyright: {
              type: "string",
              description: "Attribution to the Raster Data Layer provider. It is displayed in the attribution on the scene. Input required by the user when the layer is added to the scene."
            },
            id: {
              type: "string",
              description: "A unique identifying string for the layer."
            },
            layerType: {
              type: "string",
              description: "String indicating the layer type.",
              "enum": ["RasterDataLayer"]
            },
            listMode: {
              type: "string",
              description: "To show or hide the sublayer in the layer list.",
              "enum": ["hide", "show"]
            },
            maxScale: {
              type: "number",
              description: "A number representing the maximum scale at which the layer will be visible. The number is the scale's denominator.",
              minimum: 0
            },
            minScale: {
              type: "number",
              description: "A number representing the minimum scale at which the layer will be visible. The number is the scale's denominator.",
              minimum: 0
            },
            opacity: {
              type: "number",
              description: "The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.",
              minimum: 0,
              maximum: 1,
              "default": 1
            },
            path: {
              type: "string",
              description: "For offline data, a path to a raster data file. A URI format is used, starting with `file:` followed by a file system path. A relative path must be from the file which defines the layer. For example `file:../commondata/raster_data/beijing.tif`.",
              pattern: "^file:.+$"
            },
            title: {
              type: "string",
              description: "A user-friendly string title for the layer that can be used in a table of contents."
            },
            visibility: {
              type: "boolean",
              description: "Boolean property determining whether the layer is initially visible in the scene.",
              "default": !0
            }
          },
          required: ["id", "layerType", "path", "title"],
          additionalProperties: !1
        },
        "sceneLayer_schema.json": {
          title: "Scene Layer (ArcGISSceneServiceLayer)",
          type: "object",
          description: "The SceneLayer is a layer type designed for on-demand streaming and displaying large amounts of data in a SceneView. SceneLayers support two geometry types: Point and 3D Objects (e.g. buildings). The SceneLayer displays data published to a Scene Service. Scene Services can hold large volumes of features in an open format that is suitable for web streaming. The SceneLayer loads these features progressively, starting from coarse representations and refines them to higher detail as necessary for close-up views.",
          properties: {
            disablePopup: {
              type: "boolean",
              description: "disablePopups allows a client to ignore popups defined by the service item."
            },
            id: {
              type: "string",
              description: "A unique identifying string for the layer."
            },
            itemId: {
              type: "string",
              description: "Optional string containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal."
            },
            layerDefinition: {
              type: "object",
              description: "A layerDefinition object defining the attribute schema and drawing information for the layer.",
              allOf: [{
                $ref: "#/definitions/layerDefinition_schema.json"
              }, {
                properties: {
                  definitionExpression: {},
                  drawingInfo: {
                    allOf: [{
                      $ref: "#/definitions/drawingInfo_schema.json"
                    }, {
                      properties: {
                        labelingInfo: {},
                        renderer: {},
                        transparency: {}
                      },
                      additionalProperties: !1
                    }]
                  },
                  elevationInfo: {},
                  featureReduction: {},
                  minScale: {},
                  maxScale: {},
                  rangeInfos: {}
                },
                additionalProperties: !1
              }]
            },
            layerType: {
              type: "string",
              description: "String indicating the layer type.",
              "enum": ["ArcGISSceneServiceLayer"]
            },
            listMode: {
              type: "string",
              description: "To show or hide layers in the layer list",
              "enum": ["hide", "show"]
            },
            opacity: {
              type: "number",
              description: "The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.",
              minimum: 0,
              maximum: 1,
              "default": 1
            },
            path: {
              type: "string",
              description: "For offline data, a path to a scene layer package file. A URI format is used, starting with `file:` followed by a file system path with an extension of `.slpk`. A relative path must be from the file which defines the layer. For example `file:../p20/northamerica.slpk`.",
              pattern: "^file:.+\\.slpk$"
            },
            popupInfo: {
              type: "object",
              description: "A popupInfo object defining the content of pop-up windows when you click or query a feature.",
              $ref: "#/definitions/popupInfo_schema.json"
            },
            screenSizePerspective: {
              type: "boolean",
              description: "Apply [perspective scaling](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#screenSizePerspectiveEnabled) to screen-size symbols.",
              "default": !1
            },
            showLabels: {
              type: "boolean",
              description: "If the layer has a labelingInfo property then labels show on the scene only if the showLabels property it true.",
              "default": !1
            },
            showLegend: {
              type: "boolean",
              description: "Boolean value indicating whether to display the layer in the legend. Default value is `true`.",
              "default": !0
            },
            title: {
              type: "string",
              description: "A user-friendly string title for the layer that can be used in a table of contents."
            },
            url: {
              type: "string",
              description: "The URL to the service."
            },
            visibility: {
              type: "boolean",
              description: "Boolean property determining whether the layer is initially visible in the web scene",
              "default": !0
            }
          },
          anyOf: [{
            required: ["id", "layerType", "title", "url"]
          }, {
            required: ["id", "layerType", "path", "title"]
          }],
          additionalProperties: !1
        },
        "tiledImageServiceLayer_schema.json": {
          title: "Tiled Image Service Layer (ArcGISTiledImageServiceLayer)",
          type: "object",
          description: "An ArcGIS Tiled Image Service layer displays content from an ArcGIS Server Image service that has been cached (tiled).",
          properties: {
            bandIds: {
              type: "array",
              description: "An array of bandIds that are visible for a multispectral dataset. It can specify bands to export or rearrange band order(from image service).",
              items: {
                type: "integer"
              },
              minItems: 1
            },
            disablePopup: {
              type: "boolean",
              description: "Indicates whether to allow a client to ignore popups defined by the service item."
            },
            id: {
              type: "string",
              description: "A unique identifying string for the layer."
            },
            interpolation: {
              type: "string",
              description: "String indicating the interpolation type.",
              "enum": ["RSP_BilinearInterpolation", "RSP_CubicConvolution", "RSP_Majority", "RSP_NearestNeighbor"]
            },
            isReference: {
              type: "boolean",
              description: "Applicable if used as a baseMapLayer. A boolean value indicating whether or not the baseMapLayer draws on top (true) of other layers, including operationalLayers , or below (false)."
            },
            itemId: {
              type: "string",
              description: "Optional string containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal."
            },
            layerDefinition: {
              allOf: [{
                $ref: "#/definitions/layerDefinition_schema.json"
              }, {
                properties: {
                  drawingInfo: {
                    allOf: [{
                      $ref: "#/definitions/drawingInfo_schema.json"
                    }, {
                      properties: {
                        renderer: {},
                        transparency: {}
                      },
                      additionalProperties: !1
                    }]
                  }
                },
                additionalProperties: !1
              }]
            },
            layerType: {
              type: "string",
              description: "String indicating the layer type.",
              "enum": ["ArcGISTiledImageServiceLayer"]
            },
            listMode: {
              type: "string",
              description: "To show or hide the sublayer in the layer list.",
              "enum": ["hide", "show"]
            },
            maxScale: {
              type: "number",
              description: "A number representing the maximum scale at which the layer will be visible. The number is the scale's denominator.",
              minimum: 0
            },
            minScale: {
              type: "number",
              description: "A number representing the minimum scale at which the layer will be visible. The number is the scale's denominator.",
              minimum: 0
            },
            multidimensionalDefinition: {
              type: "array",
              description: "An array of objects representing a slice from multidimensional data.",
              items: {
                type: "object",
                $ref: "#/definitions/multidimensionalDefinition_schema.json"
              }
            },
            opacity: {
              type: "number",
              description: "The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.",
              minimum: 0,
              maximum: 1,
              "default": 1
            },
            popupInfo: {
              type: "object",
              description: "A popupInfo object defining the content of popup windows when you click on the image.",
              $ref: "#/definitions/popupInfo_schema.json"
            },
            refreshInterval: {
              type: "number",
              description: "Refresh interval of the layer in minutes. Non-zero value indicates automatic layer refresh at the specified interval. Value of 0 indicates auto refresh is not enabled."
            },
            showLegend: {
              type: "boolean",
              description: "Boolean value indicating whether to display the layer in the legend. Default value is `true`.",
              "default": !0
            },
            title: {
              type: "string",
              description: "A user-friendly string title for the layer that can be used in a table of contents."
            },
            url: {
              type: "string",
              description: "URL to the ArcGIS Server Image Service."
            },
            visibility: {
              type: "boolean",
              description: "Boolean property determining whether the layer is initially visible.",
              "default": !0
            }
          },
          required: ["id", "layerType", "title", "url"],
          additionalProperties: !1
        },
        "tiledMapServiceLayer_schema.json": {
          title: "Tiled Map Service Layer (ArcGISTiledMapServiceLayer)",
          type: "object",
          description: "An ArcGIS Tiled Map Service layer displays map content from an ArcGIS Server Map service that has been cached (tiled).",
          properties: {
            id: {
              type: "string",
              description: "A unique identifying string for the layer."
            },
            isReference: {
              type: "boolean",
              description: "This property is applicable if used as a baseMapLayer. A boolean value indicating whether or not the baseMapLayer draws on top (true) of other layers, including operationalLayers , or below (false)."
            },
            itemId: {
              type: "string",
              description: "Optional string containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal."
            },
            layerType: {
              type: "string",
              description: "String indicating the layer type.",
              "enum": ["ArcGISTiledMapServiceLayer"]
            },
            layers: {
              type: "array",
              description: "An array of layer objects defining a URL for queries and the popup window content.",
              items: {
                allOf: [{
                  $ref: "#/definitions/layer_schema.json"
                }, {
                  properties: {
                    disablePopup: {},
                    id: {},
                    popupInfo: {},
                    showLegend: {},
                    listMode: {},
                    layerUrl: {},
                    name: {}
                  },
                  additionalProperties: !1
                }]
              },
              uniqueItems: !0
            },
            listMode: {
              type: "string",
              description: "To show or hide the sublayer in the layer list. If the layer has sublayers, selecting `hide-children` will hide them in the layer list.",
              "enum": ["hide", "hide-children", "show"]
            },
            maxScale: {
              type: "number",
              description: "A number representing the maximum scale at which the layer will be visible. The number is the scale's denominator.",
              minimum: 0
            },
            minScale: {
              type: "number",
              description: "A number representing the minimum scale at which the layer will be visible. The number is the scale's denominator.",
              minimum: 0
            },
            opacity: {
              type: "number",
              description: "The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.",
              minimum: 0,
              maximum: 1,
              "default": 1
            },
            path: {
              type: "string",
              description: "For offline data, a path to a tile package file. A URI format is used, starting with `file:` followed by a file system path with an extension of `.tpk` or `.tpkx`. A relative path must be from the file which defines the layer. For example `file:../p20/northamerica.tpk`.",
              pattern: "^file:.+\\.tpkx?$"
            },
            refreshInterval: {
              type: "number",
              description: "Refresh interval of the layer in minutes. Non-zero value indicates automatic layer refresh at the specified interval. Value of 0 indicates auto refresh is not enabled.",
              "default": 0
            },
            showLegend: {
              type: "boolean",
              description: "Boolean value indicating whether to display the layer in the legend. Default value is `true`.",
              "default": !0
            },
            title: {
              type: "string",
              description: "A user-friendly string title for the layer that can be used in a table of contents. If this is not included, a title is derived from the service."
            },
            url: {
              type: "string",
              description: "URL to the ArcGIS Server tiled Map Service"
            },
            visibility: {
              type: "boolean",
              description: "Boolean property determining whether the layer is initially visible in the map.",
              "default": !0
            }
          },
          anyOf: [{
            required: ["id", "layerType", "title", "url"]
          }, {
            required: ["id", "layerType", "path", "title"]
          }],
          additionalProperties: !1
        },
        "vectorTileLayer_schema.json": {
          title: "Vector Tile Layer (VectorTileLayer)",
          type: "object",
          description: "A vector tile layer references a set of web-accessible vector tiles and the corresponding style for how those tiles should be drawn.",
          properties: {
            id: {
              type: "string",
              description: "A unique identifying string for the layer."
            },
            isReference: {
              type: "boolean",
              description: "This property is applicable if used as a baseMapLayer. A boolean value indicating whether or not the baseMapLayer draws on top (true) of other layers, including operationalLayers, or below (false)."
            },
            itemId: {
              type: "string",
              description: "Optional string containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal."
            },
            layerType: {
              type: "string",
              description: "String indicating the layer type.",
              "enum": ["VectorTileLayer"]
            },
            listMode: {
              type: "string",
              description: "To show or hide the layer in the layer list",
              "enum": ["hide", "show"]
            },
            maxScale: {
              type: "number",
              description: "A number representing the maximum scale at which the layer will be visible. The number is the scale's denominator."
            },
            minScale: {
              type: "number",
              description: "A number representing the minimum scale at which the layer will be visible. The number is the scale's denominator."
            },
            opacity: {
              type: "number",
              description: "The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.",
              minimum: 0,
              maximum: 1,
              "default": 1
            },
            styleUrl: {
              type: "string",
              description: "A url to a JSON file containing the stylesheet information used to render the layer. You may also pass an object containing the stylesheet information identical to the JSON file."
            },
            title: {
              type: "string",
              description: "A user-friendly string title for the layer that can be used in a table of contents."
            },
            visibility: {
              type: "boolean",
              description: "Boolean property determining whether the layer is initially visible.",
              "default": !0
            }
          },
          required: ["id", "layerType", "styleUrl", "title"],
          additionalProperties: !1
        },
        "webTiledLayer_schema.json": {
          title: "Web Tiled Layer (WebTiledLayer)",
          type: "object",
          description: "A tile layer is a derived from a set of web-accessible tiles which reside on a server. The tiles are accessed by a direct URL request from the web browser. Because the tiles in a tile layer are not available as a service, they must be in a specific format for a web app such as the ArcGIS.com scene viewer to display the layer on a scene.",
          properties: {
            copyright: {
              type: "string",
              description: "Attribution to the Web Tiled Layer provider. It is displayed in the attribution on the web scene. Input required by the user when the layer is added to the web scene."
            },
            fullExtent: {
              type: "object",
              description: "An extent object representing the full extent envelope for the layer.",
              $ref: "#/definitions/extent_schema.json"
            },
            id: {
              type: "string",
              description: "A unique identifying string for the layer."
            },
            isReference: {
              type: "boolean",
              description: "This is applicable if used as a basesceneLayer. A boolean value indicating whether or not the basesceneLayer draws on top (true) of other layers, including operationalLayers , or below (false)."
            },
            itemId: {
              type: "string",
              description: "Unique string value indicating an item registered in ArcGIS Online or your organization's portal."
            },
            layerType: {
              type: "string",
              description: "String indicating the layer type.",
              "enum": ["WebTiledLayer"]
            },
            listMode: {
              type: "string",
              description: "To show or hide the layer in the layer list",
              "enum": ["hide", "show"]
            },
            maxScale: {
              type: "number",
              description: "A number representing the maximum scale at which the layer will be visible. The number is the scale's denominator.",
              minimum: 0
            },
            minScale: {
              type: "number",
              description: "A number representing the minimum scale at which the layer will be visible. The number is the scale's denominator.",
              minimum: 0
            },
            opacity: {
              type: "number",
              description: "The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.",
              minimum: 0,
              maximum: 1,
              "default": 1
            },
            refreshInterval: {
              type: "number",
              description: "Refresh interval of the layer in minutes. Non-zero value indicates automatic layer refresh at the specified interval. Value of 0 indicates auto refresh is not enabled."
            },
            subDomains: {
              type: "array",
              description: "If subdomains are detected, they must be specified. The scene viewer detects if the Web Tiled Layer has subdomains by parsing the templateURL value for {subDomain}.",
              items: {
                type: "string"
              }
            },
            templateUrl: {
              type: "string",
              description: "URL to the Web Tiled Layer. Input required by the user when the layer is added to the web scene. The template URL contains a parameterized URL. The URL can contain the following templated parameters: `level`, `col`, `row`, and `subDomain`."
            },
            tileInfo: {
              type: "object",
              description: "Contains the spatial reference and the tiling scheme of the layer. Typically retrieved from a WMTS OGC Web Service. If missing the layer must be in the WGS 1984 Web Mercator (Auxiliary Sphere) tiling scheme.",
              $ref: "#/definitions/tileInfo_schema.json"
            },
            title: {
              type: "string",
              description: "A user-friendly string title for the layer that can be used in a table of contents."
            },
            visibility: {
              type: "boolean",
              description: "Boolean property determining whether the layer is initially visible in the web scene.",
              "default": !0
            },
            wmtsInfo: {
              type: "object",
              description: "Object containing information about the chosen WMTS service layer and tiling schema.",
              $ref: "#/definitions/wmtsInfo_schema.json"
            }
          },
          required: ["id", "layerType", "title"],
          additionalProperties: !1
        },
        "wmsLayer_schema.json": {
          title: "WMS Layer (WMS)",
          type: "object",
          description: "A layer consuming a Web Map Service (WMS). The WMS specification is an international specification for serving and consuming dynamic maps on the web.",
          properties: {
            copyright: {
              type: "string",
              description: "A string containing copyright and access information for a WMS layer. This is copied from the capabilities document exposed by the WMS service."
            },
            customLayerParameters: {
              type: "object",
              description: "A sequence of custom parameters to WMS layer requests. These parameters are applied to `GetMap` and `GetFeatureInfo` requests. The `customLayerParameters` property takes precedence if `customParameters` is also present.",
              patternProperties: {
                ".*": {
                  type: "string"
                }
              }
            },
            customParameters: {
              type: "object",
              description: "A sequence of custom parameters to all WMS requests. These parameters are applied to `GetCapabilities`, `GetMap`, and `GetFeatureinfo` requests. If used with the `customLayerParameters` property, `customParameters` will not take precedence.",
              patternProperties: {
                ".*": {
                  type: "string"
                }
              }
            },
            extent: {
              type: "array",
              description: "The minimum bounding rectangle, in decimal degrees, of the area covered by the layer as specified in the capabilities.",
              items: {
                type: "array",
                items: {
                  type: "number"
                },
                minItems: 2,
                maxItems: 2
              },
              minItems: 2,
              maxItems: 2
            },
            featureInfoFormat: {
              type: "string",
              description: "Format of the feature, e.g.`text/plain`"
            },
            featureInfoUrl: {
              type: "string",
              description: "The URL for the WMS GetFeatureInfo call."
            },
            format: {
              type: "string",
              description: "A string containing the image format to be requested from a WMS service. Default is `png`.",
              "enum": ["bmp", "gif", "jpg", "png", "svg"],
              "default": "png"
            },
            id: {
              type: "string",
              description: "A unique identifying string for the layer."
            },
            isReference: {
              type: "boolean",
              description: "This is applicable if used as a baseMapLayer. A boolean value indicating whether or not the baseMapLayer draws on top (true) of other layers, including operationalLayers, or below (false).",
              "default": !1
            },
            itemId: {
              type: "string",
              description: "Unique string value indicating an item registered in ArcGIS Online or your organization's portal."
            },
            layerType: {
              type: "string",
              description: "String indicating the layer type.",
              "enum": ["WMS"]
            },
            layers: {
              type: "array",
              description: "An array of layer objects from the WMS service.",
              items: {
                type: "object",
                $ref: "#/definitions/wmsLayer_layer_schema.json"
              },
              uniqueItems: !0
            },
            listMode: {
              type: "string",
              description: "To show or hide the sublayer in the layer list. If the layer has sublayers, selecting `hide-children` will hide them in the layer list.",
              "enum": ["hide", "hide-children", "show"]
            },
            mapUrl: {
              type: "string",
              description: "A string containing the URL of the WMS map. When using a WMS layer, you should also supply the url property. `mapUrl` is the URL returned by the capabilities to be used for the getMap requests."
            },
            maxHeight: {
              type: "number",
              description: "A number defining the maximum height, in pixels, that should be requested from the service."
            },
            maxScale: {
              type: "number",
              description: "A number representing the maximum scale at which the layer will be visible. The number is the scale's denominator.",
              minimum: 0
            },
            maxWidth: {
              type: "number",
              description: "A number defining the maximum width, in pixels, that should be requested from the service."
            },
            minScale: {
              type: "number",
              description: "A number representing the minimum scale at which the layer will be visible. The number is the scale's denominator.",
              minimum: 0
            },
            opacity: {
              type: "number",
              description: "The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.",
              minimum: 0,
              maximum: 1,
              "default": 1
            },
            refreshInterval: {
              type: "number",
              description: "Refresh interval of the layer in minutes. Non-zero value indicates automatic layer refresh at the specified interval. Value of 0 indicates auto refresh is not enabled."
            },
            showLegend: {
              type: "boolean",
              description: "Boolean value indicating whether to display the layer in the legend."
            },
            spatialReferences: {
              type: "array",
              description: "An array of numbers containing well-known IDs for spatial references supported by the service.",
              items: {
                type: "integer",
                description: "well-known ID"
              }
            },
            title: {
              type: "string",
              description: "A user-friendly string title for the layer that can be used in a table of contents."
            },
            url: {
              type: "string",
              description: "The URL to the WMS service (`getCapabilities` URL)."
            },
            version: {
              type: "string",
              description: "A string containing the version number of the service."
            },
            visibility: {
              type: "boolean",
              description: "Boolean property determining whether the layer is initially visible in the web map.",
              "default": !0
            },
            visibleLayers: {
              type: "array",
              description: "An array of layers that should appear visible. The array contains the names of the visible layers.",
              items: {
                type: "string"
              },
              uniqueItems: !0
            }
          },
          required: ["layerType", "title"],
          additionalProperties: !1
        },
        "slide_schema.json": {
          title: "slide",
          type: "object",
          description: "A slide object used within a presentation.",
          properties: {
            baseMap: {
              description: "The basemap to be displayed on the slide.",
              allOf: [{
                $ref: "#/definitions/baseMap_schema.json"
              }, {
                properties: {
                  baseMapLayers: {},
                  title: {},
                  id: {},
                  transparency: {}
                },
                additionalProperties: !1
              }]
            },
            description: {
              type: "object",
              description: "Text description of the individual presentation slide.",
              $ref: "#/definitions/description_schema.json"
            },
            environment: {
              type: "object",
              description: "Represents settings that affect the environment in which the web scene is displayed.",
              allOf: [{
                $ref: "#/definitions/environment_schema.json"
              }, {
                properties: {
                  lighting: {}
                },
                additionalProperties: !1
              }]
            },
            ground: {
              description: "The ground properties to be set in the slide.",
              $ref: "#/definitions/slide_ground_schema.json"
            },
            id: {
              type: "string",
              description: "The unique id of a slide within the slides property of a Presentation."
            },
            thumbnail: {
              type: "object",
              $ref: "#/definitions/thumbnail_schema.json"
            },
            title: {
              type: "object",
              $ref: "#/definitions/title_schema.json"
            },
            viewpoint: {
              type: "object",
              $ref: "#/definitions/viewpoint_schema.json"
            },
            visibleLayers: {
              type: "array",
              description: "An array of objects used to indicate the visible layers of the web scene.",
              items: {
                type: "object",
                $ref: "#/definitions/visibleLayer_schema.json"
              }
            }
          },
          required: ["id", "thumbnail", "title", "viewpoint", "visibleLayers"],
          additionalProperties: !1
        },
        "definitionEditor_schema.json": {
          title: "definitionEditor",
          type: "object",
          description: "The definitionEditor stores interactive filters at the same level as layerDefinition.",
          properties: {
            inputs: {
              type: "array",
              description: "An array of input objects.",
              items: {
                type: "object",
                $ref: "#/definitions/input_schema.json"
              }
            },
            parameterizedExpression: {
              type: "string",
              description: "A string value representing the where clause for the interactive filter."
            }
          },
          additionalProperties: !1
        },
        "range_schema.json": {
          title: "Range",
          description: "Range object.",
          properties: {
            interactionMode: {
              type: "string",
              description: "Indicates the mode in which the active range should be presented to the user.",
              "enum": ["picker", "slider"]
            },
            numberOfStops: {
              type: "integer",
              description: "This is used to generate the activeRangeValues if activeRangeValues are not specified."
            },
            stopInterval: {
              type: "number",
              description: "Interval in which stops should be generated."
            }
          },
          oneOf: [{
            required: ["interactionMode", "numberOfStops"]
          }, {
            required: ["interactionMode", "stopInterval"]
          }],
          additionalProperties: !1
        },
        "buildingSceneLayer_filterAuthoringInfoCheckbox_schema.json": {
          title: "Metadata for checkbox based filter UI",
          type: "object",
          description: "Client UI with checkbox representation for each filter type and filter value.",
          properties: {
            filterBlocks: {
              type: "array",
              description: "Array of filter block authoring infos.",
              items: {
                type: "object",
                $ref: "#/definitions/buildingSceneLayer_filterAuthoringInfo_filterBlock_schema.json"
              }
            },
            type: {
              type: "string",
              description: "Type of filter authoring info.",
              "enum": ["checkbox"]
            }
          },
          required: ["filterBlocks", "type"],
          additionalProperties: !1
        },
        "buildingSceneLayer_filterBlock_schema.json": {
          title: "Building Scene Layer Filter Block",
          type: "object",
          description: "A filter block defines what elements will be filtered with a specific filter mode.  To ensure performance on client applications, it is not recommended to declare multiple filter blocks with the same filter mode. Filter blocks are contained in a filter for a building scene layer. Each filter includes at least one filter block.",
          properties: {
            filterExpression: {
              type: "string",
              description: "SQL expression to select features that belong to this filter block."
            },
            filterMode: {
              type: "object",
              $ref: "#/definitions/buildingSceneLayer_filterMode_schema.json"
            },
            title: {
              type: "string",
              description: "Title of the filter block."
            }
          },
          required: ["filterExpression", "filterMode", "title"],
          additionalProperties: !1
        },
        "elevationInfo_schema.json": {
          title: "elevationInfo",
          type: "object",
          description: "Elevation info defines how features are aligned to ground or other layers.",
          properties: {
            featureExpression: {
              type: "object",
              description: '<em>Deprecated with 1.8, use `featureExpressionInfo` instead</em>. `{"value":0}` ignores geometry z-values.',
              properties: {
                value: {
                  type: "number",
                  "enum": [0]
                }
              },
              minProperties: 1,
              additionalProperties: !1
            },
            featureExpressionInfo: {
              type: "object",
              description: "An object that defines an expression for per-feature elevation. If not set, geometry.z values are used for elevation. `unit` is applied to the resulting expression value.",
              $ref: "#/definitions/featureExpressionInfo_schema.json"
            },
            mode: {
              type: "string",
              description: "Determines how the service elevation values are combined with the elevation of the scene.",
              "enum": ["absoluteHeight", "onTheGround", "relativeToGround", "relativeToScene"]
            },
            offset: {
              type: "number",
              description: "Offset is always added to the result of the above logic except for onTheGround where offset is ignored."
            },
            unit: {
              type: "string",
              description: 'A string value indicating the unit for the values in elevationInfo. Applies to both `offset` and `featureExpressionInfo`. Defaults to `meter` if not set. <a href="#unit"><sup>1</sup></a>',
              "default": "meter"
            }
          },
          required: ["mode"],
          additionalProperties: !1
        },
        "featureReduction_select_schema.json": {
          title: "Feature Reduction: Selection",
          type: "object",
          description: "Feature reduction of type `selection` declutters the screen by hiding features that would otherwise intersect with other features on screen. The default behavior of this feature reduction type is to select features by depth order, i.e. hide all features that would otherwise be overlapped by at least one other feature which is closer to the viewer.",
          properties: {
            type: {
              type: "string",
              description: "A string value indicating the feature reduction type.",
              "enum": ["selection"]
            }
          }
        },
        "field_schema.json": {
          title: "field",
          type: "object",
          description: "Contains information about an attribute field.",
          properties: {
            alias: {
              type: "string",
              description: "A string defining the field alias."
            },
            defaultValue: {
              type: ["null", "number", "string"],
              description: "The default value set for the field."
            },
            domain: {
              type: "object",
              description: "The domain objects if applicable.",
              $ref: "#/definitions/domain_schema.json"
            },
            editable: {
              type: "boolean",
              description: "A Boolean defining whether this field is editable."
            },
            length: {
              type: "integer",
              description: "A number defining how many characters are allowed in a string field."
            },
            name: {
              type: "string",
              description: "A string defining the field name."
            },
            nullable: {
              type: "boolean",
              description: "A Boolean defining whether this field can have a null value."
            },
            type: {
              type: "string",
              description: "A string defining the field type.",
              "enum": ["esriFieldTypeBlob", "esriFieldTypeDate", "esriFieldTypeDouble", "esriFieldTypeGUID", "esriFieldTypeGeometry", "esriFieldTypeGlobalID", "esriFieldTypeInteger", "esriFieldTypeLong", "esriFieldTypeOID", "esriFieldTypeRaster", "esriFieldTypeSingle", "esriFieldTypeSmallInteger", "esriFieldTypeString", "esriFieldTypeXML"]
            }
          },
          additionalProperties: !1
        },
        "pointCloudFilter_schema.json": {
          title: "PointCloud Filter",
          type: "object",
          description: "Filters applied to the pointCloud which will hide a point.",
          oneOf: [{
            $ref: "#/definitions/pointCloudBitfieldFilter_schema.json"
          }, {
            $ref: "#/definitions/pointCloudReturnFilter_schema.json"
          }, {
            $ref: "#/definitions/pointCloudValueFilter_schema.json"
          }]
        },
        "rangeInfo_schema.json": {
          title: "Range Information",
          description: "Range Information.",
          properties: {
            currentRangeExtent: {
              type: "array",
              description: "Contains the min and max values within which the features are visible.",
              items: {
                type: "number"
              },
              minItems: 2,
              maxItems: 2
            },
            field: {
              type: "string",
              description: "Field name to used for the range."
            },
            fullRangeExtent: {
              type: "array",
              description: "Contains the min and max values of all the features for this rangeInfo.",
              items: {
                type: "number"
              },
              minItems: 2,
              maxItems: 2
            },
            name: {
              type: "string",
              description: "A unique name that can be referenced by webMap.activeRanges."
            },
            type: {
              type: "string",
              description: "Type of range object.",
              "enum": ["rangeInfo"]
            }
          },
          required: ["field", "name", "type"],
          additionalProperties: !1
        },
        "source_schema.json": {
          title: "source",
          type: "object",
          description: "Contains [dynamicDataLayer](dynamicDataLayer_source.md) object and [dynamicMapLayer](dynamicDataLayer_source.md) object. If the service supports dynamic layers, the [layerDefinition's ](layerDefinition.md) source property must be specified.",
          oneOf: [{
            $ref: "#/definitions/dynamicDataLayer_source_schema.json"
          }, {
            $ref: "#/definitions/dynamicMapLayer_source_schema.json"
          }]
        },
        "type_schema.json": {
          title: "type",
          type: "object",
          description: "Contains information about an attribute field.",
          properties: {
            domains: {
              type: "object",
              description: "A comma-delimited series of domain objects for each domain in the type.",
              patternProperties: {
                ".*": {
                  type: "object",
                  $ref: "#/definitions/domain_schema.json"
                }
              }
            },
            id: {
              type: ["number", "string"],
              description: "A unique string or numerical ID for the type."
            },
            name: {
              type: "string",
              description: "A user-friendly name for the type."
            },
            templates: {
              type: "array",
              description: "Defined as a property of the layer definition when there are no types defined; otherwise, templates are defined as properties of the types.",
              items: {
                type: "object",
                $ref: "#/definitions/template_schema.json"
              },
              uniqueItems: !0
            }
          },
          required: ["id"],
          additionalProperties: !1
        },
        "popupExpressionInfo_schema.json": {
          title: "popupExpressionInfo",
          description: "Arcade expression added to the pop-up.",
          properties: {
            expression: {
              type: "string",
              description: "The Arcade expression."
            },
            name: {
              type: "string",
              description: "Unique identifier for the expression."
            },
            returnType: {
              type: "string",
              description: "Return type of the Arcade expression, can be number or string. Defaults to string value. Number values are assumed to be `double`. This can be determined by the authoring client by executing the expression using a sample feature(s), although it can be corrected by the user. Knowing the returnType allows the authoring client to present fields in relevant contexts. For example, numeric fields in numeric contexts such as charts.",
              "enum": ["number", "string"]
            },
            title: {
              type: "string",
              description: "Title of the expression."
            }
          },
          additionalProperties: !1
        },
        "fieldInfo_schema.json": {
          title: "fieldInfo",
          type: "object",
          description: "Defines how a field in the dataset participates (or does not participate) in a popup window.",
          properties: {
            fieldName: {
              type: "string",
              description: "A string containing the field name as defined by the service. Anywhere that a fieldname is referenced as `{field-name} in popupInfo, an Arcade expression can also be referenced as `{expression/<expression-name>}`."
            },
            format: {
              type: "object",
              description: "A format object used with numerical or date fields to provide more detail about how the value should be displayed in a popup window.",
              $ref: "#/definitions/format_schema.json"
            },
            isEditable: {
              type: "boolean",
              description: "A Boolean determining whether users can edit this field. Not applicable to Arcade expressions.",
              "default": !1
            },
            label: {
              type: "string",
              description: "A string containing the field alias. This can be overridden by the web map author. Not applicable to Arcade expressions as `title` is used instead."
            },
            statisticType: {
              type: "string",
              description: "Used in a 1:many or many:many relationship to compute the statistics on the field to show in the popup.",
              "enum": ["avg", "count", "max", "min", "stddev", "sum", "var"]
            },
            stringFieldOption: {
              type: "string",
              description: "A string determining what type of input box editors see when editing the field. Applies only to string fields. Not applicable to Arcade expressions.",
              "enum": ["richtext", "textarea", "textbox"],
              "default": "textbox"
            },
            tooltip: {
              type: "string",
              description: "A string providing an editing hint for editors of the field. Not applicable to Arcade expressions."
            },
            visible: {
              type: "boolean",
              description: "A Boolean determining whether the field is visible in the popup window."
            }
          },
          additionalProperties: !1
        },
        "popupLayerOptions_schema.json": {
          title: "Layer Options",
          type: "object",
          description: "Additional options available for the popup layer.",
          properties: {
            returnTopmostRaster: {
              type: "boolean",
              description: "Indicates whether or not only the topmost raster should be displayed."
            },
            showNoDataRecords: {
              type: "boolean",
              description: "Indicates whether or not the NoData records should be displayed."
            }
          }
        },
        "mediaInfo_schema.json": {
          title: "mediaInfo",
          type: "object",
          description: "Defines an image or a chart to be displayed in a popup window.",
          oneOf: [{
            $ref: "#/definitions/mediaInfo_chart_schema.json"
          }, {
            $ref: "#/definitions/mediaInfo_image_schema.json"
          }]
        },
        "popupElement_schema.json": {
          title: "popupElement",
          type: "object",
          description: "Popup elements allow users to author popups, using multiple elements such as tabular views, string description, media (charts and images), and attachments of the attributes and control the order in which they appear. Specifically, popupElements do the following: 1) provide the ability to explicitly add a field/ value table in addition to a description, 2) allow adding multiple description elements, and 3) allow a user to author and consume elements of a popup in the order of their choosing.",
          oneOf: [{
            $ref: "#/definitions/popupElement_attachments_schema.json"
          }, {
            $ref: "#/definitions/popupElement_fields_schema.json"
          }, {
            $ref: "#/definitions/popupElement_media_schema.json"
          }, {
            $ref: "#/definitions/popupElement_text_schema.json"
          }]
        },
        "relatedRecordsInfo_schema.json": {
          title: "relatedRecordsInfo",
          type: "object",
          description: "The sort in the popupInfo for the parent feature. This impacts the sorting order for the returned child records.",
          properties: {
            orderByFields: {
              type: "array",
              description: "Array of orderByFields objects indicating the field display order for the related records and whether they should be sorted in ascending `asc` or descending `desc` order.",
              items: {
                type: "object",
                $ref: "#/definitions/orderByFields_schema.json"
              }
            },
            showRelatedRecords: {
              type: "boolean",
              description: "Required boolean value indicating whether to display related records. If <code>true</code>, client should let the user navigate to the related records. Defaults to <code>true</code> if the layer participates in a relationship AND the related layer/table has already been added to the scene (either as an operationalLayer or as a table)."
            }
          }
        },
        "labelingInfo_schema.json": {
          title: "labelingInfo",
          type: "object",
          description: "The labelingInfo object specifies the label definition for a layer.",
          properties: {
            labelExpression: {
              type: "string",
              description: "Defines the expression for text of labels. <em>Deprecated on FeatureLayer, Use `labelExpressionInfo` instead.</em>"
            },
            labelExpressionInfo: {
              type: "object",
              $ref: "#/definitions/labelExpressionInfo_schema.json"
            },
            labelPlacement: {
              type: "string",
              description: "This string property specifies the label placement with respect to that of its feature. A list of label placement values categorized by feature geometry types.",
              "enum": ["esriServerLinePlacementAboveAfter", "esriServerLinePlacementAboveAlong", "esriServerLinePlacementAboveBefore", "esriServerLinePlacementAboveEnd", "esriServerLinePlacementAboveStart", "esriServerLinePlacementBelowAfter", "esriServerLinePlacementBelowAlong", "esriServerLinePlacementBelowBefore", "esriServerLinePlacementBelowEnd", "esriServerLinePlacementBelowStart", "esriServerLinePlacementCenterAfter", "esriServerLinePlacementCenterAlong", "esriServerLinePlacementCenterBefore", "esriServerLinePlacementCenterEnd", "esriServerLinePlacementCenterStart", "esriServerPointLabelPlacementAboveCenter", "esriServerPointLabelPlacementAboveLeft", "esriServerPointLabelPlacementAboveRight", "esriServerPointLabelPlacementBelowCenter", "esriServerPointLabelPlacementBelowLeft", "esriServerPointLabelPlacementBelowRight", "esriServerPointLabelPlacementCenterCenter", "esriServerPointLabelPlacementCenterLeft", "esriServerPointLabelPlacementCenterRight", "esriServerPolygonPlacementAlwaysHorizontal"]
            },
            maxScale: {
              type: "number",
              description: "Represents the maximum scale at which the layer definition will be applied."
            },
            minScale: {
              type: "number",
              description: "Represents the minimum scale at which the layer definition will be applied."
            },
            name: {
              type: "string",
              description: "The name of the label class."
            },
            symbol: {
              type: "object",
              description: "The text symbol used to label.",
              $ref: "#/definitions/labelSymbol3D_schema.json"
            },
            useCodedValues: {
              type: "boolean",
              description: "Boolean value indicating whether to display the coded values for the specified field name(s)."
            },
            where: {
              type: "string",
              description: "String template used to determine which features to label."
            }
          },
          additionalProperties: !1
        },
        "renderer_schema.json": {
          title: "renderer",
          type: "object",
          description: "The renderer object contains the drawing information for the operationalLayer. This is a list of links to all the renderer objects.",
          oneOf: [{
            $ref: "#/definitions/classBreaksRenderer_schema.json"
          }, {
            $ref: "#/definitions/pointCloudRenderers_schema.json"
          }, {
            $ref: "#/definitions/rasterRenderers_schema.json"
          }, {
            $ref: "#/definitions/simpleRenderer_schema.json"
          }, {
            $ref: "#/definitions/uniqueValueFromStyleRenderer_schema.json"
          }, {
            $ref: "#/definitions/uniqueValueRenderer_schema.json"
          }]
        },
        "search_schema.json": {
          title: "search",
          type: "object",
          description: "An object specifying the search parameters set within the web scene.",
          properties: {
            enabled: {
              type: "boolean",
              description: "A boolean value indicating whether search functionality is enabled in the web scene.",
              "default": !0
            },
            hintText: {
              type: "string",
              description: "A string value used to indicate the hint provided with the search dialog."
            },
            layers: {
              type: "array",
              description: "An array of layers to be included in search.",
              items: {
                type: "object",
                $ref: "#/definitions/search_layer_schema.json"
              },
              minItems: 1,
              uniqueItems: !0
            }
          },
          required: ["layers"],
          additionalProperties: !1
        },
        "openStreetMapLayer_schema.json": {
          title: "OpenStreetMap Layer (OpenStreetMap)",
          type: "object",
          description: "Allows use of OpenStreetMap data for use in basemaps only.",
          properties: {
            id: {
              type: "string",
              description: "An identifying string for the layer, unique per scene.",
              "default": "defaultBasemap"
            },
            layerType: {
              type: "string",
              description: "String indicating the layer type.",
              "enum": ["OpenStreetMap"]
            },
            listMode: {
              type: "string",
              description: "To show or hide layers in the layer list",
              "enum": ["hide", "show"]
            },
            maxScale: {
              type: "number",
              description: "A numeric property used to determine the maximum scale at which the layer is displayed.",
              minimum: 0
            },
            minScale: {
              type: "number",
              description: "A numeric property used to determine the minimum scale at which the layer is displayed.",
              minimum: 0
            },
            opacity: {
              type: "number",
              description: "The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.",
              minimum: 0,
              maximum: 1,
              "default": 1
            },
            title: {
              type: "string",
              description: "String title for the basemap layer."
            },
            visibility: {
              type: "boolean",
              description: "Boolean property determining whether the layer is initially visible.",
              "default": !0
            }
          },
          required: ["id", "layerType", "title"],
          additionalProperties: !1
        },
        "rasterDataElevationLayer_schema.json": {
          title: "Raster Data Elevation Layer",
          type: "object",
          description: "RasterDataElevationLayer is a single-band raster layer used for rendering elevation.",
          properties: {
            id: {
              type: "string",
              description: "A unique identifying string for the layer"
            },
            layerType: {
              type: "string",
              description: "String indicating the layer type",
              "enum": ["RasterDataElevationLayer"]
            },
            listMode: {
              type: "string",
              description: "To show or hide the elevation layer in the layer list",
              "enum": ["hide", "show"]
            },
            path: {
              type: "string",
              description: "For offline data, a path to an ArcGIS Runtime supported raster data file. A URI format is used, starting with file: followed by a file system path. A relative path must be from the file which defines the layer. For example `file:../commondata/raster_data/beijing.tif`",
              pattern: "^file:.+$"
            },
            title: {
              type: "string",
              description: "A user-friendly string title for the layer that can be used in a table of contents. If this is not included, a title is derived from the service."
            },
            visibility: {
              type: "boolean",
              description: "Boolean property determining whether the layer is initially visible in the web scene.",
              "default": !0
            }
          },
          required: ["id", "layerType", "path", "title"],
          additionalProperties: !1
        },
        "tiledElevationLayer_schema.json": {
          title: "Tiled Elevation Layer",
          type: "object",
          description: "Tiled Elevation Layer is a tile layer used for rendering elevation.",
          properties: {
            id: {
              type: "string",
              description: "A unique identifying string for the layer"
            },
            itemId: {
              type: "string",
              description: "Optional string containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal."
            },
            layerType: {
              type: "string",
              description: "String indicating the layer type",
              "enum": ["ArcGISTiledElevationServiceLayer"]
            },
            listMode: {
              type: "string",
              description: "To show or hide the elevation layer in the layer list",
              "enum": ["hide", "show"]
            },
            path: {
              type: "string",
              description: "For offline data, a path to a tile package containing elevation data. A URI format is used, starting with `file:` followed by a file system path with an extension of `.tpk` or `.tpkx`. A relative path must be from the file which defines the layer. For example `file:../p20/portland.tpk`.",
              pattern: "^file:.+\\.tpkx?$"
            },
            title: {
              type: "string",
              description: "A user-friendly string title for the layer that can be used in a table of contents. If this is not included, a title is derived from the service."
            },
            url: {
              type: "string",
              description: "The URL to the layer.If the layer is not from a web service but rather a feature collection, then the url property is omitted"
            },
            visibility: {
              type: "boolean",
              description: "Boolean property determining whether the layer is initially visible in the web scene.",
              "default": !0
            }
          },
          anyOf: [{
            required: ["id", "layerType", "title", "url"]
          }, {
            required: ["id", "layerType", "path", "title"]
          }],
          additionalProperties: !1
        },
        "environment_background_color_schema.json": {
          title: "color background",
          type: "object",
          description: "Specifies a single color to fill the background of the scene with. The scene background is displayed behind any scene objects, stars and atmosphere.",
          properties: {
            color: {
              $ref: "#/definitions/color_schema.json"
            },
            transparency: {
              type: "integer",
              description: "The value has to lie between `100` (full transparency) and `0` (full opacity).",
              minimum: 0,
              maximum: 100
            },
            type: {
              type: "string",
              description: "The type of background.",
              "enum": ["color"]
            }
          },
          required: ["color", "type"],
          "default": {
            type: "color",
            color: [0, 0, 0]
          },
          additionalProperties: !1
        },
        "lighting_schema.json": {
          title: "lighting",
          type: "object",
          description: "Object containing information on how the scene is lit.",
          properties: {
            datetime: {
              type: "number",
              description: "The current date and time of the simulated sun. It is a number representing the number of milliseconds since 1 January, 1970 UTC."
            },
            directShadows: {
              type: "boolean",
              description: "Indicates whether to show shadows cast by the sun.",
              "default": !1
            },
            displayUTCOffset: {
              type: "number",
              description: "UTC offset in decimal hours. Not to be applied to datetime for sun position, only to adjust display of datetime in UI. If displayUTCOffset is null, offset is calculated for the current location (approximate only)."
            }
          },
          additionalProperties: !1
        },
        "camera_schema.json": {
          title: "Camera",
          type: "object",
          description: "The camera defines the position, tilt, and heading of the point from which the SceneView's visible extent is observed.",
          properties: {
            heading: {
              type: "number",
              description: "The heading of the camera in degrees. Heading is zero when north is the top of the screen. It increases as the view rotates clockwise."
            },
            position: {
              description: "The position of the camera defined by a map point.",
              $ref: "#/definitions/point_geometry_schema.json"
            },
            tilt: {
              type: "number",
              description: "The tilt of the camera in degrees with respect to the surface as projected down from the camera position. Tilt is zero when looking straight down at the surface and 90 degrees when the camera is looking parallel to the surface."
            }
          },
          required: ["heading", "position", "tilt"],
          additionalProperties: !1
        },
        "geometry_schema.json": {
          title: "geometry",
          type: "object",
          description: "Please refer to the links below for objects which define the JSON formats of geometry and spatial reference objects.",
          oneOf: [{
            $ref: "#/definitions/multipoint_geometry_schema.json"
          }, {
            $ref: "#/definitions/point_geometry_schema.json"
          }, {
            $ref: "#/definitions/polygon_geometry_schema.json"
          }, {
            $ref: "#/definitions/polyline_geometry_schema.json"
          }]
        },
        "locationInfo_schema.json": {
          title: "locationInfo",
          type: "object",
          description: "Defines how location information will be retrieved from a [CSV](csvLayer.md) file referenced through the web, ie. referenced by URL.",
          properties: {
            latitudeFieldName: {
              type: "string",
              description: "A string defining the field name that holds the latitude (Y) coordinate."
            },
            locationType: {
              type: "string",
              description: "String value indicating location type.",
              "enum": ["coordinates"]
            },
            longitudeFieldName: {
              type: "string",
              description: "A string defining the field name that holds the longitude (X) coordinate."
            }
          },
          required: ["locationType"],
          additionalProperties: !1
        },
        "mosaicRule_schema.json": {
          title: "mosaicRule",
          type: "object",
          description: "The image service uses a mosaic rule to mosaick multiple rasters on the fly. The mosaic rule parameter is used by many image service operations, for example, export image and identify operations.",
          properties: {
            ascending: {
              type: "boolean",
              description: "Indicate whether to use ascending or descending order.",
              "default": !0
            },
            fids: {
              type: "array",
              description: "A list that defines a subset of rasters used in the mosaic, be aware that the rasters may not be visible at all scales.",
              items: {
                type: "integer"
              }
            },
            itemRenderingRule: {
              type: "object",
              description: "The rendering rule applies on items before mosaicking.",
              $ref: "#/definitions/renderingRule_schema.json"
            },
            lockRasterIds: {
              type: "array",
              description: "Lock a few rasters in the image service. Used together with `esriMosaicLockRaster`.",
              items: {
                type: "integer"
              }
            },
            mosaicMethod: {
              type: "string",
              description: "A string value that determines how the selected rasters are ordered.",
              "enum": ["esriMosaicAttribute", "esriMosaicCenter", "esriMosaicLockRaster", "esriMosaicNadir", "esriMosaicNone", "esriMosaicNorthwest", "esriMosaicSeamline", "esriMosaicViewpoint"]
            },
            mosaicOperation: {
              type: "string",
              description: "Use the mosaic operation to resolve overlap pixel values: from first or last raster, use the min, max or mean of the pixel values, or blend them.",
              "enum": ["MT_BLEND", "MT_FIRST", "MT_LAST", "MT_MAX", "MT_MEAN", "MT_MIN", "MT_SUM"],
              "default": "MT_FIRST"
            },
            multidimensionalDefinition: {
              type: "array",
              description: "Definition of multidimentional variables.",
              items: {
                type: "object",
                $ref: "#/definitions/multidimensionalDefinition_schema.json"
              }
            },
            sortField: {
              type: "string",
              description: "The field name used together with `esriMosaicAttribute` method."
            },
            sortValue: {
              type: ["null", "number", "string"],
              description: "The base sort value used together with `esriMosaicAttribute` method and `sortField` parameter.",
              "default": 0
            },
            viewpoint: {
              type: "object",
              description: "Use a view point along with `esriMosaicViewpoint`.",
              $ref: "#/definitions/point_geometry_schema.json"
            },
            where: {
              type: "string",
              description: "<em>Deprecated. Use `layerDefinition.definitionExpression` instead.</em>"
            }
          },
          required: ["mosaicMethod"],
          additionalProperties: !1
        },
        "renderingRule_schema.json": {
          title: "renderingRule",
          type: "object",
          description: "Specifies the rendering rule for how the requested image should be rendered.",
          properties: {
            outputPixelType: {
              type: "string",
              description: "the output pixel type defines the output image's pixel type.",
              "enum": ["C128", "C64", "F32", "F64", "S16", "S32", "S8", "U1", "U16", "U2", "U32", "U4", "U8", "UNKNOWN"],
              "default": "UNKNOWN"
            },
            rasterFunction: {
              type: "string",
              description: "The raster function name identifies the processing or rendering to be performed. For a list of possible types, please see the [Raster Functions](http://resources.arcgis.com/en/help/arcgis-rest-api/#/Raster_Function_Objects/02r3000000rv000000/) help topic for additional information on this."
            },
            rasterFunctionArguments: {
              type: "object",
              description: "The arguments for the referenced `rasterFunction`. For a description of arguments per raster function type, please see the [Raster Functions](http://resources.arcgis.com/en/help/arcgis-rest-api/#/Raster_Function_Objects/02r3000000rv000000/) help topic for additional information on this."
            },
            variableName: {
              type: "string",
              description: "Variable name for the raster function."
            }
          },
          additionalProperties: !1
        },
        "layer_schema.json": {
          title: "layer",
          type: "object",
          description: "A layer object may allow overrides on popup content and drawing behavior for individual layers of a web service. This object also contains geographic features and their attributes when used in a feature collection.",
          properties: {
            defaultVisibility: {
              type: "boolean",
              description: "Default visibility of the layers in the map service."
            },
            disablePopup: {
              type: "boolean",
              description: "Indicates whether to allow a client to ignore the popups defined on the layer. The popupInfo object could be saved in the map or item.",
              "default": !1
            },
            id: {
              type: "integer",
              description: "The layer id, as a numeric value."
            },
            layerDefinition: {
              description: "Additional properties that define drawing information and other configurations for the layer.",
              allOf: [{
                $ref: "#/definitions/layerDefinition_schema.json"
              }, {
                properties: {
                  definitionExpression: {},
                  drawingInfo: {
                    allOf: [{
                      $ref: "#/definitions/drawingInfo_schema.json"
                    }, {
                      properties: {
                        labelingInfo: {},
                        renderer: {},
                        showLabels: {},
                        transparency: {}
                      },
                      additionalProperties: !1
                    }]
                  },
                  source: {}
                },
                additionalProperties: !1
              }]
            },
            layerUrl: {
              type: "string",
              description: "A URL to a service that should be used for all queries against the layer."
            },
            listMode: {
              type: "string",
              description: "To show or hide the sublayer in the layer list. If the layer has sublayers, selecting `hide-children` will hide them in the layer list.",
              "enum": ["hide", "hide-children", "show"]
            },
            maxScale: {
              type: "number",
              description: "A number representing the maximum scale at which the layer will be visible. The number is the scale's denominator."
            },
            minScale: {
              type: "number",
              description: "A number representing the minimum scale at which the layer will be visible. The number is the scale's denominator."
            },
            name: {
              type: "string",
              description: "The name of the layer."
            },
            parentLayerId: {
              type: "integer",
              description: "If working with nested layers, this is the numeric value indicating the layer id of the next layer (parent) directly above the current referenced layer."
            },
            popupInfo: {
              type: "object",
              description: "A popupInfo object defining the popup window content for the layer.",
              $ref: "#/definitions/popupInfo_schema.json"
            },
            showLegend: {
              type: "boolean",
              description: "A Boolean indicating if the layer should be shown in the legend in client applications.",
              "default": !0
            },
            subLayerIds: {
              type: "array",
              description: "If the layer is a parent layer, it will have one or more sub layers included in an array.",
              items: {
                type: "integer"
              }
            }
          },
          additionalProperties: !1
        },
        "multidimensionalDefinition_schema.json": {
          title: "Multi-dimensional Definition",
          type: "object",
          properties: {
            dimensionName: {
              type: "string",
              description: "Type of dimension being used (ex. StdTime)."
            },
            isSlice: {
              type: "boolean",
              description: "Is slice?",
              "default": !0
            },
            values: {
              type: "array",
              description: "Array where every element is either a single value, or an array of two values (lower and upper bound).",
              items: {
                oneOf: [{
                  type: "number"
                }, {
                  type: "array",
                  items: {
                    type: "number"
                  },
                  minItems: 2,
                  maxItems: 2
                }]
              }
            },
            variableName: {
              type: "string",
              description: "Name of the variable."
            }
          },
          anyOf: [{
            required: ["variableName"]
          }, {
            required: ["dimensionName", "values"]
          }],
          additionalProperties: !1,
          dependencies: {
            dimensionName: ["values"],
            values: ["dimensionName"]
          }
        },
        "tileInfo_schema.json": {
          title: "tileInfo",
          type: "object",
          description: "Tile information, returned from the WMTS OGC Web Service. The tileInfo will contain the spatial reference of the layer. tileInfo is the same json representation as the ArcGIS Map/Image service tileInfo except that it may contain a levelValue on the lod objects that should be used instead of the level in the templateUrl.",
          properties: {
            cols: {
              type: "integer",
              description: "Requested tile's column."
            },
            compressionQuality: {
              type: "number",
              description: "Compression quality of the tile.",
              minimum: 0,
              maximum: 100
            },
            dpi: {
              type: "number",
              description: "The dpi of the tiling scheme."
            },
            lods: {
              type: "array",
              description: "An array of levels of detail that define the tiling scheme.",
              items: {
                type: "object",
                $ref: "#/definitions/lod_schema.json"
              },
              uniqueItems: !0
            },
            origin: {
              type: "object",
              description: "The tiling scheme origin.",
              $ref: "#/definitions/point_geometry_schema.json"
            },
            rows: {
              type: "integer",
              description: "Requested tile's row."
            },
            spatialReference: {
              type: "object",
              description: "The spatial reference of the tiling schema.",
              $ref: "#/definitions/spatialReference_schema.json"
            }
          },
          additionalProperties: !1
        },
        "wmtsInfo_schema.json": {
          title: "Web Map Tile Service Info",
          type: "object",
          description: "Object defines and provides information about layers in a [WMTSLayer](webTiledLayer.md) service.",
          properties: {
            customLayerParameters: {
              type: "object",
              description: "A sequence of parameters used to append different custom parameters to a WMTS tile request. These parameters are applied to `GetTile`. The `customLayerParameters` property takes precedence if `customParameters` is also present.",
              patternProperties: {
                ".*": {
                  type: "string"
                }
              }
            },
            customParameters: {
              type: "object",
              description: "A sequence of parameters used to append custom parameters to all WMTS requests. These parameters are applied to `GetCapabilities` and `GetTile`. If used with the `customLayerParameters` property, `customParameters` will not take precedence.",
              patternProperties: {
                ".*": {
                  type: "string"
                }
              }
            },
            layerIdentifier: {
              type: "string",
              description: "Identifier for the specific layer used in the WMTS service. Required input by the user."
            },
            tileMatrixSet: {
              type: "string",
              description: "Tiling schema, set by the WMTS service."
            },
            url: {
              type: "string",
              description: "URL to the WMTS web service. Required input by the user."
            }
          },
          additionalProperties: !1
        },
        "wmsLayer_layer_schema.json": {
          title: "WMSLayer layer",
          type: "object",
          description: "A layer object may allow overrides on popup content and drawing behavior for individual layers of a web service.",
          properties: {
            legendUrl: {
              type: "string",
              description: "A string URL to a legend graphic for the layer."
            },
            name: {
              type: "string",
              description: "A string containing a unique name for the layer."
            },
            queryable: {
              type: "boolean",
              description: "Boolean specifying whether a layer is queryable or not."
            },
            showPopup: {
              type: "boolean",
              description: "Boolean specifying whether to display popup or not."
            },
            title: {
              type: "string",
              description: "A user-friendly string title for the layer that can be used in a table of contents."
            }
          },
          additionalProperties: !1
        },
        "description_schema.json": {
          title: "description",
          type: "object",
          description: "Description object with text.",
          properties: {
            text: {
              type: "string",
              description: "Text to display as slide description."
            }
          },
          required: ["text"],
          additionalProperties: !1
        },
        "slide_ground_schema.json": {
          title: "Ground",
          type: "object",
          description: "Ground defines the main surface of the web scene, based on elevation layers. This object defines the ground properties to be set in the slides.",
          properties: {
            transparency: {
              type: "integer",
              description: "The transparency of the ground surface (including basemap). The value has to lie between `100` (full transparency) and `0` (full opacity).",
              minimum: 0,
              maximum: 100
            }
          },
          additionalProperties: !1
        },
        "thumbnail_schema.json": {
          title: "thumbnail",
          type: "object",
          description: "Object containing a thumbnail image.",
          properties: {
            url: {
              type: "string",
              description: "The URI pointing to the thumbnail image. Can be a URL or a base64-encoded image."
            }
          },
          required: ["url"],
          additionalProperties: !1
        },
        "title_schema.json": {
          title: "title",
          type: "object",
          description: "Text for the title of the individual slide.",
          properties: {
            text: {
              type: "string",
              description: "Text to display as slide title."
            }
          },
          required: ["text"],
          additionalProperties: !1
        },
        "visibleLayer_schema.json": {
          title: "visibleLayer",
          type: "object",
          description: "Object with layer id, used to indicate layer visibility in a slide.",
          properties: {
            id: {
              type: "string",
              description: "The id of the layer as listed on the operational layer."
            },
            subLayerIds: {
              type: "array",
              description: "List of visible sublayer ids, as listed on the service of the layer.",
              items: {
                type: "integer"
              }
            }
          },
          additionalProperties: !1
        },
        "input_schema.json": {
          title: "input",
          type: "object",
          description: "The input objects specified by the [definitionEditor](definitionEditor.md).",
          properties: {
            hint: {
              type: "string",
              description: "A string value representing a hint for the input."
            },
            parameters: {
              type: "array",
              description: "An array of parameter objects.",
              items: {
                type: "object",
                $ref: "#/definitions/parameter_schema.json"
              }
            },
            prompt: {
              type: "string",
              description: "A string value representing the prompt for the input."
            }
          },
          additionalProperties: !1
        },
        "buildingSceneLayer_filterAuthoringInfo_filterBlock_schema.json": {
          title: "Filter Authoring Info for Filter Blocks",
          type: "object",
          description: "The filter authoring info object contains metadata about the authoring process for creating a filter block object. This allows the authoring client to save specific, overridable settings.  The next time it is accessed via an authoring client, their selections are remembered. Non-authoring clients can ignore it.",
          properties: {
            filterTypes: {
              type: "array",
              description: "Array of defined filter types. Each filter type has an array of filter values.",
              items: {
                type: "object",
                $ref: "#/definitions/buildingSceneLayer_filterAuthoringInfo_filterType_schema.json"
              }
            }
          },
          required: ["filterTypes"],
          additionalProperties: !1
        },
        "buildingSceneLayer_filterMode_schema.json": {
          title: "Filter Mode",
          type: "object",
          description: "Filter mode represents the way elements draw when participating in a filter block.",
          oneOf: [{
            $ref: "#/definitions/buildingSceneLayer_filterModeSolid_schema.json"
          }, {
            $ref: "#/definitions/buildingSceneLayer_filterModeWireFrame_schema.json"
          }, {
            $ref: "#/definitions/buildingSceneLayer_filterModeXray_schema.json"
          }]
        },
        "featureExpressionInfo_schema.json": {
          title: "featureExpressionInfo",
          type: "object",
          description: "An object that defines an expression for per-feature elevation.",
          properties: {
            expression: {
              type: "string",
              description: "An [Arcade expression](https://developers.arcgis.com/arcade/) evaluating to a number.",
              minLength: 1
            },
            title: {
              type: "string",
              description: "Title of the expression.",
              minLength: 1
            }
          },
          required: ["expression"],
          additionalProperties: !1
        },
        "domain_schema.json": {
          title: "domain",
          type: "object",
          description: "Domains specify the set of valid values for a field. The links below are the available domains.",
          oneOf: [{
            $ref: "#/definitions/codedValue_domain_schema.json"
          }, {
            $ref: "#/definitions/inherited_domain_schema.json"
          }, {
            $ref: "#/definitions/range_domain_schema.json"
          }]
        },
        "pointCloudBitfieldFilter_schema.json": {
          title: "PointCloud Bitfield Filter",
          type: "object",
          description: "Filters points based on the value of the specified bitfield attribute.",
          properties: {
            field: {
              type: "string",
              description: "The name of the field that is used for the filter."
            },
            requiredClearBits: {
              type: "array",
              description: "List ALL bit numbers that must cleared (=0) for the point to be kept. bit 0 is LSB.",
              items: {
                type: "integer"
              }
            },
            requiredSetBits: {
              type: "array",
              description: " List ALL bit numbers that must set (=1) for the point to be kept. bit 0 is LSB.",
              items: {
                type: "integer"
              }
            },
            type: {
              type: "string",
              "enum": ["pointCloudBitfieldFilter"]
            }
          },
          anyOf: [{
            required: ["requiredClearBits"]
          }, {
            required: ["requiredSetBits"]
          }],
          required: ["field", "type"],
          additionalProperties: !1
        },
        "pointCloudReturnFilter_schema.json": {
          title: "PointCloud Return Filter",
          type: "object",
          description: "Filters points based on the value of the return number/return count.",
          properties: {
            field: {
              type: "string",
              description: "The name of the field that is used for the filter."
            },
            includedReturns: {
              type: "array",
              description: "All points with at least one specified return status will be kept. Status values: `last`, `firstOfMany`, `lastOfMany`, `single`",
              items: {
                type: "string",
                "enum": ["last", "firstOfMany", "lastOfMany", "single"]
              }
            },
            type: {
              type: "string",
              "enum": ["pointCloudReturnFilter"]
            }
          },
          required: ["field", "includedReturns", "type"],
          additionalProperties: !1
        },
        "pointCloudValueFilter_schema.json": {
          title: "PointCloud Value Filter",
          type: "object",
          description: "Filters points based on the value of an specified attribute.",
          properties: {
            field: {
              type: "string",
              description: "The name of the field that is used for the filter."
            },
            mode: {
              type: "string",
              description: "Defines if values should be included or excluded.",
              "enum": ["exclude", "include"]
            },
            type: {
              type: "string",
              description: "Filters points based on the value of an specified attribute.",
              "enum": ["pointCloudValueFilter"]
            },
            values: {
              type: "array",
              description: "list of values",
              items: {
                type: "number"
              }
            }
          },
          required: ["field", "mode", "type", "values"],
          additionalProperties: !1
        },
        "dynamicDataLayer_source_schema.json": {
          title: "Dynamic data layer",
          type: "object",
          description: "A dynamic data layer derived from a registered workspace. More information on this can be found in the [ArcGIS REST API help](http://resources.arcgis.com/en/help/rest/apiref/layersource.html).",
          properties: {
            dataSource: {
              type: "object",
              description: "The layer's data source.",
              $ref: "#/definitions/dataSource_schema.json"
            },
            fields: {
              type: "array",
              description: "An array of objects specifying information about an attribute field.",
              items: {
                type: "object",
                $ref: "#/definitions/field_schema.json"
              },
              uniqueItems: !0
            },
            type: {
              type: "string",
              description: "A string value indicating the type.",
              "enum": ["dataLayer"]
            }
          },
          required: ["dataSource", "type"],
          additionalProperties: !1
        },
        "dynamicMapLayer_source_schema.json": {
          title: "Dynamic map layer",
          type: "object",
          description: "A dynamic map layer refers to a layer in the current map service. More information on this can be found in the [ArcGIS REST API help](http://resources.arcgis.com/en/help/rest/apiref/layersource.html).",
          properties: {
            gdbVersion: {
              type: "string",
              description: "If applicable, specify this to use an alternate geodatabase version."
            },
            mapLayerId: {
              type: "integer",
              description: "The current map layer's id."
            },
            type: {
              type: "string",
              description: "A string value indicating the type.",
              "enum": ["mapLayer"]
            }
          },
          required: ["mapLayerId", "type"],
          additionalProperties: !1
        },
        "template_schema.json": {
          title: "template",
          type: "object",
          description: "Templates describe features that can be created in a layer. They are generally used with feature collections and editable web-based CSV layers. Templates are not used with ArcGIS feature services as these already have templates defined in the service. They are also defined as properties of the layer definition when there are no defined types. Otherwise, templates are defined as properties of the types.",
          properties: {
            description: {
              type: "string",
              description: "A string value containing a detailed description of the template."
            },
            drawingTool: {
              type: "string",
              description: "An optional string that can define a client-side drawing tool to be used with this feature.",
              "enum": ["esriFeatureEditToolAutoCompletePolygon", "esriFeatureEditToolCircle", "esriFeatureEditToolDownArrow", "esriFeatureEditToolEllipse", "esriFeatureEditToolFreehand", "esriFeatureEditToolLeftArrow", "esriFeatureEditToolLine", "esriFeatureEditToolNone", "esriFeatureEditToolPoint", "esriFeatureEditToolPolygon", "esriFeatureEditToolRectangle", "esriFeatureEditToolRightArrow", "esriFeatureEditToolText", "esriFeatureEditToolTriangle", "esriFeatureEditToolUpArrow"]
            },
            name: {
              type: "string",
              description: "A string containing a user-friendly name for the template."
            },
            prototype: {
              type: "object",
              description: "A feature object representing a prototypical feature for the template.",
              $ref: "#/definitions/feature_schema.json"
            }
          },
          additionalProperties: !1
        },
        "format_schema.json": {
          title: "format",
          type: "object",
          description: "The format object can be used with numerical or date fields to provide more detail about how values should be formatted for display.",
          properties: {
            dateFormat: {
              type: "string",
              description: "A string used with date fields to specify how the date should be formatted.",
              "enum": ["dayShortMonthYear", "dayShortMonthYearLongTime", "dayShortMonthYearLongTime24", "dayShortMonthYearShortTime", "dayShortMonthYearShortTime24", "longDate", "longDateLongTime", "longDateLongTime24", "longDateShortTime", "longDateShortTime24", "longMonthDayYear", "longMonthDayYearLongTime", "longMonthDayYearLongTime24", "longMonthDayYearShortTime", "longMonthDayYearShortTime24", "longMonthYear", "shortDate", "shortDateLE", "shortDateLELongTime", "shortDateLELongTime24", "shortDateLEShortTime", "shortDateLEShortTime24", "shortDateLongTime", "shortDateLongTime24", "shortDateShortTime", "shortDateShortTime24", "shortMonthYear", "year"]
            },
            digitSeparator: {
              type: "boolean",
              description: "A Boolean used with numerical fields. A value of true allows the number to have a digit (or thousands) separator. Depending on the locale, this separator is a decimal point or a comma. A value of false means that no separator will be used."
            },
            places: {
              type: "integer",
              description: "An integer used with numerical fields to specify the number of decimal places. Any places beyond this value are rounded."
            }
          },
          additionalProperties: !1
        },
        "mediaInfo_chart_schema.json": {
          title: "mediaInfo chart",
          type: "object",
          description: "Defines a chart to be displayed in a popup window.",
          properties: {
            altText: {
              type: "string",
              description: "A string providing the alternate text for the media."
            },
            caption: {
              type: "string",
              description: "A string caption describing the media."
            },
            title: {
              type: "string",
              description: "A string title for the media."
            },
            type: {
              type: "string",
              description: "A string defining the type of media.",
              "enum": ["barchart", "columnchart", "linechart", "piechart"]
            },
            value: {
              $ref: "#/definitions/mediaInfo_chart_value_schema.json"
            }
          },
          required: ["type", "value"],
          additionalProperties: !1
        },
        "mediaInfo_image_schema.json": {
          title: "mediaInfo image",
          type: "object",
          description: "Defines an image to be displayed in a popup window.",
          properties: {
            altText: {
              type: "string",
              description: "A string providing the alternate text for the media."
            },
            caption: {
              type: "string",
              description: "A string caption describing the media."
            },
            refreshInterval: {
              type: "number",
              description: "Refresh interval of the layer in minutes. Non-zero value indicates automatic layer refresh at the specified interval. Value of 0 indicates auto refresh is not enabled. If the property does not exist, it's equivalent to having a value of 0."
            },
            title: {
              type: "string",
              description: "A string title for the media."
            },
            type: {
              type: "string",
              description: "A string defining the type of media.",
              "enum": ["image"]
            },
            value: {
              $ref: "#/definitions/mediaInfo_image_value_schema.json"
            }
          },
          required: ["type", "value"],
          additionalProperties: !1
        },
        "popupElement_attachments_schema.json": {
          title: "popupElement attachments",
          type: "object",
          description: "Configures attachments in popup elements.",
          properties: {
            displayType: {
              type: "string",
              description: "A string value indicating how to display the attachment. If `list` is specified, attachments show as links.",
              "enum": ["list", "preview"]
            },
            type: {
              type: "string",
              "enum": ["attachments"]
            }
          },
          required: ["type"],
          additionalProperties: !1
        },
        "popupElement_fields_schema.json": {
          title: "popupElement fields",
          type: "object",
          description: "Configures fields in popup elements.",
          properties: {
            fieldInfos: {
              type: "array",
              description: "It is an array of `fieldInfo` objects representing a field/value pair displayed as a table within the popupElement. If the `fieldInfos` property is not provided, the popupElement will display whatever is specified directly in the `popupInfo.fieldInfos` property.",
              items: {
                type: "object",
                $ref: "#/definitions/fieldInfo_schema.json"
              }
            },
            type: {
              type: "string",
              "enum": ["fields"]
            }
          },
          required: ["type"],
          additionalProperties: !1
        },
        "popupElement_media_schema.json": {
          title: "popupElement media",
          type: "object",
          description: "Configures media in popup elements.",
          properties: {
            mediaInfos: {
              type: "array",
              description: "An array of `mediaInfo` objects representing an image or chart for display. If no `mediaInfos` property is provided, the popupElement will display whatever is specified in the `popupInfo.mediaInfos` property.",
              items: {
                type: "object",
                $ref: "#/definitions/mediaInfo_schema.json"
              }
            },
            type: {
              type: "string",
              "enum": ["media"]
            }
          },
          required: ["type"],
          additionalProperties: !1
        },
        "popupElement_text_schema.json": {
          title: "popupElement text",
          type: "object",
          description: "Configures text in popup elements.",
          properties: {
            text: {
              type: "string",
              description: "This property applies to elements of type `text`. This is string value indicating the text to be displayed within the popupElement. If no `text` property is provided, the popupElement will display whatever is specified in the [popupInfo.description](popupInfo.md) property."
            },
            type: {
              type: "string",
              "enum": ["text"]
            }
          },
          required: ["type"],
          additionalProperties: !1
        },
        "orderByFields_schema.json": {
          title: "orderByFields",
          type: "object",
          description: "Object indicating the field display order for the related records and whether they should be sorted in ascending or descending order.",
          properties: {
            field: {
              type: "string",
              description: "The attribute value of the field selected that will drive the sorting of related records."
            },
            order: {
              type: "string",
              description: "Set the ascending or descending sort order of the returned related records.",
              "enum": ["asc", "desc"]
            }
          }
        },
        "labelExpressionInfo_schema.json": {
          title: "labelExpressionInfo",
          type: "object",
          description: "The labelExpressionInfo allows label text to be read similar to that of Popups's description property.",
          properties: {
            expression: {
              type: "string",
              description: "An [Arcade expression](https://developers.arcgis.com/arcade/) evaluating to either a string or a number."
            }
          },
          additionalProperties: !1
        },
        "labelSymbol3D_schema.json": {
          title: "LabelSymbol3D",
          type: "object",
          description: "LabelSymbol3D is used to render labels for features from a FeatureLayer in a 3D SceneView.",
          properties: {
            callout: {
              $ref: "#/definitions/callout_schema.json"
            },
            symbolLayers: {
              type: "array",
              description: "A Collection of Symbol3DLayer objects used to visualize the graphic or feature.",
              items: {
                oneOf: [{
                  $ref: "#/definitions/textSymbol3DLayer_schema.json"
                }]
              }
            },
            type: {
              type: "string",
              description: "Specifies the type of symbol used.",
              "enum": ["LabelSymbol3D"]
            },
            verticalOffset: {
              $ref: "#/definitions/verticalOffset_schema.json"
            }
          },
          required: ["symbolLayers", "type"],
          additionalProperties: !1
        },
        "classBreaksRenderer_schema.json": {
          title: "ClassBreaks Renderer",
          type: "object",
          description: "A class breaks renderer symbolizes based on the value of some numeric attribute. The classBreakInfo define the values at which the symbology changes.",
          properties: {
            authoringInfo: {
              type: "object",
              description: "An object containing metadata about the authoring process for creating a renderer object. This allows the authoring clients to save specific overridable settings so that next time it is accessed via the UI, their selections are remembered. Non-authoring clients can ignore it.",
              $ref: "#/definitions/authoringInfo_schema.json"
            },
            backgroundFillSymbol: {
              type: "object",
              description: "Supported only for polygon features.",
              $ref: "#/definitions/polygonSymbol3D_schema.json"
            },
            classBreakInfos: {
              type: "array",
              description: "Array of classBreakInfo objects.",
              items: {
                type: "object",
                $ref: "#/definitions/classBreakInfo_schema.json"
              }
            },
            defaultLabel: {
              type: "string",
              description: "Label for the default symbol used to draw unspecified values."
            },
            defaultSymbol: {
              type: "object",
              description: "Symbol used when a value cannot be classified.",
              $ref: "#/definitions/symbol3D_schema.json"
            },
            field: {
              type: "string",
              description: "Attribute field used for renderer."
            },
            legendOptions: {
              type: "object",
              description: "A legend containing one title, which is a string describing the renderer in the legend.",
              $ref: "#/definitions/rendererLegendOptions_schema.json"
            },
            minValue: {
              type: "number",
              description: "The minimum numeric data value needed to begin class breaks."
            },
            normalizationField: {
              type: "string",
              description: "Used when normalizationType is field. The string value indicating the attribute field by which the data value is normalized."
            },
            normalizationTotal: {
              type: "number",
              description: "Used when normalizationType is percent-of-total, this number property contains the total of all data values."
            },
            normalizationType: {
              type: "string",
              description: "Determine how the data was normalized.",
              "enum": ["esriNormalizeByField", "esriNormalizeByLog", "esriNormalizeByPercentOfTotal"]
            },
            type: {
              type: "string",
              description: "Specifies the type of renderer used.",
              "enum": ["classBreaks"]
            },
            valueExpression: {
              type: "string",
              description: "An [Arcade expression](https://developers.arcgis.com/arcade/) evaluating to a number."
            },
            valueExpressionTitle: {
              type: "string",
              description: "The title identifying and describing the associated [Arcade](https://developers.arcgis.com/arcade/) expression as defined in the `valueExpression` property."
            },
            visualVariables: {
              type: "array",
              description: "An array of objects used to set rendering properties.",
              items: {
                type: "object",
                $ref: "#/definitions/visualVariable_schema.json"
              }
            }
          },
          required: ["classBreakInfos", "type"],
          additionalProperties: !1
        },
        "pointCloudRenderers_schema.json": {
          title: "PointCloud Renderers",
          type: "object",
          description: "Renderers for PointCloud Layers.",
          oneOf: [{
            $ref: "#/definitions/pointCloudClassBreaksRenderer_schema.json"
          }, {
            $ref: "#/definitions/pointCloudRGBRenderer_schema.json"
          }, {
            $ref: "#/definitions/pointCloudStretchRenderer_schema.json"
          }, {
            $ref: "#/definitions/pointCloudUniqueValueRenderer_schema.json"
          }]
        },
        "rasterRenderers_schema.json": {
          title: "Raster Renderers",
          type: "object",
          description: "Renderers for Raster Layers.",
          oneOf: [{
            $ref: "#/definitions/rasterClassBreaksRenderer_schema.json"
          }, {
            $ref: "#/definitions/rasterColormapRenderer_schema.json"
          }, {
            $ref: "#/definitions/rasterShadedReliefRenderer_schema.json"
          }, {
            $ref: "#/definitions/rasterStretchRenderer_schema.json"
          }, {
            $ref: "#/definitions/rasterUniqueValueRenderer_schema.json"
          }]
        },
        "simpleRenderer_schema.json": {
          title: "Simple Renderer",
          type: "object",
          description: "A simple renderer is a renderer that uses one symbol only.",
          properties: {
            authoringInfo: {
              type: "object",
              description: "An object containing metadata about the authoring process for creating a renderer object. This allows the authoring clients to save specific overridable settings so that next time it is accessed via the UI, their selections are remembered. Non-authoring clients can ignore it.",
              $ref: "#/definitions/authoringInfo_schema.json"
            },
            description: {
              type: "string",
              description: "Description of the renderer."
            },
            label: {
              type: "string",
              description: "The text string that is displayed in the table of contents."
            },
            symbol: {
              type: "object",
              description: "An object that represents how all features will be drawn.",
              $ref: "#/definitions/symbol3D_schema.json"
            },
            type: {
              type: "string",
              description: "Specifies the type of renderer used.",
              "enum": ["simple"]
            },
            visualVariables: {
              type: "array",
              description: "An array of objects used to set rendering properties.",
              items: {
                type: "object",
                $ref: "#/definitions/visualVariable_schema.json"
              }
            }
          },
          required: ["symbol", "type"],
          additionalProperties: !1
        },
        "uniqueValueFromStyleRenderer_schema.json": {
          title: "UniqueValueFromStyle Renderer",
          type: "object",
          description: "This is a special version of UniqueValue Renderer, which loads uniqueValue infos from a style definition.",
          properties: {
            defaultLabel: {
              type: "string",
              description: "Default string for the default symbol used to draw unspecified values."
            },
            defaultSymbol: {
              description: "The defaultSymbol on the renderer that get assigned to features with no value or features that do not fall within the configured data.",
              $ref: "#/definitions/symbol3D_schema.json"
            },
            field1: {
              type: "string",
              description: "String value specifying the first field used to render matching values."
            },
            styleName: {
              type: "string",
              description: "A registered web style name. Can not be used in conjunction with styleUrl."
            },
            styleUrl: {
              type: "string",
              description: "URL that points to the web style definition. Can not be used in conjunction with styleName."
            },
            type: {
              type: "string",
              description: "Specifies the type of renderer used.",
              "enum": ["uniqueValue"]
            },
            visualVariables: {
              type: "array",
              description: "An array of visualVariable objects used for continuous color or size, simple, and unique values with feature opacity.",
              items: {
                $ref: "#/definitions/visualVariable_schema.json"
              }
            }
          },
          oneOf: [{
            required: ["type", "styleName"]
          }, {
            required: ["type", "styleUrl"]
          }],
          additionalProperties: !1
        },
        "uniqueValueRenderer_schema.json": {
          title: "UniqueValue Renderer",
          type: "object",
          description: "A unique value renderer symbolizes based on the value of an attribute.",
          properties: {
            authoringInfo: {
              type: "object",
              description: "An object containing metadata about the authoring process for creating a renderer object. This allows the authoring clients to save specific overridable settings so that next time it is accessed via the UI, their selections are remembered. Non-authoring clients can ignore it.",
              $ref: "#/definitions/authoringInfo_schema.json"
            },
            backgroundFillSymbol: {
              type: "object",
              description: "Used for polygon features. It can only be used for bivariate types and size rendering.",
              $ref: "#/definitions/polygonSymbol3D_schema.json"
            },
            defaultLabel: {
              type: "string",
              description: "Default label for the default symbol used to draw unspecified values."
            },
            defaultSymbol: {
              description: "The defaultSymbol on the renderer that get assigned to features with no value or features that do not fall within the configured data.",
              $ref: "#/definitions/symbol3D_schema.json"
            },
            field1: {
              type: "string",
              description: "Attribute field renderer uses to match values."
            },
            field2: {
              type: "string",
              description: "If needed, specify an additional attribute field the renderer uses to match values."
            },
            field3: {
              type: "string",
              description: "If needed, specify an additional attribute field the renderer uses to match values."
            },
            fieldDelimiter: {
              type: "string",
              description: "String inserted between the values if multiple attribute fields are specified.",
              "default": ", "
            },
            legendOptions: {
              type: "object",
              description: "A legend containing one title, which is a string describing the renderer in the legend.",
              $ref: "#/definitions/rendererLegendOptions_schema.json"
            },
            type: {
              type: "string",
              description: "Specifies the type of renderer used.",
              "enum": ["uniqueValue"]
            },
            uniqueValueInfos: {
              type: "array",
              description: "An array of uniqueValueInfo objects.",
              items: {
                type: "object",
                $ref: "#/definitions/uniqueValueInfo_schema.json"
              }
            },
            valueExpression: {
              type: "string",
              description: "An [Arcade expression](https://developers.arcgis.com/arcade/) evaluating to either a string or a number."
            },
            valueExpressionTitle: {
              type: "string",
              description: "The title identifying and describing the associated [Arcade](https://developers.arcgis.com/arcade/) expression as defined in the `valueExpression` property."
            },
            visualVariables: {
              type: "array",
              description: "An array of objects used to set rendering properties.",
              items: {
                type: "object",
                $ref: "#/definitions/visualVariable_schema.json"
              }
            }
          },
          required: ["type", "uniqueValueInfos"],
          additionalProperties: !1
        },
        "search_layer_schema.json": {
          title: "search layer",
          type: "object",
          description: "Layer configuration for search.",
          properties: {
            field: {
              $ref: "#/definitions/search_layer_field_schema.json"
            },
            id: {
              type: "string",
              description: "A string identifying the layer."
            },
            subLayer: {
              type: "integer",
              description: "Optional index for a sublayer."
            }
          },
          required: ["field", "id"],
          additionalProperties: !1
        },
        "point_geometry_schema.json": {
          title: "pointGeometry",
          type: "object",
          description: "Defines the JSON formats of the point and spatial reference objects.",
          properties: {
            m: {
              type: "number",
              description: "M coordinate which contains measures used for linear referencing."
            },
            spatialReference: {
              type: "object",
              description: "The spatial reference can be defined using a well-known ID (WKID) or well-known text (WKT).",
              $ref: "#/definitions/spatialReference_schema.json"
            },
            x: {
              description: "X coordinate which is measured along the east/west axis.",
              oneOf: [{
                type: "number"
              }, {
                type: "null"
              }, {
                type: "string",
                "enum": ["NaN"]
              }]
            },
            y: {
              type: "number",
              description: "Y coordinate which is measured along the north/south axis."
            },
            z: {
              type: "number",
              description: "Z coordinate which measures height or elevation."
            }
          },
          required: ["x"],
          additionalProperties: !1
        },
        "multipoint_geometry_schema.json": {
          title: "multipointGeometry",
          type: "object",
          description: "Contains an array of points, along with a spatial reference field.",
          properties: {
            hasM: {
              type: "boolean",
              description: "Indicates whether the geometry contains M coordinate values."
            },
            hasZ: {
              type: "boolean",
              description: "Indicates whether the geometry contains Z coordinate values."
            },
            points: {
              type: "array",
              description: "An array that corresponds to 2D and 3D points.",
              items: {
                type: "array",
                items: {
                  type: "number"
                },
                minItems: 2,
                maxItems: 4
              }
            },
            spatialReference: {
              type: "object",
              description: "The spatial reference can be defined using a well-known ID (WKID) or well-known text (WKT).",
              $ref: "#/definitions/spatialReference_schema.json"
            }
          },
          required: ["points"],
          additionalProperties: !1
        },
        "polygon_geometry_schema.json": {
          title: "polygonGeometry",
          type: "object",
          description: "A polygon contains an array of rings and a spatial reference.",
          properties: {
            hasM: {
              type: "boolean",
              description: "Indicates whether the geometry contains M coordinate values."
            },
            hasZ: {
              type: "boolean",
              description: "Indicates whether the geometry contains Z coordinate values."
            },
            rings: {
              type: "array",
              description: "Represents an array of rings. Each ring is an array of points.",
              items: {
                type: "array",
                items: {
                  type: "array",
                  items: {
                    type: "number"
                  },
                  minItems: 2,
                  maxItems: 4
                },
                minItems: 3
              },
              minItems: 1
            },
            spatialReference: {
              type: "object",
              description: "The spatial reference can be defined using a well-known ID (WKID) or well-known text (WKT).",
              $ref: "#/definitions/spatialReference_schema.json"
            }
          },
          required: ["rings"],
          additionalProperties: !1
        },
        "polyline_geometry_schema.json": {
          title: "polylineGeometry",
          type: "object",
          description: "Contains an array of paths and a spatialReference.",
          properties: {
            hasM: {
              type: "boolean",
              description: "Indicates whether the geometry contains M coordinate values."
            },
            hasZ: {
              type: "boolean",
              description: "Indicates whether the geometry contains Z coordinate values."
            },
            paths: {
              type: "array",
              description: "Three nested array levels describing a polyline. The first level describes individual paths; the second describes the points of these paths; and the third gives the coordinates of the points.",
              items: {
                type: "array",
                items: {
                  type: "array",
                  items: {
                    type: "number"
                  },
                  minItems: 2,
                  maxItems: 4
                },
                minItems: 2
              }
            },
            spatialReference: {
              type: "object",
              description: "The spatial reference can be defined using a well-known ID (WKID) or well-known text (WKT).",
              $ref: "#/definitions/spatialReference_schema.json"
            }
          },
          required: ["paths"],
          additionalProperties: !1
        },
        "lod_schema.json": {
          title: "lod",
          type: "object",
          properties: {
            level: {
              type: "integer",
              description: "ID for each level."
            },
            levelValue: {
              type: "string",
              description: "String to be used when constructing URL to access a tile from this LOD."
            },
            resolution: {
              type: "number",
              description: "Resolution in map units of each pixel in a tile for each level."
            },
            scale: {
              type: "number",
              description: "Scale for each level."
            }
          },
          additionalProperties: !1
        },
        "parameter_schema.json": {
          title: "parameter",
          type: "object",
          description: "Objects defined by a [definitionEditor](definitionEditor.md) input.",
          properties: {
            defaultValue: {
              type: ["number", "string"],
              description: "The default value that is automatically given is nothing is provided."
            },
            fieldName: {
              type: "string",
              description: "A string value representing the name of the field to query."
            },
            parameterId: {
              type: "integer",
              description: "Number given to uniquely identify the specified parameter."
            },
            type: {
              type: "string",
              description: "The field type for the specified field parameter.",
              "enum": ["esriFieldTypeBlob", "esriFieldTypeDate", "esriFieldTypeDouble", "esriFieldTypeGUID", "esriFieldTypeGeometry", "esriFieldTypeGlobalID", "esriFieldTypeInteger", "esriFieldTypeOID", "esriFieldTypeRaster", "esriFieldTypeSingle", "esriFieldTypeSmallInteger", "esriFieldTypeString", "esriFieldTypeXML"]
            },
            utcValue: {
              type: "integer",
              description: "An integer value representing exact UNIX time used when `defaultValue` is a date string."
            }
          },
          additionalProperties: !1
        },
        "buildingSceneLayer_filterAuthoringInfo_filterType_schema.json": {
          title: "Filter Type",
          type: "object",
          description: "The file authoring information for a filter, including the filter type and its value settings.",
          properties: {
            filterType: {
              type: "string",
              description: "Represents the filter type name. Name is a unique identifier."
            },
            filterValues: {
              type: "array",
              description: "Array of filter values. Filter values are the attributes that can be stored for individual fields in a layer.",
              items: {
                type: "string"
              }
            }
          },
          required: ["filterType", "filterValues"],
          additionalProperties: !1
        },
        "buildingSceneLayer_filterModeSolid_schema.json": {
          title: "Filter mode solid",
          type: "object",
          description: "Draw elements of this filter block in solid mode. This mode does not change the display of features.",
          properties: {
            type: {
              type: "string",
              description: "Declares filter mode of type solid.",
              "enum": ["solid"]
            }
          },
          required: ["type"],
          additionalProperties: !1
        },
        "buildingSceneLayer_filterModeWireFrame_schema.json": {
          title: "Filter mode wire frame",
          type: "object",
          description: "Draw elements of this filter block in wireframe mode. This mode draws only the edges of the features with the specified edge style.",
          properties: {
            edges: {
              type: "object",
              description: "An object defining edges of a feature.",
              $ref: "#/definitions/edges_schema.json"
            },
            type: {
              type: "string",
              description: "Declares filter mode of type wire frame.",
              "enum": ["wireFrame"]
            }
          },
          required: ["edges", "type"],
          additionalProperties: !1
        },
        "buildingSceneLayer_filterModeXray_schema.json": {
          title: "Filter mode x-ray",
          type: "object",
          description: "Draw elements of this filter block in x-ray mode. `x-ray` renders elements semi-transparent with white color.",
          properties: {
            type: {
              type: "string",
              description: "Declares filter mode of type x-ray.",
              "enum": ["x-ray"]
            }
          },
          required: ["type"],
          additionalProperties: !1
        },
        "codedValue_domain_schema.json": {
          title: "codedValue",
          type: "object",
          description: "The coded value domain includes both the actual value that is stored in a database and a description of what the code value means.",
          properties: {
            codedValues: {
              type: "array",
              description: "A set of valid values with unique names.",
              items: {
                type: "object",
                $ref: "#/definitions/codedValue_schema.json"
              },
              uniqueItems: !0
            },
            name: {
              type: "string",
              description: "The domain name."
            },
            type: {
              type: "string",
              description: "String value representing the domain type.",
              "enum": ["codedValue"]
            }
          },
          required: ["codedValues", "type"],
          additionalProperties: !1
        },
        "inherited_domain_schema.json": {
          title: "inheritedDomain",
          type: "object",
          description: "This domain applies to domains on subtypes. It implies that the domain for a field at the subtype level is the same as the domain for the field at the layer level.",
          properties: {
            name: {
              type: "string",
              description: "The domain name."
            },
            type: {
              type: "string",
              description: "String value representing the domain type.",
              "enum": ["inherited"]
            }
          },
          required: ["type"],
          additionalProperties: !1
        },
        "range_domain_schema.json": {
          title: "rangeDomain",
          type: "object",
          description: "Range domain specifies a range of valid values for a field.",
          properties: {
            name: {
              type: "string",
              description: "The domain name."
            },
            range: {
              type: "array",
              description: "The first element is the minValue and the second element is the maxValue.",
              items: {
                type: "number"
              },
              minItems: 2,
              maxItems: 2,
              uniqueItems: !0
            },
            type: {
              type: "string",
              description: "String value representing the domain type.",
              "enum": ["range"]
            }
          },
          required: ["range", "type"],
          additionalProperties: !1
        },
        "dataSource_schema.json": {
          title: "dataSource",
          type: "object",
          description: "This object applies if the [layerDefinition](layerDefinition.md) source is set to `DynamicDataLayer`.",
          oneOf: [{
            $ref: "#/definitions/joinTableDataSource_schema.json"
          }, {
            $ref: "#/definitions/queryTableDataSource_schema.json"
          }, {
            $ref: "#/definitions/rasterDataSource_schema.json"
          }, {
            $ref: "#/definitions/tableDataSource_schema.json"
          }]
        },
        "feature_schema.json": {
          title: "feature",
          type: "object",
          description: "Contains information about an attribute field and feature geometry.",
          properties: {
            attributes: {
              type: "object",
              description: "The feature attributes. A JSON object that contains a dictionary of name-value pairs. The names are the feature field names. The values are the field values, and they can be any of the standard JSON types: string, number, and boolean. Note that date values are encoded as numbers. The number represents the number of milliseconds since epoch (January 1, 1970) in UTC."
            },
            geometry: {
              type: "object",
              description: "It can be any of the supported geometry types.",
              $ref: "#/definitions/geometry_schema.json"
            },
            symbol: {
              type: "object",
              description: "Symbol used for drawing the feature.",
              $ref: "#/definitions/symbol3D_schema.json"
            }
          },
          additionalProperties: !1
        },
        "mediaInfo_chart_value_schema.json": {
          title: "mediaInfo chart value",
          type: "object",
          description: "The value object contains information for popup windows about how charts should be constructed.",
          properties: {
            fields: {
              type: "array",
              description: "An array of strings, with each string containing the name of a field to display in the chart.",
              items: {
                type: "string"
              },
              uniqueItems: !0
            },
            normalizeField: {
              type: "string",
              description: "An optional string containing the name of a field. The values of all fields in the chart will be normalized (divided) by the value of this field."
            },
            tooltipField: {
              type: "string",
              description: "String value indicating the tooltip for a chart specified from another field. This field is needed when related records are not used. It is used for showing tooltips from another field in the same layer or related layer/table."
            }
          },
          required: ["fields"],
          additionalProperties: !1
        },
        "mediaInfo_image_value_schema.json": {
          title: "mediaInfo image value",
          type: "object",
          description: "The value object contains information for popup windows about how images should be retrieved.",
          properties: {
            linkURL: {
              type: "string",
              description: "A string containing a URL to be launched in a browser when a user clicks the image."
            },
            sourceURL: {
              type: "string",
              description: "A string containing the URL to the image."
            }
          },
          required: ["sourceURL"],
          additionalProperties: !1
        },
        "callout_schema.json": {
          title: "Callout",
          type: "object",
          description: "Callout configuration for a symbol.",
          properties: {
            border: {
              $ref: "#/definitions/border_schema.json"
            },
            color: {
              description: "The color of the line.",
              $ref: "#/definitions/color_schema.json"
            },
            size: {
              type: "number",
              description: "The width of the line in points.",
              minimum: 0
            },
            transparency: {
              type: "integer",
              description: "A value between `100` (full transparency) and `0` (full opacity).",
              minimum: 0,
              maximum: 100,
              "default": 0
            },
            type: {
              type: "string",
              description: "The type of the callout. A callout of type `line` connects an offset symbol or label with its location.",
              "enum": ["line"]
            }
          },
          required: ["color", "size", "type"],
          additionalProperties: !1
        },
        "textSymbol3DLayer_schema.json": {
          title: "TextSymbol3DLayer",
          type: "object",
          description: "Symbol layer for text and font definitions.",
          properties: {
            enable: {
              type: "boolean"
            },
            font: {
              $ref: "#/definitions/font_schema.json"
            },
            halo: {
              $ref: "#/definitions/halo_schema.json"
            },
            material: {
              $ref: "#/definitions/material_schema.json"
            },
            size: {
              type: "number",
              description: "Font size in points, positive only",
              minimum: 0
            },
            text: {
              type: "string",
              description: "Text content in the label. Typically this property is not set, as text content is read from labeling field."
            },
            type: {
              type: "string",
              description: "Specifies the type of symbol used.",
              "enum": ["Text"]
            }
          },
          required: ["type"],
          additionalProperties: !1
        },
        "verticalOffset_schema.json": {
          title: "verticalOffset",
          type: "object",
          description: "Shifts the symbol along the vertical world axis by a given length. The length is set in screen space units.",
          properties: {
            maxWorldLength: {
              type: "number",
              description: "The maximum vertical symbol lift in world units. It acts as an upper bound to avoid lift becoming too big."
            },
            minWorldLength: {
              type: "number",
              description: "The minimum vertical symbol lift in world units. It acts as a lower bound to avoid lift becoming too small.",
              "default": 0
            },
            screenLength: {
              type: "number",
              description: "Maximal screen length of lift in points."
            }
          },
          required: ["screenLength"],
          additionalProperties: !1
        },
        "authoringInfo_schema.json": {
          title: "authoringInfo",
          type: "object",
          description: "The authoringInfo is an object containing metadata about the authoring process for creating a renderer object. This allows the authoring clients to save specific overridable settings so that next time it is accessed via an authoring client, their selections are remembered. Non-authoring clients can ignore it. Properties for color/size/transparency sliders, theme selection, classification information, and additional properties are saved within this object.",
          properties: {
            classificationMethod: {
              type: "string",
              description: "Used for classed color or size. The default value is `esriClassifyManual`.",
              "enum": ["esriClassifyDefinedInterval", "esriClassifyEqualInterval", "esriClassifyManual", "esriClassifyNaturalBreaks", "esriClassifyQuantile", "esriClassifyStandardDeviation"],
              "default": "esriClassifyManual"
            },
            colorRamp: {
              type: "object",
              $ref: "#/definitions/colorRamp_schema.json"
            },
            field1: {
              $ref: "#/definitions/field_authoringInfo_schema.json"
            },
            field2: {
              $ref: "#/definitions/field_authoringInfo_schema.json"
            },
            fields: {
              type: "array",
              description: "An array of string values representing field names used for creating predominance renderers.",
              items: {
                type: "string"
              }
            },
            focus: {
              type: "string",
              description: "Optional. Used for Relationship renderer. If not set, the legend will default to being square.",
              "enum": ["HH", "HL", "LH", "LL"]
            },
            lengthUnit: {
              type: "string",
              description: "Unit used in user interfaces to display world/map sizes and distances",
              "enum": ["centimeters", "decimal-degrees", "decimeters", "feet", "inches", "kilometers", "meters", "miles", "millimeters", "nautical-miles", "yards"]
            },
            numClasses: {
              type: "integer",
              description: "Number of classes to be associated with the relationship. Used for Relationship renderer.",
              minimum: 2,
              maximum: 4
            },
            standardDeviationInterval: {
              type: "number",
              description: "Use this property if the classificationMethod is `esriClassifyStandardDeviation`.",
              "enum": [.25, .33, .5, 1]
            },
            type: {
              type: "string",
              "enum": ["classedColor", "classedSize", "dotDensity", "predominance", "relationship", "univariateColorSize"]
            },
            visualVariables: {
              type: "array",
              description: "An array of visualVariable objects containing additional information needed when authoring the renderer.",
              items: {
                type: "object",
                $ref: "#/definitions/authoringInfo_visualVariable_schema.json"
              }
            }
          },
          additionalProperties: !1
        },
        "polygonSymbol3D_schema.json": {
          title: "PolygonSymbol3D",
          type: "object",
          description: "PolygonSymbol3D is used to render features with Polygon geometry in a 3D SceneView. Polygon features may also be rendered as points with icons or objects at the centroid of each polygon.",
          properties: {
            styleOrigin: {
              $ref: "#/definitions/styleOrigin_schema.json"
            },
            symbolLayers: {
              type: "array",
              description: "A Collection of Symbol3DLayer objects used to visualize the graphic or feature.",
              items: {
                oneOf: [{
                  $ref: "#/definitions/fillSymbol3DLayer_schema.json"
                }, {
                  $ref: "#/definitions/extrudeSymbol3DLayer_schema.json"
                }, {
                  $ref: "#/definitions/waterSymbol3DLayer_schema.json"
                }, {
                  $ref: "#/definitions/iconSymbol3DLayer_schema.json"
                }, {
                  $ref: "#/definitions/objectSymbol3DLayer_schema.json"
                }, {
                  $ref: "#/definitions/textSymbol3DLayer_schema.json"
                }, {
                  description: "<em>Deprecated</em>, use [fillSymbol3DLayer with outline](fillSymbol3DLayer.md) instead",
                  $ref: "#/definitions/lineSymbol3DLayer_schema.json"
                }]
              }
            },
            type: {
              type: "string",
              description: "Specifies the type of symbol used.",
              "enum": ["PolygonSymbol3D"]
            }
          },
          required: ["symbolLayers", "type"],
          additionalProperties: !1
        },
        "classBreakInfo_schema.json": {
          title: "classBreakInfo",
          type: "object",
          description: "The classBreaksInfo object provides information about the class breaks associated with the renderer.",
          properties: {
            classMaxValue: {
              type: "number",
              description: "A numeric value used to specify the maximum value for a break."
            },
            classMinValue: {
              type: "number",
              description: "A numeric value used to specify discontinuous class breaks. If this value is null or is missing, the map server will calculate the minimum value based on the preceding class' maximum value."
            },
            description: {
              type: "string",
              description: "String value used to describe the drawn symbol."
            },
            label: {
              type: "string",
              description: "String value used to label the drawn symbol."
            },
            symbol: {
              type: "object",
              description: "An object used to display the value.",
              $ref: "#/definitions/symbol3D_schema.json"
            }
          },
          required: ["symbol"],
          additionalProperties: !1
        },
        "symbol3D_schema.json": {
          title: "Symbol3D",
          type: "object",
          description: "Symbol3D is the base class for all 3D symbols. It is used to render 2D Point, Polyline, and Polygon features in a FeatureLayer and 3D mesh features in a SceneLayer. All 3D symbols must be used in a SceneView instance; there is no support for 3D rendering in MapViews.",
          oneOf: [{
            $ref: "#/definitions/lineSymbol3D_schema.json"
          }, {
            $ref: "#/definitions/meshSymbol3D_schema.json"
          }, {
            $ref: "#/definitions/pointSymbol3D_schema.json"
          }, {
            $ref: "#/definitions/polygonSymbol3D_schema.json"
          }, {
            $ref: "#/definitions/styleSymbolReference_schema.json"
          }]
        },
        "rendererLegendOptions_schema.json": {
          title: "Renderer Legend Options",
          type: "object",
          description: "Options available for the renderer legend.",
          properties: {
            title: {
              type: "string",
              description: "The title of the legend."
            }
          }
        },
        "visualVariable_schema.json": {
          title: "visualVariable",
          type: "object",
          description: "An object used to set rendering options. Please see the individual visual variable for specific information on how it is used.",
          oneOf: [{
            $ref: "#/definitions/colorInfo_visualVariable_schema.json"
          }, {
            $ref: "#/definitions/rotationInfo_visualVariable_schema.json"
          }, {
            $ref: "#/definitions/sizeInfo_visualVariable_schema.json"
          }, {
            $ref: "#/definitions/transparencyInfo_visualVariable_schema.json"
          }]
        },
        "pointCloudClassBreaksRenderer_schema.json": {
          title: "PointCloud ClassBreaks Renderer",
          type: "object",
          description: "PointCloudClassBreaksRenderer defines the color of each point in a PointCloudLayer based on the value of a numeric attribute. Colors are assigned based on classes or ranges of data. Each point is assigned a symbol based on the class break in which the value of the attribute falls.",
          properties: {
            colorClassBreakInfos: {
              type: "array",
              description: "Each element in the array is an object that provides information about a class break associated with the renderer.",
              items: {
                type: "object",
                $ref: "#/definitions/colorClassBreakInfo_schema.json"
              }
            },
            colorModulation: {
              $ref: "#/definitions/colorModulationInfo_schema.json"
            },
            field: {
              type: "string",
              description: "  The name of the field that is used for the renderer."
            },
            fieldTransformType: {
              type: "string",
              description: "A transform that is applied to the field value before evaluating the renderer.",
              "enum": ["absoluteValue", "highFourBit", "lowFourBit", "moduloTen", "none"]
            },
            legendOptions: {
              type: "object",
              description: "A legend containing one title, which is a string describing the renderer in the legend.",
              $ref: "#/definitions/rendererLegendOptions_schema.json"
            },
            pointSizeAlgorithm: {
              $ref: "#/definitions/pointSizeAlgorithm_schema.json"
            },
            pointsPerInch: {
              type: "number",
              description: "Number of point to draw per display inch."
            },
            type: {
              type: "string",
              description: "Specifies the type of renderer used.",
              "enum": ["pointCloudClassBreaksRenderer"]
            }
          },
          required: ["colorClassBreakInfos", "field", "type"],
          additionalProperties: !1
        },
        "pointCloudRGBRenderer_schema.json": {
          title: "PointCloud RGB Renderer",
          type: "object",
          description: "PointCloudRGBRenderer defines the color of each point in a PointCloudLayer based on the value of a color attribute.",
          properties: {
            colorModulation: {
              description: "",
              $ref: "#/definitions/colorModulationInfo_schema.json"
            },
            field: {
              type: "string",
              description: "The name of the field that is used for the renderer."
            },
            pointSizeAlgorithm: {
              description: "",
              $ref: "#/definitions/pointSizeAlgorithm_schema.json"
            },
            pointsPerInch: {
              type: "number",
              description: "Number of point to draw per display inch."
            },
            type: {
              type: "string",
              description: "Specifies the type of renderer used.",
              "enum": ["pointCloudRGBRenderer"]
            }
          },
          required: ["field", "type"],
          additionalProperties: !1
        },
        "pointCloudStretchRenderer_schema.json": {
          title: "PointCloud Stretch Renderer",
          type: "object",
          description: "PointCloudStretchRenderer defines the color of each point in a PointCloudLayer based on the value of a numeric attribute. They allow you to easily map continuous color ramps to minimum and maximum data values of one of the layer's numeric attribute fields.",
          properties: {
            colorModulation: {
              description: "",
              $ref: "#/definitions/colorModulationInfo_schema.json"
            },
            field: {
              type: "string",
              description: "The name of the field that is used for the renderer."
            },
            fieldTransformType: {
              type: "string",
              description: "A transform that is applied to the field value before evaluating the renderer.",
              "enum": ["absoluteValue", "highFourBit", "lowFourBit", "moduloTen", "none"]
            },
            legendOptions: {
              type: "object",
              description: "A legend containing one title, which is a string describing the renderer in the legend.",
              $ref: "#/definitions/rendererLegendOptions_schema.json"
            },
            pointSizeAlgorithm: {
              description: "",
              $ref: "#/definitions/pointSizeAlgorithm_schema.json"
            },
            pointsPerInch: {
              type: "number",
              description: "Number of points to draw per display inch."
            },
            stops: {
              type: "array",
              description: "An array of color value pairs.",
              items: {
                type: "object",
                $ref: "#/definitions/colorStop_schema.json"
              }
            },
            type: {
              type: "string",
              description: "Specifies the type of renderer used.",
              "enum": ["pointCloudStretchRenderer"]
            }
          },
          required: ["field", "stops", "type"],
          additionalProperties: !1
        },
        "pointCloudUniqueValueRenderer_schema.json": {
          title: "PointCloud UniqueValue Renderer",
          type: "object",
          description: "PointCloudUniqueValueRenderer allows you to colorize points in a PointCloudLayer based on an attribute. This is done by using unique colors to represent points with equal attribute values.",
          properties: {
            colorModulation: {
              description: "",
              $ref: "#/definitions/colorModulationInfo_schema.json"
            },
            colorUniqueValueInfos: {
              type: "array",
              description: "Unique value infos.",
              items: {
                type: "object",
                $ref: "#/definitions/colorUniqueValueInfo_schema.json"
              }
            },
            field: {
              type: "string",
              description: "The name of the field that is used for the renderer."
            },
            fieldTransformType: {
              type: "string",
              description: "A transform that is applied to the field value before evaluating the renderer.",
              "enum": ["absoluteValue", "highFourBit", "lowFourBit", "moduloTen", "none"]
            },
            legendOptions: {
              type: "object",
              description: "A legend containing one title, which is a string describing the renderer in the legend.",
              $ref: "#/definitions/rendererLegendOptions_schema.json"
            },
            pointSizeAlgorithm: {
              description: "",
              $ref: "#/definitions/pointSizeAlgorithm_schema.json"
            },
            pointsPerInch: {
              type: "number",
              description: "Number of points to draw per display inch."
            },
            type: {
              type: "string",
              description: "Specifies the type of renderer used.",
              "enum": ["pointCloudUniqueValueRenderer"]
            }
          },
          required: ["colorUniqueValueInfos", "field", "type"],
          additionalProperties: !1
        },
        "rasterClassBreaksRenderer_schema.json": {
          title: "Raster ClassBreaks Renderer",
          type: "object",
          description: "Defines the color of each raster cell based on the value of a numeric attribute. Colors are assigned based on classed ranges of data.",
          properties: {
            authoringInfo: {
              type: "object",
              description: "An object containing metadata about the authoring process for creating a renderer object. This allows the authoring clients to save specific overridable settings so that next time it is accessed via the UI, their selections are remembered. Non-authoring clients can ignore it.",
              $ref: "#/definitions/authoringInfo_schema.json"
            },
            colorClassBreakInfos: {
              type: "array",
              description: "Each element in the array is an object that provides information about a class break associated with the renderer.",
              items: {
                type: "object",
                $ref: "#/definitions/colorClassBreakInfo_schema.json"
              }
            },
            defaultColor: {
              description: "The defaultColor on the renderer that get assigned to features with no value or features that do not fall within the configured data.",
              $ref: "#/definitions/color_schema.json"
            },
            defaultLabel: {
              type: "string",
              description: "Default label for the default symbol used to draw unspecified values."
            },
            field: {
              type: "string",
              description: "The name of the field that is used for the renderer."
            },
            legendOptions: {
              type: "object",
              description: "A legend containing one title, which is a string describing the renderer in the legend.",
              $ref: "#/definitions/rendererLegendOptions_schema.json"
            },
            normalizationField: {
              type: "string",
              description: "Used when normalizationType is field. The string value indicating the attribute field by which the data value is normalized."
            },
            normalizationTotal: {
              type: "number",
              description: "Used when normalizationType is percent-of-total, this number property contains the total of all data values."
            },
            normalizationType: {
              type: "string",
              description: "Determine how the data was normalized.",
              "enum": ["esriNormalizeByField", "esriNormalizeByLog", "esriNormalizeByPercentOfTotal"]
            },
            type: {
              type: "string",
              description: "Specifies the type of renderer used.",
              "enum": ["rasterClassBreaksRenderer"]
            }
          },
          required: ["colorClassBreakInfos", "field", "type"],
          additionalProperties: !1
        },
        "rasterColormapRenderer_schema.json": {
          title: "Raster Colormap Renderer",
          type: "object",
          description: "A value/color look up table used for rendering raster data only.",
          properties: {
            colormapInfos: {
              type: "array",
              description: "An array of colormapInfo objects.",
              items: {
                type: "object",
                $ref: "#/definitions/colormapInfo_schema.json"
              }
            },
            type: {
              type: "string",
              description: "Specifies the type of renderer used.",
              "enum": ["rasterColormap"]
            }
          },
          required: ["colormapInfos", "type"],
          additionalProperties: !1
        },
        "rasterShadedReliefRenderer_schema.json": {
          title: "Raster Shaded Relief Renderer",
          type: "object",
          description: "This renderer produces a grayscale or a colored 3D representation of a shaded relief. This renderer can be used on either layers of type: [ImageServiceLayer](imageServiceLayer.md) or [TiledImageServiceLayer](tiledImageServiceLayer.md).",
          properties: {
            altitude: {
              type: "number",
              description: "Used when the `hillshadeType` is `traditional`. The  altitude of the illumination source."
            },
            azimuth: {
              type: "number",
              description: "Used when the `hillshadeType` is `traditional`. The azimuth of the illumination source."
            },
            colorRamp: {
              type: "object",
              description: "The color ramp to display the shaded relief. When not specified, a grayscale hillshade is produced. When this is specified, grayscale hillshade is fused with colorized elevation.",
              $ref: "#/definitions/colorRamp_schema.json"
            },
            hillshadeType: {
              type: "string",
              description: "Use single (traditional), or multiple illumination sources to generate hillshade.",
              "enum": ["multi-directional", "traditional"]
            },
            pixelSizeFactor: {
              type: "number",
              description: "Accounts for changes in scale as the viewer zooms in and out on the map display."
            },
            pixelSizePower: {
              type: "number",
              description: "Accounts for the altitude changes (or scale) as the viewer zooms in and out on the map display."
            },
            scalingType: {
              type: "string",
              description: "Apply a constant or adjusted z-factor based on resolution changes. The `adjusted` type is suitable for worldwide elevation dataset. An adjusted `zFactor` is determined using this equation: `Adjusted Z-Factor = (Z Factor) + (Pixel Size)` <sup>(Pixel Size Power)</sup> `x Pixel Size Factor`.",
              "enum": ["adjusted", "none"]
            },
            type: {
              type: "string",
              description: "Specifies the type of renderer used.",
              "enum": ["rasterShadedRelief"]
            },
            zFactor: {
              type: "number",
              description: "A conversion factor that adjusts the units of measure for the vertical (or elevation) units when they are different from the horizontal coordinate (x,y) units of the input surface. It is the number of ground x,y units in one surface z-unit."
            }
          },
          required: ["altitude", "azimuth", "hillshadeType", "scalingType", "type", "zFactor"],
          additionalProperties: !1
        },
        "rasterStretchRenderer_schema.json": {
          title: "Raster Stretch Renderer",
          description: "Displays continuous raster cell values across a gradual ramp of colors. Use this renderer to draw a single band of continuous data. This renderer works well when you have a large range of values to display, such as with imagery or scientific data.",
          properties: {
            colorRamp: {
              type: "object",
              $ref: "#/definitions/colorRamp_schema.json"
            },
            computeGamma: {
              type: "boolean",
              description: "Indicates if gamma values should be computed by default."
            },
            dra: {
              type: "boolean",
              description: "Indicates if Dynamic Range Adjustment should be applied."
            },
            gamma: {
              type: "array",
              description: "The list of Gamma value(s).",
              items: {
                type: "number"
              }
            },
            max: {
              type: "number",
              description: "The current maximum output value."
            },
            maxPercent: {
              type: "number",
              description: "The current maximum percent value."
            },
            min: {
              type: "number",
              description: "The current minimum output value."
            },
            minPercent: {
              type: "number",
              description: "The current minimum percent value."
            },
            numberOfStandardDeviations: {
              type: "integer",
              description: "The number of standard deviations for standard deviation stretch."
            },
            sigmoidStrengthLevel: {
              type: "number",
              description: "Set this from (1 to 6) to adjust the curvature of Sigmoid curve used in color stretch."
            },
            statistics: {
              type: "array",
              description: "The custom raster stretch statistics.",
              items: {
                type: "array",
                items: {
                  type: "number",
                  minItems: 4,
                  maxItems: 4
                }
              }
            },
            stretchType: {
              type: "string",
              description: "The stretch types for stretch raster function.",
              "enum": ["histogramEqualization", "minMax", "none", "percentClip", "sigmoid", "standardDeviation"]
            },
            type: {
              type: "string",
              description: "Specifies the type of renderer used.",
              "enum": ["rasterStretch"]
            },
            useGamma: {
              type: "boolean",
              description: "Indicates if the renderer applies Gamma stretch."
            }
          },
          additionalProperties: !1
        },
        "rasterUniqueValueRenderer_schema.json": {
          title: "Raster UniqueValue Renderer",
          type: "object",
          description: "Defines the color of each raster cell based on an attribute. This is done by using unique colors to represent cells with equal attribute values.",
          properties: {
            authoringInfo: {
              type: "object",
              description: "An object containing metadata about the authoring process for creating a renderer object. This allows the authoring clients to save specific overridable settings so that next time it is accessed via the UI, their selections are remembered. Non-authoring clients can ignore it.",
              $ref: "#/definitions/authoringInfo_schema.json"
            },
            colorUniqueValueInfos: {
              type: "array",
              description: "Unique value infos.",
              items: {
                type: "object",
                $ref: "#/definitions/colorUniqueValueInfo_schema.json"
              }
            },
            defaultColor: {
              description: "The defaultColor on the renderer that get assigned to features with no value or features that do not fall within the configured data.",
              $ref: "#/definitions/color_schema.json"
            },
            defaultLabel: {
              type: "string",
              description: "Default label for the default symbol used to draw unspecified values."
            },
            field: {
              type: "string",
              description: "The name of the field that is used for the renderer."
            },
            legendOptions: {
              type: "object",
              description: "A legend containing one title, which is a string describing the renderer in the legend.",
              $ref: "#/definitions/rendererLegendOptions_schema.json"
            },
            type: {
              type: "string",
              description: "Specifies the type of renderer used.",
              "enum": ["rasterUniqueValueRenderer"]
            }
          },
          required: ["colorUniqueValueInfos", "field", "type"],
          additionalProperties: !1
        },
        "uniqueValueInfo_schema.json": {
          title: "uniqueValueInfo",
          type: "object",
          description: "Info item for the Unique Value Renderer. Its symbol gets selected if the feature's field matches its value.",
          properties: {
            description: {
              type: "string",
              description: "String value used to describe the drawn symbol."
            },
            label: {
              type: "string",
              description: "String value used to label the drawn symbol."
            },
            symbol: {
              type: "object",
              description: "An object used to display the value.",
              $ref: "#/definitions/symbol3D_schema.json"
            },
            value: {
              type: "string",
              description: "String value indicating the unique value."
            }
          },
          additionalProperties: !1
        },
        "search_layer_field_schema.json": {
          title: "search layer field",
          type: "object",
          description: "Contains information about an attribute field in search layer configuration.",
          properties: {
            exactMatch: {
              type: "boolean",
              description: "A Boolean defining whether or not the field is an exact match."
            },
            name: {
              type: "string",
              description: "A string defining the field name."
            },
            type: {
              type: "string",
              description: "A string defining the field type.",
              "enum": ["esriFieldTypeBlob", "esriFieldTypeDate", "esriFieldTypeDouble", "esriFieldTypeGUID", "esriFieldTypeGeometry", "esriFieldTypeGlobalID", "esriFieldTypeInteger", "esriFieldTypeLong", "esriFieldTypeOID", "esriFieldTypeRaster", "esriFieldTypeSingle", "esriFieldTypeSmallInteger", "esriFieldTypeString", "esriFieldTypeXML"]
            }
          },
          additionalProperties: !1
        },
        "edges_schema.json": {
          title: "Edges",
          type: "object",
          description: "Specifies an edge visualization style (only applies to MeshSymbol3D). Edges describe the style applied to visually important edges of 3D objects.",
          oneOf: [{
            $ref: "#/definitions/sketchEdges_schema.json"
          }, {
            $ref: "#/definitions/solidEdges_schema.json"
          }]
        },
        "codedValue_schema.json": {
          title: "codedValue",
          type: "object",
          description: "A set of valid coded values with unique names.",
          properties: {
            code: {
              type: ["number", "string"],
              description: "The value stored in the feature attribute."
            },
            name: {
              type: "string",
              description: "User-friendly name for what the code means."
            }
          },
          required: ["code", "name"],
          additionalProperties: !1
        },
        "joinTableDataSource_schema.json": {
          title: "Join Table DataSource",
          type: "object",
          description: "Join Table data source is the result of a join operation. Nested joins are supported. To use nested joins, set either leftTableSource or rightTableSource to be a joinTable.",
          properties: {
            joinType: {
              type: "string",
              description: "The type of join (left outer or left inner).",
              "enum": ["esriLeftInnerJoin", "esriLeftOuterJoin"]
            },
            leftTableKey: {
              type: "string",
              description: "Field name from the left table."
            },
            leftTableSource: {
              type: "object",
              description: "The left source. If the leftTableSource is a table, the resulting joinTable is a table. If the leftTableSource is a layer, the resulting joinTable is a layer.",
              $ref: "#/definitions/source_schema.json"
            },
            rightTableKey: {
              type: "string",
              description: "Field name from the right table."
            },
            rightTableSource: {
              type: "object",
              description: "The right table source.",
              $ref: "#/definitions/source_schema.json"
            },
            type: {
              type: "string",
              description: "String value indicating the type for the dataSource.",
              "enum": ["joinTable"]
            }
          },
          required: ["type"],
          additionalProperties: !1
        },
        "queryTableDataSource_schema.json": {
          title: "Query Table DataSource",
          type: "object",
          description: "Query table data source is a layer/table that is defined by a SQL query.",
          properties: {
            geometryType: {
              type: "string",
              description: "The geometry type. When querying a table that does not have a geometry column, do not include geometryType.",
              "enum": ["esriGeometryMultipoint", "esriGeometryPoint", "esriGeometryPolygon", "esriGeometryPolyline"]
            },
            oidFields: {
              type: "string",
              description: "Comma separated list of identifier fields. There are only certain field types that can be used as a unique identifier. These field types include integer, string, GUID, and date. If a single integer field is specified, map server uses the values in that field directly to uniquely identify all features and rows returned from a queryTable. However, if a single string field or a group of fields is used as the unique identifier, map server maps those unique values to an integer."
            },
            query: {
              type: "string",
              description: "The SQL query."
            },
            spatialReference: {
              type: "object",
              description: "The spatial reference of the geometry column. When querying a table that does not have a geometry column, do not include spatialReference.",
              $ref: "#/definitions/spatialReference_schema.json"
            },
            type: {
              type: "string",
              description: "String value indicating the type for the dataSource.",
              "enum": ["queryTable"]
            },
            workspaceId: {
              type: "string",
              description: "The unique string value used to identify the datasource's workspace."
            }
          },
          required: ["type"],
          additionalProperties: !1
        },
        "rasterDataSource_schema.json": {
          title: "Raster DataSource",
          type: "object",
          description: "Raster data source is a file-based raster that resides in a registered raster workspace.",
          properties: {
            dataSourceName: {
              type: "string",
              description: "The raster datasource's name."
            },
            type: {
              type: "string",
              description: "String value indicating the type for the dataSource.",
              "enum": ["raster"]
            },
            workspaceId: {
              type: "string",
              description: "The unique string value used to identify the datasource's workspace."
            }
          },
          required: ["type"],
          additionalProperties: !1
        },
        "tableDataSource_schema.json": {
          title: "Table DataSource",
          type: "object",
          description: "Table data source is a table, feature class, or raster that resides in a registered workspace (either a folder or geodatabase). In the case of a geodatabase, if versioned, use version to switch to an alternate geodatabase version. If version is empty or missing, the registered geodatabase version will be used.",
          properties: {
            dataSourceName: {
              type: "string",
              description: "The fully-qualified string value used to specify where the dataSource is derived."
            },
            gdbVersion: {
              type: "string",
              description: "If applicable, the value indicating the version of the geodatabase."
            },
            type: {
              type: "string",
              description: "String value indicating the type for the dataSource. The value for a Table DataSource is `table`.",
              "enum": ["table"]
            },
            workspaceId: {
              type: "string",
              description: "The unique string value used to identify the datasource's workspace."
            }
          },
          required: ["type"],
          additionalProperties: !1
        },
        "border_schema.json": {
          title: "border",
          type: "object",
          description: "Optional border on the line that is used to improve the contrast of the line color against various background colors.",
          properties: {
            color: {
              $ref: "#/definitions/color_schema.json"
            },
            transparency: {
              type: "integer",
              description: "A value between `100` (full transparency) and `0` (full opacity).",
              minimum: 0,
              maximum: 100,
              "default": 0
            }
          },
          required: ["color"],
          additionalProperties: !1
        },
        "font_schema.json": {
          title: "font",
          type: "object",
          description: "Font used for text symbols.",
          properties: {
            decoration: {
              type: "string",
              description: "The text decoration.",
              "enum": ["line-through", "none", "underline"],
              "default": "none"
            },
            family: {
              type: "string",
              description: "The font family."
            },
            size: {
              type: "number",
              description: "The font size in points. Ignored when font is used on TextSymbol3DLayer."
            },
            style: {
              type: "string",
              description: "The text style.",
              "enum": ["italic", "normal", "oblique"],
              "default": "normal"
            },
            weight: {
              type: "string",
              description: "The text weight.",
              "enum": ["bold", "bolder", "lighter", "normal"],
              "default": "normal"
            }
          },
          additionalProperties: !1
        },
        "halo_schema.json": {
          title: "halo",
          type: "object",
          description: "Halo definition.",
          properties: {
            color: {
              $ref: "#/definitions/color_schema.json"
            },
            size: {
              type: "number",
              description: "Width of the halo in points."
            },
            transparency: {
              type: "integer",
              description: "A value between `100` (full transparency) and `0` (full opacity).",
              minimum: 0,
              maximum: 100,
              "default": 0
            }
          },
          additionalProperties: !1
        },
        "material_schema.json": {
          title: "Material",
          type: "object",
          description: "The material used to shade the geometry.",
          properties: {
            color: {
              $ref: "#/definitions/color_schema.json"
            },
            transparency: {
              type: "integer",
              description: "A value between `100` (full transparency) and `0` (full opacity). Ignored if no color is specified.",
              minimum: 0,
              maximum: 100
            }
          },
          additionalProperties: !1
        },
        "colorRamp_schema.json": {
          title: "Color Ramp",
          description: "A colorRamp object is used to specify a range of colors that are applied to a group of symbols.",
          oneOf: [{
            $ref: "#/definitions/colorRamp_algorithmic_schema.json"
          }, {
            $ref: "#/definitions/colorRamp_multipart_schema.json"
          }]
        },
        "field_authoringInfo_schema.json": {
          title: "AuthoringInfo Field",
          type: "object",
          description: "Contains information about an attribute field relating to Relationship renderers.",
          properties: {
            classBreakInfos: {
              type: "array",
              items: {
                type: "object",
                $ref: "#/definitions/classBreakInfo_authoringInfo_schema.json"
              }
            },
            field: {
              type: "string",
              description: "Attribute field used for renderer."
            },
            label: {
              type: "string",
              description: "The label used to describe the field or attribute in the legend."
            },
            normalizationField: {
              type: "string",
              description: "Attribute field used to normalize the data."
            }
          },
          additionalProperties: !1
        },
        "authoringInfo_visualVariable_schema.json": {
          title: "AuthoringInfo Visual Variable",
          type: "object",
          description: "This visual variable pertains specifically to [authoringInfo](authoringInfo.md) and is different from visual variables directly on the [renderer](renderer.md).",
          properties: {
            endTime: {
              type: ["number", "string"],
              description: "A Unix stamp. Both `startTime` or `endTime` can be fields. If this is the case, their names must be different."
            },
            field: {
              type: "string",
              description: "The attribute field the user chose in the Smart Mapping gallery. Must be the same as in either `startTime` or `endTime`."
            },
            maxSliderValue: {
              type: "number",
              description: "A numeric value indicating the maximum value displayed."
            },
            minSliderValue: {
              type: "number",
              description: "A numeric value indicating the minimum value displayed."
            },
            startTime: {
              type: ["number", "string"],
              description: "A Unix time stamp. Both `startTime` or `endTime` can be fields. If this is the case, their names must be different."
            },
            style: {
              type: "string",
              description: "(This property is used for comparison rendering). It is used to map the ratio between two numbers. It is possible to express that relationship as percentages, simple ratios, or an overall percentage.",
              "enum": ["percent", "percentTotal", "ratio"]
            },
            theme: {
              type: "string",
              description: "Theme to be used only when working with visual variables of type `colorInfo`. Default is `high-to-low`.",
              "enum": ["above-and-below", "centered-on", "extremes", "high-to-low"]
            },
            type: {
              type: "string",
              description: "A string value specifying the type of renderer's visual variable.",
              "enum": ["colorInfo", "rotationInfo", "sizeInfo", "transparencyInfo"]
            },
            units: {
              type: "string",
              description: "(This property is used only with age renderers.) Units for startTime and endTime.",
              "enum": ["days", "hours", "minutes", "months", "seconds", "years"]
            }
          },
          additionalProperties: !1
        },
        "styleOrigin_schema.json": {
          title: "styleOrigin",
          type: "object",
          description: "The origin of the style from which the symbol was originally referenced. A reference to the style origin can be either by styleName or by styleUrl (but not both). It may be used to understand where a symbol was originally sourced from, but does not affect actual appearance or rendering of the symbol.",
          properties: {
            name: {
              type: "string",
              description: "Identifies a symbol in the style by name."
            },
            styleName: {
              type: "string",
              description: "A registered web style name, such as `EsriThematicShapesStyle`"
            },
            styleUrl: {
              description: "URL to a style definition.",
              oneOf: [{
                type: "string",
                description: "An absolute URL"
              }, {
                type: "string",
                description: "A relative path starting with ./",
                pattern: "^\\./.+$"
              }]
            }
          },
          oneOf: [{
            required: ["name", "styleName"]
          }, {
            required: ["name", "styleUrl"]
          }],
          additionalProperties: !1
        },
        "fillSymbol3DLayer_schema.json": {
          title: "FillSymbol3DLayer",
          type: "object",
          description: "FillSymbol3DLayer is used to render the surfaces of flat 2D Polygon geometries and 3D volumetric meshes in a SceneView.",
          properties: {
            castShadows: {
              type: "boolean",
              description: "Boolean to control the shadow casting behaviour of the rendered geometries (only applies to MeshSymbol3D).",
              "default": !0
            },
            edges: {
              $ref: "#/definitions/edges_schema.json"
            },
            enable: {
              type: "boolean"
            },
            material: {
              $ref: "#/definitions/materialColorMixMode_schema.json"
            },
            outline: {
              type: "object",
              description: "The outline of the symbol layer (only applies to PolygonSymbol3D).",
              $ref: "#/definitions/outline_schema.json"
            },
            pattern: {
              $ref: "#/definitions/polygonPattern_schema.json"
            },
            type: {
              type: "string",
              description: "Specifies the type of symbol used.",
              "enum": ["Fill"]
            }
          },
          required: ["material", "type"],
          additionalProperties: !1
        },
        "extrudeSymbol3DLayer_schema.json": {
          title: "ExtrudeSymbol3DLayer",
          type: "object",
          description: "ExtrudeSymbol3DLayer is used to render Polygon geometries by extruding them upward from the ground, creating a 3D volumetric object.",
          properties: {
            castShadows: {
              type: "boolean",
              description: "Boolean to control the shadow casting behaviour of the rendered geometries.",
              "default": !0
            },
            edges: {
              type: "object",
              description: "Specifies an edge visualization style.",
              $ref: "#/definitions/edges_schema.json"
            },
            enable: {
              type: "boolean"
            },
            material: {
              $ref: "#/definitions/material_schema.json"
            },
            size: {
              type: "number",
              description: "Extrusion height in meters."
            },
            type: {
              type: "string",
              description: "Specifies the type of symbol used.",
              "enum": ["Extrude"]
            }
          },
          required: ["size", "type"],
          additionalProperties: !1
        },
        "waterSymbol3DLayer_schema.json": {
          title: "WaterSymbol3DLayer",
          type: "object",
          description: "Symbol Layer that describes a water appearance on surfaces in a SceneView.",
          properties: {
            color: {
              description: "The dominant water color.",
              $ref: "#/definitions/color_schema.json",
              "default": [0, 119, 190]
            },
            enable: {
              type: "boolean"
            },
            type: {
              type: "string",
              description: "Specifies the type of symbol used.",
              "enum": ["Water"]
            },
            waterbodySize: {
              type: "string",
              description: "Size of the waterbody the symbol layer represents. Applications will display waves that are appropriate for the chosen body of water, for example ocean versus marina versus swimming pool.",
              "enum": ["large", "medium", "small"],
              "default": "medium"
            },
            waveDirection: {
              type: "number",
              description: "Azimuthal bearing for direction of the waves. If ommitted, waves appear directionless. The value is interpreted as 'geographic' rotation, i.e. clockwise starting from north.",
              minimum: 0,
              maximum: 360
            },
            waveStrength: {
              type: "string",
              description: "The magnitude of the waves displayed on the waterbody. Strings roughly follow the [Douglas sea scale](https://en.wikipedia.org/wiki/Douglas_sea_scale), currently limited to lower degrees.",
              "enum": ["calm", "moderate", "rippled", "slight"],
              "default": "moderate"
            }
          },
          required: ["type"],
          additionalProperties: !1
        },
        "iconSymbol3DLayer_schema.json": {
          title: "IconSymbol3DLayer",
          type: "object",
          description: "IconSymbol3DLayer is used to render Point geometries using a flat 2D icon (e.g. a circle) with a PointSymbol3D in a SceneView.",
          properties: {
            anchor: {
              type: "string",
              "enum": ["bottom", "bottomLeft", "bottomRight", "center", "left", "relative", "right", "top", "topLeft", "topRight"],
              "default": "center"
            },
            anchorPosition: {
              type: "array",
              description: "When `anchor` equals `relative`, this property specifies the position within the icon that should coincide with the feature geometry. Otherwise it is ignored. The position is defined as a factor of the icon dimensions that is added to the icon center: `positionInIcon = (0.5 + anchorPosition) * size`, where `size` is the original size of the icon resource.",
              items: {
                type: "number"
              },
              minItems: 2,
              maxItems: 2
            },
            enable: {
              type: "boolean"
            },
            material: {
              $ref: "#/definitions/material_schema.json"
            },
            outline: {
              $ref: "#/definitions/outline_schema.json"
            },
            resource: {
              $ref: "#/definitions/iconSymbol3DLayer_resource_schema.json"
            },
            size: {
              type: "number",
              description: "Icon size in points, positive only",
              minimum: 0
            },
            type: {
              type: "string",
              description: "Specifies the type of symbol used.",
              "enum": ["Icon"]
            }
          },
          required: ["size", "type"],
          additionalProperties: !1
        },
        "objectSymbol3DLayer_schema.json": {
          title: "ObjectSymbol3DLayer",
          type: "object",
          description: "ObjectSymbol3DLayer is used to render Point geometries using a volumetric 3D shape (e.g., a sphere or cylinder) with a Symbol3D in a SceneView.",
          properties: {
            anchor: {
              type: "string",
              description: "The positioning of the object relative to the geometry.",
              "enum": ["bottom", "center", "origin", "relative", "top"],
              "default": "origin"
            },
            anchorPosition: {
              type: "array",
              description: "When `anchor` equals `relative`, this property specifies the positioning of the object relative to the geometry as a fraction of the symbol layer's bounding box. Otherwise it is ignored.",
              items: {
                type: "number"
              },
              minItems: 3,
              maxItems: 3
            },
            castShadows: {
              type: "boolean",
              description: "Boolean to control the shadow casting behaviour of the rendered geometries.",
              "default": !0
            },
            depth: {
              type: "number",
              description: "Object depth in meters, positive only",
              minimum: 0
            },
            enable: {
              type: "boolean"
            },
            heading: {
              type: "number",
              description: "Rotation angle around Z axis in degrees. At 0 degrees, the model points in the direction of the Y-axis. Positive values indicate clockwise rotation (when looked at from the top). [Detailed description](static/objectSymbolLayerOrientation.md)."
            },
            height: {
              type: "number",
              description: "Object height in meters, positive only",
              minimum: 0
            },
            material: {
              $ref: "#/definitions/material_schema.json"
            },
            resource: {
              $ref: "#/definitions/objectSymbol3DLayer_resource_schema.json"
            },
            roll: {
              type: "number",
              description: "Rotation angle around Y axis in degrees. At 0 degrees, the model is level. A positive value lifts the left part and lowers the right part of the model. [Detailed description](static/objectSymbolLayerOrientation.md)."
            },
            tilt: {
              type: "number",
              description: "Rotation angle around X axis in degrees. At 0 degrees, the model is level. A positive value lifts the front and lowers the back of the model. [Detailed description](static/objectSymbolLayerOrientation.md)."
            },
            type: {
              type: "string",
              description: "Specifies the type of symbol used.",
              "enum": ["Object"]
            },
            width: {
              type: "number",
              description: "Object width in meters, positive only",
              minimum: 0
            }
          },
          required: ["type"],
          additionalProperties: !1
        },
        "lineSymbol3DLayer_schema.json": {
          title: "LineSymbol3DLayer",
          type: "object",
          description: "LineSymbol3DLayer renders Polyline geometries using a flat 2D line with a LineSymbol3D in a 3D SceneView.",
          properties: {
            cap: {
              type: "string",
              description: "Shape of the beginning and the end of each line geometry.",
              "enum": ["butt", "round", "square"],
              "default": "butt"
            },
            enable: {
              type: "boolean"
            },
            join: {
              type: "string",
              description: "Shape of the intersection of two line segments.",
              "enum": ["bevel", "miter", "round"],
              "default": "miter"
            },
            material: {
              $ref: "#/definitions/material_schema.json"
            },
            size: {
              type: "number",
              description: "Line width in points, positive only",
              minimum: 0
            },
            type: {
              type: "string",
              description: "Specifies the type of symbol used.",
              "enum": ["Line"]
            }
          },
          required: ["size", "type"],
          additionalProperties: !1
        },
        "lineSymbol3D_schema.json": {
          title: "LineSymbol3D",
          type: "object",
          description: "LineSymbol3D is used to render features with Polyline geometry in a 3D SceneView.",
          properties: {
            styleOrigin: {
              $ref: "#/definitions/styleOrigin_schema.json"
            },
            symbolLayers: {
              type: "array",
              description: "A Collection of Symbol3DLayer objects used to visualize the graphic or feature.",
              items: {
                oneOf: [{
                  $ref: "#/definitions/lineSymbol3DLayer_schema.json"
                }, {
                  $ref: "#/definitions/pathSymbol3DLayer_schema.json"
                }]
              }
            },
            type: {
              type: "string",
              description: "Specifies the type of symbol used.",
              "enum": ["LineSymbol3D"]
            }
          },
          required: ["symbolLayers", "type"],
          additionalProperties: !1
        },
        "meshSymbol3D_schema.json": {
          title: "MeshSymbol3D",
          type: "object",
          description: "MeshSymbol3D is used to render 3D mesh features in a SceneLayer in a 3D SceneView.",
          properties: {
            styleOrigin: {
              $ref: "#/definitions/styleOrigin_schema.json"
            },
            symbolLayers: {
              type: "array",
              description: "A Collection of Symbol3DLayer objects used to visualize the graphic or feature.",
              items: {
                oneOf: [{
                  $ref: "#/definitions/fillSymbol3DLayer_schema.json"
                }]
              }
            },
            type: {
              type: "string",
              description: "Specifies the type of symbol used",
              "enum": ["MeshSymbol3D"]
            }
          },
          required: ["symbolLayers", "type"],
          additionalProperties: !1
        },
        "pointSymbol3D_schema.json": {
          title: "PointSymbol3D",
          type: "object",
          description: "PointSymbol3D is used to render features with Point geometry in a 3D SceneView.",
          properties: {
            callout: {
              $ref: "#/definitions/callout_schema.json"
            },
            styleOrigin: {
              $ref: "#/definitions/styleOrigin_schema.json"
            },
            symbolLayers: {
              type: "array",
              description: "A Collection of Symbol3DLayer objects used to visualize the graphic or feature.",
              items: {
                oneOf: [{
                  $ref: "#/definitions/iconSymbol3DLayer_schema.json"
                }, {
                  $ref: "#/definitions/objectSymbol3DLayer_schema.json"
                }]
              }
            },
            type: {
              type: "string",
              description: "Specifies the type of symbol used",
              "enum": ["PointSymbol3D"]
            },
            verticalOffset: {
              $ref: "#/definitions/verticalOffset_schema.json"
            }
          },
          required: ["symbolLayers", "type"],
          additionalProperties: !1
        },
        "styleSymbolReference_schema.json": {
          title: "StyleSymbolReference",
          type: "object",
          description: "The StyleSymbolReference is used to reference a symbol from a portal styleItem",
          properties: {
            name: {
              type: "string",
              description: "Identifies a symbol in the style by name."
            },
            styleName: {
              type: "string",
              description: "A registered web style name, such as `EsriThematicTreesStyle`"
            },
            styleUrl: {
              type: "string",
              description: "URL to a style definition."
            },
            type: {
              type: "string",
              description: "The type of the symbol",
              "enum": ["styleSymbolReference"]
            }
          },
          oneOf: [{
            required: ["type", "name", "styleUrl"]
          }, {
            required: ["type", "name", "styleName"]
          }],
          additionalProperties: !1
        },
        "colorInfo_visualVariable_schema.json": {
          title: "ColorInfo Visual Variable",
          type: "object",
          description: "The colorInfo visual variable defines how a continuous color ramp is applied to features based on the values of a numeric field attribute.",
          properties: {
            field: {
              type: "string",
              description: "Attribute field used for color rendering if no valueExpression is provided."
            },
            legendOptions: {
              type: "object",
              allOf: [{
                $ref: "#/definitions/visualVariableLegendOptions_schema.json"
              }, {
                properties: {
                  title: {},
                  showLegend: {}
                },
                additionalProperties: !1
              }]
            },
            normalizationField: {
              type: "string",
              description: "Attribute field used to normalize the data."
            },
            stops: {
              type: "array",
              description: "An array of stop objects.",
              items: {
                type: "object",
                $ref: "#/definitions/colorStop_schema.json"
              }
            },
            type: {
              type: "string",
              description: "Specifies the type of visual variable.",
              "enum": ["colorInfo"]
            },
            valueExpression: {
              type: "string",
              description: "An [Arcade expression](https://developers.arcgis.com/arcade/) that computes a value in lieu of a value provided by an attribute `field`."
            },
            valueExpressionTitle: {
              type: "string",
              description: "The title identifying and describing the associated [Arcade](https://developers.arcgis.com/arcade/) expression as defined in the `valueExpression` property."
            }
          },
          required: ["type"],
          additionalProperties: !1
        },
        "rotationInfo_visualVariable_schema.json": {
          title: "RotationInfo Visual Variable",
          type: "object",
          description: "The rotation visual variable defines how features rendered with marker symbols are rotated. The rotation value is determined by a value in a field or an Arcade expression calculating a value. Use either the `field` property or `valueExpression` when specifying rotation values.",
          properties: {
            axis: {
              type: "string",
              description: "Defines the rotation axis the visual variable should be applied to when rendering features with an ObjectSymbol3DLayer. [Detailed description](static/objectSymbolLayerOrientation.md).",
              "enum": ["heading", "roll", "tilt"],
              "default": "heading"
            },
            field: {
              type: "string",
              description: "Attribute field used for setting the rotation of a symbol if no `valueExpression` is provided."
            },
            legendOptions: {
              type: "object",
              allOf: [{
                $ref: "#/definitions/visualVariableLegendOptions_schema.json"
              }, {
                properties: {
                  title: {},
                  showLegend: {}
                },
                additionalProperties: !1
              }]
            },
            rotationType: {
              type: "string",
              description: "Defines the origin and direction of rotation depending on how the angle of rotation was measured. Possible values are `geographic` which rotates the symbol from the north in a clockwise direction and `arithmetic` which rotates the symbol from the east in a counter-clockwise direction.",
              "enum": ["arithmetic", "geographic"],
              "default": "geographic"
            },
            type: {
              type: "string",
              description: "A string value indicating the type of visual variable used for the renderer.",
              "enum": ["rotationInfo"]
            },
            valueExpression: {
              type: "string",
              description: "An [Arcade expression](https://developers.arcgis.com/arcade/) evaluating to a number."
            },
            valueExpressionTitle: {
              type: "string",
              description: "The title identifying and describing the associated [Arcade expression] (https://developers.arcgis.com/arcade/) as defined in the `valueExpression` property."
            }
          },
          required: ["type"],
          additionalProperties: !1
        },
        "sizeInfo_visualVariable_schema.json": {
          title: "SizeInfo Visual Variable",
          type: "object",
          description: "The sizeInfo visual variable defines how size is applied to features based on the values of a numeric field attribute. The minimum and maximum values of the data should be indicated along with their respective size values. You must specify either `minSize` and `maxSize`, or `stops`, or `valueUnit` to construct the size ramp. All features with values falling in between the specified min and max data values (or stops) will be scaled proportionally between the provided min and max sizes.",
          properties: {
            axis: {
              type: "string",
              description: "Defines the axis the size visual variable should be applied to when rendering features with an ObjectSymbol3DLayer.",
              "enum": ["all", "depth", "height", "width", "widthAndDepth"],
              "default": "all"
            },
            field: {
              type: "string",
              description: "Attribute field used for size rendering if no valueExpression is provided."
            },
            legendOptions: {
              type: "object",
              allOf: [{
                $ref: "#/definitions/visualVariableLegendOptions_schema.json"
              }, {
                properties: {
                  customValues: {},
                  title: {},
                  showLegend: {}
                },
                additionalProperties: !1
              }]
            },
            maxDataValue: {
              type: "number",
              description: "The maximum data value."
            },
            maxSize: {
              type: "number",
              description: "Specifies the maximum size to be applied to the symbol. This is required if valueUnit is set to `unknown`."
            },
            minDataValue: {
              type: "number",
              description: "The minimum data value."
            },
            minSize: {
              type: "number",
              description: "Specifies the minimum size to be applied to the symbol. This is required if valueUnit is set to `unknown`."
            },
            normalizationField: {
              type: "string",
              description: "Attribute field used to normalize the data."
            },
            stops: {
              type: "array",
              description: "An array of objects that defines the thematic size ramp in a sequence of data or expression stops. At least two stops are required. The stops must be listed in ascending order based on the value of the `value` property in each stop. This property is required if `minDataValue`, `maxDataValue`, `minSize`, and `maxSize` are not defined.",
              items: {
                type: "object",
                $ref: "#/definitions/sizeStop_schema.json"
              }
            },
            target: {
              type: "string",
              description: "Only used when sizeInfo is used for polygon outlines.",
              "enum": ["outline"]
            },
            type: {
              type: "string",
              description: "Specifies the type of visual variable.",
              "enum": ["sizeInfo"]
            },
            useSymbolValue: {
              type: "boolean",
              description: "When setting a size visual variable on a renderer using an ObjectSymbol3DLayer, this property indicates whether to apply the value defined by the height, width, or depth properties to the corresponding axis of this visual variable instead of proportionally scaling this axis' value after other axes."
            },
            valueExpression: {
              type: "string",
              description: "An [Arcade expression](https://developers.arcgis.com/arcade/) evaluating to a number."
            },
            valueExpressionTitle: {
              type: "string",
              description: "The title identifying and describing the associated [Arcade](https://developers.arcgis.com/arcade/) expression as defined in the `valueExpression` property."
            },
            valueRepresentation: {
              type: "string",
              description: "Specifies how to apply the data value when mapping real-world sizes. See table below for supported values.",
              "enum": ["area", "diameter", "distance", "radius", "width"]
            },
            valueUnit: {
              type: "string",
              description: "A string value indicating the unit of measurement. Defaults to `meters` if not set.",
              "enum": ["centimeters", "decimal-degrees", "decimeters", "feet", "inches", "kilometers", "meters", "miles", "millimeters", "nautical-miles", "unknown", "yards"],
              "default": "meters"
            }
          },
          required: ["type"],
          additionalProperties: !1
        },
        "transparencyInfo_visualVariable_schema.json": {
          title: "TransparencyInfo Visual Variable",
          type: "object",
          description: "The transparencyInfo visual variable defines the transparency, or opacity, of each feature's symbol based on a numeric attribute field value.",
          properties: {
            field: {
              type: "string",
              description: "Attribute field used for setting the transparency of a feature if no `valueExpression` is provided."
            },
            legendOptions: {
              type: "object",
              allOf: [{
                $ref: "#/definitions/visualVariableLegendOptions_schema.json"
              }, {
                properties: {
                  title: {},
                  showLegend: {}
                },
                additionalProperties: !1
              }]
            },
            normalizationField: {
              type: "string",
              description: "Attribute field used to normalize the data."
            },
            stops: {
              type: "array",
              description: "An array of transparencyStop objects.",
              items: {
                type: "object",
                $ref: "#/definitions/transparencyStop_schema.json"
              }
            },
            type: {
              type: "string",
              description: "Specifies the type of visual variable.",
              "enum": ["transparencyInfo"]
            },
            valueExpression: {
              type: "string",
              description: "An [Arcade expression](https://developers.arcgis.com/arcade/) evaluating to a number."
            },
            valueExpressionTitle: {
              type: "string",
              description: "The title identifying and describing the associated [Arcade](https://developers.arcgis.com/arcade/) expression as defined in the `valueExpression` property."
            }
          },
          required: ["type"],
          additionalProperties: !1
        },
        "colorClassBreakInfo_schema.json": {
          title: "colorClassBreakInfo",
          type: "object",
          description: "The classBreaksInfo object provides information about the class breaks associated with the renderer.",
          properties: {
            classMaxValue: {
              type: "number",
              description: "A numeric value used to specify the maximum value for a break."
            },
            classMinValue: {
              type: "number",
              description: "A numeric value used to specify discontinuous class breaks. If this value is null or is missing, the map server will calculate the minimum value based on the preceding class' maximum value."
            },
            color: {
              $ref: "#/definitions/color_schema.json"
            },
            description: {
              type: "string",
              description: "String value used to describe the class."
            },
            label: {
              type: "string",
              description: "String value used to label the class."
            }
          },
          required: ["classMaxValue", "classMinValue", "color"],
          additionalProperties: !1
        },
        "colorModulationInfo_schema.json": {
          title: "colorModulationInfo",
          type: "object",
          description: "Indicates whether modulation should be used to render the point.",
          properties: {
            field: {
              type: "string",
              description: "the attribute to use as a source for the modulation amplitude"
            },
            maxValue: {
              type: "number",
              description: "maximum value to compute modulation linear mapping"
            },
            minValue: {
              type: "number",
              description: "minimum value to compute modulation linear mapping"
            }
          },
          required: ["field", "maxValue", "minValue"],
          additionalProperties: !1
        },
        "pointSizeAlgorithm_schema.json": {
          title: "PointCloud Size Algorithm",
          type: "object",
          description: "Size algorithms for point cloud performance.",
          oneOf: [{
            $ref: "#/definitions/pointCloudFixedSizeAlgorithm_schema.json"
          }, {
            $ref: "#/definitions/pointCloudSplatAlgorithm_schema.json"
          }]
        },
        "colorStop_schema.json": {
          title: "colorStop",
          description: "A colorStop object describes the renderer's color ramp with more specificity than just colors.",
          properties: {
            color: {
              description: "A CSS color string or an array of rbga values. The color to place at the stop indicated by either a ratio or value.",
              $ref: "#/definitions/color_schema.json"
            },
            label: {
              type: "string",
              description: "Value if a label is needed on the legend for a stop."
            },
            value: {
              type: "number",
              description: "The pixel intensity value. Describes the pixel intensity value that the color should be associated with. Just like in colorInfo, using value will ignore `maxPixelIntensity` and `minPixelIntensity` properties. It will actually set those properties to maximum and minimum values you set in the colorStops array. The hard values are converted to ratios to create the color gradient that is used in the heatmap calculations. Setting `minPixelIntensity` or `maxPixelIntensity`, after setting colorStops with values, removes the hard link between the color ramp and the pixel intensity values that were used to create it."
            }
          },
          required: ["color"]
        },
        "colorUniqueValueInfo_schema.json": {
          title: "colorUniqueValueInfo",
          type: "object",
          description: "The colorUniqueValueInfo object matches a unique value with a specific color.",
          properties: {
            color: {
              $ref: "#/definitions/color_schema.json"
            },
            description: {
              type: "string",
              description: "String value used to describe the class."
            },
            label: {
              type: "string",
              description: "String value used to label the class."
            },
            values: {
              type: "array",
              description: "List of string values used to classify points.",
              items: {
                oneOf: [{
                  type: "string"
                }]
              }
            }
          },
          required: ["color", "values"],
          additionalProperties: !1
        },
        "colormapInfo_schema.json": {
          title: "ColormapInfo",
          type: "object",
          description: "The colormap information used when rendering raster data.",
          properties: {
            color: {
              description: "The pixel color.",
              $ref: "#/definitions/color_schema.json"
            },
            label: {
              type: "string",
              description: "The label used for the pixel value."
            },
            value: {
              type: "number",
              description: "The raster pixel value."
            }
          },
          required: ["color", "value"],
          additionalProperties: !1
        },
        "sketchEdges_schema.json": {
          title: "Sketch Edges",
          type: "object",
          description: "The sketch edge rendering configuration of a symbol layer. Edges of type `sketch` are rendered with a hand-drawn look in mind.",
          properties: {
            color: {
              $ref: "#/definitions/color_schema.json"
            },
            extensionLength: {
              type: "number",
              description: "A size in points by which to extend edges beyond their original end points."
            },
            size: {
              type: "number",
              description: "Edge size in points, positive only",
              minimum: 0
            },
            transparency: {
              type: "integer",
              description: "The value has to lie between `100` (full transparency) and `0` (full opacity).",
              minimum: 0,
              maximum: 100
            },
            type: {
              type: "string",
              description: "The type of edge visualization.",
              "enum": ["sketch"]
            }
          },
          required: ["color", "type"],
          additionalProperties: !1
        },
        "solidEdges_schema.json": {
          title: "Solid Edges",
          type: "object",
          description: "The solid edge rendering configuration of a symbol layer. Edges of type `solid` are rendered in a single color, unaffected by scene lighting.",
          properties: {
            color: {
              $ref: "#/definitions/color_schema.json"
            },
            extensionLength: {
              type: "number",
              description: "A size in points by which to extend edges beyond their original end points."
            },
            size: {
              type: "number",
              description: "Edge size in points, positive only",
              minimum: 0
            },
            transparency: {
              type: "integer",
              description: "The value has to lie between `100` (full transparency) and `0` (full opacity).",
              minimum: 0,
              maximum: 100
            },
            type: {
              type: "string",
              description: "The type of edge visualization.",
              "enum": ["solid"]
            }
          },
          required: ["color", "type"],
          additionalProperties: !1
        },
        "colorRamp_algorithmic_schema.json": {
          title: "Color Ramp Algorithmic",
          description: "A colorRamp object is used to specify a range of colors that are applied to a group of symbols.",
          properties: {
            algorithm: {
              type: "string",
              description: "Algorithm used for calculating the ramp.",
              "enum": ["esriCIELabAlgorithm", "esriHSVAlgorithm", "esriLabLChAlgorithm"]
            },
            fromColor: {
              description: "Array representing the initial color to start the ramp from.",
              $ref: "#/definitions/color_schema.json"
            },
            toColor: {
              description: "Array representing the final color to end the ramp with.",
              $ref: "#/definitions/color_schema.json"
            },
            type: {
              type: "string",
              description: "Value indicating the type of colorRamp.",
              "enum": ["algorithmic"]
            }
          },
          additionalProperties: !1
        },
        "colorRamp_multipart_schema.json": {
          title: "Color Ramp Multipart",
          description: "A colorRamp object is used to specify a range of colors that are applied to a group of symbols.",
          properties: {
            colorRamps: {
              type: "array",
              description: "A multipart color ramp is defined by a list of constituent color ramps.",
              items: {
                type: "object",
                $ref: "#/definitions/colorRamp_algorithmic_schema.json"
              }
            },
            type: {
              type: "string",
              description: "Value indicating the type of colorRamp.",
              "enum": ["multipart"]
            }
          },
          additionalProperties: !1
        },
        "classBreakInfo_authoringInfo_schema.json": {
          title: "AuthoringInfo classBreakInfo",
          type: "object",
          description: "The classBreaksInfo object provides information about the class breaks associated with the Relationship renderer.",
          properties: {
            maxValue: {
              type: "number",
              description: "A numeric value used to specify the maximum value for a break."
            },
            minValue: {
              type: "number",
              description: "A numeric value used to specify the minimum value for a break."
            }
          },
          additionalProperties: !1
        },
        "materialColorMixMode_schema.json": {
          title: "Material",
          type: "object",
          description: "The material used to shade the geometry, including colorMixMode options.",
          properties: {
            color: {
              $ref: "#/definitions/color_schema.json"
            },
            colorMixMode: {
              type: "string",
              description: "Controls how symbolLayer or visualVariable color is applied onto the underlying geometry color/texture. This property only applies to FillSymbol3DLayer within MeshSymbol3D.<br><ul><li>`tint`: the feature's appearance (in terms of color) should be altered to match the symbol / visual variable color.</li><li>`replace`: the feature's color is replaced with the symbol / visual variable color.</li><li>`multiply`: the feature's color is multiplied with the symbol color.</li></ul>",
              "enum": ["multiply", "replace", "tint"]
            },
            transparency: {
              type: "integer",
              description: "A value between `100` (full transparency) and `0` (full opacity). Ignored if no color is specified.",
              minimum: 0,
              maximum: 100
            }
          },
          additionalProperties: !1
        },
        "outline_schema.json": {
          title: "Outline",
          type: "object",
          description: "The outline of the symbol layer.",
          properties: {
            color: {
              $ref: "#/definitions/color_schema.json"
            },
            size: {
              type: "number",
              description: "Outline size in points, positive only",
              minimum: 0
            },
            transparency: {
              type: "integer",
              description: "The value has to lie between `100` (full transparency) and `0` (full opacity).",
              minimum: 0,
              maximum: 100
            }
          },
          required: ["color", "size"],
          additionalProperties: !1
        },
        "polygonPattern_schema.json": {
          title: "Pattern",
          type: "object",
          description: "The pattern used to render the fill of the polygon (only applies to PolygonSymbol3D).",
          properties: {
            style: {
              type: "string",
              description: "String value representing predefined styles that can be set as polygon fills.",
              "enum": ["backward-diagonal", "cross", "diagonal-cross", "forward-diagonal", "horizontal", "none", "solid", "vertical"]
            },
            type: {
              type: "string",
              description: "The type of pattern applied to the polygon fill.",
              "enum": ["style"]
            }
          },
          required: ["style", "type"],
          additionalProperties: !1
        },
        "iconSymbol3DLayer_resource_schema.json": {
          title: "IconSymbol3DLayer Resource",
          type: "object",
          description: "The shape (primitive) or image URL (href) used to visualize the features.",
          properties: {
            dataURI: {
              type: "string",
              description: "an image encoded as base64 string, starting with `data:image/`",
              pattern: "^data:image/(.|\\n|\\r)+$"
            },
            href: {
              description: "URL to the returned image.",
              oneOf: [{
                type: "string",
                description: "An absolute URL",
                pattern: "^https?://.+$"
              }, {
                type: "string",
                description: "A relative path starting with ./",
                pattern: "^\\./.+$"
              }]
            },
            primitive: {
              type: "string",
              description: "Specifies the type of symbol used.",
              "enum": ["circle", "cross", "kite", "square", "triangle", "x"]
            }
          },
          oneOf: [{
            required: ["primitive"]
          }, {
            required: ["href"]
          }, {
            required: ["dataURI"]
          }],
          additionalProperties: !1
        },
        "objectSymbol3DLayer_resource_schema.json": {
          title: "ObjectSymbol3DLayer Resource",
          type: "object",
          description: "The primitive shape (primitive) or external 3D model (href) used to visualize the points.",
          properties: {
            href: {
              oneOf: [{
                type: "string",
                description: "An absolute URL",
                pattern: "^https?://.+$"
              }, {
                type: "string",
                description: "A relative path starting with ./",
                pattern: "^\\./.+$"
              }]
            },
            primitive: {
              type: "string",
              "enum": ["cone", "cube", "cylinder", "diamond", "invertedCone", "sphere", "tetrahedron"]
            }
          },
          oneOf: [{
            required: ["primitive"]
          }, {
            required: ["href"]
          }],
          additionalProperties: !1
        },
        "pathSymbol3DLayer_schema.json": {
          title: "PathSymbol3DLayer",
          type: "object",
          description: "PathSymbol3DLayer renders polyline geometries by extruding a 2D profile along the line, resulting in visualizations like tubes, walls, etc.",
          properties: {
            anchor: {
              type: "string",
              description: "The position of the extrusion profile with respect to the polyline geometry.",
              "enum": ["bottom", "center", "top"],
              "default": "center"
            },
            cap: {
              type: "string",
              description: "Shape of the beginning and the end of each line geometry.",
              "enum": ["butt", "none", "round", "square"],
              "default": "butt"
            },
            castShadows: {
              type: "boolean",
              description: "Boolean to control the shadow casting behaviour of the rendered geometries.",
              "default": !0
            },
            enable: {
              type: "boolean"
            },
            height: {
              type: "number",
              description: "Path height in meters. If unspecified, it is equal to `width`.",
              minimum: 0
            },
            join: {
              type: "string",
              description: "Shape of the intersection of two line segments.",
              "enum": ["bevel", "miter", "round"],
              "default": "miter"
            },
            material: {
              $ref: "#/definitions/material_schema.json"
            },
            profile: {
              type: "string",
              description: "The shape which is extruded along the line.",
              "enum": ["circle", "quad"],
              "default": "circle"
            },
            profileRotation: {
              type: "string",
              description: "Specifies the axes about which the profile may be rotated at the joins. Constraining the rotation axes leads to a fixed orientation of the profile for the specified directions.",
              "enum": ["all", "heading"],
              "default": "all"
            },
            size: {
              type: "number",
              description: "Path size (diameter) in meters. Ignored if either `width` or `height` are present.",
              minimum: 0
            },
            type: {
              type: "string",
              description: "Specifies the type of symbol used.",
              "enum": ["Path"]
            },
            width: {
              type: "number",
              description: "Path width in meters. If unspecified, it is equal to `height`.",
              minimum: 0
            }
          },
          anyOf: [{
            required: ["type", "size"]
          }, {
            required: ["type", "width"]
          }, {
            required: ["type", "height"]
          }],
          additionalProperties: !1
        },
        "visualVariableLegendOptions_schema.json": {
          title: "Visual Variable Legend Options",
          type: "object",
          description: "Options available for the legend for visual variables.",
          properties: {
            customValues: {
              type: "array",
              items: {
                type: "number"
              }
            },
            showLegend: {
              type: "boolean",
              description: "Indicates whether to show the color/size/opacity ramp in the legend."
            },
            title: {
              type: "string",
              description: "The title of the legend."
            }
          }
        },
        "sizeStop_schema.json": {
          title: "sizeStop",
          description: "A `sizeStop` object describes the size of the symbol at various values of the expression.",
          properties: {
            label: {
              type: "string",
              description: "Value if a label is needed on the legend for a stop."
            },
            size: {
              type: "number",
              description: "Specifies the marker size to use for the specified value."
            },
            value: {
              type: "number",
              description: "The value to be mapped to a size."
            }
          },
          required: ["size", "value"],
          additionalProperties: !1
        },
        "transparencyStop_schema.json": {
          title: "transparencyStop",
          description: "The transparencyStop object defines the thematic opacity ramp in a sequence of stops. At least two stops are required. The stops must be listed in ascending order based on the value of the `value` property in each stop.",
          properties: {
            label: {
              type: "string",
              description: "A string value used to label the stop in the legend."
            },
            transparency: {
              type: "integer",
              description: "A numeric transparancy value for a stop ranging from 0-100, where 0 is opaque and 100 is 100% transparent.",
              minimum: 0,
              maximum: 100
            },
            value: {
              type: "number",
              description: "The pixel intensity value. Describes the pixel intensity value that the color should be associated with."
            }
          },
          required: ["transparency", "value"],
          additionalProperties: !1
        },
        "pointCloudFixedSizeAlgorithm_schema.json": {
          title: "PointCloud FixedSize Algorithm",
          type: "object",
          description: "Render points with fixed real world or screen space size.",
          properties: {
            size: {
              type: "number",
              description: "Symbol size in real world units or display unit"
            },
            type: {
              type: "string",
              "enum": ["pointCloudFixedSizeAlgorithm"]
            },
            useRealWorldSymbolSizes: {
              type: "boolean",
              description: " If true symbol size is in meters, display unit (pt) otherwise"
            }
          },
          required: ["size", "type"],
          additionalProperties: !1
        },
        "pointCloudSplatAlgorithm_schema.json": {
          title: "PointCloud Splat Algorithm",
          type: "object",
          description: "Render points using sizes depending on point density.",
          properties: {
            scaleFactor: {
              type: "number",
              description: "Scale factor to applied to the computed point size (in real world)"
            },
            type: {
              type: "string",
              "enum": ["pointCloudSplatAlgorithm"]
            }
          },
          required: ["scaleFactor", "type"],
          additionalProperties: !1
        }
      };
      /***/
    },

    /***/
    "vVTq":
    /*!*************************************************************************!*\
      !*** ./node_modules/@arcgis/core/portal/schemas/pointCloudLayerItem.js ***!
      \*************************************************************************/

    /*! exports provided: json */

    /***/
    function vVTq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "json", function () {
        return i;
      });
      /* harmony import */


      var _definitions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./definitions.js */
      "tlKZ");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var i = {
        title: "PointCloud Layer config on layer item",
        type: "object",
        properties: {
          layers: {
            type: "array",
            items: {
              properties: {
                disablePopup: {
                  type: "boolean",
                  description: "disablePopups allows a client to ignore popups defined by the service item."
                },
                id: {
                  type: "integer",
                  description: "ID of the service layer."
                },
                layerDefinition: {
                  type: "object",
                  description: "A layerDefinition object defining the attribute schema and drawing information for the layer.",
                  allOf: [{
                    $ref: "#/definitions/layerDefinition_schema.json"
                  }, {
                    properties: {
                      drawingInfo: {
                        allOf: [{
                          $ref: "#/definitions/drawingInfo_schema.json"
                        }, {
                          properties: {
                            renderer: {},
                            transparency: {}
                          },
                          additionalProperties: !1
                        }]
                      },
                      elevationInfo: {},
                      filters: {},
                      minScale: {},
                      maxScale: {}
                    },
                    additionalProperties: !1
                  }]
                },
                listMode: {
                  type: "string",
                  description: "To show or hide the layer in the layer list",
                  "enum": ["hide", "show"]
                },
                popupInfo: {
                  type: "object",
                  description: "A popupInfo object defining the content of pop-up windows when you click a point.",
                  $ref: "#/definitions/popupInfo_schema.json"
                },
                showLegend: {
                  type: "boolean",
                  description: "Boolean value indicating whether to display the layer in the legend. Default value is `true`.",
                  "default": !0
                },
                visibility: {
                  type: "boolean",
                  description: "Boolean property determining whether the layer is initially visible",
                  "default": !0
                }
              },
              additionalProperties: !1
            }
          }
        },
        additionalProperties: !1,
        $schema: "http://json-schema.org/draft-07/schema",
        definitions: _definitions_js__WEBPACK_IMPORTED_MODULE_0__["schema_definitions"]
      };
      /***/
    }
  }]);
})();
//# sourceMappingURL=support-schemaValidator-js-es5.js.map