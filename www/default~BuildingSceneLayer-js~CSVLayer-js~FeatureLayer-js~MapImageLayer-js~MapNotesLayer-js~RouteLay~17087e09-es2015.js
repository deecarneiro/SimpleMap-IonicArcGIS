(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~MapImageLayer-js~MapNotesLayer-js~RouteLay~17087e09"],{

/***/ "9Ruv":
/*!*********************************************************!*\
  !*** ./node_modules/@arcgis/core/support/popupUtils.js ***!
  \*********************************************************/
/*! exports provided: createFieldInfos, createFieldsContent, createPopupTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFieldInfos", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFieldsContent", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPopupTemplate", function() { return a; });
/* harmony import */ var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layers/support/fieldUtils.js */ "wdpY");
/* harmony import */ var _popup_content_Content_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../popup/content/Content.js */ "p6dn");
/* harmony import */ var _popup_content_AttachmentsContent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../popup/content/AttachmentsContent.js */ "Eonp");
/* harmony import */ var _popup_content_CustomContent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../popup/content/CustomContent.js */ "ack/");
/* harmony import */ var _popup_support_FieldInfoFormat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../popup/support/FieldInfoFormat.js */ "iALD");
/* harmony import */ var _popup_FieldInfo_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../popup/FieldInfo.js */ "n5EF");
/* harmony import */ var _popup_content_FieldsContent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../popup/content/FieldsContent.js */ "GL98");
/* harmony import */ var _popup_content_MediaContent_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../popup/content/MediaContent.js */ "PKzc");
/* harmony import */ var _popup_content_TextContent_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../popup/content/TextContent.js */ "0OnR");
/* harmony import */ var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../PopupTemplate.js */ "SFah");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const r=["oid","global-id"],s=["oid","global-id","guid"];function a({displayField:i,editFieldsInfo:o,fields:r,objectIdField:s,title:a},d){if(!r)return null;const p=F({editFieldsInfo:o,fields:r,objectIdField:s},d);if(!p.length)return null;const u=function(t){const i=Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_0__["getDisplayFieldName"])(t),{titleBase:o}=t;return i?`${o}: {${i.trim()}}`:o}({titleBase:a,fields:r,displayField:i}),c=[new _popup_content_FieldsContent_js__WEBPACK_IMPORTED_MODULE_6__["default"],new _popup_content_AttachmentsContent_js__WEBPACK_IMPORTED_MODULE_2__["default"]];return new _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_9__["default"]({title:u,content:c,fieldInfos:p})}const d=[/^fnode_$/i,/^tnode_$/i,/^lpoly_$/i,/^rpoly_$/i,/^poly_$/i,/^subclass$/i,/^subclass_$/i,/^rings_ok$/i,/^rings_nok$/i,/shape/i,/perimeter/i,/objectid/i,/_i$/i],p=(e,{editFieldsInfo:t,objectIdField:i,visibleFieldNames:o})=>o?o.has(e.name):!c(e.name,t)&&((!i||e.name!==i)&&(!(r.indexOf(e.type)>-1)&&!d.some((t=>t.test(e.name)))));function u(e,t){return"oid"===e.type?-1:"oid"===t.type?1:w(e)?-1:w(t)?1:(e.alias||e.name).toLocaleLowerCase().localeCompare((t.alias||t.name).toLocaleLowerCase())}function c(e,t){if(!e||!t)return!1;const{creationDateField:i,creatorField:o,editDateField:n,editorField:l}=t;return-1!==[i&&i.toLowerCase(),o&&o.toLowerCase(),n&&n.toLowerCase(),l&&l.toLowerCase()].indexOf(e.toLowerCase())}function m(e,t){return e.editable&&-1===s.indexOf(e.type)&&!c(e.name,t)}function f(e,t){return new _popup_content_FieldsContent_js__WEBPACK_IMPORTED_MODULE_6__["default"]({fieldInfos:F(e,t).filter((e=>e.visible))})}function F({editFieldsInfo:e,fields:t,objectIdField:i},n){return function(e,t){const i=e;return t&&(e=e.filter((e=>-1===t.indexOf(e.type)))),e===i&&(e=e.slice()),e.sort(u),e}(t,(null==n?void 0:n.ignoreFieldTypes)||C).map((t=>new _popup_FieldInfo_js__WEBPACK_IMPORTED_MODULE_5__["default"]({fieldName:t.name,isEditable:m(t,e),label:t.alias,format:b(t),visible:p(t,{editFieldsInfo:e,objectIdField:i,visibleFieldNames:null==n?void 0:n.visibleFieldNames})})))}function b(e){switch(e.type){case"small-integer":case"integer":case"single":return new _popup_support_FieldInfoFormat_js__WEBPACK_IMPORTED_MODULE_4__["default"]({digitSeparator:!0,places:0});case"double":return new _popup_support_FieldInfoFormat_js__WEBPACK_IMPORTED_MODULE_4__["default"]({digitSeparator:!0,places:2});case"date":return new _popup_support_FieldInfoFormat_js__WEBPACK_IMPORTED_MODULE_4__["default"]({dateFormat:"long-month-day-year"});default:return null}}function w(e){if("name"===(e.name&&e.name.toLowerCase()))return!0;return"name"===(e.alias&&e.alias.toLowerCase())||void 0}const C=["geometry","blob","raster","guid","xml"];


