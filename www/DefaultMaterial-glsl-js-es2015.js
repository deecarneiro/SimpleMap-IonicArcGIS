(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["DefaultMaterial-glsl-js"],{

/***/ "SjXz":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/DefaultMaterial.glsl.js ***!
  \*****************************************************************************************/
/*! exports provided: build */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/shaderModules/interfaces.js */ "OIYib");
/* harmony import */ var _core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/shaderLibrary/Transform.glsl.js */ "Tbkp");
/* harmony import */ var _core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/shaderModules/ShaderBuilder.js */ "aQrP");
/* harmony import */ var _core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/shaderLibrary/Slice.glsl.js */ "0nJL");
/* harmony import */ var _core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/shaderLibrary/shading/VisualVariables.glsl.js */ "viRi");
/* harmony import */ var _core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/shaderLibrary/util/AlphaDiscard.glsl.js */ "69UF");
/* harmony import */ var _core_shaderLibrary_attributes_VerticalOffset_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/shaderLibrary/attributes/VerticalOffset.glsl.js */ "F7CJ");
/* harmony import */ var _core_shaderLibrary_attributes_VertexColor_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/shaderLibrary/attributes/VertexColor.glsl.js */ "bVvB");
/* harmony import */ var _core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/shaderLibrary/shading/ReadShadowMap.glsl.js */ "0BfS");
/* harmony import */ var _core_shaderLibrary_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/shaderLibrary/ForwardLinearDepth.glsl.js */ "vXUg");
/* harmony import */ var _core_shaderLibrary_shading_PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/shaderLibrary/shading/PhysicallyBasedRendering.glsl.js */ "XV/G");
/* harmony import */ var _core_shaderLibrary_attributes_InstancedDoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/shaderLibrary/attributes/InstancedDoublePrecision.glsl.js */ "1TnO");
/* harmony import */ var _core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js */ "368d");
/* harmony import */ var _core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js */ "p9cc");
/* harmony import */ var _core_shaderLibrary_Offset_glsl_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/shaderLibrary/Offset.glsl.js */ "F8o4");
/* harmony import */ var _core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../core/shaderLibrary/attributes/NormalAttribute.glsl.js */ "wzLF");
/* harmony import */ var _core_shaderLibrary_attributes_PositionAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../core/shaderLibrary/attributes/PositionAttribute.glsl.js */ "sJp1");
/* harmony import */ var _core_shaderLibrary_attributes_SymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../core/shaderLibrary/attributes/SymbolColor.glsl.js */ "bLIi");
/* harmony import */ var _core_shaderLibrary_attributes_VertexNormal_glsl_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../core/shaderLibrary/attributes/VertexNormal.glsl.js */ "fRF2");
/* harmony import */ var _core_shaderLibrary_default_DefaultMaterialAuxiliaryPasses_glsl_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl.js */ "fiGu");
/* harmony import */ var _core_shaderLibrary_shading_ComputeNormalTexture_glsl_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../core/shaderLibrary/shading/ComputeNormalTexture.glsl.js */ "DXpj");
/* harmony import */ var _core_shaderLibrary_shading_EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl.js */ "cIib");
/* harmony import */ var _core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../core/shaderLibrary/shading/EvaluateSceneLighting.glsl.js */ "6kvK");
/* harmony import */ var _core_shaderLibrary_shading_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../core/shaderLibrary/shading/Normals.glsl.js */ "qrV2");
/* harmony import */ var _core_shaderLibrary_util_HeaderComment_glsl_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../core/shaderLibrary/util/HeaderComment.glsl.js */ "1W42");
/* harmony import */ var _core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../core/shaderLibrary/util/MixExternalColor.glsl.js */ "NiZE");
/* harmony import */ var _chunks_DefaultMaterial_glsl_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../chunks/DefaultMaterial.glsl.js */ "AxBq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "build", function() { return _chunks_DefaultMaterial_glsl_js__WEBPACK_IMPORTED_MODULE_26__["b"]; });

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/



/***/ })

}]);
//# sourceMappingURL=DefaultMaterial-glsl-js-es2015.js.map