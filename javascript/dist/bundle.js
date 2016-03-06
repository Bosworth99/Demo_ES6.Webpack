/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _app = __webpack_require__(1);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(function () {
	    'use strict';

	    var app = window.app = new _app2.default();

	    app.init();
	})();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _config = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	exports.default = function () {
	    'use strict';

	    var App = function () {
	        function App() {
	            _classCallCheck(this, App);

	            console.log('App::constructor %s %s', _config.config.name, _config.config.version);
	        }

	        _createClass(App, [{
	            key: 'init',
	            value: function init() {
	                console.log('App::init %o', this);

	                _method();
	                _method('holy moly');
	            }
	        }]);

	        return App;
	    }();

	    var _private = 'foobar';
	    var _method = function _method(str) {

	        console.log('_private = ', str || _private);
	    };

	    return App;
	}();

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	///////////////////////////////////////////////////////////////////////////
	//
	//  @class      : Config
	//  @comment    : configuration
	//
	///////////////////////////////////////////////////////////////////////////

	var config = exports.config = {
	    name: "10k-interactive.com",
	    version: 0.1,
	    debug: true
	};

/***/ }
/******/ ]);