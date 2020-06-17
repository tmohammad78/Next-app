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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ "./store.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ "./actions.js");
/* harmony import */ var _src_Container_Order__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/Container/Order */ "./src/Container/Order/index.tsx");
/* harmony import */ var _src_Hoc_Auth_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/Hoc/Auth/index */ "./src/Hoc/Auth/index.tsx");
var _jsxFileName = "E:\\MainProject\\frontend\\Next-app\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // import Page from "../components/page";




const Index = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])(); // useEffect(() => {
  //   if (!logged) {
  //     Router.push("/auth");
  //   }
  // });

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["startClock"])());
  }, [dispatch]);
  const temp = Object(_src_Hoc_Auth_index__WEBPACK_IMPORTED_MODULE_6__["default"])(_src_Container_Order__WEBPACK_IMPORTED_MODULE_5__["default"]);
  debugger;
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 10
    }
  }, temp);
};

const getStaticProps = _store__WEBPACK_IMPORTED_MODULE_3__["wrapper"].getStaticProps(async ({
  store
}) => {
  store.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["tickClock"])(false));

  if (!store.getState().placeholderData) {
    store.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["loadData"])());
    store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_2__["END"]);
  }

  await store.sagaTask.toPromise();
});
/* harmony default export */ __webpack_exports__["default"] = (Index);

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

/***/ "./src/Container/Order/index.tsx":
/*!***************************************!*\
  !*** ./src/Container/Order/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\MainProject\\frontend\\Next-app\\src\\Container\\Order\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Order = () => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, "order page");
};

/* harmony default export */ __webpack_exports__["default"] = (Order);

/***/ }),

