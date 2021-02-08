(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["UnknownLayer-js"],{

/***/ "5pQd":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/MultiOriginJSONSupport.js ***!
  \******************************************************************/
/*! exports provided: MultiOriginJSONMixin, MultiOriginJSONSupport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiOriginJSONMixin", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiOriginJSONSupport", function() { return O; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accessorSupport/utils.js */ "TDcG");
/* harmony import */ var _accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accessorSupport/PropertyOrigin.js */ "ku/q");
/* harmony import */ var _Accessor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Accessor.js */ "/CmD");
/* harmony import */ var _accessorSupport_write_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accessorSupport/write.js */ "xHih");
/* harmony import */ var _ReadOnlyMultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ReadOnlyMultiOriginJSONSupport.js */ "6xK3");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const p=i=>{let n=class extends i{constructor(...r){super(...r)}clear(r,t="user"){return u(this).delete(r,Object(_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_3__["nameToId"])(t))}write(r={},t){return Object(_accessorSupport_write_js__WEBPACK_IMPORTED_MODULE_5__["write"])(this,r=r||{},t),r}setAtOrigin(r,s,o){Object(_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_1__["getProperties"])(this).setAtOrigin(r,s,Object(_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_3__["nameToId"])(o))}removeOrigin(r){const t=u(this),s=Object(_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_3__["nameToId"])(r),o=t.keys(s);for(const r of o)t.originOf(r)===s&&t.set(r,t.get(r,s),6)}updateOrigin(r,t){const s=u(this),i=Object(_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_3__["nameToId"])(t),c=this.get(r);for(let t=i+1;t<_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_3__["OriginIdNum"];++t)s.delete(r,t);s.set(r,c,i)}toJSON(r){return this.write({},r)}};return n=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_2__["subclass"])("esri.core.WriteableMultiOriginJSONSupport")],n),n.prototype.toJSON.isDefaultToJSON=!0,n};function u(r){return Object(_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_1__["getProperties"])(r).store}const l=t=>{let e=class extends(p(Object(_ReadOnlyMultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_6__["ReadOnlyMultiOriginJSONMixin"])(t))){constructor(...r){super(...r)}};return e=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_2__["subclass"])("esri.core.MultiOriginJSONSupport")],e),e};let O=class extends(l(_Accessor_js__WEBPACK_IMPORTED_MODULE_4__["default"])){};O=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_2__["subclass"])("esri.core.MultiOriginJSONSupport")],O);


/***/ }),

/***/ "6xK3":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/ReadOnlyMultiOriginJSONSupport.js ***!
  \**************************************************************************/
/*! exports provided: ReadOnlyMultiOriginJSONMixin, ReadOnlyMultiOriginJSONSupport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadOnlyMultiOriginJSONMixin", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadOnlyMultiOriginJSONSupport", function() { return f; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maybe.js */ "srIe");
/* harmony import */ var _accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accessorSupport/utils.js */ "TDcG");
/* harmony import */ var _accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accessorSupport/PropertyOrigin.js */ "ku/q");
/* harmony import */ var _Accessor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Accessor.js */ "/CmD");
/* harmony import */ var _accessorSupport_read_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./accessorSupport/read.js */ "CWQl");
/* harmony import */ var _accessorSupport_MultiOriginStore_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./accessorSupport/MultiOriginStore.js */ "SxDd");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const a=n=>{let a=class extends n{constructor(...r){super(...r);const s=Object(_maybe_js__WEBPACK_IMPORTED_MODULE_1__["assumeNonNull"])(Object(_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_2__["getProperties"])(this)),o=s.metadatas,i=s.store,n=new _accessorSupport_MultiOriginStore_js__WEBPACK_IMPORTED_MODULE_7__["default"];s.store=n,i.keys().forEach((r=>{n.set(r,i.get(r),0)})),Object.keys(o).forEach((r=>{s.internalGet(r)&&n.set(r,s.internalGet(r),0)}))}read(r,t){Object(_accessorSupport_read_js__WEBPACK_IMPORTED_MODULE_6__["read"])(this,r,t)}getAtOrigin(r,t){const e=u(this),s=Object(_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_4__["nameToId"])(t);if("string"==typeof r)return e.get(r,s);const o={};return r.forEach((r=>{o[r]=e.get(r,s)})),o}originOf(r){return Object(_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_4__["idToName"])(this.originIdOf(r))}originIdOf(r){return u(this).originOf(r)}revert(r,t){const s=u(this),o=Object(_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_4__["nameToId"])(t),n=Object(_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_2__["getProperties"])(this);let c;c="string"==typeof r?"*"===r?s.keys(o):[r]:r,c.forEach((r=>{n.propertyInvalidated(r),s.revert(r,o),n.propertyCommitted(r)}))}};return a=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_3__["subclass"])("esri.core.ReadOnlyMultiOriginJSONSupport")],a),a};function u(r){return Object(_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_2__["getProperties"])(r).store}let f=class extends(a(_Accessor_js__WEBPACK_IMPORTED_MODULE_5__["default"])){};f=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_3__["subclass"])("esri.core.ReadOnlyMultiOriginJSONSupport")],f);


/***/ }),

/***/ "DbUH":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/mixins/PortalLayer.js ***!
  \****************************************************************/
