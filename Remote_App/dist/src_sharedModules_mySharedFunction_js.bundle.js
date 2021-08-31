"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkremote_app"] = self["webpackChunkremote_app"] || []).push([["src_sharedModules_mySharedFunction_js"],{

/***/ "./src/sharedModules/mySharedFunction.js":
/*!***********************************************!*\
  !*** ./src/sharedModules/mySharedFunction.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"myFunction\": () => (/* binding */ myFunction)\n/* harmony export */ });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"webpack/sharing/consume/default/lodash/lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst myFunction = () => {\r\n    let sampleArray = [1,1,2,2,2,3,4,5,5,6];\r\n    let sortedArray = lodash__WEBPACK_IMPORTED_MODULE_0___default().sortedUniq(sampleArray);\r\n    console.log('My resulting array: ' + sortedArray);\r\n}\r\n\n\n//# sourceURL=webpack://remote_app/./src/sharedModules/mySharedFunction.js?");

/***/ })

}]);