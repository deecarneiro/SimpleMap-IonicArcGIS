(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-graphics-sources-geojson-GeoJSONSourceWorker-js"],{

/***/ "BUoz":
/*!******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/sources/geojson/GeoJSONSourceWorker.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../geometry/support/spatialReferenceUtils.js */ "f4Nx");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../geometry/support/jsonUtils.js */ "qatw");
/* harmony import */ var _support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../support/fieldUtils.js */ "wdpY");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../request.js */ "Lqtk");
/* harmony import */ var _support_fieldType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../support/fieldType.js */ "Z4F+");
/* harmony import */ var _featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../featureConversionUtils.js */ "ZlUD");
/* harmony import */ var _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../support/FieldsIndex.js */ "gLc9");
/* harmony import */ var _data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../data/projectionSupport.js */ "HsO1");
/* harmony import */ var _geojson_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./geojson.js */ "46M0");
/* harmony import */ var _support_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../support/clientSideDefaults.js */ "iNG6");
/* harmony import */ var _data_FeatureStore_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../data/FeatureStore.js */ "ZRfE");
/* harmony import */ var _data_QueryEngine_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../data/QueryEngine.js */ "ZBG3");
/* harmony import */ var _support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../support/sourceUtils.js */ "IcpP");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const D={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};/* harmony default export */ __webpack_exports__["default"] = (class{constructor(){this._queryEngine=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._requiredFields=this._fieldsIndex=this._createDefaultAttributes=null}async load(t){const r=[];await this._checkProjection(t.spatialReference);let u=null;if(t.url){u=(await Object(_request_js__WEBPACK_IMPORTED_MODULE_5__["default"])(t.url,{responseType:"json"})).data,await Object(_geojson_js__WEBPACK_IMPORTED_MODULE_10__["validateGeoJSON"])(u)}const p=Object(_geojson_js__WEBPACK_IMPORTED_MODULE_10__["inferLayerProperties"])(u,{geometryType:t.geometryType}),y=t.fields||p.fields||[],c=null!=t.hasZ?t.hasZ:p.hasZ,T=p.geometryType,q=t.objectIdField||("number"===p.objectIdFieldType?p.objectIdFieldName:"OBJECTID")||"OBJECTID",x=t.spatialReference||_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__["WGS84"];let w=t.timeInfo;if(!T)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("geojson-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if("string"===p.objectIdFieldType&&r.push({name:"geojson-layer:unsupported-id-type",message:"Feature ids are of type string and can't be honored."}),y===p.fields&&p.unknownFields.length>0&&r.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:p.unknownFields}}),q){let e=null;y.some((t=>t.name===q&&(e=t,!0)))?(e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):y.unshift({alias:q,name:q,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const t of y){if(null==t.name&&(t.name=t.alias),null==t.alias&&(t.alias=t.name),!t.name)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("geojson-layer:invalid-field-name","field name is missing",{field:t});if(t.name===q&&(t.type="esriFieldTypeOID"),-1===_support_fieldType_js__WEBPACK_IMPORTED_MODULE_6__["kebabDict"].jsonValues.indexOf(t.type))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("geojson-layer:invalid-field-type",`invalid type for field "${t.name}"`,{field:t})}const R={};this._requiredFields=[];for(const e of y)if("esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type){e.editable=null==e.editable||!!e.editable,e.nullable=null==e.nullable||!!e.nullable;const t=Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__["getFieldDefaultValue"])(e);e.nullable||void 0!==t?R[e.name]=t:this._requiredFields.push(e)}if(this._fieldsIndex=new _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_8__["default"](y),w){if(w.startTimeField){const e=this._fieldsIndex.get(w.startTimeField);e?(w.startTimeField=e.name,e.type="esriFieldTypeDate"):w.startTimeField=null}if(w.endTimeField){const e=this._fieldsIndex.get(w.endTimeField);e?(w.endTimeField=e.name,e.type="esriFieldTypeDate"):w.endTimeField=null}if(w.trackIdField){const e=this._fieldsIndex.get(w.trackIdField);e?w.trackIdField=e.name:(w.trackIdField=null,r.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:w}}))}w.startTimeField||w.endTimeField||(r.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:w}}),w=null)}const O={warnings:r,featureErrors:[],layerDefinition:{...D,drawingInfo:Object(_support_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_11__["createDrawingInfo"])(T),templates:Object(_support_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_11__["createDefaultTemplate"])(R),extent:null,geometryType:T,objectIdField:q,fields:y,hasZ:!!c,timeInfo:w}};this._queryEngine=new _data_QueryEngine_js__WEBPACK_IMPORTED_MODULE_13__["default"]({fields:y,geometryType:T,hasM:!1,hasZ:c,objectIdField:q,spatialReference:x,timeInfo:w,featureStore:new _data_FeatureStore_js__WEBPACK_IMPORTED_MODULE_12__["default"]({geometryType:T,hasM:!1,hasZ:c})}),this._createDefaultAttributes=Object(_support_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_11__["createDefaultAttributesFunction"])(R,q),this._nextObjectId=p.maxObjectId+1;const S=Object(_geojson_js__WEBPACK_IMPORTED_MODULE_10__["createOptimizedFeatures"])(u,{geometryType:T,hasZ:c,objectIdFieldName:"number"===p.objectIdFieldType?q:null});if(!Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__["equals"])(x,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__["WGS84"]))for(const e of S)e.geometry&&(e.geometry=Object(_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_7__["convertFromGeometry"])(Object(_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_9__["project"])(Object(_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_7__["convertToGeometry"])(e.geometry,T,c,!1),_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__["WGS84"],x)));return this._loadInitialFeatures(O,S),O}async applyEdits(e){const{spatialReference:i,geometryType:s}=this._queryEngine;return await Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_14__["loadGeometryEngineForSimplify"])(i,s),Object(_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_9__["checkProjectionSupport"])(e.adds,i),Object(_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_9__["checkProjectionSupport"])(e.updates,i)]),this._applyEdits(e)}async queryFeatures(e={},t={}){return this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}_loadInitialFeatures(e,t){const{featureStore:i,objectIdField:s}=this._queryEngine,r=[];for(const i of t){const t=this._createDefaultAttributes(),n=Object(_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_14__["mixAttributes"])(this._fieldsIndex,this._requiredFields,t,i.attributes,!0,e.warnings);n?e.featureErrors.push(n):(this._assignObjectId(t,i.attributes,!0),i.attributes=t,i.objectId=t[s],r.push(i))}if(i.addMany(r),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){const{start:t,end:i}=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[t,i]}return e}_applyEdits(e){const{adds:t,updates:i,deletes:s}=e,r={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(r,t),i&&i.length&&this._applyUpdateEdits(r,i),s&&s.length){for(const e of s)r.deleteResults.push(Object(_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_14__["createFeatureEditSuccessResult"])(e));this._queryEngine.featureStore.removeManyById(s)}return{fullExtent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent,featureEditResults:r}}_applyAddEdits(e,t){const{addResults:i}=e,{geometryType:s,hasM:n,hasZ:o,objectIdField:a,spatialReference:l,featureStore:d}=this._queryEngine,p=[];for(const n of t){if(n.geometry&&s!==Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__["getJsonType"])(n.geometry)){i.push(Object(_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_14__["createFeatureEditErrorResult"])("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),o=Object(_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_14__["mixAttributes"])(this._fieldsIndex,this._requiredFields,t,n.attributes);if(o)i.push(o);else{if(this._assignObjectId(t,n.attributes),n.attributes=t,null!=n.uid){const t=n.attributes[a];e.uidToObjectId[n.uid]=t}n.geometry&&(n.geometry=Object(_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_9__["project"])(Object(_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_14__["simplify"])(n.geometry,l),n.geometry.spatialReference,l)),p.push(n),i.push(Object(_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_14__["createFeatureEditSuccessResult"])(n.attributes[a]))}}d.addMany(Object(_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_7__["convertFromFeatures"])([],p,s,o,n,a))}_applyUpdateEdits({updateResults:e},t){const{geometryType:i,hasM:s,hasZ:n,objectIdField:o,spatialReference:a,featureStore:l}=this._queryEngine;for(const d of t){const{attributes:t,geometry:u}=d,f=t&&t[o];if(null==f){e.push(Object(_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_14__["createFeatureEditErrorResult"])(`Identifier field ${o} missing`));continue}if(!l.has(f)){e.push(Object(_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_14__["createFeatureEditErrorResult"])(`Feature with object id ${f} missing`));continue}const c=Object(_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_7__["convertToFeature"])(l.getFeature(f),i,n,s);if(u){if(i!==Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__["getJsonType"])(u)){e.push(Object(_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_14__["createFeatureEditErrorResult"])("Incorrect geometry type."));continue}c.geometry=Object(_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_9__["project"])(Object(_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_14__["simplify"])(u,a),u.spatialReference,a)}if(t){const i=Object(_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_14__["mixAttributes"])(this._fieldsIndex,this._requiredFields,c.attributes,t);if(i){e.push(i);continue}}l.add(Object(_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_7__["convertFromFeature"])(c,i,n,s,o)),e.push(Object(_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_14__["createFeatureEditSuccessResult"])(f))}}_assignObjectId(e,t,i=!1){const s=this._queryEngine.objectIdField;i&&isFinite(t[s])?e[s]=t[s]:e[s]=this._nextObjectId++}async _checkProjection(t){try{await Object(_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_9__["checkProjectionSupport"])(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__["WGS84"],t)}catch{throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("geojson-layer","Projection not supported")}}});


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


/***/ })

}]);
//# sourceMappingURL=layers-graphics-sources-geojson-GeoJSONSourceWorker-js-es2015.js.map