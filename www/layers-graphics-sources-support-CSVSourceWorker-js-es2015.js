(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-graphics-sources-support-CSVSourceWorker-js"],{

/***/ "136L":
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/sources/support/CSVSourceWorker.js ***!
  \**************************************************************************************/
/*! exports provided: default, csvLatitudeFieldNames, csvLongitudeFieldNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "csvLatitudeFieldNames", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "csvLongitudeFieldNames", function() { return D; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/lang.js */ "f/qv");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../geometry/support/spatialReferenceUtils.js */ "f4Nx");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../geometry/SpatialReference.js */ "WZb1");
/* harmony import */ var _geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../geometry/support/webMercatorUtils.js */ "l4ZG");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../geometry.js */ "4GrV");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../request.js */ "Lqtk");
/* harmony import */ var _geometry_projection_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../geometry/projection.js */ "gYg2");
/* harmony import */ var _core_number_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../core/number.js */ "cBWO");
/* harmony import */ var _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../OptimizedFeature.js */ "k5I3");
/* harmony import */ var _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../OptimizedGeometry.js */ "gVKr");
/* harmony import */ var _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../support/FieldsIndex.js */ "gLc9");
/* harmony import */ var _geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../geometry/geometryAdapters/json.js */ "1kEK");
/* harmony import */ var _data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../data/projectionSupport.js */ "HsO1");
/* harmony import */ var _clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./clientSideDefaults.js */ "iNG6");
/* harmony import */ var _data_FeatureStore_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../data/FeatureStore.js */ "ZRfE");
/* harmony import */ var _data_QueryEngine_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../data/QueryEngine.js */ "ZBG3");
/* harmony import */ var _csv_csv_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../csv/csv.js */ "vKS7");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const j=Object(_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_17__["createDrawingInfo"])("esriGeometryPoint"),w=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong"],E=["lat","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point-y"],D=["lon","lng","long","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point-x"],q=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,v=["csv"],S=[0,0];class C{constructor(e,t){this.x=e,this.y=t}}const V=function(){const e=Object(_core_number_js__WEBPACK_IMPORTED_MODULE_11__["_parseInfo"])(),t=new RegExp("^"+e.regexp+"$"),i=new RegExp("["+e.group+"\\s\\xa0]","g"),n=e.factor;return function(r){const o=t.exec(r);if(e.factor=n,!o)return NaN;let l=o[1];if(!o[1]){if(!o[2])return NaN;l=o[2],e.factor*=-1}return l=l.replace(i,"").replace(e.decimal,"."),+l*e.factor}}(),k="isInteger"in Number?Number.isInteger:e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e;/* harmony default export */ __webpack_exports__["default"] = (class{constructor(){this._fieldsIndex=null,this._queryEngine=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=null,this._fieldsIndex=null}async load(e,t={}){const[i]=await Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__["all"])([this._fetch(e.url,t),this._checkProjection(t&&e.parsing&&e.parsing.spatialReference)]),n=this._parse(i,e);if(this._queryEngine=this._createQueryEngine(i,n),n.layerDefinition.extent=this._queryEngine.fullExtent,n.layerDefinition.timeInfo){const{start:e,end:t}=this._queryEngine.timeExtent;n.layerDefinition.timeInfo.timeExtent=[e,t]}return n}async applyEdits(){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("csv-source:editing-not-supported","applyEdits() is not supported on CSVLayer")}async queryFeatures(e={},t={}){return this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}async _fetch(e,t){if(!e)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("csv-source:invalid-source","url not defined");const r=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["urlToObject"])(e);return(await Object(_request_js__WEBPACK_IMPORTED_MODULE_9__["default"])(r.path,{query:r.query,responseType:"text",signal:t.signal})).data}_parse(e,n){const o=n.parsing||{},l={columnDelimiter:o.columnDelimiter,layerDefinition:null,locationInfo:{latitudeFieldName:o.latitudeField,longitudeFieldName:o.longitudeField}},s=Object(_csv_csv_js__WEBPACK_IMPORTED_MODULE_20__["readRows"])(e);let{value:a}=s.next();if(!a)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("csv","CSV is empty",{csv:e});if(a=a.trim(),!o.columnDelimiter){const e=Object(_csv_csv_js__WEBPACK_IMPORTED_MODULE_20__["inferDelimiter"])(a);if(!e)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("csv-source:invalid-delimiter","Unable to detect the delimiter from CSV");l.columnDelimiter=e}const d=a.split(l.columnDelimiter),u=l.layerDefinition={name:Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["getFilename"])(n.url,v)||"csv",drawingInfo:j,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:o.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:o.spatialReference||{wkid:102100}}};if(!o.latitudeField||!o.longitudeField){const e=this._inferLocationInfo(d);if(!o.longitudeField&&!e.longitudeFieldName||!o.latitudeField&&!e.latitudeFieldName)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("csv","Unable to identify latitudeField and/or longitudeField from CSV");l.locationInfo={longitudeFieldName:o.longitudeField||e.longitudeFieldName,latitudeFieldName:o.latitudeField||e.latitudeFieldName}}const c=this._inferFields(s,l.columnDelimiter,d,l.locationInfo);if(o.fields&&o.fields.length){const e=new Map;for(const t of o.fields)e.set(t.name.toLowerCase(),t);for(const i of c){const n=e.get(i.name.toLowerCase());if(n){const e=i.name;Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_1__["mixin"])(i,n),i.name=e}}}u.fields=c;if(!u.fields.some((e=>"esriFieldTypeOID"===e.type&&(u.objectIdField=e.name,!0)))){const e={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};u.objectIdField=e.name,u.fields.unshift(e)}if(this._fieldsIndex=new _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_14__["default"](u.fields),u.timeInfo){const e=u.timeInfo;if(e.startTimeField){const t=this._fieldsIndex.get(e.startTimeField);t?(e.startTimeField=t.name,t.type="esriFieldTypeDate"):e.startTimeField=null}if(e.endTimeField){const t=this._fieldsIndex.get(e.endTimeField);t?(e.endTimeField=t.name,t.type="esriFieldTypeDate"):e.endTimeField=null}if(e.trackIdField){const t=this._fieldsIndex.get(e.trackIdField);e.trackIdField=t?t.name:null}e.startTimeField||e.endTimeField||(u.timeInfo=null)}return l}_inferLocationInfo(e){let t=null,i=null;const n=t=>e.find((e=>e.toLowerCase()===t));return D.some((e=>(t=n(e),!!t))),E.some((e=>(i=n(e),!!i))),{longitudeFieldName:t,latitudeFieldName:i}}_inferFields(e,t,i,n){const r=[],o=Object(_csv_csv_js__WEBPACK_IMPORTED_MODULE_20__["parseRows"])(e,i,t),l=[];e:for(;l.length<10;){const{value:e,done:t}=o.next();if(t)break e;l.push(e)}for(const e of i)if(e===n.longitudeFieldName||e===n.latitudeFieldName)r.push({name:e,type:"esriFieldTypeDouble",alias:e});else{const t=l.map((t=>t[e])),i=this._inferFieldType(t),n={name:e,type:null,alias:e};switch(i){case"integer":n.type="esriFieldTypeInteger";break;case"double":n.type="esriFieldTypeDouble";break;case"date":n.type="esriFieldTypeDate",n.length=36;break;default:n.type="esriFieldTypeString",n.length=255}r.push(n)}return r}_inferFieldType(e){if(!e.length)return"string";const t=/[^+-.,0-9]/;return e.map((e=>{let i=!1;if(""!==e){if(t.test(e))i=!0;else{let t=V(e);if(!isNaN(t))return/[.,]/.test(e)||!k(t)||t>214783647||t<-214783648?"double":"integer";if(-1===e.indexOf("E"))i=!0;else{if(t=Number(e),!isNaN(t))return"double";if(-1===e.indexOf(","))i=!0;else{if(e=e.replace(",","."),t=Number(e),!isNaN(t))return"double";i=!0}}}if(i){if(!/^[-]?\d*[.,]?\d*$/.test(e)){const t=new Date(e);return this._isValidDate(t,e)?"date":"string"}return"string"}return"string"}})).reduce(((e,t)=>void 0===e||e===t?t:"string"===e||"string"===t?"string":"double"===e||"double"===t?"double":void 0))}_isValidDate(t,i){if(!t||"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))return!1;let n=!0;if(Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("chrome")&&/\d+\W*$/.test(i)){const e=i.match(/[a-zA-Z]{2,}/);if(e){let t=!1,i=0;for(;!t&&i<=e.length;)t=!q.test(e[i]),i++;n=!t}}return n}_createQueryEngine(e,t){const{latitudeFieldName:i,longitudeFieldName:n}=t.locationInfo,{objectIdField:r,fields:o,extent:a,timeInfo:c}=t.layerDefinition;let f=[];const g=[],h=new Set,I=new Set,b=[];for(const{name:e,type:t}of o)"esriFieldTypeDate"===t?h.add(e):w.indexOf(t)>-1&&I.add(e),e!==r&&b.push(e);let j=0;const E=Object(_csv_csv_js__WEBPACK_IMPORTED_MODULE_20__["readRows"])(e);E.next();const D=Object(_csv_csv_js__WEBPACK_IMPORTED_MODULE_20__["parseRows"])(E,b,t.columnDelimiter);e:for(;;){const{value:e,done:t}=D.next();if(t)break e;const o=this._parseCoordinateValue(e[i]),l=this._parseCoordinateValue(e[n]);if(null!=l&&null!=o&&!isNaN(o)&&!isNaN(l)){e[i]=o,e[n]=l;for(const t in e)if(t!==i&&t!==n)if(h.has(t)){const i=new Date(e[t]);e[t]=this._isValidDate(i,e[t])?i.getTime():null}else if(I.has(t)){const i=V(e[t]);isNaN(i)?e[t]=null:e[t]=i}e[r]=j,j++,f.push(new C(l,o)),g.push(e)}}if(!Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_5__["equals"])({wkid:4326},a.spatialReference))if(Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_5__["isWebMercator"])(a.spatialReference))for(const e of f)[e.x,e.y]=Object(_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_7__["lngLatToXY"])(e.x,e.y,S);else f=Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_10__["projectMany"])(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_15__["jsonAdapter"],f,_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_6__["default"].WGS84,a.spatialReference,null);const q=new _data_FeatureStore_js__WEBPACK_IMPORTED_MODULE_18__["default"]({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1}),v=new _data_QueryEngine_js__WEBPACK_IMPORTED_MODULE_19__["default"]({fields:t.layerDefinition.fields,geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:c,objectIdField:r,spatialReference:a.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:q}),k=[];for(let e=0;e<f.length;e++){const{x:t,y:i}=f[e],n=g[e];n[r]=e+1,k.push(new _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_12__["default"](new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_13__["default"]([],[t,i]),n,null,n[r]))}return q.addMany(k),v}_parseCoordinateValue(e){if(null==e||""===e)return null;let t=V(e);return(isNaN(t)||Math.abs(t)>181)&&(t=parseFloat(e)),t}async _checkProjection(e){try{await Object(_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_16__["checkProjectionSupport"])(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_5__["WGS84"],e)}catch{throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("csv-layer","Projection not supported")}}});