/***/ "./src/Hoc/Auth/index.tsx":
/*!********************************!*\
  !*** ./src/Hoc/Auth/index.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\MainProject\\frontend\\Next-app\\src\\Hoc\\Auth\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const AuthRequire = ({
  ComposedComponent
}) => {
  return props => {
    // const auth = useSelector<IApplicationState, AuthState>(state => state.auth);
    const {
      0: logged,
      1: setLogged
    } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

    if (logged) {
      __jsx(ComposedComponent, _extends({}, props, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 13
        }
      }));
    } // if (auth.logged) {
    //     return <ComposedComponent {...props} />
    // }


    return next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/auth");
  };
};

/* harmony default export */ __webpack_exports__["default"] = (AuthRequire);

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

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\MainProject\frontend\Next-app\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NhZ2EuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnRhaW5lci9PcmRlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0hvYy9BdXRoL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiJdLCJuYW1lcyI6WyJhY3Rpb25UeXBlcyIsIkZBSUxVUkUiLCJJTkNSRU1FTlQiLCJERUNSRU1FTlQiLCJSRVNFVCIsIkxPQURfREFUQSIsIkxPQURfREFUQV9TVUNDRVNTIiwiU1RBUlRfQ0xPQ0siLCJUSUNLX0NMT0NLIiwiSFlEUkFURSIsImZhaWx1cmUiLCJlcnJvciIsInR5cGUiLCJpbmNyZW1lbnQiLCJkZWNyZW1lbnQiLCJyZXNldCIsImxvYWREYXRhIiwibG9hZERhdGFTdWNjZXNzIiwiZGF0YSIsInN0YXJ0Q2xvY2siLCJ0aWNrQ2xvY2siLCJpc1NlcnZlciIsImxpZ2h0IiwidHMiLCJEYXRlIiwibm93IiwiSW5kZXgiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlRWZmZWN0IiwidGVtcCIsIkF1dGhSZXF1aXJlIiwiT3JkZXIiLCJnZXRTdGF0aWNQcm9wcyIsIndyYXBwZXIiLCJzdG9yZSIsImdldFN0YXRlIiwicGxhY2Vob2xkZXJEYXRhIiwiRU5EIiwic2FnYVRhc2siLCJ0b1Byb21pc2UiLCJpbml0aWFsU3RhdGUiLCJjb3VudCIsImxhc3RVcGRhdGUiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwicnVuQ2xvY2tTYWdhIiwidGFrZSIsInB1dCIsImRlbGF5IiwibG9hZERhdGFTYWdhIiwicmVzIiwiZmV0Y2giLCJqc29uIiwiZXJyIiwicm9vdFNhZ2EiLCJhbGwiLCJjYWxsIiwidGFrZUxhdGVzdCIsIkNvbXBvc2VkQ29tcG9uZW50IiwicHJvcHMiLCJsb2dnZWQiLCJzZXRMb2dnZWQiLCJ1c2VTdGF0ZSIsIlJvdXRlciIsInB1c2giLCJiaW5kTWlkZGxld2FyZSIsIm1pZGRsZXdhcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwicmVxdWlyZSIsImFwcGx5TWlkZGxld2FyZSIsIm1ha2VTdG9yZSIsImNvbnRleHQiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU3RvcmUiLCJyb290UmVkdWNlciIsInJ1biIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7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QUdDLGlEQUFvQixFQUEzQztBQUNBLFFBQU16QyxLQUFLLEdBQUcwQyx5REFBVyxDQUFDQyxnREFBRCxFQUFjVixjQUFjLENBQUMsQ0FBQ08sY0FBRCxDQUFELENBQTVCLENBQXpCO0FBRUF4QyxPQUFLLENBQUNJLFFBQU4sR0FBaUJvQyxjQUFjLENBQUNJLEdBQWYsQ0FBbUJ0Qiw2Q0FBbkIsQ0FBakI7QUFFQSxTQUFPdEIsS0FBUDtBQUNELENBUE07QUFTQSxNQUFNRCxPQUFPLEdBQUc4Qyx3RUFBYSxDQUFDUCxTQUFELEVBQVk7QUFBRVEsT0FBSyxFQUFFO0FBQVQsQ0FBWixDQUE3QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCUCwrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJleHBvcnQgY29uc3QgYWN0aW9uVHlwZXMgPSB7XG4gIEZBSUxVUkU6ICdGQUlMVVJFJyxcbiAgSU5DUkVNRU5UOiAnSU5DUkVNRU5UJyxcbiAgREVDUkVNRU5UOiAnREVDUkVNRU5UJyxcbiAgUkVTRVQ6ICdSRVNFVCcsXG4gIExPQURfREFUQTogJ0xPQURfREFUQScsXG4gIExPQURfREFUQV9TVUNDRVNTOiAnTE9BRF9EQVRBX1NVQ0NFU1MnLFxuICBTVEFSVF9DTE9DSzogJ1NUQVJUX0NMT0NLJyxcbiAgVElDS19DTE9DSzogJ1RJQ0tfQ0xPQ0snLFxuICBIWURSQVRFOiAnSFlEUkFURScsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmYWlsdXJlKGVycm9yKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogYWN0aW9uVHlwZXMuRkFJTFVSRSxcbiAgICBlcnJvcixcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5jcmVtZW50KCkge1xuICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5JTkNSRU1FTlQgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjcmVtZW50KCkge1xuICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5ERUNSRU1FTlQgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXQoKSB7XG4gIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLlJFU0VUIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWREYXRhKCkge1xuICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5MT0FEX0RBVEEgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZERhdGFTdWNjZXNzKGRhdGEpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBhY3Rpb25UeXBlcy5MT0FEX0RBVEFfU1VDQ0VTUyxcbiAgICBkYXRhLFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydENsb2NrKCkge1xuICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5TVEFSVF9DTE9DSyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aWNrQ2xvY2soaXNTZXJ2ZXIpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBhY3Rpb25UeXBlcy5USUNLX0NMT0NLLFxuICAgIGxpZ2h0OiAhaXNTZXJ2ZXIsXG4gICAgdHM6IERhdGUubm93KCksXG4gIH1cbn1cbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBFTkQgfSBmcm9tIFwicmVkdXgtc2FnYVwiO1xuaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gXCIuLi9zdG9yZVwiO1xuaW1wb3J0IHsgbG9hZERhdGEsIHN0YXJ0Q2xvY2ssIHRpY2tDbG9jayB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XG4vLyBpbXBvcnQgUGFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9wYWdlXCI7XG5pbXBvcnQgT3JkZXIgZnJvbSBcIi4uL3NyYy9Db250YWluZXIvT3JkZXJcIjtcbmltcG9ydCBBdXRoUmVxdWlyZSBmcm9tIFwiLi4vc3JjL0hvYy9BdXRoL2luZGV4XCI7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBpZiAoIWxvZ2dlZCkge1xuICAvLyAgICAgUm91dGVyLnB1c2goXCIvYXV0aFwiKTtcbiAgLy8gICB9XG4gIC8vIH0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKHN0YXJ0Q2xvY2soKSk7XG4gIH0sIFtkaXNwYXRjaF0pO1xuXG4gIGNvbnN0IHRlbXAgPSBBdXRoUmVxdWlyZShPcmRlcik7XG4gIGRlYnVnZ2VyXG4gIHJldHVybiA8ZGl2Pnt0ZW1wfTwvZGl2Pjtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IHdyYXBwZXIuZ2V0U3RhdGljUHJvcHMoYXN5bmMgKHsgc3RvcmUgfSkgPT4ge1xuICBzdG9yZS5kaXNwYXRjaCh0aWNrQ2xvY2soZmFsc2UpKTtcblxuICBpZiAoIXN0b3JlLmdldFN0YXRlKCkucGxhY2Vob2xkZXJEYXRhKSB7XG4gICAgc3RvcmUuZGlzcGF0Y2gobG9hZERhdGEoKSk7XG4gICAgc3RvcmUuZGlzcGF0Y2goRU5EKTtcbiAgfVxuXG4gIGF3YWl0IHN0b3JlLnNhZ2FUYXNrLnRvUHJvbWlzZSgpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIiwiaW1wb3J0IHsgYWN0aW9uVHlwZXMgfSBmcm9tICcuL2FjdGlvbnMnXG5pbXBvcnQgeyBIWURSQVRFIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGNvdW50OiAwLFxuICBlcnJvcjogZmFsc2UsXG4gIGxhc3RVcGRhdGU6IDAsXG4gIGxpZ2h0OiBmYWxzZSxcbiAgcGxhY2Vob2xkZXJEYXRhOiBudWxsLFxufVxuXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgSFlEUkFURToge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH1cbiAgICB9XG5cbiAgICBjYXNlIGFjdGlvblR5cGVzLkZBSUxVUkU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLi4ueyBlcnJvcjogYWN0aW9uLmVycm9yIH0sXG4gICAgICB9XG5cbiAgICBjYXNlIGFjdGlvblR5cGVzLklOQ1JFTUVOVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAuLi57IGNvdW50OiBzdGF0ZS5jb3VudCArIDEgfSxcbiAgICAgIH1cblxuICAgIGNhc2UgYWN0aW9uVHlwZXMuREVDUkVNRU5UOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIC4uLnsgY291bnQ6IHN0YXRlLmNvdW50IC0gMSB9LFxuICAgICAgfVxuXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5SRVNFVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAuLi57IGNvdW50OiBpbml0aWFsU3RhdGUuY291bnQgfSxcbiAgICAgIH1cblxuICAgIGNhc2UgYWN0aW9uVHlwZXMuTE9BRF9EQVRBX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLi4ueyBwbGFjZWhvbGRlckRhdGE6IGFjdGlvbi5kYXRhIH0sXG4gICAgICB9XG5cbiAgICBjYXNlIGFjdGlvblR5cGVzLlRJQ0tfQ0xPQ0s6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLi4ueyBsYXN0VXBkYXRlOiBhY3Rpb24udHMsIGxpZ2h0OiAhIWFjdGlvbi5saWdodCB9LFxuICAgICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJcbiIsImltcG9ydCB7IGFsbCwgY2FsbCwgZGVsYXksIHB1dCwgdGFrZSwgdGFrZUxhdGVzdCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cydcbmltcG9ydCB7IGFjdGlvblR5cGVzLCBmYWlsdXJlLCBsb2FkRGF0YVN1Y2Nlc3MsIHRpY2tDbG9jayB9IGZyb20gJy4vYWN0aW9ucydcblxuZnVuY3Rpb24qIHJ1bkNsb2NrU2FnYSgpIHtcbiAgeWllbGQgdGFrZShhY3Rpb25UeXBlcy5TVEFSVF9DTE9DSylcbiAgd2hpbGUgKHRydWUpIHtcbiAgICB5aWVsZCBwdXQodGlja0Nsb2NrKGZhbHNlKSlcbiAgICB5aWVsZCBkZWxheSgxMDAwKVxuICB9XG59XG5cbmZ1bmN0aW9uKiBsb2FkRGF0YVNhZ2EoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0geWllbGQgZmV0Y2goJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2VycycpXG4gICAgY29uc3QgZGF0YSA9IHlpZWxkIHJlcy5qc29uKClcbiAgICB5aWVsZCBwdXQobG9hZERhdGFTdWNjZXNzKGRhdGEpKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICB5aWVsZCBwdXQoZmFpbHVyZShlcnIpKVxuICB9XG59XG5cbmZ1bmN0aW9uKiByb290U2FnYSgpIHtcbiAgeWllbGQgYWxsKFtcbiAgICBjYWxsKHJ1bkNsb2NrU2FnYSksXG4gICAgdGFrZUxhdGVzdChhY3Rpb25UeXBlcy5MT0FEX0RBVEEsIGxvYWREYXRhU2FnYSksXG4gIF0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RTYWdhXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgT3JkZXIgID0gKCkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgb3JkZXIgcGFnZSBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBPcmRlcjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBBdXRoUmVxdWlyZSA9ICh7IENvbXBvc2VkQ29tcG9uZW50IH06IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuIChwcm9wczogYW55KSA9PiB7XHJcbiAgICAgICAgLy8gY29uc3QgYXV0aCA9IHVzZVNlbGVjdG9yPElBcHBsaWNhdGlvblN0YXRlLCBBdXRoU3RhdGU+KHN0YXRlID0+IHN0YXRlLmF1dGgpO1xyXG4gICAgICAgIGNvbnN0IFtsb2dnZWQsIHNldExvZ2dlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAgICAgaWYgKGxvZ2dlZCkge1xyXG4gICAgICAgICAgICA8Q29tcG9zZWRDb21wb25lbnQgey4uLnByb3BzfSAvPlxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZiAoYXV0aC5sb2dnZWQpIHtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCB7Li4ucHJvcHN9IC8+XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHJldHVybiBSb3V0ZXIucHVzaChcIi9hdXRoXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoUmVxdWlyZTsiLCJpbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSdcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXG5cbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuL3JlZHVjZXInXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi9zYWdhJ1xuXG5jb25zdCBiaW5kTWlkZGxld2FyZSA9IChtaWRkbGV3YXJlKSA9PiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gPSByZXF1aXJlKCdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nKVxuICAgIHJldHVybiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSlcbiAgfVxuICByZXR1cm4gYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpXG59XG5cbmV4cG9ydCBjb25zdCBtYWtlU3RvcmUgPSAoY29udGV4dCkgPT4ge1xuICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKClcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgYmluZE1pZGRsZXdhcmUoW3NhZ2FNaWRkbGV3YXJlXSkpXG5cbiAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpXG5cbiAgcmV0dXJuIHN0b3JlXG59XG5cbmV4cG9ydCBjb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihtYWtlU3RvcmUsIHsgZGVidWc6IHRydWUgfSlcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==