/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkhost_app"] = self["webpackChunkhost_app"] || []).push([["src_mainLogic_js"],{

/***/ "./src/mainLogic.js":
/*!**************************!*\
  !*** ./src/mainLogic.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("let loadSharedFuncBtn = document.getElementById('btn-shared-func-loader');\r\n\r\nloadSharedFuncBtn.addEventListener('click', async () => {\r\n    let sharedFunction = await __webpack_require__.e(/*! import() */ \"webpack_container_remote_remoteApp_mySharedFunction\").then(__webpack_require__.t.bind(__webpack_require__, /*! remoteApp/mySharedFunction */ \"webpack/container/remote/remoteApp/mySharedFunction\", 23));\r\n    sharedFunction();\r\n})\n\n//# sourceURL=webpack://host_app/./src/mainLogic.js?");

/***/ })

}]);