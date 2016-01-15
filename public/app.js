/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var main_ts_1 = __webpack_require__(1);
	main_ts_1.default();


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Helloworld_ts_1 = __webpack_require__(2);
	function main() {
	    var h = new Helloworld_ts_1.default("Kuma");
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = main;


/***/ },
/* 2 */
/***/ function(module, exports) {

	var Helloworld = (function () {
	    function Helloworld(text) {
	        console.log("Hello World From " + text);
	    }
	    return Helloworld;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Helloworld;


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmMxMWJlMWZmY2ZiMzk0NTM3YmIiLCJ3ZWJwYWNrOi8vLy4vdHMvZW50cnkudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi90cy9jbGFzc2VzL0hlbGxvd29ybGQudHMiXSwibmFtZXMiOlsibWFpbiIsIkhlbGxvd29ybGQiLCJIZWxsb3dvcmxkLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQSxxQ0FBaUIsQ0FBVyxDQUFDO0FBRTdCLGtCQUFJLEVBQUUsQ0FBQzs7Ozs7OztBQ0ZQLDJDQUF1QixDQUd2QixDQUFDLENBSCtDO0FBR2hEO0tBQ0lBLElBQUlBLENBQUNBLEdBQUdBLElBQUlBLHVCQUFVQSxDQUFDQSxNQUFNQSxDQUFDQTtBQUNsQ0EsRUFBQ0E7QUFFRDttQkFBZSxJQUFJLENBQUM7Ozs7Ozs7QUNQcEI7S0FDSUMsb0JBQVlBLElBQVlBO1NBQ3BCQyxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxzQkFBb0JBLElBQU1BLENBQUNBLENBQUNBO0tBQzVDQSxDQUFDQTtLQUNMRCxpQkFBQ0E7QUFBREEsRUFBQ0EsSUFBQTtBQUpEOzZCQUlDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgNmMxMWJlMWZmY2ZiMzk0NTM3YmJcbiAqKi8iLCJpbXBvcnQgbWFpbiBmcm9tIFwiLi9tYWluLnRzXCI7XG5cbm1haW4oKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3RzL2VudHJ5LnRzXG4gKiovIiwiaW1wb3J0IEhlbGxvd29ybGQgZnJvbSAnLi9jbGFzc2VzL0hlbGxvd29ybGQudHMnXG5cblxuZnVuY3Rpb24gbWFpbigpe1xuICAgIGxldCBoID0gbmV3IEhlbGxvd29ybGQoXCJLdW1hXCIpXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1haW47XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi90cy9tYWluLnRzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVsbG93b3JsZCB7XG4gICAgY29uc3RydWN0b3IodGV4dDogc3RyaW5nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBIZWxsbyBXb3JsZCBGcm9tICR7dGV4dH1gKTtcbiAgICB9XG59XG5cblxuXG5cbiAgICBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3RzL2NsYXNzZXMvSGVsbG93b3JsZC50c1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=