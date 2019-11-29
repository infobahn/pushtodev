/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/details-polyfill/index.js":
/*!************************************************!*\
  !*** ./node_modules/details-polyfill/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;void (function (root, factory) {\n  if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))\n  else {}\n}(this, function () {\n  var DETAILS = 'details'\n  var SUMMARY = 'summary'\n\n  var supported = checkSupport()\n  if (supported) return\n\n  // Add a classname\n  document.documentElement.className += ' no-details'\n\n  window.addEventListener('click', clickHandler)\n\n  injectStyle('details-polyfill-style',\n    'html.no-details ' + DETAILS + ':not([open]) > :not(' + SUMMARY + ') { display: none; }\\n' +\n    'html.no-details ' + DETAILS + ' > ' + SUMMARY + ':before { content: \"\\u25b6\"; display: inline-block; font-size: .8em; width: 1.5em; }\\n' +\n    'html.no-details ' + DETAILS + '[open] > ' + SUMMARY + ':before { content: \"\\u25bc\"; }')\n\n  /*\n   * Click handler for `<summary>` tags\n   */\n\n  function clickHandler (e) {\n    if (e.target.nodeName.toLowerCase() === 'summary') {\n      var details = e.target.parentNode\n      if (!details) return\n\n      if (details.getAttribute('open')) {\n        details.open = false\n        details.removeAttribute('open')\n      } else {\n        details.open = true\n        details.setAttribute('open', 'open')\n      }\n    }\n  }\n\n  /*\n   * Checks for support for `<details>`\n   */\n\n  function checkSupport () {\n    var el = document.createElement(DETAILS)\n    if (!('open' in el)) return false\n\n    el.innerHTML = '<' + SUMMARY + '>a</' + SUMMARY + '>b'\n    document.body.appendChild(el)\n\n    var diff = el.offsetHeight\n    el.open = true\n    var result = (diff != el.offsetHeight)\n\n    document.body.removeChild(el)\n    return result\n  }\n\n  /*\n   * Injects styles (idempotent)\n   */\n\n  function injectStyle (id, style) {\n    if (document.getElementById(id)) return\n\n    var el = document.createElement('style')\n    el.id = id\n    el.innerHTML = style\n\n    document.getElementsByTagName('head')[0].appendChild(el)\n  }\n})); // eslint-disable-line semi\n\n\n//# sourceURL=webpack:///./node_modules/details-polyfill/index.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.scss */ \"./src/sass/style.scss\");\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n\n__webpack_require__(/*! details-polyfill */ \"./node_modules/details-polyfill/index.js\");\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/style.scss?");

/***/ })

/******/ });