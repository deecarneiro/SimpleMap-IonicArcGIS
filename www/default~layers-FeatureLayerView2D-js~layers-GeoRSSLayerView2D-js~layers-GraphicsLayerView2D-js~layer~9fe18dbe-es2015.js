(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layers-FeatureLayerView2D-js~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~layer~9fe18dbe"],{

/***/ "/iQf":
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/CIMEffects.js ***!
  \*************************************************************/
/*! exports provided: SimpleGeometryCursor, clone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleGeometryCursor", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return e; });
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/lang.js */ "f/qv");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class r{constructor(t){this._geometry=t}next(){const t=this._geometry;return this._geometry=null,t}}function e(r){return Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(r)}


/***/ }),

/***/ "/vtc":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/CurveHelper.js ***!
  \**************************************************************/
/*! exports provided: CurveHelper, PIXEL_TOLERANCE, PathHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurveHelper", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PIXEL_TOLERANCE", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathHelper", function() { return e; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const t=.03;class e{constructor(){this._path=[]}path(){return this._path}addPath(t,e){e||t.reverse(),Array.prototype.push.apply(this._path,t),e||t.reverse()}static mergePath(t,e){e&&Array.prototype.push.apply(t,e)}startPath(t){this._path.push(t)}lineTo(t){this._path.push(t)}close(){const t=this._path;t.length>1&&(t[0][0]===t[t.length-1][0]&&t[0][1]===t[t.length-1][1]||t.push([t[0][0],t[0][1]]))}}class s{constructor(t=0,e=!1){}normalize(t){const e=Math.sqrt(t[0]*t[0]+t[1]*t[1]);t[0]/=e,t[1]/=e}calculateLength(t,e){const s=e[0]-t[0],n=e[1]-t[1];return Math.sqrt(s*s+n*n)}calculateSegLength(t,e){return this.calculateLength(t[e],t[e+1])}calculatePathLength(t){let e=0;const s=t?t.length:0;for(let n=0;n<s-1;++n)e+=this.calculateSegLength(t,n);return e}calculatePathArea(t){let e=0;const s=t?t.length:0;for(let n=0;n<s-1;++n)e+=(t[n+1][0]-t[n][0])*(t[n+1][1]+t[n][1]);return e/2}getCoord2D(t,e,s){return[t[0]+(e[0]-t[0])*s,t[1]+(e[1]-t[1])*s]}getSegCoord2D(t,e,s){return this.getCoord2D(t[e],t[e+1],s)}getAngle(t,e,s){const n=e[0]-t[0],r=e[1]-t[1];return Math.atan2(r,n)}getSegAngle(t,e,s){return this.getAngle(t[e],t[e+1],s)}getAngleCS(t,e,s){const n=e[0]-t[0],r=e[1]-t[1],h=Math.sqrt(n*n+r*r);return h>0?[n/h,r/h]:[1,0]}getSegAngleCS(t,e,s){return this.getAngleCS(t[e],t[e+1],s)}cut(t,e,s,n){return[s<=0?t[e]:this.getSegCoord2D(t,e,s),n>=1?t[e+1]:this.getSegCoord2D(t,e,n)]}addSegment(t,e,s){s&&t.push(e[0]),t.push(e[1])}getSubCurve(t,e,s){const n=[];return this.appendSubCurve(n,t,e,s)?n:null}appendSubCurve(t,e,s,n){const r=e?e.length-1:0;let h=0,l=!0,a=0;for(;a<r;){const r=this.calculateSegLength(e,a);if(0!==r){if(l){if(h+r>s){const o=(s-h)/r;let u=1,c=!1;h+r>=n&&(u=(n-h)/r,c=!0);const i=this.cut(e,a,o,u);if(i&&this.addSegment(t,i,l),c)break;l=!1}}else{if(h+r>n){const s=this.cut(e,a,0,(n-h)/r);s&&this.addSegment(t,s,l);break}this.addSegment(t,[e[a],e[a+1]],l)}h+=r,++a}else++a}return!0}getCIMPointAlong(t,e){const s=t?t.length-1:0;let n=0,r=-1;for(;r<s;){++r;const s=this.calculateSegLength(t,r);if(0!==s){if(n+s>e){const h=(e-n)/s;return this.getCoord2D(t[r],t[r+1],h)}n+=s}}return null}isEmpty(t,e){if(!t||t.length<=1)return!0;const s=t?t.length-1:0;let n=-1;for(;n<s;){if(++n,t[n+1][0]!==t[n][0]||t[n+1][1]!==t[n][1])return!1;if(e&&t[n+1][2]!==t[n][2])return!1}return!0}offset(t,e,s,n,r){if(!t||t.length<2)return null;let h=t.length;const l=t[0][0]===t[h-1][0]&&t[0][1]===t[h-1][1];if(l){if(t.length<3)return null;--h}const a=[];let o=l?t[h-1]:null,u=t[0];for(let r=0;r<h;r++){const c=r===h-1?l?t[0]:null:t[r+1];if(o)if(c){const t=[c[0]-u[0],c[1]-u[1]];this.normalize(t);const r=[u[0]-o[0],u[1]-o[1]];this.normalize(r);const h=r[0]*t[1]-r[1]*t[0],l=r[0]*t[0]+r[1]*t[1];if(h>=0==e<=0){const s=[t[0]-r[0],t[1]-r[1]];this.normalize(s);const n=Math.sqrt((1+l)/2),h=-Math.abs(e)/n;a.push([u[0]-s[0]*h,u[1]-s[1]*h])}else switch(s){case"Mitered":{const s=Math.sqrt((1+l)/2);if(s>0&&1/s<n){const n=[t[0]-r[0],t[1]-r[1]];this.normalize(n);const h=Math.abs(e)/s;a.push([u[0]-n[0]*h,u[1]-n[1]*h]);break}}case"Bevelled":a.push([u[0]+r[1]*e,u[1]-r[0]*e]),a.push([u[0]+t[1]*e,u[1]-t[0]*e]);break;case"Rounded":{a.push([u[0]+r[1]*e,u[1]-r[0]*e]);const s=5,n=1/s;let h=n;for(let l=1;l<s;l++,h+=n){const s=[r[1]*(1-h)+t[1]*h,-r[0]*(1-h)-t[0]*h];this.normalize(s),a.push([u[0]+s[0]*e,u[1]+s[1]*e])}a.push([u[0]+t[1]*e,u[1]-t[0]*e]);break}case"Square":default:if(h<0)a.push([u[0]+(r[1]+r[0])*e,u[1]+(r[1]-r[0])*e]),a.push([u[0]+(t[1]-t[0])*e,u[1]-(t[0]+t[1])*e]);else{const s=Math.sqrt((1+Math.abs(l))/2),n=[t[0]-r[0],t[1]-r[1]];this.normalize(n);const h=e/s;a.push([u[0]-n[0]*h,u[1]-n[1]*h])}}}else{const t=[u[0]-o[0],u[1]-o[1]];this.normalize(t),a.push([u[0]+t[1]*e,u[1]-t[0]*e])}else{const t=[c[0]-u[0],c[1]-u[1]];this.normalize(t),a.push([u[0]+t[1]*e,u[1]-t[0]*e])}o=u,u=c}return l&&a.push([a[0][0],a[0][1]]),a}}


/***/ }),

/***/ "01wM":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/placements/PlacementAtExtremities.js ***!
  \************************************************************************************/
/*! exports provided: PlacementAtExtremities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacementAtExtremities", function() { return i; });
/* harmony import */ var _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CIMCursor.js */ "tqcG");
/* harmony import */ var _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CurveHelper.js */ "/vtc");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class i{static local(){return null===i.instance&&(i.instance=new i),i.instance}execute(e,t,s){return new n(e,t,s)}}i.instance=null;class n extends _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["PathTransformationCursor"]{constructor(e,t,i){super(e,!1,!0),this._curveHelper=new _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["CurveHelper"],this._angleToLine=void 0===t.angleToLine||t.angleToLine,this._offset=void 0!==t.offset?t.offset*i:0,this._type=t.extremityPlacement,this._position=void 0!==t.offsetAlongLine?t.offsetAlongLine*i:0,this._beginProcessed=!1}processPath(e){let t;switch(this._type){case"Both":default:this._beginProcessed?(t=this._atExtremities(e,this._position,!1),this._beginProcessed=!1,this.iteratePath=!1):(t=this._atExtremities(e,this._position,!0),this._beginProcessed=!0,this.iteratePath=!0);break;case"JustBegin":t=this._atExtremities(e,this._position,!0);break;case"JustEnd":t=this._atExtremities(e,this._position,!1);break;case"None":}return t}_atExtremities(e,s,i){const n=e.length;if(n<2)return null;const r=i?1:n-2,o=i?n:-1,a=i?1:-1;let l,h=0,c=i?e[0]:e[n-1];for(let i=r;i!==o;i+=a){l=c,c=e[i];const n=this._curveHelper.calculateLength(l,c);if(h+n>s){const e=(s-h)/n,[i,r]=this._curveHelper.getAngleCS(l,c,e),o=Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["getCoord2D"])(l,c,e);return this.internalPlacement.setTranslate(o[0]-this._offset*r,o[1]+this._offset*i),this._angleToLine&&this.internalPlacement.setRotateCS(-i,-r),this.internalPlacement}h+=n}return null}}


/***/ }),

/***/ "5x/F":
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/LevelDependentSizeVariable.js ***!
  \*********************************************************************************/
/*! exports provided: LevelDependentSizeVariable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelDependentSizeVariable", function() { return n; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/lang.js */ "f/qv");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/writer.js */ "Cduq");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _renderers_visualVariables_support_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../renderers/visualVariables/support/sizeVariableUtils.js */ "hvLT");
/* harmony import */ var _renderers_visualVariables_SizeVariable_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../renderers/visualVariables/SizeVariable.js */ "w/y1");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var l;let n=l=class extends _renderers_visualVariables_SizeVariable_js__WEBPACK_IMPORTED_MODULE_12__["default"]{writeLevels(e,s,i){for(const i in e){const e=this.levels[i];return void(s.stops=e)}}clone(){return new l({axis:this.axis,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,maxDataValue:this.maxDataValue,maxSize:Object(_renderers_visualVariables_support_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_11__["isSizeVariable"])(this.maxSize)?this.maxSize.clone():this.maxSize,minDataValue:this.minDataValue,minSize:Object(_renderers_visualVariables_support_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_11__["isSizeVariable"])(this.minSize)?this.minSize.clone():this.minSize,normalizationField:this.normalizationField,stops:this.stops&&this.stops.map((e=>e.clone())),target:this.target,useSymbolValue:this.useSymbolValue,valueRepresentation:this.valueRepresentation,valueUnit:this.valueUnit,legendOptions:this.legendOptions&&this.legendOptions.clone(),levels:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.levels)})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],n.prototype,"levels",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__["writer"])("levels")],n.prototype,"writeLevels",null),n=l=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.views.2d.engine.LevelDependentSizeVariable")],n);


/***/ }),

/***/ "6BGx":
/*!****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/placements/PlacementAlongLineSameSize.js ***!
  \****************************************************************************************/
/*! exports provided: PlacementAlongLineSameSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacementAlongLineSameSize", function() { return n; });
/* harmony import */ var _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CIMCursor.js */ "tqcG");
/* harmony import */ var _GeometryWalker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GeometryWalker.js */ "DAsI");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums.js */ "qzns");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class n{static local(){return null===n.instance&&(n.instance=new n),n.instance}execute(t,e,s){return new a(t,e,s)}}n.instance=null;class a extends _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["PathTransformationCursor"]{constructor(t,i,n){super(t,!0,!0),this._grometryWalker=new _GeometryWalker_js__WEBPACK_IMPORTED_MODULE_1__["GeometryWalker"],this._grometryWalker.updateTolerance(n),this._angleToLine=void 0===i.angleToLine||i.angleToLine,this._offset=void 0!==i.offset?i.offset*n:0,this._originalEndings=i.endings,this._offsetAtEnd=void 0!==i.customEndingOffset?i.customEndingOffset*n:0,this._position=void 0!==i.offsetAlongLine?i.offsetAlongLine*n:0,this._pattern=new _GeometryWalker_js__WEBPACK_IMPORTED_MODULE_1__["DashPattern"],this._pattern.init(i.placementTemplate,!1),this._pattern.scale(n),this._endings=this._originalEndings}processPath(t){if(this._pattern.isEmpty())return null;let e;if(this.iteratePath)e=this._pattern.nextValue();else{this._originalEndings===_enums_js__WEBPACK_IMPORTED_MODULE_2__["PlacementEndings"].WithFullGap&&this.isClosed?this._endings=_enums_js__WEBPACK_IMPORTED_MODULE_2__["PlacementEndings"].WithMarkers:this._endings=this._originalEndings,this._pattern.extPtGap=0;let s,n=!0;switch(this._endings){case _enums_js__WEBPACK_IMPORTED_MODULE_2__["PlacementEndings"].NoConstraint:s=-this._position,s=this._adjustPosition(s),n=!1;break;case _enums_js__WEBPACK_IMPORTED_MODULE_2__["PlacementEndings"].WithHalfGap:default:s=-this._pattern.lastValue()/2;break;case _enums_js__WEBPACK_IMPORTED_MODULE_2__["PlacementEndings"].WithFullGap:s=-this._pattern.lastValue(),this._pattern.extPtGap=this._pattern.lastValue();break;case _enums_js__WEBPACK_IMPORTED_MODULE_2__["PlacementEndings"].WithMarkers:s=0;break;case _enums_js__WEBPACK_IMPORTED_MODULE_2__["PlacementEndings"].Custom:s=-this._position,s=this._adjustPosition(s),this._pattern.extPtGap=.5*this._offsetAtEnd}if(!this._grometryWalker.init(t,this._pattern,n))return null;this._pattern.reset();let a=0;for(;s>a;)s-=a,a=this._pattern.nextValue();a-=s,e=a,this.iteratePath=!0}const s={};return this._grometryWalker.nextPointAndAngle(e,s)?this._endings===_enums_js__WEBPACK_IMPORTED_MODULE_2__["PlacementEndings"].WithFullGap&&this._grometryWalker.isPathEnd()?(this.iteratePath=!1,null):this._endings===_enums_js__WEBPACK_IMPORTED_MODULE_2__["PlacementEndings"].WithMarkers&&this._grometryWalker.isPathEnd()&&(this.iteratePath=!1,this.isClosed)?null:(this.internalPlacement.setTranslate(s.pt[0]+this._offset*s.sa,s.pt[1]-this._offset*s.ca),this._angleToLine&&this.internalPlacement.setRotateCS(s.ca,s.sa),this.internalPlacement):(this.iteratePath=!1,null)}_adjustPosition(t){let e=t/this._pattern.length();return e-=Math.floor(e),e*this._pattern.length()}}


/***/ }),

/***/ "8Fik":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/effects/EffectWave.js ***!
  \*********************************************************************/
/*! exports provided: EffectWave */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectWave", function() { return n; });
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../geometry/support/jsonUtils.js */ "qatw");
/* harmony import */ var _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CurveHelper.js */ "/vtc");
/* harmony import */ var _GeometryWalker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../GeometryWalker.js */ "DAsI");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class n{static local(){return null===n.instance&&(n.instance=new n),n.instance}execute(t,e,i){return new r(t,e,i)}}n.instance=null;class r{constructor(t,e,i){this._inputGeometries=t,this._height=(void 0!==e.amplitude?e.amplitude:2)*i,this._period=(void 0!==e.period?e.period:3)*i,this._style=e.waveform,this._height<=0&&(this._height=Math.abs(this._height)),this._period<=0&&(this._period=Math.abs(this._period)),this._pattern=new _GeometryWalker_js__WEBPACK_IMPORTED_MODULE_2__["DashPattern"],this._pattern.addValue(this._period),this._pattern.addValue(this._period),this._walker=new _GeometryWalker_js__WEBPACK_IMPORTED_MODULE_2__["GeometryWalker"],this._walker.updateTolerance(i)}next(){let i=this._inputGeometries.next();for(;i;){if(0===this._height||0===this._period)return i;if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isPolyline"])(i)){const t=this._processGeom(i.paths);if(t.length)return{paths:t}}if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isPolygon"])(i)){const t=this._processGeom(i.rings);if(t.length)return{rings:t}}i=this._inputGeometries.next()}return null}_processGeom(t){const e=[];for(const i of t)if(this._walker.init(i,this._pattern))switch(this._style){case"Sinus":default:e.push(this._constructCurve(i,!1));break;case"Square":e.push(this._constructSquare(i));break;case"Triangle":e.push(this._constructTriangle(i));break;case"Random":e.push(this._constructCurve(i,!0))}else e.push(i);return e}_constructCurve(t,e){const s=new _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["PathHelper"],h=this._walker.calculatePathLength(t);let n=Math.round(h/this._period);0===n&&(n=1);const r=16*n+1,a=h/n,o=this._period/16,l=1/r,_=2*Math.PI*h/a,c=2*Math.PI*Math.random(),p=2*Math.PI*Math.random(),u=2*Math.PI*Math.random(),d=.75-Math.random()/2,g=.75-Math.random()/2,w={};this._walker.curPointAndAngle(w),s.startPath(w.pt);let k=0;for(;;){if(!this._walker.nextPointAndAngle(o,w)){s.lineTo(t[t.length-1]);break}{const t=k;let i;if(k+=l,e){const e=this._height/2*(1+.3*Math.sin(d*_*t+c));i=e*Math.sin(_*t+p),i+=e*Math.sin(g*_*t+u),i/=2}else i=.5*this._height*Math.sin(.5*_*t);s.lineTo([w.pt[0]-i*w.sa,w.pt[1]+i*w.ca])}}return s.path()}_constructSquare(t){const e=new _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["PathHelper"],s=this._walker.calculatePathLength(t);let h=Math.round(s/this._period);0===h&&(h=1);let n=!0;for(;;){let t=!1;if(this._walker.curPositionIsValid()){const i={};this._walker.curPointAndAngle(i);const s={};if(this._walker.nextPointAndAngle(this._period,s)){const h={};this._walker.nextPointAndAngle(this._period,h)&&(n?(e.startPath(i.pt),n=!1):e.lineTo(i.pt),e.lineTo([i.pt[0]-this._height/2*i.sa,i.pt[1]+this._height/2*i.ca]),e.lineTo([s.pt[0]-this._height/2*s.sa,s.pt[1]+this._height/2*s.ca]),e.lineTo([s.pt[0]+this._height/2*s.sa,s.pt[1]-this._height/2*s.ca]),e.lineTo([h.pt[0]+this._height/2*h.sa,h.pt[1]-this._height/2*h.ca]),t=!0)}}if(!t){e.lineTo(this._walker.getPathEnd());break}}return e.path()}_constructTriangle(t){const e=new _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["PathHelper"],s=this._walker.calculatePathLength(t);let h=Math.round(s/this._period);0===h&&(h=1);let n=!0;for(;;){let t=!1;if(this._walker.curPositionIsValid()){const i={};this._walker.curPointAndAngle(i);const s={};if(this._walker.nextPointAndAngle(this._period/2,s)){const h={};this._walker.nextPointAndAngle(this._period,h)&&(this._walker.nextPosition(this._period/2)&&(n?(e.startPath(i.pt),n=!1):e.lineTo(i.pt),e.lineTo([s.pt[0]-this._height/2*s.sa,s.pt[1]+this._height/2*s.ca]),e.lineTo([h.pt[0]+this._height/2*h.sa,h.pt[1]-this._height/2*h.ca])),t=!0)}}if(!t){e.lineTo(this._walker.getPathEnd());break}}return e.path()}}


