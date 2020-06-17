module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actions.js":
/*!********************!*\
  !*** ./actions.js ***!
  \********************/
/*! exports provided: actionTypes, failure, increment, decrement, reset, loadData, loadDataSuccess, startClock, tickClock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "failure", function() { return failure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increment", function() { return increment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrement", function() { return decrement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reset", function() { return reset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadData", function() { return loadData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDataSuccess", function() { return loadDataSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startClock", function() { return startClock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tickClock", function() { return tickClock; });
const actionTypes = {
  FAILURE: 'FAILURE',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
  LOAD_DATA: 'LOAD_DATA',
  LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
  START_CLOCK: 'START_CLOCK',
  TICK_CLOCK: 'TICK_CLOCK',
  HYDRATE: 'HYDRATE'
};
function failure(error) {
  return {
    type: actionTypes.FAILURE,
    error
  };
}
function increment() {
  return {
    type: actionTypes.INCREMENT
  };
}
function decrement() {
  return {
    type: actionTypes.DECREMENT
  };
}
function reset() {
  return {
    type: actionTypes.RESET
  };
}
function loadData() {
  return {
    type: actionTypes.LOAD_DATA
  };
}
function loadDataSuccess(data) {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    data
  };
}
function startClock() {
  return {
    type: actionTypes.START_CLOCK
  };
}
function tickClock(isServer) {
  return {
    type: actionTypes.TICK_CLOCK,
    light: !isServer,
    ts: Date.now()
  };
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ "./store.js");
var _jsxFileName = "E:\\MainProject\\frontend\\Next-app\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function App({
  Component,
  pageProps
}) {
  return __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 10
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (_store__WEBPACK_IMPORTED_MODULE_1__["wrapper"].withRedux(App));

/***/ }),

/***/ "./reducer.js":
/*!********************!*\
  !*** ./reducer.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./actions.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  count: 0,
  error: false,
  lastUpdate: 0,
  light: false,
  placeholderData: null
};

function reducer(state, action) {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["HYDRATE"]:
      {
        return _objectSpread(_objectSpread({}, state), action.payload);
      }

    case _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].FAILURE:
      return _objectSpread(_objectSpread({}, state), {
        error: action.error
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].INCREMENT:
      return _objectSpread(_objectSpread({}, state), {
        count: state.count + 1
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].DECREMENT:
      return _objectSpread(_objectSpread({}, state), {
        count: state.count - 1
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].RESET:
      return _objectSpread(_objectSpread({}, state), {
        count: initialState.count
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].LOAD_DATA_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        placeholderData: action.data
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].TICK_CLOCK:
      return _objectSpread(_objectSpread({}, state), {
        lastUpdate: action.ts,
        light: !!action.light
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./saga.js":
/*!*****************!*\
  !*** ./saga.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./actions.js");



function* runClockSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["take"])(_actions__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].START_CLOCK);

  while (true) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["tickClock"])(false));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
  }
}

function* loadDataSaga() {
  try {
    const res = yield fetch('https://jsonplaceholder.typicode.com/users');
    const data = yield res.json();
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["loadDataSuccess"])(data));
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["failure"])(err));
  }
}

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(runClockSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].LOAD_DATA, loadDataSaga)]);
}

/* harmony default export */ __webpack_exports__["default"] = (rootSaga);

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: makeStore, wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeStore", function() { return makeStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer */ "./reducer.js");
/* harmony import */ var _saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./saga */ "./saga.js");






const bindMiddleware = middleware => {
  if (true) {
    const {
      composeWithDevTools
    } = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");

    return composeWithDevTools(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware));
  }

  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware);
};

