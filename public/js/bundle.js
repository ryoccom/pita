/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./asset_src/js/index.js":
/*!*******************************!*\
  !*** ./asset_src/js/index.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/function */ \"./asset_src/js/modules/function.js\");\n/* harmony import */ var _modules_function__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_function__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack://portfolio/./asset_src/js/index.js?");

/***/ }),

/***/ "./asset_src/js/modules/function.js":
/*!******************************************!*\
  !*** ./asset_src/js/modules/function.js ***!
  \******************************************/
/***/ (function() {

eval("var preview = document.getElementById(\"preview\");\nvar dropZone = document.getElementById('droparea');\nvar fileInput = document.getElementById('filebtn');\nvar delatearea = document.getElementById('delatearea');\ndropZone.addEventListener('dragover', function (e) {\n  e.stopPropagation();\n  e.preventDefault();\n  this.style.background = '#30e3ca';\n}, false);\ndropZone.addEventListener('dragleave', function (e) {\n  e.stopPropagation();\n  e.preventDefault();\n  this.style.background = '#11999e';\n}, false);\ndropZone.addEventListener('drop', function (e) {\n  e.stopPropagation();\n  e.preventDefault();\n  this.style.background = '#30e3ca';\n  var files = e.dataTransfer.files;\n  if (files.length > 1) return alert('アップロードできるファイルは1つだけです。');\n  fileInput.files = files;\n  previewFile(files[0]);\n}, false);\n\nfunction previewFile(file) {\n  var fr = new FileReader();\n  fr.readAsDataURL(file);\n\n  fr.onload = function () {\n    var img = document.createElement('img');\n    img.setAttribute('src', fr.result);\n    preview.innerHTML = '';\n    preview.appendChild(img);\n    delatearea.style.display = \"none\";\n  };\n}\n\n//# sourceURL=webpack://portfolio/./asset_src/js/modules/function.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./asset_src/js/index.js");
/******/ 	
/******/ })()
;