/***/ }),

/***/ "8YkW":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/effects/EffectDonut.js ***!
  \**********************************************************************/
/*! exports provided: EffectDonut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectDonut", function() { return h; });
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../geometry/support/jsonUtils.js */ "qatw");
/* harmony import */ var _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CurveHelper.js */ "/vtc");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class h{static local(){return null===h.instance&&(h.instance=new h),h.instance}execute(t,i,e){return new n(t,i,e)}}h.instance=null;class n{constructor(t,i,h){switch(this._inputGeometries=t,this._curveHelper=new _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["CurveHelper"],this._width=(void 0!==i.width?i.width:2)*h,i.method){case"Mitered":default:this._method="Mitered";break;case"Bevelled":this._method="Bevelled";break;case"Rounded":case"TrueBuffer":this._method="Rounded";break;case"Square":this._method="Square"}this._option=i.option,this._offsetFlattenError=_CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["PIXEL_TOLERANCE"]*h,this._option}next(){let e=this._inputGeometries.next();for(;e;){if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isExtent"])(e)&&this._width>0){if(Math.min(e.xmax-e.xmin,e.ymax-e.ymin)-2*this._width<0)return e;const t=[];return t.push([[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]),t.push([[e.xmin+this._width,e.ymin+this._width],[e.xmax-this._width,e.ymin+this._width],[e.xmax-this._width,e.ymax-this._width],[e.xmin+this._width,e.ymax-this._width],[e.xmin+this._width,e.ymin+this._width]]),{rings:t}}if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isPolygon"])(e)&&this._width>0){const t=[];for(const i of e.rings){const e=this._curveHelper.calculatePathLength(i),s=this._curveHelper.offset(i,this._width,this._method,4,this._offsetFlattenError);s&&(e<0&&s.reverse(),t.push(s))}if(t.length)return{rings:t}}e=this._inputGeometries.next()}return null}}


/***/ }),

/***/ "CUuX":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/placements/PlacementOnLine.js ***!
  \*****************************************************************************/
/*! exports provided: PlacementOnLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacementOnLine", function() { return s; });
/* harmony import */ var _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CIMCursor.js */ "tqcG");
/* harmony import */ var _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CurveHelper.js */ "/vtc");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class s{static local(){return null===s.instance&&(s.instance=new s),s.instance}execute(e,t,n){return new r(e,t,n)}}s.instance=null;class r extends _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["PathTransformationCursor"]{constructor(e,t,n){super(e,!0,!0),this._curveHelper=new _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["CurveHelper"],this._angleToLine=void 0===t.angleToLine||t.angleToLine,this._offset=void 0!==t.offset?t.offset*n:0,this._relativeTo=t.relativeTo,this._position=void 0!==t.startPointOffset?t.startPointOffset*n:0,this._epsilon=.001*n}processPath(e){const i=this._position;if("SegmentMidpoint"===this._relativeTo){for(this.iteratePath||(this._segmentCount=e.length,this._curSegment=1,this.iteratePath=!0);this._curSegment<this._segmentCount;){const n=this._curSegment;this._curSegment++;const i=e[n-1],s=e[n],r=this._curveHelper.calculateLength(i,s);if(r<this._epsilon)continue;const l=.5+this._position/r,[a,o]=this._curveHelper.getAngleCS(i,s,l),h=Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["getCoord2D"])(i,s,l);return this.internalPlacement.setTranslate(h[0]-this._offset*o,h[1]+this._offset*a),this._angleToLine&&this.internalPlacement.setRotateCS(a,o),this.internalPlacement}return this.iteratePath=!1,null}"LineEnd"===this._relativeTo&&Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["reversePath"])(e);const s=this.onLine(e,i);return"LineEnd"===this._relativeTo&&Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["reversePath"])(e),s}onLine(e,n){let i,s=!1;switch(this._relativeTo){case"LineMiddle":default:i=this._curveHelper.calculatePathLength(e)/2+n;break;case"LineBeginning":i=n;break;case"LineEnd":i=n,s=!0}const r=e.length;let l,a=0,o=e[0];for(let n=1;n<r;++n){l=o,o=e[n];const r=this._curveHelper.calculateLength(l,o);if(a+r>i){const e=(i-a)/r,[n,h]=this._curveHelper.getAngleCS(l,o,e),c=Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["getCoord2D"])(l,o,e),u=s?this._offset:-this._offset;return this.internalPlacement.setTranslate(c[0]-u*h,c[1]+u*n),this._angleToLine&&(s?this.internalPlacement.setRotateCS(-n,-h):this.internalPlacement.setRotateCS(n,h)),this.internalPlacement}a+=r}return null}}


/***/ }),

/***/ "DAsI":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/GeometryWalker.js ***!
  \*****************************************************************/
/*! exports provided: DashPattern, GeometryWalker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashPattern", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeometryWalker", function() { return h; });
/* harmony import */ var _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CIMCursor.js */ "tqcG");
/* harmony import */ var _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CurveHelper.js */ "/vtc");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class i{constructor(){this._values=[],this.extPtGap=0,this.ctrlPtGap=0,this._length=0,this._currentValue=0}isEmpty(){return 0===this._values.length}size(){return this._values.length}init(t,s,e=!0){if(this._setEmpty(),!t||0===t.length)return!1;for(let s=0;s<t.length;s++){let i=Math.abs(t[s]);e&&i<1e-7&&(i=1e-7),this._values.push(i),this._length+=i}return s&&1&t.length&&(this._length*=2),0!==this._length&&(this.ctrlPtGap=this.extPtGap=0,this._currentValue=-1,!0)}scale(t){const s=this._values?this._values.length:0;for(let e=0;e<s;++e)this._values[e]*=t;this._length*=t,this.extPtGap*=t,this.ctrlPtGap*=t}addValue(t){this._length+=t,this._values.push(t)}firstValue(){return this._values[0]}lastValue(){return this._values[this._values.length-1]}nextValue(){return this._currentValue++,this._currentValue===this._values.length&&(this._currentValue=0),this._values[this._currentValue]}reset(){this._currentValue=-1}length(){return this._length}_setEmpty(){this.extPtGap=this.ctrlPtGap=this._length=0,this._currentValue=-1,this._values.length=0}}class n{constructor(){this.reset()}reset(){this.segment=-1,this.segmentLength=0,this.abscissa=0,this.isPathEnd=!1,this.isPartEnd=!1}isValid(){return-1!==this.segment}copyTo(t){t.segment=this.segment,t.segmentLength=this.segmentLength,t.abscissa=this.abscissa,t.isPathEnd=this.isPathEnd,t.isPartEnd=this.isPartEnd}}class h extends _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["CurveHelper"]{constructor(t=0,s=!1){super(t,s),this._tolerance=_CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["PIXEL_TOLERANCE"],this._currentPosition=new n}updateTolerance(t){this._tolerance=_CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["PIXEL_TOLERANCE"]*t}init(t,s,e=!0){return e?(this._patternLength=s.length(),this._partExtPtGap=s.extPtGap,this._partCtrlPtGap=s.ctrlPtGap):(this._patternLength=0,this._partExtPtGap=0,this._partCtrlPtGap=0),this._currentPosition.reset(),this._partSegCount=0,this._path=t,this._seg=-1,this.setPosAtNextPart()}curPositionIsValid(){return this._currentPosition.isValid()}nextPosition(t,s=0){const e=new n;return!!this._nextPosition(t,e,null,s)&&(e.copyTo(this._currentPosition),!0)}curPointAndAngle(t){t.pt=this._getPoint(this._currentPosition);const[s,e]=this._getAngle(this._currentPosition);t.ca=s,t.sa=e}nextPointAndAngle(t,s,e=0){const i=new n;if(!this._nextPosition(t,i,null,e))return!1;i.copyTo(this._currentPosition),s.pt=this._getPoint(i);const[h,r]=this._getAngle(i);return s.ca=h,s.sa=r,!0}nextCurve(t){if(0===t)return null;const s=[],e=new n;return this._nextPosition(t,e,s,1)?(e.copyTo(this._currentPosition),s):null}isPathEnd(){return this._currentPosition.isPathEnd}getPathEnd(){if(-1===this._currentPosition.segment)throw new Error("missing segment");return this._path[this._currentPosition.segment+1]}_nextPosition(t,s,e,i){if(this._currentPosition.isPathEnd)return!1;let n=this._currentPosition.abscissa;for(this._currentPosition.segmentLength>0&&(n/=this._currentPosition.segmentLength),this._currentPosition.copyTo(s);s.abscissa+t*this._partLengthRatio>s.segmentLength+this._tolerance;){if(e){if(0===e.length)if(0===n){const t=this._path[s.segment];e.push([t[0],t[1]])}else e.push(this.getSegCoord2D(this._path,s.segment,n));const t=this._path[s.segment+1];e.push([t[0],t[1]])}if(n=0,t-=(s.segmentLength-s.abscissa)/this._partLengthRatio,this._partSegCount)s.segment=this.nextSegment(),s.segmentLength=this.calculateSegLength(this._path,s.segment),s.abscissa=0,this._partSegCount--;else{if(!this.setPosAtNextPart())return 0!==i&&(s.segmentLength=this.calculateSegLength(this._path,s.segment),s.isPartEnd=!0,1===i?(s.abscissa=s.segmentLength,s.isPathEnd=!0):s.abscissa=s.segmentLength+t,!0);this._currentPosition.copyTo(s)}}if(s.abscissa+=t*this._partLengthRatio,e){if(0===e.length)if(0===n){const t=this._path[s.segment];e.push([t[0],t[1]])}else e.push(this.getSegCoord2D(this._path,s.segment,n));const t=s.abscissa/s.segmentLength;if(1===t){const t=this._path[s.segment+1];e.push([t[0],t[1]])}else e.push(this.getSegCoord2D(this._path,s.segment,t))}return this._partSegCount||Math.abs(s.abscissa-s.segmentLength)<this._tolerance&&(s.isPathEnd=this._partIsLast,s.isPartEnd=!0),!0}_getPoint(t){if(-1===t.segment)throw new Error("missing segment");const s=t.segmentLength<=0?0:t.abscissa/t.segmentLength;return this.getSegCoord2D(this._path,t.segment,s)}_getAngle(t){if(-1===t.segment)throw new Error("missing segment");const s=t.segmentLength<=0?0:t.abscissa/t.segmentLength;return this.getSegAngleCS(this._path,t.segment,s)}setPosAtNextPart(){for(;this._partSegCount;)this.hasNextSegment()&&this.nextSegment(),this._partSegCount--;if(!this.hasNextSegment())return!1;for(this._partLength=0,this._partIsLast=!0,this._partSegCount=0;this.hasNextSegment();)if(this._partLength+=this.calculateSegLength(this._path,this.nextSegment()),this._partSegCount++,1===Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["getId"])(this._path[this.getEndPointIndex()])){this._partIsLast=!this.hasNextSegment();break}let s=this._partSegCount;for(;s;)this.previousSegment(),--s;this._currentPosition.segment=this.nextSegment(),this._currentPosition.segmentLength=this.calculateSegLength(this._path,this._currentPosition.segment),this._currentPosition.abscissa=0,this._currentPosition.isPathEnd=this._currentPosition.isPartEnd=!1,--this._partSegCount;const e=this.getStartPointIndex();this._ctrlPtBegin=1===Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["getId"])(this._path[e]);let i=e+this._partSegCount+1;if(i>=this._path.length&&(i=0),this._ctrlPtEnd=1===Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["getId"])(this._path[i]),this._patternLength>0){const t=this._ctrlPtBegin?this._partCtrlPtGap:this._partExtPtGap,s=this._ctrlPtEnd?this._partCtrlPtGap:this._partExtPtGap;let e=Math.round((this._partLength-(t+s))/this._patternLength);e<=0&&(e=t+s>0?0:1),this._partLengthRatio=this._partLength/(t+s+e*this._patternLength),this._partLengthRatio<.01&&(this._partLengthRatio=1)}else this._partLengthRatio=1;return!0}hasNextSegment(){return this._seg<this._path.length-2}previousSegment(){return--this._seg}nextSegment(){return++this._seg}getStartPointIndex(){return this._seg}getEndPointIndex(){return this._seg+1}}


/***/ }),

/***/ "Du6U":
/*!*******************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/Rect.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
/* harmony default export */ __webpack_exports__["default"] = (class{constructor(t=0,h=0,i=0,s=0){this.x=t,this.y=h,this.width=i,this.height=s}get isEmpty(){return this.width<=0||this.height<=0}union(t){this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.width=Math.max(this.width,t.width),this.height=Math.max(this.height,t.height)}});


/***/ }),

/***/ "E/5U":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/effects/EffectArrow.js ***!
  \**********************************************************************/
/*! exports provided: EffectArrow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectArrow", function() { return i; });
/* harmony import */ var _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CIMCursor.js */ "tqcG");
/* harmony import */ var _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CurveHelper.js */ "/vtc");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const s=1.7320508075688772;class i{static local(){return null===i.instance&&(i.instance=new i),i.instance}execute(t,e,r){return new l(t,e,r)}}i.instance=null;class l extends _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["PathGeometryCursor"]{constructor(t,e,o){super(t,!1,!0),this._curveHelper=new _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["CurveHelper"],this._width=(void 0!==e.width?e.width:5)*o,this._arrowType=void 0!==e.geometricEffectArrowType?e.geometricEffectArrowType:"OpenEnded",this._offsetFlattenError=_CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["PIXEL_TOLERANCE"]*o}processPath(t){switch(this._arrowType){case"OpenEnded":default:return this._constructSimpleArrow(t,!0);case"Block":return this._constructSimpleArrow(t,!1);case"Crossed":return this._constructCrossedArrow(t)}}_constructSimpleArrow(t,e){const r=this._curveHelper.calculatePathLength(t);let n=this._width;r<2*n&&(n=r/2);const s=this._curveHelper.getSubCurve(t,0,r-n);if(!s)return null;const i=n/2;if(this._curveHelper.isEmpty(s,!1))return null;const l=this._constructOffset(s,-i);if(!l)return null;const c=this._constructOffset(s,i);if(!c)return null;const u=this._constructArrowBasePoint(l,-i/2);if(!u)return null;const h=this._constructArrowBasePoint(c,i/2);if(!h)return null;const a=t[t.length-1];e||(this._makeControlPoint(c,!0),this._makeControlPoint(l,!0));const _=new _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["PathHelper"];return _.addPath(c,!0),_.lineTo(h),this._makeControlPoint(_.path()),_.lineTo(a),this._makeControlPoint(_.path()),_.lineTo(u),this._makeControlPoint(_.path()),_.addPath(l,!1),e?{paths:[_.path()]}:(_.close(),{rings:[_.path()]})}_constructCrossedArrow(t){const e=this._curveHelper.calculatePathLength(t);let r=this._width;e<r*(1+s+1)&&(r=e/(1+s+1));const n=this._curveHelper.getSubCurve(t,0,e-r*(1+s));if(!n)return null;const i=r/2;if(this._curveHelper.isEmpty(n,!1))return null;const l=this._constructOffset(n,i);if(!l)return null;const c=this._constructOffset(n,-i);if(!c)return null;const u=this._curveHelper.getSubCurve(t,0,e-r);if(!u)return null;if(this._curveHelper.isEmpty(u,!1))return null;const h=this._constructOffset(u,i);if(!h)return null;const a=this._constructOffset(u,-i);if(!a)return null;const _=h[h.length-1],f=this._constructArrowBasePoint(h,i/2);if(!f)return null;const p=a[a.length-1],d=this._constructArrowBasePoint(a,-i/2);if(!d)return null;const m=t[t.length-1];this._makeControlPoint(l,!1),this._makeControlPoint(c,!1);const w=new _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["PathHelper"];return w.addPath(l,!0),this._makeControlPoint(w.path()),w.lineTo(p),w.lineTo(d),this._makeControlPoint(w.path()),w.lineTo(m),this._makeControlPoint(w.path()),w.lineTo(f),this._makeControlPoint(w.path()),w.lineTo(_),this._makeControlPoint(w.path()),w.addPath(c,!1),{paths:[w.path()]}}_constructOffset(t,e){return this._curveHelper.offset(t,e,"Rounded",4,this._offsetFlattenError)}_constructArrowBasePoint(t,e){if(!t||t.length<2)return null;const r=t[t.length-2],n=t[t.length-1],o=[n[0]-r[0],n[1]-r[1]];return this._curveHelper.normalize(o),[n[0]+o[1]*e,n[1]-o[0]*e]}_makeControlPoint(t,r=!1){Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["setId"])(r?t[0]:t[t.length-1],1)}}


/***/ }),

/***/ "G0q+":
/*!****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/shapingUtils.js ***!
  \****************************************************************************************/
