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

eval("let loadSharedModulesBtn = document.getElementById('btn-shared-modules-loader');\r\n\r\nloadSharedModulesBtn.addEventListener('click', async () => {\r\n    let sharedFunctionModule = await __webpack_require__.e(/*! import() */ \"webpack_container_remote_remoteApp_mySharedFunction\").then(__webpack_require__.t.bind(__webpack_require__, /*! remoteApp/mySharedFunction */ \"webpack/container/remote/remoteApp/mySharedFunction\", 23));\r\n    sharedFunctionModule.myFunction();\r\n\r\n    let sharedButtonModule = await __webpack_require__.e(/*! import() */ \"webpack_container_remote_remoteApp_mySharedButton\").then(__webpack_require__.t.bind(__webpack_require__, /*! remoteApp/mySharedButton */ \"webpack/container/remote/remoteApp/mySharedButton\", 23));\r\n    let sharedButton = document.createElement(sharedButtonModule.name);\r\n    let sharedButtonContainer = document.getElementById('shared-btn-container');\r\n    sharedButtonContainer.appendChild(sharedButton);\r\n})\n\n//# sourceURL=webpack://host_app/./src/mainLogic.js?");

/***/ })

}]);