(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-support-layersCreator-js"],{

/***/ "5Q/x":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/layersCreator.js ***!
  \*******************************************************************/
/*! exports provided: populateOperationalLayers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "populateOperationalLayers", function() { return n; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Collection.js */ "LE9a");
/* harmony import */ var _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../portal/PortalItem.js */ "p+Gi");
/* harmony import */ var _renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../renderers/support/styleUtils.js */ "YOx9");
/* harmony import */ var _lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lazyLayerLoader.js */ "oLSx");
/* harmony import */ var _portal_support_featureCollectionUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../portal/support/featureCollectionUtils.js */ "IEjF");
/* harmony import */ var _portal_support_portalLayers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../portal/support/portalLayers.js */ "XJLX");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
async function n(r,a,t){if(!a)return;const y=[];for(const e of a){const r=I(e,t);"GroupLayer"===e.layerType?y.push(m(r,e,t)):y.push(r)}const i=await Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["eachAlways"])(y);for(const e of i)!e.value||t.filter&&!t.filter(e.value)||r.add(e.value)}const l={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer"},c={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},s={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",DefaultTileLayer:"TileLayer"},p={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",VectorTileLayer:"VectorTileLayer",GroupLayer:"GroupLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",GeoRSS:"GeoRSSLayer",KML:"KMLLayer",WFS:"UnsupportedLayer",SubtypeGroupLayer:"UnsupportedLayer",WMS:"WMSLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",DefaultTileLayer:"TileLayer"},S={ArcGISFeatureLayer:"FeatureLayer"},u={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};async function I(e,r){return async function(e,r,a){const i=new e;i.read(r,a.context),"group"===i.type&&d(r)&&await async function(e,r,a){const t=_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_5__["layerLookupMap"].FeatureLayer,i=await t(),L=r.featureCollection,o=L.showLegend,n=L.layers.map((e=>{const r=new i;return r.read(e,a),null!=o&&r.read({showLegend:o},a),r}));e.layers.addMany(n)}(i,r,a.context);return await Object(_renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_4__["loadStyleRenderer"])(i,a.context),i}(await async function(e,r){const t=r.context,n=function(e){let r;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":r=s;break;case"ground":r=c;break;default:r=l}break;default:switch(e.layerContainerType){case"basemap":r=u;break;case"tables":r=S;break;default:r=p}}return r}(t);let I=e.layerType||e.type;!I&&r&&r.defaultLayerType&&(I=r.defaultLayerType);const m=n[I];let g=m?_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_5__["layerLookupMap"][m]:_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_5__["layerLookupMap"].UnknownLayer;const f=t&&t.portal;if(T(e)){if(e.itemId){const r=new _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_3__["default"]({id:e.itemId,portal:f});await r.load();const t=(await Object(_portal_support_portalLayers_js__WEBPACK_IMPORTED_MODULE_7__["selectLayerClassPath"])(r)).className||"UnknownLayer";g=_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_5__["layerLookupMap"][t]}}else"ArcGISFeatureLayer"===I&&(await Object(_portal_support_featureCollectionUtils_js__WEBPACK_IMPORTED_MODULE_6__["isMapNotesLayer"])(e,f)?g=_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_5__["layerLookupMap"].MapNotesLayer:await Object(_portal_support_featureCollectionUtils_js__WEBPACK_IMPORTED_MODULE_6__["isRouteLayer"])(e,f)?g=_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_5__["layerLookupMap"].RouteLayer:d(e)&&(g=_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_5__["layerLookupMap"].GroupLayer));e.wmtsInfo&&e.wmtsInfo.url&&e.wmtsInfo.layerIdentifier&&(g=_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_5__["layerLookupMap"].WMTSLayer);return g()}(e,r),e,r)}function d(e){if("ArcGISFeatureLayer"!==e.layerType||T(e))return!1;const r=e.featureCollection;return!!(r&&r.layers&&r.layers.length>1)}function T(e){return"Feature Collection"===e.type}async function m(e,a,t){const y=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_2__["default"],i=n(y,Array.isArray(a.layers)?a.layers:[],t),L=await e;if(await i,"group"===L.type)return L.layers.addMany(y),L}


/***/ }),

/***/ "IEjF":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/portal/support/featureCollectionUtils.js ***!
  \****************************************************************************/
/*! exports provided: isMapNotesLayer, isRouteLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMapNotesLayer", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRouteLayer", function() { return o; });
/* harmony import */ var _PortalItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PortalItem.js */ "p+Gi");
/* harmony import */ var _portalItemUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portalItemUtils.js */ "Dfpg");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function r(e,t){return n(e,t,"notes","Map Notes")}function o(e,t){return n(e,t,"route","Route Layer")}async function n(r,o,n,i){if(!r.layerType||"ArcGISFeatureLayer"!==r.layerType)return!1;if(r.url)return!1;if(r.featureCollectionType&&r.featureCollectionType===n)return!0;if(r.itemId){const n=new _PortalItem_js__WEBPACK_IMPORTED_MODULE_0__["default"]({id:r.itemId,portal:o});return await n.load(),"Feature Collection"===n.type&&Object(_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_1__["hasTypeKeyword"])(n,i)}return!1}


/***/ }),

/***/ "YOx9":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/styleUtils.js ***!
  \*******************************************************************/
/*! exports provided: loadStyleRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadStyleRenderer", function() { return t; });
/* harmony import */ var _core_Warning_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Warning.js */ "ACjl");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/asyncUtils.js */ "eSsm");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
async function t(t,i,n){const s=t&&t.getAtOrigin&&t.getAtOrigin("renderer",i.origin);if(s&&"unique-value"===s.type&&s.styleOrigin){const a=await Object(_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_2__["result"])(s.populateFromStyle());if(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["throwIfAborted"])(n),!1===a.ok){const r=a.error;i&&i.messages&&i.messages.push(new _core_Warning_js__WEBPACK_IMPORTED_MODULE_0__["default"]("renderer:style-reference",`Failed to create unique value renderer from style reference: ${r.message}`,{error:r,context:i})),t.clear("renderer",i.origin)}}}


/***/ })

}]);
//# sourceMappingURL=layers-support-layersCreator-js-es2015.js.map