/***/ }),

/***/ "PVlI":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/mixins/ArcGISService.js ***!
  \******************************************************************/
/*! exports provided: ArcGISService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArcGISService", function() { return p; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../support/arcgisLayerUrl.js */ "VLTf");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const p=p=>{let c=class extends p{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const t=Object(_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_10__["parse"])(this.url);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(t)&&t.title)return t.title}return this._get("title")||""}set title(t){this._set("title",t)}set url(t){this._set("url",Object(_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_10__["sanitizeUrl"])(t,_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger(this.declaredClass)))}};return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({dependsOn:["url"]})],c.prototype,"title",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:String})],c.prototype,"url",null),c=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.mixins.ArcGISService")],c),c};


/***/ }),

/***/ "ezna":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/labelUtils.js ***!
  \****************************************************************/
/*! exports provided: convertTemplatedStringToArcade, getLabelExpression, getLabelExpressionArcade, getLabelExpressionSingleField, getSingleFieldArcadeExpression, getSingleFieldTemplatedString, sqlToTemplateString, templateStringToSql */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertTemplatedStringToArcade", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLabelExpression", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLabelExpressionArcade", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLabelExpressionSingleField", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleFieldArcadeExpression", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleFieldTemplatedString", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqlToTemplateString", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateStringToSql", function() { return i; });
/* harmony import */ var _core_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/string.js */ "s7YA");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const n=new RegExp("__begin__","ig"),r=new RegExp("__end__","ig"),s=new RegExp("^__begin__","i"),t=new RegExp("__end__$","i");function o(e){return e.replace(new RegExp("\\[","g"),"{").replace(new RegExp("\\]","g"),"}")}function i(e){return e.replace(new RegExp("\\{","g"),"[").replace(new RegExp("\\}","g"),"]")}function l(e){const n={expression:"",type:"none"};return e.labelExpressionInfo?e.labelExpressionInfo.value?(n.expression=e.labelExpressionInfo.value,n.type="conventional"):e.labelExpressionInfo.expression&&(n.expression=e.labelExpressionInfo.expression,n.type="arcade"):null!=e.labelExpression&&(n.expression=o(e.labelExpression),n.type="conventional"),n}function a(e){const n=l(e);if(!n)return null;switch(n.type){case"conventional":return p(n.expression);case"arcade":return n.expression}return null}function c(e){const n=l(e);if(!n)return null;switch(n.type){case"conventional":return x(n.expression);case"arcade":return w(n.expression)}return null}function p(o){let i;return o?(i=Object(_core_string_js__WEBPACK_IMPORTED_MODULE_0__["replace"])(o,(e=>'__begin__$feature["'+e+'"]__end__')),i=s.test(i)?i.replace(s,""):'"'+i,i=t.test(i)?i.replace(t,""):i+'"',i=i.replace(n,'" + ').replace(r,' + "')):i='""',i}const u=/^\s*\{([^}]+)\}\s*$/i;function x(e){const n=e.match(u);return n&&n[1].trim()||null}const f=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*$/i,_=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(\1|\3)(\5)\s*\));?\s*$/i,g=/^\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])([\w\s]+)(\1)\s*\));?\s*$/i;function w(e){if(!e)return null;let n=f.exec(e)||_.exec(e);return n?n[1]||n[3]:(n=g.exec(e),n?n[2]:null)}