/*! exports provided: ShapedGlyph, ShapingInfo, shapeGlyphs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapedGlyph", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapingInfo", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shapeGlyphs", function() { return T; });
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../chunks/vec2.js */ "M0lq");
/* harmony import */ var _chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../chunks/mat2d.js */ "opr1");
/* harmony import */ var _chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../chunks/mat2df32.js */ "LGNZ");
/* harmony import */ var _chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../chunks/vec2f32.js */ "c46T");
/* harmony import */ var _alignmentUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../alignmentUtils.js */ "Mt1D");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../number.js */ "0RS7");
/* harmony import */ var _Rect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Rect.js */ "qcDN");
/* harmony import */ var _collisions_BoundingBox_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../collisions/BoundingBox.js */ "e+Fw");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const g=Math.PI/180;class u{constructor(t,s,e,i){this._rotationT=Object(_chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),this._xBounds=0,this._yBounds=0,this.minZoom=0,this.maxZoom=255;const o=e.rect,h=new Float32Array(8);t*=i,s*=i;const n=e.code?o.width*i:e.metrics.width,a=e.code?o.height*i:e.metrics.height;h[0]=t,h[1]=s,h[2]=t+n,h[3]=s,h[4]=t,h[5]=s+a,h[6]=t+n,h[7]=s+a,this._data=h,this._setTextureCoords(o),this._scale=i,this._mosaic=e,this.x=t,this.y=s}get width(){return this._mosaic.metrics.width*this._scale}get mosaic(){return this._mosaic}set angle(t){this._angle=t,Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_1__["i"])(this._rotationT),Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this._rotationT,this._rotationT,-t),this._setOffsets(this._data)}get angle(){return this._angle}get xTopLeft(){return this._data[0]}get yTopLeft(){return this._data[1]}get xBottomRight(){return this._data[6]}get yBottomRight(){return this._data[7]}get texcoords(){return this._texcoords}get textureBinding(){return this._mosaic.textureBinding}get offsets(){return this._offsets||this._setOffsets(this._data),this._offsets}get char(){return String.fromCharCode(this._mosaic.code)}get code(){return this._mosaic.code}get bounds(){const{height:t,width:s}=this._mosaic.metrics,e=s*this._scale,i=Math.abs(t)*this._scale,h=new Float32Array(8);h[0]=this.x,h[1]=this.y,h[2]=this.x+e,h[3]=this.y,h[4]=this.x,h[5]=this.y+i,h[6]=this.x+e,h[7]=this.y+i;const n=Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_1__["m"])(Object(_chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),this._rotationT,this._T);Object(_chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_2__["t"])(h,h,n);let c=1/0,d=1/0,f=0,l=0;for(let t=0;t<4;t++){const s=h[2*t],e=h[2*t+1];c=Math.min(c,s),d=Math.min(d,e),f=Math.max(f,s),l=Math.max(l,e)}const g=f-c,u=l-d;return new _collisions_BoundingBox_js__WEBPACK_IMPORTED_MODULE_7__["default"](c+g/2,d+u/2,g,u)}setTransform(t){this._T=t,this._offsets=null}_setOffsets(t){this._offsets||(this._offsets={upperLeft:0,upperRight:0,lowerLeft:0,lowerRight:0});const s=this._offsets,e=new Float32Array(8),i=Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_1__["m"])(Object(_chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),this._rotationT,this._T);Object(_chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_2__["t"])(e,t,i),s.upperLeft=Object(_number_js__WEBPACK_IMPORTED_MODULE_5__["i1616to32"])(8*e[0],8*e[1]),s.upperRight=Object(_number_js__WEBPACK_IMPORTED_MODULE_5__["i1616to32"])(8*e[2],8*e[3]),s.lowerLeft=Object(_number_js__WEBPACK_IMPORTED_MODULE_5__["i1616to32"])(8*e[4],8*e[5]),s.lowerRight=Object(_number_js__WEBPACK_IMPORTED_MODULE_5__["i1616to32"])(8*e[6],8*e[7])}_setTextureCoords({x:t,y:s,width:e,height:i}){this._texcoords={upperLeft:Object(_number_js__WEBPACK_IMPORTED_MODULE_5__["i1616to32"])(t,s),upperRight:Object(_number_js__WEBPACK_IMPORTED_MODULE_5__["i1616to32"])(t+e,s),lowerLeft:Object(_number_js__WEBPACK_IMPORTED_MODULE_5__["i1616to32"])(t,s+i),lowerRight:Object(_number_js__WEBPACK_IMPORTED_MODULE_5__["i1616to32"])(t+e,s+i)}}}const _=(t,s)=>({code:0,page:0,sdf:!0,rect:new _Rect_js__WEBPACK_IMPORTED_MODULE_6__["default"](0,0,11,8),textureBinding:s,metrics:{advance:0,height:4,width:t,left:0,top:0}});class p{constructor(t,s,e){this._rotation=0,this._decorate(t,s,e),this.glyphs=t,this.bounds=this._createBounds(t),this.isMultiline=s.length>1,this._hasRotation=0!==e.angle,this._T=this._createGlyphTransform(this.bounds,e);for(const s of t)s.setTransform(this._T)}setRotation(t){if(0===t&&0===this._rotation)return;this._rotation=t;const s=this._T,e=Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_1__["b"])(Object(_chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),t);Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_1__["m"])(s,e,s);for(const t of this.glyphs)t.setTransform(this._T)}_decorate(t,s,e){if(!e.decoration||"none"===e.decoration||!t.length)return;const i=e.scale,o="underline"===e.decoration?30:20,h=t[0].textureBinding;for(const e of s){const s=e.startX*i,n=e.startY*i,r=(e.width+e.glyphWidthEnd)*i;t.push(new u(s,n+o*i,_(r,h),1))}}get boundsT(){const e=this.bounds,i=Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_0__["s"])(Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),e.x,e.y);if(Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_0__["t"])(i,i,this._T),this._hasRotation){const t=Math.max(e.width,e.height);return new _collisions_BoundingBox_js__WEBPACK_IMPORTED_MODULE_7__["default"](i[0],i[1],t,t)}return new _collisions_BoundingBox_js__WEBPACK_IMPORTED_MODULE_7__["default"](i[0],i[1],e.width,e.height)}_createBounds(t){let s=1/0,e=1/0,i=0,o=0;for(const h of t)s=Math.min(s,h.xTopLeft),e=Math.min(e,h.yTopLeft),i=Math.max(i,h.xTopLeft+h.width),o=Math.max(o,h.yBottomRight);const h=i-s,n=o-e;return new _collisions_BoundingBox_js__WEBPACK_IMPORTED_MODULE_7__["default"](s+h/2,e+n/2,h,n)}_createGlyphTransform(s,e){const o=g*e.angle,h=Object(_chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),a=Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_3__["c"])();return Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_1__["t"])(h,h,Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_0__["s"])(a,e.xOffset,-e.yOffset)),e.isCIM?Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(h,h,o):(Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_1__["t"])(h,h,Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_0__["s"])(a,s.x,s.y)),Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(h,h,o),Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_1__["t"])(h,h,Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_0__["s"])(a,-s.x,-s.y))),h}}class x{constructor(t,s,e,i,o,h){this.glyphWidthEnd=0,this.startX=0,this.startY=0,this.start=Math.max(0,Math.min(s,e)),this.end=Math.max(0,Math.max(s,e)),this.end<t.length&&(this.glyphWidthEnd=t[this.end].metrics.width),this.width=i,this.yMin=o,this.yMax=h}}const w=t=>10===t,y=t=>32===t;function T(t,s,e){const i=e.scale,o=new Array,h=function(t,s,e){const i=new Array,o=1/e.scale,h=e.maxLineWidth*o,n=s?t.length-1:0,r=s?-1:t.length,a=s?-1:1;let c=n,d=0,f=0,l=c,m=l,g=0,u=1/0,_=0;for(;c!==r;){const{code:s,metrics:e}=t[c],o=Math.abs(e.top);if(w(s)||y(s)||(u=Math.min(u,o),_=Math.max(_,o+e.height)),w(s))c!==n&&(i.push(new x(t,l,c-a,d,u,_)),u=1/0,_=0),d=0,l=c+a,m=c+a,f=0;else if(y(s))m=c+a,f=0,g=e.advance,d+=e.advance;else if(d>h){if(m!==l){const s=m-2*a;d-=g,i.push(new x(t,l,s,d-f,u,_)),u=1/0,_=0,l=m,d=f}else i.push(new x(t,l,c-a,d,u,_)),u=1/0,_=0,l=c,m=c,d=0;d+=e.advance,f+=e.advance}else d+=e.advance,f+=e.advance;c+=a}const p=new x(t,l,c-a,d,u,_);return p.start>=0&&p.end<t.length&&i.push(p),i}(t,s,e),n=function(t,s){let e=0;for(let s=0;s<t.length;s++){const{width:i}=t[s];e=Math.max(i,e)}const i="underline"===s.decoration?4:0,o=t[0].yMin;return{x:0,y:o,height:t[t.length-1].yMax+s.lineHeight*(t.length-1)+i-o,width:e}}(h,e),{vAlign:r,hAlign:a}=e,c=r===_alignmentUtils_js__WEBPACK_IMPORTED_MODULE_4__["VAlign"].Baseline?1:0,f=c?0:r-1,l=(1-c)*-n.y+f*(n.height/2)+-26*(c?1:0);for(let s=0;s<h.length;s++){const{start:n,end:r,width:c}=h[s];let d=-1*(a+1)*(c/2)-3;const f=s*e.lineHeight+l-3;h[s].startX=d,h[s].startY=f;for(let s=n;s<=r;s++){const e=t[s];if(w(e.code))continue;const h=new u(d+e.metrics.left,f-e.metrics.top,e,i);d+=e.metrics.advance,o.push(h)}}return new p(o,h,e)}


/***/ }),

/***/ "GQfk":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/effects/EffectDashes.js ***!
  \***********************************************************************/
/*! exports provided: EffectDashes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectDashes", function() { return i; });
/* harmony import */ var _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CIMCursor.js */ "tqcG");
/* harmony import */ var _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CurveHelper.js */ "/vtc");
/* harmony import */ var _GeometryWalker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../GeometryWalker.js */ "DAsI");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class i{static local(){return null===i.instance&&(i.instance=new i),i.instance}execute(t,e,s){return new r(t,e,s)}}i.instance=null;class r extends _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["PathGeometryCursor"]{constructor(t,e,i){super(t,!0,!0),this._walker=new _GeometryWalker_js__WEBPACK_IMPORTED_MODULE_2__["GeometryWalker"],this._walker.updateTolerance(i),this._endings=e.lineDashEnding,this._customDashPos=void 0!==e.offsetAlongLine?e.offsetAlongLine*i:0,this._offsetAtEnd=void 0!==e.customEndingOffset?e.customEndingOffset*i:0,this._pattern=new _GeometryWalker_js__WEBPACK_IMPORTED_MODULE_2__["DashPattern"],this._pattern.init(e.dashTemplate,!0),this._pattern.scale(i)}processPath(t){if(0===this._pattern.length())return this.iteratePath=!1,{paths:[t]};if(!this.iteratePath){let e=!0;switch(this._endings){case"HalfPattern":case"HalfGap":default:this._pattern.extPtGap=0;break;case"FullPattern":this.isClosed||(this._pattern.extPtGap=.5*this._pattern.firstValue());break;case"FullGap":this.isClosed||(this._pattern.extPtGap=.5*this._pattern.lastValue());break;case"NoConstraint":this.isClosed||(e=!1);break;case"Custom":this.isClosed||(this._pattern.extPtGap=.5*this._offsetAtEnd)}const s=this._walker.calculatePathLength(t);if(this._pattern.isEmpty()||s<.1*this._pattern.length())return{paths:[t]};if(!this._walker.init(t,this._pattern,e))return{paths:[t]}}let s;if(this.iteratePath)s=this._pattern.nextValue();else{let t;switch(this._endings){case"HalfPattern":default:t=.5*this._pattern.firstValue();break;case"HalfGap":t=.5*-this._pattern.lastValue();break;case"FullGap":t=-this._pattern.lastValue();break;case"FullPattern":t=0;break;case"NoConstraint":case"Custom":t=-this._customDashPos}let e=t/this._pattern.length();e-=Math.floor(e),t=e*this._pattern.length(),this._pattern.reset(),s=this._pattern.nextValue();let a=!1;for(;t>=s;)t-=s,s=this._pattern.nextValue(),a=!a;s-=t,a?(this._walker.nextPosition(s),s=this._pattern.nextValue()):this.isClosed&&(this._firstCurve=this._walker.nextCurve(s),s=this._pattern.nextValue(),this._walker.nextPosition(s),s=this._pattern.nextValue())}let a=this._walker.nextCurve(s);return a?this._walker.isPathEnd()?(this.iteratePath=!1,this._firstCurve&&(this._firstCurve.splice(0,1),_CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["PathHelper"].mergePath(a,this._firstCurve),this._firstCurve=null)):(s=this._pattern.nextValue(),!this._walker.nextPosition(s)||this._walker.isPathEnd()?(this.iteratePath=!1,this._firstCurve&&(a=this._firstCurve,this._firstCurve=null)):this.iteratePath=!0):(this.iteratePath=!1,a=this._firstCurve,this._firstCurve=null),{paths:[a]}}}


/***/ }),

/***/ "J8sa":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/effects/EffectRotate.js ***!
  \***********************************************************************/
/*! exports provided: EffectRotate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectRotate", function() { return u; });
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/lang.js */ "f/qv");
/* harmony import */ var _geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../geometry/support/boundsUtils.js */ "KLE9");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../geometry/support/jsonUtils.js */ "qatw");
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../geometry/support/aaBoundingRect.js */ "kYAx");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class u{static local(){return null===u.instance&&(u.instance=new u),u.instance}execute(t,n,e){return new c(t,n,e)}}u.instance=null;class c{constructor(t,n,e){this._inputGeometries=t,this._rotateAngle=void 0!==n.angle?-n.angle*Math.PI/180:0}next(){let u=this._inputGeometries.next();for(;u;){if(0===this._rotateAngle)return u;const c=Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_3__["create"])();Object(_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_1__["getBoundsXY"])(c,u);const l=(c[2]+c[0])/2,m=(c[3]+c[1])/2;if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isExtent"])(u)){const t={rings:[[[u.xmin,u.ymin],[u.xmin,u.ymax],[u.xmax,u.ymax],[u.xmax,u.ymin],[u.xmin,u.ymin]]]};return this._rotateMultipath(t.rings,l,m),t}if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPolygon"])(u)){const n=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(u);return this._rotateMultipath(n.rings,l,m),n}if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPolyline"])(u)){const n=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(u);return this._rotateMultipath(n.paths,l,m),n}if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isMultipoint"])(u)){const n=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(u);return this._rotatePath(n.points,l,m),n}if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPoint"])(u))return u;u=this._inputGeometries.next()}return null}_rotateMultipath(t,n,e){if(t)for(const r of t)this._rotatePath(r,n,e)}_rotatePath(t,n,e){if(t){const r=Math.cos(this._rotateAngle),i=Math.sin(this._rotateAngle);for(const o of t){const t=o[0]-n,s=o[1]-e;o[0]=n+t*r-s*i,o[1]=e+t*i+s*r}}}}


/***/ }),

/***/ "MbPc":
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/placements/PlacementOnVertices.js ***!
  \*********************************************************************************/
/*! exports provided: PlacementOnVertices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacementOnVertices", function() { return n; });
/* harmony import */ var _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CIMCursor.js */ "tqcG");
/* harmony import */ var _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CurveHelper.js */ "/vtc");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class n{static local(){return null===n.instance&&(n.instance=new n),n.instance}execute(t,e,s){return new a(t,e,s)}}n.instance=null;class a extends _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["PathTransformationCursor"]{constructor(t,e,s){super(t,!0,!0),this._curveHelper=new _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["CurveHelper"],this._angleToLine=void 0===e.angleToLine||e.angleToLine,this._offset=void 0!==e.offset?e.offset*s:0,this._endPoints=void 0===e.placeOnEndPoints||e.placeOnEndPoints,this._controlPoints=void 0===e.placeOnControlPoints||e.placeOnControlPoints,this._regularVertices=void 0===e.placeOnRegularVertices||e.placeOnRegularVertices,this._tags=[],this._tagIterator=0}processPath(t){if(this.iteratePath||(this._preparePath(t),this.iteratePath=!0),this._tagIterator>=this._tags.length)return this._tags.length=0,this._tagIterator=0,this.iteratePath=!1,null;const e=this._tags[this._tagIterator];this._angleToLine&&this.internalPlacement.setRotate(e[2]);let s=e[0],i=e[1];if(0!==this._offset){const t=Math.cos(e[2]),n=Math.sin(e[2]);s-=this._offset*n,i+=this._offset*t}return this.internalPlacement.setTranslate(s,i),this._tagIterator++,this.internalPlacement}_preparePath(t){this._tags.length=0,this._tagIterator=0;const i=Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["isClosedPath"])(t),n=t.length-1;let a,h,o=0,l=0,_=0,c=0,g=0;for(;o<n;){o++,a=t[o-1],h=t[o];const e=Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["getId"])(a),u=Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["getId"])(h);(this._angleToLine||0!==this._offset)&&(c=this._curveHelper.getAngle(a,h,0)),1===o?i?(l=c,_=e):this._endPoints&&this._tags.push([a[0],a[1],c]):1===e?this._controlPoints&&this._tags.push([a[0],a[1],r(g,c)]):this._regularVertices&&this._tags.push([a[0],a[1],r(g,c)]),(this._angleToLine||0!==this._offset)&&(g=this._curveHelper.getAngle(a,h,1)),o===n&&(i?1===u||1===_?this._controlPoints&&this._tags.push([h[0],h[1],r(g,l)]):this._regularVertices&&this._tags.push([h[0],h[1],r(g,l)]):this._endPoints&&this._tags.push([h[0],h[1],g]))}this._tagIterator=0}}function r(t,e){const s=Math.PI;for(;Math.abs(e-t)>s+2e-15;)e-t>s?e-=2*s:e+=2*s;return(t+e)/2}


/***/ }),

/***/ "Mt1D":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/alignmentUtils.js ***!
  \***************************************************************************/
/*! exports provided: HAlign, VAlign, getAlignmentFromPlacement, getJustification, getXAnchorDirection, getXDirection, getYAnchorDirection, getYDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HAlign", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VAlign", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlignmentFromPlacement", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJustification", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getXAnchorDirection", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getXDirection", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getYAnchorDirection", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getYDirection", function() { return o; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var e,t;function n(t){switch(t){case"left":return e.Left;case"right":return e.Right;case"center":case"justify":return e.Center}}function r(e){switch(e){case"top":return t.Top;case"middle":return t.Center;case"baseline":return t.Baseline;case"bottom":return t.Bottom}}function a(n){switch(n){case"above-left":return[e.Right,t.Bottom];case"above-center":case"above-along":return[e.Center,t.Bottom];case"above-right":return[e.Left,t.Bottom];case"center-left":return[e.Right,t.Center];case"center-center":case"center-along":return[e.Center,t.Center];case"center-right":return[e.Left,t.Center];case"below-left":return[e.Right,t.Top];case"below-center":case"below-along":return[e.Center,t.Top];case"below-right":return[e.Left,t.Top];case"always-horizontal":return[e.Center,t.Baseline];default:return console.debug(`Found invalid placement type ${n}`),[e.Center,t.Center]}}function c(t){switch(t){case e.Right:return-1;case e.Center:return 0;case e.Left:return 1;default:return console.debug(`Found invalid horizontal alignment ${t}`),0}}function o(e){switch(e){case t.Top:return 1;case t.Center:return 0;case t.Bottom:case t.Baseline:return-1;default:return console.debug(`Found invalid vertical alignment ${e}`),0}}function s(t){switch(t){case"left":return e.Left;case"right":return e.Right;case"center":case"justify":return e.Center}}!function(e){e[e.Left=-1]="Left",e[e.Center=0]="Center",e[e.Right=1]="Right"}(e||(e={})),function(e){e[e.Top=1]="Top",e[e.Center=0]="Center",e[e.Bottom=-1]="Bottom",e[e.Baseline=2]="Baseline"}(t||(t={}));


/***/ }),