const makeStore = context => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducer__WEBPACK_IMPORTED_MODULE_3__["default"], bindMiddleware([sagaMiddleware]));
  store.sagaTask = sagaMiddleware.run(_saga__WEBPACK_IMPORTED_MODULE_4__["default"]);
  return store;
};
const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__["createWrapper"])(makeStore, {
  debug: true
});

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIl0sIm5hbWVzIjpbImFjdGlvblR5cGVzIiwiRkFJTFVSRSIsIklOQ1JFTUVOVCIsIkRFQ1JFTUVOVCIsIlJFU0VUIiwiTE9BRF9EQVRBIiwiTE9BRF9EQVRBX1NVQ0NFU1MiLCJTVEFSVF9DTE9DSyIsIlRJQ0tfQ0xPQ0siLCJIWURSQVRFIiwiZmFpbHVyZSIsImVycm9yIiwidHlwZSIsImluY3JlbWVudCIsImRlY3JlbWVudCIsInJlc2V0IiwibG9hZERhdGEiLCJsb2FkRGF0YVN1Y2Nlc3MiLCJkYXRhIiwic3RhcnRDbG9jayIsInRpY2tDbG9jayIsImlzU2VydmVyIiwibGlnaHQiLCJ0cyIsIkRhdGUiLCJub3ciLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ3cmFwcGVyIiwid2l0aFJlZHV4IiwiaW5pdGlhbFN0YXRlIiwiY291bnQiLCJsYXN0VXBkYXRlIiwicGxhY2Vob2xkZXJEYXRhIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInJ1bkNsb2NrU2FnYSIsInRha2UiLCJwdXQiLCJkZWxheSIsImxvYWREYXRhU2FnYSIsInJlcyIsImZldGNoIiwianNvbiIsImVyciIsInJvb3RTYWdhIiwiYWxsIiwiY2FsbCIsInRha2VMYXRlc3QiLCJiaW5kTWlkZGxld2FyZSIsIm1pZGRsZXdhcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwicmVxdWlyZSIsImFwcGx5TWlkZGxld2FyZSIsIm1ha2VTdG9yZSIsImNvbnRleHQiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInJvb3RSZWR1Y2VyIiwic2FnYVRhc2siLCJydW4iLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNQSxXQUFXLEdB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cGFnZXNcXF9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJleHBvcnQgY29uc3QgYWN0aW9uVHlwZXMgPSB7XG4gIEZBSUxVUkU6ICdGQUlMVVJFJyxcbiAgSU5DUkVNRU5UOiAnSU5DUkVNRU5UJyxcbiAgREVDUkVNRU5UOiAnREVDUkVNRU5UJyxcbiAgUkVTRVQ6ICdSRVNFVCcsXG4gIExPQURfREFUQTogJ0xPQURfREFUQScsXG4gIExPQURfREFUQV9TVUNDRVNTOiAnTE9BRF9EQVRBX1NVQ0NFU1MnLFxuICBTVEFSVF9DTE9DSzogJ1NUQVJUX0NMT0NLJyxcbiAgVElDS19DTE9DSzogJ1RJQ0tfQ0xPQ0snLFxuICBIWURSQVRFOiAnSFlEUkFURScsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmYWlsdXJlKGVycm9yKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogYWN0aW9uVHlwZXMuRkFJTFVSRSxcbiAgICBlcnJvcixcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5jcmVtZW50KCkge1xuICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5JTkNSRU1FTlQgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjcmVtZW50KCkge1xuICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5ERUNSRU1FTlQgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXQoKSB7XG4gIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLlJFU0VUIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWREYXRhKCkge1xuICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5MT0FEX0RBVEEgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZERhdGFTdWNjZXNzKGRhdGEpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBhY3Rpb25UeXBlcy5MT0FEX0RBVEFfU1VDQ0VTUyxcbiAgICBkYXRhLFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydENsb2NrKCkge1xuICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5TVEFSVF9DTE9DSyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aWNrQ2xvY2soaXNTZXJ2ZXIpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBhY3Rpb25UeXBlcy5USUNLX0NMT0NLLFxuICAgIGxpZ2h0OiAhaXNTZXJ2ZXIsXG4gICAgdHM6IERhdGUubm93KCksXG4gIH1cbn1cbiIsImltcG9ydCB7IHdyYXBwZXIgfSBmcm9tICcuLi9zdG9yZSdcblxuZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxufVxuXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChBcHApXG4iLCJpbXBvcnQgeyBhY3Rpb25UeXBlcyB9IGZyb20gJy4vYWN0aW9ucydcbmltcG9ydCB7IEhZRFJBVEUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgY291bnQ6IDAsXG4gIGVycm9yOiBmYWxzZSxcbiAgbGFzdFVwZGF0ZTogMCxcbiAgbGlnaHQ6IGZhbHNlLFxuICBwbGFjZWhvbGRlckRhdGE6IG51bGwsXG59XG5cbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBIWURSQVRFOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfVxuICAgIH1cblxuICAgIGNhc2UgYWN0aW9uVHlwZXMuRkFJTFVSRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAuLi57IGVycm9yOiBhY3Rpb24uZXJyb3IgfSxcbiAgICAgIH1cblxuICAgIGNhc2UgYWN0aW9uVHlwZXMuSU5DUkVNRU5UOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIC4uLnsgY291bnQ6IHN0YXRlLmNvdW50ICsgMSB9LFxuICAgICAgfVxuXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5ERUNSRU1FTlQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLi4ueyBjb3VudDogc3RhdGUuY291bnQgLSAxIH0sXG4gICAgICB9XG5cbiAgICBjYXNlIGFjdGlvblR5cGVzLlJFU0VUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIC4uLnsgY291bnQ6IGluaXRpYWxTdGF0ZS5jb3VudCB9LFxuICAgICAgfVxuXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5MT0FEX0RBVEFfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAuLi57IHBsYWNlaG9sZGVyRGF0YTogYWN0aW9uLmRhdGEgfSxcbiAgICAgIH1cblxuICAgIGNhc2UgYWN0aW9uVHlwZXMuVElDS19DTE9DSzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAuLi57IGxhc3RVcGRhdGU6IGFjdGlvbi50cywgbGlnaHQ6ICEhYWN0aW9uLmxpZ2h0IH0sXG4gICAgICB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlclxuIiwiaW1wb3J0IHsgYWxsLCBjYWxsLCBkZWxheSwgcHV0LCB0YWtlLCB0YWtlTGF0ZXN0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xuaW1wb3J0IHsgYWN0aW9uVHlwZXMsIGZhaWx1cmUsIGxvYWREYXRhU3VjY2VzcywgdGlja0Nsb2NrIH0gZnJvbSAnLi9hY3Rpb25zJ1xuXG5mdW5jdGlvbiogcnVuQ2xvY2tTYWdhKCkge1xuICB5aWVsZCB0YWtlKGFjdGlvblR5cGVzLlNUQVJUX0NMT0NLKVxuICB3aGlsZSAodHJ1ZSkge1xuICAgIHlpZWxkIHB1dCh0aWNrQ2xvY2soZmFsc2UpKVxuICAgIHlpZWxkIGRlbGF5KDEwMDApXG4gIH1cbn1cblxuZnVuY3Rpb24qIGxvYWREYXRhU2FnYSgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSB5aWVsZCBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzJylcbiAgICBjb25zdCBkYXRhID0geWllbGQgcmVzLmpzb24oKVxuICAgIHlpZWxkIHB1dChsb2FkRGF0YVN1Y2Nlc3MoZGF0YSkpXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHlpZWxkIHB1dChmYWlsdXJlKGVycikpXG4gIH1cbn1cblxuZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xuICB5aWVsZCBhbGwoW1xuICAgIGNhbGwocnVuQ2xvY2tTYWdhKSxcbiAgICB0YWtlTGF0ZXN0KGFjdGlvblR5cGVzLkxPQURfREFUQSwgbG9hZERhdGFTYWdhKSxcbiAgXSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgcm9vdFNhZ2FcbiIsImltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCdcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJ1xuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcidcblxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcidcbmltcG9ydCByb290U2FnYSBmcm9tICcuL3NhZ2EnXG5cbmNvbnN0IGJpbmRNaWRkbGV3YXJlID0gKG1pZGRsZXdhcmUpID0+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSA9IHJlcXVpcmUoJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbicpXG4gICAgcmV0dXJuIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpKVxuICB9XG4gIHJldHVybiBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSlcbn1cblxuZXhwb3J0IGNvbnN0IG1ha2VTdG9yZSA9IChjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKVxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBiaW5kTWlkZGxld2FyZShbc2FnYU1pZGRsZXdhcmVdKSlcblxuICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSlcblxuICByZXR1cm4gc3RvcmVcbn1cblxuZXhwb3J0IGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKG1ha2VTdG9yZSwgeyBkZWJ1ZzogdHJ1ZSB9KVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9