/***/ }),

/***/ "gLc9":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/FieldsIndex.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function t(t){return"date"===t.type||"esriFieldTypeDate"===t.type}function e(t){return t.toLowerCase().trim()}/* harmony default export */ __webpack_exports__["default"] = (class{constructor(s){if(this.fields=s,this._fieldsMap=new Map,this._dateFieldsSet=new Set,this.dateFields=[],!s)return;const i=[];for(const d of s){const s=d&&d.name;if(s){const a=e(s);this._fieldsMap.set(s,d),this._fieldsMap.set(a,d),i.push(a),t(d)&&(this.dateFields.push(d),this._dateFieldsSet.add(d))}}i.sort(),this.uid=i.join(",")}destroy(){this._fieldsMap.clear()}has(t){return null!=this.get(t)}get(t){return null!=t?this._fieldsMap.get(t)||this._fieldsMap.get(e(t)):void 0}isDateField(t){return this._dateFieldsSet.has(this.get(t))}normalizeFieldName(t){const e=this.get(t);if(e)return e.name}});


/***/ }),

/***/ "gkbi":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/support/defaultsJSON.js ***!
  \*******************************************************************/
/*! exports provided: defaultColor, defaultOutlineColor, defaultPointSymbolJSON, defaultPolygonSymbolJSON, defaultPolylineSymbolJSON, defaultTextSymbolJSON, errorPointSymbolJSON, errorPolygonSymbolJSON, errorPolylineSymbolJSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultColor", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultOutlineColor", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultPointSymbolJSON", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultPolygonSymbolJSON", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultPolylineSymbolJSON", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTextSymbolJSON", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorPointSymbolJSON", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorPolygonSymbolJSON", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorPolylineSymbolJSON", function() { return s; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const e=[252,146,31,255],i=[153,153,153,255],l={type:"esriSMS",style:"esriSMSCircle",size:6,color:e,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},o={type:"esriSLS",style:"esriSLSSolid",width:.75,color:e},S={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},t={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},r={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},s={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},y={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null};


/***/ }),

/***/ "psH3":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/support/defaults.js ***!
  \***************************************************************/
/*! exports provided: defaultPointSymbol2D, defaultPolygonSymbol2D, defaultPolylineSymbol2D, defaultTextSymbol2D, errorPointSymbol2D, errorPolygonSymbol2D, errorPolylineSymbol2D, getDefaultSymbol2D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultPointSymbol2D", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultPolygonSymbol2D", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultPolylineSymbol2D", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTextSymbol2D", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorPointSymbol2D", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorPolygonSymbol2D", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorPolylineSymbol2D", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultSymbol2D", function() { return J; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SimpleLineSymbol.js */ "21Ip");
/* harmony import */ var _SimpleFillSymbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SimpleFillSymbol.js */ "DXYb");
/* harmony import */ var _SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SimpleMarkerSymbol.js */ "Tcmu");
/* harmony import */ var _TextSymbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../TextSymbol.js */ "Ibpv");
/* harmony import */ var _defaultsJSON_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./defaultsJSON.js */ "gkbi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const c=_SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_4__["default"].fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_6__["defaultPointSymbolJSON"]),u=_SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_2__["default"].fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_6__["defaultPolylineSymbolJSON"]),a=_SimpleFillSymbol_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_6__["defaultPolygonSymbolJSON"]),y=_TextSymbol_js__WEBPACK_IMPORTED_MODULE_5__["default"].fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_6__["defaultTextSymbolJSON"]);function J(o){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(o))return null;switch(o.type){case"mesh":return null;case"point":case"multipoint":return c;case"polyline":return u;case"polygon":case"extent":return a}return null}const N=_SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_4__["default"].fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_6__["errorPointSymbolJSON"]),O=_SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_2__["default"].fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_6__["errorPolylineSymbolJSON"]),j=_SimpleFillSymbol_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_6__["errorPolygonSymbolJSON"]);


/***/ }),