/***/ }),

/***/ "X2wA":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/_commonjsHelpers.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, g */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return n; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function o(e,n,o){return e(o={path:n,exports:{},require:function(e,n){return r(null==n&&o.path)}},o.exports),o.exports}function r(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}


/***/ }),

/***/ "vKS7":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/sources/csv/csv.js ***!
  \**********************************************************************/
/*! exports provided: inferDelimiter, parseRows, readRowParts, readRows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inferDelimiter", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseRows", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readRowParts", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readRows", function() { return i; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const n=/^\s*"([\S\s]*)"\s*$/,t=/""/g,e=[","," ",";","|","\t"];function o(n,t){const e={},o=n.length;for(let r=0;r<o;r++)e[n[r]]=t[r];return e}function*r(n,t,e){let o=0;for(;o<=n.length;){const r=n.indexOf(t,o),i=n.substring(o,r>-1?r:void 0);o+=i.length+1,e&&!i.trim()||(yield i)}}function i(n){const t=n.includes("\r\n")?"\r\n":"\n";return r(n,t,!0)}function c(n,t){return r(n,t,!1)}function f(n){const t=n.trim();let o=0,r="";for(const n of e){const e=t.split(n).length;e>o&&(o=e,r=n)}return""===r?null:r}function*s(e,r,i){let f="",s="",l=0,d=[];n:for(;;){const{value:x,done:g}=e.next();if(g)return;const h=c(x,i);t:for(;;){const{value:e,done:o}=h.next();if(o)break t;if(f+=s+e,s="",l+=u(e),l%2==0){if(l>0){const e=n.exec(f);if(!e){d=[],f="",l=0;continue n}d.push(e[1].replace(t,'"'))}else d.push(f);f="",l=0}else s=i}0===l?(yield o(r,d),d=[]):s="\n"}}function u(n){let t=0,e=0;for(e=n.indexOf('"',e);e>=0;)t++,e=n.indexOf('"',e+1);return t}


/***/ })

}]);
//# sourceMappingURL=layers-graphics-sources-support-CSVSourceWorker-js-es2015.js.map