/***/ "Nl1v":
/*!***************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/placements/PlacementAtRatioPositions.js ***!
  \***************************************************************************************/
/*! exports provided: PlacementAtRatioPositions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacementAtRatioPositions", function() { return e; });
/* harmony import */ var _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CIMCursor.js */ "tqcG");
/* harmony import */ var _GeometryWalker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GeometryWalker.js */ "DAsI");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class e{static local(){return null===e.instance&&(e.instance=new e),e.instance}execute(t,i,s){return new n(t,i,s)}}e.instance=null;class n extends _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["PathTransformationCursor"]{constructor(t,e,n){super(t,!0,!0),this._walker=new _GeometryWalker_js__WEBPACK_IMPORTED_MODULE_1__["GeometryWalker"],this._walker.updateTolerance(n),this._angleToLine=void 0===e.angleToLine||e.angleToLine,this._offset=void 0!==e.offset?e.offset*n:0,this._beginGap=void 0!==e.beginPosition?e.beginPosition*n:0,this._endGap=void 0!==e.endPosition?e.endPosition*n:0,this._flipFirst=void 0===e.flipFirst||e.flipFirst,this._pattern=new _GeometryWalker_js__WEBPACK_IMPORTED_MODULE_1__["DashPattern"],this._pattern.init(e.positionArray,!1,!1),this._subPathLen=0,this._posCount=this._pattern.size(),this._isFirst=!0,this._prevPos=0}processPath(t){if(this._pattern.isEmpty())return null;let i;if(this.iteratePath){const t=this._pattern.nextValue()*this._subPathLen,s=this._beginGap+t;i=s-this._prevPos,this._prevPos=s}else{if(this._posCount=this._pattern.size(),this._isFirst=!0,this._prevPos=0,this._subPathLen=this._walker.calculatePathLength(t)-this._beginGap-this._endGap,this._subPathLen<0)return this.iteratePath=!1,null;if(!this._walker.init(t,this._pattern,!1))return null;this._pattern.reset();const s=this._pattern.nextValue()*this._subPathLen,e=this._beginGap+s;i=e-this._prevPos,this._prevPos=e,this.iteratePath=!0}const s={};if(!this._walker.nextPointAndAngle(i,s,1))return this.iteratePath=!1,null;this.internalPlacement.setTranslate(s.pt[0]+this._offset*s.sa,s.pt[1]-this._offset*s.ca);const e=this._isFirst&&this._flipFirst;let n,a;return this._angleToLine?(n=s.ca,a=s.sa):(n=1,a=0),e&&(n=-n,a=-a),this.internalPlacement.setRotateCS(n,a),this._isFirst=!1,this._posCount--,0===this._posCount&&(this.iteratePath=!1),this.internalPlacement}}


/***/ }),

/***/ "PiQZ":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/effects/EffectBuffer.js ***!
  \***********************************************************************/
/*! exports provided: EffectBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectBuffer", function() { return o; });
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../geometry/support/jsonUtils.js */ "qatw");
/* harmony import */ var _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CurveHelper.js */ "/vtc");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class o{static local(){return null===o.instance&&(o.instance=new o),o.instance}execute(e,t,i){return new f(e,t,i)}}o.instance=null;class f{constructor(e,t,i){this._inputGeometries=e,this._curveHelper=new _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["CurveHelper"],this._size=(void 0!==t.size?t.size:1)*i,this._offsetFlattenError=_CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["PIXEL_TOLERANCE"]*i}next(){let n=this._inputGeometries.next();for(;n;){if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isExtent"])(n))if(this._size>0){const e=[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]],t=this._curveHelper.offset(e,this._size,"Rounded",4,this._offsetFlattenError);if(t)return{rings:[t]}}else{if(!(this._size<0))return n;if(Math.min(n.xmax-n.xmin,n.ymax-n.ymin)+2*this._size>0)return{xmin:n.xmin-this._size,xmax:n.xmax+this._size,ymin:n.ymin-this._size,ymax:n.ymax+this._size}}if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isPolygon"])(n)){if(0===this._size)return n;const e=[];for(const t of n.rings){const i=this._curveHelper.offset(t,this._size,"Rounded",4,this._offsetFlattenError);i&&e.push(i)}if(e.length)return{rings:e}}if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isPolyline"])(n)&&this._size>0){const e=[];for(const t of n.paths)if(t&&t.length>1){const i=this._curveHelper.offset(t,this._size,"Rounded",4,this._offsetFlattenError),s=this._curveHelper.offset(t,-this._size,"Rounded",4,this._offsetFlattenError);if(i&&s){for(let e=s.length-1;e>=0;e--)i.push(s[e]);i.push([i[0][0],i[0][1]]),e.push(i)}}if(e.length)return{rings:e}}Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isPoint"])(n)&&this._size,n=this._inputGeometries.next()}return null}}


/***/ }),

/***/ "Q/g2":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/effects/EffectReverse.js ***!
  \************************************************************************/
/*! exports provided: EffectReverse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectReverse", function() { return s; });
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/lang.js */ "f/qv");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../geometry/support/jsonUtils.js */ "qatw");
/* harmony import */ var _CIMCursor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CIMCursor.js */ "tqcG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class s{static local(){return null===s.instance&&(s.instance=new s),s.instance}execute(e,t,r){return new n(e,t,r)}}s.instance=null;class n{constructor(e,t,r){this._inputGeometries=e,this._reverse=void 0===t.reverse||t.reverse}next(){let s=this._inputGeometries.next();for(;s;){if(!this._reverse)return s;if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPolyline"])(s)){const t=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(s);return Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_2__["reverseMultipath"])(t.paths),t}s=this._inputGeometries.next()}return null}}


/***/ }),

/***/ "QPyG":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/effects/EffectMove.js ***!
  \*********************************************************************/
/*! exports provided: EffectMove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectMove", function() { return n; });
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/lang.js */ "f/qv");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../geometry/support/jsonUtils.js */ "qatw");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class n{static local(){return null===n.instance&&(n.instance=new n),n.instance}execute(t,s,e){return new r(t,s,e)}}n.instance=null;class r{constructor(t,s,e){this._inputGeometries=t,this._offsetX=void 0!==s.offsetX?s.offsetX*e:0,this._offsetY=void 0!==s.offsetY?-s.offsetY*e:0}next(){let n=this._inputGeometries.next();for(;n;){if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isExtent"])(n))return{xmin:n.xmin+this._offsetX,xmax:n.xmax+this._offsetX,ymin:n.ymin+this._offsetY,ymax:n.ymax+this._offsetY};if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPolygon"])(n)){const s=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(n);return this._moveMultipath(s.rings,this._offsetX,this._offsetY),s}if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPolyline"])(n)){const s=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(n);return this._moveMultipath(s.paths,this._offsetX,this._offsetY),s}if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isMultipoint"])(n)){const s=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(n);return this._movePath(s.points,this._offsetX,this._offsetY),s}if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPoint"])(n))return{x:n.x+this._offsetX,y:n.y+this._offsetY};n=this._inputGeometries.next()}return null}_moveMultipath(t,s,e){if(t)for(const i of t)this._movePath(i,s,e)}_movePath(t,s,e){if(t)for(const i of t)i[0]+=s,i[1]+=e}}


/***/ }),

/***/ "RaXU":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/support/util.js ***!
  \*******************************************************************/
/*! exports provided: analyzeRings, toJSONGeometryType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "analyzeRings", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toJSONGeometryType", function() { return e; });
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/jsonMap.js */ "+opI");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const o=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__["JSONMap"]({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch",mesh:"mesh"});function e(t){return o.toJSON(t)}function n(t,o,e){const n=[],i=[];let r=0,l=0;for(const s of t){const t=l;let m=s[0][0],c=s[0][1];n[l++]=m,n[l++]=c;let p=0;for(let t=1;t<s.length;++t){const o=m,e=c;m=s[t][0],c=s[t][1],p+=c*o-m*e,n[l++]=m,n[l++]=c}o(p/2),p>0?(t-r>0&&(e(r,t,n,i),r=t),i.length=0):p<0&&t-r>0?i.push(.5*(t-r)):l=t}l-r>0&&e(r,l,n,i)}


/***/ }),

/***/ "Sld3":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/effects/EffectScale.js ***!
  \**********************************************************************/
/*! exports provided: EffectScale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectScale", function() { return c; });
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/lang.js */ "f/qv");
/* harmony import */ var _geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../geometry/support/boundsUtils.js */ "KLE9");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../geometry/support/jsonUtils.js */ "qatw");
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../geometry/support/aaBoundingRect.js */ "kYAx");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class c{static local(){return null===c.instance&&(c.instance=new c),c.instance}execute(t,s,i){return new l(t,s,i)}}c.instance=null;class l{constructor(t,s,i){this._inputGeometries=t,this._xFactor=void 0!==s.xScaleFactor?s.xScaleFactor:1.15,this._yFactor=void 0!==s.yScaleFactor?s.yScaleFactor:1.15}next(){let c=this._inputGeometries.next();for(;c;){if(1===this._xFactor&&1===this._yFactor)return c;const l=Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_3__["create"])();Object(_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_1__["getBoundsXY"])(l,c);const u=(l[2]+l[0])/2,m=(l[3]+l[1])/2;if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isExtent"])(c)){const t={rings:[[[c.xmin,c.ymin],[c.xmin,c.ymax],[c.xmax,c.ymax],[c.xmax,c.ymin],[c.xmin,c.ymin]]]};return this._scaleMultipath(t.rings,u,m),t}if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPolygon"])(c)){const s=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(c);return this._scaleMultipath(s.rings,u,m),s}if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPolyline"])(c)){const s=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(c);return this._scaleMultipath(s.paths,u,m),s}if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isMultipoint"])(c)){const s=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(c);return this._scalePath(s.points,u,m),s}if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPoint"])(c))return c;c=this._inputGeometries.next()}return null}_scaleMultipath(t,s,i){if(t)for(const r of t)this._scalePath(r,s,i)}_scalePath(t,s,i){if(t)for(const r of t){const t=(r[0]-s)*this._xFactor,n=(r[1]-i)*this._yFactor;r[0]=s+t,r[1]=i+n}}}


/***/ }),

/***/ "WPSO":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/CIMPlacements.js ***!
  \****************************************************************/
/*! exports provided: EmptyPlacementCursor, Placement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyPlacementCursor", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Placement", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class t{constructor(){this.setIdentity()}getAngle(){return(null==this.rz||0===this.rz&&1!==this.rz_c&&0!==this.rz_s)&&(this.rz=Math.atan2(this.rz_s,this.rz_c)),this.rz}setIdentity(){this.tx=0,this.ty=0,this.tz=0,this.s=1,this.rx=0,this.ry=0,this.rz=0,this.rz_c=1,this.rz_s=0}setTranslate(t,s){this.tx=t,this.ty=s}setTranslateZ(t){this.tz=t}setRotateCS(t,s){this.rz=void 0,this.rz_c=t,this.rz_s=s}setRotate(t){this.rz=t,this.rz_c=void 0,this.rz_s=void 0}setRotateY(t){this.ry=t}setScale(t){this.s=t}setMeasure(t){this.m=t}}class s{constructor(){}next(){return null}}


/***/ }),

/***/ "X4zr":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/packingUtils.js ***!
  \***************************************************************/
/*! exports provided: packFloatRGBA, unpackFloatRGBA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "packFloatRGBA", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unpackFloatRGBA", function() { return e; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const r=[1,256,65536,16777216],t=[1/256,1/65536,1/16777216,1/4294967296],n=e(new Uint8ClampedArray([255,255,255,255]));function o(t,o,e=0){const f=function(r,t,n){if(r<t)return t;if(r>n)return n;return r}(t,0,n);for(let t=0;t<4;t++)o[e+t]=Math.floor(256*((u=f*r[t])-Math.floor(u)));var u}function e(r,n=0){let o=0;for(let e=0;e<4;e++)o+=r[n+e]*t[e];return o}


/***/ }),

/***/ "XunE":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/CIMSymbolDrawHelper.js ***!
  \**********************************************************************/
/*! exports provided: CIMSymbolDrawHelper, C_DEG_TO_RAD, CanvasDrawHelper, EnvDrawHelper, Transformation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CIMSymbolDrawHelper", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_DEG_TO_RAD", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasDrawHelper", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvDrawHelper", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transformation", function() { return m; });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry/support/boundsUtils.js */ "KLE9");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ "qatw");
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../geometry/support/aaBoundingRect.js */ "kYAx");
/* harmony import */ var _CIMPlacements_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CIMPlacements.js */ "WPSO");
/* harmony import */ var _CIMEffects_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CIMEffects.js */ "/iQf");
/* harmony import */ var _CIMOperators_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CIMOperators.js */ "k0QX");
/* harmony import */ var _Rect_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Rect.js */ "Du6U");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const c=Math.PI/180,f=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.symbols.cim.CIMSymbolDrawHelper");class m{constructor(t){this._t=t}static createIdentity(){return new m([1,0,0,0,1,0])}clone(){const t=this._t;return new m(t.slice())}transform(t){const s=this._t;return[s[0]*t[0]+s[1]*t[1]+s[2],s[3]*t[0]+s[4]*t[1]+s[5]]}static createScale(t,s){return new m([t,0,0,0,s,0])}scale(t,s){const e=this._t;return e[0]*=t,e[1]*=t,e[2]*=t,e[3]*=s,e[4]*=s,e[5]*=s,this}scaleRatio(){return Math.sqrt(this._t[0]*this._t[0]+this._t[1]*this._t[1])}static createTranslate(t,s){return new m([0,0,t,0,0,s])}translate(t,s){const e=this._t;return e[2]+=t,e[5]+=s,this}static createRotate(t){const s=Math.cos(t),e=Math.sin(t);return new m([s,-e,0,e,s,0])}rotate(t){return this.multiply(m.createRotate(t))}multiply(t){const s=this._t,e=t._t,r=s[0]*e[0]+s[3]*e[1],i=s[1]*e[0]+s[4]*e[1],o=s[2]*e[0]+s[5]*e[1]+e[2],a=s[0]*e[3]+s[3]*e[4],n=s[1]*e[3]+s[4]*e[4],h=s[2]*e[3]+s[5]*e[4]+e[5];return s[0]=r,s[1]=i,s[2]=o,s[3]=a,s[4]=n,s[5]=h,this}}class u{constructor(t){this._transfos=[],this._sizeTransfos=[],this._transfos.push(t||m.createIdentity()),this._sizeTransfos.push(t?t.scaleRatio():1)}transformPt(t){return this._transfos[this._transfos.length-1].transform(t)}transformSize(t){return t*this._sizeTransfos[this._sizeTransfos.length-1]}back(){return this._transfos[this._transfos.length-1]}push(t,s){const e=s?t.scaleRatio():1;t.multiply(this.back()),this._transfos.push(t),this._sizeTransfos.push(this._sizeTransfos[this._sizeTransfos.length-1]*e)}pop(){this._transfos.splice(-1,1),this._sizeTransfos.splice(-1,1)}drawSymbol(t,s){if(t)switch(t.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":this.drawMultiLayerSymbol(t,s)}}drawMultiLayerSymbol(t,s){if(!t)return;const e=t.symbolLayers;if(!e)return;const r=t.effects;if(r){const t=this.executeEffects(r,s);if(t){let s=t.next();for(;s;)this.drawSymbolLayers(e,s),s=t.next()}}else this.drawSymbolLayers(e,s)}executeEffects(t,s){let e=new _CIMEffects_js__WEBPACK_IMPORTED_MODULE_5__["SimpleGeometryCursor"](s);for(const s of t){const t=Object(_CIMOperators_js__WEBPACK_IMPORTED_MODULE_6__["getEffectOperator"])(s);t&&(e=t.execute(e,s,1))}return e}drawSymbolLayers(t,s){let e=t.length;for(;e--;){const r=t[e];if(!r||!1===r.enable)continue;const i=r.effects;if(i){const t=this.executeEffects(i,s);if(t){let s=t.next();for(;s;)this.drawSymbolLayer(r,s),s=t.next()}}else this.drawSymbolLayer(r,s)}}drawSymbolLayer(t,s){switch(t.type){case"CIMSolidFill":this.drawSolidFill(s,t.color);break;case"CIMHatchFill":this.drawHatchFill(t,s);break;case"CIMSolidStroke":this.drawSolidStroke(s,t.color,t.width,t.capStyle,t.joinStyle,t.miterLimit);break;case"CIMCharacterMarker":case"CIMPictureMarker":case"CIMVectorMarker":this.drawMarkerLayer(t,s)}}drawHatchFill(t,s){const e=this._buildHatchPolyline(t,s,1);e&&(this.pushClipPath(s),this.drawMultiLayerSymbol(t.lineSymbol,e),this.popClipPath())}drawMarkerLayer(t,s){const e=t.markerPlacement;if(e){const r=Object(_CIMOperators_js__WEBPACK_IMPORTED_MODULE_6__["getPlacementOperator"])(e);if(r){const i="CIMMarkerPlacementInsidePolygon"===e.type;i&&this.pushClipPath(s);const o=1,a=r.execute(s,e,o);if(a){let s=a.next();for(;s;)this.drawMarker(t,s),s=a.next()}i&&this.popClipPath()}}else{const e=new _CIMPlacements_js__WEBPACK_IMPORTED_MODULE_4__["Placement"];e.tx=s.x,e.ty=s.y,this.drawMarker(t,e)}}drawMarker(t,s){switch(t.type){case"CIMCharacterMarker":case"CIMPictureMarker":this.drawPictureMarker(t,s);break;case"CIMVectorMarker":this.drawVectorMarker(t,s)}}drawPictureMarker(t,s){}drawVectorMarker(t,s){if(!t)return;const e=t.markerGraphics;if(!e)return;const r=t.size,i=t.frame,o=i?i.ymax-i.ymin:0,a=r&&o?r/o:1,n=m.createIdentity();i&&n.translate(.5*-(i.xmax+i.xmin),.5*-(i.ymax+i.ymin));const h=t.anchorPoint;if(h){let s=h.x,e=h.y;"Absolute"!==t.anchorPointUnits&&i&&(s*=i.xmax-i.xmin,e*=i.ymax-i.ymin),n.translate(-s,-e)}1!==a&&n.scale(a,a),t.rotation&&n.rotate(t.rotation*c),n.translate(t.offsetX||0,t.offsetY||0),n.translate(s.tx,s.ty),this.push(n,t.scaleSymbolsProportionally);for(const t of e)t&&t.symbol&&t.geometry||f.error("Invalid marker graphic",t),this.drawSymbol(t.symbol,t.geometry);this.pop()}_buildHatchPolyline(t,e,r){let o=(void 0!==t.separation?t.separation:4)*r,a=void 0!==t.rotation?t.rotation:0;if(0===o)return null;o<0&&(o=-o);let n=0;const h=.5*o;for(;n>h;)n-=o;for(;n<-h;)n+=o;const l=Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_3__["create"])();Object(_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_1__["getBoundsXY"])(l,e),l[0]-=h,l[1]-=h,l[2]+=h,l[3]+=h;const f=[[l[0],l[1]],[l[0],l[3]],[l[2],l[3]],[l[2],l[1]]];for(;a>180;)a-=180;for(;a<0;)a+=180;const m=Math.cos(a*c),u=Math.sin(a*c),p=-o*u,_=o*m;let y,d,x,M;n=(void 0!==t.offsetX?t.offsetX*r:0)*u-(void 0!==t.offsetY?t.offsetY*r:0)*m,y=x=Number.MAX_VALUE,d=M=-Number.MAX_VALUE;for(const t of f){const s=t[0],e=t[1],r=m*s+u*e,i=-u*s+m*e;y=Math.min(y,r),x=Math.min(x,i),d=Math.max(d,r),M=Math.max(M,i)}x=Math.floor(x/o)*o;let b=m*y-u*x-p*n/o,w=u*y+m*x-_*n/o,P=m*d-u*x-p*n/o,S=u*d+m*x-_*n/o;const C=1+Math.round((M-x)/o),k=[];for(let t=0;t<C;t++)b+=p,w+=_,P+=p,S+=_,k.push([[b,w],[P,S]]);return{paths:k}}}class p extends u{constructor(){super(),this.reset()}reset(){this._xmin=this._ymin=1/0,this._xmax=this._ymax=-1/0,this._clipCount=0}envelope(){return new _Rect_js__WEBPACK_IMPORTED_MODULE_7__["default"](this._xmin,this._ymin,this._xmax-this._xmin,this._ymax-this._ymin)}drawSolidFill(t){!t||this._clipCount>0||(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPolygon"])(t)?this._processPath(t.rings,0):Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPolyline"])(t)&&this._processPath(t.paths,0))}drawSolidStroke(t,s,i){if(!t||this._clipCount>0)return;const o=.5*this.transformSize(i);Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPolygon"])(t)?this._processPath(t.rings,o):Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPolyline"])(t)&&this._processPath(t.paths,o)}pushClipPath(t){this.drawSolidFill(t),++this._clipCount}popClipPath(){--this._clipCount}_processPath(t,s){if(t)for(const e of t){const t=e?e.length:0;if(t>1){this._merge(this.transformPt(e[0]),s);for(let r=1;r<t;++r)this._merge(this.transformPt(e[r]),s)}}}_merge(t,s){t[0]-s<this._xmin&&(this._xmin=t[0]-s),t[0]+s>this._xmax&&(this._xmax=t[0]+s),t[1]-s<this._ymin&&(this._ymin=t[1]-s),t[1]+s>this._ymax&&(this._ymax=t[1]+s)}}class _ extends u{constructor(t,s){super(s),this._ctx=t}drawSolidFill(t,s){if(!t)return;if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPolygon"])(t))this._buildPath(t.rings,!0);else{if(!Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPolyline"])(t))return;this._buildPath(t.paths,!0)}const i=this._ctx;i.fillStyle="string"==typeof s?s:"rgba("+Math.round(s[0])+","+Math.round(s[1])+","+Math.round(s[2])+","+s[3]/255+")",i.fill("evenodd")}drawSolidStroke(t,s,i,o,a,n){if(!t||!s||0===i)return;if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPolygon"])(t))this._buildPath(t.rings,!0);else{if(!Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPolyline"])(t))return;this._buildPath(t.paths,!1)}const h=this._ctx;h.strokeStyle="string"==typeof s?s:"rgba("+Math.round(s[0])+","+Math.round(s[1])+","+Math.round(s[2])+","+s[3]/255+")",h.lineWidth=this.transformSize(i)+.5,this._setCapStyle(o),this._setJoinStyle(a),h.miterLimit=n,h.stroke()}pushClipPath(t){this._ctx.save(),Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPolygon"])(t)?this._buildPath(t.rings,!0):Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPolyline"])(t)&&this._buildPath(t.paths,!0),this._ctx.clip("evenodd")}popClipPath(){this._ctx.restore()}_buildPath(t,s){const e=this._ctx;if(e.beginPath(),t)for(const r of t){const t=r?r.length:0;if(t>1){let i=this.transformPt(r[0]);e.moveTo(i[0],i[1]);for(let s=1;s<t;++s)i=this.transformPt(r[s]),e.lineTo(i[0],i[1]);s&&e.closePath()}}}_setCapStyle(t){switch(t){case"Butt":this._ctx.lineCap="butt";break;case"Round":this._ctx.lineCap="round";break;case"Square":this._ctx.lineCap="square"}}_setJoinStyle(t){switch(t){case"Bevel":this._ctx.lineJoin="bevel";break;case"Round":this._ctx.lineJoin="round";break;case"Miter":this._ctx.lineJoin="miter"}}}