/***/ "rgLt":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/LabelExpressionInfo.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ "r88o");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/writer.js */ "Cduq");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _labelUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./labelUtils.js */ "ezna");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var l;let n=l=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_11__["JSONSupport"]{constructor(){super(...arguments),this.expression=null,this.title=null,this.value=null}readExpression(r,e){return e.value?Object(_labelUtils_js__WEBPACK_IMPORTED_MODULE_12__["convertTemplatedStringToArcade"])(e.value):r}writeExpression(r,e,o){null!=this.value&&(r=Object(_labelUtils_js__WEBPACK_IMPORTED_MODULE_12__["convertTemplatedStringToArcade"])(this.value)),e[o]=r}clone(){return new l({expression:this.expression,title:this.title,value:this.value})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:String,json:{write:{allowNull:!0}}})],n.prototype,"expression",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:String,json:{write:!0,origins:{"web-scene":{write:!1}}}})],n.prototype,"title",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({json:{read:!1,write:!1}})],n.prototype,"value",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__["reader"])("expression",["expression","value"])],n.prototype,"readExpression",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__["writer"])("expression")],n.prototype,"writeExpression",null),n=l=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.support.LabelExpressionInfo")],n);var u=n;/* harmony default export */ __webpack_exports__["default"] = (u);


/***/ }),