/*! exports provided: PortalLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalLayer", function() { return d; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ "r88o");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/writer.js */ "Cduq");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../portal/Portal.js */ "AiS/");
/* harmony import */ var _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../portal/PortalItem.js */ "p+Gi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const n=_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.layers.mixins.PortalLayer"),d=r=>{let d=class extends r{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]}}destroy(){var t;null==(t=this.portalItem)||t.destroy(),this.portalItem=null}set portalItem(t){t!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",t))}readPortalItem(t,r,e){if(r.itemId)return new _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_14__["default"]({id:r.itemId,portal:e&&e.portal})}writePortalItem(t,r){t&&t.id&&(r.itemId=t.id)}async loadFromPortal(t,r){if(this.portalItem&&this.portalItem.id)try{const e=await Promise.all(/*! import() | portal-support-layersLoader-js */[__webpack_require__.e("common"), __webpack_require__.e("portal-support-layersLoader-js")]).then(__webpack_require__.bind(null, /*! ../../portal/support/layersLoader.js */ "O5Ly"));return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_12__["throwIfAborted"])(r),await e.load({instance:this,supportedTypes:t.supportedTypes,validateItem:t.validateItem,supportsData:t.supportsData},r)}catch(t){throw n.warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${t}`),t}}read(t,r){r&&(r.layer=this),super.read(t,r)}write(t,r){const e=r&&r.portal,o=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||_portal_Portal_js__WEBPACK_IMPORTED_MODULE_13__["default"].getDefault());return e&&o&&!Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__["hasSamePortal"])(o.restUrl,e.restUrl)?(r.messages&&r.messages.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_8__["default"]("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer`,{layer:this})),null):super.write(t,{...r,layer:this})}};return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:_portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_14__["default"]})],d.prototype,"portalItem",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__["reader"])("web-document","portalItem",["itemId"])],d.prototype,"readPortalItem",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__["writer"])("web-document","portalItem",{itemId:{type:String}})],d.prototype,"writePortalItem",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],d.prototype,"resourceReferences",void 0),d=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.mixins.PortalLayer")],d),d};


/***/ }),

/***/ "SxDd":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/accessorSupport/MultiOriginStore.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lang.js */ "f/qv");
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../maybe.js */ "srIe");
/* harmony import */ var _PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PropertyOrigin.js */ "ku/q");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class r{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_2__["OriginIdNum"]),this._values=new Map}clone(s){const i=new r,o=this._originStores[0];o&&o.forEach(((s,e)=>{i.set(e,Object(_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(s),0)}));for(let r=2;r<_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_2__["OriginIdNum"];r++){const e=this._originStores[r];e&&e.forEach(((e,o)=>{s&&s.has(o)||i.set(o,Object(_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(e),r)}))}return i}get(t,s){const e=void 0===s?this._values:this._originStores[s];return e?e.get(t):void 0}keys(t){const s=null==t?this._values:this._originStores[t];return s?[...s.keys()]:[]}set(t,e,r=6){let i=this._originStores[r];if(i||(i=new Map,this._originStores[r]=i),i.set(t,e),!this._values.has(t)||Object(_maybe_js__WEBPACK_IMPORTED_MODULE_1__["assumeNonNull"])(this._propertyOriginMap.get(t))<=r){const s=this._values.get(t);return this._values.set(t,e),this._propertyOriginMap.set(t,r),s!==e}return!1}delete(t,s=6){const e=this._originStores[s];if(!e)return;const r=e.get(t);if(e.delete(t),this._values.has(t)&&this._propertyOriginMap.get(t)===s){this._values.delete(t);for(let e=s-1;e>=0;e--){const s=this._originStores[e];if(s&&s.has(t)){this._values.set(t,s.get(t)),this._propertyOriginMap.set(t,e);break}}}return r}has(t,s){const e=void 0===s?this._values:this._originStores[s];return!!e&&e.has(t)}revert(t,s){for(;s>0&&!this.has(t,s);)--s;const e=this._originStores[s],r=e&&e.get(t),i=this._values.get(t);return this._values.set(t,r),this._propertyOriginMap.set(t,s),i!==r}originOf(t){return this._propertyOriginMap.get(t)||0}forEach(t){this._values.forEach(t)}}/* harmony default export */ __webpack_exports__["default"] = (r);


/***/ }),

/***/ "qcqe":
/*!**********************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/UnknownLayer.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/Error.js */ "zlDU");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_scheduling_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/scheduling.js */ "WBXD");
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Layer.js */ "pqNC");
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ "5pQd");
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ "DbUH");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let u=class extends(Object(_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_14__["PortalLayer"])(Object(_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_13__["MultiOriginJSONMixin"])(_Layer_js__WEBPACK_IMPORTED_MODULE_12__["default"]))){constructor(r){super(r),this.resourceInfo=null,this.type="unknown"}initialize(){this.addResolvingPromise(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["create"])(((r,o)=>{Object(_core_scheduling_js__WEBPACK_IMPORTED_MODULE_11__["schedule"])((()=>{const r=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let e="Unknown layer type";r&&(e+=" "+r),o(new _core_Error_js__WEBPACK_IMPORTED_MODULE_6__["default"]("layer:unknown-layer-type",e,{layerType:r}))}))})))}read(r,o){super.read({resourceInfo:r},o)}write(){return null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0})],u.prototype,"resourceInfo",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:["show","hide"]})],u.prototype,"listMode",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({json:{read:!1},readOnly:!0,value:"unknown"})],u.prototype,"type",void 0),u=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.UnknownLayer")],u);var a=u;/* harmony default export */ __webpack_exports__["default"] = (a);


/***/ })

}]);
//# sourceMappingURL=UnknownLayer-js-es2015.js.map