/***/ }),

/***/ "a8c1":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/util/vvFlagUtils.js ***!
  \*****************************************************************************/
/*! exports provided: getVVFlags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVVFlags", function() { return e; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "yE7X");
/* harmony import */ var _visualVariablesUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../visualVariablesUtils.js */ "NIRN");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function e(e){if(!e)return _enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLVVFlag"].NONE;let r=0;for(const i of e)if("size"===i.type){const t=Object(_visualVariablesUtils_js__WEBPACK_IMPORTED_MODULE_1__["getTypeOfSizeVisualVariable"])(i);r|=t,"outline"===i.target&&(r|=t<<4)}else"color"===i.type?r|=_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLVVFlag"].COLOR:"opacity"===i.type?r|=_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLVVFlag"].OPACITY:"rotation"===i.type&&(r|=_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLVVFlag"].ROTATION);return r}


/***/ }),

/***/ "agE9":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/effects/EffectOffset.js ***!
  \***********************************************************************/
/*! exports provided: EffectOffset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectOffset", function() { return o; });
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../geometry/support/jsonUtils.js */ "qatw");
/* harmony import */ var _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CurveHelper.js */ "/vtc");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class o{static local(){return null===o.instance&&(o.instance=new o),o.instance}execute(t,e,s){return new r(t,e,s)}}o.instance=null;class r{constructor(t,e,s){this._inputGeometries=t,this._curveHelper=new _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["CurveHelper"],this._offset=(void 0!==e.offset?e.offset:1)*s,this._method=e.method,this._option=e.option,this._offsetFlattenError=_CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["PIXEL_TOLERANCE"]*s,this._option}next(){let i=this._inputGeometries.next();for(;i;){if(0===this._offset)return i;if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isExtent"])(i)){if("Rounded"===this._method&&this._offset>0){const t=[[i.xmin,i.ymin],[i.xmin,i.ymax],[i.xmax,i.ymax],[i.xmax,i.ymin],[i.xmin,i.ymin]],e=this._curveHelper.offset(t,this._offset,this._method,4,this._offsetFlattenError);return e?{rings:[e]}:null}if(Math.min(i.xmax-i.xmin,i.ymax-i.ymin)+2*this._offset>0)return{xmin:i.xmin-this._offset,xmax:i.xmax+this._offset,ymin:i.ymin-this._offset,ymax:i.ymax+this._offset}}if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isPolygon"])(i)){const t=[];for(const e of i.rings){const s=this._curveHelper.offset(e,this._offset,this._method,4,this._offsetFlattenError);s&&t.push(s)}if(t.length)return{rings:t}}if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isPolyline"])(i)){const t=[];for(const e of i.paths){const s=this._curveHelper.offset(e,this._offset,this._method,4,this._offsetFlattenError);s&&t.push(s)}if(t.length)return{paths:t}}i=this._inputGeometries.next()}return null}}


/***/ }),

/***/ "cG1k":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/placements/PlacementPolygonCenter.js ***!
  \************************************************************************************/
/*! exports provided: PlacementPolygonCenter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacementPolygonCenter", function() { return s; });
/* harmony import */ var _geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../geometry/support/boundsUtils.js */ "KLE9");
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../geometry/support/aaBoundingRect.js */ "kYAx");
/* harmony import */ var _CIMPlacements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CIMPlacements.js */ "WPSO");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class s{static local(){return null===s.instance&&(s.instance=new s),s.instance}execute(t,e,n){return new o(t,e,n)}}s.instance=null;class o{constructor(t,e,s){this._geometry=t,this._offsetX=void 0!==e.offsetX?e.offsetX*s:0,this._offsetY=void 0!==e.offsetY?e.offsetY*s:0,this._method=void 0!==e.method?e.method:"OnPolygon",this._internalPlacement=new _CIMPlacements_js__WEBPACK_IMPORTED_MODULE_2__["Placement"]}next(){const t=this._geometry;return this._geometry=null,t&&void 0!==t.rings?this._polygonCenter(t):null}_polygonCenter(n){let s=!1;switch(this._method){case"OnPolygon":default:case"CenterOfMass":case"BoundingBoxCenter":{const o=Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_1__["create"])();Object(_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_0__["getBoundsXY"])(o,n),this._internalPlacement.setTranslate((o[2]+o[0])/2+this._offsetX,(o[3]+o[1])/2-this._offsetY),s=!0;break}}return s?this._internalPlacement:null}}


/***/ }),

/***/ "e+Fw":
/*!***********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/collisions/BoundingBox.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../chunks/vec2f32.js */ "c46T");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class e{constructor(t,e,s,r){this.center=Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_1__["f"])(t,e),this.centerT=Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),this.halfWidth=s/2,this.halfHeight=r/2,this.width=s,this.height=r}get x(){return this.center[0]}get y(){return this.center[1]}get blX(){return this.center[0]+this.halfWidth}get blY(){return this.center[1]+this.halfHeight}get trX(){return this.center[0]-this.halfWidth}get trY(){return this.center[1]-this.halfHeight}get xmin(){return this.x-this.halfWidth}get xmax(){return this.x+this.halfWidth}get ymin(){return this.y-this.halfHeight}get ymax(){return this.y+this.halfHeight}set x(t){this.center[0]=t}set y(t){this.center[1]=t}clone(){return new e(this.x,this.y,this.width,this.height)}serialize(t){return t.writeF32(this.center[0]),t.writeF32(this.center[1]),t.push(this.width),t.push(this.height),t}findCollisionDelta(h,i=4){const e=Math.abs(h.centerT[0]-this.centerT[0]),s=Math.abs(h.centerT[1]-this.centerT[1]),r=(h.halfWidth+this.halfWidth+i)/e,n=(h.halfHeight+this.halfHeight+i)/s,a=Math.min(r,n);return Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["log2"])(a)}extend(t){const h=Math.min(this.xmin,t.xmin),i=Math.min(this.ymin,t.ymin),e=Math.max(this.xmax,t.xmax)-h,s=Math.max(this.ymax,t.ymax)-i,r=h+e/2,n=i+s/2;this.width=e,this.height=s,this.halfWidth=e/2,this.halfHeight=s/2,this.x=r,this.y=n}static deserialize(t){const h=t.readF32(),i=t.readF32(),s=t.readInt32(),r=t.readInt32();return new e(h,i,s,r)}}/* harmony default export */ __webpack_exports__["default"] = (e);


/***/ }),

/***/ "eT81":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/CIMSymbolHelper.js ***!
  \******************************************************************/