/***/ "wkZP":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/LabelClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/lang.js */ "f/qv");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/jsonMap.js */ "+opI");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ "r88o");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/writer.js */ "Cduq");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _chunks_symbols_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../chunks/symbols.js */ "nNR5");
/* harmony import */ var _labelUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./labelUtils.js */ "ezna");
/* harmony import */ var _LabelExpressionInfo_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./LabelExpressionInfo.js */ "rgLt");
/* harmony import */ var _symbols_support_defaults_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../symbols/support/defaults.js */ "psH3");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var w;const d=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_6__["JSONMap"]({esriServerPointLabelPlacementAboveCenter:"above-center",esriServerPointLabelPlacementAboveLeft:"above-left",esriServerPointLabelPlacementAboveRight:"above-right",esriServerPointLabelPlacementBelowCenter:"below-center",esriServerPointLabelPlacementBelowLeft:"below-left",esriServerPointLabelPlacementBelowRight:"below-right",esriServerPointLabelPlacementCenterCenter:"center-center",esriServerPointLabelPlacementCenterLeft:"center-left",esriServerPointLabelPlacementCenterRight:"center-right",esriServerLinePlacementAboveAfter:"above-after",esriServerLinePlacementAboveAlong:"above-along",esriServerLinePlacementAboveBefore:"above-before",esriServerLinePlacementAboveStart:"above-start",esriServerLinePlacementAboveEnd:"above-end",esriServerLinePlacementBelowAfter:"below-after",esriServerLinePlacementBelowAlong:"below-along",esriServerLinePlacementBelowBefore:"below-before",esriServerLinePlacementBelowStart:"below-start",esriServerLinePlacementBelowEnd:"below-end",esriServerLinePlacementCenterAfter:"center-after",esriServerLinePlacementCenterAlong:"center-along",esriServerLinePlacementCenterBefore:"center-before",esriServerLinePlacementCenterStart:"center-start",esriServerLinePlacementCenterEnd:"center-end",esriServerPolygonPlacementAlwaysHorizontal:"always-horizontal"},{ignoreUnknown:!0});function y(e){return!e||"service"!==e.origin&&!(e.layer&&"map-image"===e.layer.type)}let x=w=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_13__["JSONSupport"]{constructor(e){super(e),this.type="label",this.name=null,this.deconflictionStrategy="static",this.labelExpression=null,this.labelExpressionInfo=null,this.labelPlacement=null,this.maxScale=0,this.minScale=0,this.symbol=_symbols_support_defaults_js__WEBPACK_IMPORTED_MODULE_17__["defaultTextSymbol2D"],this.useCodedValues=void 0,this.where=null}static evaluateWhere(e,r){const t=function(e,r,t){switch(r){case"=":return e==t;case"<>":return e!=t;case">":return e>t;case">=":return e>=t;case"<":return e<t;case"<=":return e<=t}return!1};try{if(null==e)return!0;const o=e.split(" ");if(3===o.length)return t(r[o[0]],o[1],o[2]);if(7===o.length){const e=t(r[o[0]],o[1],o[2]),s=o[3],n=t(r[o[4]],o[5],o[6]);switch(s){case"AND":return e&&n;case"OR":return e||n}}return!1}catch(r){console.log("Error.: can't parse = "+e)}}readLabelExpression(e,r){const t=r.labelExpressionInfo;if(!t||!t.value&&!t.expression)return e}writeLabelExpression(e,r,t,o){if(this.labelExpressionInfo&&(y(o)||o&&"service"===o.origin))if(null!=this.labelExpressionInfo.value)e=Object(_labelUtils_js__WEBPACK_IMPORTED_MODULE_15__["templateStringToSql"])(this.labelExpressionInfo.value);else if(null!=this.labelExpressionInfo.expression){const r=Object(_labelUtils_js__WEBPACK_IMPORTED_MODULE_15__["getSingleFieldArcadeExpression"])(this.labelExpressionInfo.expression);r&&(e="["+r+"]")}null!=e&&(r[t]=e)}writeLabelExpressionInfo(e,r,t,o){if(null==e&&null!=this.labelExpression&&y(o))e=new _LabelExpressionInfo_js__WEBPACK_IMPORTED_MODULE_16__["default"]({expression:this.getLabelExpressionArcade()});else if(!e)return;const s=e.toJSON(o);s.expression&&(r[t]=s)}writeMaxScale(e,r){(e||this.minScale)&&(r.maxScale=e)}writeMinScale(e,r){(e||this.maxScale)&&(r.minScale=e)}getLabelExpression(){return Object(_labelUtils_js__WEBPACK_IMPORTED_MODULE_15__["getLabelExpression"])(this)}getLabelExpressionArcade(){return Object(_labelUtils_js__WEBPACK_IMPORTED_MODULE_15__["getLabelExpressionArcade"])(this)}getLabelExpressionSingleField(){return Object(_labelUtils_js__WEBPACK_IMPORTED_MODULE_15__["getLabelExpressionSingleField"])(this)}hash(){return JSON.stringify(this)}clone(){return new w({deconflictionStrategy:this.deconflictionStrategy,labelExpression:this.labelExpression,labelExpressionInfo:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.labelExpressionInfo),labelPlacement:this.labelPlacement,maxScale:this.maxScale,minScale:this.minScale,name:this.name,symbol:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.symbol),where:this.where,useCodedValues:this.useCodedValues})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:String,json:{write:!0}})],x.prototype,"name",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:String,json:{write:!0,default:"static",origins:{"web-scene":{write:!1}}}})],x.prototype,"deconflictionStrategy",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:String,json:{write:{allowNull:!0}}})],x.prototype,"labelExpression",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__["reader"])("labelExpression")],x.prototype,"readLabelExpression",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__["writer"])("labelExpression")],x.prototype,"writeLabelExpression",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:_LabelExpressionInfo_js__WEBPACK_IMPORTED_MODULE_16__["default"],json:{write:{overridePolicy:(e,r,t)=>y(t)?{allowNull:!0}:{enabled:!1}}}})],x.prototype,"labelExpressionInfo",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__["writer"])("labelExpressionInfo")],x.prototype,"writeLabelExpressionInfo",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:d.apiValues,json:{type:d.jsonValues,read:d.read,write:d.write}})],x.prototype,"labelPlacement",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:Number})],x.prototype,"maxScale",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__["writer"])("maxScale")],x.prototype,"writeMaxScale",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:Number})],x.prototype,"minScale",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__["writer"])("minScale")],x.prototype,"writeMinScale",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({types:_chunks_symbols_js__WEBPACK_IMPORTED_MODULE_14__["d"],json:{origins:{"web-scene":{types:_chunks_symbols_js__WEBPACK_IMPORTED_MODULE_14__["g"],write:_chunks_symbols_js__WEBPACK_IMPORTED_MODULE_14__["w"],default:null}},write:_chunks_symbols_js__WEBPACK_IMPORTED_MODULE_14__["w"],default:null}})],x.prototype,"symbol",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:Boolean,json:{write:!0}})],x.prototype,"useCodedValues",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:String,json:{write:!0}})],x.prototype,"where",void 0),x=w=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.layers.support.LabelClass")],x);var g=x;/* harmony default export */ __webpack_exports__["default"] = (g);


/***/ })

}]);
//# sourceMappingURL=default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~MapImageLayer-js~MapNotesLayer-js~RouteLay~17087e09-es2015.js.map