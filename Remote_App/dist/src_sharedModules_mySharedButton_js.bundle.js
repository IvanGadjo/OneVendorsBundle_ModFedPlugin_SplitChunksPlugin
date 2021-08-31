"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkremote_app"] = self["webpackChunkremote_app"] || []).push([["src_sharedModules_mySharedButton_js"],{

/***/ "./src/sharedModules/mySharedButton.js":
/*!*********************************************!*\
  !*** ./src/sharedModules/mySharedButton.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ \"webpack/sharing/consume/default/d3/d3\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);\n// create & fill elements\r\nlet d3Btn = document.createElement('button');\r\nd3Btn.setAttribute('id','btn-d3');\r\nd3Btn.appendChild(document.createTextNode('D3 Button'));\r\n\r\n// append to the body\r\nlet container = document.getElementsByTagName('body');\r\ncontainer[0].appendChild(d3Btn);\r\n\r\n// use d3\r\n\r\nd3__WEBPACK_IMPORTED_MODULE_0__.select('#btn-d3').style('color','orange');   // change color of text to orange\n\n//# sourceURL=webpack://remote_app/./src/sharedModules/mySharedButton.js?");

/***/ })

}]);