/*! exports provided: CIMSymbolHelper, OverrideHelper, SymbolHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CIMSymbolHelper", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverrideHelper", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolHelper", function() { return h; });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Color.js */ "nvBr");
/* harmony import */ var _CIMPlacements_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CIMPlacements.js */ "WPSO");
/* harmony import */ var _CIMSymbolDrawHelper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CIMSymbolDrawHelper.js */ "XunE");
/* harmony import */ var _packingUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./packingUtils.js */ "X4zr");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const n=Math.PI,l=n/2,m=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.symbols.cim.CIMSymbolHelper");function f(e,t){switch(t.type){case"CIMSymbolReference":{const r={type:"point",x:0,y:0};e.drawSymbol(t.symbol,r);break}case"CIMPointSymbol":{const r={type:"point",x:0,y:0};e.drawSymbol(t,r);break}case"CIMTextSymbol":break;case"CIMVectorMarker":{const r=new _CIMPlacements_js__WEBPACK_IMPORTED_MODULE_3__["Placement"];e.drawMarker(t,r);break}}return e.envelope()}class y{static getEnvelope(e){const t=new _CIMSymbolDrawHelper_js__WEBPACK_IMPORTED_MODULE_4__["EnvDrawHelper"];if(Array.isArray(e)){let r;for(const o of e)r?r.union(f(t,o)):r=f(t,o);return r}return f(t,e)}static getTextureAnchor(e){const t=this.getEnvelope(e);if(!t||t.width<=0||t.height<=0)return[0,0,0];const r=96/72,o=(t.x+.5*t.width)*r,a=-(t.y+.5*t.height)*r,s=t.width*r+2,i=t.height*r+2;return[o/s,a/i,i]}static rasterize(e,t,r,a=!0){const c=r||this.getEnvelope(t);if(!c||c.width<=0||c.height<=0)return[null,0,0,0,0];const n=96/72,l=(c.x+.5*c.width)*n,m=(c.y+.5*c.height)*n;e.width=c.width*n,e.height=c.height*n,r||(e.width+=2,e.height+=2);const f=e.getContext("2d"),y=_CIMSymbolDrawHelper_js__WEBPACK_IMPORTED_MODULE_4__["Transformation"].createScale(n,-n);y.translate(.5*e.width-l,.5*e.height+m);const h=new _CIMSymbolDrawHelper_js__WEBPACK_IMPORTED_MODULE_4__["CanvasDrawHelper"](f,y);switch(t.type){case"CIMPointSymbol":{const e={type:"point",x:0,y:0};h.drawSymbol(t,e);break}case"CIMVectorMarker":{const e=new _CIMPlacements_js__WEBPACK_IMPORTED_MODULE_3__["Placement"];h.drawMarker(t,e);break}}const S=f.getImageData(0,0,e.width,e.height),p=new Uint8Array(S.data);if(a){let e;for(let t=0;t<p.length;t+=4)e=p[t+3]/255,p[t]=p[t]*e,p[t+1]=p[t+1]*e,p[t+2]=p[t+2]*e}return[p,e.width,e.height,-l/e.width,-m/e.height]}static fromSimpleMarker(e){const t=50;let r,o;const a=e.style;if("circle"===a||"esriSMSCircle"===a){const e=.25;let a=Math.acos(1-e/t),s=Math.ceil(n/a/4);0===s&&(s=1),a=l/s,s*=4;const i=[];i.push([t,0]);for(let e=1;e<s;e++)i.push([t*Math.cos(e*a),-50*Math.sin(e*a)]);i.push([t,0]),r={rings:[i]},o={xmin:-50,ymin:-50,xmax:t,ymax:t}}else if("cross"===a||"esriSMSCross"===a){const e=0;r={rings:[[[e,t],[e,e],[t,e],[t,-e],[e,-e],[e,-50],[-e,-50],[-e,-e],[-50,-e],[-50,e],[-e,e],[-e,t],[e,t]]]},o={xmin:-50,ymin:-50,xmax:t,ymax:t}}else if("diamond"===a||"esriSMSDiamond"===a)r={rings:[[[-50,0],[0,t],[t,0],[0,-50],[-50,0]]]},o={xmin:-50,ymin:-50,xmax:t,ymax:t};else if("square"===a||"esriSMSSquare"===a)r={rings:[[[-50,-50],[-50,t],[t,t],[t,-50],[-50,-50]]]},o={xmin:-50,ymin:-50,xmax:t,ymax:t};else if("x"===a||"esriSMSX"===a){const e=0;r={rings:[[[0,e],[t-e,t],[t,t-e],[e,0],[t,e-t],[t-e,-50],[0,-e],[e-t,-50],[-50,e-t],[-e,0],[-50,t-e],[e-t,t],[0,e]]]},o={xmin:-50,ymin:-50,xmax:t,ymax:t}}else if("triangle"===a||"esriSMSTriangle"===a){const e=100*.5773502691896257,t=-e,a=2/3*100,s=a-100;r={rings:[[[t,s],[0,a],[e,s],[t,s]]]},o={xmin:t,ymin:s,xmax:e,ymax:a}}else"arrow"!==a&&"esriSMSArrow"!==a||(r={rings:[[[-50,50],[50,0],[-50,-50],[-33,-20],[-33,20],[-50,50]]]},o={xmin:-50,ymin:-50,xmax:t,ymax:t});let s;if(r&&o){const t=[{type:"CIMSolidFill",enable:!0,color:e.color}];e.outline&&t.push({type:"CIMSolidStroke",enable:!0,width:e.outline.width,color:e.outline.color});const a={type:"CIMPolygonSymbol",symbolLayers:t};s={type:"CIMPointSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,rotation:e.angle,size:e.size,offsetX:e.xoffset,offsetY:e.yoffset,frame:o,markerGraphics:[{type:"CIMMarkerGraphic",geometry:r,symbol:a}]}]}}return s}static fromCIMHatchFill(e){const t=void 0!==e.separation?e.separation:4,r=t/2;let o=this._getLineSymbolPeriod(e.lineSymbol)||4;for(;o<4;)o*=2;const a=o/2;return{type:"CIMVectorMarker",frame:{xmin:-a,xmax:a,ymin:-r,ymax:r},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{paths:[[[-a,0],[a,0]]]},symbol:e.lineSymbol}],size:t}}static _getLineSymbolPeriod(e){if(e){const t=this._getEffectsRepeat(e.effects);if(t)return t;if(e.symbolLayers)for(const t of e.symbolLayers){const e=this._getEffectsRepeat(t.effects);if(e)return e;if(t){const e=this._getPlacementRepeat(t.markerPlacement);if(e)return e}}}return 0}static _getEffectsRepeat(e){if(e)for(const t of e)if(t)switch(t.type){case"CIMGeometricEffectDashes":{const e=t.dashTemplate;if(e&&e.length){let t=0;for(const r of e)t+=r;return 1&e.length&&(t*=2),t}break}case"CIMGeometricEffectWave":return t.period;default:m.error(`unsupported geometric effect type ${t.type}`)}return 0}static _getPlacementRepeat(e){if(e)switch(e.type){case"CIMMarkerPlacementAlongLineSameSize":case"CIMMarkerPlacementAlongLineRandomSize":case"CIMMarkerPlacementAlongLineVariableSize":{const t=e.placementTemplate;if(t&&t.length){let e=0;for(const r of t)e+=r;return 1&t.length&&(e*=2),e}break}}return 0}static fromCIMInsidePolygon(e){const t=e.markerPlacement,r=t.stepX/2,o=t.stepY/2,a={xmin:-r,xmax:r,ymin:-o,ymax:o},s={type:e.type,...e};s.markerPlacement=null,s.anchorPoint=null;return{type:"CIMVectorMarker",frame:a,markerGraphics:[{type:"CIMMarkerGraphic",geometry:{x:0,y:0},symbol:{type:"CIMPointSymbol",symbolLayers:[s]}}],size:t.stepY}}static getFillColor(e){if(!e)return null;switch(e.type){case"CIMPolygonSymbol":if(e.symbolLayers)for(const t of e.symbolLayers){const e=y.getFillColor(t);if(null!=e)return e}break;case"CIMTextSymbol":return y.getFillColor(e.symbol);case"CIMSolidFill":return e.color}}static getStrokeColor(e){if(e)switch(e.type){case"CIMPolygonSymbol":case"CIMLineSymbol":if(e.symbolLayers)for(const t of e.symbolLayers){const e=y.getStrokeColor(t);if(void 0!==e)return e}break;case"CIMTextSymbol":return y.getStrokeColor(e.symbol);case"CIMSolidStroke":return e.color}}static getStrokeWidth(e){if(e)switch(e.type){case"CIMPolygonSymbol":case"CIMLineSymbol":if(e.symbolLayers)for(const t of e.symbolLayers){const e=y.getStrokeWidth(t);if(void 0!==e)return e}break;case"CIMTextSymbol":return y.getStrokeWidth(e.symbol);case"CIMSolidStroke":case"CIMGradientStroke":case"CIMPictureStroke":return e.width}}static getSize(e){if(e)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":{let t=0;if(e.symbolLayers)for(const r of e.symbolLayers){const e=y.getSize(r);e>t&&(t=e)}return t}case"CIMSolidStroke":case"CIMPictureStroke":case"CIMGradientStroke":return e.width;case"CIMCharacterMarker":case"CIMPictureMarker":case"CIMVectorMarker":return e.size}}static getMarkerScaleRatio(e){if(e)switch(e.type){case"CIMVectorMarker":if(!1!==e.scaleSymbolsProportionally&&e.frame){const t=e.frame.ymax-e.frame.ymin;return e.size/t}}return 1}}class h{static rasterizeSimpleFill(e,r,o){"solid"!==r&&"none"!==r&&"esriSFSSolid"!==r&&"esriSFSNull"!==r||console.error("Unexpected: style does not require rasterization");const a=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__["nextPowerOfTwo"])(Math.ceil(o)),s=this._isHorizontalOrVertical(r)?8*a:16*a,i=2*a;e.width=s,e.height=s;const c=e.getContext("2d");c.strokeStyle="#FFFFFF",c.lineWidth=a,c.beginPath(),"vertical"!==r&&"cross"!==r&&"esriSFSCross"!==r&&"esriSFSVertical"!==r||(c.moveTo(s/2,-i),c.lineTo(s/2,s+i)),"horizontal"!==r&&"cross"!==r&&"esriSFSCross"!==r&&"esriSFSHorizontal"!==r||(c.moveTo(-i,s/2),c.lineTo(s+i,s/2)),"forward-diagonal"!==r&&"diagonal-cross"!==r&&"esriSFSDiagonalCross"!==r&&"esriSFSForwardDiagonal"!==r||(c.moveTo(-i,-i),c.lineTo(s+i,s+i),c.moveTo(s-i,-i),c.lineTo(s+i,i),c.moveTo(-i,s-i),c.lineTo(i,s+i)),"backward-diagonal"!==r&&"diagonal-cross"!==r&&"esriSFSBackwardDiagonal"!==r&&"esriSFSDiagonalCross"!==r||(c.moveTo(s+i,-i),c.lineTo(-i,s+i),c.moveTo(i,-i),c.lineTo(-i,i),c.moveTo(s+i,s-i),c.lineTo(s-i,s+i)),c.stroke();const n=c.getImageData(0,0,e.width,e.height),l=new Uint8Array(n.data);let m;for(let e=0;e<l.length;e+=4)m=l[e+3]/255,l[e]=l[e]*m,l[e+1]=l[e+1]*m,l[e+2]=l[e+2]*m;return[l,e.width,e.height]}static rasterizeSimpleLine(e,t){let r;switch(t){case"butt":r="Butt";break;case"square":r="Square";break;default:r="Round"}const o="Butt"===r;let a;switch(e){case"dash":case"esriSLSDash":a=o?[4,3]:[3,4];break;case"dash-dot":case"esriSLSDashDot":a=o?[4,3,1,3]:[3,4,0,4];break;case"dot":case"esriSLSDot":a=o?[1,3]:[0,4];break;case"long-dash":case"esriSLSLongDash":a=o?[8,3]:[7,4];break;case"long-dash-dot":case"esriSLSLongDashDot":a=o?[8,3,1,3]:[7,4,0,4];break;case"long-dash-dot-dot":case"esriSLSDashDotDot":a=o?[8,3,1,3,1,3]:[7,4,0,4,0,4];break;case"short-dash":case"esriSLSShortDash":a=o?[4,1]:[3,2];break;case"short-dash-dot":case"esriSLSShortDashDot":a=o?[4,1,1,1]:[3,2,0,2];break;case"short-dash-dot-dot":case"esriSLSShortDashDotDot":a=o?[4,1,1,1,1,1]:[3,2,0,2,0,2];break;case"short-dot":case"esriSLSShortDot":a=o?[1,1]:[0,2];break;case"solid":case"esriSLSSolid":case"none":m.error("Unexpected: style does not require rasterization"),a=[0,0];break;default:m.error(`Tried to rasterize SLS, but found an unexpected style: ${e}!`),a=[0,0]}return this.rasterizeDash(a,r)}static rasterizeDash(e,t){const r="Butt"===t,o="Square"===t,a=!r&&!o,s=15;let i=0;for(const t of e)i+=t;const n=i*s,l=31*n,m=new Float32Array(l),f=a?225:s;for(let e=0;e<l;++e)m[e]=f;const y=7.5;let h=0,S=0,p=!0;for(const t of e){h=S,S+=t*s;let e=h;for(;e<S;){let t=0;for(;t<31;){const s=t*n+e,i=a?(t-15)*(t-15):Math.abs(t-15);m[s]=p?r?Math.max(Math.max(h+y-e,i),Math.max(e-S+y,i)):i:a?Math.min((e-h)*(e-h)+i,(e-S)*(e-S)+i):o?Math.min(Math.max(e-h,i),Math.max(S-e,i)):Math.min(Math.max(e-h+y,i),Math.max(S+y-e,i)),t++}e++}p=!p}const d=m.length,M=new Uint8Array(4*d);for(let e=0;e<d;++e){const t=(a?Math.sqrt(m[e]):m[e])/s;Object(_packingUtils_js__WEBPACK_IMPORTED_MODULE_5__["packFloatRGBA"])(t,M,4*e)}return[M,n,31]}static _isHorizontalOrVertical(e){return"vertical"===e||"horizontal"===e||"cross"===e||"esriSFSCross"===e||"esriSFSVertical"===e||"esriSFSHorizontal"===e}}class S{static findApplicableOverrides(e,t,r){if(t){if(e.primitiveName){let o=!1;for(const t of r)if(t.primitiveName===e.primitiveName){o=!0;break}if(!o)for(const o of t)o.primitiveName===e.primitiveName&&r.push(o)}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(const o of e.effects)S.findApplicableOverrides(o,t,r);if(e.symbolLayers)for(const o of e.symbolLayers)S.findApplicableOverrides(o,t,r);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMSolidFill":case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMVectorMarker":case"CIMCharacterMarker":case"CIMPictureMarker":if(e.effects)for(const o of e.effects)S.findApplicableOverrides(o,t,r);if(e.markerPlacement&&S.findApplicableOverrides(e.markerPlacement,t,r),"CIMVectorMarker"===e.type){if(e.markerGraphics)for(const o of e.markerGraphics)S.findApplicableOverrides(o,t,r),S.findApplicableOverrides(o.symbol,t,r)}else"CIMCharacterMarker"===e.type?S.findApplicableOverrides(e.symbol,t,r):"CIMHatchFill"===e.type&&S.findApplicableOverrides(e.lineSymbol,t,r)}}}static applyOverrides(e,t,r,o){if(!t)return;if(e.primitiveName)for(const s of t)if(s.primitiveName===e.primitiveName){const t=(a=s.propertyName)?a.charAt(0).toLowerCase()+a.substr(1):a;if(o&&o.push({cim:e,nocapPropertyName:t,value:e[t]}),s.expression&&(s.value=S.toValue(s.propertyName,s.expression)),r){let t=!1;for(const o of r)o.primitiveName===e.primitiveName&&(t=!0);t||r.push(s)}e[t]=s.value}var a;switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(const a of e.effects)S.applyOverrides(a,t,r,o);if(e.symbolLayers)for(const a of e.symbolLayers)S.applyOverrides(a,t,r,o);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMSolidFill":case"CIMVectorMarker":if(e.effects)for(const a of e.effects)S.applyOverrides(a,t,r,o);if("CIMVectorMarker"===e.type&&e.markerGraphics)for(const a of e.markerGraphics)S.applyOverrides(a,t,r,o),S.applyOverrides(a.symbol,t,r,o)}}static restoreOverrides(e){for(const t of e)t.cim[t.nocapPropertyName]=t.value}static buildOverrideKey(e){let t="";for(const r of e)void 0!==r.value&&(t+=`${r.primitiveName}${r.propertyName}${JSON.stringify(r.value)}`);return t}static toValue(e,t){if("DashTemplate"===e)return t.split(" ").map((e=>Number(e)));if("Color"===e){const e=new _Color_js__WEBPACK_IMPORTED_MODULE_2__["default"](t).toRgba();return e[3]*=255,e}return t}}


/***/ }),

/***/ "hvLT":
/*!******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/visualVariables/support/sizeVariableUtils.js ***!
  \******************************************************************************************/
/*! exports provided: getInputValueType, getTransformationType, isSizeVariable, isValidNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInputValueType", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransformationType", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSizeVariable", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidNumber", function() { return e; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function n(n){return n&&"esri.renderers.visualVariables.SizeVariable"===n.declaredClass}function e(n){return null!=n&&!isNaN(n)&&isFinite(n)}function i(n){return n.valueExpression?"expression":n.field&&"string"==typeof n.field?"field":"unknown"}function l(n,e){const l=e||i(n),a=n.valueUnit||"unknown";return"unknown"===l?"constant":n.stops?"stops":null!=n.minSize&&null!=n.maxSize&&null!=n.minDataValue&&null!=n.maxDataValue?"clamped-linear":"unknown"===a?null!=n.minSize&&null!=n.minDataValue?n.minSize&&n.minDataValue?"proportional":"additive":"identity":"real-world-size"}


/***/ }),

/***/ "k0QX":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/CIMOperators.js ***!
  \***************************************************************/
/*! exports provided: getEffectOperator, getPlacementOperator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEffectOperator", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlacementOperator", function() { return A; });
/* harmony import */ var _effects_EffectAddControlPoints_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./effects/EffectAddControlPoints.js */ "tdjz");
/* harmony import */ var _effects_EffectArrow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./effects/EffectArrow.js */ "E/5U");
/* harmony import */ var _effects_EffectBuffer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./effects/EffectBuffer.js */ "PiQZ");
/* harmony import */ var _effects_EffectCut_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./effects/EffectCut.js */ "vxUa");
/* harmony import */ var _effects_EffectDashes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./effects/EffectDashes.js */ "GQfk");
/* harmony import */ var _effects_EffectDonut_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./effects/EffectDonut.js */ "8YkW");
/* harmony import */ var _effects_EffectJog_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./effects/EffectJog.js */ "l263");
/* harmony import */ var _effects_EffectMove_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./effects/EffectMove.js */ "QPyG");
/* harmony import */ var _effects_EffectOffset_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./effects/EffectOffset.js */ "agE9");
/* harmony import */ var _effects_EffectReverse_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./effects/EffectReverse.js */ "Q/g2");
/* harmony import */ var _effects_EffectRotate_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./effects/EffectRotate.js */ "J8sa");
/* harmony import */ var _effects_EffectScale_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./effects/EffectScale.js */ "Sld3");
/* harmony import */ var _effects_EffectWave_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./effects/EffectWave.js */ "8Fik");
/* harmony import */ var _placements_PlacementAlongLineSameSize_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./placements/PlacementAlongLineSameSize.js */ "6BGx");
/* harmony import */ var _placements_PlacementAtExtremities_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./placements/PlacementAtExtremities.js */ "01wM");
/* harmony import */ var _placements_PlacementAtRatioPositions_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./placements/PlacementAtRatioPositions.js */ "Nl1v");
/* harmony import */ var _placements_PlacementInsidePolygon_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./placements/PlacementInsidePolygon.js */ "pckB");
/* harmony import */ var _placements_PlacementOnLine_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./placements/PlacementOnLine.js */ "CUuX");
/* harmony import */ var _placements_PlacementOnVertices_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./placements/PlacementOnVertices.js */ "MbPc");
/* harmony import */ var _placements_PlacementPolygonCenter_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./placements/PlacementPolygonCenter.js */ "cG1k");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function G(p){if(!p)return null;switch(p.type){case"CIMGeometricEffectAddControlPoints":return _effects_EffectAddControlPoints_js__WEBPACK_IMPORTED_MODULE_0__["EffectAddControlPoints"].local();case"CIMGeometricEffectArrow":return _effects_EffectArrow_js__WEBPACK_IMPORTED_MODULE_1__["EffectArrow"].local();case"CIMGeometricEffectBuffer":return _effects_EffectBuffer_js__WEBPACK_IMPORTED_MODULE_2__["EffectBuffer"].local();case"CIMGeometricEffectCut":return _effects_EffectCut_js__WEBPACK_IMPORTED_MODULE_3__["EffectCut"].local();case"CIMGeometricEffectDashes":return _effects_EffectDashes_js__WEBPACK_IMPORTED_MODULE_4__["EffectDashes"].local();case"CIMGeometricEffectDonut":return _effects_EffectDonut_js__WEBPACK_IMPORTED_MODULE_5__["EffectDonut"].local();case"CIMGeometricEffectJog":return _effects_EffectJog_js__WEBPACK_IMPORTED_MODULE_6__["EffectJog"].local();case"CIMGeometricEffectMove":return _effects_EffectMove_js__WEBPACK_IMPORTED_MODULE_7__["EffectMove"].local();case"CIMGeometricEffectOffset":return _effects_EffectOffset_js__WEBPACK_IMPORTED_MODULE_8__["EffectOffset"].local();case"CIMGeometricEffectReverse":return _effects_EffectReverse_js__WEBPACK_IMPORTED_MODULE_9__["EffectReverse"].local();case"CIMGeometricEffectRotate":return _effects_EffectRotate_js__WEBPACK_IMPORTED_MODULE_10__["EffectRotate"].local();case"CIMGeometricEffectScale":return _effects_EffectScale_js__WEBPACK_IMPORTED_MODULE_11__["EffectScale"].local();case"CIMGeometricEffectWave":return _effects_EffectWave_js__WEBPACK_IMPORTED_MODULE_12__["EffectWave"].local()}return null}function A(e){if(!e)return null;switch(e.type){case"CIMMarkerPlacementAlongLineSameSize":return _placements_PlacementAlongLineSameSize_js__WEBPACK_IMPORTED_MODULE_13__["PlacementAlongLineSameSize"].local();case"CIMMarkerPlacementAtExtremities":return _placements_PlacementAtExtremities_js__WEBPACK_IMPORTED_MODULE_14__["PlacementAtExtremities"].local();case"CIMMarkerPlacementAtRatioPositions":return _placements_PlacementAtRatioPositions_js__WEBPACK_IMPORTED_MODULE_15__["PlacementAtRatioPositions"].local();case"CIMMarkerPlacementInsidePolygon":return _placements_PlacementInsidePolygon_js__WEBPACK_IMPORTED_MODULE_16__["PlacementInsidePolygon"].local();case"CIMMarkerPlacementOnLine":return _placements_PlacementOnLine_js__WEBPACK_IMPORTED_MODULE_17__["PlacementOnLine"].local();case"CIMMarkerPlacementOnVertices":return _placements_PlacementOnVertices_js__WEBPACK_IMPORTED_MODULE_18__["PlacementOnVertices"].local();case"CIMMarkerPlacementPolygonCenter":return _placements_PlacementPolygonCenter_js__WEBPACK_IMPORTED_MODULE_19__["PlacementPolygonCenter"].local()}return null}


/***/ }),

/***/ "l263":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/effects/EffectJog.js ***!
  \********************************************************************/
/*! exports provided: EffectJog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectJog", function() { return s; });
/* harmony import */ var _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CIMCursor.js */ "tqcG");
/* harmony import */ var _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CurveHelper.js */ "/vtc");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class s{static local(){return null===s.instance&&(s.instance=new s),s.instance}execute(t,i,s){return new e(t,i,s)}}s.instance=null;class e extends _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["PathGeometryCursor"]{constructor(t,s,e){super(t,!1,!0),this._curveHelper=new _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["CurveHelper"],this._length=(void 0!==s.length?s.length:20)*e,this._angle=void 0!==s.angle?s.angle:225,this._position=void 0!==s.position?s.position:50,this._length<0&&(this._length=-this._length),this._position<20&&(this._position=20),this._position>80&&(this._position=80),this._mirror=!1}processPath(t){if(this._curveHelper.isEmpty(t,!1))return null;const i=t[0],s=t[t.length-1],e=[s[0]-i[0],s[1]-i[1]];this._curveHelper.normalize(e);const n=[i[0]+(s[0]-i[0])*this._position/100,i[1]+(s[1]-i[1])*this._position/100],h=Math.cos((90-this._angle)/180*Math.PI);let r=Math.sin((90-this._angle)/180*Math.PI);this._mirror&&(r=-r),this._mirror=!this._mirror;return{paths:[[i,[n[0]-this._length/2*h,n[1]-this._length/2*r],[n[0]+this._length/2*h,n[1]+this._length/2*r],s]]}}}


/***/ }),

/***/ "m662":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/support/clusterUtils.js ***!
  \***************************************************************************/
/*! exports provided: createClusterCountSizeVariable, createClusterRenderer, findSizeVV, hasClusterCountVV, isClusterCompatibleRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createClusterCountSizeVariable", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createClusterRenderer", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findSizeVV", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasClusterCountVV", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isClusterCompatibleRenderer", function() { return m; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/Error.js */ "zlDU");
/* harmony import */ var _renderers_visualVariables_support_SizeStop_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../renderers/visualVariables/support/SizeStop.js */ "moES");
/* harmony import */ var _renderers_visualVariables_SizeVariable_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../renderers/visualVariables/SizeVariable.js */ "w/y1");
/* harmony import */ var _core_MD5_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/MD5.js */ "fvq6");
/* harmony import */ var _engine_LevelDependentSizeVariable_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../engine/LevelDependentSizeVariable.js */ "5x/F");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const o=_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.views.2d.layers.support.clusterUtils");_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"].add("esri-cluster-arcade-enabled",1);const u=Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-cluster-arcade-enabled"),c=(e,t,r,s)=>{const a=t.clone();if(!m(a))return a;if(r.fields)for(const i of r.fields)v(e,i);if("visualVariables"in a){const t=(a.visualVariables||[]).filter((e=>"$view.scale"!==e.valueExpression)),n=d(t);t.forEach((i=>{"rotation"===i.type?i.field?i.field=S(e,i.field,"avg_angle"):i.valueExpression&&(i.field=x(e,i.valueExpression,"avg_angle"),i.valueExpression=null):i.normalizationField?(i.field=S(e,i.field,"norm",i.normalizationField),i.normalizationField=null):i.field?i.field=S(e,i.field,"avg"):(i.field=x(e,i.valueExpression,"avg"),i.valueExpression=null)})),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(n)&&!p(t)&&(t.push(f(r,s)),a.dynamicClusterSize=!0),a.visualVariables=t}switch(a.type){case"simple":break;case"unique-value":a.field?a.field=S(e,a.field,"mode"):a.valueExpression&&(a.field=x(e,a.valueExpression,"mode"),a.valueExpression=null);break;case"class-breaks":a.normalizationField?(a.field=S(e,a.field,"norm",a.normalizationField),a.normalizationField=null):a.field?a.field=S(e,a.field,"avg"):(a.field=x(e,a.valueExpression,"avg"),a.valueExpression=null)}return a},d=e=>{for(const i of e)if("size"===i.type)return i;return null},p=e=>{for(const i of e)if("cluster_count"===i.field)return!0;return!1},f=(e,t)=>{const r=[new _renderers_visualVariables_support_SizeStop_js__WEBPACK_IMPORTED_MODULE_4__["default"]({value:0,size:0}),new _renderers_visualVariables_support_SizeStop_js__WEBPACK_IMPORTED_MODULE_4__["default"]({value:1})];if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(t))return new _renderers_visualVariables_SizeVariable_js__WEBPACK_IMPORTED_MODULE_5__["default"]({field:"cluster_count",stops:[...r,new _renderers_visualVariables_support_SizeStop_js__WEBPACK_IMPORTED_MODULE_4__["default"]({value:2,size:0})]});const n=Object.keys(t).reduce(((i,a)=>({...i,[a]:[...r,new _renderers_visualVariables_support_SizeStop_js__WEBPACK_IMPORTED_MODULE_4__["default"]({value:Math.max(2,t[a].minValue),size:e.clusterMinSize}),new _renderers_visualVariables_support_SizeStop_js__WEBPACK_IMPORTED_MODULE_4__["default"]({value:Math.max(3,t[a].maxValue),size:e.clusterMaxSize})]})),{});return new _engine_LevelDependentSizeVariable_js__WEBPACK_IMPORTED_MODULE_7__["LevelDependentSizeVariable"]({field:"cluster_count",levels:n})},m=e=>{const i=i=>o.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("Unsupported-renderer",i,{renderer:e}));if("unique-value"===e.type){if(e.field2||e.field3)return i("FeatureReductionCluster does not support multi-field UniqueValueRenderers"),!1}else if("class-breaks"===e.type){if(e.normalizationField){const t=e.normalizationType;if("field"!==t)return i(`FeatureReductionCluster does not support a normalizationType of ${t}`),!1}}else if("simple"!==e.type)return i(`FeatureReductionCluster does not support renderers of type ${e.type}`),!1;if(!u){if("valueExpression"in e&&e.valueExpression)return i("FeatureReductionCluster does not currently support renderer.valueExpression. Support will be added in a future release"),!1;if(("visualVariables"in e&&e.visualVariables||[]).some((e=>!(!("valueExpression"in e)||!e.valueExpression))))return i("FeatureReductionCluster does not currently support visualVariables with a valueExpression. Support will be added in a future release"),!1}return!0};function v(e,i){const{name:t,outStatistic:s}=i,{onStatisticField:a,onStatisticValueExpression:l,statisticType:u}=s;if(l){const i=Object(_core_MD5_js__WEBPACK_IMPORTED_MODULE_6__["createMD5Hash"])(l.toLowerCase());e.push({name:t,outStatistic:{onStatisticField:i,onStatisticValueExpression:l,statisticType:u}})}else a?e.push({name:t,outStatistic:{onStatisticField:a,statisticType:u}}):o.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("mapview-unsupported-field","Unable to handle field",{field:i}))}function x(e,i,t){const r=Object(_core_MD5_js__WEBPACK_IMPORTED_MODULE_6__["createMD5Hash"])(i),s="mode"===t?`cluster_type_${r}`:`cluster_avg_${r}`;return e.some((e=>e.name===s))||e.push({name:s,outStatistic:{onStatisticField:r,onStatisticValueExpression:i,statisticType:t}}),s}function S(e,i,t,r){if("cluster_count"===i||e.some((e=>e.name===i)))return i;const s=function(e,i,t){switch(e){case"avg":case"avg_angle":return`cluster_avg_${i}`;case"mode":return`cluster_type_${i}`;case"norm":{const e=t,r="field",s=i.toLowerCase()+",norm:"+r+","+e.toLowerCase();return"cluster_avg_"+Object(_core_MD5_js__WEBPACK_IMPORTED_MODULE_6__["createMD5Hash"])(s)}}}(t,i,r);return e.some((e=>e.name===s))||("norm"===t?e.push({name:s,outStatistic:{onStatisticField:i,onStatisticNormalizationField:r,statisticType:t}}):e.push({name:s,outStatistic:{onStatisticField:i,statisticType:t}})),s}


/***/ }),

/***/ "owVx":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/schemaUtils.js ***!
  \***************************************************************************/
/*! exports provided: addAggregateFields, createMatcherSchema, createSchema, createSymbolSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAggregateFields", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMatcherSchema", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSchema", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSymbolSchema", function() { return v; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/lang.js */ "f/qv");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _chunks_symbols_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../chunks/symbols.js */ "nNR5");
/* harmony import */ var _support_clusterUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../support/clusterUtils.js */ "m662");
/* harmony import */ var _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../engine/webgl/enums.js */ "yE7X");
/* harmony import */ var _engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../engine/webgl/materialKey/MaterialKey.js */ "GMaR");
/* harmony import */ var _engine_webgl_Utils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../engine/webgl/Utils.js */ "yN2G");
/* harmony import */ var _engine_webgl_util_vvFlagUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../engine/webgl/util/vvFlagUtils.js */ "a8c1");
/* harmony import */ var _support_rendererUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./support/rendererUtils.js */ "tDOP");
/* harmony import */ var _support_util_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../support/util.js */ "RaXU");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const g=_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger("esri.views.2d.layers.features.schemaUtils"),b={esriGeometryPoint:["above-right","above-center","above-left","center-center","center-left","center-right","below-center","below-left","below-right"],esriGeometryPolygon:["always-horizontal"],esriGeometryPolyline:["center-along"],esriGeometryMultipoint:null};function h(e){return Object(_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_9__["hydrateMaterialKey"])(e)}function x(e){switch(e.type){case"line-marker":var t;return{type:"line-marker",color:null==(t=e.color)?void 0:t.toJSON(),placement:e.placement,style:e.style};default:return Object(_chunks_symbols_js__WEBPACK_IMPORTED_MODULE_6__["f"])(e.toJSON()).toJSON()}}function v(e,t,r){if(!e)return null;let n=0,l=!1;switch(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(t)&&"visualVariables"in t&&(n=Object(_engine_webgl_util_vvFlagUtils_js__WEBPACK_IMPORTED_MODULE_11__["getVVFlags"])(t.visualVariables||[]),l="dot-density"===t.type),e.type){case"simple-fill":case"picture-fill":return function(e,t,i,r){const n=Object(_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_9__["createMaterialKey"])(_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_8__["WGLGeometryType"].FILL,t,!1,i),l=r?h(n):n,s=e.clone(),a=s.outline;s.outline=null;const o=[],c={materialKey:l,hash:s.hash(),...x(s)};if(o.push(c),a){const e=Object(_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_9__["createMaterialKey"])(_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_8__["WGLGeometryType"].LINE,t,!0,!1),i={materialKey:r?h(e):e,hash:a.hash(),...x(a)};o.push(i)}return{type:"composite-symbol",layers:o,hash:o.reduce(((e,t)=>t.hash+e),"")}}(e,n,l,r);case"simple-marker":case"picture-marker":return function(e,t,i){const r=Object(_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_9__["createMaterialKey"])(_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_8__["WGLGeometryType"].MARKER,t,!1,!1),n=i?h(r):r,l=x(e);return{materialKey:n,hash:e.hash(),...l,angle:e.angle}}(e,n,r);case"simple-line":return function(e,t,i){const r=Object(_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_9__["createMaterialKey"])(_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_8__["WGLGeometryType"].LINE,t,!1,!1),n=i?h(r):r,l=e.clone(),s=l.marker;l.marker=null;const a=[];if(a.push({materialKey:n,hash:l.hash(),...x(l)}),s){var o;const e=Object(_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_9__["createMaterialKey"])(_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_8__["WGLGeometryType"].MARKER,t,!1,!1),r=i?h(e):e;s.color=null!=(o=s.color)?o:l.color,a.push({materialKey:r,hash:s.hash(),lineWidth:l.width,...x(s)})}return{type:"composite-symbol",layers:a,hash:a.reduce(((e,t)=>t.hash+e),"")}}(e,n,r);case"text":return function(e,t,i){const r=Object(_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_9__["createMaterialKey"])(_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_8__["WGLGeometryType"].TEXT,t,!1,!1),n=i?h(r):r,l=x(e);return{materialKey:n,hash:e.hash(),...l,angle:e.angle}}(e,n,r);case"label":return function(e,t,i){const r=Object(_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_9__["createMaterialKey"])(_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_8__["WGLGeometryType"].LABEL,t,!1,!1,e.labelPlacement);return{materialKey:i?h(r):r,hash:e.hash(),...e.toJSON(),labelPlacement:e.labelPlacement}}(e,n,r);case"cim":return{type:"cim",rendererKey:n,data:e.data};case"web-style":return{...x(e),type:"web-style",hash:e.hash(),rendererKey:n};default:throw new Error(`symbol not supported ${e.type}`)}}function w(e,i){const r=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_1__["clone"])(e);return r.some((e=>function(e,t){const i=e.labelPlacement,r=b[t];if(!e.symbol)return g.warn("No LabelClass symbol specified."),!0;if(!r)return g.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("mapview-labeling:unsupported-geometry-type",`Unable to create labels for Feature Layer, ${t} is not supported`)),!0;if(!r.some((e=>e===i))){const n=r[0];i&&g.warn(`Found invalid label placement type ${i} for ${t}. Defaulting to ${n}`),e.labelPlacement=n}return!1}(e,i)))?[]:r}function E(t){return Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-2d-update-debug")&&console.debug("Created new schema",I(t,!0)),I(t)}function I(e,t=!1){try{var i,r;const n=function(e,t=!1){const i=new Array;return i.push(function(e,t,i=!1){const r={indexCount:0,fields:{}},n="featureReduction"in e&&e.featureReduction,s=n?"aggregate":"feature";switch(e.renderer.type){case"heatmap":{const{blurRadius:t,fieldOffset:i,field:n}=e.renderer;return{type:"heatmap",aggregateFields:[],attributes:r,target:s,storage:null,mesh:{blurRadius:t,fieldOffset:i,field:z(r,{target:s,field:n,resultType:"numeric"}).field}}}default:{const t=[],a="aggregate"===s?Object(_support_clusterUtils_js__WEBPACK_IMPORTED_MODULE_7__["createClusterRenderer"])(t,e.renderer,n,null):e.renderer;R(r,t);const u=j(r,s,a,i),d=function(e,t,i){switch(i.type){case"dot-density":return function(e,t,i){if(!i||!i.length)return{type:"dot-density",mapping:[],target:t};return{type:"dot-density",mapping:i.map(((i,r)=>{const{field:n,fieldIndex:l}=z(e,{valueExpression:i.valueExpression,field:i.field,resultType:"numeric",target:t});return{binding:r,field:n,fieldIndex:l}})),target:t}}(e,t,i.attributes);case"simple":case"class-breaks":case"unique-value":return function(e,t,i){if(!i||!i.length)return{type:"visual-variable",mapping:[],target:t};const r={storage:!0},n="numeric";return{type:"visual-variable",mapping:Object(_support_rendererUtils_js__WEBPACK_IMPORTED_MODULE_12__["simplifyVisualVariables"])(i).map((i=>{var l;const s=Object(_engine_webgl_Utils_js__WEBPACK_IMPORTED_MODULE_10__["getVVType"])(i.type),{field:a,fieldIndex:o}=z(e,{target:t,valueExpression:i.valueExpression,field:i.field,context:r,resultType:n});switch(i.type){case"size":return"$view.scale"===i.valueExpression?null:{type:"size",binding:s,field:a,fieldIndex:o,normalizationField:z(e,{target:t,field:i.normalizationField,context:r,resultType:n}).field,valueRepresentation:null!=(l=i.valueRepresentation)?l:null};case"color":return{type:"color",binding:s,field:a,fieldIndex:o,normalizationField:z(e,{target:t,field:i.normalizationField,context:r,resultType:n}).field};case"opacity":return{type:"opacity",binding:s,field:a,fieldIndex:o,normalizationField:z(e,{target:t,field:i.normalizationField,context:r,resultType:n}).field};case"rotation":return{type:"rotation",binding:s,field:a,fieldIndex:o}}})).filter((e=>e)),target:t}}(e,t,i.visualVariables);case"heatmap":case"dictionary":return null}}(r,s,a),c=Object(_support_util_js__WEBPACK_IMPORTED_MODULE_13__["toJSONGeometryType"])(e.geometryType);let p=e.labelsVisible&&e.labelingInfo||[],g=[];if(n){if("selection"===n.type)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("ValidationError","Mapview does not support `selection` reduction type",n);g=n&&n.labelsVisible&&n.labelingInfo||[]}p=w(p,c),g=w(g,c);let b=0;const h=[...p.map((e=>V(a,r,e,"feature",b++,i))),...g.map((e=>V(a,r,e,"aggregate",b++,i)))];return{type:"symbol",target:s,attributes:r,aggregateFields:t,storage:d,mesh:{matcher:u,labels:h}}}}}(e,t)),i}(e,t),a={};n.map((t=>function(e,t,i){switch(i.target){case"feature":return void T(e,S(t),i);case"aggregate":{const r=t.featureReduction;if("selection"===r.type)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("ValidationError","Mapview does not support `selection` reduction type",r);return T(e,S(t),i),void function(e,t,i){e.aggregate||(e.aggregate={name:"aggregate",input:"feature",filters:null,attributes:{},params:{clusterRadius:Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_5__["pt2px"])(t.clusterRadius/2),clusterPixelBuffer:64*Math.ceil(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_5__["pt2px"])(t.clusterMaxSize)/64),fields:i.aggregateFields}});F(e.aggregate,i.attributes.fields)}(e,r,i)}}}(a,e,t)));return{source:{definitionExpression:e.definitionExpression,fields:e.fields.map((e=>e.toJSON())),gdbVersion:e.gdbVersion,historicMoment:null==(i=e.historicMoment)?void 0:i.getTime(),outFields:e.availableFields,pixelBuffer:e.pixelBuffer,spatialReference:e.spatialReference.toJSON(),timeExtent:null==(r=e.timeExtent)?void 0:r.toJSON()},attributes:{fields:{},indexCount:0},processors:n,targets:a}}catch(e){if("ValidationError"===e.fieldName)return g.error(e),null;throw e}}function F(e,t){for(const i in t){const r=t[i];if(r.target!==e.name)continue;const n=e.attributes[i];n?(n.context.mesh=n.context.mesh||r.context.mesh,n.context.storage=n.context.storage||r.context.storage):e.attributes[i]=r}return e}function S(e){var t,i,r,n,l;return[null!=(t=null==(i=e.filter)?void 0:i.toJSON())?t:null,null!=(r=null==(n=e.effect)||null==(l=n.filter)?void 0:l.toJSON())?r:null]}function T(e,t,i){return e.feature||(e.feature={name:"feature",input:"source",filters:t,attributes:{}}),F(e.feature,i.attributes.fields),e}function z(e,t){return t.field?N(e,{...t,type:"field",field:t.field}):t.valueExpression?N(e,{...t,type:"expression",valueExpression:t.valueExpression}):{field:null,fieldIndex:null}}function N(e,t){switch(t.type){case"expression":{const i=t.valueExpression;if(!e.fields[i]){const r=e.indexCount++;e.fields[i]={...t,name:i,fieldIndex:r}}return{fieldIndex:e.fields[i].fieldIndex}}case"label-expression":{const i=JSON.stringify(t.label);if(!e.fields[i]){const r=e.indexCount++;e.fields[i]={...t,name:i,fieldIndex:r}}return{fieldIndex:e.fields[i].fieldIndex}}case"field":{const i=t.field;return"aggregate"===t.target&&e.fields[i]||(e.fields[i]={...t,name:i}),{field:i}}case"statistic":return e.fields[t.name]={...t},{field:t.name}}}function V(e,t,i,r,n,l=!1){const s=N(t,{type:"label-expression",target:r,context:{mesh:!0},resultType:"string",label:{labelExpression:i.labelExpression,labelExpressionInfo:i.labelExpressionInfo?{expression:i.labelExpressionInfo.expression}:null,symbol:!!i.symbol,where:i.where}}),{fieldIndex:a}=s;return{...v(i,e,l),fieldIndex:a,target:r,index:n}}function R(e,t){const i={mesh:!0,storage:!0};for(const r of t){const{name:t,outStatistic:n}=r,{statisticType:l,onStatisticField:s}=n;let a=null,o=null,u=null;const d="numeric",c="feature";if("onStatisticValueExpression"in n){o=N(e,{type:"expression",target:c,valueExpression:n.onStatisticValueExpression,resultType:d}).fieldIndex}else if("onStatisticNormalizationField"in n){a=N(e,{type:"field",target:c,field:s,resultType:d}).field,u=n.onStatisticNormalizationField}else{a=N(e,{type:"field",target:c,field:s,resultType:d}).field}N(e,{type:"statistic",target:"aggregate",name:t,context:i,inField:a,inNormalizationField:u,inFieldIndex:o,statisticType:l})}}function j(e,t,i,n=!1){const s=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["unwrapOr"])(e,{indexCount:0,fields:{}});switch(i.type){case"simple":case"dot-density":return function(e,t,i,r=!1){const n=t.getSymbols();return{type:"simple",symbol:v(n.length?n[0]:null,t,r),isDotDensity:i}}(0,i,"dot-density"===i.type,n);case"class-breaks":return function(e,t,i,r=!1){const n={mesh:!0,use:"renderer.field"},l=i.backgroundFillSymbol,{field:s,fieldIndex:a}=z(e,{target:t,field:i.field,valueExpression:i.valueExpression,resultType:"numeric",context:n}),o=i.normalizationType,u="log"===o?"esriNormalizeByLog":"percent-of-total"===o?"esriNormalizeByPercentOfTotal":"field"===o?"esriNormalizeByField":null,d=i.classBreakInfos.map((e=>({symbol:v(e.symbol,i,r),min:e.minValue,max:e.maxValue}))).sort(((e,t)=>e.min-t.min));return{type:"interval",attributes:e.fields,field:s,fieldIndex:a,backgroundFillSymbol:v(l,i,r),defaultSymbol:v(i.defaultSymbol,i,r),intervals:d,normalizationField:i.normalizationField,normalizationTotal:i.normalizationTotal,normalizationType:u,isMaxInclusive:i.isMaxInclusive}}(s,t,i,n);case"unique-value":return function(e,t,i,r=!1){const n=[],s=i.backgroundFillSymbol,a={target:t,context:{mesh:!0},resultType:"string"};if(i.field&&"string"!=typeof i.field)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("ValidationError","Expected renderer.field to be a string",i);const{field:o,fieldIndex:u}=z(e,{...a,field:i.field,valueExpression:i.valueExpression});for(const e of i.uniqueValueInfos)n.push({value:""+e.value,symbol:v(e.symbol,i,r)});return{type:"map",attributes:e.fields,field:o,fieldIndex:u,field2:z(e,{...a,field:i.field2}).field,field3:z(e,{...a,field:i.field3}).field,fieldDelimiter:i.fieldDelimiter,backgroundFillSymbol:v(s,i),defaultSymbol:v(i.defaultSymbol,i),map:n}}(s,t,i,n);case"dictionary":return function(e,t,i=!1){return{type:"dictionary",renderer:t.toJSON()}}(0,i,n)}}


/***/ }),

/***/ "pckB":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/placements/PlacementInsidePolygon.js ***!
  \************************************************************************************/
/*! exports provided: PlacementInsidePolygon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacementInsidePolygon", function() { return s; });
/* harmony import */ var _CIMPlacements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CIMPlacements.js */ "WPSO");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class s{static local(){return null===s.instance&&(s.instance=new s),s.instance}execute(t,s,h){return new i(t,s,h)}}s.instance=null;class i{constructor(s,i,h){if(this._xMin=0,this._xMax=0,this._yMin=0,this._yMax=0,this._currentX=0,this._currentY=0,this._stepX=(void 0!==i.stepX?Math.abs(i.stepX):16)*h,this._stepY=(void 0!==i.stepY?Math.abs(i.stepY):16)*h,0!==this._stepX&&0!==this._stepY&&s&&void 0!==s.rings&&s.rings){if(this._gridType=void 0!==i.gridType?i.gridType:"Fixed","Random"===this._gridType)this._randomness=void 0!==i.randomness?i.randomness/100:1,this._gridAngle=0,this._shiftOddRows=!1,this._cosAngle=1,this._sinAngle=0,this._offsetX=0,this._offsetY=0;else{if(this._randomness=0,this._gridAngle=void 0!==i.gridAngle?i.gridAngle:0,this._shiftOddRows=void 0!==i.shiftOddRows&&i.shiftOddRows,this._offsetX=void 0!==i.offsetX?i.offsetX*h:0,this._offsetY=void 0!==i.offsetY?i.offsetY*h:0,this._cosAngle=Math.cos(this._gridAngle/180*Math.PI),this._sinAngle=-Math.sin(this._gridAngle/180*Math.PI),this._stepX)if(this._offsetX<0)for(;this._offsetX<-.5*this._stepX;)this._offsetX+=this._stepX;else for(;this._offsetX>=.5*this._stepX;)this._offsetX-=this._stepX;if(this._stepY)if(this._offsetY<0)for(;this._offsetY<-.5*this._stepY;)this._offsetY+=this._stepY;else for(;this._offsetY>=.5*this._stepY;)this._offsetY-=this._stepY}this._graphicOriginX=0,this._graphicOriginY=0,this._internalPlacement=new _CIMPlacements_js__WEBPACK_IMPORTED_MODULE_0__["Placement"],this._calculateMinMax(s),this._geometry=s}}next(){return this._geometry?this._nextInside():null}_calculateMinMax(t){let s,i,h,e,n,_,r,o;this._xMin=0,this._xMax=0,this._yMin=0,this._yMax=0,n=_=Number.MAX_VALUE,r=o=-Number.MAX_VALUE;for(const a of t.rings){const t=a?a.length:0;for(let f=0;f<t;++f)s=a[f][0]-this._graphicOriginX-this._offsetX,i=a[f][1]-this._graphicOriginY-this._offsetY,h=this._cosAngle*s-this._sinAngle*i,e=this._sinAngle*s+this._cosAngle*i,n=Math.min(n,h),r=Math.max(r,h),_=Math.min(_,e),o=Math.max(o,e)}n+=this._graphicOriginX,r+=this._graphicOriginX,_+=this._graphicOriginY,o+=this._graphicOriginY,this._xMin=Math.round(n/this._stepX),this._xMax=Math.round(r/this._stepX),this._yMin=Math.round(_/this._stepY),this._yMax=Math.round(o/this._stepY),this._currentX=this._xMax+1,this._currentY=this._yMin-1}_nextInside(){for(;;){if(this._currentX>this._xMax){if(this._currentY++,this._currentY>this._yMax)return null;this._currentX=this._xMin,this._shiftOddRows&&this._currentY%2&&this._currentX--}let t=this._currentX*this._stepX+this._offsetX;this._shiftOddRows&&this._currentY%2&&(t+=.5*this._stepX);const s=this._currentY*this._stepY+this._offsetY;let i,h;return this._currentX++,"Random"===this._gridType?(i=this._graphicOriginX+t+this._stepX*this._randomness*(.5-Math.random())*2/3,h=this._graphicOriginY+s+this._stepY*this._randomness*(.5-Math.random())*2/3):(i=this._graphicOriginX+this._cosAngle*t+this._sinAngle*s,h=this._graphicOriginY-this._sinAngle*t+this._cosAngle*s),this._internalPlacement.setTranslate(i,h),this._internalPlacement}}}


/***/ }),

/***/ "qzns":
/*!********************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/enums.js ***!
  \********************************************************/
/*! exports provided: PlacementEndings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacementEndings", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var t;!function(t){t.NoConstraint="NoConstraint",t.WithMarkers="WithMarkers",t.WithFullGap="WithFullGap",t.WithHalfGap="WithHalfGap",t.Custom="Custom"}(t||(t={}));


/***/ }),

/***/ "t7mB":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/util/BidiText.js ***!
  \**************************************************************************/
/*! exports provided: bidiText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bidiText", function() { return n; });
/* harmony import */ var _core_BidiEngine_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/BidiEngine.js */ "179/");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const i=new _core_BidiEngine_js__WEBPACK_IMPORTED_MODULE_0__["default"];function n(r){if(!i.hasBidiChar(r))return[r,!1];let n;return n="rtl"===i.checkContextual(r)?"IDNNN":"ICNNN",[i.bidiTransform(r,n,"VLYSN"),!0]}


/***/ }),

/***/ "tDOP":
/*!*************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/support/rendererUtils.js ***!
  \*************************************************************************************/
/*! exports provided: simplifyVVRenderer, simplifyVisualVariables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simplifyVVRenderer", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simplifyVisualVariables", function() { return t; });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/screenUtils.js */ "qRWG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const o=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.renderers.visualVariables.support.utils"),r=e=>{if(!("visualVariables"in e)||!e.visualVariables||!e.visualVariables.length)return e;const l=e.clone(),o=l.visualVariables.map((e=>s(e)?a(e):e));return l.visualVariables=o,l};function t(e){return e.map((e=>s(e)?a(e.clone()):e))}function s(e){return("size"===e.type||"color"===e.type||"opacity"===e.type)&&null!=e.stops}function a(e){return e.stops=function(e,r){if(r.length<=8)return r;if(o.warn(`Found ${r.length} Visual Variable stops, but MapView only supports 8. Displayed stops will be simplified.`),r.length>16)return function(e,o){const[r,...t]=o,s=t.pop(),a=t[0].value,i=t[t.length-1].value,u=(i-a)/6,c=[];for(let r=a;r<i;r+=u){let s=0;for(;r>=t[s].value;)s++;const a=t[s],i=o[s-1],u=r-i.value,p=a.value===i.value?1:u/(a.value-i.value);if("color"===e){const e=t[s],l=o[s-1],a=e.color.clone();a.r=n(l.color.r,a.r,p),a.g=n(l.color.g,a.g,p),a.b=n(l.color.b,a.b,p),a.a=n(l.color.a,a.a,p),c.push({value:r,color:a,label:e.label})}else if("size"===e){const e=t[s],a=o[s-1],i=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["toPt"])(e.size),u=n(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["toPt"])(a.size),i,p);c.push({value:r,size:u,label:e.label})}else{const e=t[s],l=n(o[s-1].opacity,e.opacity,p);c.push({value:r,opacity:l,label:e.label})}}return[r,...c,s]}(e,r);return function(e){const[l,...o]=e,r=o.pop();for(;o.length>6;){let e=0,l=0;for(let r=1;r<o.length;r++){const t=o[r-1],s=o[r],a=Math.abs(s.value-t.value);a>l&&(l=a,e=r)}o.splice(e,1)}return[l,...o,r]}(r)}(e.type,e.stops),e}function n(e,l,o){return(1-o)*e+o*l}


/***/ }),

/***/ "tdjz":
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/effects/EffectAddControlPoints.js ***!
  \*********************************************************************************/
/*! exports provided: EffectAddControlPoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectAddControlPoints", function() { return o; });
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/lang.js */ "f/qv");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../geometry/support/jsonUtils.js */ "qatw");
/* harmony import */ var _CIMCursor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CIMCursor.js */ "tqcG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class o{static local(){return null===o.instance&&(o.instance=new o),o.instance}execute(s,t,e){return new r(s,t,e)}}o.instance=null;class r{constructor(s,t,e){this._inputGeometries=s,this._angleTolerance=void 0!==t.angleTolerance?t.angleTolerance:120,this._maxCosAngle=Math.cos((1-Math.abs(this._angleTolerance)/180)*Math.PI)}next(){let n=this._inputGeometries.next();for(;n;){if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPolygon"])(n)){this._isClosed=!0;const t=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(n);return this._processMultipath(t.rings),t}if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPolyline"])(n)){this._isClosed=!1;const t=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(n);return this._processMultipath(t.paths),t}if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isExtent"])(n)){if(this._maxCosAngle)return n;this._isClosed=!0;const s=[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]];return this._processPath(s),{rings:[s]}}n=this._inputGeometries.next()}return null}_processMultipath(s){if(s)for(const t of s)this._processPath(t)}_processPath(s){if(s){let t,e,i,o,r,l,a=s.length,h=s[0];this._isClosed&&++a;for(let c=1;c<a;++c){let m;m=this._isClosed&&c===a-1?s[0]:s[c];const _=m[0]-h[0],u=m[1]-h[1],p=Math.sqrt(_*_+u*u);if(c>1&&p>0&&i>0){(t*_+e*u)/p/i<=this._maxCosAngle&&Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_2__["setId"])(h,1)}1===c&&(o=_,r=u,l=p),p>0&&(h=m,t=_,e=u,i=p)}if(this._isClosed&&i>0&&l>0){(t*o+e*r)/l/i<=this._maxCosAngle&&Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_2__["setId"])(s[0],1)}}}}


/***/ }),

/***/ "tqcG":
/*!************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/CIMCursor.js ***!
  \************************************************************/
/*! exports provided: PathGeometryCursor, PathTransformationCursor, cloneAndDecodeGeometry, deltaDecodeGeometry, deltaEncodeGeometry, getCoord2D, getId, isClosedPath, reverseMultipath, reversePath, setId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathGeometryCursor", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathTransformationCursor", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneAndDecodeGeometry", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deltaDecodeGeometry", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deltaEncodeGeometry", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCoord2D", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getId", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isClosedPath", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reverseMultipath", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reversePath", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setId", function() { return d; });
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/lang.js */ "f/qv");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ "qatw");
/* harmony import */ var _CIMPlacements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CIMPlacements.js */ "WPSO");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function o(i){const h=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(i);return c(h),h}function a(t){if(t){for(let i=t.length-1;i>0;--i)t[i][0]-=t[i-1][0],t[i][1]-=t[i-1][1]}}function r(t){if(t)for(const i of t)a(i)}function l(t){if(t){const i=t.length;for(let h=1;h<i;++h)t[h][0]+=t[h-1][0],t[h][1]+=t[h-1][1]}}function u(t){if(t)for(const i of t)l(i)}function c(t){t&&(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPolygon"])(t)?u(t.rings):Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPolyline"])(t)?u(t.paths):Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isMultipoint"])(t)&&l(t.points))}function p(t){t&&(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPolygon"])(t)?r(t.rings):Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPolyline"])(t)?r(t.paths):Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isMultipoint"])(t)&&a(t.points))}function m(t){if(t)for(const i of t)f(i)}function f(t){t&&t.reverse()}function P(t,i,h){return[t[0]+(i[0]-t[0])*h,t[1]+(i[1]-t[1])*h]}function x(t){return!(!t||0===t.length)&&(t[0][0]===t[t.length-1][0]&&t[0][1]===t[t.length-1][1])}function g(t){return t[4]}function d(t,i){t[4]=i}class C{constructor(t,n,o,a){this.acceptPolygon=n,this.acceptPolyline=o,this.geomUnitsPerPoint=a,this.pathCount=-1,this.pathIndex=-1,this.iteratePath=!1,t&&(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPolygon"])(t)?n&&(this.multiPath=t.rings,this.isClosed=!0):Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPolyline"])(t)?o&&(this.multiPath=t.paths,this.isClosed=!1):Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isExtent"])(t)&&n&&(this.multiPath=I(t).rings,this.isClosed=!0),this.multiPath&&(this.pathCount=this.multiPath.length)),this.internalPlacement=new _CIMPlacements_js__WEBPACK_IMPORTED_MODULE_2__["Placement"]}next(){if(!this.multiPath)return null;for(;this.iteratePath||this.pathIndex<this.pathCount-1;){this.iteratePath||this.pathIndex++;const t=this.processPath(this.multiPath[this.pathIndex]);if(t)return t}return this.pathCount=-1,this.pathIndex=-1,this.multiPath=null,null}}class y{constructor(t,i,h,n){this.inputGeometries=t,this.acceptPolygon=i,this.acceptPolyline=h,this.geomUnitsPerPoint=n,this.pathCount=-1,this.pathIndex=-1,this.iteratePath=!1}next(){for(;;){if(!this.multiPath){let t=this.inputGeometries.next();for(;t;){if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPolygon"])(t)?this.acceptPolygon&&(this.multiPath=t.rings,this.isClosed=!0):Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPolyline"])(t)?this.acceptPolyline&&(this.multiPath=t.paths,this.isClosed=!1):Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isExtent"])(t)&&this.acceptPolygon&&(this.multiPath=I(t).rings,this.isClosed=!0),this.multiPath){this.pathCount=this.multiPath.length,this.pathIndex=-1;break}t=this.inputGeometries.next()}if(!this.multiPath)return null}for(;this.iteratePath||this.pathIndex<this.pathCount-1;){this.iteratePath||this.pathIndex++;const t=this.processPath(this.multiPath[this.pathIndex]);if(t)return t}this.pathCount=-1,this.pathIndex=-1,this.multiPath=null}}}function I(t){return{rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]}}


/***/ }),

/***/ "vxUa":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/effects/EffectCut.js ***!
  \********************************************************************/
/*! exports provided: EffectCut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectCut", function() { return u; });
/* harmony import */ var _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CIMCursor.js */ "tqcG");
/* harmony import */ var _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CurveHelper.js */ "/vtc");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class u{static local(){return null===u.instance&&(u.instance=new u),u.instance}execute(e,t,u){return new s(e,t,u)}}u.instance=null;class s extends _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["PathGeometryCursor"]{constructor(e,u,s){super(e,!0,!0),this._curveHelper=new _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["CurveHelper"],this._beginCut=(void 0!==u.beginCut?u.beginCut:1)*s,this._endCut=(void 0!==u.endCut?u.endCut:1)*s,this._middleCut=(void 0!==u.middleCut?u.middleCut:0)*s,this._invert=void 0!==u.invert&&u.invert,this._beginCut<0&&(this._beginCut=0),this._endCut<0&&(this._endCut=0),this._middleCut<0&&(this._middleCut=0)}processPath(e){const t=this._beginCut,u=this._endCut,s=this._middleCut,i=this._curveHelper.calculatePathLength(e),r=[];if(this._invert)if(0===t&&0===u&&0===s);else if(t+u+s>=i)r.push(e);else{let n=this._curveHelper.getSubCurve(e,0,t);n&&r.push(n),n=this._curveHelper.getSubCurve(e,.5*(i-s),.5*(i+s)),n&&r.push(n),n=this._curveHelper.getSubCurve(e,i-u,u),n&&r.push(n)}else if(0===t&&0===u&&0===s)r.push(e);else if(t+u+s>=i);else if(0===s){const s=this._curveHelper.getSubCurve(e,t,i-u);s&&r.push(s)}else{let n=this._curveHelper.getSubCurve(e,t,.5*(i-s));n&&r.push(n),n=this._curveHelper.getSubCurve(e,.5*(i+s),i-u),n&&r.push(n)}return 0===r.length?null:{paths:r}}}


/***/ })

}]);
//# sourceMappingURL=default~layers-FeatureLayerView2D-js~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~layer~9fe18dbe-es2015.js.map