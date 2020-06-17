(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\_app.js"],{

/***/ "./actions.js":
/*!********************!*\
  !*** ./actions.js ***!
  \********************/
/*! exports provided: actionTypes, failure, increment, decrement, reset, loadData, loadDataSuccess, startClock, tickClock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "failure", function() { return failure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increment", function() { return increment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrement", function() { return decrement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reset", function() { return reset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadData", function() { return loadData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDataSuccess", function() { return loadDataSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startClock", function() { return startClock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tickClock", function() { return tickClock; });
var actionTypes = {
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
    error: error
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
    data: data
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

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@redux-saga/core/dist/io-6de156f3.js":
/*!***********************************************************!*\
  !*** ./node_modules/@redux-saga/core/dist/io-6de156f3.js ***!
  \***********************************************************/
/*! exports provided: $, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, _, a, a0, a1, a2, a3, a4, a5, a6, a7, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$", function() { return apply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return logError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return CALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return wrapSagaDispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return FORK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return GET_CONTEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return buffers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return detach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return JOIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return take; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return fork; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return cancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return call; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return actionChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return PUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return sliding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return RACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SELECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return TAKE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return delay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return race; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return effectTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return takeMaybe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return put; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return putResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a0", function() { return cps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a1", function() { return spawn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a2", function() { return join; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a3", function() { return select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a4", function() { return cancelled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a5", function() { return flush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a6", function() { return getContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a7", function() { return setContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CANCEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return check; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ACTION_CHANNEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return expanding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CANCELLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return FLUSH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SET_CONTEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return internalErr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getMetaInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return kTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return createAllStyleChildCallbacks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return createEmptyArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return none; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return once; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return assignWithSymbols; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return makeIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return shouldComplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return flatMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return getLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return createSetContextWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return asyncIteratorSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return shouldCancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return shouldTerminate; });
/* harmony import */ var _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/symbols */ "./node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redux-saga/is */ "./node_modules/@redux-saga/is/dist/redux-saga-is.esm.js");
/* harmony import */ var _redux_saga_delay_p__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redux-saga/delay-p */ "./node_modules/@redux-saga/delay-p/dist/redux-saga-delay-p.esm.js");





var konst = function konst(v) {
  return function () {
    return v;
  };
};
var kTrue =
/*#__PURE__*/
konst(true);

var noop = function noop() {};

if ( true && typeof Proxy !== 'undefined') {
  noop =
  /*#__PURE__*/
  new Proxy(noop, {
    set: function set() {
      throw internalErr('There was an attempt to assign a property to internal `noop` function.');
    }
  });
}
var identity = function identity(v) {
  return v;
};
var hasSymbol = typeof Symbol === 'function';
var asyncIteratorSymbol = hasSymbol && Symbol.asyncIterator ? Symbol.asyncIterator : '@@asyncIterator';
function check(value, predicate, error) {
  if (!predicate(value)) {
    throw new Error(error);
  }
}
var assignWithSymbols = function assignWithSymbols(target, source) {
  Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])(target, source);

  if (Object.getOwnPropertySymbols) {
    Object.getOwnPropertySymbols(source).forEach(function (s) {
      target[s] = source[s];
    });
  }
};
var flatMap = function flatMap(mapper, arr) {
  var _ref;

  return (_ref = []).concat.apply(_ref, arr.map(mapper));
};
function remove(array, item) {
  var index = array.indexOf(item);

  if (index >= 0) {
    array.splice(index, 1);
  }
}
function once(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }

    called = true;
    fn();
  };
}

var kThrow = function kThrow(err) {
  throw err;
};

var kReturn = function kReturn(value) {
  return {
    value: value,
    done: true
  };
};

function makeIterator(next, thro, name) {
  if (thro === void 0) {
    thro = kThrow;
  }

  if (name === void 0) {
    name = 'iterator';
  }

  var iterator = {
    meta: {
      name: name
    },
    next: next,
    throw: thro,
    return: kReturn,
    isSagaIterator: true
  };

  if (typeof Symbol !== 'undefined') {
    iterator[Symbol.iterator] = function () {
      return iterator;
    };
  }

  return iterator;
}
function logError(error, _ref2) {
  var sagaStack = _ref2.sagaStack;

  /*eslint-disable no-console*/
  console.error(error);
  console.error(sagaStack);
}
var internalErr = function internalErr(err) {
  return new Error("\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.\n  Error: " + err + "\n");
};
var createSetContextWarning = function createSetContextWarning(ctx, props) {
  return (ctx ? ctx + '.' : '') + "setContext(props): argument " + props + " is not a plain object";
};
var FROZEN_ACTION_ERROR = "You can't put (a.k.a. dispatch from saga) frozen actions.\nWe have to define a special non-enumerable property on those actions for scheduling purposes.\nOtherwise you wouldn't be able to communicate properly between sagas & other subscribers (action ordering would become far less predictable).\nIf you are using redux and you care about this behaviour (frozen actions),\nthen you might want to switch to freezing actions in a middleware rather than in action creator.\nExample implementation:\n\nconst freezeActions = store => next => action => next(Object.freeze(action))\n"; // creates empty, but not-holey array

var createEmptyArray = function createEmptyArray(n) {
  return Array.apply(null, new Array(n));
};
var wrapSagaDispatch = function wrapSagaDispatch(dispatch) {
  return function (action) {
    if (true) {
      check(action, function (ac) {
        return !Object.isFrozen(ac);
      }, FROZEN_ACTION_ERROR);
    }

    return dispatch(Object.defineProperty(action, _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SAGA_ACTION"], {
      value: true
    }));
  };
};
var shouldTerminate = function shouldTerminate(res) {
  return res === _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TERMINATE"];
};
var shouldCancel = function shouldCancel(res) {
  return res === _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TASK_CANCEL"];
};
var shouldComplete = function shouldComplete(res) {
  return shouldTerminate(res) || shouldCancel(res);
};
function createAllStyleChildCallbacks(shape, parentCallback) {
  var keys = Object.keys(shape);
  var totalCount = keys.length;

  if (true) {
    check(totalCount, function (c) {
      return c > 0;
    }, 'createAllStyleChildCallbacks: get an empty array or object');
  }

  var completedCount = 0;
  var completed;
  var results = Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["array"])(shape) ? createEmptyArray(totalCount) : {};
  var childCallbacks = {};

  function checkEnd() {
    if (completedCount === totalCount) {
      completed = true;
      parentCallback(results);
    }
  }

  keys.forEach(function (key) {
    var chCbAtKey = function chCbAtKey(res, isErr) {
      if (completed) {
        return;
      }

      if (isErr || shouldComplete(res)) {
        parentCallback.cancel();
        parentCallback(res, isErr);
      } else {
        results[key] = res;
        completedCount++;
        checkEnd();
      }
    };

    chCbAtKey.cancel = noop;
    childCallbacks[key] = chCbAtKey;
  });

  parentCallback.cancel = function () {
    if (!completed) {
      completed = true;
      keys.forEach(function (key) {
        return childCallbacks[key].cancel();
      });
    }
  };

  return childCallbacks;
}
function getMetaInfo(fn) {
  return {
    name: fn.name || 'anonymous',
    location: getLocation(fn)
  };
}
function getLocation(instrumented) {
  return instrumented[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SAGA_LOCATION"]];
}

var BUFFER_OVERFLOW = "Channel's Buffer overflow!";
var ON_OVERFLOW_THROW = 1;
var ON_OVERFLOW_DROP = 2;
var ON_OVERFLOW_SLIDE = 3;
var ON_OVERFLOW_EXPAND = 4;
var zeroBuffer = {
  isEmpty: kTrue,
  put: noop,
  take: noop
};

function ringBuffer(limit, overflowAction) {
  if (limit === void 0) {
    limit = 10;
  }

  var arr = new Array(limit);
  var length = 0;
  var pushIndex = 0;
  var popIndex = 0;

  var push = function push(it) {
    arr[pushIndex] = it;
    pushIndex = (pushIndex + 1) % limit;
    length++;
  };

  var take = function take() {
    if (length != 0) {
      var it = arr[popIndex];
      arr[popIndex] = null;
      length--;
      popIndex = (popIndex + 1) % limit;
      return it;
    }
  };

  var flush = function flush() {
    var items = [];

    while (length) {
      items.push(take());
    }

    return items;
  };

  return {
    isEmpty: function isEmpty() {
      return length == 0;
    },
    put: function put(it) {
      if (length < limit) {
        push(it);
      } else {
        var doubledLimit;

        switch (overflowAction) {
          case ON_OVERFLOW_THROW:
            throw new Error(BUFFER_OVERFLOW);

          case ON_OVERFLOW_SLIDE:
            arr[pushIndex] = it;
            pushIndex = (pushIndex + 1) % limit;
            popIndex = pushIndex;
            break;

          case ON_OVERFLOW_EXPAND:
            doubledLimit = 2 * limit;
            arr = flush();
            length = arr.length;
            pushIndex = arr.length;
            popIndex = 0;
            arr.length = doubledLimit;
            limit = doubledLimit;
            push(it);
            break;

          default: // DROP

        }
      }
    },
    take: take,
    flush: flush
  };
}

var none = function none() {
  return zeroBuffer;
};
var fixed = function fixed(limit) {
  return ringBuffer(limit, ON_OVERFLOW_THROW);
};
var dropping = function dropping(limit) {
  return ringBuffer(limit, ON_OVERFLOW_DROP);
};
var sliding = function sliding(limit) {
  return ringBuffer(limit, ON_OVERFLOW_SLIDE);
};
var expanding = function expanding(initialSize) {
  return ringBuffer(initialSize, ON_OVERFLOW_EXPAND);
};

var buffers = /*#__PURE__*/Object.freeze({
  __proto__: null,
  none: none,
  fixed: fixed,
  dropping: dropping,
  sliding: sliding,
  expanding: expanding
});

var TAKE = 'TAKE';
var PUT = 'PUT';
var ALL = 'ALL';
var RACE = 'RACE';
var CALL = 'CALL';
var CPS = 'CPS';
var FORK = 'FORK';
var JOIN = 'JOIN';
var CANCEL = 'CANCEL';
var SELECT = 'SELECT';
var ACTION_CHANNEL = 'ACTION_CHANNEL';
var CANCELLED = 'CANCELLED';
var FLUSH = 'FLUSH';
var GET_CONTEXT = 'GET_CONTEXT';
var SET_CONTEXT = 'SET_CONTEXT';

var effectTypes = /*#__PURE__*/Object.freeze({
  __proto__: null,
  TAKE: TAKE,
  PUT: PUT,
  ALL: ALL,
  RACE: RACE,
  CALL: CALL,
  CPS: CPS,
  FORK: FORK,
  JOIN: JOIN,
  CANCEL: CANCEL,
  SELECT: SELECT,
  ACTION_CHANNEL: ACTION_CHANNEL,
  CANCELLED: CANCELLED,
  FLUSH: FLUSH,
  GET_CONTEXT: GET_CONTEXT,
  SET_CONTEXT: SET_CONTEXT
});

var TEST_HINT = '\n(HINT: if you are getting these errors in tests, consider using createMockTask from @redux-saga/testing-utils)';

var makeEffect = function makeEffect(type, payload) {
  var _ref;

  return _ref = {}, _ref[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["IO"]] = true, _ref.combinator = false, _ref.type = type, _ref.payload = payload, _ref;
};

var isForkEffect = function isForkEffect(eff) {
  return Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["effect"])(eff) && eff.type === FORK;
};

var detach = function detach(eff) {
  if (true) {
    check(eff, isForkEffect, 'detach(eff): argument must be a fork effect');
  }

  return makeEffect(FORK, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, eff.payload, {
    detached: true
  }));
};
function take(patternOrChannel, multicastPattern) {
  if (patternOrChannel === void 0) {
    patternOrChannel = '*';
  }

  if ( true && arguments.length) {
    check(arguments[0], _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'take(patternOrChannel): patternOrChannel is undefined');
  }

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["pattern"])(patternOrChannel)) {
    return makeEffect(TAKE, {
      pattern: patternOrChannel
    });
  }

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["multicast"])(patternOrChannel) && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"])(multicastPattern) && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["pattern"])(multicastPattern)) {
    return makeEffect(TAKE, {
      channel: patternOrChannel,
      pattern: multicastPattern
    });
  }

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["channel"])(patternOrChannel)) {
    return makeEffect(TAKE, {
      channel: patternOrChannel
    });
  }

  if (true) {
    throw new Error("take(patternOrChannel): argument " + patternOrChannel + " is not valid channel or a valid pattern");
  }
}
var takeMaybe = function takeMaybe() {
  var eff = take.apply(void 0, arguments);
  eff.payload.maybe = true;
  return eff;
};
function put(channel$1, action) {
  if (true) {
    if (arguments.length > 1) {
      check(channel$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'put(channel, action): argument channel is undefined');
      check(channel$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["channel"], "put(channel, action): argument " + channel$1 + " is not a valid channel");
      check(action, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'put(channel, action): argument action is undefined');
    } else {
      check(channel$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'put(action): argument action is undefined');
    }
  }

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["undef"])(action)) {
    action = channel$1; // `undefined` instead of `null` to make default parameter work

    channel$1 = undefined;
  }

  return makeEffect(PUT, {
    channel: channel$1,
    action: action
  });
}
var putResolve = function putResolve() {
  var eff = put.apply(void 0, arguments);
  eff.payload.resolve = true;
  return eff;
};
function all(effects) {
  var eff = makeEffect(ALL, effects);
  eff.combinator = true;
  return eff;
}
function race(effects) {
  var eff = makeEffect(RACE, effects);
  eff.combinator = true;
  return eff;
} // this match getFnCallDescriptor logic

var validateFnDescriptor = function validateFnDescriptor(effectName, fnDescriptor) {
  check(fnDescriptor, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], effectName + ": argument fn is undefined or null");

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"])(fnDescriptor)) {
    return;
  }

  var context = null;
  var fn;

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["array"])(fnDescriptor)) {
    context = fnDescriptor[0];
    fn = fnDescriptor[1];
    check(fn, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], effectName + ": argument of type [context, fn] has undefined or null `fn`");
  } else if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["object"])(fnDescriptor)) {
    context = fnDescriptor.context;
    fn = fnDescriptor.fn;
    check(fn, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], effectName + ": argument of type {context, fn} has undefined or null `fn`");
  } else {
    check(fnDescriptor, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"], effectName + ": argument fn is not function");
    return;
  }

  if (context && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["string"])(fn)) {
    check(context[fn], _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"], effectName + ": context arguments has no such method - \"" + fn + "\"");
    return;
  }

  check(fn, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"], effectName + ": unpacked fn argument (from [context, fn] or {context, fn}) is not a function");
};

function getFnCallDescriptor(fnDescriptor, args) {
  var context = null;
  var fn;

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"])(fnDescriptor)) {
    fn = fnDescriptor;
  } else {
    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["array"])(fnDescriptor)) {
      context = fnDescriptor[0];
      fn = fnDescriptor[1];
    } else {
      context = fnDescriptor.context;
      fn = fnDescriptor.fn;
    }

    if (context && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["string"])(fn) && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"])(context[fn])) {
      fn = context[fn];
    }
  }

  return {
    context: context,
    fn: fn,
    args: args
  };
}

var isNotDelayEffect = function isNotDelayEffect(fn) {
  return fn !== delay;
};

function call(fnDescriptor) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (true) {
    var arg0 = typeof args[0] === 'number' ? args[0] : 'ms';
    check(fnDescriptor, isNotDelayEffect, "instead of writing `yield call(delay, " + arg0 + ")` where delay is an effect from `redux-saga/effects` you should write `yield delay(" + arg0 + ")`");
    validateFnDescriptor('call', fnDescriptor);
  }

  return makeEffect(CALL, getFnCallDescriptor(fnDescriptor, args));
}
function apply(context, fn, args) {
  if (args === void 0) {
    args = [];
  }

  var fnDescriptor = [context, fn];

  if (true) {
    validateFnDescriptor('apply', fnDescriptor);
  }

  return makeEffect(CALL, getFnCallDescriptor([context, fn], args));
}
function cps(fnDescriptor) {
  if (true) {
    validateFnDescriptor('cps', fnDescriptor);
  }

  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  return makeEffect(CPS, getFnCallDescriptor(fnDescriptor, args));
}
function fork(fnDescriptor) {
  if (true) {
    validateFnDescriptor('fork', fnDescriptor);
    check(fnDescriptor, function (arg) {
      return !Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["effect"])(arg);
    }, 'fork: argument must not be an effect');
  }

  for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }

  return makeEffect(FORK, getFnCallDescriptor(fnDescriptor, args));
}
function spawn(fnDescriptor) {
  if (true) {
    validateFnDescriptor('spawn', fnDescriptor);
  }

  for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    args[_key4 - 1] = arguments[_key4];
  }

  return detach(fork.apply(void 0, [fnDescriptor].concat(args)));
}
function join(taskOrTasks) {
  if (true) {
    if (arguments.length > 1) {
      throw new Error('join(...tasks) is not supported any more. Please use join([...tasks]) to join multiple tasks.');
    }

    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["array"])(taskOrTasks)) {
      taskOrTasks.forEach(function (t) {
        check(t, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["task"], "join([...tasks]): argument " + t + " is not a valid Task object " + TEST_HINT);
      });
    } else {
      check(taskOrTasks, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["task"], "join(task): argument " + taskOrTasks + " is not a valid Task object " + TEST_HINT);
    }
  }

  return makeEffect(JOIN, taskOrTasks);
}
function cancel(taskOrTasks) {
  if (taskOrTasks === void 0) {
    taskOrTasks = _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SELF_CANCELLATION"];
  }

  if (true) {
    if (arguments.length > 1) {
      throw new Error('cancel(...tasks) is not supported any more. Please use cancel([...tasks]) to cancel multiple tasks.');
    }

    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["array"])(taskOrTasks)) {
      taskOrTasks.forEach(function (t) {
        check(t, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["task"], "cancel([...tasks]): argument " + t + " is not a valid Task object " + TEST_HINT);
      });
    } else if (taskOrTasks !== _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SELF_CANCELLATION"] && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"])(taskOrTasks)) {
      check(taskOrTasks, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["task"], "cancel(task): argument " + taskOrTasks + " is not a valid Task object " + TEST_HINT);
    }
  }

  return makeEffect(CANCEL, taskOrTasks);
}
function select(selector) {
  if (selector === void 0) {
    selector = identity;
  }

  for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
    args[_key5 - 1] = arguments[_key5];
  }

  if ( true && arguments.length) {
    check(arguments[0], _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'select(selector, [...]): argument selector is undefined');
    check(selector, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"], "select(selector, [...]): argument " + selector + " is not a function");
  }

  return makeEffect(SELECT, {
    selector: selector,
    args: args
  });
}
/**
  channel(pattern, [buffer])    => creates a proxy channel for store actions
**/

function actionChannel(pattern$1, buffer$1) {
  if (true) {
    check(pattern$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["pattern"], 'actionChannel(pattern,...): argument pattern is not valid');

    if (arguments.length > 1) {
      check(buffer$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'actionChannel(pattern, buffer): argument buffer is undefined');
      check(buffer$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["buffer"], "actionChannel(pattern, buffer): argument " + buffer$1 + " is not a valid buffer");
    }
  }

  return makeEffect(ACTION_CHANNEL, {
    pattern: pattern$1,
    buffer: buffer$1
  });
}
function cancelled() {
  return makeEffect(CANCELLED, {});
}
function flush(channel$1) {
  if (true) {
    check(channel$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["channel"], "flush(channel): argument " + channel$1 + " is not valid channel");
  }

  return makeEffect(FLUSH, channel$1);
}
function getContext(prop) {
  if (true) {
    check(prop, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["string"], "getContext(prop): argument " + prop + " is not a string");
  }

  return makeEffect(GET_CONTEXT, prop);
}
function setContext(props) {
  if (true) {
    check(props, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["object"], createSetContextWarning(null, props));
  }

  return makeEffect(SET_CONTEXT, props);
}
var delay =
/*#__PURE__*/
call.bind(null, _redux_saga_delay_p__WEBPACK_IMPORTED_MODULE_3__["default"]);




/***/ }),

/***/ "./node_modules/@redux-saga/core/dist/redux-saga-core.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@redux-saga/core/dist/redux-saga-core.esm.js ***!
  \*******************************************************************/
/*! exports provided: CANCEL, SAGA_LOCATION, buffers, detach, default, END, channel, eventChannel, isEnd, multicastChannel, runSaga, stdChannel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "END", function() { return END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "channel", function() { return channel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventChannel", function() { return eventChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEnd", function() { return isEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multicastChannel", function() { return multicastChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runSaga", function() { return runSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stdChannel", function() { return stdChannel; });
/* harmony import */ var _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/symbols */ "./node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CANCEL", function() { return _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["CANCEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SAGA_LOCATION", function() { return _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SAGA_LOCATION"]; });

/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redux-saga/is */ "./node_modules/@redux-saga/is/dist/redux-saga-is.esm.js");
/* harmony import */ var _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./io-6de156f3.js */ "./node_modules/@redux-saga/core/dist/io-6de156f3.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buffers", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["H"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detach", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["I"]; });

/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _redux_saga_deferred__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @redux-saga/deferred */ "./node_modules/@redux-saga/deferred/dist/redux-saga-deferred.esm.js");
/* harmony import */ var _redux_saga_delay_p__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @redux-saga/delay-p */ "./node_modules/@redux-saga/delay-p/dist/redux-saga-delay-p.esm.js");











var queue = [];
/**
  Variable to hold a counting semaphore
  - Incrementing adds a lock and puts the scheduler in a `suspended` state (if it's not
    already suspended)
  - Decrementing releases a lock. Zero locks puts the scheduler in a `released` state. This
    triggers flushing the queued tasks.
**/

var semaphore = 0;
/**
  Executes a task 'atomically'. Tasks scheduled during this execution will be queued
  and flushed after this task has finished (assuming the scheduler endup in a released
  state).
**/

function exec(task) {
  try {
    suspend();
    task();
  } finally {
    release();
  }
}
/**
  Executes or queues a task depending on the state of the scheduler (`suspended` or `released`)
**/


function asap(task) {
  queue.push(task);

  if (!semaphore) {
    suspend();
    flush();
  }
}
/**
 * Puts the scheduler in a `suspended` state and executes a task immediately.
 */

function immediately(task) {
  try {
    suspend();
    return task();
  } finally {
    flush();
  }
}
/**
  Puts the scheduler in a `suspended` state. Scheduled tasks will be queued until the
  scheduler is released.
**/

function suspend() {
  semaphore++;
}
/**
  Puts the scheduler in a `released` state.
**/


function release() {
  semaphore--;
}
/**
  Releases the current lock. Executes all queued tasks if the scheduler is in the released state.
**/


function flush() {
  release();
  var task;

  while (!semaphore && (task = queue.shift()) !== undefined) {
    exec(task);
  }
}

var array = function array(patterns) {
  return function (input) {
    return patterns.some(function (p) {
      return matcher(p)(input);
    });
  };
};
var predicate = function predicate(_predicate) {
  return function (input) {
    return _predicate(input);
  };
};
var string = function string(pattern) {
  return function (input) {
    return input.type === String(pattern);
  };
};
var symbol = function symbol(pattern) {
  return function (input) {
    return input.type === pattern;
  };
};
var wildcard = function wildcard() {
  return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["k"];
};
function matcher(pattern) {
  // prettier-ignore
  var matcherCreator = pattern === '*' ? wildcard : Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["string"])(pattern) ? string : Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["array"])(pattern) ? array : Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["stringableFunc"])(pattern) ? string : Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"])(pattern) ? predicate : Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["symbol"])(pattern) ? symbol : null;

  if (matcherCreator === null) {
    throw new Error("invalid pattern: " + pattern);
  }

  return matcherCreator(pattern);
}

var END = {
  type: _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["CHANNEL_END_TYPE"]
};
var isEnd = function isEnd(a) {
  return a && a.type === _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["CHANNEL_END_TYPE"];
};
var CLOSED_CHANNEL_WITH_TAKERS = 'Cannot have a closed channel with pending takers';
var INVALID_BUFFER = 'invalid buffer passed to channel factory function';
var UNDEFINED_INPUT_ERROR = "Saga or channel was provided with an undefined action\nHints:\n  - check that your Action Creator returns a non-undefined value\n  - if the Saga was started using runSaga, check that your subscribe source provides the action to its listeners";
function channel(buffer$1) {
  if (buffer$1 === void 0) {
    buffer$1 = Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["e"])();
  }

  var closed = false;
  var takers = [];

  if (true) {
    Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(buffer$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["buffer"], INVALID_BUFFER);
  }

  function checkForbiddenStates() {
    if (closed && takers.length) {
      throw Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["i"])(CLOSED_CHANNEL_WITH_TAKERS);
    }

    if (takers.length && !buffer$1.isEmpty()) {
      throw Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["i"])('Cannot have pending takers with non empty buffer');
    }
  }

  function put(input) {
    if (true) {
      checkForbiddenStates();
      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(input, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["notUndef"], UNDEFINED_INPUT_ERROR);
    }

    if (closed) {
      return;
    }

    if (takers.length === 0) {
      return buffer$1.put(input);
    }

    var cb = takers.shift();
    cb(input);
  }

  function take(cb) {
    if (true) {
      checkForbiddenStates();
      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(cb, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"], "channel.take's callback must be a function");
    }

    if (closed && buffer$1.isEmpty()) {
      cb(END);
    } else if (!buffer$1.isEmpty()) {
      cb(buffer$1.take());
    } else {
      takers.push(cb);

      cb.cancel = function () {
        Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["r"])(takers, cb);
      };
    }
  }

  function flush(cb) {
    if (true) {
      checkForbiddenStates();
      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(cb, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"], "channel.flush' callback must be a function");
    }

    if (closed && buffer$1.isEmpty()) {
      cb(END);
      return;
    }

    cb(buffer$1.flush());
  }

  function close() {
    if (true) {
      checkForbiddenStates();
    }

    if (closed) {
      return;
    }

    closed = true;
    var arr = takers;
    takers = [];

    for (var i = 0, len = arr.length; i < len; i++) {
      var taker = arr[i];
      taker(END);
    }
  }

  return {
    take: take,
    put: put,
    flush: flush,
    close: close
  };
}
function eventChannel(subscribe, buffer) {
  if (buffer === void 0) {
    buffer = Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["n"])();
  }

  var closed = false;
  var unsubscribe;
  var chan = channel(buffer);

  var close = function close() {
    if (closed) {
      return;
    }

    closed = true;

    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"])(unsubscribe)) {
      unsubscribe();
    }

    chan.close();
  };

  unsubscribe = subscribe(function (input) {
    if (isEnd(input)) {
      close();
      return;
    }

    chan.put(input);
  });

  if (true) {
    Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(unsubscribe, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"], 'in eventChannel: subscribe should return a function to unsubscribe');
  }

  unsubscribe = Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["o"])(unsubscribe);

  if (closed) {
    unsubscribe();
  }

  return {
    take: chan.take,
    flush: chan.flush,
    close: close
  };
}
function multicastChannel() {
  var _ref;

  var closed = false;
  var currentTakers = [];
  var nextTakers = currentTakers;

  function checkForbiddenStates() {
    if (closed && nextTakers.length) {
      throw Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["i"])(CLOSED_CHANNEL_WITH_TAKERS);
    }
  }

  var ensureCanMutateNextTakers = function ensureCanMutateNextTakers() {
    if (nextTakers !== currentTakers) {
      return;
    }

    nextTakers = currentTakers.slice();
  };

  var close = function close() {
    if (true) {
      checkForbiddenStates();
    }

    closed = true;
    var takers = currentTakers = nextTakers;
    nextTakers = [];
    takers.forEach(function (taker) {
      taker(END);
    });
  };

  return _ref = {}, _ref[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["MULTICAST"]] = true, _ref.put = function put(input) {
    if (true) {
      checkForbiddenStates();
      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(input, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["notUndef"], UNDEFINED_INPUT_ERROR);
    }

    if (closed) {
      return;
    }

    if (isEnd(input)) {
      close();
      return;
    }

    var takers = currentTakers = nextTakers;

    for (var i = 0, len = takers.length; i < len; i++) {
      var taker = takers[i];

      if (taker[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["MATCH"]](input)) {
        taker.cancel();
        taker(input);
      }
    }
  }, _ref.take = function take(cb, matcher) {
    if (matcher === void 0) {
      matcher = wildcard;
    }

    if (true) {
      checkForbiddenStates();
    }

    if (closed) {
      cb(END);
      return;
    }

    cb[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["MATCH"]] = matcher;
    ensureCanMutateNextTakers();
    nextTakers.push(cb);
    cb.cancel = Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["o"])(function () {
      ensureCanMutateNextTakers();
      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["r"])(nextTakers, cb);
    });
  }, _ref.close = close, _ref;
}
function stdChannel() {
  var chan = multicastChannel();
  var put = chan.put;

  chan.put = function (input) {
    if (input[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SAGA_ACTION"]]) {
      put(input);
      return;
    }

    asap(function () {
      put(input);
    });
  };

  return chan;
}

var RUNNING = 0;
var CANCELLED = 1;
var ABORTED = 2;
var DONE = 3;

function resolvePromise(promise, cb) {
  var cancelPromise = promise[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["CANCEL"]];

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"])(cancelPromise)) {
    cb.cancel = cancelPromise;
  }

  promise.then(cb, function (error) {
    cb(error, true);
  });
}

var current = 0;
var nextSagaId = (function () {
  return ++current;
});

var _effectRunnerMap;

function getIteratorMetaInfo(iterator, fn) {
  if (iterator.isSagaIterator) {
    return {
      name: iterator.meta.name
    };
  }

  return Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["j"])(fn);
}

function createTaskIterator(_ref) {
  var context = _ref.context,
      fn = _ref.fn,
      args = _ref.args;

  // catch synchronous failures; see #152 and #441
  try {
    var result = fn.apply(context, args); // i.e. a generator function returns an iterator

    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["iterator"])(result)) {
      return result;
    }

    var resolved = false;

    var next = function next(arg) {
      if (!resolved) {
        resolved = true; // Only promises returned from fork will be interpreted. See #1573

        return {
          value: result,
          done: !Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["promise"])(result)
        };
      } else {
        return {
          value: arg,
          done: true
        };
      }
    };

    return Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["q"])(next);
  } catch (err) {
    // do not bubble up synchronous failures for detached forks
    // instead create a failed task. See #152 and #441
    return Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["q"])(function () {
      throw err;
    });
  }
}

function runPutEffect(env, _ref2, cb) {
  var channel = _ref2.channel,
      action = _ref2.action,
      resolve = _ref2.resolve;

  /**
   Schedule the put in case another saga is holding a lock.
   The put will be executed atomically. ie nested puts will execute after
   this put has terminated.
   **/
  asap(function () {
    var result;

    try {
      result = (channel ? channel.put : env.dispatch)(action);
    } catch (error) {
      cb(error, true);
      return;
    }

    if (resolve && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["promise"])(result)) {
      resolvePromise(result, cb);
    } else {
      cb(result);
    }
  }); // Put effects are non cancellables
}

function runTakeEffect(env, _ref3, cb) {
  var _ref3$channel = _ref3.channel,
      channel = _ref3$channel === void 0 ? env.channel : _ref3$channel,
      pattern = _ref3.pattern,
      maybe = _ref3.maybe;

  var takeCb = function takeCb(input) {
    if (input instanceof Error) {
      cb(input, true);
      return;
    }

    if (isEnd(input) && !maybe) {
      cb(_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TERMINATE"]);
      return;
    }

    cb(input);
  };

  try {
    channel.take(takeCb, Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["notUndef"])(pattern) ? matcher(pattern) : null);
  } catch (err) {
    cb(err, true);
    return;
  }

  cb.cancel = takeCb.cancel;
}

function runCallEffect(env, _ref4, cb, _ref5) {
  var context = _ref4.context,
      fn = _ref4.fn,
      args = _ref4.args;
  var task = _ref5.task;

  // catch synchronous failures; see #152
  try {
    var result = fn.apply(context, args);

    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["promise"])(result)) {
      resolvePromise(result, cb);
      return;
    }

    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["iterator"])(result)) {
      // resolve iterator
      proc(env, result, task.context, current, Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["j"])(fn),
      /* isRoot */
      false, cb);
      return;
    }

    cb(result);
  } catch (error) {
    cb(error, true);
  }
}

function runCPSEffect(env, _ref6, cb) {
  var context = _ref6.context,
      fn = _ref6.fn,
      args = _ref6.args;

  // CPS (ie node style functions) can define their own cancellation logic
  // by setting cancel field on the cb
  // catch synchronous failures; see #152
  try {
    var cpsCb = function cpsCb(err, res) {
      if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["undef"])(err)) {
        cb(res);
      } else {
        cb(err, true);
      }
    };

    fn.apply(context, args.concat(cpsCb));

    if (cpsCb.cancel) {
      cb.cancel = cpsCb.cancel;
    }
  } catch (error) {
    cb(error, true);
  }
}

function runForkEffect(env, _ref7, cb, _ref8) {
  var context = _ref7.context,
      fn = _ref7.fn,
      args = _ref7.args,
      detached = _ref7.detached;
  var parent = _ref8.task;
  var taskIterator = createTaskIterator({
    context: context,
    fn: fn,
    args: args
  });
  var meta = getIteratorMetaInfo(taskIterator, fn);
  immediately(function () {
    var child = proc(env, taskIterator, parent.context, current, meta, detached, undefined);

    if (detached) {
      cb(child);
    } else {
      if (child.isRunning()) {
        parent.queue.addTask(child);
        cb(child);
      } else if (child.isAborted()) {
        parent.queue.abort(child.error());
      } else {
        cb(child);
      }
    }
  }); // Fork effects are non cancellables
}

function runJoinEffect(env, taskOrTasks, cb, _ref9) {
  var task = _ref9.task;

  var joinSingleTask = function joinSingleTask(taskToJoin, cb) {
    if (taskToJoin.isRunning()) {
      var joiner = {
        task: task,
        cb: cb
      };

      cb.cancel = function () {
        if (taskToJoin.isRunning()) Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["r"])(taskToJoin.joiners, joiner);
      };

      taskToJoin.joiners.push(joiner);
    } else {
      if (taskToJoin.isAborted()) {
        cb(taskToJoin.error(), true);
      } else {
        cb(taskToJoin.result());
      }
    }
  };

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["array"])(taskOrTasks)) {
    if (taskOrTasks.length === 0) {
      cb([]);
      return;
    }

    var childCallbacks = Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["l"])(taskOrTasks, cb);
    taskOrTasks.forEach(function (t, i) {
      joinSingleTask(t, childCallbacks[i]);
    });
  } else {
    joinSingleTask(taskOrTasks, cb);
  }
}

function cancelSingleTask(taskToCancel) {
  if (taskToCancel.isRunning()) {
    taskToCancel.cancel();
  }
}

function runCancelEffect(env, taskOrTasks, cb, _ref10) {
  var task = _ref10.task;

  if (taskOrTasks === _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SELF_CANCELLATION"]) {
    cancelSingleTask(task);
  } else if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["array"])(taskOrTasks)) {
    taskOrTasks.forEach(cancelSingleTask);
  } else {
    cancelSingleTask(taskOrTasks);
  }

  cb(); // cancel effects are non cancellables
}

function runAllEffect(env, effects, cb, _ref11) {
  var digestEffect = _ref11.digestEffect;
  var effectId = current;
  var keys = Object.keys(effects);

  if (keys.length === 0) {
    cb(Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["array"])(effects) ? [] : {});
    return;
  }

  var childCallbacks = Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["l"])(effects, cb);
  keys.forEach(function (key) {
    digestEffect(effects[key], effectId, childCallbacks[key], key);
  });
}

function runRaceEffect(env, effects, cb, _ref12) {
  var digestEffect = _ref12.digestEffect;
  var effectId = current;
  var keys = Object.keys(effects);
  var response = Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["array"])(effects) ? Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["m"])(keys.length) : {};
  var childCbs = {};
  var completed = false;
  keys.forEach(function (key) {
    var chCbAtKey = function chCbAtKey(res, isErr) {
      if (completed) {
        return;
      }

      if (isErr || Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["s"])(res)) {
        // Race Auto cancellation
        cb.cancel();
        cb(res, isErr);
      } else {
        cb.cancel();
        completed = true;
        response[key] = res;
        cb(response);
      }
    };

    chCbAtKey.cancel = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];
    childCbs[key] = chCbAtKey;
  });

  cb.cancel = function () {
    // prevents unnecessary cancellation
    if (!completed) {
      completed = true;
      keys.forEach(function (key) {
        return childCbs[key].cancel();
      });
    }
  };

  keys.forEach(function (key) {
    if (completed) {
      return;
    }

    digestEffect(effects[key], effectId, childCbs[key], key);
  });
}

function runSelectEffect(env, _ref13, cb) {
  var selector = _ref13.selector,
      args = _ref13.args;

  try {
    var state = selector.apply(void 0, [env.getState()].concat(args));
    cb(state);
  } catch (error) {
    cb(error, true);
  }
}

function runChannelEffect(env, _ref14, cb) {
  var pattern = _ref14.pattern,
      buffer = _ref14.buffer;
  var chan = channel(buffer);
  var match = matcher(pattern);

  var taker = function taker(action) {
    if (!isEnd(action)) {
      env.channel.take(taker, match);
    }

    chan.put(action);
  };

  var close = chan.close;

  chan.close = function () {
    taker.cancel();
    close();
  };

  env.channel.take(taker, match);
  cb(chan);
}

function runCancelledEffect(env, data, cb, _ref15) {
  var task = _ref15.task;
  cb(task.isCancelled());
}

function runFlushEffect(env, channel, cb) {
  channel.flush(cb);
}

function runGetContextEffect(env, prop, cb, _ref16) {
  var task = _ref16.task;
  cb(task.context[prop]);
}

function runSetContextEffect(env, props, cb, _ref17) {
  var task = _ref17.task;
  Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["p"])(task.context, props);
  cb();
}

var effectRunnerMap = (_effectRunnerMap = {}, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["T"]] = runTakeEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["P"]] = runPutEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["A"]] = runAllEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["R"]] = runRaceEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["C"]] = runCallEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["a"]] = runCPSEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["F"]] = runForkEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["J"]] = runJoinEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["b"]] = runCancelEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["S"]] = runSelectEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["d"]] = runChannelEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["f"]] = runCancelledEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["g"]] = runFlushEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["G"]] = runGetContextEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["h"]] = runSetContextEffect, _effectRunnerMap);

/**
 Used to track a parent task and its forks
 In the fork model, forked tasks are attached by default to their parent
 We model this using the concept of Parent task && main Task
 main task is the main flow of the current Generator, the parent tasks is the
 aggregation of the main tasks + all its forked tasks.
 Thus the whole model represents an execution tree with multiple branches (vs the
 linear execution tree in sequential (non parallel) programming)

 A parent tasks has the following semantics
 - It completes if all its forks either complete or all cancelled
 - If it's cancelled, all forks are cancelled as well
 - It aborts if any uncaught error bubbles up from forks
 - If it completes, the return value is the one returned by the main task
 **/

function forkQueue(mainTask, onAbort, cont) {
  var tasks = [];
  var result;
  var completed = false;
  addTask(mainTask);

  var getTasks = function getTasks() {
    return tasks;
  };

  function abort(err) {
    onAbort();
    cancelAll();
    cont(err, true);
  }

  function addTask(task) {
    tasks.push(task);

    task.cont = function (res, isErr) {
      if (completed) {
        return;
      }

      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["r"])(tasks, task);
      task.cont = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];

      if (isErr) {
        abort(res);
      } else {
        if (task === mainTask) {
          result = res;
        }

        if (!tasks.length) {
          completed = true;
          cont(result);
        }
      }
    };
  }

  function cancelAll() {
    if (completed) {
      return;
    }

    completed = true;
    tasks.forEach(function (t) {
      t.cont = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];
      t.cancel();
    });
    tasks = [];
  }

  return {
    addTask: addTask,
    cancelAll: cancelAll,
    abort: abort,
    getTasks: getTasks
  };
}

// there can be only a single saga error created at any given moment

function formatLocation(fileName, lineNumber) {
  return fileName + "?" + lineNumber;
}

function effectLocationAsString(effect) {
  var location = Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["v"])(effect);

  if (location) {
    var code = location.code,
        fileName = location.fileName,
        lineNumber = location.lineNumber;
    var source = code + "  " + formatLocation(fileName, lineNumber);
    return source;
  }

  return '';
}

function sagaLocationAsString(sagaMeta) {
  var name = sagaMeta.name,
      location = sagaMeta.location;

  if (location) {
    return name + "  " + formatLocation(location.fileName, location.lineNumber);
  }

  return name;
}

function cancelledTasksAsString(sagaStack) {
  var cancelledTasks = Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["u"])(function (i) {
    return i.cancelledTasks;
  }, sagaStack);

  if (!cancelledTasks.length) {
    return '';
  }

  return ['Tasks cancelled due to error:'].concat(cancelledTasks).join('\n');
}

var crashedEffect = null;
var sagaStack = [];
var addSagaFrame = function addSagaFrame(frame) {
  frame.crashedEffect = crashedEffect;
  sagaStack.push(frame);
};
var clear = function clear() {
  crashedEffect = null;
  sagaStack.length = 0;
}; // this sets crashed effect for the soon-to-be-reported saga frame
// this slightly streatches the singleton nature of this module into wrong direction
// as it's even less obvious what's the data flow here, but it is what it is for now

var setCrashedEffect = function setCrashedEffect(effect) {
  crashedEffect = effect;
};
/**
  @returns {string}

  @example
  The above error occurred in task errorInPutSaga {pathToFile}
  when executing effect put({type: 'REDUCER_ACTION_ERROR_IN_PUT'}) {pathToFile}
      created by fetchSaga {pathToFile}
      created by rootSaga {pathToFile}
*/

var toString = function toString() {
  var firstSaga = sagaStack[0],
      otherSagas = sagaStack.slice(1);
  var crashedEffectLocation = firstSaga.crashedEffect ? effectLocationAsString(firstSaga.crashedEffect) : null;
  var errorMessage = "The above error occurred in task " + sagaLocationAsString(firstSaga.meta) + (crashedEffectLocation ? " \n when executing effect " + crashedEffectLocation : '');
  return [errorMessage].concat(otherSagas.map(function (s) {
    return "    created by " + sagaLocationAsString(s.meta);
  }), [cancelledTasksAsString(sagaStack)]).join('\n');
};

function newTask(env, mainTask, parentContext, parentEffectId, meta, isRoot, cont) {
  var _task;

  if (cont === void 0) {
    cont = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];
  }

  var status = RUNNING;
  var taskResult;
  var taskError;
  var deferredEnd = null;
  var cancelledDueToErrorTasks = [];
  var context = Object.create(parentContext);
  var queue = forkQueue(mainTask, function onAbort() {
    cancelledDueToErrorTasks.push.apply(cancelledDueToErrorTasks, queue.getTasks().map(function (t) {
      return t.meta.name;
    }));
  }, end);
  /**
   This may be called by a parent generator to trigger/propagate cancellation
   cancel all pending tasks (including the main task), then end the current task.
    Cancellation propagates down to the whole execution tree held by this Parent task
   It's also propagated to all joiners of this task and their execution tree/joiners
    Cancellation is noop for terminated/Cancelled tasks tasks
   **/

  function cancel() {
    if (status === RUNNING) {
      // Setting status to CANCELLED does not necessarily mean that the task/iterators are stopped
      // effects in the iterator's finally block will still be executed
      status = CANCELLED;
      queue.cancelAll(); // Ending with a TASK_CANCEL will propagate the Cancellation to all joiners

      end(_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TASK_CANCEL"], false);
    }
  }

  function end(result, isErr) {
    if (!isErr) {
      // The status here may be RUNNING or CANCELLED
      // If the status is CANCELLED, then we do not need to change it here
      if (result === _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TASK_CANCEL"]) {
        status = CANCELLED;
      } else if (status !== CANCELLED) {
        status = DONE;
      }

      taskResult = result;
      deferredEnd && deferredEnd.resolve(result);
    } else {
      status = ABORTED;
      addSagaFrame({
        meta: meta,
        cancelledTasks: cancelledDueToErrorTasks
      });

      if (task.isRoot) {
        var sagaStack = toString(); // we've dumped the saga stack to string and are passing it to user's code
        // we know that it won't be needed anymore and we need to clear it

        clear();
        env.onError(result, {
          sagaStack: sagaStack
        });
      }

      taskError = result;
      deferredEnd && deferredEnd.reject(result);
    }

    task.cont(result, isErr);
    task.joiners.forEach(function (joiner) {
      joiner.cb(result, isErr);
    });
    task.joiners = null;
  }

  function setContext(props) {
    if (true) {
      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(props, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["object"], Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["w"])('task', props));
    }

    Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["p"])(context, props);
  }

  function toPromise() {
    if (deferredEnd) {
      return deferredEnd.promise;
    }

    deferredEnd = Object(_redux_saga_deferred__WEBPACK_IMPORTED_MODULE_6__["default"])();

    if (status === ABORTED) {
      deferredEnd.reject(taskError);
    } else if (status !== RUNNING) {
      deferredEnd.resolve(taskResult);
    }

    return deferredEnd.promise;
  }

  var task = (_task = {}, _task[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TASK"]] = true, _task.id = parentEffectId, _task.meta = meta, _task.isRoot = isRoot, _task.context = context, _task.joiners = [], _task.queue = queue, _task.cancel = cancel, _task.cont = cont, _task.end = end, _task.setContext = setContext, _task.toPromise = toPromise, _task.isRunning = function isRunning() {
    return status === RUNNING;
  }, _task.isCancelled = function isCancelled() {
    return status === CANCELLED || status === RUNNING && mainTask.status === CANCELLED;
  }, _task.isAborted = function isAborted() {
    return status === ABORTED;
  }, _task.result = function result() {
    return taskResult;
  }, _task.error = function error() {
    return taskError;
  }, _task);
  return task;
}

function proc(env, iterator$1, parentContext, parentEffectId, meta, isRoot, cont) {
  if ( true && iterator$1[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["x"]]) {
    throw new Error("redux-saga doesn't support async generators, please use only regular ones");
  }

  var finalRunEffect = env.finalizeRunEffect(runEffect);
  /**
    Tracks the current effect cancellation
    Each time the generator progresses. calling runEffect will set a new value
    on it. It allows propagating cancellation to child effects
  **/

  next.cancel = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];
  /** Creates a main task to track the main flow */

  var mainTask = {
    meta: meta,
    cancel: cancelMain,
    status: RUNNING
  };
  /**
   Creates a new task descriptor for this generator.
   A task is the aggregation of it's mainTask and all it's forked tasks.
   **/

  var task = newTask(env, mainTask, parentContext, parentEffectId, meta, isRoot, cont);
  var executingContext = {
    task: task,
    digestEffect: digestEffect
  };
  /**
    cancellation of the main task. We'll simply resume the Generator with a TASK_CANCEL
  **/

  function cancelMain() {
    if (mainTask.status === RUNNING) {
      mainTask.status = CANCELLED;
      next(_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TASK_CANCEL"]);
    }
  }
  /**
    attaches cancellation logic to this task's continuation
    this will permit cancellation to propagate down the call chain
  **/


  if (cont) {
    cont.cancel = task.cancel;
  } // kicks up the generator


  next(); // then return the task descriptor to the caller

  return task;
  /**
   * This is the generator driver
   * It's a recursive async/continuation function which calls itself
   * until the generator terminates or throws
   * @param {internal commands(TASK_CANCEL | TERMINATE) | any} arg - value, generator will be resumed with.
   * @param {boolean} isErr - the flag shows if effect finished with an error
   *
   * receives either (command | effect result, false) or (any thrown thing, true)
   */

  function next(arg, isErr) {
    try {
      var result;

      if (isErr) {
        result = iterator$1.throw(arg); // user handled the error, we can clear bookkept values

        clear();
      } else if (Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["y"])(arg)) {
        /**
          getting TASK_CANCEL automatically cancels the main task
          We can get this value here
           - By cancelling the parent task manually
          - By joining a Cancelled task
        **/
        mainTask.status = CANCELLED;
        /**
          Cancels the current effect; this will propagate the cancellation down to any called tasks
        **/

        next.cancel();
        /**
          If this Generator has a `return` method then invokes it
          This will jump to the finally block
        **/

        result = Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"])(iterator$1.return) ? iterator$1.return(_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TASK_CANCEL"]) : {
          done: true,
          value: _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TASK_CANCEL"]
        };
      } else if (Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["z"])(arg)) {
        // We get TERMINATE flag, i.e. by taking from a channel that ended using `take` (and not `takem` used to trap End of channels)
        result = Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"])(iterator$1.return) ? iterator$1.return() : {
          done: true
        };
      } else {
        result = iterator$1.next(arg);
      }

      if (!result.done) {
        digestEffect(result.value, parentEffectId, next);
      } else {
        /**
          This Generator has ended, terminate the main task and notify the fork queue
        **/
        if (mainTask.status !== CANCELLED) {
          mainTask.status = DONE;
        }

        mainTask.cont(result.value);
      }
    } catch (error) {
      if (mainTask.status === CANCELLED) {
        throw error;
      }

      mainTask.status = ABORTED;
      mainTask.cont(error, true);
    }
  }

  function runEffect(effect, effectId, currCb) {
    /**
      each effect runner must attach its own logic of cancellation to the provided callback
      it allows this generator to propagate cancellation downward.
       ATTENTION! effect runners must setup the cancel logic by setting cb.cancel = [cancelMethod]
      And the setup must occur before calling the callback
       This is a sort of inversion of control: called async functions are responsible
      of completing the flow by calling the provided continuation; while caller functions
      are responsible for aborting the current flow by calling the attached cancel function
       Library users can attach their own cancellation logic to promises by defining a
      promise[CANCEL] method in their returned promises
      ATTENTION! calling cancel must have no effect on an already completed or cancelled effect
    **/
    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["promise"])(effect)) {
      resolvePromise(effect, currCb);
    } else if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["iterator"])(effect)) {
      // resolve iterator
      proc(env, effect, task.context, effectId, meta,
      /* isRoot */
      false, currCb);
    } else if (effect && effect[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["IO"]]) {
      var effectRunner = effectRunnerMap[effect.type];
      effectRunner(env, effect.payload, currCb, executingContext);
    } else {
      // anything else returned as is
      currCb(effect);
    }
  }

  function digestEffect(effect, parentEffectId, cb, label) {
    if (label === void 0) {
      label = '';
    }

    var effectId = nextSagaId();
    env.sagaMonitor && env.sagaMonitor.effectTriggered({
      effectId: effectId,
      parentEffectId: parentEffectId,
      label: label,
      effect: effect
    });
    /**
      completion callback and cancel callback are mutually exclusive
      We can't cancel an already completed effect
      And We can't complete an already cancelled effectId
    **/

    var effectSettled; // Completion callback passed to the appropriate effect runner

    function currCb(res, isErr) {
      if (effectSettled) {
        return;
      }

      effectSettled = true;
      cb.cancel = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"]; // defensive measure

      if (env.sagaMonitor) {
        if (isErr) {
          env.sagaMonitor.effectRejected(effectId, res);
        } else {
          env.sagaMonitor.effectResolved(effectId, res);
        }
      }

      if (isErr) {
        setCrashedEffect(effect);
      }

      cb(res, isErr);
    } // tracks down the current cancel


    currCb.cancel = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"]; // setup cancellation logic on the parent cb

    cb.cancel = function () {
      // prevents cancelling an already completed effect
      if (effectSettled) {
        return;
      }

      effectSettled = true;
      currCb.cancel(); // propagates cancel downward

      currCb.cancel = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"]; // defensive measure

      env.sagaMonitor && env.sagaMonitor.effectCancelled(effectId);
    };

    finalRunEffect(effect, effectId, currCb);
  }
}

var RUN_SAGA_SIGNATURE = 'runSaga(options, saga, ...args)';
var NON_GENERATOR_ERR = RUN_SAGA_SIGNATURE + ": saga argument must be a Generator function!";
function runSaga(_ref, saga) {
  var _ref$channel = _ref.channel,
      channel = _ref$channel === void 0 ? stdChannel() : _ref$channel,
      dispatch = _ref.dispatch,
      getState = _ref.getState,
      _ref$context = _ref.context,
      context = _ref$context === void 0 ? {} : _ref$context,
      sagaMonitor = _ref.sagaMonitor,
      effectMiddlewares = _ref.effectMiddlewares,
      _ref$onError = _ref.onError,
      onError = _ref$onError === void 0 ? _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["B"] : _ref$onError;

  if (true) {
    Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(saga, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"], NON_GENERATOR_ERR);
  }

  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var iterator$1 = saga.apply(void 0, args);

  if (true) {
    Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(iterator$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["iterator"], NON_GENERATOR_ERR);
  }

  var effectId = nextSagaId();

  if (sagaMonitor) {
    // monitors are expected to have a certain interface, let's fill-in any missing ones
    sagaMonitor.rootSagaStarted = sagaMonitor.rootSagaStarted || _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];
    sagaMonitor.effectTriggered = sagaMonitor.effectTriggered || _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];
    sagaMonitor.effectResolved = sagaMonitor.effectResolved || _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];
    sagaMonitor.effectRejected = sagaMonitor.effectRejected || _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];
    sagaMonitor.effectCancelled = sagaMonitor.effectCancelled || _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];
    sagaMonitor.actionDispatched = sagaMonitor.actionDispatched || _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];
    sagaMonitor.rootSagaStarted({
      effectId: effectId,
      saga: saga,
      args: args
    });
  }

  if (true) {
    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["notUndef"])(dispatch)) {
      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(dispatch, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"], 'dispatch must be a function');
    }

    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["notUndef"])(getState)) {
      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(getState, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"], 'getState must be a function');
    }

    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["notUndef"])(effectMiddlewares)) {
      var MIDDLEWARE_TYPE_ERROR = 'effectMiddlewares must be an array of functions';
      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(effectMiddlewares, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["array"], MIDDLEWARE_TYPE_ERROR);
      effectMiddlewares.forEach(function (effectMiddleware) {
        return Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(effectMiddleware, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"], MIDDLEWARE_TYPE_ERROR);
      });
    }

    Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(onError, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"], 'onError passed to the redux-saga is not a function!');
  }

  var finalizeRunEffect;

  if (effectMiddlewares) {
    var middleware = redux__WEBPACK_IMPORTED_MODULE_5__["compose"].apply(void 0, effectMiddlewares);

    finalizeRunEffect = function finalizeRunEffect(runEffect) {
      return function (effect, effectId, currCb) {
        var plainRunEffect = function plainRunEffect(eff) {
          return runEffect(eff, effectId, currCb);
        };

        return middleware(plainRunEffect)(effect);
      };
    };
  } else {
    finalizeRunEffect = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["E"];
  }

  var env = {
    channel: channel,
    dispatch: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["D"])(dispatch),
    getState: getState,
    sagaMonitor: sagaMonitor,
    onError: onError,
    finalizeRunEffect: finalizeRunEffect
  };
  return immediately(function () {
    var task = proc(env, iterator$1, context, effectId, Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["j"])(saga),
    /* isRoot */
    true, undefined);

    if (sagaMonitor) {
      sagaMonitor.effectResolved(effectId, task);
    }

    return task;
  });
}

function sagaMiddlewareFactory(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$context = _ref.context,
      context = _ref$context === void 0 ? {} : _ref$context,
      _ref$channel = _ref.channel,
      channel = _ref$channel === void 0 ? stdChannel() : _ref$channel,
      sagaMonitor = _ref.sagaMonitor,
      options = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["context", "channel", "sagaMonitor"]);

  var boundRunSaga;

  if (true) {
    Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(channel, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["channel"], 'options.channel passed to the Saga middleware is not a channel');
  }

  function sagaMiddleware(_ref2) {
    var getState = _ref2.getState,
        dispatch = _ref2.dispatch;
    boundRunSaga = runSaga.bind(null, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, options, {
      context: context,
      channel: channel,
      dispatch: dispatch,
      getState: getState,
      sagaMonitor: sagaMonitor
    }));
    return function (next) {
      return function (action) {
        if (sagaMonitor && sagaMonitor.actionDispatched) {
          sagaMonitor.actionDispatched(action);
        }

        var result = next(action); // hit reducers

        channel.put(action);
        return result;
      };
    };
  }

  sagaMiddleware.run = function () {
    if ( true && !boundRunSaga) {
      throw new Error('Before running a Saga, you must mount the Saga middleware on the Store using applyMiddleware');
    }

    return boundRunSaga.apply(void 0, arguments);
  };

  sagaMiddleware.setContext = function (props) {
    if (true) {
      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(props, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["object"], Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["w"])('sagaMiddleware', props));
    }

    Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["p"])(context, props);
  };

  return sagaMiddleware;
}

/* harmony default export */ __webpack_exports__["default"] = (sagaMiddlewareFactory);



/***/ }),

/***/ "./node_modules/@redux-saga/core/dist/redux-saga-effects.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@redux-saga/core/dist/redux-saga-effects.esm.js ***!
  \**********************************************************************/
/*! exports provided: actionChannel, all, apply, call, cancel, cancelled, cps, delay, effectTypes, flush, fork, getContext, join, put, putResolve, race, select, setContext, spawn, take, takeMaybe, debounce, retry, takeEvery, takeLatest, takeLeading, throttle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retry", function() { return retry$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeEvery", function() { return takeEvery$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeLatest", function() { return takeLatest$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeLeading", function() { return takeLeading$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle$1; });
/* harmony import */ var _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/symbols */ "./node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redux-saga/is */ "./node_modules/@redux-saga/is/dist/redux-saga-is.esm.js");
/* harmony import */ var _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./io-6de156f3.js */ "./node_modules/@redux-saga/core/dist/io-6de156f3.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actionChannel", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["O"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "all", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["_"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["$"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "call", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["N"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cancel", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["M"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cancelled", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["a4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cps", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["a0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["U"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "effectTypes", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["W"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["a5"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fork", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["L"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContext", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["a6"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "join", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["a2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "put", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["Y"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "putResolve", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["Z"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "race", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["V"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "select", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["a3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["a7"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spawn", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["a1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "take", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["K"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeMaybe", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["X"]; });

/* harmony import */ var _redux_saga_delay_p__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @redux-saga/delay-p */ "./node_modules/@redux-saga/delay-p/dist/redux-saga-delay-p.esm.js");







var done = function done(value) {
  return {
    done: true,
    value: value
  };
};

var qEnd = {};
function safeName(patternOrChannel) {
  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["channel"])(patternOrChannel)) {
    return 'channel';
  }

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["stringableFunc"])(patternOrChannel)) {
    return String(patternOrChannel);
  }

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"])(patternOrChannel)) {
    return patternOrChannel.name;
  }

  return String(patternOrChannel);
}
function fsmIterator(fsm, startState, name) {
  var stateUpdater,
      errorState,
      effect,
      nextState = startState;

  function next(arg, error) {
    if (nextState === qEnd) {
      return done(arg);
    }

    if (error && !errorState) {
      nextState = qEnd;
      throw error;
    } else {
      stateUpdater && stateUpdater(arg);
      var currentState = error ? fsm[errorState](error) : fsm[nextState]();
      nextState = currentState.nextState;
      effect = currentState.effect;
      stateUpdater = currentState.stateUpdater;
      errorState = currentState.errorState;
      return nextState === qEnd ? done(arg) : effect;
    }
  }

  return Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["q"])(next, function (error) {
    return next(null, error);
  }, name);
}

function takeEvery(patternOrChannel, worker) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var yTake = {
    done: false,
    value: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["K"])(patternOrChannel)
  };

  var yFork = function yFork(ac) {
    return {
      done: false,
      value: _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["L"].apply(void 0, [worker].concat(args, [ac]))
    };
  };

  var action,
      setAction = function setAction(ac) {
    return action = ac;
  };

  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yTake,
        stateUpdater: setAction
      };
    },
    q2: function q2() {
      return {
        nextState: 'q1',
        effect: yFork(action)
      };
    }
  }, 'q1', "takeEvery(" + safeName(patternOrChannel) + ", " + worker.name + ")");
}

function takeLatest(patternOrChannel, worker) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var yTake = {
    done: false,
    value: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["K"])(patternOrChannel)
  };

  var yFork = function yFork(ac) {
    return {
      done: false,
      value: _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["L"].apply(void 0, [worker].concat(args, [ac]))
    };
  };

  var yCancel = function yCancel(task) {
    return {
      done: false,
      value: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["M"])(task)
    };
  };

  var task, action;

  var setTask = function setTask(t) {
    return task = t;
  };

  var setAction = function setAction(ac) {
    return action = ac;
  };

  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yTake,
        stateUpdater: setAction
      };
    },
    q2: function q2() {
      return task ? {
        nextState: 'q3',
        effect: yCancel(task)
      } : {
        nextState: 'q1',
        effect: yFork(action),
        stateUpdater: setTask
      };
    },
    q3: function q3() {
      return {
        nextState: 'q1',
        effect: yFork(action),
        stateUpdater: setTask
      };
    }
  }, 'q1', "takeLatest(" + safeName(patternOrChannel) + ", " + worker.name + ")");
}

function takeLeading(patternOrChannel, worker) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var yTake = {
    done: false,
    value: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["K"])(patternOrChannel)
  };

  var yCall = function yCall(ac) {
    return {
      done: false,
      value: _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["N"].apply(void 0, [worker].concat(args, [ac]))
    };
  };

  var action;

  var setAction = function setAction(ac) {
    return action = ac;
  };

  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yTake,
        stateUpdater: setAction
      };
    },
    q2: function q2() {
      return {
        nextState: 'q1',
        effect: yCall(action)
      };
    }
  }, 'q1', "takeLeading(" + safeName(patternOrChannel) + ", " + worker.name + ")");
}

function throttle(delayLength, pattern, worker) {
  for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  var action, channel;
  var yActionChannel = {
    done: false,
    value: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["O"])(pattern, Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["Q"])(1))
  };

  var yTake = function yTake() {
    return {
      done: false,
      value: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["K"])(channel)
    };
  };

  var yFork = function yFork(ac) {
    return {
      done: false,
      value: _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["L"].apply(void 0, [worker].concat(args, [ac]))
    };
  };

  var yDelay = {
    done: false,
    value: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["U"])(delayLength)
  };

  var setAction = function setAction(ac) {
    return action = ac;
  };

  var setChannel = function setChannel(ch) {
    return channel = ch;
  };

  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yActionChannel,
        stateUpdater: setChannel
      };
    },
    q2: function q2() {
      return {
        nextState: 'q3',
        effect: yTake(),
        stateUpdater: setAction
      };
    },
    q3: function q3() {
      return {
        nextState: 'q4',
        effect: yFork(action)
      };
    },
    q4: function q4() {
      return {
        nextState: 'q2',
        effect: yDelay
      };
    }
  }, 'q1', "throttle(" + safeName(pattern) + ", " + worker.name + ")");
}

function retry(maxTries, delayLength, fn) {
  var counter = maxTries;

  for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  var yCall = {
    done: false,
    value: _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["N"].apply(void 0, [fn].concat(args))
  };
  var yDelay = {
    done: false,
    value: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["U"])(delayLength)
  };
  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yCall,
        errorState: 'q10'
      };
    },
    q2: function q2() {
      return {
        nextState: qEnd
      };
    },
    q10: function q10(error) {
      counter -= 1;

      if (counter <= 0) {
        throw error;
      }

      return {
        nextState: 'q1',
        effect: yDelay
      };
    }
  }, 'q1', "retry(" + fn.name + ")");
}

function debounceHelper(delayLength, patternOrChannel, worker) {
  for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  var action, raceOutput;
  var yTake = {
    done: false,
    value: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["K"])(patternOrChannel)
  };
  var yRace = {
    done: false,
    value: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["V"])({
      action: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["K"])(patternOrChannel),
      debounce: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["U"])(delayLength)
    })
  };

  var yFork = function yFork(ac) {
    return {
      done: false,
      value: _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["L"].apply(void 0, [worker].concat(args, [ac]))
    };
  };

  var yNoop = function yNoop(value) {
    return {
      done: false,
      value: value
    };
  };

  var setAction = function setAction(ac) {
    return action = ac;
  };

  var setRaceOutput = function setRaceOutput(ro) {
    return raceOutput = ro;
  };

  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yTake,
        stateUpdater: setAction
      };
    },
    q2: function q2() {
      return {
        nextState: 'q3',
        effect: yRace,
        stateUpdater: setRaceOutput
      };
    },
    q3: function q3() {
      return raceOutput.debounce ? {
        nextState: 'q1',
        effect: yFork(action)
      } : {
        nextState: 'q2',
        effect: yNoop(raceOutput.action),
        stateUpdater: setAction
      };
    }
  }, 'q1', "debounce(" + safeName(patternOrChannel) + ", " + worker.name + ")");
}

var validateTakeEffect = function validateTakeEffect(fn, patternOrChannel, worker) {
  Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["c"])(patternOrChannel, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], fn.name + " requires a pattern or channel");
  Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["c"])(worker, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], fn.name + " requires a saga parameter");
};

function takeEvery$1(patternOrChannel, worker) {
  if (true) {
    validateTakeEffect(takeEvery$1, patternOrChannel, worker);
  }

  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["L"].apply(void 0, [takeEvery, patternOrChannel, worker].concat(args));
}
function takeLatest$1(patternOrChannel, worker) {
  if (true) {
    validateTakeEffect(takeLatest$1, patternOrChannel, worker);
  }

  for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }

  return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["L"].apply(void 0, [takeLatest, patternOrChannel, worker].concat(args));
}
function takeLeading$1(patternOrChannel, worker) {
  if (true) {
    validateTakeEffect(takeLeading$1, patternOrChannel, worker);
  }

  for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    args[_key3 - 2] = arguments[_key3];
  }

  return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["L"].apply(void 0, [takeLeading, patternOrChannel, worker].concat(args));
}
function throttle$1(ms, pattern, worker) {
  if (true) {
    Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["c"])(pattern, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'throttle requires a pattern');
    Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["c"])(worker, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'throttle requires a saga parameter');
  }

  for (var _len4 = arguments.length, args = new Array(_len4 > 3 ? _len4 - 3 : 0), _key4 = 3; _key4 < _len4; _key4++) {
    args[_key4 - 3] = arguments[_key4];
  }

  return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["L"].apply(void 0, [throttle, ms, pattern, worker].concat(args));
}
function retry$1(maxTries, delayLength, worker) {
  for (var _len5 = arguments.length, args = new Array(_len5 > 3 ? _len5 - 3 : 0), _key5 = 3; _key5 < _len5; _key5++) {
    args[_key5 - 3] = arguments[_key5];
  }

  return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["N"].apply(void 0, [retry, maxTries, delayLength, worker].concat(args));
}
function debounce(delayLength, pattern, worker) {
  for (var _len6 = arguments.length, args = new Array(_len6 > 3 ? _len6 - 3 : 0), _key6 = 3; _key6 < _len6; _key6++) {
    args[_key6 - 3] = arguments[_key6];
  }

  return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["L"].apply(void 0, [debounceHelper, delayLength, pattern, worker].concat(args));
}




/***/ }),

/***/ "./node_modules/@redux-saga/deferred/dist/redux-saga-deferred.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@redux-saga/deferred/dist/redux-saga-deferred.esm.js ***!
  \***************************************************************************/
/*! exports provided: default, arrayOfDeferred */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayOfDeferred", function() { return arrayOfDeferred; });
function deferred() {
  var def = {};
  def.promise = new Promise(function (resolve, reject) {
    def.resolve = resolve;
    def.reject = reject;
  });
  return def;
}
function arrayOfDeferred(length) {
  var arr = [];

  for (var i = 0; i < length; i++) {
    arr.push(deferred());
  }

  return arr;
}

/* harmony default export */ __webpack_exports__["default"] = (deferred);



/***/ }),

/***/ "./node_modules/@redux-saga/delay-p/dist/redux-saga-delay-p.esm.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@redux-saga/delay-p/dist/redux-saga-delay-p.esm.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/symbols */ "./node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js");


function delayP(ms, val) {
  if (val === void 0) {
    val = true;
  }

  var timeoutId;
  var promise = new Promise(function (resolve) {
    timeoutId = setTimeout(resolve, ms, val);
  });

  promise[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["CANCEL"]] = function () {
    clearTimeout(timeoutId);
  };

  return promise;
}

/* harmony default export */ __webpack_exports__["default"] = (delayP);


/***/ }),

/***/ "./node_modules/@redux-saga/is/dist/redux-saga-is.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@redux-saga/is/dist/redux-saga-is.esm.js ***!
  \***************************************************************/
/*! exports provided: array, buffer, channel, effect, func, iterable, iterator, multicast, notUndef, number, object, observable, pattern, promise, sagaAction, string, stringableFunc, symbol, task, undef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "array", function() { return array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buffer", function() { return buffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "channel", function() { return channel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "effect", function() { return effect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "func", function() { return func; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterable", function() { return iterable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterator", function() { return iterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multicast", function() { return multicast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notUndef", function() { return notUndef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "number", function() { return number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "object", function() { return object; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return observable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pattern", function() { return pattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "promise", function() { return promise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaAction", function() { return sagaAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "string", function() { return string; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringableFunc", function() { return stringableFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "symbol", function() { return symbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "task", function() { return task; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "undef", function() { return undef; });
/* harmony import */ var _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/symbols */ "./node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js");


var undef = function undef(v) {
  return v === null || v === undefined;
};
var notUndef = function notUndef(v) {
  return v !== null && v !== undefined;
};
var func = function func(f) {
  return typeof f === 'function';
};
var number = function number(n) {
  return typeof n === 'number';
};
var string = function string(s) {
  return typeof s === 'string';
};
var array = Array.isArray;
var object = function object(obj) {
  return obj && !array(obj) && typeof obj === 'object';
};
var promise = function promise(p) {
  return p && func(p.then);
};
var iterator = function iterator(it) {
  return it && func(it.next) && func(it.throw);
};
var iterable = function iterable(it) {
  return it && func(Symbol) ? func(it[Symbol.iterator]) : array(it);
};
var task = function task(t) {
  return t && t[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TASK"]];
};
var sagaAction = function sagaAction(a) {
  return Boolean(a && a[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SAGA_ACTION"]]);
};
var observable = function observable(ob) {
  return ob && func(ob.subscribe);
};
var buffer = function buffer(buf) {
  return buf && func(buf.isEmpty) && func(buf.take) && func(buf.put);
};
var pattern = function pattern(pat) {
  return pat && (string(pat) || symbol(pat) || func(pat) || array(pat) && pat.every(pattern));
};
var channel = function channel(ch) {
  return ch && func(ch.take) && func(ch.close);
};
var stringableFunc = function stringableFunc(f) {
  return func(f) && f.hasOwnProperty('toString');
};
var symbol = function symbol(sym) {
  return Boolean(sym) && typeof Symbol === 'function' && sym.constructor === Symbol && sym !== Symbol.prototype;
};
var multicast = function multicast(ch) {
  return channel(ch) && ch[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["MULTICAST"]];
};
var effect = function effect(eff) {
  return eff && eff[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["IO"]];
};




/***/ }),

/***/ "./node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js ***!
  \*************************************************************************/
/*! exports provided: CANCEL, CHANNEL_END_TYPE, IO, MATCH, MULTICAST, SAGA_ACTION, SAGA_LOCATION, SELF_CANCELLATION, TASK, TASK_CANCEL, TERMINATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CANCEL", function() { return CANCEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANNEL_END_TYPE", function() { return CHANNEL_END_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IO", function() { return IO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MATCH", function() { return MATCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MULTICAST", function() { return MULTICAST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAGA_ACTION", function() { return SAGA_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAGA_LOCATION", function() { return SAGA_LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELF_CANCELLATION", function() { return SELF_CANCELLATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK", function() { return TASK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK_CANCEL", function() { return TASK_CANCEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TERMINATE", function() { return TERMINATE; });
var createSymbol = function createSymbol(name) {
  return "@@redux-saga/" + name;
};

var CANCEL =
/*#__PURE__*/
createSymbol('CANCEL_PROMISE');
var CHANNEL_END_TYPE =
/*#__PURE__*/
createSymbol('CHANNEL_END');
var IO =
/*#__PURE__*/
createSymbol('IO');
var MATCH =
/*#__PURE__*/
createSymbol('MATCH');
var MULTICAST =
/*#__PURE__*/
createSymbol('MULTICAST');
var SAGA_ACTION =
/*#__PURE__*/
createSymbol('SAGA_ACTION');
var SELF_CANCELLATION =
/*#__PURE__*/
createSymbol('SELF_CANCELLATION');
var TASK =
/*#__PURE__*/
createSymbol('TASK');
var TASK_CANCEL =
/*#__PURE__*/
createSymbol('TASK_CANCEL');
var TERMINATE =
/*#__PURE__*/
createSymbol('TERMINATE');
var SAGA_LOCATION =
/*#__PURE__*/
createSymbol('LOCATION');




/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/native-url/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/native-url/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var e,t=(e=__webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js"))&&"object"==typeof e&&"default"in e?e.default:e,r=/https?|ftp|gopher|file/;function o(e){"string"==typeof e&&(e=g(e));var o=function(e,t,r){var o=e.auth,a=e.hostname,s=e.protocol||"",c=e.pathname||"",h=e.hash||"",p=e.query||"",n=!1;o=o?encodeURIComponent(o).replace(/%3A/i,":")+"@":"",e.host?n=o+e.host:a&&(n=o+(~a.indexOf(":")?"["+a+"]":a),e.port&&(n+=":"+e.port)),p&&"object"==typeof p&&(p=t.encode(p));var l=e.search||p&&"?"+p||"";return s&&":"!==s.substr(-1)&&(s+=":"),e.slashes||(!s||r.test(s))&&!1!==n?(n="//"+(n||""),c&&"/"!==c[0]&&(c="/"+c)):n||(n=""),h&&"#"!==h[0]&&(h="#"+h),l&&"?"!==l[0]&&(l="?"+l),{protocol:s,host:n,pathname:c=c.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:h}}(e,t,r);return""+o.protocol+o.host+o.pathname+o.search+o.hash}var a="http://",s="w.w",c=a+s,h=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,p=/https?|ftp|gopher|file/;function n(e,t){var r="string"==typeof e?g(e):e;e="object"==typeof e?o(e):e;var s=g(t),n="";r.protocol&&!r.slashes&&(n=r.protocol,e=e.replace(r.protocol,""),n+="/"===t[0]||"/"===e[0]?"/":""),n&&s.protocol&&(n="",s.slashes||(n=s.protocol,t=t.replace(s.protocol,"")));var l=e.match(h);l&&!s.protocol&&(e=e.substr((n=l[1]+(l[2]||"")).length),/^\/\/[^/]/.test(t)&&(n=n.slice(0,-1)));var i=new URL(e,c+"/"),f=new URL(t,i).toString().replace(c,""),u=s.protocol||r.protocol;return u+=r.slashes||s.slashes?"//":"",!n&&u?f=f.replace(a,u):n&&(f=f.replace(a,"")),p.test(f)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==f.slice(-1)||(f=f.slice(0,-1)),n&&(f=n+("/"===f[0]?f.substr(1):f)),f}function l(){}l.parse=g,l.format=o,l.resolve=n,l.resolveObject=n;var i=/^https?|ftp|gopher|file/,f=/^(.*?)([#?].*)/,u=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,m=/^([a-z0-9.+-]*:)?\/\/\/*/i,v=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function d(e){try{return decodeURI(e)}catch(t){return e}}function g(e,r,a){if(void 0===r&&(r=!1),void 0===a&&(a=!1),e&&"object"==typeof e&&e instanceof l)return e;var h=(e=e.trim()).match(f);e=h?d(h[1]).replace(/\\/g,"/")+h[2]:d(e).replace(/\\/g,"/"),v.test(e)&&"/"!==e.slice(-1)&&(e+="/");var p=!/(^javascript)/.test(e)&&e.match(u),n=m.test(e),g="";p&&(i.test(p[1])||(g=p[1].toLowerCase(),e=""+p[2]+p[3]),p[2]||(n=!1,i.test(p[1])?(g=p[1],e=""+p[3]):e="//"+p[3]),3!==p[2].length&&1!==p[2].length||(g=p[1],e="/"+p[3]));var b,y=(h?h[1]:e).match(/(:[0-9]+)/),j="";y&&y[1]&&3===y[1].length&&(e=e.replace(j=y[1],j+"00"));var w=new l,x="",U="";try{b=new URL(e)}catch(t){x=t,g||a||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(U="/",e=e.substr(1));try{b=new URL(e,c)}catch(e){return w.protocol=g,w.href=g,w}}w.slashes=n&&!U,w.host=b.host===s?"":b.host,w.hostname=b.hostname===s?"":b.hostname.replace(/(\[|\])/g,""),w.protocol=x?g||null:b.protocol,w.search=b.search.replace(/\\/g,"%5C"),w.hash=b.hash.replace(/\\/g,"%5C");var R=e.split("#");!w.search&&~R[0].indexOf("?")&&(w.search="?"),w.hash||""!==R[1]||(w.hash="#"),w.query=r?t.decode(b.search.substr(1)):w.search.substr(1),w.pathname=U+d(b.pathname).replace(/"/g,"%22"),"about:"===w.protocol&&"blank"===w.pathname&&(w.protocol="",w.pathname=""),x&&"/"!==e[0]&&(w.pathname=w.pathname.substr(1)),g&&!i.test(g)&&"/"!==e.slice(-1)&&"/"===w.pathname&&(w.pathname=""),w.path=w.pathname+w.search,w.auth=[b.username,b.password].map(decodeURIComponent).filter(Boolean).join(":"),w.port=b.port,j&&(w.host=w.host.replace(j+"00",j),w.port=w.port.slice(0,-2)),w.href=U?""+w.pathname+w.search+w.hash:o(w);var O=/^(file)/.test(w.href)?["host","hostname"]:[];return Object.keys(w).forEach(function(e){~O.indexOf(e)||(w[e]=w[e]||null)}),w}exports.parse=g,exports.format=o,exports.resolve=n,exports.resolveObject=function(e,t){return g(n(e,t))},exports.Url=l;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/next-redux-wrapper/es6/index.js":
/*!******************************************************!*\
  !*** ./node_modules/next-redux-wrapper/es6/index.js ***!
  \******************************************************/
/*! exports provided: HYDRATE, STOREKEY, createWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HYDRATE", function() { return HYDRATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOREKEY", function() { return STOREKEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWrapper", function() { return createWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


var HYDRATE = '__NEXT_REDUX_WRAPPER_HYDRATE__';
var STOREKEY = '__NEXT_REDUX_WRAPPER_STORE__';
var getIsServer = function () { return typeof window === 'undefined'; };
var getDeserializedState = function (initialState, _a) {
    var deserializeState = (_a === void 0 ? {} : _a).deserializeState;
    return deserializeState ? deserializeState(initialState) : initialState;
};
var getSerializedState = function (state, _a) {
    var serializeState = (_a === void 0 ? {} : _a).serializeState;
    return serializeState ? serializeState(state) : state;
};
var getStoreKey = function (_a) {
    var storeKey = (_a === void 0 ? {} : _a).storeKey;
    return storeKey || STOREKEY;
};
var initStore = function (_a) {
    var makeStore = _a.makeStore, context = _a.context, config = _a.config;
    var storeKey = getStoreKey(config);
    var createStore = function () { return makeStore(context); };
    if (getIsServer()) {
        var c = context;
        var req = void 0;
        if (c.req)
            req = c.req;
        if (c.ctx && c.ctx.req)
            req = c.ctx.req;
        if (req) {
            // ATTENTION! THIS IS INTERNAL, DO NOT ACCESS DIRECTLY ANYWHERE ELSE
            // @see https://github.com/kirill-konshin/next-redux-wrapper/pull/196#issuecomment-611673546
            if (!req.__nextReduxWrapperStore)
                req.__nextReduxWrapperStore = createStore();
            return req.__nextReduxWrapperStore;
        }
        return createStore();
    }
    // Memoize store if client
    if (!(storeKey in window)) {
        window[storeKey] = createStore();
    }
    return window[storeKey];
};
var createWrapper = function (makeStore, config) {
    if (config === void 0) { config = {}; }
    var makeProps = function (_a) {
        var callback = _a.callback, context = _a.context, _b = _a.isApp, isApp = _b === void 0 ? false : _b;
        return __awaiter(void 0, void 0, void 0, function () {
            var store, initialProps, _c, state;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        store = initStore({ context: context, makeStore: makeStore, config: config });
                        if (config.debug)
                            console.log("1. getProps created store with state", store.getState());
                        _c = callback;
                        if (!_c) return [3 /*break*/, 2];
                        return [4 /*yield*/, callback(
                            // merging store into context instead of just passing as another argument because it's impossible to override getInitialProps signature
                            isApp ? __assign(__assign({}, context), { ctx: __assign(__assign({}, context.ctx), { store: store }) }) : __assign(__assign({}, context), { store: store }))];
                    case 1:
                        _c = (_d.sent());
                        _d.label = 2;
                    case 2:
                        initialProps = (_c) ||
                            {};
                        if (config.debug)
                            console.log("3. getProps after dispatches has store state", store.getState());
                        state = store.getState();
                        return [2 /*return*/, {
                                initialProps: initialProps,
                                initialState: getIsServer() ? getSerializedState(state, config) : state,
                            }];
                }
            });
        });
    };
    var getInitialPageProps = function (callback) { return function (context) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (context.store) {
                console.warn('No need to wrap pages if _app was wrapped');
                return [2 /*return*/, callback(context)];
            }
            return [2 /*return*/, makeProps({ callback: callback, context: context })];
        });
    }); }; };
    var getInitialAppProps = function (callback) { return function (context) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, makeProps({ callback: callback, context: context, isApp: true })];
            case 1: return [2 /*return*/, (_a.sent())];
        }
    }); }); }; }; // this is just to convince TS
    var getStaticProps = function (callback) { return function (context) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b, props, settings, wrapperProps;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, makeProps({ callback: callback, context: context })];
                case 1:
                    _a = _c.sent(), _b = _a.initialProps, props = _b.props, settings = __rest(_b, ["props"]), wrapperProps = __rest(_a, ["initialProps"]);
                    return [2 /*return*/, __assign(__assign({}, settings), { props: __assign(__assign({}, wrapperProps), props) })];
            }
        });
    }); }; };
    var getServerSideProps = function (callback) { return function (context) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getStaticProps(callback)(context)];
                case 1: return [2 /*return*/, _a.sent()]; // just not to repeat myself
            }
        });
    }); }; };
    var withRedux = function (Component) {
        var displayName = "withRedux(" + (Component.displayName || Component.name || 'Component') + ")";
        //TODO Check if pages/_app was wrapped so there's no need to wrap a page itself
        var Wrapper = function (_a, context) {
            var _b;
            var initialState = _a.initialState, initialProps = _a.initialProps, props = __rest(_a, ["initialState", "initialProps"]);
            var isFirstRender = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
            // this happens when App has page with getServerSideProps/getStaticProps
            var initialStateFromGSPorGSSR = (_b = props === null || props === void 0 ? void 0 : props.pageProps) === null || _b === void 0 ? void 0 : _b.initialState;
            if (config.debug)
                console.log('4. WrappedApp created new store with', displayName, {
                    initialState: initialState,
                    initialStateFromGSPorGSSR: initialStateFromGSPorGSSR,
                });
            var store = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(initStore({ makeStore: makeStore, config: config, context: context }));
            var hydrate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
                if (initialState)
                    store.current.dispatch({
                        type: HYDRATE,
                        payload: getDeserializedState(initialState, config),
                    });
                // ATTENTION! This code assumes that Page's getServerSideProps is executed after App.getInitialProps
                // so we dispatch in this order
                if (initialStateFromGSPorGSSR)
                    store.current.dispatch({
                        type: HYDRATE,
                        payload: getDeserializedState(initialStateFromGSPorGSSR, config),
                    });
            }, [initialStateFromGSPorGSSR, initialState]);
            // apply synchronously on first render (both server side and client side)
            if (isFirstRender.current)
                hydrate();
            // apply async in case props have changed, on navigation for example
            Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
                if (isFirstRender.current) {
                    isFirstRender.current = false;
                    return;
                }
                hydrate();
            }, [hydrate]);
            // order is important! Next.js overwrites props from pages/_app with getStaticProps from page
            // @see https://github.com/zeit/next.js/issues/11648
            if (initialProps && initialProps.pageProps)
                props.pageProps = __assign(__assign({}, initialProps.pageProps), props.pageProps);
            var resultProps = props;
            // just some cleanup to prevent passing it as props, we need to clone props to safely delete initialState
            if (initialStateFromGSPorGSSR) {
                resultProps = __assign(__assign({}, props), { pageProps: __assign({}, props.pageProps) });
                delete resultProps.pageProps.initialState;
            }
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], { store: store.current },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, __assign({}, initialProps, resultProps))));
        };
        Wrapper.displayName = displayName;
        if ('getInitialProps' in Component)
            Wrapper.getInitialProps = function (context) { return __awaiter(void 0, void 0, void 0, function () {
                var callback;
                return __generator(this, function (_a) {
                    callback = Component.getInitialProps;
                    return [2 /*return*/, (context.ctx ? getInitialAppProps(callback) : getInitialPageProps(callback))(context)];
                });
            }); };
        return Wrapper;
    };
    return {
        getServerSideProps: getServerSideProps,
        getStaticProps: getStaticProps,
        withRedux: withRedux,
    };
};
// Legacy
/* harmony default export */ __webpack_exports__["default"] = (function (makeStore, config) {
    if (config === void 0) { config = {}; }
    console.warn('/!\\ You are using legacy implementaion. Please update your code: use createWrapper() and wrapper.withRedux().');
    return createWrapper(makeStore, config).withRedux;
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!***********************************************************************************************************************!*\
  !*** delegated ./node_modules/next/dist/build/polyfills/object-assign.js from dll-reference dll_5030f387d328e4415785 ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5030f387d328e4415785 */ "dll-reference dll_5030f387d328e4415785"))("./node_modules/next/dist/build/polyfills/object-assign.js");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!./":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_app",
      function () {
        return __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _construct = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/next/node_modules/@babel/runtime/helpers/construct.js");

var _s = $RefreshSig$();

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: ".concat(eventField)); // tslint:disable-next-line:no-console

          console.error("".concat(err.message, "\n").concat(err.stack));
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  _s();

  return _react["default"].useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


_s(useRouter, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  var _iterator = _createForOfIteratorHelper(urlPropertyFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;

      if (typeof _router[property] === 'object') {
        instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  instance.events = _router2["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react["default"].createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(".concat(name, ")");
  }

  return WithRouterWrapper;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports["default"] = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  var all = Object.create(null);
  return {
    on: function on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.RouterContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var RouterContext = _react["default"].createContext(null);

exports.RouterContext = RouterContext;

if (true) {
  RouterContext.displayName = 'RouterContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js");

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js");

exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports["default"] = void 0;

var _url2 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


var basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

var prepareRoute = function prepareRoute(path) {
  return toRoute(!path || path === '/' ? '/index' : path);
};

function fetchNextData(pathname, query, isServerRender, cb) {
  var attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch((0, _utils.formatWithValidation)({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      "/_next/data/".concat(__NEXT_DATA__.buildId).concat(delBasePath(pathname), ".json")),
      query: query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(function (res) {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error("Failed to load static props");
      }

      return res.json();
    });
  }

  return getResponse().then(function (data) {
    return cb ? cb(data) : data;
  })["catch"](function (err) {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

var Router = /*#__PURE__*/function () {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  function Router(_pathname, _query, _as2, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        wrapApp = _ref.wrapApp,
        Component = _ref.Component,
        err = _ref.err,
        subscription = _ref.subscription,
        isFallback = _ref.isFallback;

    _classCallCheck(this, Router);

    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;

    this.onPopState = function (e) {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var pathname = _this.pathname,
            query = _this.query;

        _this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: pathname,
          query: query
        }), (0, _utils.getURL)());

        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && _this.isSsr && e.state.as === _this.asPath && (0, _url2.parse)(e.state.url).pathname === _this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(e.state)) {
        return;
      }

      var _e$state = e.state,
          url = _e$state.url,
          as = _e$state.as,
          options = _e$state.options;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      _this.replace(url, as, options);
    };

    this._getStaticData = function (asPath) {
      var pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, _this.isSsr, function (data) {
        return _this.sdc[pathname] = data;
      });
    };

    this._getServerData = function (asPath) {
      var _ref2 = (0, _url2.parse)(asPath, true),
          pathname = _ref2.pathname,
          query = _ref2.query;

      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, _this.isSsr);
    }; // represents the current component key


    this.route = toRoute(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        props: initialProps,
        err: err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as2;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (true) {
      // make sure "as" doesn't start with double slashes or else it can
      // throw an error as it's considered invalid
      if (_as2.substr(0, 2) !== '//') {
        // in order for `e.state` to work on the `onpopstate` event
        // we have to register the initial route upon initialization
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: _pathname,
          query: _query
        }), _as2);
      }

      window.addEventListener('popstate', this.onPopState);
    }
  } // @deprecated backwards compatibility even though it's a private method.


  _createClass(Router, [{
    key: "update",
    value: function update(route, mod) {
      var Component = mod["default"] || mod;
      var data = this.components[route];

      if (!data) {
        throw new Error("Cannot update unavailable route: ".concat(route));
      }

      var newData = Object.assign({}, data, {
        Component: Component,
        __N_SSG: mod.__N_SSG,
        __N_SSP: mod.__N_SSP
      });
      this.components[route] = newData; // pages/_app.js updated

      if (route === '/_app') {
        this.notify(this.components[this.route]);
        return;
      }

      if (route === this.route) {
        this.notify(newData);
      }
    }
  }, {
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
    * Go back in history
    */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
    * Performs a `pushState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */

  }, {
    key: "push",
    value: function push(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('pushState', url, as, options);
    }
    /**
    * Performs a `replaceState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */

  }, {
    key: "replace",
    value: function replace(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function change(method, _url, _as, options) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (!options._h) {
          _this2.isSsr = false;
        } // marking route changes as a navigation start entry


        if (_utils.ST) {
          performance.mark('routeChange');
        } // If url and as provided as an object representation,
        // we'll format them into the string version here.


        var url = typeof _url === 'object' ? (0, _utils.formatWithValidation)(_url) : _url;
        var as = typeof _as === 'object' ? (0, _utils.formatWithValidation)(_as) : _as;
        url = addBasePath(url);
        as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
        // "<page>/index.html" directly for the SSR page.

        if (false) { var rewriteUrlForNextExport; }

        _this2.abortComponentLoad(as); // If the url change is only related to a hash change
        // We should not proceed. We should only change the state.
        // WARNING: `_h` is an internal option for handing Next.js client-side
        // hydration. Your app should _never_ use this property. It may change at
        // any time without notice.


        if (!options._h && _this2.onlyAHashChange(as)) {
          _this2.asPath = as;
          Router.events.emit('hashChangeStart', as);

          _this2.changeState(method, url, as, options);

          _this2.scrollToHash(as);

          Router.events.emit('hashChangeComplete', as);
          return resolve(true);
        }

        var _ref3 = (0, _url2.parse)(url, true),
            pathname = _ref3.pathname,
            query = _ref3.query,
            protocol = _ref3.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return resolve(false);
        } // If asked to change the current URL we should reload the current page
        // (not location.reload() but reload getInitialProps and other Next.js stuffs)
        // We also need to set the method = replaceState always
        // as this should not go into the history (That's how browsers work)
        // We should compare the new asPath to the current asPath, not the url


        if (!_this2.urlIsNew(as)) {
          method = 'replaceState';
        }

        var route = toRoute(pathname);
        var _options$shallow = options.shallow,
            shallow = _options$shallow === void 0 ? false : _options$shallow;

        if ((0, _isDynamic.isDynamicRoute)(route)) {
          var _ref4 = (0, _url2.parse)(as),
              asPathname = _ref4.pathname;

          var routeRegex = (0, _routeRegex.getRouteRegex)(route);
          var routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

          if (!routeMatch) {
            var missingParams = Object.keys(routeRegex.groups).filter(function (param) {
              return !query[param];
            });

            if (missingParams.length > 0) {
              if (true) {
                console.warn("Mismatching `as` and `href` failed to manually provide " + "the params: ".concat(missingParams.join(', '), " in the `href`'s `query`"));
              }

              return reject(new Error("The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ") + "Read more: https://err.sh/zeit/next.js/incompatible-href-as"));
            }
          } else {
            // Merge params into `query`, overwriting any specified in search
            Object.assign(query, routeMatch);
          }
        }

        Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

        _this2.getRouteInfo(route, pathname, query, as, shallow).then(function (routeInfo) {
          var error = routeInfo.error;

          if (error && error.cancelled) {
            return resolve(false);
          }

          Router.events.emit('beforeHistoryChange', as);

          _this2.changeState(method, url, as, options);

          if (true) {
            var appComp = _this2.components['/_app'].Component;
            window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
          }

          _this2.set(route, pathname, query, as, routeInfo);

          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        }, reject);
      });
    }
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        }

        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
        window.history[method]({
          url: url,
          as: as,
          options: options
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
      }
    }
  }, {
    key: "getRouteInfo",
    value: function getRouteInfo(route, pathname, query, as) {
      var _this3 = this;

      var shallow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
      // If the route is already rendered on the screen.

      if (shallow && cachedRouteInfo && this.route === route) {
        return Promise.resolve(cachedRouteInfo);
      }

      var handleError = function handleError(err, loadErrorFail) {
        return new Promise(function (resolve) {
          if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
            // If we can't load the page it could be one of following reasons
            //  1. Page doesn't exists
            //  2. Page does exist in a different zone
            //  3. Internal error while loading the page
            // So, doing a hard reload is the proper way to deal with this.
            window.location.href = as; // Changing the URL doesn't block executing the current code path.
            // So, we need to mark it as a cancelled error and stop the routing logic.

            err.cancelled = true; // @ts-ignore TODO: fix the control flow here

            return resolve({
              error: err
            });
          }

          if (err.cancelled) {
            // @ts-ignore TODO: fix the control flow here
            return resolve({
              error: err
            });
          }

          resolve(_this3.fetchComponent('/_error').then(function (res) {
            var Component = res.page;
            var routeInfo = {
              Component: Component,
              err: err
            };
            return new Promise(function (resolve) {
              _this3.getInitialProps(Component, {
                err: err,
                pathname: pathname,
                query: query
              }).then(function (props) {
                routeInfo.props = props;
                routeInfo.error = err;
                resolve(routeInfo);
              }, function (gipErr) {
                console.error('Error in error page `getInitialProps`: ', gipErr);
                routeInfo.error = err;
                routeInfo.props = {};
                resolve(routeInfo);
              });
            });
          })["catch"](function (err) {
            return handleError(err, true);
          }));
        });
      };

      return new Promise(function (resolve, reject) {
        if (cachedRouteInfo) {
          return resolve(cachedRouteInfo);
        }

        _this3.fetchComponent(route).then(function (res) {
          return resolve({
            Component: res.page,
            __N_SSG: res.mod.__N_SSG,
            __N_SSP: res.mod.__N_SSP
          });
        }, reject);
      }).then(function (routeInfo) {
        var Component = routeInfo.Component,
            __N_SSG = routeInfo.__N_SSG,
            __N_SSP = routeInfo.__N_SSP;

        if (true) {
          var _require = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"),
              isValidElementType = _require.isValidElementType;

          if (!isValidElementType(Component)) {
            throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));
          }
        }

        return _this3._getData(function () {
          return __N_SSG ? _this3._getStaticData(as) : __N_SSP ? _this3._getServerData(as) : _this3.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
          {
            pathname: pathname,
            query: query,
            asPath: as
          });
        }).then(function (props) {
          routeInfo.props = props;
          _this3.components[route] = routeInfo;
          return routeInfo;
        });
      })["catch"](handleError);
    }
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data) {
      this.isFallback = false;
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      this.notify(data);
    }
    /**
    * Callback to execute before replacing router state
    * @param cb callback to be executed
    */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value


      if (hash === '') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
    /**
    * Prefetch page code, you may wait for the data during page rendering.
    * This feature only works in production!
    * @param url the href of prefetched page
    * @param asPath the as path of the prefetched page
    */

  }, {
    key: "prefetch",
    value: function prefetch(url) {
      var _this4 = this;

      var asPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return new Promise(function (resolve, reject) {
        var _ref5 = (0, _url2.parse)(url),
            pathname = _ref5.pathname,
            protocol = _ref5.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return;
        } // Prefetch is not supported in development mode because it would trigger on-demand-entries


        if (true) {
          return;
        }

        var route = delBasePath(toRoute(pathname));
        Promise.all([_this4.pageLoader.prefetchData(url, delBasePath(asPath)), _this4.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(function () {
          return resolve();
        }, reject);
      });
    }
  }, {
    key: "fetchComponent",
    value: function () {
      var _fetchComponent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(route) {
        var cancelled, cancel, componentResult, error;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                cancelled = false;

                cancel = this.clc = function () {
                  cancelled = true;
                };

                route = delBasePath(route);
                _context.next = 5;
                return this.pageLoader.loadPage(route);

              case 5:
                componentResult = _context.sent;

                if (!cancelled) {
                  _context.next = 10;
                  break;
                }

                error = new Error("Abort fetching component for route: \"".concat(route, "\""));
                error.cancelled = true;
                throw error;

              case 10:
                if (cancel === this.clc) {
                  this.clc = null;
                }

                return _context.abrupt("return", componentResult);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetchComponent(_x) {
        return _fetchComponent.apply(this, arguments);
      }

      return fetchComponent;
    }()
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this5 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this5.clc) {
          _this5.clc = null;
        }

        if (cancelled) {
          var err = new Error('Loading initial props cancelled');
          err.cancelled = true;
          throw err;
        }

        return data;
      });
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      return (0, _utils.loadGetInitialProps)(App, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as) {
      if (this.clc) {
        var e = new Error('Route Cancelled');
        e.cancelled = true;
        Router.events.emit('routeChangeError', e, as);
        this.clc();
        this.clc = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data) {
      this.sub(data, this.components['/_app'].Component);
    }
  }], [{
    key: "_rewriteUrlForNextExport",
    value: function _rewriteUrlForNextExport(url) {
      if (false) { var rewriteUrlForNextExport; } else {
        return url;
      }
    }
  }]);

  return Router;
}();

exports["default"] = Router;
Router.events = (0, _mitt["default"])();

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var decode = function decode(param) {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        var err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    var params = {};
    Object.keys(groups).forEach(function (slugName) {
      var g = groups[slugName];
      var m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(function (entry) {
          return decode(entry);
        }) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  var escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, function (_, $1) {
    var isOptional = /^\\\[.*\\\]$/.test($1);

    if (isOptional) {
      $1 = $1.slice(2, -2);
    }

    var isCatchAll = /^(\\\.){3}/.test($1);

    if (isCatchAll) {
      $1 = $1.slice(6);
    }

    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? isOptional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
  });
  var namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (false) {}

  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups: groups,
    namedRegex: namedParameterizedRoute ? "^".concat(namedParameterizedRoute, "(?:/)?$") : undefined
  };
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js");

exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _url = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");
/**
* Utils
*/


function execOnce(fn) {
  var used = false;
  var result;
  return function () {
    if (!used) {
      used = true;
      result = fn.apply(void 0, arguments);
    }

    return result;
  };
}

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

function loadGetInitialProps(_x, _x2) {
  return _loadGetInitialProps.apply(this, arguments);
}

function _loadGetInitialProps() {
  _loadGetInitialProps = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(App, ctx) {
    var _App$prototype, message, res, props, _message;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (false) {}

            if (!((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps)) {
              _context.next = 4;
              break;
            }

            message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.");
            throw new Error(message);

          case 4:
            // when called from _app `ctx` is nested in `ctx`
            res = ctx.res || ctx.ctx && ctx.ctx.res;

            if (App.getInitialProps) {
              _context.next = 12;
              break;
            }

            if (!(ctx.ctx && ctx.Component)) {
              _context.next = 11;
              break;
            }

            _context.next = 9;
            return loadGetInitialProps(ctx.Component, ctx.ctx);

          case 9:
            _context.t0 = _context.sent;
            return _context.abrupt("return", {
              pageProps: _context.t0
            });

          case 11:
            return _context.abrupt("return", {});

          case 12:
            _context.next = 14;
            return App.getInitialProps(ctx);

          case 14:
            props = _context.sent;

            if (!(res && isResSent(res))) {
              _context.next = 17;
              break;
            }

            return _context.abrupt("return", props);

          case 17:
            if (props) {
              _context.next = 20;
              break;
            }

            _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
            throw new Error(_message);

          case 20:
            if (true) {
              if (Object.keys(props).length === 0 && !ctx.ctx) {
                console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps"));
              }
            }

            return _context.abrupt("return", props);

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loadGetInitialProps.apply(this, arguments);
}

var urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(function (key) {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
        }
      });
    }
  }

  return (0, _url.format)(url, options);
}

var SP = typeof performance !== 'undefined';
exports.SP = SP;
var ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/construct.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/construct.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js");

var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct */ "./node_modules/next/node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js");

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/regenerator/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_5030f387d328e4415785 ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5030f387d328e4415785 */ "dll-reference dll_5030f387d328e4415785"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_5030f387d328e4415785 ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5030f387d328e4415785 */ "dll-reference dll_5030f387d328e4415785"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!***********************************************************************************************!*\
  !*** delegated ./node_modules/react-dom/index.js from dll-reference dll_5030f387d328e4415785 ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5030f387d328e4415785 */ "dll-reference dll_5030f387d328e4415785"))("./node_modules/react-dom/index.js");

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-redux/es/components/Context.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/components/Context.js ***!
  \***********************************************************/
/*! exports provided: ReactReduxContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactReduxContext", function() { return ReactReduxContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ReactReduxContext =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);

if (true) {
  ReactReduxContext.displayName = 'ReactRedux';
}

/* harmony default export */ __webpack_exports__["default"] = (ReactReduxContext);

/***/ }),

/***/ "./node_modules/react-redux/es/components/Provider.js":
/*!************************************************************!*\
  !*** ./node_modules/react-redux/es/components/Provider.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-redux/es/utils/Subscription.js");





function Provider(_ref) {
  var store = _ref.store,
      context = _ref.context,
      children = _ref.children;
  var contextValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var subscription = new _utils_Subscription__WEBPACK_IMPORTED_MODULE_3__["default"](store);
    subscription.onStateChange = subscription.notifyNestedSubs;
    return {
      store: store,
      subscription: subscription
    };
  }, [store]);
  var previousState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return store.getState();
  }, [store]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var subscription = contextValue.subscription;
    subscription.trySubscribe();

    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }

    return function () {
      subscription.tryUnsubscribe();
      subscription.onStateChange = null;
    };
  }, [contextValue, previousState]);
  var Context = context || _Context__WEBPACK_IMPORTED_MODULE_2__["ReactReduxContext"];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Context.Provider, {
    value: contextValue
  }, children);
}

if (true) {
  Provider.propTypes = {
    store: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      subscribe: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
      dispatch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
      getState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
    }),
    context: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Provider);

/***/ }),

/***/ "./node_modules/react-redux/es/components/connectAdvanced.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/components/connectAdvanced.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return connectAdvanced; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var _utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/useIsomorphicLayoutEffect */ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js");
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Context */ "./node_modules/react-redux/es/components/Context.js");







 // Define some constant arrays just to avoid re-creating these

var EMPTY_ARRAY = [];
var NO_SUBSCRIPTION_ARRAY = [null, null];

var stringifyComponent = function stringifyComponent(Comp) {
  try {
    return JSON.stringify(Comp);
  } catch (err) {
    return String(Comp);
  }
};

function storeStateUpdatesReducer(state, action) {
  var updateCount = state[1];
  return [action.payload, updateCount + 1];
}

function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
  Object(_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__["useIsomorphicLayoutEffect"])(function () {
    return effectFunc.apply(void 0, effectArgs);
  }, dependencies);
}

function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs) {
  // We want to capture the wrapper props and child props we used for later comparisons
  lastWrapperProps.current = wrapperProps;
  lastChildProps.current = actualChildProps;
  renderIsScheduled.current = false; // If the render was from a store update, clear out that reference and cascade the subscriber update

  if (childPropsFromStoreUpdate.current) {
    childPropsFromStoreUpdate.current = null;
    notifyNestedSubs();
  }
}

function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch) {
  // If we're not subscribed to the store, nothing to do here
  if (!shouldHandleStateChanges) return; // Capture values for checking if and when this component unmounts

  var didUnsubscribe = false;
  var lastThrownError = null; // We'll run this callback every time a store subscription update propagates to this component

  var checkForUpdates = function checkForUpdates() {
    if (didUnsubscribe) {
      // Don't run stale listeners.
      // Redux doesn't guarantee unsubscriptions happen until next dispatch.
      return;
    }

    var latestStoreState = store.getState();
    var newChildProps, error;

    try {
      // Actually run the selector with the most recent store state and wrapper props
      // to determine what the child props should be
      newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
    } catch (e) {
      error = e;
      lastThrownError = e;
    }

    if (!error) {
      lastThrownError = null;
    } // If the child props haven't changed, nothing to do here - cascade the subscription update


    if (newChildProps === lastChildProps.current) {
      if (!renderIsScheduled.current) {
        notifyNestedSubs();
      }
    } else {
      // Save references to the new child props.  Note that we track the "child props from store update"
      // as a ref instead of a useState/useReducer because we need a way to determine if that value has
      // been processed.  If this went into useState/useReducer, we couldn't clear out the value without
      // forcing another re-render, which we don't want.
      lastChildProps.current = newChildProps;
      childPropsFromStoreUpdate.current = newChildProps;
      renderIsScheduled.current = true; // If the child props _did_ change (or we caught an error), this wrapper component needs to re-render

      forceComponentUpdateDispatch({
        type: 'STORE_UPDATED',
        payload: {
          error: error
        }
      });
    }
  }; // Actually subscribe to the nearest connected ancestor (or store)


  subscription.onStateChange = checkForUpdates;
  subscription.trySubscribe(); // Pull data from the store after first render in case the store has
  // changed since we began.

  checkForUpdates();

  var unsubscribeWrapper = function unsubscribeWrapper() {
    didUnsubscribe = true;
    subscription.tryUnsubscribe();
    subscription.onStateChange = null;

    if (lastThrownError) {
      // It's possible that we caught an error due to a bad mapState function, but the
      // parent re-rendered without this component and we're about to unmount.
      // This shouldn't happen as long as we do top-down subscriptions correctly, but
      // if we ever do those wrong, this throw will surface the error in our tests.
      // In that case, throw the error from here so it doesn't get lost.
      throw lastThrownError;
    }
  };

  return unsubscribeWrapper;
}

var initStateUpdates = function initStateUpdates() {
  return [null, 0];
};

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
      export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
    Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
    Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory, // options object:
_ref) {
  if (_ref === void 0) {
    _ref = {};
  }

  var _ref2 = _ref,
      _ref2$getDisplayName = _ref2.getDisplayName,
      getDisplayName = _ref2$getDisplayName === void 0 ? function (name) {
    return "ConnectAdvanced(" + name + ")";
  } : _ref2$getDisplayName,
      _ref2$methodName = _ref2.methodName,
      methodName = _ref2$methodName === void 0 ? 'connectAdvanced' : _ref2$methodName,
      _ref2$renderCountProp = _ref2.renderCountProp,
      renderCountProp = _ref2$renderCountProp === void 0 ? undefined : _ref2$renderCountProp,
      _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta,
      _ref2$storeKey = _ref2.storeKey,
      storeKey = _ref2$storeKey === void 0 ? 'store' : _ref2$storeKey,
      _ref2$withRef = _ref2.withRef,
      withRef = _ref2$withRef === void 0 ? false : _ref2$withRef,
      _ref2$forwardRef = _ref2.forwardRef,
      forwardRef = _ref2$forwardRef === void 0 ? false : _ref2$forwardRef,
      _ref2$context = _ref2.context,
      context = _ref2$context === void 0 ? _Context__WEBPACK_IMPORTED_MODULE_7__["ReactReduxContext"] : _ref2$context,
      connectOptions = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"]);

  if (true) {
    if (renderCountProp !== undefined) {
      throw new Error("renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension");
    }

    if (withRef) {
      throw new Error('withRef is removed. To access the wrapped instance, use a ref on the connected component');
    }

    var customStoreWarningMessage = 'To use a custom Redux store for specific components, create a custom React context with ' + "React.createContext(), and pass the context object to React Redux's Provider and specific components" + ' like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. ' + 'You may also pass a {context : MyContext} option to connect';

    if (storeKey !== 'store') {
      throw new Error('storeKey has been removed and does not do anything. ' + customStoreWarningMessage);
    }
  }

  var Context = context;
  return function wrapWithConnect(WrappedComponent) {
    if ( true && !Object(react_is__WEBPACK_IMPORTED_MODULE_4__["isValidElementType"])(WrappedComponent)) {
      throw new Error("You must pass a component to the function returned by " + (methodName + ". Instead received " + stringifyComponent(WrappedComponent)));
    }

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var pure = connectOptions.pure;

    function createChildSelector(store) {
      return selectorFactory(store.dispatch, selectorFactoryOptions);
    } // If we aren't running in "pure" mode, we don't want to memoize values.
    // To avoid conditionally calling hooks, we fall back to a tiny wrapper
    // that just executes the given callback immediately.


    var usePureOnlyMemo = pure ? react__WEBPACK_IMPORTED_MODULE_3__["useMemo"] : function (callback) {
      return callback();
    };

    function ConnectFunction(props) {
      var _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        // Distinguish between actual "data" props that were passed to the wrapper component,
        // and values needed to control behavior (forwarded refs, alternate context instances).
        // To maintain the wrapperProps object reference, memoize this destructuring.
        var forwardedRef = props.forwardedRef,
            wrapperProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["forwardedRef"]);

        return [props.context, forwardedRef, wrapperProps];
      }, [props]),
          propsContext = _useMemo[0],
          forwardedRef = _useMemo[1],
          wrapperProps = _useMemo[2];

      var ContextToUse = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        // Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.
        // Memoize the check that determines which context instance we should use.
        return propsContext && propsContext.Consumer && Object(react_is__WEBPACK_IMPORTED_MODULE_4__["isContextConsumer"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(propsContext.Consumer, null)) ? propsContext : Context;
      }, [propsContext, Context]); // Retrieve the store and ancestor subscription via context, if available

      var contextValue = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(ContextToUse); // The store _must_ exist as either a prop or in context.
      // We'll check to see if it _looks_ like a Redux store first.
      // This allows us to pass through a `store` prop that is just a plain value.

      var didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
      var didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);

      if ( true && !didStoreComeFromProps && !didStoreComeFromContext) {
        throw new Error("Could not find \"store\" in the context of " + ("\"" + displayName + "\". Either wrap the root component in a <Provider>, ") + "or pass a custom React context provider to <Provider> and the corresponding " + ("React context consumer to " + displayName + " in connect options."));
      } // Based on the previous check, one of these must be true


      var store = didStoreComeFromProps ? props.store : contextValue.store;
      var childPropsSelector = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        // The child props selector needs the store reference as an input.
        // Re-create this selector whenever the store changes.
        return createChildSelector(store);
      }, [store]);

      var _useMemo2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY; // This Subscription's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.

        var subscription = new _utils_Subscription__WEBPACK_IMPORTED_MODULE_5__["default"](store, didStoreComeFromProps ? null : contextValue.subscription); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `subscription` will then be null. This can
        // probably be avoided if Subscription's listeners logic is changed to not call listeners
        // that have been unsubscribed in the  middle of the notification loop.

        var notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);
        return [subscription, notifyNestedSubs];
      }, [store, didStoreComeFromProps, contextValue]),
          subscription = _useMemo2[0],
          notifyNestedSubs = _useMemo2[1]; // Determine what {store, subscription} value should be put into nested context, if necessary,
      // and memoize that value to avoid unnecessary context updates.


      var overriddenContextValue = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        if (didStoreComeFromProps) {
          // This component is directly subscribed to a store from props.
          // We don't want descendants reading from this store - pass down whatever
          // the existing context value is from the nearest connected ancestor.
          return contextValue;
        } // Otherwise, put this component's subscription instance into context, so that
        // connected descendants won't update until after this component is done


        return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, contextValue, {
          subscription: subscription
        });
      }, [didStoreComeFromProps, contextValue, subscription]); // We need to force this wrapper component to re-render whenever a Redux store update
      // causes a change to the calculated child component props (or we caught an error in mapState)

      var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__["useReducer"])(storeStateUpdatesReducer, EMPTY_ARRAY, initStateUpdates),
          _useReducer$ = _useReducer[0],
          previousStateUpdateResult = _useReducer$[0],
          forceComponentUpdateDispatch = _useReducer[1]; // Propagate any mapState/mapDispatch errors upwards


      if (previousStateUpdateResult && previousStateUpdateResult.error) {
        throw previousStateUpdateResult.error;
      } // Set up refs to coordinate values between the subscription effect and the render logic


      var lastChildProps = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
      var lastWrapperProps = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(wrapperProps);
      var childPropsFromStoreUpdate = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
      var renderIsScheduled = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(false);
      var actualChildProps = usePureOnlyMemo(function () {
        // Tricky logic here:
        // - This render may have been triggered by a Redux store update that produced new child props
        // - However, we may have gotten new wrapper props after that
        // If we have new child props, and the same wrapper props, we know we should use the new child props as-is.
        // But, if we have new wrapper props, those might change the child props, so we have to recalculate things.
        // So, we'll use the child props from store update only if the wrapper props are the same as last time.
        if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
          return childPropsFromStoreUpdate.current;
        } // TODO We're reading the store directly in render() here. Bad idea?
        // This will likely cause Bad Things (TM) to happen in Concurrent Mode.
        // Note that we do this because on renders _not_ caused by store updates, we need the latest store state
        // to determine what the child props should be.


        return childPropsSelector(store.getState(), wrapperProps);
      }, [store, previousStateUpdateResult, wrapperProps]); // We need this to execute synchronously every time we re-render. However, React warns
      // about useLayoutEffect in SSR, so we try to detect environment and fall back to
      // just useEffect instead to avoid the warning, since neither will run anyway.

      useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs]); // Our re-subscribe logic only runs when the store/subscription setup changes

      useIsomorphicLayoutEffectWithArgs(subscribeUpdates, [shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch], [store, subscription, childPropsSelector]); // Now that all that's done, we can finally try to actually render the child component.
      // We memoize the elements for the rendered child component as an optimization.

      var renderedWrappedComponent = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(WrappedComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, actualChildProps, {
          ref: forwardedRef
        }));
      }, [forwardedRef, WrappedComponent, actualChildProps]); // If React sees the exact same element reference as last time, it bails out of re-rendering
      // that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.

      var renderedChild = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        if (shouldHandleStateChanges) {
          // If this component is subscribed to store updates, we need to pass its own
          // subscription instance down to our descendants. That means rendering the same
          // Context instance, and putting a different value into the context.
          return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ContextToUse.Provider, {
            value: overriddenContextValue
          }, renderedWrappedComponent);
        }

        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    } // If we're in "pure" mode, ensure our wrapper component only re-renders when incoming props have changed.


    var Connect = pure ? react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(ConnectFunction) : ConnectFunction;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;

    if (forwardRef) {
      var forwarded = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function forwardConnectRef(props, ref) {
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Connect, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
          forwardedRef: ref
        }));
      });
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(forwarded, WrappedComponent);
    }

    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(Connect, WrappedComponent);
  };
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/connect.js":
/*!********************************************************!*\
  !*** ./node_modules/react-redux/es/connect/connect.js ***!
  \********************************************************/
/*! exports provided: createConnect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createConnect", function() { return createConnect; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/connectAdvanced */ "./node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony import */ var _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/shallowEqual */ "./node_modules/react-redux/es/utils/shallowEqual.js");
/* harmony import */ var _mapDispatchToProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mapDispatchToProps */ "./node_modules/react-redux/es/connect/mapDispatchToProps.js");
/* harmony import */ var _mapStateToProps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mapStateToProps */ "./node_modules/react-redux/es/connect/mapStateToProps.js");
/* harmony import */ var _mergeProps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mergeProps */ "./node_modules/react-redux/es/connect/mergeProps.js");
/* harmony import */ var _selectorFactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selectorFactory */ "./node_modules/react-redux/es/connect/selectorFactory.js");








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
  };
}

function strictEqual(a, b) {
  return a === b;
} // createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios


function createConnect(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === void 0 ? _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_2__["default"] : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? _mapStateToProps__WEBPACK_IMPORTED_MODULE_5__["default"] : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? _mapDispatchToProps__WEBPACK_IMPORTED_MODULE_4__["default"] : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === void 0 ? _mergeProps__WEBPACK_IMPORTED_MODULE_6__["default"] : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === void 0 ? _selectorFactory__WEBPACK_IMPORTED_MODULE_7__["default"] : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {
    if (_ref2 === void 0) {
      _ref2 = {};
    }

    var _ref3 = _ref2,
        _ref3$pure = _ref3.pure,
        pure = _ref3$pure === void 0 ? true : _ref3$pure,
        _ref3$areStatesEqual = _ref3.areStatesEqual,
        areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual,
        _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,
        areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areOwnPropsEqua,
        _ref3$areStatePropsEq = _ref3.areStatePropsEqual,
        areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areStatePropsEq,
        _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,
        areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areMergedPropsE,
        extraOptions = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
    return connectHOC(selectorFactory, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      // used in error messages
      methodName: 'connect',
      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return "Connect(" + name + ")";
      },
      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),
      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual
    }, extraOptions));
  };
}
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/createConnect());

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapDispatchToProps.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapDispatchToProps.js ***!
  \*******************************************************************/
/*! exports provided: whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapDispatchToPropsIsFunction", function() { return whenMapDispatchToPropsIsFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapDispatchToPropsIsMissing", function() { return whenMapDispatchToPropsIsMissing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapDispatchToPropsIsObject", function() { return whenMapDispatchToPropsIsObject; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrapMapToProps */ "./node_modules/react-redux/es/connect/wrapMapToProps.js");


function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__["wrapMapToPropsFunc"])(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}
function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__["wrapMapToPropsConstant"])(function (dispatch) {
    return {
      dispatch: dispatch
    };
  }) : undefined;
}
function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__["wrapMapToPropsConstant"])(function (dispatch) {
    return Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])(mapDispatchToProps, dispatch);
  }) : undefined;
}
/* harmony default export */ __webpack_exports__["default"] = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapStateToProps.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapStateToProps.js ***!
  \****************************************************************/
/*! exports provided: whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapStateToPropsIsFunction", function() { return whenMapStateToPropsIsFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapStateToPropsIsMissing", function() { return whenMapStateToPropsIsMissing; });
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapMapToProps */ "./node_modules/react-redux/es/connect/wrapMapToProps.js");

function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__["wrapMapToPropsFunc"])(mapStateToProps, 'mapStateToProps') : undefined;
}
function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__["wrapMapToPropsConstant"])(function () {
    return {};
  }) : undefined;
}
/* harmony default export */ __webpack_exports__["default"] = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mergeProps.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mergeProps.js ***!
  \***********************************************************/
/*! exports provided: defaultMergeProps, wrapMergePropsFunc, whenMergePropsIsFunction, whenMergePropsIsOmitted, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMergeProps", function() { return defaultMergeProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapMergePropsFunc", function() { return wrapMergePropsFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMergePropsIsFunction", function() { return whenMergePropsIsFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMergePropsIsOmitted", function() { return whenMergePropsIsOmitted; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/verifyPlainObject */ "./node_modules/react-redux/es/utils/verifyPlainObject.js");


function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ownProps, {}, stateProps, {}, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;
    var hasRunOnce = false;
    var mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (true) Object(_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__["default"])(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}
function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}
function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}
/* harmony default export */ __webpack_exports__["default"] = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/selectorFactory.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/selectorFactory.js ***!
  \****************************************************************/
/*! exports provided: impureFinalPropsSelectorFactory, pureFinalPropsSelectorFactory, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "impureFinalPropsSelectorFactory", function() { return impureFinalPropsSelectorFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pureFinalPropsSelectorFactory", function() { return pureFinalPropsSelectorFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return finalPropsSelectorFactory; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _verifySubselectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verifySubselectors */ "./node_modules/react-redux/es/connect/verifySubselectors.js");


function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;
  var hasRunAtLeastOnce = false;
  var state;
  var ownProps;
  var stateProps;
  var dispatchProps;
  var mergedProps;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
} // TODO: Add more comments
// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (true) {
    Object(_verifySubselectors__WEBPACK_IMPORTED_MODULE_1__["default"])(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/verifySubselectors.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/verifySubselectors.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return verifySubselectors; });
/* harmony import */ var _utils_warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/warning */ "./node_modules/react-redux/es/utils/warning.js");


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error("Unexpected value for " + methodName + " in " + displayName + ".");
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!Object.prototype.hasOwnProperty.call(selector, 'dependsOnOwnProps')) {
      Object(_utils_warning__WEBPACK_IMPORTED_MODULE_0__["default"])("The selector for " + methodName + " of " + displayName + " did not specify a value for dependsOnOwnProps.");
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/wrapMapToProps.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/wrapMapToProps.js ***!
  \***************************************************************/
/*! exports provided: wrapMapToPropsConstant, getDependsOnOwnProps, wrapMapToPropsFunc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapMapToPropsConstant", function() { return wrapMapToPropsConstant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDependsOnOwnProps", function() { return getDependsOnOwnProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapMapToPropsFunc", function() { return wrapMapToPropsFunc; });
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/verifyPlainObject */ "./node_modules/react-redux/es/utils/verifyPlainObject.js");

function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }

    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
//
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..

function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
//
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//

function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    }; // allow detectFactoryAndVerify to get ownProps


    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (true) Object(_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(props, displayName, methodName);
      return props;
    };

    return proxy;
  };
}

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useDispatch.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useDispatch.js ***!
  \**********************************************************/
/*! exports provided: createDispatchHook, useDispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDispatchHook", function() { return createDispatchHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDispatch", function() { return useDispatch; });
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _useStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useStore */ "./node_modules/react-redux/es/hooks/useStore.js");


/**
 * Hook factory, which creates a `useDispatch` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useDispatch` hook bound to the specified context.
 */

function createDispatchHook(context) {
  if (context === void 0) {
    context = _components_Context__WEBPACK_IMPORTED_MODULE_0__["ReactReduxContext"];
  }

  var useStore = context === _components_Context__WEBPACK_IMPORTED_MODULE_0__["ReactReduxContext"] ? _useStore__WEBPACK_IMPORTED_MODULE_1__["useStore"] : Object(_useStore__WEBPACK_IMPORTED_MODULE_1__["createStoreHook"])(context);
  return function useDispatch() {
    var store = useStore();
    return store.dispatch;
  };
}
/**
 * A hook to access the redux `dispatch` function.
 *
 * @returns {any|function} redux store's `dispatch` function
 *
 * @example
 *
 * import React, { useCallback } from 'react'
 * import { useDispatch } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const dispatch = useDispatch()
 *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
 *   return (
 *     <div>
 *       <span>{value}</span>
 *       <button onClick={increaseCounter}>Increase counter</button>
 *     </div>
 *   )
 * }
 */

var useDispatch =
/*#__PURE__*/
createDispatchHook();

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useReduxContext.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useReduxContext.js ***!
  \**************************************************************/
/*! exports provided: useReduxContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReduxContext", function() { return useReduxContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");


/**
 * A hook to access the value of the `ReactReduxContext`. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @returns {any} the value of the `ReactReduxContext`
 *
 * @example
 *
 * import React from 'react'
 * import { useReduxContext } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const { store } = useReduxContext()
 *   return <div>{store.getState()}</div>
 * }
 */

function useReduxContext() {
  var contextValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_components_Context__WEBPACK_IMPORTED_MODULE_1__["ReactReduxContext"]);

  if ( true && !contextValue) {
    throw new Error('could not find react-redux context value; please ensure the component is wrapped in a <Provider>');
  }

  return contextValue;
}

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useSelector.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useSelector.js ***!
  \**********************************************************/
/*! exports provided: createSelectorHook, useSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelectorHook", function() { return createSelectorHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSelector", function() { return useSelector; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useReduxContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useReduxContext */ "./node_modules/react-redux/es/hooks/useReduxContext.js");
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var _utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useIsomorphicLayoutEffect */ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js");
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");






var refEquality = function refEquality(a, b) {
  return a === b;
};

function useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub) {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(function (s) {
    return s + 1;
  }, 0),
      forceRender = _useReducer[1];

  var subscription = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return new _utils_Subscription__WEBPACK_IMPORTED_MODULE_2__["default"](store, contextSub);
  }, [store, contextSub]);
  var latestSubscriptionCallbackError = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var latestSelector = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var latestSelectedState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var selectedState;

  try {
    if (selector !== latestSelector.current || latestSubscriptionCallbackError.current) {
      selectedState = selector(store.getState());
    } else {
      selectedState = latestSelectedState.current;
    }
  } catch (err) {
    if (latestSubscriptionCallbackError.current) {
      err.message += "\nThe error may be correlated with this previous error:\n" + latestSubscriptionCallbackError.current.stack + "\n\n";
    }

    throw err;
  }

  Object(_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__["useIsomorphicLayoutEffect"])(function () {
    latestSelector.current = selector;
    latestSelectedState.current = selectedState;
    latestSubscriptionCallbackError.current = undefined;
  });
  Object(_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__["useIsomorphicLayoutEffect"])(function () {
    function checkForUpdates() {
      try {
        var newSelectedState = latestSelector.current(store.getState());

        if (equalityFn(newSelectedState, latestSelectedState.current)) {
          return;
        }

        latestSelectedState.current = newSelectedState;
      } catch (err) {
        // we ignore all errors here, since when the component
        // is re-rendered, the selectors are called again, and
        // will throw again, if neither props nor store state
        // changed
        latestSubscriptionCallbackError.current = err;
      }

      forceRender({});
    }

    subscription.onStateChange = checkForUpdates;
    subscription.trySubscribe();
    checkForUpdates();
    return function () {
      return subscription.tryUnsubscribe();
    };
  }, [store, subscription]);
  return selectedState;
}
/**
 * Hook factory, which creates a `useSelector` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useSelector` hook bound to the specified context.
 */


function createSelectorHook(context) {
  if (context === void 0) {
    context = _components_Context__WEBPACK_IMPORTED_MODULE_4__["ReactReduxContext"];
  }

  var useReduxContext = context === _components_Context__WEBPACK_IMPORTED_MODULE_4__["ReactReduxContext"] ? _useReduxContext__WEBPACK_IMPORTED_MODULE_1__["useReduxContext"] : function () {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(context);
  };
  return function useSelector(selector, equalityFn) {
    if (equalityFn === void 0) {
      equalityFn = refEquality;
    }

    if ( true && !selector) {
      throw new Error("You must pass a selector to useSelectors");
    }

    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store,
        contextSub = _useReduxContext.subscription;

    return useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub);
  };
}
/**
 * A hook to access the redux store's state. This hook takes a selector function
 * as an argument. The selector is called with the store state.
 *
 * This hook takes an optional equality comparison function as the second parameter
 * that allows you to customize the way the selected state is compared to determine
 * whether the component needs to be re-rendered.
 *
 * @param {Function} selector the selector function
 * @param {Function=} equalityFn the function that will be used to determine equality
 *
 * @returns {any} the selected state
 *
 * @example
 *
 * import React from 'react'
 * import { useSelector } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const counter = useSelector(state => state.counter)
 *   return <div>{counter}</div>
 * }
 */

var useSelector =
/*#__PURE__*/
createSelectorHook();

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useStore.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useStore.js ***!
  \*******************************************************/
/*! exports provided: createStoreHook, useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStoreHook", function() { return createStoreHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStore", function() { return useStore; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _useReduxContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useReduxContext */ "./node_modules/react-redux/es/hooks/useReduxContext.js");



/**
 * Hook factory, which creates a `useStore` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useStore` hook bound to the specified context.
 */

function createStoreHook(context) {
  if (context === void 0) {
    context = _components_Context__WEBPACK_IMPORTED_MODULE_1__["ReactReduxContext"];
  }

  var useReduxContext = context === _components_Context__WEBPACK_IMPORTED_MODULE_1__["ReactReduxContext"] ? _useReduxContext__WEBPACK_IMPORTED_MODULE_2__["useReduxContext"] : function () {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(context);
  };
  return function useStore() {
    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store;

    return store;
  };
}
/**
 * A hook to access the redux store.
 *
 * @returns {any} the redux store
 *
 * @example
 *
 * import React from 'react'
 * import { useStore } from 'react-redux'
 *
 * export const ExampleComponent = () => {
 *   const store = useStore()
 *   return <div>{store.getState()}</div>
 * }
 */

var useStore =
/*#__PURE__*/
createStoreHook();

/***/ }),

/***/ "./node_modules/react-redux/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/react-redux/es/index.js ***!
  \**********************************************/
/*! exports provided: Provider, connectAdvanced, ReactReduxContext, connect, batch, useDispatch, createDispatchHook, useSelector, createSelectorHook, useStore, createStoreHook, shallowEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Provider */ "./node_modules/react-redux/es/components/Provider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return _components_Provider__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/connectAdvanced */ "./node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectAdvanced", function() { return _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReactReduxContext", function() { return _components_Context__WEBPACK_IMPORTED_MODULE_2__["ReactReduxContext"]; });

/* harmony import */ var _connect_connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connect/connect */ "./node_modules/react-redux/es/connect/connect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return _connect_connect__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/useDispatch */ "./node_modules/react-redux/es/hooks/useDispatch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDispatch", function() { return _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__["useDispatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createDispatchHook", function() { return _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__["createDispatchHook"]; });

/* harmony import */ var _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/useSelector */ "./node_modules/react-redux/es/hooks/useSelector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSelector", function() { return _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__["useSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSelectorHook", function() { return _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__["createSelectorHook"]; });

/* harmony import */ var _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useStore */ "./node_modules/react-redux/es/hooks/useStore.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStore", function() { return _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__["useStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStoreHook", function() { return _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__["createStoreHook"]; });

/* harmony import */ var _utils_batch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/batch */ "./node_modules/react-redux/es/utils/batch.js");
/* harmony import */ var _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/reactBatchedUpdates */ "./node_modules/react-redux/es/utils/reactBatchedUpdates.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "batch", function() { return _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_8__["unstable_batchedUpdates"]; });

/* harmony import */ var _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/shallowEqual */ "./node_modules/react-redux/es/utils/shallowEqual.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shallowEqual", function() { return _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_9__["default"]; });











Object(_utils_batch__WEBPACK_IMPORTED_MODULE_7__["setBatch"])(_utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_8__["unstable_batchedUpdates"]);


/***/ }),

/***/ "./node_modules/react-redux/es/utils/Subscription.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/utils/Subscription.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Subscription; });
/* harmony import */ var _batch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./batch */ "./node_modules/react-redux/es/utils/batch.js");
 // encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  var batch = Object(_batch__WEBPACK_IMPORTED_MODULE_0__["getBatch"])();
  var first = null;
  var last = null;
  return {
    clear: function clear() {
      first = null;
      last = null;
    },
    notify: function notify() {
      batch(function () {
        var listener = first;

        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },
    get: function get() {
      var listeners = [];
      var listener = first;

      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }

      return listeners;
    },
    subscribe: function subscribe(callback) {
      var isSubscribed = true;
      var listener = last = {
        callback: callback,
        next: null,
        prev: last
      };

      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }

      return function unsubscribe() {
        if (!isSubscribed || first === null) return;
        isSubscribed = false;

        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }

        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }
  };
}

var Subscription =
/*#__PURE__*/
function () {
  function Subscription(store, parentSub) {
    this.store = store;
    this.parentSub = parentSub;
    this.unsubscribe = null;
    this.listeners = nullListeners;
    this.handleChangeWrapper = this.handleChangeWrapper.bind(this);
  }

  var _proto = Subscription.prototype;

  _proto.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  _proto.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  _proto.handleChangeWrapper = function handleChangeWrapper() {
    if (this.onStateChange) {
      this.onStateChange();
    }
  };

  _proto.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  _proto.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper);
      this.listeners = createListenerCollection();
    }
  };

  _proto.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();



/***/ }),

/***/ "./node_modules/react-redux/es/utils/batch.js":
/*!****************************************************!*\
  !*** ./node_modules/react-redux/es/utils/batch.js ***!
  \****************************************************/
/*! exports provided: setBatch, getBatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBatch", function() { return setBatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBatch", function() { return getBatch; });
// Default to a dummy "batch" implementation that just runs the callback
function defaultNoopBatch(callback) {
  callback();
}

var batch = defaultNoopBatch; // Allow injecting another batching function later

var setBatch = function setBatch(newBatch) {
  return batch = newBatch;
}; // Supply a getter just to skip dealing with ESM bindings

var getBatch = function getBatch() {
  return batch;
};

/***/ }),

/***/ "./node_modules/react-redux/es/utils/isPlainObject.js":
/*!************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/isPlainObject.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isPlainObject; });
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = Object.getPrototypeOf(obj);
  if (proto === null) return true;
  var baseProto = proto;

  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }

  return proto === baseProto;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/reactBatchedUpdates.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/reactBatchedUpdates.js ***!
  \******************************************************************/
/*! exports provided: unstable_batchedUpdates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unstable_batchedUpdates", function() { return react_dom__WEBPACK_IMPORTED_MODULE_0__["unstable_batchedUpdates"]; });

/* eslint-disable import/no-unresolved */


/***/ }),

/***/ "./node_modules/react-redux/es/utils/shallowEqual.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/utils/shallowEqual.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return shallowEqual; });
function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js ***!
  \************************************************************************/
/*! exports provided: useIsomorphicLayoutEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIsomorphicLayoutEffect", function() { return useIsomorphicLayoutEffect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
// subscription callback always has the selector from the latest render commit
// available, otherwise a store update may happen between render and the effect,
// which may cause missed updates; we also must ensure the store subscription
// is created synchronously, otherwise a store update may occur before the
// subscription is created and an inconsistent state may be observed

var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useEffect"];

/***/ }),

/***/ "./node_modules/react-redux/es/utils/verifyPlainObject.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/verifyPlainObject.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return verifyPlainObject; });
/* harmony import */ var _isPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPlainObject */ "./node_modules/react-redux/es/utils/isPlainObject.js");
/* harmony import */ var _warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warning */ "./node_modules/react-redux/es/utils/warning.js");


function verifyPlainObject(value, displayName, methodName) {
  if (!Object(_isPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    Object(_warning__WEBPACK_IMPORTED_MODULE_1__["default"])(methodName + "() in " + displayName + " must return a plain object. Instead received " + value + ".");
  }
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/warning.js":
/*!******************************************************!*\
  !*** ./node_modules/react-redux/es/utils/warning.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return warning; });
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */

}

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_5030f387d328e4415785 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5030f387d328e4415785 */ "dll-reference dll_5030f387d328e4415785"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/redux-devtools-extension/index.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-devtools-extension/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var compose = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js").compose;

exports.__esModule = true;
exports.composeWithDevTools = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
    function() {
      if (arguments.length === 0) return undefined;
      if (typeof arguments[0] === 'object') return compose;
      return compose.apply(null, arguments);
    }
);

exports.devToolsEnhancer = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ ?
    window.__REDUX_DEVTOOLS_EXTENSION__ :
    function() { return function(noop) { return noop; } }
);


/***/ }),

/***/ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js ***!
  \***********************************************************************/
/*! exports provided: CANCEL, SAGA_LOCATION, buffers, detach, END, channel, eventChannel, isEnd, multicastChannel, runSaga, stdChannel, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/core */ "./node_modules/@redux-saga/core/dist/redux-saga-core.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CANCEL", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["CANCEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SAGA_LOCATION", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["SAGA_LOCATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buffers", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["buffers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detach", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["detach"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "END", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["END"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "channel", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["channel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventChannel", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["eventChannel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEnd", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["isEnd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "multicastChannel", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["multicastChannel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "runSaga", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["runSaga"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stdChannel", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["stdChannel"]; });






/* harmony default export */ __webpack_exports__["default"] = (_redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js ***!
  \**************************************************************************/
/*! exports provided: actionChannel, all, apply, call, cancel, cancelled, cps, delay, effectTypes, flush, fork, getContext, join, put, putResolve, race, select, setContext, spawn, take, takeMaybe, debounce, retry, takeEvery, takeLatest, takeLeading, throttle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/core/effects */ "./node_modules/@redux-saga/core/dist/redux-saga-effects.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actionChannel", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["actionChannel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "all", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["all"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["apply"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "call", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["call"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cancel", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["cancel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cancelled", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["cancelled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cps", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["cps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["delay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "effectTypes", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["effectTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["flush"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fork", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContext", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["getContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "join", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["join"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "put", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "putResolve", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["putResolve"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "race", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["race"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "select", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["select"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["setContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spawn", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["spawn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "take", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["take"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeMaybe", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeMaybe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["debounce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "retry", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["retry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeEvery", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeLatest", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeLeading", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLeading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["throttle"]; });




/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
/*! exports provided: __DO_NOT_USE__ActionTypes, applyMiddleware, bindActionCreators, combineReducers, compose, createStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE__ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return applyMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return bindActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! symbol-observable */ "./node_modules/symbol-observable/es/index.js");


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (true) {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (true) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (true) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }

  if (enumerableOnly) keys = keys.filter(function (sym) {
    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
  });
  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if ( true && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
}




/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/symbol-observable/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/symbol-observable/es/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ "./node_modules/symbol-observable/es/ponyfill.js");
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__["default"])(root);
/* harmony default export */ __webpack_exports__["default"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/symbol-observable/es/ponyfill.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./store.js");

var _jsxFileName = "E:\\MainProject\\frontend\\Next-app\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function App(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 10
    }
  }));
}

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = _store__WEBPACK_IMPORTED_MODULE_2__["wrapper"].withRedux(App));

var _c, _c2;

$RefreshReg$(_c, "App");
$RefreshReg$(_c2, "%default%");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./reducer.js":
/*!********************!*\
  !*** ./reducer.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./actions.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var initialState = {
  count: 0,
  error: false,
  lastUpdate: 0,
  light: false,
  placeholderData: null
};

function reducer(state, action) {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__["HYDRATE"]:
      {
        return _objectSpread(_objectSpread({}, state), action.payload);
      }

    case _actions__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].FAILURE:
      return _objectSpread(_objectSpread({}, state), {
        error: action.error
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].INCREMENT:
      return _objectSpread(_objectSpread({}, state), {
        count: state.count + 1
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].DECREMENT:
      return _objectSpread(_objectSpread({}, state), {
        count: state.count - 1
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].RESET:
      return _objectSpread(_objectSpread({}, state), {
        count: initialState.count
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].LOAD_DATA_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        placeholderData: action.data
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].TICK_CLOCK:
      return _objectSpread(_objectSpread({}, state), {
        lastUpdate: action.ts,
        light: !!action.light
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./saga.js":
/*!*****************!*\
  !*** ./saga.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./actions.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(runClockSaga),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadDataSaga),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);




function runClockSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function runClockSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["take"])(_actions__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].START_CLOCK);

        case 2:
          if (false) {}

          _context.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["tickClock"])(false));

        case 5:
          _context.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

        case 7:
          _context.next = 2;
          break;

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function loadDataSaga() {
  var res, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadDataSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return fetch('https://jsonplaceholder.typicode.com/users');

        case 3:
          res = _context2.sent;
          _context2.next = 6;
          return res.json();

        case 6:
          data = _context2.sent;
          _context2.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["loadDataSuccess"])(data));

        case 9:
          _context2.next = 15;
          break;

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["failure"])(_context2.t0));

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 11]]);
}

function rootSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(runClockSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].LOAD_DATA, loadDataSaga)]);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}

/* harmony default export */ __webpack_exports__["default"] = (rootSaga);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: makeStore, wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeStore", function() { return makeStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducer */ "./reducer.js");
/* harmony import */ var _saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./saga */ "./saga.js");







var bindMiddleware = function bindMiddleware(middleware) {
  if (true) {
    var _require = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js"),
        composeWithDevTools = _require.composeWithDevTools;

    return composeWithDevTools(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"].apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(middleware)));
  }

  return redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"].apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(middleware));
};

var makeStore = function makeStore(context) {
  var sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_2__["default"])();
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducer__WEBPACK_IMPORTED_MODULE_4__["default"], bindMiddleware([sagaMiddleware]));
  store.sagaTask = sagaMiddleware.run(_saga__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
};
var wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__["createWrapper"])(makeStore, {
  debug: true
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 0:
/*!*******************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js ./node_modules/next/dist/client/router.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!./");
module.exports = __webpack_require__(/*! E:\MainProject\frontend\Next-app\node_modules\next\dist\client\router.js */"./node_modules/next/dist/client/router.js");


/***/ }),

/***/ "dll-reference dll_5030f387d328e4415785":
/*!*******************************************!*\
  !*** external "dll_5030f387d328e4415785" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_5030f387d328e4415785;

/***/ })

},[[0,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0ByZWR1eC1zYWdhL2NvcmUvZGlzdC9pby02ZGUxNTZmMy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHJlZHV4LXNhZ2EvY29yZS9kaXN0L3JlZHV4LXNhZ2EtY29yZS5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0ByZWR1eC1zYWdhL2NvcmUvZGlzdC9yZWR1eC1zYWdhLWVmZmVjdHMuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcmVkdXgtc2FnYS9kZWZlcnJlZC9kaXN0L3JlZHV4LXNhZ2EtZGVmZXJyZWQuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcmVkdXgtc2FnYS9kZWxheS1wL2Rpc3QvcmVkdXgtc2FnYS1kZWxheS1wLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHJlZHV4LXNhZ2EvaXMvZGlzdC9yZWR1eC1zYWdhLWlzLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHJlZHV4LXNhZ2Evc3ltYm9scy9kaXN0L3JlZHV4LXNhZ2Etc3ltYm9scy5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzL2Rpc3QvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MuY2pzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uYXRpdmUtdXJsL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQtcmVkdXgtd3JhcHBlci9lczYvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvcG9seWZpbGxzL29iamVjdC1hc3NpZ24uanMgZnJvbSBkbGwtcmVmZXJlbmNlIGRsbF81MDMwZjM4N2QzMjhlNDQxNTc4NSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jb25zdHJ1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSBkbGxfNTAzMGYzODdkMzI4ZTQ0MTU3ODUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgZGxsXzUwMzBmMzg3ZDMyOGU0NDE1Nzg1Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9xdWVyeXN0cmluZy1lczMvZGVjb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9xdWVyeXN0cmluZy1lczMvZW5jb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9xdWVyeXN0cmluZy1lczMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIGRsbF81MDMwZjM4N2QzMjhlNDQxNTc4NSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29tcG9uZW50cy9Db250ZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb21wb25lbnRzL1Byb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb21wb25lbnRzL2Nvbm5lY3RBZHZhbmNlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29ubmVjdC9jb25uZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb25uZWN0L21hcERpc3BhdGNoVG9Qcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29ubmVjdC9tYXBTdGF0ZVRvUHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2Nvbm5lY3QvbWVyZ2VQcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29ubmVjdC9zZWxlY3RvckZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2Nvbm5lY3QvdmVyaWZ5U3Vic2VsZWN0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb25uZWN0L3dyYXBNYXBUb1Byb3BzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9ob29rcy91c2VEaXNwYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvaG9va3MvdXNlUmVkdXhDb250ZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9ob29rcy91c2VTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvaG9va3MvdXNlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy91dGlscy9TdWJzY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL3V0aWxzL2JhdGNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy91dGlscy9pc1BsYWluT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy91dGlscy9yZWFjdEJhdGNoZWRVcGRhdGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy91dGlscy9zaGFsbG93RXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL3V0aWxzL3VzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL3V0aWxzL3ZlcmlmeVBsYWluT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy91dGlscy93YXJuaW5nLmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIGRsbF81MDMwZjM4N2QzMjhlNDQxNTc4NSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWR1eC1zYWdhL2Rpc3QvcmVkdXgtc2FnYS1jb3JlLW5wbS1wcm94eS5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZHV4LXNhZ2EvZGlzdC9yZWR1eC1zYWdhLWVmZmVjdHMtbnBtLXByb3h5LmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvcmVkdXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ltYm9sLW9ic2VydmFibGUvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N5bWJvbC1vYnNlcnZhYmxlL2VzL3BvbnlmaWxsLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2hhcm1vbnktbW9kdWxlLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NhZ2EuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGxsXzUwMzBmMzg3ZDMyOGU0NDE1Nzg1XCIiXSwibmFtZXMiOlsiYWN0aW9uVHlwZXMiLCJGQUlMVVJFIiwiSU5DUkVNRU5UIiwiREVDUkVNRU5UIiwiUkVTRVQiLCJMT0FEX0RBVEEiLCJMT0FEX0RBVEFfU1VDQ0VTUyIsIlNUQVJUX0NMT0NLIiwiVElDS19DTE9DSyIsIkhZRFJBVEUiLCJmYWlsdXJlIiwiZXJyb3IiLCJ0eXBlIiwiaW5jcmVtZW50IiwiZGVjcmVtZW50IiwicmVzZXQiLCJsb2FkRGF0YSIsImxvYWREYXRhU3VjY2VzcyIsImRhdGEiLCJzdGFydENsb2NrIiwidGlja0Nsb2NrIiwiaXNTZXJ2ZXIiLCJsaWdodCIsInRzIiwiRGF0ZSIsIm5vdyIsInNpbmdsZXRvblJvdXRlciIsInJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJjYiIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIk9iamVjdCIsImdldCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnQiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsImNvbnNvbGUiLCJlcnIiLCJtZXNzYWdlIiwiUmVhY3QiLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJwcm9jZXNzIiwicGF0aCIsInByZXBhcmVSb3V0ZSIsInRvUm91dGUiLCJhdHRlbXB0cyIsImlzU2VydmVyUmVuZGVyIiwicGF0aG5hbWUiLCJhZGRCYXNlUGF0aCIsIl9fTkVYVF9EQVRBX18iLCJidWlsZElkIiwiZGVsQmFzZVBhdGgiLCJxdWVyeSIsImNyZWRlbnRpYWxzIiwicmVzIiwiZ2V0UmVzcG9uc2UiLCJjb25zdHJ1Y3RvciIsInJvdXRlIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJlIiwiUHJvbWlzZSIsImZldGNoTmV4dERhdGEiLCJDb21wb25lbnQiLCJwcm9wcyIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiYXMiLCJ3aW5kb3ciLCJtb2QiLCJuZXdEYXRhIiwicmVsb2FkIiwib3B0aW9ucyIsImNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJ1cmwiLCJyZXNvbHZlIiwibWV0aG9kIiwic2hhbGxvdyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwibWlzc2luZ1BhcmFtcyIsInBhcmFtIiwicmVqZWN0IiwiYXNQYXRobmFtZSIsInJvdXRlSW5mbyIsImFwcENvbXAiLCJjaGFuZ2VTdGF0ZSIsImdldFJvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsImhhbmRsZUVycm9yIiwicGFnZSIsImdpcEVyciIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJzZXQiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwiZG9jdW1lbnQiLCJuYW1lRWwiLCJ1cmxJc05ldyIsImNhbmNlbGxlZCIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImZuIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInVwZGF0ZSIsIlRFU1RfUk9VVEUiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInBhcmFtcyIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJlbnRyeSIsInN0ciIsImVzY2FwZWRSb3V0ZSIsImVzY2FwZVJlZ2V4Iiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsImlzT3B0aW9uYWwiLCIkMSIsImlzQ2F0Y2hBbGwiLCJwb3MiLCJyZXBlYXQiLCJuYW1lZFJlZ2V4IiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJ1c2VkIiwicmVzdWx0IiwicHJvdG9jb2wiLCJob3N0bmFtZSIsInBvcnQiLCJvcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsImhyZWYiLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJwYWdlUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwia2V5IiwiU1AiLCJ3cmFwcGVyIiwid2l0aFJlZHV4IiwiaW5pdGlhbFN0YXRlIiwiY291bnQiLCJsYXN0VXBkYXRlIiwicGxhY2Vob2xkZXJEYXRhIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInJ1bkNsb2NrU2FnYSIsImxvYWREYXRhU2FnYSIsInJvb3RTYWdhIiwidGFrZSIsInB1dCIsImRlbGF5IiwiZmV0Y2giLCJqc29uIiwiY2FsbCIsInRha2VMYXRlc3QiLCJiaW5kTWlkZGxld2FyZSIsIm1pZGRsZXdhcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwibWFrZVN0b3JlIiwiY29udGV4dCIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwicm9vdFJlZHVjZXIiLCJzYWdhVGFzayIsInJ1biIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTUEsV0FBVyxHQUFHO0FBQ3pCQyxTQUFPLEVBQUUsU0FEZ0I7QUFFekJDLFdBQVMsRUFBRSxXQUZjO0FBR3pCQyxXQUFTLEVBQUUsV0FIYztBQUl6QkMsT0FBSyxFQUFFLE9BSmtCO0FBS3pCQyxXQUFTLEVBQUUsV0FMYztBQU16QkMsbUJBQWlCLEVBQUUsbUJBTk07QUFPekJDLGFBQVcsRUFBRSxhQVBZO0FBUXpCQyxZQUFVLEVBQUUsWUFSYTtBQVN6QkMsU0FBTyxFQUFFO0FBVGdCLENBQXBCO0FBWUEsU0FBU0MsT0FBVCxDQUFpQkMsS0FBakIsRUFBd0I7QUFDN0IsU0FBTztBQUNMQyxRQUFJLEVBQUVaLFdBQVcsQ0FBQ0MsT0FEYjtBQUVMVSxTQUFLLEVBQUxBO0FBRkssR0FBUDtBQUlEO0FBRU0sU0FBU0UsU0FBVCxHQUFxQjtBQUMxQixTQUFPO0FBQUVELFFBQUksRUFBRVosV0FBVyxDQUFDRTtBQUFwQixHQUFQO0FBQ0Q7QUFFTSxTQUFTWSxTQUFULEdBQXFCO0FBQzFCLFNBQU87QUFBRUYsUUFBSSxFQUFFWixXQUFXLENBQUNHO0FBQXBCLEdBQVA7QUFDRDtBQUVNLFNBQVNZLEtBQVQsR0FBaUI7QUFDdEIsU0FBTztBQUFFSCxRQUFJLEVBQUVaLFdBQVcsQ0FBQ0k7QUFBcEIsR0FBUDtBQUNEO0FBRU0sU0FBU1ksUUFBVCxHQUFvQjtBQUN6QixTQUFPO0FBQUVKLFFBQUksRUFBRVosV0FBVyxDQUFDSztBQUFw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O0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxVQUFVLEtBQXFDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNCQUFzQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsSUFBcUM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsMkJBQTJCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQyw0RkFBNEYsU0FBTTtBQUM3STtBQUNBOztBQUVBLG1CQUFtQixnQ0FBZ0M7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLGdDQUFnQztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM5a0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLElBQXFDO0FBQ3pDLGdCQUFnQixtQkFBTyxDQUFDLGtEQUFVOztBQUVsQztBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbUJBQU8sQ0FBQyx1RkFBMkI7QUFDdEQsQ0FBQyxNQUFNLEVBSU47Ozs7Ozs7Ozs7OztBQ2xCRCx3TDs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZUFBZTtBQUNoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BGYTs7QUFFYixpQ0FBaUMsbUJBQU8sQ0FBQywwREFBVTtBQUNuRCxxQ0FBcUMsbUJBQU8sQ0FBQywwREFBVTs7Ozs7Ozs7Ozs7O0FDSHZELG9LOzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOzs7O0FBSWIsSUFBSSxJQUFxQztBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRTtBQUMxRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDs7QUFFakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUNwTGE7O0FBRWIsSUFBSSxLQUFxQyxFQUFFLEVBRTFDO0FBQ0QsbUJBQW1CLG1CQUFPLENBQUMsMEZBQStCO0FBQzFEOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQTtBQUFBO0FBQUE7QUFBMEI7QUFDbkI7QUFDUDtBQUNBLDRDQUFLOztBQUVMLElBQUksSUFBcUM7QUFDekM7QUFDQTs7QUFFZSxnRkFBaUIsRTs7Ozs7Ozs7Ozs7O0FDVGhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtEO0FBQ2Y7QUFDVztBQUNHOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxREFBTztBQUM1QiwyQkFBMkIsMkRBQVk7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxzQkFBc0IscURBQU87QUFDN0I7QUFDQSxHQUFHO0FBQ0gsRUFBRSx1REFBUztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILDJCQUEyQiwwREFBaUI7QUFDNUMsU0FBUyw0Q0FBSztBQUNkO0FBQ0EsR0FBRztBQUNIOztBQUVBLElBQUksSUFBcUM7QUFDekM7QUFDQSxXQUFXLGlEQUFTO0FBQ3BCLGlCQUFpQixpREFBUztBQUMxQixnQkFBZ0IsaURBQVM7QUFDekIsZ0JBQWdCLGlEQUFTO0FBQ3pCLEtBQUs7QUFDTCxhQUFhLGlEQUFTO0FBQ3RCLGNBQWMsaURBQVM7QUFDdkI7QUFDQTs7QUFFZSx1RUFBUSxFOzs7Ozs7Ozs7Ozs7QUNuRHZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBEO0FBQzBDO0FBQ2pEO0FBQ29CO0FBQ047QUFDaEI7QUFDOEI7QUFDakM7O0FBRTlDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsa0dBQXlCO0FBQzNCO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0M7O0FBRXhDO0FBQ0EsNkJBQTZCOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1Qzs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLElBQUk7OztBQUdKO0FBQ0EsOEJBQThCO0FBQzlCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsMERBQWlCO0FBQzVELHVCQUF1Qix1R0FBNkI7O0FBRXBELE1BQU0sSUFBcUM7QUFDM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxUUFBcVEsVUFBVSw4QkFBOEIsVUFBVSwwQ0FBMEMsb0JBQW9COztBQUVyWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSxLQUFxQyxLQUFLLG1FQUFrQjtBQUNwRTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUNBQWlDLGtGQUFRLEdBQUc7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7QUFHQSxpQ0FBaUMsNkNBQU87QUFDeEM7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixxREFBTztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix1R0FBNkI7O0FBRXhEO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIscURBQU87QUFDaEM7QUFDQTtBQUNBLHdEQUF3RCxrRUFBaUIsQ0FBQyw0Q0FBSztBQUMvRSxPQUFPLDJCQUEyQjs7QUFFbEMseUJBQXlCLHdEQUFVLGVBQWU7QUFDbEQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFVBQVUsS0FBcUM7QUFDL0M7QUFDQSxPQUFPOzs7QUFHUDtBQUNBLCtCQUErQixxREFBTztBQUN0QztBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQLHNCQUFzQixxREFBTztBQUM3QixvRUFBb0U7QUFDcEU7O0FBRUEsK0JBQStCLDJEQUFZLGtFQUFrRTtBQUM3RztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLDBDQUEwQyxvQkFBb0Isb0JBQW9CO0FBQ2xGOzs7QUFHQSxtQ0FBbUMscURBQU87QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7O0FBR0EsZUFBZSxrRkFBUSxHQUFHO0FBQzFCO0FBQ0EsU0FBUztBQUNULE9BQU8sdURBQXVEO0FBQzlEOztBQUVBLHdCQUF3Qix3REFBVTtBQUNsQztBQUNBO0FBQ0Esd0RBQXdEOzs7QUFHeEQ7QUFDQTtBQUNBLE9BQU87OztBQUdQLDJCQUEyQixvREFBTTtBQUNqQyw2QkFBNkIsb0RBQU07QUFDbkMsc0NBQXNDLG9EQUFNO0FBQzVDLDhCQUE4QixvREFBTTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLE9BQU8sb0RBQW9EO0FBQzNEO0FBQ0E7O0FBRUEsaU1BQWlNOztBQUVqTSwwU0FBMFM7QUFDMVM7O0FBRUEscUNBQXFDLHFEQUFPO0FBQzVDLGVBQWUsNENBQUssaUNBQWlDLGtGQUFRLEdBQUc7QUFDaEU7QUFDQSxTQUFTO0FBQ1QsT0FBTyxzREFBc0Q7QUFDN0Q7O0FBRUEsMEJBQTBCLHFEQUFPO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDRDQUFLO0FBQ3RCO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSzs7O0FBR0wseUJBQXlCLDRDQUFLO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsNENBQUs7QUFDM0IsZUFBZSw0Q0FBSyx3QkFBd0Isa0ZBQVEsR0FBRztBQUN2RDtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBLGFBQWEsOERBQVk7QUFDekI7O0FBRUEsV0FBVyw4REFBWTtBQUN2QjtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2hYQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwRDtBQUMwQztBQUN4QztBQUNYO0FBQ3FCO0FBQ047QUFDVjtBQUNDO0FBQ3ZEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsUUFBUTtBQUM1QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDs7O0FBR087QUFDUCxrQ0FBa0M7QUFDbEM7QUFDQSxnREFBZ0QsbUVBQWU7QUFDL0Q7QUFDQSxvRUFBb0Usd0RBQStCO0FBQ25HO0FBQ0EsdUVBQXVFLDJEQUFrQztBQUN6RztBQUNBLCtEQUErRCxtREFBMEI7QUFDekY7QUFDQSwwREFBMEQsd0RBQXNCOztBQUVoRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsMkRBQVk7QUFDMUU7QUFDQSxnRUFBZ0UsMkRBQVk7QUFDNUU7QUFDQSxpRUFBaUUsMkRBQVk7QUFDN0UsdUJBQXVCLHVHQUE2Qjs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGtGQUFRO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBR0EsMkZBQWUsRTs7Ozs7Ozs7Ozs7O0FDbkdmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyQztBQUNtQztBQUN2RTtBQUNQLG9EQUFvRCwwRUFBa0I7QUFDdEU7QUFDTztBQUNQLCtCQUErQiw4RUFBc0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ087QUFDUCx3RUFBd0UsOEVBQXNCO0FBQzlGLFdBQVcsZ0VBQWtCO0FBQzdCLEdBQUc7QUFDSDtBQUNlLGtLQUFtRyxFOzs7Ozs7Ozs7Ozs7QUNqQmxIO0FBQUE7QUFBQTtBQUFBO0FBQThFO0FBQ3ZFO0FBQ1AsaURBQWlELDBFQUFrQjtBQUNuRTtBQUNPO0FBQ1AsNEJBQTRCLDhFQUFzQjtBQUNsRDtBQUNBLEdBQUc7QUFDSDtBQUNlLDRIQUE2RCxFOzs7Ozs7Ozs7Ozs7QUNUNUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEQ7QUFDQztBQUNwRDtBQUNQLFNBQVMsa0ZBQVEsR0FBRyxjQUFjLGdCQUFnQjtBQUNsRDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxZQUFZLElBQXFDLEVBQUUsd0VBQWlCO0FBQ3BFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ2Usa0hBQW1ELEU7Ozs7Ozs7Ozs7OztBQ25DbEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9HO0FBQzlDO0FBQy9DO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsdUdBQTZCOztBQUU3QztBQUNBO0FBQ0E7O0FBRUEsTUFBTSxJQUFxQztBQUMzQyxJQUFJLG1FQUFrQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDdEZBO0FBQUE7QUFBQTtBQUF1Qzs7QUFFdkM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsTUFBTSw4REFBTztBQUNiO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJEO0FBQ3BEO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNOzs7QUFHTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVUsSUFBcUMsRUFBRSx3RUFBaUI7QUFDbEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDL0RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEQ7QUFDZ0I7QUFDMUU7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCLGFBQWEsU0FBUztBQUN0Qjs7QUFFTztBQUNQO0FBQ0EsY0FBYyxxRUFBaUI7QUFDL0I7O0FBRUEsNkJBQTZCLHFFQUFpQixHQUFHLGtEQUFlLEdBQUcsaUVBQWU7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsY0FBYztBQUNoQyxXQUFXLGNBQWM7QUFDekI7QUFDQSxxQ0FBcUMsUUFBUTtBQUM3QztBQUNBLHlEQUF5RCwyQkFBMkI7QUFDcEY7QUFDQTtBQUNBLGdCQUFnQixNQUFNO0FBQ3RCLDBCQUEwQixnQkFBZ0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBLHFCOzs7Ozs7Ozs7Ozs7QUM1Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtQztBQUN1QjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsSUFBSTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsa0JBQWtCO0FBQzdCO0FBQ0EscUNBQXFDLFFBQVE7QUFDN0MsWUFBWSxRQUFRO0FBQ3BCLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTs7QUFFTztBQUNQLHFCQUFxQix3REFBVSxDQUFDLHFFQUFpQjs7QUFFakQsTUFBTSxLQUFxQztBQUMzQyw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUMzQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdFO0FBQ2M7QUFDN0I7QUFDOEI7QUFDckI7O0FBRTFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQix3REFBVTtBQUM5QjtBQUNBLEdBQUc7QUFDSDs7QUFFQSxxQkFBcUIscURBQU87QUFDNUIsZUFBZSwyREFBWTtBQUMzQixHQUFHO0FBQ0gsd0NBQXdDLG9EQUFNO0FBQzlDLHVCQUF1QixvREFBTTtBQUM3Qiw0QkFBNEIsb0RBQU07QUFDbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRSxrR0FBeUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUUsa0dBQXlCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQjtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsY0FBYztBQUN6QixhQUFhLFNBQVM7QUFDdEI7OztBQUdPO0FBQ1A7QUFDQSxjQUFjLHFFQUFpQjtBQUMvQjs7QUFFQSxvQ0FBb0MscUVBQWlCLEdBQUcsZ0VBQXNCO0FBQzlFLFdBQVcsd0RBQVU7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLEtBQXFDO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsV0FBVyxVQUFVO0FBQ3JCO0FBQ0EsYUFBYSxJQUFJO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixRQUFRO0FBQzFCO0FBQ0E7O0FBRU87QUFDUDtBQUNBLHFCOzs7Ozs7Ozs7Ozs7QUNuSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUM7QUFDdUI7QUFDb0I7QUFDOUU7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCLGFBQWEsU0FBUztBQUN0Qjs7QUFFTztBQUNQO0FBQ0EsY0FBYyxxRUFBaUI7QUFDL0I7O0FBRUEsb0NBQW9DLHFFQUFpQixHQUFHLGdFQUFzQjtBQUM5RSxXQUFXLHdEQUFVO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsSUFBSTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsV0FBVztBQUN0QjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7O0FBRU87QUFDUDtBQUNBLGtCOzs7Ozs7Ozs7Ozs7QUMzQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2QztBQUNjO0FBQ0Y7QUFDakI7QUFDOEI7QUFDQTtBQUNUO0FBQ3BCO0FBQ3NDO0FBQy9CO0FBQ2hELDZEQUFRLENBQUMsa0ZBQUs7Ozs7Ozs7Ozs7Ozs7QUNWZDtBQUFBO0FBQUE7QUFBbUM7QUFDbkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjLHVEQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7Ozs7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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNB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LENBQTFCO0FBQ0Q7O0FBQ0QsU0FBT0UscURBQWUsTUFBZixzR0FBbUJGLFVBQW5CLEVBQVA7QUFDRCxDQU5EOztBQVFPLElBQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLE9BQUQsRUFBYTtBQUNwQyxNQUFNQyxjQUFjLEdBQUdDLDBEQUFvQixFQUEzQztBQUNBLE1BQU1DLEtBQUssR0FBR0MseURBQVcsQ0FBQ0MsZ0RBQUQsRUFBY1YsY0FBYyxDQUFDLENBQUNNLGNBQUQsQ0FBRCxDQUE1QixDQUF6QjtBQUVBRSxPQUFLLENBQUNHLFFBQU4sR0FBaUJMLGNBQWMsQ0FBQ00sR0FBZixDQUFtQnBCLDZDQUFuQixDQUFqQjtBQUVBLFNBQU9nQixLQUFQO0FBQ0QsQ0FQTTtBQVNBLElBQU01QixPQUFPLEdBQUdpQyx3RUFBYSxDQUFDVCxTQUFELEVBQVk7QUFBRVUsT0FBSyxFQUFFO0FBQVQsQ0FBWixDQUE3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJQLDBDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGFjdGlvblR5cGVzID0ge1xuICBGQUlMVVJFOiAnRkFJTFVSRScsXG4gIElOQ1JFTUVOVDogJ0lOQ1JFTUVOVCcsXG4gIERFQ1JFTUVOVDogJ0RFQ1JFTUVOVCcsXG4gIFJFU0VUOiAnUkVTRVQnLFxuICBMT0FEX0RBVEE6ICdMT0FEX0RBVEEnLFxuICBMT0FEX0RBVEFfU1VDQ0VTUzogJ0xPQURfREFUQV9TVUNDRVNTJyxcbiAgU1RBUlRfQ0xPQ0s6ICdTVEFSVF9DTE9DSycsXG4gIFRJQ0tfQ0xPQ0s6ICdUSUNLX0NMT0NLJyxcbiAgSFlEUkFURTogJ0hZRFJBVEUnLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmFpbHVyZShlcnJvcikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IGFjdGlvblR5cGVzLkZBSUxVUkUsXG4gICAgZXJyb3IsXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluY3JlbWVudCgpIHtcbiAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuSU5DUkVNRU5UIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlY3JlbWVudCgpIHtcbiAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuREVDUkVNRU5UIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0KCkge1xuICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5SRVNFVCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRGF0YSgpIHtcbiAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuTE9BRF9EQVRBIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWREYXRhU3VjY2VzcyhkYXRhKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogYWN0aW9uVHlwZXMuTE9BRF9EQVRBX1NVQ0NFU1MsXG4gICAgZGF0YSxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRDbG9jaygpIHtcbiAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuU1RBUlRfQ0xPQ0sgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGlja0Nsb2NrKGlzU2VydmVyKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogYWN0aW9uVHlwZXMuVElDS19DTE9DSyxcbiAgICBsaWdodDogIWlzU2VydmVyLFxuICAgIHRzOiBEYXRlLm5vdygpLFxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiaW1wb3J0IGFycmF5V2l0aG91dEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aG91dEhvbGVzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheVwiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCI7XG5pbXBvcnQgbm9uSXRlcmFibGVTcHJlYWQgZnJvbSBcIi4vbm9uSXRlcmFibGVTcHJlYWRcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXlcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsImltcG9ydCB7IFRBU0tfQ0FOQ0VMLCBURVJNSU5BVEUsIFNBR0FfTE9DQVRJT04sIFNBR0FfQUNUSU9OLCBJTywgU0VMRl9DQU5DRUxMQVRJT04gfSBmcm9tICdAcmVkdXgtc2FnYS9zeW1ib2xzJztcbmltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCB7IGFycmF5LCBub3RVbmRlZiwgcGF0dGVybiwgbXVsdGljYXN0LCBjaGFubmVsLCB1bmRlZiwgZWZmZWN0LCB0YXNrLCBmdW5jLCBidWZmZXIsIHN0cmluZywgb2JqZWN0IH0gZnJvbSAnQHJlZHV4LXNhZ2EvaXMnO1xuaW1wb3J0IGRlbGF5UCBmcm9tICdAcmVkdXgtc2FnYS9kZWxheS1wJztcblxudmFyIGtvbnN0ID0gZnVuY3Rpb24ga29uc3Qodikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB2O1xuICB9O1xufTtcbnZhciBrVHJ1ZSA9XG4vKiNfX1BVUkVfXyovXG5rb25zdCh0cnVlKTtcblxudmFyIG5vb3AgPSBmdW5jdGlvbiBub29wKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBQcm94eSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgbm9vcCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgbmV3IFByb3h5KG5vb3AsIHtcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCgpIHtcbiAgICAgIHRocm93IGludGVybmFsRXJyKCdUaGVyZSB3YXMgYW4gYXR0ZW1wdCB0byBhc3NpZ24gYSBwcm9wZXJ0eSB0byBpbnRlcm5hbCBgbm9vcGAgZnVuY3Rpb24uJyk7XG4gICAgfVxuICB9KTtcbn1cbnZhciBpZGVudGl0eSA9IGZ1bmN0aW9uIGlkZW50aXR5KHYpIHtcbiAgcmV0dXJuIHY7XG59O1xudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbic7XG52YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9IGhhc1N5bWJvbCAmJiBTeW1ib2wuYXN5bmNJdGVyYXRvciA/IFN5bWJvbC5hc3luY0l0ZXJhdG9yIDogJ0BAYXN5bmNJdGVyYXRvcic7XG5mdW5jdGlvbiBjaGVjayh2YWx1ZSwgcHJlZGljYXRlLCBlcnJvcikge1xuICBpZiAoIXByZWRpY2F0ZSh2YWx1ZSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICB9XG59XG52YXIgYXNzaWduV2l0aFN5bWJvbHMgPSBmdW5jdGlvbiBhc3NpZ25XaXRoU3ltYm9scyh0YXJnZXQsIHNvdXJjZSkge1xuICBfZXh0ZW5kcyh0YXJnZXQsIHNvdXJjZSk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAocykge1xuICAgICAgdGFyZ2V0W3NdID0gc291cmNlW3NdO1xuICAgIH0pO1xuICB9XG59O1xudmFyIGZsYXRNYXAgPSBmdW5jdGlvbiBmbGF0TWFwKG1hcHBlciwgYXJyKSB7XG4gIHZhciBfcmVmO1xuXG4gIHJldHVybiAoX3JlZiA9IFtdKS5jb25jYXQuYXBwbHkoX3JlZiwgYXJyLm1hcChtYXBwZXIpKTtcbn07XG5mdW5jdGlvbiByZW1vdmUoYXJyYXksIGl0ZW0pIHtcbiAgdmFyIGluZGV4ID0gYXJyYXkuaW5kZXhPZihpdGVtKTtcblxuICBpZiAoaW5kZXggPj0gMCkge1xuICAgIGFycmF5LnNwbGljZShpbmRleCwgMSk7XG4gIH1cbn1cbmZ1bmN0aW9uIG9uY2UoZm4pIHtcbiAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmIChjYWxsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjYWxsZWQgPSB0cnVlO1xuICAgIGZuKCk7XG4gIH07XG59XG5cbnZhciBrVGhyb3cgPSBmdW5jdGlvbiBrVGhyb3coZXJyKSB7XG4gIHRocm93IGVycjtcbn07XG5cbnZhciBrUmV0dXJuID0gZnVuY3Rpb24ga1JldHVybih2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICBkb25lOiB0cnVlXG4gIH07XG59O1xuXG5mdW5jdGlvbiBtYWtlSXRlcmF0b3IobmV4dCwgdGhybywgbmFtZSkge1xuICBpZiAodGhybyA9PT0gdm9pZCAwKSB7XG4gICAgdGhybyA9IGtUaHJvdztcbiAgfVxuXG4gIGlmIChuYW1lID09PSB2b2lkIDApIHtcbiAgICBuYW1lID0gJ2l0ZXJhdG9yJztcbiAgfVxuXG4gIHZhciBpdGVyYXRvciA9IHtcbiAgICBtZXRhOiB7XG4gICAgICBuYW1lOiBuYW1lXG4gICAgfSxcbiAgICBuZXh0OiBuZXh0LFxuICAgIHRocm93OiB0aHJvLFxuICAgIHJldHVybjoga1JldHVybixcbiAgICBpc1NhZ2FJdGVyYXRvcjogdHJ1ZVxuICB9O1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJykge1xuICAgIGl0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3I7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBpdGVyYXRvcjtcbn1cbmZ1bmN0aW9uIGxvZ0Vycm9yKGVycm9yLCBfcmVmMikge1xuICB2YXIgc2FnYVN0YWNrID0gX3JlZjIuc2FnYVN0YWNrO1xuXG4gIC8qZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSovXG4gIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICBjb25zb2xlLmVycm9yKHNhZ2FTdGFjayk7XG59XG52YXIgaW50ZXJuYWxFcnIgPSBmdW5jdGlvbiBpbnRlcm5hbEVycihlcnIpIHtcbiAgcmV0dXJuIG5ldyBFcnJvcihcIlxcbiAgcmVkdXgtc2FnYTogRXJyb3IgY2hlY2tpbmcgaG9va3MgZGV0ZWN0ZWQgYW4gaW5jb25zaXN0ZW50IHN0YXRlLiBUaGlzIGlzIGxpa2VseSBhIGJ1Z1xcbiAgaW4gcmVkdXgtc2FnYSBjb2RlIGFuZCBub3QgeW91cnMuIFRoYW5rcyBmb3IgcmVwb3J0aW5nIHRoaXMgaW4gdGhlIHByb2plY3QncyBnaXRodWIgcmVwby5cXG4gIEVycm9yOiBcIiArIGVyciArIFwiXFxuXCIpO1xufTtcbnZhciBjcmVhdGVTZXRDb250ZXh0V2FybmluZyA9IGZ1bmN0aW9uIGNyZWF0ZVNldENvbnRleHRXYXJuaW5nKGN0eCwgcHJvcHMpIHtcbiAgcmV0dXJuIChjdHggPyBjdHggKyAnLicgOiAnJykgKyBcInNldENvbnRleHQocHJvcHMpOiBhcmd1bWVudCBcIiArIHByb3BzICsgXCIgaXMgbm90IGEgcGxhaW4gb2JqZWN0XCI7XG59O1xudmFyIEZST1pFTl9BQ1RJT05fRVJST1IgPSBcIllvdSBjYW4ndCBwdXQgKGEuay5hLiBkaXNwYXRjaCBmcm9tIHNhZ2EpIGZyb3plbiBhY3Rpb25zLlxcbldlIGhhdmUgdG8gZGVmaW5lIGEgc3BlY2lhbCBub24tZW51bWVyYWJsZSBwcm9wZXJ0eSBvbiB0aG9zZSBhY3Rpb25zIGZvciBzY2hlZHVsaW5nIHB1cnBvc2VzLlxcbk90aGVyd2lzZSB5b3Ugd291bGRuJ3QgYmUgYWJsZSB0byBjb21tdW5pY2F0ZSBwcm9wZXJseSBiZXR3ZWVuIHNhZ2FzICYgb3RoZXIgc3Vic2NyaWJlcnMgKGFjdGlvbiBvcmRlcmluZyB3b3VsZCBiZWNvbWUgZmFyIGxlc3MgcHJlZGljdGFibGUpLlxcbklmIHlvdSBhcmUgdXNpbmcgcmVkdXggYW5kIHlvdSBjYXJlIGFib3V0IHRoaXMgYmVoYXZpb3VyIChmcm96ZW4gYWN0aW9ucyksXFxudGhlbiB5b3UgbWlnaHQgd2FudCB0byBzd2l0Y2ggdG8gZnJlZXppbmcgYWN0aW9ucyBpbiBhIG1pZGRsZXdhcmUgcmF0aGVyIHRoYW4gaW4gYWN0aW9uIGNyZWF0b3IuXFxuRXhhbXBsZSBpbXBsZW1lbnRhdGlvbjpcXG5cXG5jb25zdCBmcmVlemVBY3Rpb25zID0gc3RvcmUgPT4gbmV4dCA9PiBhY3Rpb24gPT4gbmV4dChPYmplY3QuZnJlZXplKGFjdGlvbikpXFxuXCI7IC8vIGNyZWF0ZXMgZW1wdHksIGJ1dCBub3QtaG9sZXkgYXJyYXlcblxudmFyIGNyZWF0ZUVtcHR5QXJyYXkgPSBmdW5jdGlvbiBjcmVhdGVFbXB0eUFycmF5KG4pIHtcbiAgcmV0dXJuIEFycmF5LmFwcGx5KG51bGwsIG5ldyBBcnJheShuKSk7XG59O1xudmFyIHdyYXBTYWdhRGlzcGF0Y2ggPSBmdW5jdGlvbiB3cmFwU2FnYURpc3BhdGNoKGRpc3BhdGNoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNoZWNrKGFjdGlvbiwgZnVuY3Rpb24gKGFjKSB7XG4gICAgICAgIHJldHVybiAhT2JqZWN0LmlzRnJvemVuKGFjKTtcbiAgICAgIH0sIEZST1pFTl9BQ1RJT05fRVJST1IpO1xuICAgIH1cblxuICAgIHJldHVybiBkaXNwYXRjaChPYmplY3QuZGVmaW5lUHJvcGVydHkoYWN0aW9uLCBTQUdBX0FDVElPTiwge1xuICAgICAgdmFsdWU6IHRydWVcbiAgICB9KSk7XG4gIH07XG59O1xudmFyIHNob3VsZFRlcm1pbmF0ZSA9IGZ1bmN0aW9uIHNob3VsZFRlcm1pbmF0ZShyZXMpIHtcbiAgcmV0dXJuIHJlcyA9PT0gVEVSTUlOQVRFO1xufTtcbnZhciBzaG91bGRDYW5jZWwgPSBmdW5jdGlvbiBzaG91bGRDYW5jZWwocmVzKSB7XG4gIHJldHVybiByZXMgPT09IFRBU0tfQ0FOQ0VMO1xufTtcbnZhciBzaG91bGRDb21wbGV0ZSA9IGZ1bmN0aW9uIHNob3VsZENvbXBsZXRlKHJlcykge1xuICByZXR1cm4gc2hvdWxkVGVybWluYXRlKHJlcykgfHwgc2hvdWxkQ2FuY2VsKHJlcyk7XG59O1xuZnVuY3Rpb24gY3JlYXRlQWxsU3R5bGVDaGlsZENhbGxiYWNrcyhzaGFwZSwgcGFyZW50Q2FsbGJhY2spIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhzaGFwZSk7XG4gIHZhciB0b3RhbENvdW50ID0ga2V5cy5sZW5ndGg7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjaGVjayh0b3RhbENvdW50LCBmdW5jdGlvbiAoYykge1xuICAgICAgcmV0dXJuIGMgPiAwO1xuICAgIH0sICdjcmVhdGVBbGxTdHlsZUNoaWxkQ2FsbGJhY2tzOiBnZXQgYW4gZW1wdHkgYXJyYXkgb3Igb2JqZWN0Jyk7XG4gIH1cblxuICB2YXIgY29tcGxldGVkQ291bnQgPSAwO1xuICB2YXIgY29tcGxldGVkO1xuICB2YXIgcmVzdWx0cyA9IGFycmF5KHNoYXBlKSA/IGNyZWF0ZUVtcHR5QXJyYXkodG90YWxDb3VudCkgOiB7fTtcbiAgdmFyIGNoaWxkQ2FsbGJhY2tzID0ge307XG5cbiAgZnVuY3Rpb24gY2hlY2tFbmQoKSB7XG4gICAgaWYgKGNvbXBsZXRlZENvdW50ID09PSB0b3RhbENvdW50KSB7XG4gICAgICBjb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgcGFyZW50Q2FsbGJhY2socmVzdWx0cyk7XG4gICAgfVxuICB9XG5cbiAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgY2hDYkF0S2V5ID0gZnVuY3Rpb24gY2hDYkF0S2V5KHJlcywgaXNFcnIpIHtcbiAgICAgIGlmIChjb21wbGV0ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNFcnIgfHwgc2hvdWxkQ29tcGxldGUocmVzKSkge1xuICAgICAgICBwYXJlbnRDYWxsYmFjay5jYW5jZWwoKTtcbiAgICAgICAgcGFyZW50Q2FsbGJhY2socmVzLCBpc0Vycik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRzW2tleV0gPSByZXM7XG4gICAgICAgIGNvbXBsZXRlZENvdW50Kys7XG4gICAgICAgIGNoZWNrRW5kKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNoQ2JBdEtleS5jYW5jZWwgPSBub29wO1xuICAgIGNoaWxkQ2FsbGJhY2tzW2tleV0gPSBjaENiQXRLZXk7XG4gIH0pO1xuXG4gIHBhcmVudENhbGxiYWNrLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWNvbXBsZXRlZCkge1xuICAgICAgY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiBjaGlsZENhbGxiYWNrc1trZXldLmNhbmNlbCgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBjaGlsZENhbGxiYWNrcztcbn1cbmZ1bmN0aW9uIGdldE1ldGFJbmZvKGZuKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogZm4ubmFtZSB8fCAnYW5vbnltb3VzJyxcbiAgICBsb2NhdGlvbjogZ2V0TG9jYXRpb24oZm4pXG4gIH07XG59XG5mdW5jdGlvbiBnZXRMb2NhdGlvbihpbnN0cnVtZW50ZWQpIHtcbiAgcmV0dXJuIGluc3RydW1lbnRlZFtTQUdBX0xPQ0FUSU9OXTtcbn1cblxudmFyIEJVRkZFUl9PVkVSRkxPVyA9IFwiQ2hhbm5lbCdzIEJ1ZmZlciBvdmVyZmxvdyFcIjtcbnZhciBPTl9PVkVSRkxPV19USFJPVyA9IDE7XG52YXIgT05fT1ZFUkZMT1dfRFJPUCA9IDI7XG52YXIgT05fT1ZFUkZMT1dfU0xJREUgPSAzO1xudmFyIE9OX09WRVJGTE9XX0VYUEFORCA9IDQ7XG52YXIgemVyb0J1ZmZlciA9IHtcbiAgaXNFbXB0eToga1RydWUsXG4gIHB1dDogbm9vcCxcbiAgdGFrZTogbm9vcFxufTtcblxuZnVuY3Rpb24gcmluZ0J1ZmZlcihsaW1pdCwgb3ZlcmZsb3dBY3Rpb24pIHtcbiAgaWYgKGxpbWl0ID09PSB2b2lkIDApIHtcbiAgICBsaW1pdCA9IDEwO1xuICB9XG5cbiAgdmFyIGFyciA9IG5ldyBBcnJheShsaW1pdCk7XG4gIHZhciBsZW5ndGggPSAwO1xuICB2YXIgcHVzaEluZGV4ID0gMDtcbiAgdmFyIHBvcEluZGV4ID0gMDtcblxuICB2YXIgcHVzaCA9IGZ1bmN0aW9uIHB1c2goaXQpIHtcbiAgICBhcnJbcHVzaEluZGV4XSA9IGl0O1xuICAgIHB1c2hJbmRleCA9IChwdXNoSW5kZXggKyAxKSAlIGxpbWl0O1xuICAgIGxlbmd0aCsrO1xuICB9O1xuXG4gIHZhciB0YWtlID0gZnVuY3Rpb24gdGFrZSgpIHtcbiAgICBpZiAobGVuZ3RoICE9IDApIHtcbiAgICAgIHZhciBpdCA9IGFycltwb3BJbmRleF07XG4gICAgICBhcnJbcG9wSW5kZXhdID0gbnVsbDtcbiAgICAgIGxlbmd0aC0tO1xuICAgICAgcG9wSW5kZXggPSAocG9wSW5kZXggKyAxKSAlIGxpbWl0O1xuICAgICAgcmV0dXJuIGl0O1xuICAgIH1cbiAgfTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICB2YXIgaXRlbXMgPSBbXTtcblxuICAgIHdoaWxlIChsZW5ndGgpIHtcbiAgICAgIGl0ZW1zLnB1c2godGFrZSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXRlbXM7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBpc0VtcHR5OiBmdW5jdGlvbiBpc0VtcHR5KCkge1xuICAgICAgcmV0dXJuIGxlbmd0aCA9PSAwO1xuICAgIH0sXG4gICAgcHV0OiBmdW5jdGlvbiBwdXQoaXQpIHtcbiAgICAgIGlmIChsZW5ndGggPCBsaW1pdCkge1xuICAgICAgICBwdXNoKGl0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBkb3VibGVkTGltaXQ7XG5cbiAgICAgICAgc3dpdGNoIChvdmVyZmxvd0FjdGlvbikge1xuICAgICAgICAgIGNhc2UgT05fT1ZFUkZMT1dfVEhST1c6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoQlVGRkVSX09WRVJGTE9XKTtcblxuICAgICAgICAgIGNhc2UgT05fT1ZFUkZMT1dfU0xJREU6XG4gICAgICAgICAgICBhcnJbcHVzaEluZGV4XSA9IGl0O1xuICAgICAgICAgICAgcHVzaEluZGV4ID0gKHB1c2hJbmRleCArIDEpICUgbGltaXQ7XG4gICAgICAgICAgICBwb3BJbmRleCA9IHB1c2hJbmRleDtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBPTl9PVkVSRkxPV19FWFBBTkQ6XG4gICAgICAgICAgICBkb3VibGVkTGltaXQgPSAyICogbGltaXQ7XG4gICAgICAgICAgICBhcnIgPSBmbHVzaCgpO1xuICAgICAgICAgICAgbGVuZ3RoID0gYXJyLmxlbmd0aDtcbiAgICAgICAgICAgIHB1c2hJbmRleCA9IGFyci5sZW5ndGg7XG4gICAgICAgICAgICBwb3BJbmRleCA9IDA7XG4gICAgICAgICAgICBhcnIubGVuZ3RoID0gZG91YmxlZExpbWl0O1xuICAgICAgICAgICAgbGltaXQgPSBkb3VibGVkTGltaXQ7XG4gICAgICAgICAgICBwdXNoKGl0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgZGVmYXVsdDogLy8gRFJPUFxuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHRha2U6IHRha2UsXG4gICAgZmx1c2g6IGZsdXNoXG4gIH07XG59XG5cbnZhciBub25lID0gZnVuY3Rpb24gbm9uZSgpIHtcbiAgcmV0dXJuIHplcm9CdWZmZXI7XG59O1xudmFyIGZpeGVkID0gZnVuY3Rpb24gZml4ZWQobGltaXQpIHtcbiAgcmV0dXJuIHJpbmdCdWZmZXIobGltaXQsIE9OX09WRVJGTE9XX1RIUk9XKTtcbn07XG52YXIgZHJvcHBpbmcgPSBmdW5jdGlvbiBkcm9wcGluZyhsaW1pdCkge1xuICByZXR1cm4gcmluZ0J1ZmZlcihsaW1pdCwgT05fT1ZFUkZMT1dfRFJPUCk7XG59O1xudmFyIHNsaWRpbmcgPSBmdW5jdGlvbiBzbGlkaW5nKGxpbWl0KSB7XG4gIHJldHVybiByaW5nQnVmZmVyKGxpbWl0LCBPTl9PVkVSRkxPV19TTElERSk7XG59O1xudmFyIGV4cGFuZGluZyA9IGZ1bmN0aW9uIGV4cGFuZGluZyhpbml0aWFsU2l6ZSkge1xuICByZXR1cm4gcmluZ0J1ZmZlcihpbml0aWFsU2l6ZSwgT05fT1ZFUkZMT1dfRVhQQU5EKTtcbn07XG5cbnZhciBidWZmZXJzID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICBfX3Byb3RvX186IG51bGwsXG4gIG5vbmU6IG5vbmUsXG4gIGZpeGVkOiBmaXhlZCxcbiAgZHJvcHBpbmc6IGRyb3BwaW5nLFxuICBzbGlkaW5nOiBzbGlkaW5nLFxuICBleHBhbmRpbmc6IGV4cGFuZGluZ1xufSk7XG5cbnZhciBUQUtFID0gJ1RBS0UnO1xudmFyIFBVVCA9ICdQVVQnO1xudmFyIEFMTCA9ICdBTEwnO1xudmFyIFJBQ0UgPSAnUkFDRSc7XG52YXIgQ0FMTCA9ICdDQUxMJztcbnZhciBDUFMgPSAnQ1BTJztcbnZhciBGT1JLID0gJ0ZPUksnO1xudmFyIEpPSU4gPSAnSk9JTic7XG52YXIgQ0FOQ0VMID0gJ0NBTkNFTCc7XG52YXIgU0VMRUNUID0gJ1NFTEVDVCc7XG52YXIgQUNUSU9OX0NIQU5ORUwgPSAnQUNUSU9OX0NIQU5ORUwnO1xudmFyIENBTkNFTExFRCA9ICdDQU5DRUxMRUQnO1xudmFyIEZMVVNIID0gJ0ZMVVNIJztcbnZhciBHRVRfQ09OVEVYVCA9ICdHRVRfQ09OVEVYVCc7XG52YXIgU0VUX0NPTlRFWFQgPSAnU0VUX0NPTlRFWFQnO1xuXG52YXIgZWZmZWN0VHlwZXMgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgVEFLRTogVEFLRSxcbiAgUFVUOiBQVVQsXG4gIEFMTDogQUxMLFxuICBSQUNFOiBSQUNFLFxuICBDQUxMOiBDQUxMLFxuICBDUFM6IENQUyxcbiAgRk9SSzogRk9SSyxcbiAgSk9JTjogSk9JTixcbiAgQ0FOQ0VMOiBDQU5DRUwsXG4gIFNFTEVDVDogU0VMRUNULFxuICBBQ1RJT05fQ0hBTk5FTDogQUNUSU9OX0NIQU5ORUwsXG4gIENBTkNFTExFRDogQ0FOQ0VMTEVELFxuICBGTFVTSDogRkxVU0gsXG4gIEdFVF9DT05URVhUOiBHRVRfQ09OVEVYVCxcbiAgU0VUX0NPTlRFWFQ6IFNFVF9DT05URVhUXG59KTtcblxudmFyIFRFU1RfSElOVCA9ICdcXG4oSElOVDogaWYgeW91IGFyZSBnZXR0aW5nIHRoZXNlIGVycm9ycyBpbiB0ZXN0cywgY29uc2lkZXIgdXNpbmcgY3JlYXRlTW9ja1Rhc2sgZnJvbSBAcmVkdXgtc2FnYS90ZXN0aW5nLXV0aWxzKSc7XG5cbnZhciBtYWtlRWZmZWN0ID0gZnVuY3Rpb24gbWFrZUVmZmVjdCh0eXBlLCBwYXlsb2FkKSB7XG4gIHZhciBfcmVmO1xuXG4gIHJldHVybiBfcmVmID0ge30sIF9yZWZbSU9dID0gdHJ1ZSwgX3JlZi5jb21iaW5hdG9yID0gZmFsc2UsIF9yZWYudHlwZSA9IHR5cGUsIF9yZWYucGF5bG9hZCA9IHBheWxvYWQsIF9yZWY7XG59O1xuXG52YXIgaXNGb3JrRWZmZWN0ID0gZnVuY3Rpb24gaXNGb3JrRWZmZWN0KGVmZikge1xuICByZXR1cm4gZWZmZWN0KGVmZikgJiYgZWZmLnR5cGUgPT09IEZPUks7XG59O1xuXG52YXIgZGV0YWNoID0gZnVuY3Rpb24gZGV0YWNoKGVmZikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNoZWNrKGVmZiwgaXNGb3JrRWZmZWN0LCAnZGV0YWNoKGVmZik6IGFyZ3VtZW50IG11c3QgYmUgYSBmb3JrIGVmZmVjdCcpO1xuICB9XG5cbiAgcmV0dXJuIG1ha2VFZmZlY3QoRk9SSywgX2V4dGVuZHMoe30sIGVmZi5wYXlsb2FkLCB7XG4gICAgZGV0YWNoZWQ6IHRydWVcbiAgfSkpO1xufTtcbmZ1bmN0aW9uIHRha2UocGF0dGVybk9yQ2hhbm5lbCwgbXVsdGljYXN0UGF0dGVybikge1xuICBpZiAocGF0dGVybk9yQ2hhbm5lbCA9PT0gdm9pZCAwKSB7XG4gICAgcGF0dGVybk9yQ2hhbm5lbCA9ICcqJztcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICBjaGVjayhhcmd1bWVudHNbMF0sIG5vdFVuZGVmLCAndGFrZShwYXR0ZXJuT3JDaGFubmVsKTogcGF0dGVybk9yQ2hhbm5lbCBpcyB1bmRlZmluZWQnKTtcbiAgfVxuXG4gIGlmIChwYXR0ZXJuKHBhdHRlcm5PckNoYW5uZWwpKSB7XG4gICAgcmV0dXJuIG1ha2VFZmZlY3QoVEFLRSwge1xuICAgICAgcGF0dGVybjogcGF0dGVybk9yQ2hhbm5lbFxuICAgIH0pO1xuICB9XG5cbiAgaWYgKG11bHRpY2FzdChwYXR0ZXJuT3JDaGFubmVsKSAmJiBub3RVbmRlZihtdWx0aWNhc3RQYXR0ZXJuKSAmJiBwYXR0ZXJuKG11bHRpY2FzdFBhdHRlcm4pKSB7XG4gICAgcmV0dXJuIG1ha2VFZmZlY3QoVEFLRSwge1xuICAgICAgY2hhbm5lbDogcGF0dGVybk9yQ2hhbm5lbCxcbiAgICAgIHBhdHRlcm46IG11bHRpY2FzdFBhdHRlcm5cbiAgICB9KTtcbiAgfVxuXG4gIGlmIChjaGFubmVsKHBhdHRlcm5PckNoYW5uZWwpKSB7XG4gICAgcmV0dXJuIG1ha2VFZmZlY3QoVEFLRSwge1xuICAgICAgY2hhbm5lbDogcGF0dGVybk9yQ2hhbm5lbFxuICAgIH0pO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0YWtlKHBhdHRlcm5PckNoYW5uZWwpOiBhcmd1bWVudCBcIiArIHBhdHRlcm5PckNoYW5uZWwgKyBcIiBpcyBub3QgdmFsaWQgY2hhbm5lbCBvciBhIHZhbGlkIHBhdHRlcm5cIik7XG4gIH1cbn1cbnZhciB0YWtlTWF5YmUgPSBmdW5jdGlvbiB0YWtlTWF5YmUoKSB7XG4gIHZhciBlZmYgPSB0YWtlLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgZWZmLnBheWxvYWQubWF5YmUgPSB0cnVlO1xuICByZXR1cm4gZWZmO1xufTtcbmZ1bmN0aW9uIHB1dChjaGFubmVsJDEsIGFjdGlvbikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgY2hlY2soY2hhbm5lbCQxLCBub3RVbmRlZiwgJ3B1dChjaGFubmVsLCBhY3Rpb24pOiBhcmd1bWVudCBjaGFubmVsIGlzIHVuZGVmaW5lZCcpO1xuICAgICAgY2hlY2soY2hhbm5lbCQxLCBjaGFubmVsLCBcInB1dChjaGFubmVsLCBhY3Rpb24pOiBhcmd1bWVudCBcIiArIGNoYW5uZWwkMSArIFwiIGlzIG5vdCBhIHZhbGlkIGNoYW5uZWxcIik7XG4gICAgICBjaGVjayhhY3Rpb24sIG5vdFVuZGVmLCAncHV0KGNoYW5uZWwsIGFjdGlvbik6IGFyZ3VtZW50IGFjdGlvbiBpcyB1bmRlZmluZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hlY2soY2hhbm5lbCQxLCBub3RVbmRlZiwgJ3B1dChhY3Rpb24pOiBhcmd1bWVudCBhY3Rpb24gaXMgdW5kZWZpbmVkJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHVuZGVmKGFjdGlvbikpIHtcbiAgICBhY3Rpb24gPSBjaGFubmVsJDE7IC8vIGB1bmRlZmluZWRgIGluc3RlYWQgb2YgYG51bGxgIHRvIG1ha2UgZGVmYXVsdCBwYXJhbWV0ZXIgd29ya1xuXG4gICAgY2hhbm5lbCQxID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcmV0dXJuIG1ha2VFZmZlY3QoUFVULCB7XG4gICAgY2hhbm5lbDogY2hhbm5lbCQxLFxuICAgIGFjdGlvbjogYWN0aW9uXG4gIH0pO1xufVxudmFyIHB1dFJlc29sdmUgPSBmdW5jdGlvbiBwdXRSZXNvbHZlKCkge1xuICB2YXIgZWZmID0gcHV0LmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgZWZmLnBheWxvYWQucmVzb2x2ZSA9IHRydWU7XG4gIHJldHVybiBlZmY7XG59O1xuZnVuY3Rpb24gYWxsKGVmZmVjdHMpIHtcbiAgdmFyIGVmZiA9IG1ha2VFZmZlY3QoQUxMLCBlZmZlY3RzKTtcbiAgZWZmLmNvbWJpbmF0b3IgPSB0cnVlO1xuICByZXR1cm4gZWZmO1xufVxuZnVuY3Rpb24gcmFjZShlZmZlY3RzKSB7XG4gIHZhciBlZmYgPSBtYWtlRWZmZWN0KFJBQ0UsIGVmZmVjdHMpO1xuICBlZmYuY29tYmluYXRvciA9IHRydWU7XG4gIHJldHVybiBlZmY7XG59IC8vIHRoaXMgbWF0Y2ggZ2V0Rm5DYWxsRGVzY3JpcHRvciBsb2dpY1xuXG52YXIgdmFsaWRhdGVGbkRlc2NyaXB0b3IgPSBmdW5jdGlvbiB2YWxpZGF0ZUZuRGVzY3JpcHRvcihlZmZlY3ROYW1lLCBmbkRlc2NyaXB0b3IpIHtcbiAgY2hlY2soZm5EZXNjcmlwdG9yLCBub3RVbmRlZiwgZWZmZWN0TmFtZSArIFwiOiBhcmd1bWVudCBmbiBpcyB1bmRlZmluZWQgb3IgbnVsbFwiKTtcblxuICBpZiAoZnVuYyhmbkRlc2NyaXB0b3IpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGNvbnRleHQgPSBudWxsO1xuICB2YXIgZm47XG5cbiAgaWYgKGFycmF5KGZuRGVzY3JpcHRvcikpIHtcbiAgICBjb250ZXh0ID0gZm5EZXNjcmlwdG9yWzBdO1xuICAgIGZuID0gZm5EZXNjcmlwdG9yWzFdO1xuICAgIGNoZWNrKGZuLCBub3RVbmRlZiwgZWZmZWN0TmFtZSArIFwiOiBhcmd1bWVudCBvZiB0eXBlIFtjb250ZXh0LCBmbl0gaGFzIHVuZGVmaW5lZCBvciBudWxsIGBmbmBcIik7XG4gIH0gZWxzZSBpZiAob2JqZWN0KGZuRGVzY3JpcHRvcikpIHtcbiAgICBjb250ZXh0ID0gZm5EZXNjcmlwdG9yLmNvbnRleHQ7XG4gICAgZm4gPSBmbkRlc2NyaXB0b3IuZm47XG4gICAgY2hlY2soZm4sIG5vdFVuZGVmLCBlZmZlY3ROYW1lICsgXCI6IGFyZ3VtZW50IG9mIHR5cGUge2NvbnRleHQsIGZufSBoYXMgdW5kZWZpbmVkIG9yIG51bGwgYGZuYFwiKTtcbiAgfSBlbHNlIHtcbiAgICBjaGVjayhmbkRlc2NyaXB0b3IsIGZ1bmMsIGVmZmVjdE5hbWUgKyBcIjogYXJndW1lbnQgZm4gaXMgbm90IGZ1bmN0aW9uXCIpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChjb250ZXh0ICYmIHN0cmluZyhmbikpIHtcbiAgICBjaGVjayhjb250ZXh0W2ZuXSwgZnVuYywgZWZmZWN0TmFtZSArIFwiOiBjb250ZXh0IGFyZ3VtZW50cyBoYXMgbm8gc3VjaCBtZXRob2QgLSBcXFwiXCIgKyBmbiArIFwiXFxcIlwiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjaGVjayhmbiwgZnVuYywgZWZmZWN0TmFtZSArIFwiOiB1bnBhY2tlZCBmbiBhcmd1bWVudCAoZnJvbSBbY29udGV4dCwgZm5dIG9yIHtjb250ZXh0LCBmbn0pIGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xufTtcblxuZnVuY3Rpb24gZ2V0Rm5DYWxsRGVzY3JpcHRvcihmbkRlc2NyaXB0b3IsIGFyZ3MpIHtcbiAgdmFyIGNvbnRleHQgPSBudWxsO1xuICB2YXIgZm47XG5cbiAgaWYgKGZ1bmMoZm5EZXNjcmlwdG9yKSkge1xuICAgIGZuID0gZm5EZXNjcmlwdG9yO1xuICB9IGVsc2Uge1xuICAgIGlmIChhcnJheShmbkRlc2NyaXB0b3IpKSB7XG4gICAgICBjb250ZXh0ID0gZm5EZXNjcmlwdG9yWzBdO1xuICAgICAgZm4gPSBmbkRlc2NyaXB0b3JbMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQgPSBmbkRlc2NyaXB0b3IuY29udGV4dDtcbiAgICAgIGZuID0gZm5EZXNjcmlwdG9yLmZuO1xuICAgIH1cblxuICAgIGlmIChjb250ZXh0ICYmIHN0cmluZyhmbikgJiYgZnVuYyhjb250ZXh0W2ZuXSkpIHtcbiAgICAgIGZuID0gY29udGV4dFtmbl07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgIGZuOiBmbixcbiAgICBhcmdzOiBhcmdzXG4gIH07XG59XG5cbnZhciBpc05vdERlbGF5RWZmZWN0ID0gZnVuY3Rpb24gaXNOb3REZWxheUVmZmVjdChmbikge1xuICByZXR1cm4gZm4gIT09IGRlbGF5O1xufTtcblxuZnVuY3Rpb24gY2FsbChmbkRlc2NyaXB0b3IpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB2YXIgYXJnMCA9IHR5cGVvZiBhcmdzWzBdID09PSAnbnVtYmVyJyA/IGFyZ3NbMF0gOiAnbXMnO1xuICAgIGNoZWNrKGZuRGVzY3JpcHRvciwgaXNOb3REZWxheUVmZmVjdCwgXCJpbnN0ZWFkIG9mIHdyaXRpbmcgYHlpZWxkIGNhbGwoZGVsYXksIFwiICsgYXJnMCArIFwiKWAgd2hlcmUgZGVsYXkgaXMgYW4gZWZmZWN0IGZyb20gYHJlZHV4LXNhZ2EvZWZmZWN0c2AgeW91IHNob3VsZCB3cml0ZSBgeWllbGQgZGVsYXkoXCIgKyBhcmcwICsgXCIpYFwiKTtcbiAgICB2YWxpZGF0ZUZuRGVzY3JpcHRvcignY2FsbCcsIGZuRGVzY3JpcHRvcik7XG4gIH1cblxuICByZXR1cm4gbWFrZUVmZmVjdChDQUxMLCBnZXRGbkNhbGxEZXNjcmlwdG9yKGZuRGVzY3JpcHRvciwgYXJncykpO1xufVxuZnVuY3Rpb24gYXBwbHkoY29udGV4dCwgZm4sIGFyZ3MpIHtcbiAgaWYgKGFyZ3MgPT09IHZvaWQgMCkge1xuICAgIGFyZ3MgPSBbXTtcbiAgfVxuXG4gIHZhciBmbkRlc2NyaXB0b3IgPSBbY29udGV4dCwgZm5dO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdmFsaWRhdGVGbkRlc2NyaXB0b3IoJ2FwcGx5JywgZm5EZXNjcmlwdG9yKTtcbiAgfVxuXG4gIHJldHVybiBtYWtlRWZmZWN0KENBTEwsIGdldEZuQ2FsbERlc2NyaXB0b3IoW2NvbnRleHQsIGZuXSwgYXJncykpO1xufVxuZnVuY3Rpb24gY3BzKGZuRGVzY3JpcHRvcikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHZhbGlkYXRlRm5EZXNjcmlwdG9yKCdjcHMnLCBmbkRlc2NyaXB0b3IpO1xuICB9XG5cbiAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICB9XG5cbiAgcmV0dXJuIG1ha2VFZmZlY3QoQ1BTLCBnZXRGbkNhbGxEZXNjcmlwdG9yKGZuRGVzY3JpcHRvciwgYXJncykpO1xufVxuZnVuY3Rpb24gZm9yayhmbkRlc2NyaXB0b3IpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB2YWxpZGF0ZUZuRGVzY3JpcHRvcignZm9yaycsIGZuRGVzY3JpcHRvcik7XG4gICAgY2hlY2soZm5EZXNjcmlwdG9yLCBmdW5jdGlvbiAoYXJnKSB7XG4gICAgICByZXR1cm4gIWVmZmVjdChhcmcpO1xuICAgIH0sICdmb3JrOiBhcmd1bWVudCBtdXN0IG5vdCBiZSBhbiBlZmZlY3QnKTtcbiAgfVxuXG4gIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMyA+IDEgPyBfbGVuMyAtIDEgOiAwKSwgX2tleTMgPSAxOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgYXJnc1tfa2V5MyAtIDFdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgfVxuXG4gIHJldHVybiBtYWtlRWZmZWN0KEZPUkssIGdldEZuQ2FsbERlc2NyaXB0b3IoZm5EZXNjcmlwdG9yLCBhcmdzKSk7XG59XG5mdW5jdGlvbiBzcGF3bihmbkRlc2NyaXB0b3IpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB2YWxpZGF0ZUZuRGVzY3JpcHRvcignc3Bhd24nLCBmbkRlc2NyaXB0b3IpO1xuICB9XG5cbiAgZm9yICh2YXIgX2xlbjQgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW40ID4gMSA/IF9sZW40IC0gMSA6IDApLCBfa2V5NCA9IDE7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIHtcbiAgICBhcmdzW19rZXk0IC0gMV0gPSBhcmd1bWVudHNbX2tleTRdO1xuICB9XG5cbiAgcmV0dXJuIGRldGFjaChmb3JrLmFwcGx5KHZvaWQgMCwgW2ZuRGVzY3JpcHRvcl0uY29uY2F0KGFyZ3MpKSk7XG59XG5mdW5jdGlvbiBqb2luKHRhc2tPclRhc2tzKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2pvaW4oLi4udGFza3MpIGlzIG5vdCBzdXBwb3J0ZWQgYW55IG1vcmUuIFBsZWFzZSB1c2Ugam9pbihbLi4udGFza3NdKSB0byBqb2luIG11bHRpcGxlIHRhc2tzLicpO1xuICAgIH1cblxuICAgIGlmIChhcnJheSh0YXNrT3JUYXNrcykpIHtcbiAgICAgIHRhc2tPclRhc2tzLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgY2hlY2sodCwgdGFzaywgXCJqb2luKFsuLi50YXNrc10pOiBhcmd1bWVudCBcIiArIHQgKyBcIiBpcyBub3QgYSB2YWxpZCBUYXNrIG9iamVjdCBcIiArIFRFU1RfSElOVCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hlY2sodGFza09yVGFza3MsIHRhc2ssIFwiam9pbih0YXNrKTogYXJndW1lbnQgXCIgKyB0YXNrT3JUYXNrcyArIFwiIGlzIG5vdCBhIHZhbGlkIFRhc2sgb2JqZWN0IFwiICsgVEVTVF9ISU5UKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWFrZUVmZmVjdChKT0lOLCB0YXNrT3JUYXNrcyk7XG59XG5mdW5jdGlvbiBjYW5jZWwodGFza09yVGFza3MpIHtcbiAgaWYgKHRhc2tPclRhc2tzID09PSB2b2lkIDApIHtcbiAgICB0YXNrT3JUYXNrcyA9IFNFTEZfQ0FOQ0VMTEFUSU9OO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY2FuY2VsKC4uLnRhc2tzKSBpcyBub3Qgc3VwcG9ydGVkIGFueSBtb3JlLiBQbGVhc2UgdXNlIGNhbmNlbChbLi4udGFza3NdKSB0byBjYW5jZWwgbXVsdGlwbGUgdGFza3MuJyk7XG4gICAgfVxuXG4gICAgaWYgKGFycmF5KHRhc2tPclRhc2tzKSkge1xuICAgICAgdGFza09yVGFza3MuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgICBjaGVjayh0LCB0YXNrLCBcImNhbmNlbChbLi4udGFza3NdKTogYXJndW1lbnQgXCIgKyB0ICsgXCIgaXMgbm90IGEgdmFsaWQgVGFzayBvYmplY3QgXCIgKyBURVNUX0hJTlQpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0YXNrT3JUYXNrcyAhPT0gU0VMRl9DQU5DRUxMQVRJT04gJiYgbm90VW5kZWYodGFza09yVGFza3MpKSB7XG4gICAgICBjaGVjayh0YXNrT3JUYXNrcywgdGFzaywgXCJjYW5jZWwodGFzayk6IGFyZ3VtZW50IFwiICsgdGFza09yVGFza3MgKyBcIiBpcyBub3QgYSB2YWxpZCBUYXNrIG9iamVjdCBcIiArIFRFU1RfSElOVCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1ha2VFZmZlY3QoQ0FOQ0VMLCB0YXNrT3JUYXNrcyk7XG59XG5mdW5jdGlvbiBzZWxlY3Qoc2VsZWN0b3IpIHtcbiAgaWYgKHNlbGVjdG9yID09PSB2b2lkIDApIHtcbiAgICBzZWxlY3RvciA9IGlkZW50aXR5O1xuICB9XG5cbiAgZm9yICh2YXIgX2xlbjUgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW41ID4gMSA/IF9sZW41IC0gMSA6IDApLCBfa2V5NSA9IDE7IF9rZXk1IDwgX2xlbjU7IF9rZXk1KyspIHtcbiAgICBhcmdzW19rZXk1IC0gMV0gPSBhcmd1bWVudHNbX2tleTVdO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIGNoZWNrKGFyZ3VtZW50c1swXSwgbm90VW5kZWYsICdzZWxlY3Qoc2VsZWN0b3IsIFsuLi5dKTogYXJndW1lbnQgc2VsZWN0b3IgaXMgdW5kZWZpbmVkJyk7XG4gICAgY2hlY2soc2VsZWN0b3IsIGZ1bmMsIFwic2VsZWN0KHNlbGVjdG9yLCBbLi4uXSk6IGFyZ3VtZW50IFwiICsgc2VsZWN0b3IgKyBcIiBpcyBub3QgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHJldHVybiBtYWtlRWZmZWN0KFNFTEVDVCwge1xuICAgIHNlbGVjdG9yOiBzZWxlY3RvcixcbiAgICBhcmdzOiBhcmdzXG4gIH0pO1xufVxuLyoqXG4gIGNoYW5uZWwocGF0dGVybiwgW2J1ZmZlcl0pICAgID0+IGNyZWF0ZXMgYSBwcm94eSBjaGFubmVsIGZvciBzdG9yZSBhY3Rpb25zXG4qKi9cblxuZnVuY3Rpb24gYWN0aW9uQ2hhbm5lbChwYXR0ZXJuJDEsIGJ1ZmZlciQxKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY2hlY2socGF0dGVybiQxLCBwYXR0ZXJuLCAnYWN0aW9uQ2hhbm5lbChwYXR0ZXJuLC4uLik6IGFyZ3VtZW50IHBhdHRlcm4gaXMgbm90IHZhbGlkJyk7XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGNoZWNrKGJ1ZmZlciQxLCBub3RVbmRlZiwgJ2FjdGlvbkNoYW5uZWwocGF0dGVybiwgYnVmZmVyKTogYXJndW1lbnQgYnVmZmVyIGlzIHVuZGVmaW5lZCcpO1xuICAgICAgY2hlY2soYnVmZmVyJDEsIGJ1ZmZlciwgXCJhY3Rpb25DaGFubmVsKHBhdHRlcm4sIGJ1ZmZlcik6IGFyZ3VtZW50IFwiICsgYnVmZmVyJDEgKyBcIiBpcyBub3QgYSB2YWxpZCBidWZmZXJcIik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1ha2VFZmZlY3QoQUNUSU9OX0NIQU5ORUwsIHtcbiAgICBwYXR0ZXJuOiBwYXR0ZXJuJDEsXG4gICAgYnVmZmVyOiBidWZmZXIkMVxuICB9KTtcbn1cbmZ1bmN0aW9uIGNhbmNlbGxlZCgpIHtcbiAgcmV0dXJuIG1ha2VFZmZlY3QoQ0FOQ0VMTEVELCB7fSk7XG59XG5mdW5jdGlvbiBmbHVzaChjaGFubmVsJDEpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjaGVjayhjaGFubmVsJDEsIGNoYW5uZWwsIFwiZmx1c2goY2hhbm5lbCk6IGFyZ3VtZW50IFwiICsgY2hhbm5lbCQxICsgXCIgaXMgbm90IHZhbGlkIGNoYW5uZWxcIik7XG4gIH1cblxuICByZXR1cm4gbWFrZUVmZmVjdChGTFVTSCwgY2hhbm5lbCQxKTtcbn1cbmZ1bmN0aW9uIGdldENvbnRleHQocHJvcCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNoZWNrKHByb3AsIHN0cmluZywgXCJnZXRDb250ZXh0KHByb3ApOiBhcmd1bWVudCBcIiArIHByb3AgKyBcIiBpcyBub3QgYSBzdHJpbmdcIik7XG4gIH1cblxuICByZXR1cm4gbWFrZUVmZmVjdChHRVRfQ09OVEVYVCwgcHJvcCk7XG59XG5mdW5jdGlvbiBzZXRDb250ZXh0KHByb3BzKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY2hlY2socHJvcHMsIG9iamVjdCwgY3JlYXRlU2V0Q29udGV4dFdhcm5pbmcobnVsbCwgcHJvcHMpKTtcbiAgfVxuXG4gIHJldHVybiBtYWtlRWZmZWN0KFNFVF9DT05URVhULCBwcm9wcyk7XG59XG52YXIgZGVsYXkgPVxuLyojX19QVVJFX18qL1xuY2FsbC5iaW5kKG51bGwsIGRlbGF5UCk7XG5cbmV4cG9ydCB7IGFwcGx5IGFzICQsIEFMTCBhcyBBLCBsb2dFcnJvciBhcyBCLCBDQUxMIGFzIEMsIHdyYXBTYWdhRGlzcGF0Y2ggYXMgRCwgaWRlbnRpdHkgYXMgRSwgRk9SSyBhcyBGLCBHRVRfQ09OVEVYVCBhcyBHLCBidWZmZXJzIGFzIEgsIGRldGFjaCBhcyBJLCBKT0lOIGFzIEosIHRha2UgYXMgSywgZm9yayBhcyBMLCBjYW5jZWwgYXMgTSwgY2FsbCBhcyBOLCBhY3Rpb25DaGFubmVsIGFzIE8sIFBVVCBhcyBQLCBzbGlkaW5nIGFzIFEsIFJBQ0UgYXMgUiwgU0VMRUNUIGFzIFMsIFRBS0UgYXMgVCwgZGVsYXkgYXMgVSwgcmFjZSBhcyBWLCBlZmZlY3RUeXBlcyBhcyBXLCB0YWtlTWF5YmUgYXMgWCwgcHV0IGFzIFksIHB1dFJlc29sdmUgYXMgWiwgYWxsIGFzIF8sIENQUyBhcyBhLCBjcHMgYXMgYTAsIHNwYXduIGFzIGExLCBqb2luIGFzIGEyLCBzZWxlY3QgYXMgYTMsIGNhbmNlbGxlZCBhcyBhNCwgZmx1c2ggYXMgYTUsIGdldENvbnRleHQgYXMgYTYsIHNldENvbnRleHQgYXMgYTcsIENBTkNFTCBhcyBiLCBjaGVjayBhcyBjLCBBQ1RJT05fQ0hBTk5FTCBhcyBkLCBleHBhbmRpbmcgYXMgZSwgQ0FOQ0VMTEVEIGFzIGYsIEZMVVNIIGFzIGcsIFNFVF9DT05URVhUIGFzIGgsIGludGVybmFsRXJyIGFzIGksIGdldE1ldGFJbmZvIGFzIGosIGtUcnVlIGFzIGssIGNyZWF0ZUFsbFN0eWxlQ2hpbGRDYWxsYmFja3MgYXMgbCwgY3JlYXRlRW1wdHlBcnJheSBhcyBtLCBub25lIGFzIG4sIG9uY2UgYXMgbywgYXNzaWduV2l0aFN5bWJvbHMgYXMgcCwgbWFrZUl0ZXJhdG9yIGFzIHEsIHJlbW92ZSBhcyByLCBzaG91bGRDb21wbGV0ZSBhcyBzLCBub29wIGFzIHQsIGZsYXRNYXAgYXMgdSwgZ2V0TG9jYXRpb24gYXMgdiwgY3JlYXRlU2V0Q29udGV4dFdhcm5pbmcgYXMgdywgYXN5bmNJdGVyYXRvclN5bWJvbCBhcyB4LCBzaG91bGRDYW5jZWwgYXMgeSwgc2hvdWxkVGVybWluYXRlIGFzIHogfTtcbiIsImltcG9ydCB7IENIQU5ORUxfRU5EX1RZUEUsIE1VTFRJQ0FTVCwgTUFUQ0gsIFNBR0FfQUNUSU9OLCBDQU5DRUwsIFNFTEZfQ0FOQ0VMTEFUSU9OLCBURVJNSU5BVEUsIFRBU0ssIFRBU0tfQ0FOQ0VMLCBJTyB9IGZyb20gJ0ByZWR1eC1zYWdhL3N5bWJvbHMnO1xuZXhwb3J0IHsgQ0FOQ0VMLCBTQUdBX0xPQ0FUSU9OIH0gZnJvbSAnQHJlZHV4LXNhZ2Evc3ltYm9scyc7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSc7XG5pbXBvcnQgeyBzdHJpbmcgYXMgc3RyaW5nJDEsIGFycmF5IGFzIGFycmF5JDEsIHN0cmluZ2FibGVGdW5jLCBmdW5jLCBzeW1ib2wgYXMgc3ltYm9sJDEsIGJ1ZmZlciwgbm90VW5kZWYsIHByb21pc2UsIGl0ZXJhdG9yLCB1bmRlZiwgb2JqZWN0LCBjaGFubmVsIGFzIGNoYW5uZWwkMSB9IGZyb20gJ0ByZWR1eC1zYWdhL2lzJztcbmltcG9ydCB7IGsgYXMga1RydWUsIGUgYXMgZXhwYW5kaW5nLCBjIGFzIGNoZWNrLCBvIGFzIG9uY2UsIHIgYXMgcmVtb3ZlLCBuIGFzIG5vbmUsIGkgYXMgaW50ZXJuYWxFcnIsIFQgYXMgVEFLRSwgUCBhcyBQVVQsIEEgYXMgQUxMLCBSIGFzIFJBQ0UsIEMgYXMgQ0FMTCwgYSBhcyBDUFMsIEYgYXMgRk9SSywgSiBhcyBKT0lOLCBiIGFzIENBTkNFTCQxLCBTIGFzIFNFTEVDVCwgZCBhcyBBQ1RJT05fQ0hBTk5FTCwgZiBhcyBDQU5DRUxMRUQkMSwgZyBhcyBGTFVTSCwgRyBhcyBHRVRfQ09OVEVYVCwgaCBhcyBTRVRfQ09OVEVYVCwgaiBhcyBnZXRNZXRhSW5mbywgbCBhcyBjcmVhdGVBbGxTdHlsZUNoaWxkQ2FsbGJhY2tzLCBtIGFzIGNyZWF0ZUVtcHR5QXJyYXksIHAgYXMgYXNzaWduV2l0aFN5bWJvbHMsIHEgYXMgbWFrZUl0ZXJhdG9yLCBzIGFzIHNob3VsZENvbXBsZXRlLCB0IGFzIG5vb3AsIHUgYXMgZmxhdE1hcCwgdiBhcyBnZXRMb2NhdGlvbiwgdyBhcyBjcmVhdGVTZXRDb250ZXh0V2FybmluZywgeCBhcyBhc3luY0l0ZXJhdG9yU3ltYm9sLCB5IGFzIHNob3VsZENhbmNlbCwgeiBhcyBzaG91bGRUZXJtaW5hdGUsIEIgYXMgbG9nRXJyb3IsIEQgYXMgd3JhcFNhZ2FEaXNwYXRjaCwgRSBhcyBpZGVudGl0eSB9IGZyb20gJy4vaW8tNmRlMTU2ZjMuanMnO1xuZXhwb3J0IHsgSCBhcyBidWZmZXJzLCBJIGFzIGRldGFjaCB9IGZyb20gJy4vaW8tNmRlMTU2ZjMuanMnO1xuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBkZWZlcnJlZCBmcm9tICdAcmVkdXgtc2FnYS9kZWZlcnJlZCc7XG5pbXBvcnQgJ0ByZWR1eC1zYWdhL2RlbGF5LXAnO1xuXG52YXIgcXVldWUgPSBbXTtcbi8qKlxuICBWYXJpYWJsZSB0byBob2xkIGEgY291bnRpbmcgc2VtYXBob3JlXG4gIC0gSW5jcmVtZW50aW5nIGFkZHMgYSBsb2NrIGFuZCBwdXRzIHRoZSBzY2hlZHVsZXIgaW4gYSBgc3VzcGVuZGVkYCBzdGF0ZSAoaWYgaXQncyBub3RcbiAgICBhbHJlYWR5IHN1c3BlbmRlZClcbiAgLSBEZWNyZW1lbnRpbmcgcmVsZWFzZXMgYSBsb2NrLiBaZXJvIGxvY2tzIHB1dHMgdGhlIHNjaGVkdWxlciBpbiBhIGByZWxlYXNlZGAgc3RhdGUuIFRoaXNcbiAgICB0cmlnZ2VycyBmbHVzaGluZyB0aGUgcXVldWVkIHRhc2tzLlxuKiovXG5cbnZhciBzZW1hcGhvcmUgPSAwO1xuLyoqXG4gIEV4ZWN1dGVzIGEgdGFzayAnYXRvbWljYWxseScuIFRhc2tzIHNjaGVkdWxlZCBkdXJpbmcgdGhpcyBleGVjdXRpb24gd2lsbCBiZSBxdWV1ZWRcbiAgYW5kIGZsdXNoZWQgYWZ0ZXIgdGhpcyB0YXNrIGhhcyBmaW5pc2hlZCAoYXNzdW1pbmcgdGhlIHNjaGVkdWxlciBlbmR1cCBpbiBhIHJlbGVhc2VkXG4gIHN0YXRlKS5cbioqL1xuXG5mdW5jdGlvbiBleGVjKHRhc2spIHtcbiAgdHJ5IHtcbiAgICBzdXNwZW5kKCk7XG4gICAgdGFzaygpO1xuICB9IGZpbmFsbHkge1xuICAgIHJlbGVhc2UoKTtcbiAgfVxufVxuLyoqXG4gIEV4ZWN1dGVzIG9yIHF1ZXVlcyBhIHRhc2sgZGVwZW5kaW5nIG9uIHRoZSBzdGF0ZSBvZiB0aGUgc2NoZWR1bGVyIChgc3VzcGVuZGVkYCBvciBgcmVsZWFzZWRgKVxuKiovXG5cblxuZnVuY3Rpb24gYXNhcCh0YXNrKSB7XG4gIHF1ZXVlLnB1c2godGFzayk7XG5cbiAgaWYgKCFzZW1hcGhvcmUpIHtcbiAgICBzdXNwZW5kKCk7XG4gICAgZmx1c2goKTtcbiAgfVxufVxuLyoqXG4gKiBQdXRzIHRoZSBzY2hlZHVsZXIgaW4gYSBgc3VzcGVuZGVkYCBzdGF0ZSBhbmQgZXhlY3V0ZXMgYSB0YXNrIGltbWVkaWF0ZWx5LlxuICovXG5cbmZ1bmN0aW9uIGltbWVkaWF0ZWx5KHRhc2spIHtcbiAgdHJ5IHtcbiAgICBzdXNwZW5kKCk7XG4gICAgcmV0dXJuIHRhc2soKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBmbHVzaCgpO1xuICB9XG59XG4vKipcbiAgUHV0cyB0aGUgc2NoZWR1bGVyIGluIGEgYHN1c3BlbmRlZGAgc3RhdGUuIFNjaGVkdWxlZCB0YXNrcyB3aWxsIGJlIHF1ZXVlZCB1bnRpbCB0aGVcbiAgc2NoZWR1bGVyIGlzIHJlbGVhc2VkLlxuKiovXG5cbmZ1bmN0aW9uIHN1c3BlbmQoKSB7XG4gIHNlbWFwaG9yZSsrO1xufVxuLyoqXG4gIFB1dHMgdGhlIHNjaGVkdWxlciBpbiBhIGByZWxlYXNlZGAgc3RhdGUuXG4qKi9cblxuXG5mdW5jdGlvbiByZWxlYXNlKCkge1xuICBzZW1hcGhvcmUtLTtcbn1cbi8qKlxuICBSZWxlYXNlcyB0aGUgY3VycmVudCBsb2NrLiBFeGVjdXRlcyBhbGwgcXVldWVkIHRhc2tzIGlmIHRoZSBzY2hlZHVsZXIgaXMgaW4gdGhlIHJlbGVhc2VkIHN0YXRlLlxuKiovXG5cblxuZnVuY3Rpb24gZmx1c2goKSB7XG4gIHJlbGVhc2UoKTtcbiAgdmFyIHRhc2s7XG5cbiAgd2hpbGUgKCFzZW1hcGhvcmUgJiYgKHRhc2sgPSBxdWV1ZS5zaGlmdCgpKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZXhlYyh0YXNrKTtcbiAgfVxufVxuXG52YXIgYXJyYXkgPSBmdW5jdGlvbiBhcnJheShwYXR0ZXJucykge1xuICByZXR1cm4gZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgcmV0dXJuIHBhdHRlcm5zLnNvbWUoZnVuY3Rpb24gKHApIHtcbiAgICAgIHJldHVybiBtYXRjaGVyKHApKGlucHV0KTtcbiAgICB9KTtcbiAgfTtcbn07XG52YXIgcHJlZGljYXRlID0gZnVuY3Rpb24gcHJlZGljYXRlKF9wcmVkaWNhdGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpbnB1dCkge1xuICAgIHJldHVybiBfcHJlZGljYXRlKGlucHV0KTtcbiAgfTtcbn07XG52YXIgc3RyaW5nID0gZnVuY3Rpb24gc3RyaW5nKHBhdHRlcm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dC50eXBlID09PSBTdHJpbmcocGF0dGVybik7XG4gIH07XG59O1xudmFyIHN5bWJvbCA9IGZ1bmN0aW9uIHN5bWJvbChwYXR0ZXJuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXQudHlwZSA9PT0gcGF0dGVybjtcbiAgfTtcbn07XG52YXIgd2lsZGNhcmQgPSBmdW5jdGlvbiB3aWxkY2FyZCgpIHtcbiAgcmV0dXJuIGtUcnVlO1xufTtcbmZ1bmN0aW9uIG1hdGNoZXIocGF0dGVybikge1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgdmFyIG1hdGNoZXJDcmVhdG9yID0gcGF0dGVybiA9PT0gJyonID8gd2lsZGNhcmQgOiBzdHJpbmckMShwYXR0ZXJuKSA/IHN0cmluZyA6IGFycmF5JDEocGF0dGVybikgPyBhcnJheSA6IHN0cmluZ2FibGVGdW5jKHBhdHRlcm4pID8gc3RyaW5nIDogZnVuYyhwYXR0ZXJuKSA/IHByZWRpY2F0ZSA6IHN5bWJvbCQxKHBhdHRlcm4pID8gc3ltYm9sIDogbnVsbDtcblxuICBpZiAobWF0Y2hlckNyZWF0b3IgPT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIHBhdHRlcm46IFwiICsgcGF0dGVybik7XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlckNyZWF0b3IocGF0dGVybik7XG59XG5cbnZhciBFTkQgPSB7XG4gIHR5cGU6IENIQU5ORUxfRU5EX1RZUEVcbn07XG52YXIgaXNFbmQgPSBmdW5jdGlvbiBpc0VuZChhKSB7XG4gIHJldHVybiBhICYmIGEudHlwZSA9PT0gQ0hBTk5FTF9FTkRfVFlQRTtcbn07XG52YXIgQ0xPU0VEX0NIQU5ORUxfV0lUSF9UQUtFUlMgPSAnQ2Fubm90IGhhdmUgYSBjbG9zZWQgY2hhbm5lbCB3aXRoIHBlbmRpbmcgdGFrZXJzJztcbnZhciBJTlZBTElEX0JVRkZFUiA9ICdpbnZhbGlkIGJ1ZmZlciBwYXNzZWQgdG8gY2hhbm5lbCBmYWN0b3J5IGZ1bmN0aW9uJztcbnZhciBVTkRFRklORURfSU5QVVRfRVJST1IgPSBcIlNhZ2Egb3IgY2hhbm5lbCB3YXMgcHJvdmlkZWQgd2l0aCBhbiB1bmRlZmluZWQgYWN0aW9uXFxuSGludHM6XFxuICAtIGNoZWNrIHRoYXQgeW91ciBBY3Rpb24gQ3JlYXRvciByZXR1cm5zIGEgbm9uLXVuZGVmaW5lZCB2YWx1ZVxcbiAgLSBpZiB0aGUgU2FnYSB3YXMgc3RhcnRlZCB1c2luZyBydW5TYWdhLCBjaGVjayB0aGF0IHlvdXIgc3Vic2NyaWJlIHNvdXJjZSBwcm92aWRlcyB0aGUgYWN0aW9uIHRvIGl0cyBsaXN0ZW5lcnNcIjtcbmZ1bmN0aW9uIGNoYW5uZWwoYnVmZmVyJDEpIHtcbiAgaWYgKGJ1ZmZlciQxID09PSB2b2lkIDApIHtcbiAgICBidWZmZXIkMSA9IGV4cGFuZGluZygpO1xuICB9XG5cbiAgdmFyIGNsb3NlZCA9IGZhbHNlO1xuICB2YXIgdGFrZXJzID0gW107XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjaGVjayhidWZmZXIkMSwgYnVmZmVyLCBJTlZBTElEX0JVRkZFUik7XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja0ZvcmJpZGRlblN0YXRlcygpIHtcbiAgICBpZiAoY2xvc2VkICYmIHRha2Vycy5sZW5ndGgpIHtcbiAgICAgIHRocm93IGludGVybmFsRXJyKENMT1NFRF9DSEFOTkVMX1dJVEhfVEFLRVJTKTtcbiAgICB9XG5cbiAgICBpZiAodGFrZXJzLmxlbmd0aCAmJiAhYnVmZmVyJDEuaXNFbXB0eSgpKSB7XG4gICAgICB0aHJvdyBpbnRlcm5hbEVycignQ2Fubm90IGhhdmUgcGVuZGluZyB0YWtlcnMgd2l0aCBub24gZW1wdHkgYnVmZmVyJyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHV0KGlucHV0KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNoZWNrRm9yYmlkZGVuU3RhdGVzKCk7XG4gICAgICBjaGVjayhpbnB1dCwgbm90VW5kZWYsIFVOREVGSU5FRF9JTlBVVF9FUlJPUik7XG4gICAgfVxuXG4gICAgaWYgKGNsb3NlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0YWtlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gYnVmZmVyJDEucHV0KGlucHV0KTtcbiAgICB9XG5cbiAgICB2YXIgY2IgPSB0YWtlcnMuc2hpZnQoKTtcbiAgICBjYihpbnB1dCk7XG4gIH1cblxuICBmdW5jdGlvbiB0YWtlKGNiKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNoZWNrRm9yYmlkZGVuU3RhdGVzKCk7XG4gICAgICBjaGVjayhjYiwgZnVuYywgXCJjaGFubmVsLnRha2UncyBjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuXG4gICAgaWYgKGNsb3NlZCAmJiBidWZmZXIkMS5pc0VtcHR5KCkpIHtcbiAgICAgIGNiKEVORCk7XG4gICAgfSBlbHNlIGlmICghYnVmZmVyJDEuaXNFbXB0eSgpKSB7XG4gICAgICBjYihidWZmZXIkMS50YWtlKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YWtlcnMucHVzaChjYik7XG5cbiAgICAgIGNiLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVtb3ZlKHRha2VycywgY2IpO1xuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBmbHVzaChjYikge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjaGVja0ZvcmJpZGRlblN0YXRlcygpO1xuICAgICAgY2hlY2soY2IsIGZ1bmMsIFwiY2hhbm5lbC5mbHVzaCcgY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xuICAgIH1cblxuICAgIGlmIChjbG9zZWQgJiYgYnVmZmVyJDEuaXNFbXB0eSgpKSB7XG4gICAgICBjYihFTkQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNiKGJ1ZmZlciQxLmZsdXNoKCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNoZWNrRm9yYmlkZGVuU3RhdGVzKCk7XG4gICAgfVxuXG4gICAgaWYgKGNsb3NlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNsb3NlZCA9IHRydWU7XG4gICAgdmFyIGFyciA9IHRha2VycztcbiAgICB0YWtlcnMgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHZhciB0YWtlciA9IGFycltpXTtcbiAgICAgIHRha2VyKEVORCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0YWtlOiB0YWtlLFxuICAgIHB1dDogcHV0LFxuICAgIGZsdXNoOiBmbHVzaCxcbiAgICBjbG9zZTogY2xvc2VcbiAgfTtcbn1cbmZ1bmN0aW9uIGV2ZW50Q2hhbm5lbChzdWJzY3JpYmUsIGJ1ZmZlcikge1xuICBpZiAoYnVmZmVyID09PSB2b2lkIDApIHtcbiAgICBidWZmZXIgPSBub25lKCk7XG4gIH1cblxuICB2YXIgY2xvc2VkID0gZmFsc2U7XG4gIHZhciB1bnN1YnNjcmliZTtcbiAgdmFyIGNoYW4gPSBjaGFubmVsKGJ1ZmZlcik7XG5cbiAgdmFyIGNsb3NlID0gZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgaWYgKGNsb3NlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNsb3NlZCA9IHRydWU7XG5cbiAgICBpZiAoZnVuYyh1bnN1YnNjcmliZSkpIHtcbiAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgY2hhbi5jbG9zZSgpO1xuICB9O1xuXG4gIHVuc3Vic2NyaWJlID0gc3Vic2NyaWJlKGZ1bmN0aW9uIChpbnB1dCkge1xuICAgIGlmIChpc0VuZChpbnB1dCkpIHtcbiAgICAgIGNsb3NlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2hhbi5wdXQoaW5wdXQpO1xuICB9KTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNoZWNrKHVuc3Vic2NyaWJlLCBmdW5jLCAnaW4gZXZlbnRDaGFubmVsOiBzdWJzY3JpYmUgc2hvdWxkIHJldHVybiBhIGZ1bmN0aW9uIHRvIHVuc3Vic2NyaWJlJyk7XG4gIH1cblxuICB1bnN1YnNjcmliZSA9IG9uY2UodW5zdWJzY3JpYmUpO1xuXG4gIGlmIChjbG9zZWQpIHtcbiAgICB1bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0YWtlOiBjaGFuLnRha2UsXG4gICAgZmx1c2g6IGNoYW4uZmx1c2gsXG4gICAgY2xvc2U6IGNsb3NlXG4gIH07XG59XG5mdW5jdGlvbiBtdWx0aWNhc3RDaGFubmVsKCkge1xuICB2YXIgX3JlZjtcblxuICB2YXIgY2xvc2VkID0gZmFsc2U7XG4gIHZhciBjdXJyZW50VGFrZXJzID0gW107XG4gIHZhciBuZXh0VGFrZXJzID0gY3VycmVudFRha2VycztcblxuICBmdW5jdGlvbiBjaGVja0ZvcmJpZGRlblN0YXRlcygpIHtcbiAgICBpZiAoY2xvc2VkICYmIG5leHRUYWtlcnMubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBpbnRlcm5hbEVycihDTE9TRURfQ0hBTk5FTF9XSVRIX1RBS0VSUyk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGVuc3VyZUNhbk11dGF0ZU5leHRUYWtlcnMgPSBmdW5jdGlvbiBlbnN1cmVDYW5NdXRhdGVOZXh0VGFrZXJzKCkge1xuICAgIGlmIChuZXh0VGFrZXJzICE9PSBjdXJyZW50VGFrZXJzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbmV4dFRha2VycyA9IGN1cnJlbnRUYWtlcnMuc2xpY2UoKTtcbiAgfTtcblxuICB2YXIgY2xvc2UgPSBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY2hlY2tGb3JiaWRkZW5TdGF0ZXMoKTtcbiAgICB9XG5cbiAgICBjbG9zZWQgPSB0cnVlO1xuICAgIHZhciB0YWtlcnMgPSBjdXJyZW50VGFrZXJzID0gbmV4dFRha2VycztcbiAgICBuZXh0VGFrZXJzID0gW107XG4gICAgdGFrZXJzLmZvckVhY2goZnVuY3Rpb24gKHRha2VyKSB7XG4gICAgICB0YWtlcihFTkQpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBfcmVmID0ge30sIF9yZWZbTVVMVElDQVNUXSA9IHRydWUsIF9yZWYucHV0ID0gZnVuY3Rpb24gcHV0KGlucHV0KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNoZWNrRm9yYmlkZGVuU3RhdGVzKCk7XG4gICAgICBjaGVjayhpbnB1dCwgbm90VW5kZWYsIFVOREVGSU5FRF9JTlBVVF9FUlJPUik7XG4gICAgfVxuXG4gICAgaWYgKGNsb3NlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpc0VuZChpbnB1dCkpIHtcbiAgICAgIGNsb3NlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHRha2VycyA9IGN1cnJlbnRUYWtlcnMgPSBuZXh0VGFrZXJzO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRha2Vycy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgdmFyIHRha2VyID0gdGFrZXJzW2ldO1xuXG4gICAgICBpZiAodGFrZXJbTUFUQ0hdKGlucHV0KSkge1xuICAgICAgICB0YWtlci5jYW5jZWwoKTtcbiAgICAgICAgdGFrZXIoaW5wdXQpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgX3JlZi50YWtlID0gZnVuY3Rpb24gdGFrZShjYiwgbWF0Y2hlcikge1xuICAgIGlmIChtYXRjaGVyID09PSB2b2lkIDApIHtcbiAgICAgIG1hdGNoZXIgPSB3aWxkY2FyZDtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY2hlY2tGb3JiaWRkZW5TdGF0ZXMoKTtcbiAgICB9XG5cbiAgICBpZiAoY2xvc2VkKSB7XG4gICAgICBjYihFTkQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNiW01BVENIXSA9IG1hdGNoZXI7XG4gICAgZW5zdXJlQ2FuTXV0YXRlTmV4dFRha2VycygpO1xuICAgIG5leHRUYWtlcnMucHVzaChjYik7XG4gICAgY2IuY2FuY2VsID0gb25jZShmdW5jdGlvbiAoKSB7XG4gICAgICBlbnN1cmVDYW5NdXRhdGVOZXh0VGFrZXJzKCk7XG4gICAgICByZW1vdmUobmV4dFRha2VycywgY2IpO1xuICAgIH0pO1xuICB9LCBfcmVmLmNsb3NlID0gY2xvc2UsIF9yZWY7XG59XG5mdW5jdGlvbiBzdGRDaGFubmVsKCkge1xuICB2YXIgY2hhbiA9IG11bHRpY2FzdENoYW5uZWwoKTtcbiAgdmFyIHB1dCA9IGNoYW4ucHV0O1xuXG4gIGNoYW4ucHV0ID0gZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgaWYgKGlucHV0W1NBR0FfQUNUSU9OXSkge1xuICAgICAgcHV0KGlucHV0KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBhc2FwKGZ1bmN0aW9uICgpIHtcbiAgICAgIHB1dChpbnB1dCk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIGNoYW47XG59XG5cbnZhciBSVU5OSU5HID0gMDtcbnZhciBDQU5DRUxMRUQgPSAxO1xudmFyIEFCT1JURUQgPSAyO1xudmFyIERPTkUgPSAzO1xuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZShwcm9taXNlLCBjYikge1xuICB2YXIgY2FuY2VsUHJvbWlzZSA9IHByb21pc2VbQ0FOQ0VMXTtcblxuICBpZiAoZnVuYyhjYW5jZWxQcm9taXNlKSkge1xuICAgIGNiLmNhbmNlbCA9IGNhbmNlbFByb21pc2U7XG4gIH1cblxuICBwcm9taXNlLnRoZW4oY2IsIGZ1bmN0aW9uIChlcnJvcikge1xuICAgIGNiKGVycm9yLCB0cnVlKTtcbiAgfSk7XG59XG5cbnZhciBjdXJyZW50ID0gMDtcbnZhciBuZXh0U2FnYUlkID0gKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICsrY3VycmVudDtcbn0pO1xuXG52YXIgX2VmZmVjdFJ1bm5lck1hcDtcblxuZnVuY3Rpb24gZ2V0SXRlcmF0b3JNZXRhSW5mbyhpdGVyYXRvciwgZm4pIHtcbiAgaWYgKGl0ZXJhdG9yLmlzU2FnYUl0ZXJhdG9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IGl0ZXJhdG9yLm1ldGEubmFtZVxuICAgIH07XG4gIH1cblxuICByZXR1cm4gZ2V0TWV0YUluZm8oZm4pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrSXRlcmF0b3IoX3JlZikge1xuICB2YXIgY29udGV4dCA9IF9yZWYuY29udGV4dCxcbiAgICAgIGZuID0gX3JlZi5mbixcbiAgICAgIGFyZ3MgPSBfcmVmLmFyZ3M7XG5cbiAgLy8gY2F0Y2ggc3luY2hyb25vdXMgZmFpbHVyZXM7IHNlZSAjMTUyIGFuZCAjNDQxXG4gIHRyeSB7XG4gICAgdmFyIHJlc3VsdCA9IGZuLmFwcGx5KGNvbnRleHQsIGFyZ3MpOyAvLyBpLmUuIGEgZ2VuZXJhdG9yIGZ1bmN0aW9uIHJldHVybnMgYW4gaXRlcmF0b3JcblxuICAgIGlmIChpdGVyYXRvcihyZXN1bHQpKSB7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHZhciByZXNvbHZlZCA9IGZhbHNlO1xuXG4gICAgdmFyIG5leHQgPSBmdW5jdGlvbiBuZXh0KGFyZykge1xuICAgICAgaWYgKCFyZXNvbHZlZCkge1xuICAgICAgICByZXNvbHZlZCA9IHRydWU7IC8vIE9ubHkgcHJvbWlzZXMgcmV0dXJuZWQgZnJvbSBmb3JrIHdpbGwgYmUgaW50ZXJwcmV0ZWQuIFNlZSAjMTU3M1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmFsdWU6IHJlc3VsdCxcbiAgICAgICAgICBkb25lOiAhcHJvbWlzZShyZXN1bHQpXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiBhcmcsXG4gICAgICAgICAgZG9uZTogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gbWFrZUl0ZXJhdG9yKG5leHQpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBkbyBub3QgYnViYmxlIHVwIHN5bmNocm9ub3VzIGZhaWx1cmVzIGZvciBkZXRhY2hlZCBmb3Jrc1xuICAgIC8vIGluc3RlYWQgY3JlYXRlIGEgZmFpbGVkIHRhc2suIFNlZSAjMTUyIGFuZCAjNDQxXG4gICAgcmV0dXJuIG1ha2VJdGVyYXRvcihmdW5jdGlvbiAoKSB7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcnVuUHV0RWZmZWN0KGVudiwgX3JlZjIsIGNiKSB7XG4gIHZhciBjaGFubmVsID0gX3JlZjIuY2hhbm5lbCxcbiAgICAgIGFjdGlvbiA9IF9yZWYyLmFjdGlvbixcbiAgICAgIHJlc29sdmUgPSBfcmVmMi5yZXNvbHZlO1xuXG4gIC8qKlxuICAgU2NoZWR1bGUgdGhlIHB1dCBpbiBjYXNlIGFub3RoZXIgc2FnYSBpcyBob2xkaW5nIGEgbG9jay5cbiAgIFRoZSBwdXQgd2lsbCBiZSBleGVjdXRlZCBhdG9taWNhbGx5LiBpZSBuZXN0ZWQgcHV0cyB3aWxsIGV4ZWN1dGUgYWZ0ZXJcbiAgIHRoaXMgcHV0IGhhcyB0ZXJtaW5hdGVkLlxuICAgKiovXG4gIGFzYXAoZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXN1bHQ7XG5cbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gKGNoYW5uZWwgPyBjaGFubmVsLnB1dCA6IGVudi5kaXNwYXRjaCkoYWN0aW9uKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY2IoZXJyb3IsIHRydWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChyZXNvbHZlICYmIHByb21pc2UocmVzdWx0KSkge1xuICAgICAgcmVzb2x2ZVByb21pc2UocmVzdWx0LCBjYik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNiKHJlc3VsdCk7XG4gICAgfVxuICB9KTsgLy8gUHV0IGVmZmVjdHMgYXJlIG5vbiBjYW5jZWxsYWJsZXNcbn1cblxuZnVuY3Rpb24gcnVuVGFrZUVmZmVjdChlbnYsIF9yZWYzLCBjYikge1xuICB2YXIgX3JlZjMkY2hhbm5lbCA9IF9yZWYzLmNoYW5uZWwsXG4gICAgICBjaGFubmVsID0gX3JlZjMkY2hhbm5lbCA9PT0gdm9pZCAwID8gZW52LmNoYW5uZWwgOiBfcmVmMyRjaGFubmVsLFxuICAgICAgcGF0dGVybiA9IF9yZWYzLnBhdHRlcm4sXG4gICAgICBtYXliZSA9IF9yZWYzLm1heWJlO1xuXG4gIHZhciB0YWtlQ2IgPSBmdW5jdGlvbiB0YWtlQ2IoaW5wdXQpIHtcbiAgICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgY2IoaW5wdXQsIHRydWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpc0VuZChpbnB1dCkgJiYgIW1heWJlKSB7XG4gICAgICBjYihURVJNSU5BVEUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNiKGlucHV0KTtcbiAgfTtcblxuICB0cnkge1xuICAgIGNoYW5uZWwudGFrZSh0YWtlQ2IsIG5vdFVuZGVmKHBhdHRlcm4pID8gbWF0Y2hlcihwYXR0ZXJuKSA6IG51bGwpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjYihlcnIsIHRydWUpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNiLmNhbmNlbCA9IHRha2VDYi5jYW5jZWw7XG59XG5cbmZ1bmN0aW9uIHJ1bkNhbGxFZmZlY3QoZW52LCBfcmVmNCwgY2IsIF9yZWY1KSB7XG4gIHZhciBjb250ZXh0ID0gX3JlZjQuY29udGV4dCxcbiAgICAgIGZuID0gX3JlZjQuZm4sXG4gICAgICBhcmdzID0gX3JlZjQuYXJncztcbiAgdmFyIHRhc2sgPSBfcmVmNS50YXNrO1xuXG4gIC8vIGNhdGNoIHN5bmNocm9ub3VzIGZhaWx1cmVzOyBzZWUgIzE1MlxuICB0cnkge1xuICAgIHZhciByZXN1bHQgPSBmbi5hcHBseShjb250ZXh0LCBhcmdzKTtcblxuICAgIGlmIChwcm9taXNlKHJlc3VsdCkpIHtcbiAgICAgIHJlc29sdmVQcm9taXNlKHJlc3VsdCwgY2IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpdGVyYXRvcihyZXN1bHQpKSB7XG4gICAgICAvLyByZXNvbHZlIGl0ZXJhdG9yXG4gICAgICBwcm9jKGVudiwgcmVzdWx0LCB0YXNrLmNvbnRleHQsIGN1cnJlbnQsIGdldE1ldGFJbmZvKGZuKSxcbiAgICAgIC8qIGlzUm9vdCAqL1xuICAgICAgZmFsc2UsIGNiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjYihyZXN1bHQpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNiKGVycm9yLCB0cnVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBydW5DUFNFZmZlY3QoZW52LCBfcmVmNiwgY2IpIHtcbiAgdmFyIGNvbnRleHQgPSBfcmVmNi5jb250ZXh0LFxuICAgICAgZm4gPSBfcmVmNi5mbixcbiAgICAgIGFyZ3MgPSBfcmVmNi5hcmdzO1xuXG4gIC8vIENQUyAoaWUgbm9kZSBzdHlsZSBmdW5jdGlvbnMpIGNhbiBkZWZpbmUgdGhlaXIgb3duIGNhbmNlbGxhdGlvbiBsb2dpY1xuICAvLyBieSBzZXR0aW5nIGNhbmNlbCBmaWVsZCBvbiB0aGUgY2JcbiAgLy8gY2F0Y2ggc3luY2hyb25vdXMgZmFpbHVyZXM7IHNlZSAjMTUyXG4gIHRyeSB7XG4gICAgdmFyIGNwc0NiID0gZnVuY3Rpb24gY3BzQ2IoZXJyLCByZXMpIHtcbiAgICAgIGlmICh1bmRlZihlcnIpKSB7XG4gICAgICAgIGNiKHJlcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYihlcnIsIHRydWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmbi5hcHBseShjb250ZXh0LCBhcmdzLmNvbmNhdChjcHNDYikpO1xuXG4gICAgaWYgKGNwc0NiLmNhbmNlbCkge1xuICAgICAgY2IuY2FuY2VsID0gY3BzQ2IuY2FuY2VsO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjYihlcnJvciwgdHJ1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcnVuRm9ya0VmZmVjdChlbnYsIF9yZWY3LCBjYiwgX3JlZjgpIHtcbiAgdmFyIGNvbnRleHQgPSBfcmVmNy5jb250ZXh0LFxuICAgICAgZm4gPSBfcmVmNy5mbixcbiAgICAgIGFyZ3MgPSBfcmVmNy5hcmdzLFxuICAgICAgZGV0YWNoZWQgPSBfcmVmNy5kZXRhY2hlZDtcbiAgdmFyIHBhcmVudCA9IF9yZWY4LnRhc2s7XG4gIHZhciB0YXNrSXRlcmF0b3IgPSBjcmVhdGVUYXNrSXRlcmF0b3Ioe1xuICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgZm46IGZuLFxuICAgIGFyZ3M6IGFyZ3NcbiAgfSk7XG4gIHZhciBtZXRhID0gZ2V0SXRlcmF0b3JNZXRhSW5mbyh0YXNrSXRlcmF0b3IsIGZuKTtcbiAgaW1tZWRpYXRlbHkoZnVuY3Rpb24gKCkge1xuICAgIHZhciBjaGlsZCA9IHByb2MoZW52LCB0YXNrSXRlcmF0b3IsIHBhcmVudC5jb250ZXh0LCBjdXJyZW50LCBtZXRhLCBkZXRhY2hlZCwgdW5kZWZpbmVkKTtcblxuICAgIGlmIChkZXRhY2hlZCkge1xuICAgICAgY2IoY2hpbGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY2hpbGQuaXNSdW5uaW5nKCkpIHtcbiAgICAgICAgcGFyZW50LnF1ZXVlLmFkZFRhc2soY2hpbGQpO1xuICAgICAgICBjYihjaGlsZCk7XG4gICAgICB9IGVsc2UgaWYgKGNoaWxkLmlzQWJvcnRlZCgpKSB7XG4gICAgICAgIHBhcmVudC5xdWV1ZS5hYm9ydChjaGlsZC5lcnJvcigpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNiKGNoaWxkKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pOyAvLyBGb3JrIGVmZmVjdHMgYXJlIG5vbiBjYW5jZWxsYWJsZXNcbn1cblxuZnVuY3Rpb24gcnVuSm9pbkVmZmVjdChlbnYsIHRhc2tPclRhc2tzLCBjYiwgX3JlZjkpIHtcbiAgdmFyIHRhc2sgPSBfcmVmOS50YXNrO1xuXG4gIHZhciBqb2luU2luZ2xlVGFzayA9IGZ1bmN0aW9uIGpvaW5TaW5nbGVUYXNrKHRhc2tUb0pvaW4sIGNiKSB7XG4gICAgaWYgKHRhc2tUb0pvaW4uaXNSdW5uaW5nKCkpIHtcbiAgICAgIHZhciBqb2luZXIgPSB7XG4gICAgICAgIHRhc2s6IHRhc2ssXG4gICAgICAgIGNiOiBjYlxuICAgICAgfTtcblxuICAgICAgY2IuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGFza1RvSm9pbi5pc1J1bm5pbmcoKSkgcmVtb3ZlKHRhc2tUb0pvaW4uam9pbmVycywgam9pbmVyKTtcbiAgICAgIH07XG5cbiAgICAgIHRhc2tUb0pvaW4uam9pbmVycy5wdXNoKGpvaW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0YXNrVG9Kb2luLmlzQWJvcnRlZCgpKSB7XG4gICAgICAgIGNiKHRhc2tUb0pvaW4uZXJyb3IoKSwgdHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYih0YXNrVG9Kb2luLnJlc3VsdCgpKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgaWYgKGFycmF5JDEodGFza09yVGFza3MpKSB7XG4gICAgaWYgKHRhc2tPclRhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY2IoW10pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjaGlsZENhbGxiYWNrcyA9IGNyZWF0ZUFsbFN0eWxlQ2hpbGRDYWxsYmFja3ModGFza09yVGFza3MsIGNiKTtcbiAgICB0YXNrT3JUYXNrcy5mb3JFYWNoKGZ1bmN0aW9uICh0LCBpKSB7XG4gICAgICBqb2luU2luZ2xlVGFzayh0LCBjaGlsZENhbGxiYWNrc1tpXSk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgam9pblNpbmdsZVRhc2sodGFza09yVGFza3MsIGNiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW5jZWxTaW5nbGVUYXNrKHRhc2tUb0NhbmNlbCkge1xuICBpZiAodGFza1RvQ2FuY2VsLmlzUnVubmluZygpKSB7XG4gICAgdGFza1RvQ2FuY2VsLmNhbmNlbCgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJ1bkNhbmNlbEVmZmVjdChlbnYsIHRhc2tPclRhc2tzLCBjYiwgX3JlZjEwKSB7XG4gIHZhciB0YXNrID0gX3JlZjEwLnRhc2s7XG5cbiAgaWYgKHRhc2tPclRhc2tzID09PSBTRUxGX0NBTkNFTExBVElPTikge1xuICAgIGNhbmNlbFNpbmdsZVRhc2sodGFzayk7XG4gIH0gZWxzZSBpZiAoYXJyYXkkMSh0YXNrT3JUYXNrcykpIHtcbiAgICB0YXNrT3JUYXNrcy5mb3JFYWNoKGNhbmNlbFNpbmdsZVRhc2spO1xuICB9IGVsc2Uge1xuICAgIGNhbmNlbFNpbmdsZVRhc2sodGFza09yVGFza3MpO1xuICB9XG5cbiAgY2IoKTsgLy8gY2FuY2VsIGVmZmVjdHMgYXJlIG5vbiBjYW5jZWxsYWJsZXNcbn1cblxuZnVuY3Rpb24gcnVuQWxsRWZmZWN0KGVudiwgZWZmZWN0cywgY2IsIF9yZWYxMSkge1xuICB2YXIgZGlnZXN0RWZmZWN0ID0gX3JlZjExLmRpZ2VzdEVmZmVjdDtcbiAgdmFyIGVmZmVjdElkID0gY3VycmVudDtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhlZmZlY3RzKTtcblxuICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICBjYihhcnJheSQxKGVmZmVjdHMpID8gW10gOiB7fSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGNoaWxkQ2FsbGJhY2tzID0gY3JlYXRlQWxsU3R5bGVDaGlsZENhbGxiYWNrcyhlZmZlY3RzLCBjYik7XG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgZGlnZXN0RWZmZWN0KGVmZmVjdHNba2V5XSwgZWZmZWN0SWQsIGNoaWxkQ2FsbGJhY2tzW2tleV0sIGtleSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBydW5SYWNlRWZmZWN0KGVudiwgZWZmZWN0cywgY2IsIF9yZWYxMikge1xuICB2YXIgZGlnZXN0RWZmZWN0ID0gX3JlZjEyLmRpZ2VzdEVmZmVjdDtcbiAgdmFyIGVmZmVjdElkID0gY3VycmVudDtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhlZmZlY3RzKTtcbiAgdmFyIHJlc3BvbnNlID0gYXJyYXkkMShlZmZlY3RzKSA/IGNyZWF0ZUVtcHR5QXJyYXkoa2V5cy5sZW5ndGgpIDoge307XG4gIHZhciBjaGlsZENicyA9IHt9O1xuICB2YXIgY29tcGxldGVkID0gZmFsc2U7XG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIGNoQ2JBdEtleSA9IGZ1bmN0aW9uIGNoQ2JBdEtleShyZXMsIGlzRXJyKSB7XG4gICAgICBpZiAoY29tcGxldGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRXJyIHx8IHNob3VsZENvbXBsZXRlKHJlcykpIHtcbiAgICAgICAgLy8gUmFjZSBBdXRvIGNhbmNlbGxhdGlvblxuICAgICAgICBjYi5jYW5jZWwoKTtcbiAgICAgICAgY2IocmVzLCBpc0Vycik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYi5jYW5jZWwoKTtcbiAgICAgICAgY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgcmVzcG9uc2Vba2V5XSA9IHJlcztcbiAgICAgICAgY2IocmVzcG9uc2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjaENiQXRLZXkuY2FuY2VsID0gbm9vcDtcbiAgICBjaGlsZENic1trZXldID0gY2hDYkF0S2V5O1xuICB9KTtcblxuICBjYi5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gcHJldmVudHMgdW5uZWNlc3NhcnkgY2FuY2VsbGF0aW9uXG4gICAgaWYgKCFjb21wbGV0ZWQpIHtcbiAgICAgIGNvbXBsZXRlZCA9IHRydWU7XG4gICAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gY2hpbGRDYnNba2V5XS5jYW5jZWwoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChjb21wbGV0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkaWdlc3RFZmZlY3QoZWZmZWN0c1trZXldLCBlZmZlY3RJZCwgY2hpbGRDYnNba2V5XSwga2V5KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJ1blNlbGVjdEVmZmVjdChlbnYsIF9yZWYxMywgY2IpIHtcbiAgdmFyIHNlbGVjdG9yID0gX3JlZjEzLnNlbGVjdG9yLFxuICAgICAgYXJncyA9IF9yZWYxMy5hcmdzO1xuXG4gIHRyeSB7XG4gICAgdmFyIHN0YXRlID0gc2VsZWN0b3IuYXBwbHkodm9pZCAwLCBbZW52LmdldFN0YXRlKCldLmNvbmNhdChhcmdzKSk7XG4gICAgY2Ioc3RhdGUpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNiKGVycm9yLCB0cnVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBydW5DaGFubmVsRWZmZWN0KGVudiwgX3JlZjE0LCBjYikge1xuICB2YXIgcGF0dGVybiA9IF9yZWYxNC5wYXR0ZXJuLFxuICAgICAgYnVmZmVyID0gX3JlZjE0LmJ1ZmZlcjtcbiAgdmFyIGNoYW4gPSBjaGFubmVsKGJ1ZmZlcik7XG4gIHZhciBtYXRjaCA9IG1hdGNoZXIocGF0dGVybik7XG5cbiAgdmFyIHRha2VyID0gZnVuY3Rpb24gdGFrZXIoYWN0aW9uKSB7XG4gICAgaWYgKCFpc0VuZChhY3Rpb24pKSB7XG4gICAgICBlbnYuY2hhbm5lbC50YWtlKHRha2VyLCBtYXRjaCk7XG4gICAgfVxuXG4gICAgY2hhbi5wdXQoYWN0aW9uKTtcbiAgfTtcblxuICB2YXIgY2xvc2UgPSBjaGFuLmNsb3NlO1xuXG4gIGNoYW4uY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGFrZXIuY2FuY2VsKCk7XG4gICAgY2xvc2UoKTtcbiAgfTtcblxuICBlbnYuY2hhbm5lbC50YWtlKHRha2VyLCBtYXRjaCk7XG4gIGNiKGNoYW4pO1xufVxuXG5mdW5jdGlvbiBydW5DYW5jZWxsZWRFZmZlY3QoZW52LCBkYXRhLCBjYiwgX3JlZjE1KSB7XG4gIHZhciB0YXNrID0gX3JlZjE1LnRhc2s7XG4gIGNiKHRhc2suaXNDYW5jZWxsZWQoKSk7XG59XG5cbmZ1bmN0aW9uIHJ1bkZsdXNoRWZmZWN0KGVudiwgY2hhbm5lbCwgY2IpIHtcbiAgY2hhbm5lbC5mbHVzaChjYik7XG59XG5cbmZ1bmN0aW9uIHJ1bkdldENvbnRleHRFZmZlY3QoZW52LCBwcm9wLCBjYiwgX3JlZjE2KSB7XG4gIHZhciB0YXNrID0gX3JlZjE2LnRhc2s7XG4gIGNiKHRhc2suY29udGV4dFtwcm9wXSk7XG59XG5cbmZ1bmN0aW9uIHJ1blNldENvbnRleHRFZmZlY3QoZW52LCBwcm9wcywgY2IsIF9yZWYxNykge1xuICB2YXIgdGFzayA9IF9yZWYxNy50YXNrO1xuICBhc3NpZ25XaXRoU3ltYm9scyh0YXNrLmNvbnRleHQsIHByb3BzKTtcbiAgY2IoKTtcbn1cblxudmFyIGVmZmVjdFJ1bm5lck1hcCA9IChfZWZmZWN0UnVubmVyTWFwID0ge30sIF9lZmZlY3RSdW5uZXJNYXBbVEFLRV0gPSBydW5UYWtlRWZmZWN0LCBfZWZmZWN0UnVubmVyTWFwW1BVVF0gPSBydW5QdXRFZmZlY3QsIF9lZmZlY3RSdW5uZXJNYXBbQUxMXSA9IHJ1bkFsbEVmZmVjdCwgX2VmZmVjdFJ1bm5lck1hcFtSQUNFXSA9IHJ1blJhY2VFZmZlY3QsIF9lZmZlY3RSdW5uZXJNYXBbQ0FMTF0gPSBydW5DYWxsRWZmZWN0LCBfZWZmZWN0UnVubmVyTWFwW0NQU10gPSBydW5DUFNFZmZlY3QsIF9lZmZlY3RSdW5uZXJNYXBbRk9SS10gPSBydW5Gb3JrRWZmZWN0LCBfZWZmZWN0UnVubmVyTWFwW0pPSU5dID0gcnVuSm9pbkVmZmVjdCwgX2VmZmVjdFJ1bm5lck1hcFtDQU5DRUwkMV0gPSBydW5DYW5jZWxFZmZlY3QsIF9lZmZlY3RSdW5uZXJNYXBbU0VMRUNUXSA9IHJ1blNlbGVjdEVmZmVjdCwgX2VmZmVjdFJ1bm5lck1hcFtBQ1RJT05fQ0hBTk5FTF0gPSBydW5DaGFubmVsRWZmZWN0LCBfZWZmZWN0UnVubmVyTWFwW0NBTkNFTExFRCQxXSA9IHJ1bkNhbmNlbGxlZEVmZmVjdCwgX2VmZmVjdFJ1bm5lck1hcFtGTFVTSF0gPSBydW5GbHVzaEVmZmVjdCwgX2VmZmVjdFJ1bm5lck1hcFtHRVRfQ09OVEVYVF0gPSBydW5HZXRDb250ZXh0RWZmZWN0LCBfZWZmZWN0UnVubmVyTWFwW1NFVF9DT05URVhUXSA9IHJ1blNldENvbnRleHRFZmZlY3QsIF9lZmZlY3RSdW5uZXJNYXApO1xuXG4vKipcbiBVc2VkIHRvIHRyYWNrIGEgcGFyZW50IHRhc2sgYW5kIGl0cyBmb3Jrc1xuIEluIHRoZSBmb3JrIG1vZGVsLCBmb3JrZWQgdGFza3MgYXJlIGF0dGFjaGVkIGJ5IGRlZmF1bHQgdG8gdGhlaXIgcGFyZW50XG4gV2UgbW9kZWwgdGhpcyB1c2luZyB0aGUgY29uY2VwdCBvZiBQYXJlbnQgdGFzayAmJiBtYWluIFRhc2tcbiBtYWluIHRhc2sgaXMgdGhlIG1haW4gZmxvdyBvZiB0aGUgY3VycmVudCBHZW5lcmF0b3IsIHRoZSBwYXJlbnQgdGFza3MgaXMgdGhlXG4gYWdncmVnYXRpb24gb2YgdGhlIG1haW4gdGFza3MgKyBhbGwgaXRzIGZvcmtlZCB0YXNrcy5cbiBUaHVzIHRoZSB3aG9sZSBtb2RlbCByZXByZXNlbnRzIGFuIGV4ZWN1dGlvbiB0cmVlIHdpdGggbXVsdGlwbGUgYnJhbmNoZXMgKHZzIHRoZVxuIGxpbmVhciBleGVjdXRpb24gdHJlZSBpbiBzZXF1ZW50aWFsIChub24gcGFyYWxsZWwpIHByb2dyYW1taW5nKVxuXG4gQSBwYXJlbnQgdGFza3MgaGFzIHRoZSBmb2xsb3dpbmcgc2VtYW50aWNzXG4gLSBJdCBjb21wbGV0ZXMgaWYgYWxsIGl0cyBmb3JrcyBlaXRoZXIgY29tcGxldGUgb3IgYWxsIGNhbmNlbGxlZFxuIC0gSWYgaXQncyBjYW5jZWxsZWQsIGFsbCBmb3JrcyBhcmUgY2FuY2VsbGVkIGFzIHdlbGxcbiAtIEl0IGFib3J0cyBpZiBhbnkgdW5jYXVnaHQgZXJyb3IgYnViYmxlcyB1cCBmcm9tIGZvcmtzXG4gLSBJZiBpdCBjb21wbGV0ZXMsIHRoZSByZXR1cm4gdmFsdWUgaXMgdGhlIG9uZSByZXR1cm5lZCBieSB0aGUgbWFpbiB0YXNrXG4gKiovXG5cbmZ1bmN0aW9uIGZvcmtRdWV1ZShtYWluVGFzaywgb25BYm9ydCwgY29udCkge1xuICB2YXIgdGFza3MgPSBbXTtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIGNvbXBsZXRlZCA9IGZhbHNlO1xuICBhZGRUYXNrKG1haW5UYXNrKTtcblxuICB2YXIgZ2V0VGFza3MgPSBmdW5jdGlvbiBnZXRUYXNrcygpIHtcbiAgICByZXR1cm4gdGFza3M7XG4gIH07XG5cbiAgZnVuY3Rpb24gYWJvcnQoZXJyKSB7XG4gICAgb25BYm9ydCgpO1xuICAgIGNhbmNlbEFsbCgpO1xuICAgIGNvbnQoZXJyLCB0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFRhc2sodGFzaykge1xuICAgIHRhc2tzLnB1c2godGFzayk7XG5cbiAgICB0YXNrLmNvbnQgPSBmdW5jdGlvbiAocmVzLCBpc0Vycikge1xuICAgICAgaWYgKGNvbXBsZXRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlbW92ZSh0YXNrcywgdGFzayk7XG4gICAgICB0YXNrLmNvbnQgPSBub29wO1xuXG4gICAgICBpZiAoaXNFcnIpIHtcbiAgICAgICAgYWJvcnQocmVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0YXNrID09PSBtYWluVGFzaykge1xuICAgICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGFza3MubGVuZ3RoKSB7XG4gICAgICAgICAgY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICBjb250KHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsQWxsKCkge1xuICAgIGlmIChjb21wbGV0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb21wbGV0ZWQgPSB0cnVlO1xuICAgIHRhc2tzLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgIHQuY29udCA9IG5vb3A7XG4gICAgICB0LmNhbmNlbCgpO1xuICAgIH0pO1xuICAgIHRhc2tzID0gW107XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGFkZFRhc2s6IGFkZFRhc2ssXG4gICAgY2FuY2VsQWxsOiBjYW5jZWxBbGwsXG4gICAgYWJvcnQ6IGFib3J0LFxuICAgIGdldFRhc2tzOiBnZXRUYXNrc1xuICB9O1xufVxuXG4vLyB0aGVyZSBjYW4gYmUgb25seSBhIHNpbmdsZSBzYWdhIGVycm9yIGNyZWF0ZWQgYXQgYW55IGdpdmVuIG1vbWVudFxuXG5mdW5jdGlvbiBmb3JtYXRMb2NhdGlvbihmaWxlTmFtZSwgbGluZU51bWJlcikge1xuICByZXR1cm4gZmlsZU5hbWUgKyBcIj9cIiArIGxpbmVOdW1iZXI7XG59XG5cbmZ1bmN0aW9uIGVmZmVjdExvY2F0aW9uQXNTdHJpbmcoZWZmZWN0KSB7XG4gIHZhciBsb2NhdGlvbiA9IGdldExvY2F0aW9uKGVmZmVjdCk7XG5cbiAgaWYgKGxvY2F0aW9uKSB7XG4gICAgdmFyIGNvZGUgPSBsb2NhdGlvbi5jb2RlLFxuICAgICAgICBmaWxlTmFtZSA9IGxvY2F0aW9uLmZpbGVOYW1lLFxuICAgICAgICBsaW5lTnVtYmVyID0gbG9jYXRpb24ubGluZU51bWJlcjtcbiAgICB2YXIgc291cmNlID0gY29kZSArIFwiICBcIiArIGZvcm1hdExvY2F0aW9uKGZpbGVOYW1lLCBsaW5lTnVtYmVyKTtcbiAgICByZXR1cm4gc291cmNlO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBzYWdhTG9jYXRpb25Bc1N0cmluZyhzYWdhTWV0YSkge1xuICB2YXIgbmFtZSA9IHNhZ2FNZXRhLm5hbWUsXG4gICAgICBsb2NhdGlvbiA9IHNhZ2FNZXRhLmxvY2F0aW9uO1xuXG4gIGlmIChsb2NhdGlvbikge1xuICAgIHJldHVybiBuYW1lICsgXCIgIFwiICsgZm9ybWF0TG9jYXRpb24obG9jYXRpb24uZmlsZU5hbWUsIGxvY2F0aW9uLmxpbmVOdW1iZXIpO1xuICB9XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmZ1bmN0aW9uIGNhbmNlbGxlZFRhc2tzQXNTdHJpbmcoc2FnYVN0YWNrKSB7XG4gIHZhciBjYW5jZWxsZWRUYXNrcyA9IGZsYXRNYXAoZnVuY3Rpb24gKGkpIHtcbiAgICByZXR1cm4gaS5jYW5jZWxsZWRUYXNrcztcbiAgfSwgc2FnYVN0YWNrKTtcblxuICBpZiAoIWNhbmNlbGxlZFRhc2tzLmxlbmd0aCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHJldHVybiBbJ1Rhc2tzIGNhbmNlbGxlZCBkdWUgdG8gZXJyb3I6J10uY29uY2F0KGNhbmNlbGxlZFRhc2tzKS5qb2luKCdcXG4nKTtcbn1cblxudmFyIGNyYXNoZWRFZmZlY3QgPSBudWxsO1xudmFyIHNhZ2FTdGFjayA9IFtdO1xudmFyIGFkZFNhZ2FGcmFtZSA9IGZ1bmN0aW9uIGFkZFNhZ2FGcmFtZShmcmFtZSkge1xuICBmcmFtZS5jcmFzaGVkRWZmZWN0ID0gY3Jhc2hlZEVmZmVjdDtcbiAgc2FnYVN0YWNrLnB1c2goZnJhbWUpO1xufTtcbnZhciBjbGVhciA9IGZ1bmN0aW9uIGNsZWFyKCkge1xuICBjcmFzaGVkRWZmZWN0ID0gbnVsbDtcbiAgc2FnYVN0YWNrLmxlbmd0aCA9IDA7XG59OyAvLyB0aGlzIHNldHMgY3Jhc2hlZCBlZmZlY3QgZm9yIHRoZSBzb29uLXRvLWJlLXJlcG9ydGVkIHNhZ2EgZnJhbWVcbi8vIHRoaXMgc2xpZ2h0bHkgc3RyZWF0Y2hlcyB0aGUgc2luZ2xldG9uIG5hdHVyZSBvZiB0aGlzIG1vZHVsZSBpbnRvIHdyb25nIGRpcmVjdGlvblxuLy8gYXMgaXQncyBldmVuIGxlc3Mgb2J2aW91cyB3aGF0J3MgdGhlIGRhdGEgZmxvdyBoZXJlLCBidXQgaXQgaXMgd2hhdCBpdCBpcyBmb3Igbm93XG5cbnZhciBzZXRDcmFzaGVkRWZmZWN0ID0gZnVuY3Rpb24gc2V0Q3Jhc2hlZEVmZmVjdChlZmZlY3QpIHtcbiAgY3Jhc2hlZEVmZmVjdCA9IGVmZmVjdDtcbn07XG4vKipcbiAgQHJldHVybnMge3N0cmluZ31cblxuICBAZXhhbXBsZVxuICBUaGUgYWJvdmUgZXJyb3Igb2NjdXJyZWQgaW4gdGFzayBlcnJvckluUHV0U2FnYSB7cGF0aFRvRmlsZX1cbiAgd2hlbiBleGVjdXRpbmcgZWZmZWN0IHB1dCh7dHlwZTogJ1JFRFVDRVJfQUNUSU9OX0VSUk9SX0lOX1BVVCd9KSB7cGF0aFRvRmlsZX1cbiAgICAgIGNyZWF0ZWQgYnkgZmV0Y2hTYWdhIHtwYXRoVG9GaWxlfVxuICAgICAgY3JlYXRlZCBieSByb290U2FnYSB7cGF0aFRvRmlsZX1cbiovXG5cbnZhciB0b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICB2YXIgZmlyc3RTYWdhID0gc2FnYVN0YWNrWzBdLFxuICAgICAgb3RoZXJTYWdhcyA9IHNhZ2FTdGFjay5zbGljZSgxKTtcbiAgdmFyIGNyYXNoZWRFZmZlY3RMb2NhdGlvbiA9IGZpcnN0U2FnYS5jcmFzaGVkRWZmZWN0ID8gZWZmZWN0TG9jYXRpb25Bc1N0cmluZyhmaXJzdFNhZ2EuY3Jhc2hlZEVmZmVjdCkgOiBudWxsO1xuICB2YXIgZXJyb3JNZXNzYWdlID0gXCJUaGUgYWJvdmUgZXJyb3Igb2NjdXJyZWQgaW4gdGFzayBcIiArIHNhZ2FMb2NhdGlvbkFzU3RyaW5nKGZpcnN0U2FnYS5tZXRhKSArIChjcmFzaGVkRWZmZWN0TG9jYXRpb24gPyBcIiBcXG4gd2hlbiBleGVjdXRpbmcgZWZmZWN0IFwiICsgY3Jhc2hlZEVmZmVjdExvY2F0aW9uIDogJycpO1xuICByZXR1cm4gW2Vycm9yTWVzc2FnZV0uY29uY2F0KG90aGVyU2FnYXMubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgcmV0dXJuIFwiICAgIGNyZWF0ZWQgYnkgXCIgKyBzYWdhTG9jYXRpb25Bc1N0cmluZyhzLm1ldGEpO1xuICB9KSwgW2NhbmNlbGxlZFRhc2tzQXNTdHJpbmcoc2FnYVN0YWNrKV0pLmpvaW4oJ1xcbicpO1xufTtcblxuZnVuY3Rpb24gbmV3VGFzayhlbnYsIG1haW5UYXNrLCBwYXJlbnRDb250ZXh0LCBwYXJlbnRFZmZlY3RJZCwgbWV0YSwgaXNSb290LCBjb250KSB7XG4gIHZhciBfdGFzaztcblxuICBpZiAoY29udCA9PT0gdm9pZCAwKSB7XG4gICAgY29udCA9IG5vb3A7XG4gIH1cblxuICB2YXIgc3RhdHVzID0gUlVOTklORztcbiAgdmFyIHRhc2tSZXN1bHQ7XG4gIHZhciB0YXNrRXJyb3I7XG4gIHZhciBkZWZlcnJlZEVuZCA9IG51bGw7XG4gIHZhciBjYW5jZWxsZWREdWVUb0Vycm9yVGFza3MgPSBbXTtcbiAgdmFyIGNvbnRleHQgPSBPYmplY3QuY3JlYXRlKHBhcmVudENvbnRleHQpO1xuICB2YXIgcXVldWUgPSBmb3JrUXVldWUobWFpblRhc2ssIGZ1bmN0aW9uIG9uQWJvcnQoKSB7XG4gICAgY2FuY2VsbGVkRHVlVG9FcnJvclRhc2tzLnB1c2guYXBwbHkoY2FuY2VsbGVkRHVlVG9FcnJvclRhc2tzLCBxdWV1ZS5nZXRUYXNrcygpLm1hcChmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIHQubWV0YS5uYW1lO1xuICAgIH0pKTtcbiAgfSwgZW5kKTtcbiAgLyoqXG4gICBUaGlzIG1heSBiZSBjYWxsZWQgYnkgYSBwYXJlbnQgZ2VuZXJhdG9yIHRvIHRyaWdnZXIvcHJvcGFnYXRlIGNhbmNlbGxhdGlvblxuICAgY2FuY2VsIGFsbCBwZW5kaW5nIHRhc2tzIChpbmNsdWRpbmcgdGhlIG1haW4gdGFzayksIHRoZW4gZW5kIHRoZSBjdXJyZW50IHRhc2suXG4gICAgQ2FuY2VsbGF0aW9uIHByb3BhZ2F0ZXMgZG93biB0byB0aGUgd2hvbGUgZXhlY3V0aW9uIHRyZWUgaGVsZCBieSB0aGlzIFBhcmVudCB0YXNrXG4gICBJdCdzIGFsc28gcHJvcGFnYXRlZCB0byBhbGwgam9pbmVycyBvZiB0aGlzIHRhc2sgYW5kIHRoZWlyIGV4ZWN1dGlvbiB0cmVlL2pvaW5lcnNcbiAgICBDYW5jZWxsYXRpb24gaXMgbm9vcCBmb3IgdGVybWluYXRlZC9DYW5jZWxsZWQgdGFza3MgdGFza3NcbiAgICoqL1xuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBpZiAoc3RhdHVzID09PSBSVU5OSU5HKSB7XG4gICAgICAvLyBTZXR0aW5nIHN0YXR1cyB0byBDQU5DRUxMRUQgZG9lcyBub3QgbmVjZXNzYXJpbHkgbWVhbiB0aGF0IHRoZSB0YXNrL2l0ZXJhdG9ycyBhcmUgc3RvcHBlZFxuICAgICAgLy8gZWZmZWN0cyBpbiB0aGUgaXRlcmF0b3IncyBmaW5hbGx5IGJsb2NrIHdpbGwgc3RpbGwgYmUgZXhlY3V0ZWRcbiAgICAgIHN0YXR1cyA9IENBTkNFTExFRDtcbiAgICAgIHF1ZXVlLmNhbmNlbEFsbCgpOyAvLyBFbmRpbmcgd2l0aCBhIFRBU0tfQ0FOQ0VMIHdpbGwgcHJvcGFnYXRlIHRoZSBDYW5jZWxsYXRpb24gdG8gYWxsIGpvaW5lcnNcblxuICAgICAgZW5kKFRBU0tfQ0FOQ0VMLCBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZW5kKHJlc3VsdCwgaXNFcnIpIHtcbiAgICBpZiAoIWlzRXJyKSB7XG4gICAgICAvLyBUaGUgc3RhdHVzIGhlcmUgbWF5IGJlIFJVTk5JTkcgb3IgQ0FOQ0VMTEVEXG4gICAgICAvLyBJZiB0aGUgc3RhdHVzIGlzIENBTkNFTExFRCwgdGhlbiB3ZSBkbyBub3QgbmVlZCB0byBjaGFuZ2UgaXQgaGVyZVxuICAgICAgaWYgKHJlc3VsdCA9PT0gVEFTS19DQU5DRUwpIHtcbiAgICAgICAgc3RhdHVzID0gQ0FOQ0VMTEVEO1xuICAgICAgfSBlbHNlIGlmIChzdGF0dXMgIT09IENBTkNFTExFRCkge1xuICAgICAgICBzdGF0dXMgPSBET05FO1xuICAgICAgfVxuXG4gICAgICB0YXNrUmVzdWx0ID0gcmVzdWx0O1xuICAgICAgZGVmZXJyZWRFbmQgJiYgZGVmZXJyZWRFbmQucmVzb2x2ZShyZXN1bHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0dXMgPSBBQk9SVEVEO1xuICAgICAgYWRkU2FnYUZyYW1lKHtcbiAgICAgICAgbWV0YTogbWV0YSxcbiAgICAgICAgY2FuY2VsbGVkVGFza3M6IGNhbmNlbGxlZER1ZVRvRXJyb3JUYXNrc1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh0YXNrLmlzUm9vdCkge1xuICAgICAgICB2YXIgc2FnYVN0YWNrID0gdG9TdHJpbmcoKTsgLy8gd2UndmUgZHVtcGVkIHRoZSBzYWdhIHN0YWNrIHRvIHN0cmluZyBhbmQgYXJlIHBhc3NpbmcgaXQgdG8gdXNlcidzIGNvZGVcbiAgICAgICAgLy8gd2Uga25vdyB0aGF0IGl0IHdvbid0IGJlIG5lZWRlZCBhbnltb3JlIGFuZCB3ZSBuZWVkIHRvIGNsZWFyIGl0XG5cbiAgICAgICAgY2xlYXIoKTtcbiAgICAgICAgZW52Lm9uRXJyb3IocmVzdWx0LCB7XG4gICAgICAgICAgc2FnYVN0YWNrOiBzYWdhU3RhY2tcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHRhc2tFcnJvciA9IHJlc3VsdDtcbiAgICAgIGRlZmVycmVkRW5kICYmIGRlZmVycmVkRW5kLnJlamVjdChyZXN1bHQpO1xuICAgIH1cblxuICAgIHRhc2suY29udChyZXN1bHQsIGlzRXJyKTtcbiAgICB0YXNrLmpvaW5lcnMuZm9yRWFjaChmdW5jdGlvbiAoam9pbmVyKSB7XG4gICAgICBqb2luZXIuY2IocmVzdWx0LCBpc0Vycik7XG4gICAgfSk7XG4gICAgdGFzay5qb2luZXJzID0gbnVsbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldENvbnRleHQocHJvcHMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY2hlY2socHJvcHMsIG9iamVjdCwgY3JlYXRlU2V0Q29udGV4dFdhcm5pbmcoJ3Rhc2snLCBwcm9wcykpO1xuICAgIH1cblxuICAgIGFzc2lnbldpdGhTeW1ib2xzKGNvbnRleHQsIHByb3BzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvUHJvbWlzZSgpIHtcbiAgICBpZiAoZGVmZXJyZWRFbmQpIHtcbiAgICAgIHJldHVybiBkZWZlcnJlZEVuZC5wcm9taXNlO1xuICAgIH1cblxuICAgIGRlZmVycmVkRW5kID0gZGVmZXJyZWQoKTtcblxuICAgIGlmIChzdGF0dXMgPT09IEFCT1JURUQpIHtcbiAgICAgIGRlZmVycmVkRW5kLnJlamVjdCh0YXNrRXJyb3IpO1xuICAgIH0gZWxzZSBpZiAoc3RhdHVzICE9PSBSVU5OSU5HKSB7XG4gICAgICBkZWZlcnJlZEVuZC5yZXNvbHZlKHRhc2tSZXN1bHQpO1xuICAgIH1cblxuICAgIHJldHVybiBkZWZlcnJlZEVuZC5wcm9taXNlO1xuICB9XG5cbiAgdmFyIHRhc2sgPSAoX3Rhc2sgPSB7fSwgX3Rhc2tbVEFTS10gPSB0cnVlLCBfdGFzay5pZCA9IHBhcmVudEVmZmVjdElkLCBfdGFzay5tZXRhID0gbWV0YSwgX3Rhc2suaXNSb290ID0gaXNSb290LCBfdGFzay5jb250ZXh0ID0gY29udGV4dCwgX3Rhc2suam9pbmVycyA9IFtdLCBfdGFzay5xdWV1ZSA9IHF1ZXVlLCBfdGFzay5jYW5jZWwgPSBjYW5jZWwsIF90YXNrLmNvbnQgPSBjb250LCBfdGFzay5lbmQgPSBlbmQsIF90YXNrLnNldENvbnRleHQgPSBzZXRDb250ZXh0LCBfdGFzay50b1Byb21pc2UgPSB0b1Byb21pc2UsIF90YXNrLmlzUnVubmluZyA9IGZ1bmN0aW9uIGlzUnVubmluZygpIHtcbiAgICByZXR1cm4gc3RhdHVzID09PSBSVU5OSU5HO1xuICB9LCBfdGFzay5pc0NhbmNlbGxlZCA9IGZ1bmN0aW9uIGlzQ2FuY2VsbGVkKCkge1xuICAgIHJldHVybiBzdGF0dXMgPT09IENBTkNFTExFRCB8fCBzdGF0dXMgPT09IFJVTk5JTkcgJiYgbWFpblRhc2suc3RhdHVzID09PSBDQU5DRUxMRUQ7XG4gIH0sIF90YXNrLmlzQWJvcnRlZCA9IGZ1bmN0aW9uIGlzQWJvcnRlZCgpIHtcbiAgICByZXR1cm4gc3RhdHVzID09PSBBQk9SVEVEO1xuICB9LCBfdGFzay5yZXN1bHQgPSBmdW5jdGlvbiByZXN1bHQoKSB7XG4gICAgcmV0dXJuIHRhc2tSZXN1bHQ7XG4gIH0sIF90YXNrLmVycm9yID0gZnVuY3Rpb24gZXJyb3IoKSB7XG4gICAgcmV0dXJuIHRhc2tFcnJvcjtcbiAgfSwgX3Rhc2spO1xuICByZXR1cm4gdGFzaztcbn1cblxuZnVuY3Rpb24gcHJvYyhlbnYsIGl0ZXJhdG9yJDEsIHBhcmVudENvbnRleHQsIHBhcmVudEVmZmVjdElkLCBtZXRhLCBpc1Jvb3QsIGNvbnQpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgaXRlcmF0b3IkMVthc3luY0l0ZXJhdG9yU3ltYm9sXSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcInJlZHV4LXNhZ2EgZG9lc24ndCBzdXBwb3J0IGFzeW5jIGdlbmVyYXRvcnMsIHBsZWFzZSB1c2Ugb25seSByZWd1bGFyIG9uZXNcIik7XG4gIH1cblxuICB2YXIgZmluYWxSdW5FZmZlY3QgPSBlbnYuZmluYWxpemVSdW5FZmZlY3QocnVuRWZmZWN0KTtcbiAgLyoqXG4gICAgVHJhY2tzIHRoZSBjdXJyZW50IGVmZmVjdCBjYW5jZWxsYXRpb25cbiAgICBFYWNoIHRpbWUgdGhlIGdlbmVyYXRvciBwcm9ncmVzc2VzLiBjYWxsaW5nIHJ1bkVmZmVjdCB3aWxsIHNldCBhIG5ldyB2YWx1ZVxuICAgIG9uIGl0LiBJdCBhbGxvd3MgcHJvcGFnYXRpbmcgY2FuY2VsbGF0aW9uIHRvIGNoaWxkIGVmZmVjdHNcbiAgKiovXG5cbiAgbmV4dC5jYW5jZWwgPSBub29wO1xuICAvKiogQ3JlYXRlcyBhIG1haW4gdGFzayB0byB0cmFjayB0aGUgbWFpbiBmbG93ICovXG5cbiAgdmFyIG1haW5UYXNrID0ge1xuICAgIG1ldGE6IG1ldGEsXG4gICAgY2FuY2VsOiBjYW5jZWxNYWluLFxuICAgIHN0YXR1czogUlVOTklOR1xuICB9O1xuICAvKipcbiAgIENyZWF0ZXMgYSBuZXcgdGFzayBkZXNjcmlwdG9yIGZvciB0aGlzIGdlbmVyYXRvci5cbiAgIEEgdGFzayBpcyB0aGUgYWdncmVnYXRpb24gb2YgaXQncyBtYWluVGFzayBhbmQgYWxsIGl0J3MgZm9ya2VkIHRhc2tzLlxuICAgKiovXG5cbiAgdmFyIHRhc2sgPSBuZXdUYXNrKGVudiwgbWFpblRhc2ssIHBhcmVudENvbnRleHQsIHBhcmVudEVmZmVjdElkLCBtZXRhLCBpc1Jvb3QsIGNvbnQpO1xuICB2YXIgZXhlY3V0aW5nQ29udGV4dCA9IHtcbiAgICB0YXNrOiB0YXNrLFxuICAgIGRpZ2VzdEVmZmVjdDogZGlnZXN0RWZmZWN0XG4gIH07XG4gIC8qKlxuICAgIGNhbmNlbGxhdGlvbiBvZiB0aGUgbWFpbiB0YXNrLiBXZSdsbCBzaW1wbHkgcmVzdW1lIHRoZSBHZW5lcmF0b3Igd2l0aCBhIFRBU0tfQ0FOQ0VMXG4gICoqL1xuXG4gIGZ1bmN0aW9uIGNhbmNlbE1haW4oKSB7XG4gICAgaWYgKG1haW5UYXNrLnN0YXR1cyA9PT0gUlVOTklORykge1xuICAgICAgbWFpblRhc2suc3RhdHVzID0gQ0FOQ0VMTEVEO1xuICAgICAgbmV4dChUQVNLX0NBTkNFTCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgIGF0dGFjaGVzIGNhbmNlbGxhdGlvbiBsb2dpYyB0byB0aGlzIHRhc2sncyBjb250aW51YXRpb25cbiAgICB0aGlzIHdpbGwgcGVybWl0IGNhbmNlbGxhdGlvbiB0byBwcm9wYWdhdGUgZG93biB0aGUgY2FsbCBjaGFpblxuICAqKi9cblxuXG4gIGlmIChjb250KSB7XG4gICAgY29udC5jYW5jZWwgPSB0YXNrLmNhbmNlbDtcbiAgfSAvLyBraWNrcyB1cCB0aGUgZ2VuZXJhdG9yXG5cblxuICBuZXh0KCk7IC8vIHRoZW4gcmV0dXJuIHRoZSB0YXNrIGRlc2NyaXB0b3IgdG8gdGhlIGNhbGxlclxuXG4gIHJldHVybiB0YXNrO1xuICAvKipcbiAgICogVGhpcyBpcyB0aGUgZ2VuZXJhdG9yIGRyaXZlclxuICAgKiBJdCdzIGEgcmVjdXJzaXZlIGFzeW5jL2NvbnRpbnVhdGlvbiBmdW5jdGlvbiB3aGljaCBjYWxscyBpdHNlbGZcbiAgICogdW50aWwgdGhlIGdlbmVyYXRvciB0ZXJtaW5hdGVzIG9yIHRocm93c1xuICAgKiBAcGFyYW0ge2ludGVybmFsIGNvbW1hbmRzKFRBU0tfQ0FOQ0VMIHwgVEVSTUlOQVRFKSB8IGFueX0gYXJnIC0gdmFsdWUsIGdlbmVyYXRvciB3aWxsIGJlIHJlc3VtZWQgd2l0aC5cbiAgICogQHBhcmFtIHtib29sZWFufSBpc0VyciAtIHRoZSBmbGFnIHNob3dzIGlmIGVmZmVjdCBmaW5pc2hlZCB3aXRoIGFuIGVycm9yXG4gICAqXG4gICAqIHJlY2VpdmVzIGVpdGhlciAoY29tbWFuZCB8IGVmZmVjdCByZXN1bHQsIGZhbHNlKSBvciAoYW55IHRocm93biB0aGluZywgdHJ1ZSlcbiAgICovXG5cbiAgZnVuY3Rpb24gbmV4dChhcmcsIGlzRXJyKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciByZXN1bHQ7XG5cbiAgICAgIGlmIChpc0Vycikge1xuICAgICAgICByZXN1bHQgPSBpdGVyYXRvciQxLnRocm93KGFyZyk7IC8vIHVzZXIgaGFuZGxlZCB0aGUgZXJyb3IsIHdlIGNhbiBjbGVhciBib29ra2VwdCB2YWx1ZXNcblxuICAgICAgICBjbGVhcigpO1xuICAgICAgfSBlbHNlIGlmIChzaG91bGRDYW5jZWwoYXJnKSkge1xuICAgICAgICAvKipcbiAgICAgICAgICBnZXR0aW5nIFRBU0tfQ0FOQ0VMIGF1dG9tYXRpY2FsbHkgY2FuY2VscyB0aGUgbWFpbiB0YXNrXG4gICAgICAgICAgV2UgY2FuIGdldCB0aGlzIHZhbHVlIGhlcmVcbiAgICAgICAgICAgLSBCeSBjYW5jZWxsaW5nIHRoZSBwYXJlbnQgdGFzayBtYW51YWxseVxuICAgICAgICAgIC0gQnkgam9pbmluZyBhIENhbmNlbGxlZCB0YXNrXG4gICAgICAgICoqL1xuICAgICAgICBtYWluVGFzay5zdGF0dXMgPSBDQU5DRUxMRUQ7XG4gICAgICAgIC8qKlxuICAgICAgICAgIENhbmNlbHMgdGhlIGN1cnJlbnQgZWZmZWN0OyB0aGlzIHdpbGwgcHJvcGFnYXRlIHRoZSBjYW5jZWxsYXRpb24gZG93biB0byBhbnkgY2FsbGVkIHRhc2tzXG4gICAgICAgICoqL1xuXG4gICAgICAgIG5leHQuY2FuY2VsKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgIElmIHRoaXMgR2VuZXJhdG9yIGhhcyBhIGByZXR1cm5gIG1ldGhvZCB0aGVuIGludm9rZXMgaXRcbiAgICAgICAgICBUaGlzIHdpbGwganVtcCB0byB0aGUgZmluYWxseSBibG9ja1xuICAgICAgICAqKi9cblxuICAgICAgICByZXN1bHQgPSBmdW5jKGl0ZXJhdG9yJDEucmV0dXJuKSA/IGl0ZXJhdG9yJDEucmV0dXJuKFRBU0tfQ0FOQ0VMKSA6IHtcbiAgICAgICAgICBkb25lOiB0cnVlLFxuICAgICAgICAgIHZhbHVlOiBUQVNLX0NBTkNFTFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmIChzaG91bGRUZXJtaW5hdGUoYXJnKSkge1xuICAgICAgICAvLyBXZSBnZXQgVEVSTUlOQVRFIGZsYWcsIGkuZS4gYnkgdGFraW5nIGZyb20gYSBjaGFubmVsIHRoYXQgZW5kZWQgdXNpbmcgYHRha2VgIChhbmQgbm90IGB0YWtlbWAgdXNlZCB0byB0cmFwIEVuZCBvZiBjaGFubmVscylcbiAgICAgICAgcmVzdWx0ID0gZnVuYyhpdGVyYXRvciQxLnJldHVybikgPyBpdGVyYXRvciQxLnJldHVybigpIDoge1xuICAgICAgICAgIGRvbmU6IHRydWVcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IGl0ZXJhdG9yJDEubmV4dChhcmcpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXJlc3VsdC5kb25lKSB7XG4gICAgICAgIGRpZ2VzdEVmZmVjdChyZXN1bHQudmFsdWUsIHBhcmVudEVmZmVjdElkLCBuZXh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgIFRoaXMgR2VuZXJhdG9yIGhhcyBlbmRlZCwgdGVybWluYXRlIHRoZSBtYWluIHRhc2sgYW5kIG5vdGlmeSB0aGUgZm9yayBxdWV1ZVxuICAgICAgICAqKi9cbiAgICAgICAgaWYgKG1haW5UYXNrLnN0YXR1cyAhPT0gQ0FOQ0VMTEVEKSB7XG4gICAgICAgICAgbWFpblRhc2suc3RhdHVzID0gRE9ORTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1haW5UYXNrLmNvbnQocmVzdWx0LnZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKG1haW5UYXNrLnN0YXR1cyA9PT0gQ0FOQ0VMTEVEKSB7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfVxuXG4gICAgICBtYWluVGFzay5zdGF0dXMgPSBBQk9SVEVEO1xuICAgICAgbWFpblRhc2suY29udChlcnJvciwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcnVuRWZmZWN0KGVmZmVjdCwgZWZmZWN0SWQsIGN1cnJDYikge1xuICAgIC8qKlxuICAgICAgZWFjaCBlZmZlY3QgcnVubmVyIG11c3QgYXR0YWNoIGl0cyBvd24gbG9naWMgb2YgY2FuY2VsbGF0aW9uIHRvIHRoZSBwcm92aWRlZCBjYWxsYmFja1xuICAgICAgaXQgYWxsb3dzIHRoaXMgZ2VuZXJhdG9yIHRvIHByb3BhZ2F0ZSBjYW5jZWxsYXRpb24gZG93bndhcmQuXG4gICAgICAgQVRURU5USU9OISBlZmZlY3QgcnVubmVycyBtdXN0IHNldHVwIHRoZSBjYW5jZWwgbG9naWMgYnkgc2V0dGluZyBjYi5jYW5jZWwgPSBbY2FuY2VsTWV0aG9kXVxuICAgICAgQW5kIHRoZSBzZXR1cCBtdXN0IG9jY3VyIGJlZm9yZSBjYWxsaW5nIHRoZSBjYWxsYmFja1xuICAgICAgIFRoaXMgaXMgYSBzb3J0IG9mIGludmVyc2lvbiBvZiBjb250cm9sOiBjYWxsZWQgYXN5bmMgZnVuY3Rpb25zIGFyZSByZXNwb25zaWJsZVxuICAgICAgb2YgY29tcGxldGluZyB0aGUgZmxvdyBieSBjYWxsaW5nIHRoZSBwcm92aWRlZCBjb250aW51YXRpb247IHdoaWxlIGNhbGxlciBmdW5jdGlvbnNcbiAgICAgIGFyZSByZXNwb25zaWJsZSBmb3IgYWJvcnRpbmcgdGhlIGN1cnJlbnQgZmxvdyBieSBjYWxsaW5nIHRoZSBhdHRhY2hlZCBjYW5jZWwgZnVuY3Rpb25cbiAgICAgICBMaWJyYXJ5IHVzZXJzIGNhbiBhdHRhY2ggdGhlaXIgb3duIGNhbmNlbGxhdGlvbiBsb2dpYyB0byBwcm9taXNlcyBieSBkZWZpbmluZyBhXG4gICAgICBwcm9taXNlW0NBTkNFTF0gbWV0aG9kIGluIHRoZWlyIHJldHVybmVkIHByb21pc2VzXG4gICAgICBBVFRFTlRJT04hIGNhbGxpbmcgY2FuY2VsIG11c3QgaGF2ZSBubyBlZmZlY3Qgb24gYW4gYWxyZWFkeSBjb21wbGV0ZWQgb3IgY2FuY2VsbGVkIGVmZmVjdFxuICAgICoqL1xuICAgIGlmIChwcm9taXNlKGVmZmVjdCkpIHtcbiAgICAgIHJlc29sdmVQcm9taXNlKGVmZmVjdCwgY3VyckNiKTtcbiAgICB9IGVsc2UgaWYgKGl0ZXJhdG9yKGVmZmVjdCkpIHtcbiAgICAgIC8vIHJlc29sdmUgaXRlcmF0b3JcbiAgICAgIHByb2MoZW52LCBlZmZlY3QsIHRhc2suY29udGV4dCwgZWZmZWN0SWQsIG1ldGEsXG4gICAgICAvKiBpc1Jvb3QgKi9cbiAgICAgIGZhbHNlLCBjdXJyQ2IpO1xuICAgIH0gZWxzZSBpZiAoZWZmZWN0ICYmIGVmZmVjdFtJT10pIHtcbiAgICAgIHZhciBlZmZlY3RSdW5uZXIgPSBlZmZlY3RSdW5uZXJNYXBbZWZmZWN0LnR5cGVdO1xuICAgICAgZWZmZWN0UnVubmVyKGVudiwgZWZmZWN0LnBheWxvYWQsIGN1cnJDYiwgZXhlY3V0aW5nQ29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGFueXRoaW5nIGVsc2UgcmV0dXJuZWQgYXMgaXNcbiAgICAgIGN1cnJDYihlZmZlY3QpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRpZ2VzdEVmZmVjdChlZmZlY3QsIHBhcmVudEVmZmVjdElkLCBjYiwgbGFiZWwpIHtcbiAgICBpZiAobGFiZWwgPT09IHZvaWQgMCkge1xuICAgICAgbGFiZWwgPSAnJztcbiAgICB9XG5cbiAgICB2YXIgZWZmZWN0SWQgPSBuZXh0U2FnYUlkKCk7XG4gICAgZW52LnNhZ2FNb25pdG9yICYmIGVudi5zYWdhTW9uaXRvci5lZmZlY3RUcmlnZ2VyZWQoe1xuICAgICAgZWZmZWN0SWQ6IGVmZmVjdElkLFxuICAgICAgcGFyZW50RWZmZWN0SWQ6IHBhcmVudEVmZmVjdElkLFxuICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgZWZmZWN0OiBlZmZlY3RcbiAgICB9KTtcbiAgICAvKipcbiAgICAgIGNvbXBsZXRpb24gY2FsbGJhY2sgYW5kIGNhbmNlbCBjYWxsYmFjayBhcmUgbXV0dWFsbHkgZXhjbHVzaXZlXG4gICAgICBXZSBjYW4ndCBjYW5jZWwgYW4gYWxyZWFkeSBjb21wbGV0ZWQgZWZmZWN0XG4gICAgICBBbmQgV2UgY2FuJ3QgY29tcGxldGUgYW4gYWxyZWFkeSBjYW5jZWxsZWQgZWZmZWN0SWRcbiAgICAqKi9cblxuICAgIHZhciBlZmZlY3RTZXR0bGVkOyAvLyBDb21wbGV0aW9uIGNhbGxiYWNrIHBhc3NlZCB0byB0aGUgYXBwcm9wcmlhdGUgZWZmZWN0IHJ1bm5lclxuXG4gICAgZnVuY3Rpb24gY3VyckNiKHJlcywgaXNFcnIpIHtcbiAgICAgIGlmIChlZmZlY3RTZXR0bGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZWZmZWN0U2V0dGxlZCA9IHRydWU7XG4gICAgICBjYi5jYW5jZWwgPSBub29wOyAvLyBkZWZlbnNpdmUgbWVhc3VyZVxuXG4gICAgICBpZiAoZW52LnNhZ2FNb25pdG9yKSB7XG4gICAgICAgIGlmIChpc0Vycikge1xuICAgICAgICAgIGVudi5zYWdhTW9uaXRvci5lZmZlY3RSZWplY3RlZChlZmZlY3RJZCwgcmVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbnYuc2FnYU1vbml0b3IuZWZmZWN0UmVzb2x2ZWQoZWZmZWN0SWQsIHJlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGlzRXJyKSB7XG4gICAgICAgIHNldENyYXNoZWRFZmZlY3QoZWZmZWN0KTtcbiAgICAgIH1cblxuICAgICAgY2IocmVzLCBpc0Vycik7XG4gICAgfSAvLyB0cmFja3MgZG93biB0aGUgY3VycmVudCBjYW5jZWxcblxuXG4gICAgY3VyckNiLmNhbmNlbCA9IG5vb3A7IC8vIHNldHVwIGNhbmNlbGxhdGlvbiBsb2dpYyBvbiB0aGUgcGFyZW50IGNiXG5cbiAgICBjYi5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBwcmV2ZW50cyBjYW5jZWxsaW5nIGFuIGFscmVhZHkgY29tcGxldGVkIGVmZmVjdFxuICAgICAgaWYgKGVmZmVjdFNldHRsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBlZmZlY3RTZXR0bGVkID0gdHJ1ZTtcbiAgICAgIGN1cnJDYi5jYW5jZWwoKTsgLy8gcHJvcGFnYXRlcyBjYW5jZWwgZG93bndhcmRcblxuICAgICAgY3VyckNiLmNhbmNlbCA9IG5vb3A7IC8vIGRlZmVuc2l2ZSBtZWFzdXJlXG5cbiAgICAgIGVudi5zYWdhTW9uaXRvciAmJiBlbnYuc2FnYU1vbml0b3IuZWZmZWN0Q2FuY2VsbGVkKGVmZmVjdElkKTtcbiAgICB9O1xuXG4gICAgZmluYWxSdW5FZmZlY3QoZWZmZWN0LCBlZmZlY3RJZCwgY3VyckNiKTtcbiAgfVxufVxuXG52YXIgUlVOX1NBR0FfU0lHTkFUVVJFID0gJ3J1blNhZ2Eob3B0aW9ucywgc2FnYSwgLi4uYXJncyknO1xudmFyIE5PTl9HRU5FUkFUT1JfRVJSID0gUlVOX1NBR0FfU0lHTkFUVVJFICsgXCI6IHNhZ2EgYXJndW1lbnQgbXVzdCBiZSBhIEdlbmVyYXRvciBmdW5jdGlvbiFcIjtcbmZ1bmN0aW9uIHJ1blNhZ2EoX3JlZiwgc2FnYSkge1xuICB2YXIgX3JlZiRjaGFubmVsID0gX3JlZi5jaGFubmVsLFxuICAgICAgY2hhbm5lbCA9IF9yZWYkY2hhbm5lbCA9PT0gdm9pZCAwID8gc3RkQ2hhbm5lbCgpIDogX3JlZiRjaGFubmVsLFxuICAgICAgZGlzcGF0Y2ggPSBfcmVmLmRpc3BhdGNoLFxuICAgICAgZ2V0U3RhdGUgPSBfcmVmLmdldFN0YXRlLFxuICAgICAgX3JlZiRjb250ZXh0ID0gX3JlZi5jb250ZXh0LFxuICAgICAgY29udGV4dCA9IF9yZWYkY29udGV4dCA9PT0gdm9pZCAwID8ge30gOiBfcmVmJGNvbnRleHQsXG4gICAgICBzYWdhTW9uaXRvciA9IF9yZWYuc2FnYU1vbml0b3IsXG4gICAgICBlZmZlY3RNaWRkbGV3YXJlcyA9IF9yZWYuZWZmZWN0TWlkZGxld2FyZXMsXG4gICAgICBfcmVmJG9uRXJyb3IgPSBfcmVmLm9uRXJyb3IsXG4gICAgICBvbkVycm9yID0gX3JlZiRvbkVycm9yID09PSB2b2lkIDAgPyBsb2dFcnJvciA6IF9yZWYkb25FcnJvcjtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNoZWNrKHNhZ2EsIGZ1bmMsIE5PTl9HRU5FUkFUT1JfRVJSKTtcbiAgfVxuXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSwgX2tleSA9IDI7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBpdGVyYXRvciQxID0gc2FnYS5hcHBseSh2b2lkIDAsIGFyZ3MpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY2hlY2soaXRlcmF0b3IkMSwgaXRlcmF0b3IsIE5PTl9HRU5FUkFUT1JfRVJSKTtcbiAgfVxuXG4gIHZhciBlZmZlY3RJZCA9IG5leHRTYWdhSWQoKTtcblxuICBpZiAoc2FnYU1vbml0b3IpIHtcbiAgICAvLyBtb25pdG9ycyBhcmUgZXhwZWN0ZWQgdG8gaGF2ZSBhIGNlcnRhaW4gaW50ZXJmYWNlLCBsZXQncyBmaWxsLWluIGFueSBtaXNzaW5nIG9uZXNcbiAgICBzYWdhTW9uaXRvci5yb290U2FnYVN0YXJ0ZWQgPSBzYWdhTW9uaXRvci5yb290U2FnYVN0YXJ0ZWQgfHwgbm9vcDtcbiAgICBzYWdhTW9uaXRvci5lZmZlY3RUcmlnZ2VyZWQgPSBzYWdhTW9uaXRvci5lZmZlY3RUcmlnZ2VyZWQgfHwgbm9vcDtcbiAgICBzYWdhTW9uaXRvci5lZmZlY3RSZXNvbHZlZCA9IHNhZ2FNb25pdG9yLmVmZmVjdFJlc29sdmVkIHx8IG5vb3A7XG4gICAgc2FnYU1vbml0b3IuZWZmZWN0UmVqZWN0ZWQgPSBzYWdhTW9uaXRvci5lZmZlY3RSZWplY3RlZCB8fCBub29wO1xuICAgIHNhZ2FNb25pdG9yLmVmZmVjdENhbmNlbGxlZCA9IHNhZ2FNb25pdG9yLmVmZmVjdENhbmNlbGxlZCB8fCBub29wO1xuICAgIHNhZ2FNb25pdG9yLmFjdGlvbkRpc3BhdGNoZWQgPSBzYWdhTW9uaXRvci5hY3Rpb25EaXNwYXRjaGVkIHx8IG5vb3A7XG4gICAgc2FnYU1vbml0b3Iucm9vdFNhZ2FTdGFydGVkKHtcbiAgICAgIGVmZmVjdElkOiBlZmZlY3RJZCxcbiAgICAgIHNhZ2E6IHNhZ2EsXG4gICAgICBhcmdzOiBhcmdzXG4gICAgfSk7XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChub3RVbmRlZihkaXNwYXRjaCkpIHtcbiAgICAgIGNoZWNrKGRpc3BhdGNoLCBmdW5jLCAnZGlzcGF0Y2ggbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgfVxuXG4gICAgaWYgKG5vdFVuZGVmKGdldFN0YXRlKSkge1xuICAgICAgY2hlY2soZ2V0U3RhdGUsIGZ1bmMsICdnZXRTdGF0ZSBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgICB9XG5cbiAgICBpZiAobm90VW5kZWYoZWZmZWN0TWlkZGxld2FyZXMpKSB7XG4gICAgICB2YXIgTUlERExFV0FSRV9UWVBFX0VSUk9SID0gJ2VmZmVjdE1pZGRsZXdhcmVzIG11c3QgYmUgYW4gYXJyYXkgb2YgZnVuY3Rpb25zJztcbiAgICAgIGNoZWNrKGVmZmVjdE1pZGRsZXdhcmVzLCBhcnJheSQxLCBNSURETEVXQVJFX1RZUEVfRVJST1IpO1xuICAgICAgZWZmZWN0TWlkZGxld2FyZXMuZm9yRWFjaChmdW5jdGlvbiAoZWZmZWN0TWlkZGxld2FyZSkge1xuICAgICAgICByZXR1cm4gY2hlY2soZWZmZWN0TWlkZGxld2FyZSwgZnVuYywgTUlERExFV0FSRV9UWVBFX0VSUk9SKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNoZWNrKG9uRXJyb3IsIGZ1bmMsICdvbkVycm9yIHBhc3NlZCB0byB0aGUgcmVkdXgtc2FnYSBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgfVxuXG4gIHZhciBmaW5hbGl6ZVJ1bkVmZmVjdDtcblxuICBpZiAoZWZmZWN0TWlkZGxld2FyZXMpIHtcbiAgICB2YXIgbWlkZGxld2FyZSA9IGNvbXBvc2UuYXBwbHkodm9pZCAwLCBlZmZlY3RNaWRkbGV3YXJlcyk7XG5cbiAgICBmaW5hbGl6ZVJ1bkVmZmVjdCA9IGZ1bmN0aW9uIGZpbmFsaXplUnVuRWZmZWN0KHJ1bkVmZmVjdCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlZmZlY3QsIGVmZmVjdElkLCBjdXJyQ2IpIHtcbiAgICAgICAgdmFyIHBsYWluUnVuRWZmZWN0ID0gZnVuY3Rpb24gcGxhaW5SdW5FZmZlY3QoZWZmKSB7XG4gICAgICAgICAgcmV0dXJuIHJ1bkVmZmVjdChlZmYsIGVmZmVjdElkLCBjdXJyQ2IpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBtaWRkbGV3YXJlKHBsYWluUnVuRWZmZWN0KShlZmZlY3QpO1xuICAgICAgfTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIGZpbmFsaXplUnVuRWZmZWN0ID0gaWRlbnRpdHk7XG4gIH1cblxuICB2YXIgZW52ID0ge1xuICAgIGNoYW5uZWw6IGNoYW5uZWwsXG4gICAgZGlzcGF0Y2g6IHdyYXBTYWdhRGlzcGF0Y2goZGlzcGF0Y2gpLFxuICAgIGdldFN0YXRlOiBnZXRTdGF0ZSxcbiAgICBzYWdhTW9uaXRvcjogc2FnYU1vbml0b3IsXG4gICAgb25FcnJvcjogb25FcnJvcixcbiAgICBmaW5hbGl6ZVJ1bkVmZmVjdDogZmluYWxpemVSdW5FZmZlY3RcbiAgfTtcbiAgcmV0dXJuIGltbWVkaWF0ZWx5KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdGFzayA9IHByb2MoZW52LCBpdGVyYXRvciQxLCBjb250ZXh0LCBlZmZlY3RJZCwgZ2V0TWV0YUluZm8oc2FnYSksXG4gICAgLyogaXNSb290ICovXG4gICAgdHJ1ZSwgdW5kZWZpbmVkKTtcblxuICAgIGlmIChzYWdhTW9uaXRvcikge1xuICAgICAgc2FnYU1vbml0b3IuZWZmZWN0UmVzb2x2ZWQoZWZmZWN0SWQsIHRhc2spO1xuICAgIH1cblxuICAgIHJldHVybiB0YXNrO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2FnYU1pZGRsZXdhcmVGYWN0b3J5KF90ZW1wKSB7XG4gIHZhciBfcmVmID0gX3RlbXAgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAsXG4gICAgICBfcmVmJGNvbnRleHQgPSBfcmVmLmNvbnRleHQsXG4gICAgICBjb250ZXh0ID0gX3JlZiRjb250ZXh0ID09PSB2b2lkIDAgPyB7fSA6IF9yZWYkY29udGV4dCxcbiAgICAgIF9yZWYkY2hhbm5lbCA9IF9yZWYuY2hhbm5lbCxcbiAgICAgIGNoYW5uZWwgPSBfcmVmJGNoYW5uZWwgPT09IHZvaWQgMCA/IHN0ZENoYW5uZWwoKSA6IF9yZWYkY2hhbm5lbCxcbiAgICAgIHNhZ2FNb25pdG9yID0gX3JlZi5zYWdhTW9uaXRvcixcbiAgICAgIG9wdGlvbnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBbXCJjb250ZXh0XCIsIFwiY2hhbm5lbFwiLCBcInNhZ2FNb25pdG9yXCJdKTtcblxuICB2YXIgYm91bmRSdW5TYWdhO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY2hlY2soY2hhbm5lbCwgY2hhbm5lbCQxLCAnb3B0aW9ucy5jaGFubmVsIHBhc3NlZCB0byB0aGUgU2FnYSBtaWRkbGV3YXJlIGlzIG5vdCBhIGNoYW5uZWwnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNhZ2FNaWRkbGV3YXJlKF9yZWYyKSB7XG4gICAgdmFyIGdldFN0YXRlID0gX3JlZjIuZ2V0U3RhdGUsXG4gICAgICAgIGRpc3BhdGNoID0gX3JlZjIuZGlzcGF0Y2g7XG4gICAgYm91bmRSdW5TYWdhID0gcnVuU2FnYS5iaW5kKG51bGwsIF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgY2hhbm5lbDogY2hhbm5lbCxcbiAgICAgIGRpc3BhdGNoOiBkaXNwYXRjaCxcbiAgICAgIGdldFN0YXRlOiBnZXRTdGF0ZSxcbiAgICAgIHNhZ2FNb25pdG9yOiBzYWdhTW9uaXRvclxuICAgIH0pKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIGlmIChzYWdhTW9uaXRvciAmJiBzYWdhTW9uaXRvci5hY3Rpb25EaXNwYXRjaGVkKSB7XG4gICAgICAgICAgc2FnYU1vbml0b3IuYWN0aW9uRGlzcGF0Y2hlZChhY3Rpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJlc3VsdCA9IG5leHQoYWN0aW9uKTsgLy8gaGl0IHJlZHVjZXJzXG5cbiAgICAgICAgY2hhbm5lbC5wdXQoYWN0aW9uKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH07XG4gICAgfTtcbiAgfVxuXG4gIHNhZ2FNaWRkbGV3YXJlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhYm91bmRSdW5TYWdhKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0JlZm9yZSBydW5uaW5nIGEgU2FnYSwgeW91IG11c3QgbW91bnQgdGhlIFNhZ2EgbWlkZGxld2FyZSBvbiB0aGUgU3RvcmUgdXNpbmcgYXBwbHlNaWRkbGV3YXJlJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJvdW5kUnVuU2FnYS5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgc2FnYU1pZGRsZXdhcmUuc2V0Q29udGV4dCA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjaGVjayhwcm9wcywgb2JqZWN0LCBjcmVhdGVTZXRDb250ZXh0V2FybmluZygnc2FnYU1pZGRsZXdhcmUnLCBwcm9wcykpO1xuICAgIH1cblxuICAgIGFzc2lnbldpdGhTeW1ib2xzKGNvbnRleHQsIHByb3BzKTtcbiAgfTtcblxuICByZXR1cm4gc2FnYU1pZGRsZXdhcmU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNhZ2FNaWRkbGV3YXJlRmFjdG9yeTtcbmV4cG9ydCB7IEVORCwgY2hhbm5lbCwgZXZlbnRDaGFubmVsLCBpc0VuZCwgbXVsdGljYXN0Q2hhbm5lbCwgcnVuU2FnYSwgc3RkQ2hhbm5lbCB9O1xuIiwiaW1wb3J0ICdAcmVkdXgtc2FnYS9zeW1ib2xzJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgeyBjaGFubmVsLCBzdHJpbmdhYmxlRnVuYywgZnVuYywgbm90VW5kZWYgfSBmcm9tICdAcmVkdXgtc2FnYS9pcyc7XG5pbXBvcnQgeyBxIGFzIG1ha2VJdGVyYXRvciwgSyBhcyB0YWtlLCBMIGFzIGZvcmssIE0gYXMgY2FuY2VsLCBOIGFzIGNhbGwsIE8gYXMgYWN0aW9uQ2hhbm5lbCwgUSBhcyBzbGlkaW5nLCBVIGFzIGRlbGF5LCBWIGFzIHJhY2UsIGMgYXMgY2hlY2sgfSBmcm9tICcuL2lvLTZkZTE1NmYzLmpzJztcbmV4cG9ydCB7IE8gYXMgYWN0aW9uQ2hhbm5lbCwgXyBhcyBhbGwsICQgYXMgYXBwbHksIE4gYXMgY2FsbCwgTSBhcyBjYW5jZWwsIGE0IGFzIGNhbmNlbGxlZCwgYTAgYXMgY3BzLCBVIGFzIGRlbGF5LCBXIGFzIGVmZmVjdFR5cGVzLCBhNSBhcyBmbHVzaCwgTCBhcyBmb3JrLCBhNiBhcyBnZXRDb250ZXh0LCBhMiBhcyBqb2luLCBZIGFzIHB1dCwgWiBhcyBwdXRSZXNvbHZlLCBWIGFzIHJhY2UsIGEzIGFzIHNlbGVjdCwgYTcgYXMgc2V0Q29udGV4dCwgYTEgYXMgc3Bhd24sIEsgYXMgdGFrZSwgWCBhcyB0YWtlTWF5YmUgfSBmcm9tICcuL2lvLTZkZTE1NmYzLmpzJztcbmltcG9ydCAnQHJlZHV4LXNhZ2EvZGVsYXktcCc7XG5cbnZhciBkb25lID0gZnVuY3Rpb24gZG9uZSh2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGRvbmU6IHRydWUsXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuXG52YXIgcUVuZCA9IHt9O1xuZnVuY3Rpb24gc2FmZU5hbWUocGF0dGVybk9yQ2hhbm5lbCkge1xuICBpZiAoY2hhbm5lbChwYXR0ZXJuT3JDaGFubmVsKSkge1xuICAgIHJldHVybiAnY2hhbm5lbCc7XG4gIH1cblxuICBpZiAoc3RyaW5nYWJsZUZ1bmMocGF0dGVybk9yQ2hhbm5lbCkpIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhdHRlcm5PckNoYW5uZWwpO1xuICB9XG5cbiAgaWYgKGZ1bmMocGF0dGVybk9yQ2hhbm5lbCkpIHtcbiAgICByZXR1cm4gcGF0dGVybk9yQ2hhbm5lbC5uYW1lO1xuICB9XG5cbiAgcmV0dXJuIFN0cmluZyhwYXR0ZXJuT3JDaGFubmVsKTtcbn1cbmZ1bmN0aW9uIGZzbUl0ZXJhdG9yKGZzbSwgc3RhcnRTdGF0ZSwgbmFtZSkge1xuICB2YXIgc3RhdGVVcGRhdGVyLFxuICAgICAgZXJyb3JTdGF0ZSxcbiAgICAgIGVmZmVjdCxcbiAgICAgIG5leHRTdGF0ZSA9IHN0YXJ0U3RhdGU7XG5cbiAgZnVuY3Rpb24gbmV4dChhcmcsIGVycm9yKSB7XG4gICAgaWYgKG5leHRTdGF0ZSA9PT0gcUVuZCkge1xuICAgICAgcmV0dXJuIGRvbmUoYXJnKTtcbiAgICB9XG5cbiAgICBpZiAoZXJyb3IgJiYgIWVycm9yU3RhdGUpIHtcbiAgICAgIG5leHRTdGF0ZSA9IHFFbmQ7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGVVcGRhdGVyICYmIHN0YXRlVXBkYXRlcihhcmcpO1xuICAgICAgdmFyIGN1cnJlbnRTdGF0ZSA9IGVycm9yID8gZnNtW2Vycm9yU3RhdGVdKGVycm9yKSA6IGZzbVtuZXh0U3RhdGVdKCk7XG4gICAgICBuZXh0U3RhdGUgPSBjdXJyZW50U3RhdGUubmV4dFN0YXRlO1xuICAgICAgZWZmZWN0ID0gY3VycmVudFN0YXRlLmVmZmVjdDtcbiAgICAgIHN0YXRlVXBkYXRlciA9IGN1cnJlbnRTdGF0ZS5zdGF0ZVVwZGF0ZXI7XG4gICAgICBlcnJvclN0YXRlID0gY3VycmVudFN0YXRlLmVycm9yU3RhdGU7XG4gICAgICByZXR1cm4gbmV4dFN0YXRlID09PSBxRW5kID8gZG9uZShhcmcpIDogZWZmZWN0O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtYWtlSXRlcmF0b3IobmV4dCwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgcmV0dXJuIG5leHQobnVsbCwgZXJyb3IpO1xuICB9LCBuYW1lKTtcbn1cblxuZnVuY3Rpb24gdGFrZUV2ZXJ5KHBhdHRlcm5PckNoYW5uZWwsIHdvcmtlcikge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMiA/IF9sZW4gLSAyIDogMCksIF9rZXkgPSAyOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgeVRha2UgPSB7XG4gICAgZG9uZTogZmFsc2UsXG4gICAgdmFsdWU6IHRha2UocGF0dGVybk9yQ2hhbm5lbClcbiAgfTtcblxuICB2YXIgeUZvcmsgPSBmdW5jdGlvbiB5Rm9yayhhYykge1xuICAgIHJldHVybiB7XG4gICAgICBkb25lOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBmb3JrLmFwcGx5KHZvaWQgMCwgW3dvcmtlcl0uY29uY2F0KGFyZ3MsIFthY10pKVxuICAgIH07XG4gIH07XG5cbiAgdmFyIGFjdGlvbixcbiAgICAgIHNldEFjdGlvbiA9IGZ1bmN0aW9uIHNldEFjdGlvbihhYykge1xuICAgIHJldHVybiBhY3Rpb24gPSBhYztcbiAgfTtcblxuICByZXR1cm4gZnNtSXRlcmF0b3Ioe1xuICAgIHExOiBmdW5jdGlvbiBxMSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5leHRTdGF0ZTogJ3EyJyxcbiAgICAgICAgZWZmZWN0OiB5VGFrZSxcbiAgICAgICAgc3RhdGVVcGRhdGVyOiBzZXRBY3Rpb25cbiAgICAgIH07XG4gICAgfSxcbiAgICBxMjogZnVuY3Rpb24gcTIoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXh0U3RhdGU6ICdxMScsXG4gICAgICAgIGVmZmVjdDogeUZvcmsoYWN0aW9uKVxuICAgICAgfTtcbiAgICB9XG4gIH0sICdxMScsIFwidGFrZUV2ZXJ5KFwiICsgc2FmZU5hbWUocGF0dGVybk9yQ2hhbm5lbCkgKyBcIiwgXCIgKyB3b3JrZXIubmFtZSArIFwiKVwiKTtcbn1cblxuZnVuY3Rpb24gdGFrZUxhdGVzdChwYXR0ZXJuT3JDaGFubmVsLCB3b3JrZXIpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDIgPyBfbGVuIC0gMiA6IDApLCBfa2V5ID0gMjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDJdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIHlUYWtlID0ge1xuICAgIGRvbmU6IGZhbHNlLFxuICAgIHZhbHVlOiB0YWtlKHBhdHRlcm5PckNoYW5uZWwpXG4gIH07XG5cbiAgdmFyIHlGb3JrID0gZnVuY3Rpb24geUZvcmsoYWMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZG9uZTogZmFsc2UsXG4gICAgICB2YWx1ZTogZm9yay5hcHBseSh2b2lkIDAsIFt3b3JrZXJdLmNvbmNhdChhcmdzLCBbYWNdKSlcbiAgICB9O1xuICB9O1xuXG4gIHZhciB5Q2FuY2VsID0gZnVuY3Rpb24geUNhbmNlbCh0YXNrKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgdmFsdWU6IGNhbmNlbCh0YXNrKVxuICAgIH07XG4gIH07XG5cbiAgdmFyIHRhc2ssIGFjdGlvbjtcblxuICB2YXIgc2V0VGFzayA9IGZ1bmN0aW9uIHNldFRhc2sodCkge1xuICAgIHJldHVybiB0YXNrID0gdDtcbiAgfTtcblxuICB2YXIgc2V0QWN0aW9uID0gZnVuY3Rpb24gc2V0QWN0aW9uKGFjKSB7XG4gICAgcmV0dXJuIGFjdGlvbiA9IGFjO1xuICB9O1xuXG4gIHJldHVybiBmc21JdGVyYXRvcih7XG4gICAgcTE6IGZ1bmN0aW9uIHExKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmV4dFN0YXRlOiAncTInLFxuICAgICAgICBlZmZlY3Q6IHlUYWtlLFxuICAgICAgICBzdGF0ZVVwZGF0ZXI6IHNldEFjdGlvblxuICAgICAgfTtcbiAgICB9LFxuICAgIHEyOiBmdW5jdGlvbiBxMigpIHtcbiAgICAgIHJldHVybiB0YXNrID8ge1xuICAgICAgICBuZXh0U3RhdGU6ICdxMycsXG4gICAgICAgIGVmZmVjdDogeUNhbmNlbCh0YXNrKVxuICAgICAgfSA6IHtcbiAgICAgICAgbmV4dFN0YXRlOiAncTEnLFxuICAgICAgICBlZmZlY3Q6IHlGb3JrKGFjdGlvbiksXG4gICAgICAgIHN0YXRlVXBkYXRlcjogc2V0VGFza1xuICAgICAgfTtcbiAgICB9LFxuICAgIHEzOiBmdW5jdGlvbiBxMygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5leHRTdGF0ZTogJ3ExJyxcbiAgICAgICAgZWZmZWN0OiB5Rm9yayhhY3Rpb24pLFxuICAgICAgICBzdGF0ZVVwZGF0ZXI6IHNldFRhc2tcbiAgICAgIH07XG4gICAgfVxuICB9LCAncTEnLCBcInRha2VMYXRlc3QoXCIgKyBzYWZlTmFtZShwYXR0ZXJuT3JDaGFubmVsKSArIFwiLCBcIiArIHdvcmtlci5uYW1lICsgXCIpXCIpO1xufVxuXG5mdW5jdGlvbiB0YWtlTGVhZGluZyhwYXR0ZXJuT3JDaGFubmVsLCB3b3JrZXIpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDIgPyBfbGVuIC0gMiA6IDApLCBfa2V5ID0gMjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDJdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIHlUYWtlID0ge1xuICAgIGRvbmU6IGZhbHNlLFxuICAgIHZhbHVlOiB0YWtlKHBhdHRlcm5PckNoYW5uZWwpXG4gIH07XG5cbiAgdmFyIHlDYWxsID0gZnVuY3Rpb24geUNhbGwoYWMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZG9uZTogZmFsc2UsXG4gICAgICB2YWx1ZTogY2FsbC5hcHBseSh2b2lkIDAsIFt3b3JrZXJdLmNvbmNhdChhcmdzLCBbYWNdKSlcbiAgICB9O1xuICB9O1xuXG4gIHZhciBhY3Rpb247XG5cbiAgdmFyIHNldEFjdGlvbiA9IGZ1bmN0aW9uIHNldEFjdGlvbihhYykge1xuICAgIHJldHVybiBhY3Rpb24gPSBhYztcbiAgfTtcblxuICByZXR1cm4gZnNtSXRlcmF0b3Ioe1xuICAgIHExOiBmdW5jdGlvbiBxMSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5leHRTdGF0ZTogJ3EyJyxcbiAgICAgICAgZWZmZWN0OiB5VGFrZSxcbiAgICAgICAgc3RhdGVVcGRhdGVyOiBzZXRBY3Rpb25cbiAgICAgIH07XG4gICAgfSxcbiAgICBxMjogZnVuY3Rpb24gcTIoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXh0U3RhdGU6ICdxMScsXG4gICAgICAgIGVmZmVjdDogeUNhbGwoYWN0aW9uKVxuICAgICAgfTtcbiAgICB9XG4gIH0sICdxMScsIFwidGFrZUxlYWRpbmcoXCIgKyBzYWZlTmFtZShwYXR0ZXJuT3JDaGFubmVsKSArIFwiLCBcIiArIHdvcmtlci5uYW1lICsgXCIpXCIpO1xufVxuXG5mdW5jdGlvbiB0aHJvdHRsZShkZWxheUxlbmd0aCwgcGF0dGVybiwgd29ya2VyKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAzID8gX2xlbiAtIDMgOiAwKSwgX2tleSA9IDM7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAzXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBhY3Rpb24sIGNoYW5uZWw7XG4gIHZhciB5QWN0aW9uQ2hhbm5lbCA9IHtcbiAgICBkb25lOiBmYWxzZSxcbiAgICB2YWx1ZTogYWN0aW9uQ2hhbm5lbChwYXR0ZXJuLCBzbGlkaW5nKDEpKVxuICB9O1xuXG4gIHZhciB5VGFrZSA9IGZ1bmN0aW9uIHlUYWtlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkb25lOiBmYWxzZSxcbiAgICAgIHZhbHVlOiB0YWtlKGNoYW5uZWwpXG4gICAgfTtcbiAgfTtcblxuICB2YXIgeUZvcmsgPSBmdW5jdGlvbiB5Rm9yayhhYykge1xuICAgIHJldHVybiB7XG4gICAgICBkb25lOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBmb3JrLmFwcGx5KHZvaWQgMCwgW3dvcmtlcl0uY29uY2F0KGFyZ3MsIFthY10pKVxuICAgIH07XG4gIH07XG5cbiAgdmFyIHlEZWxheSA9IHtcbiAgICBkb25lOiBmYWxzZSxcbiAgICB2YWx1ZTogZGVsYXkoZGVsYXlMZW5ndGgpXG4gIH07XG5cbiAgdmFyIHNldEFjdGlvbiA9IGZ1bmN0aW9uIHNldEFjdGlvbihhYykge1xuICAgIHJldHVybiBhY3Rpb24gPSBhYztcbiAgfTtcblxuICB2YXIgc2V0Q2hhbm5lbCA9IGZ1bmN0aW9uIHNldENoYW5uZWwoY2gpIHtcbiAgICByZXR1cm4gY2hhbm5lbCA9IGNoO1xuICB9O1xuXG4gIHJldHVybiBmc21JdGVyYXRvcih7XG4gICAgcTE6IGZ1bmN0aW9uIHExKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmV4dFN0YXRlOiAncTInLFxuICAgICAgICBlZmZlY3Q6IHlBY3Rpb25DaGFubmVsLFxuICAgICAgICBzdGF0ZVVwZGF0ZXI6IHNldENoYW5uZWxcbiAgICAgIH07XG4gICAgfSxcbiAgICBxMjogZnVuY3Rpb24gcTIoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXh0U3RhdGU6ICdxMycsXG4gICAgICAgIGVmZmVjdDogeVRha2UoKSxcbiAgICAgICAgc3RhdGVVcGRhdGVyOiBzZXRBY3Rpb25cbiAgICAgIH07XG4gICAgfSxcbiAgICBxMzogZnVuY3Rpb24gcTMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXh0U3RhdGU6ICdxNCcsXG4gICAgICAgIGVmZmVjdDogeUZvcmsoYWN0aW9uKVxuICAgICAgfTtcbiAgICB9LFxuICAgIHE0OiBmdW5jdGlvbiBxNCgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5leHRTdGF0ZTogJ3EyJyxcbiAgICAgICAgZWZmZWN0OiB5RGVsYXlcbiAgICAgIH07XG4gICAgfVxuICB9LCAncTEnLCBcInRocm90dGxlKFwiICsgc2FmZU5hbWUocGF0dGVybikgKyBcIiwgXCIgKyB3b3JrZXIubmFtZSArIFwiKVwiKTtcbn1cblxuZnVuY3Rpb24gcmV0cnkobWF4VHJpZXMsIGRlbGF5TGVuZ3RoLCBmbikge1xuICB2YXIgY291bnRlciA9IG1heFRyaWVzO1xuXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAzID8gX2xlbiAtIDMgOiAwKSwgX2tleSA9IDM7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAzXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciB5Q2FsbCA9IHtcbiAgICBkb25lOiBmYWxzZSxcbiAgICB2YWx1ZTogY2FsbC5hcHBseSh2b2lkIDAsIFtmbl0uY29uY2F0KGFyZ3MpKVxuICB9O1xuICB2YXIgeURlbGF5ID0ge1xuICAgIGRvbmU6IGZhbHNlLFxuICAgIHZhbHVlOiBkZWxheShkZWxheUxlbmd0aClcbiAgfTtcbiAgcmV0dXJuIGZzbUl0ZXJhdG9yKHtcbiAgICBxMTogZnVuY3Rpb24gcTEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXh0U3RhdGU6ICdxMicsXG4gICAgICAgIGVmZmVjdDogeUNhbGwsXG4gICAgICAgIGVycm9yU3RhdGU6ICdxMTAnXG4gICAgICB9O1xuICAgIH0sXG4gICAgcTI6IGZ1bmN0aW9uIHEyKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmV4dFN0YXRlOiBxRW5kXG4gICAgICB9O1xuICAgIH0sXG4gICAgcTEwOiBmdW5jdGlvbiBxMTAoZXJyb3IpIHtcbiAgICAgIGNvdW50ZXIgLT0gMTtcblxuICAgICAgaWYgKGNvdW50ZXIgPD0gMCkge1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmV4dFN0YXRlOiAncTEnLFxuICAgICAgICBlZmZlY3Q6IHlEZWxheVxuICAgICAgfTtcbiAgICB9XG4gIH0sICdxMScsIFwicmV0cnkoXCIgKyBmbi5uYW1lICsgXCIpXCIpO1xufVxuXG5mdW5jdGlvbiBkZWJvdW5jZUhlbHBlcihkZWxheUxlbmd0aCwgcGF0dGVybk9yQ2hhbm5lbCwgd29ya2VyKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAzID8gX2xlbiAtIDMgOiAwKSwgX2tleSA9IDM7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAzXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBhY3Rpb24sIHJhY2VPdXRwdXQ7XG4gIHZhciB5VGFrZSA9IHtcbiAgICBkb25lOiBmYWxzZSxcbiAgICB2YWx1ZTogdGFrZShwYXR0ZXJuT3JDaGFubmVsKVxuICB9O1xuICB2YXIgeVJhY2UgPSB7XG4gICAgZG9uZTogZmFsc2UsXG4gICAgdmFsdWU6IHJhY2Uoe1xuICAgICAgYWN0aW9uOiB0YWtlKHBhdHRlcm5PckNoYW5uZWwpLFxuICAgICAgZGVib3VuY2U6IGRlbGF5KGRlbGF5TGVuZ3RoKVxuICAgIH0pXG4gIH07XG5cbiAgdmFyIHlGb3JrID0gZnVuY3Rpb24geUZvcmsoYWMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZG9uZTogZmFsc2UsXG4gICAgICB2YWx1ZTogZm9yay5hcHBseSh2b2lkIDAsIFt3b3JrZXJdLmNvbmNhdChhcmdzLCBbYWNdKSlcbiAgICB9O1xuICB9O1xuXG4gIHZhciB5Tm9vcCA9IGZ1bmN0aW9uIHlOb29wKHZhbHVlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHZhbHVlXG4gICAgfTtcbiAgfTtcblxuICB2YXIgc2V0QWN0aW9uID0gZnVuY3Rpb24gc2V0QWN0aW9uKGFjKSB7XG4gICAgcmV0dXJuIGFjdGlvbiA9IGFjO1xuICB9O1xuXG4gIHZhciBzZXRSYWNlT3V0cHV0ID0gZnVuY3Rpb24gc2V0UmFjZU91dHB1dChybykge1xuICAgIHJldHVybiByYWNlT3V0cHV0ID0gcm87XG4gIH07XG5cbiAgcmV0dXJuIGZzbUl0ZXJhdG9yKHtcbiAgICBxMTogZnVuY3Rpb24gcTEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXh0U3RhdGU6ICdxMicsXG4gICAgICAgIGVmZmVjdDogeVRha2UsXG4gICAgICAgIHN0YXRlVXBkYXRlcjogc2V0QWN0aW9uXG4gICAgICB9O1xuICAgIH0sXG4gICAgcTI6IGZ1bmN0aW9uIHEyKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmV4dFN0YXRlOiAncTMnLFxuICAgICAgICBlZmZlY3Q6IHlSYWNlLFxuICAgICAgICBzdGF0ZVVwZGF0ZXI6IHNldFJhY2VPdXRwdXRcbiAgICAgIH07XG4gICAgfSxcbiAgICBxMzogZnVuY3Rpb24gcTMoKSB7XG4gICAgICByZXR1cm4gcmFjZU91dHB1dC5kZWJvdW5jZSA/IHtcbiAgICAgICAgbmV4dFN0YXRlOiAncTEnLFxuICAgICAgICBlZmZlY3Q6IHlGb3JrKGFjdGlvbilcbiAgICAgIH0gOiB7XG4gICAgICAgIG5leHRTdGF0ZTogJ3EyJyxcbiAgICAgICAgZWZmZWN0OiB5Tm9vcChyYWNlT3V0cHV0LmFjdGlvbiksXG4gICAgICAgIHN0YXRlVXBkYXRlcjogc2V0QWN0aW9uXG4gICAgICB9O1xuICAgIH1cbiAgfSwgJ3ExJywgXCJkZWJvdW5jZShcIiArIHNhZmVOYW1lKHBhdHRlcm5PckNoYW5uZWwpICsgXCIsIFwiICsgd29ya2VyLm5hbWUgKyBcIilcIik7XG59XG5cbnZhciB2YWxpZGF0ZVRha2VFZmZlY3QgPSBmdW5jdGlvbiB2YWxpZGF0ZVRha2VFZmZlY3QoZm4sIHBhdHRlcm5PckNoYW5uZWwsIHdvcmtlcikge1xuICBjaGVjayhwYXR0ZXJuT3JDaGFubmVsLCBub3RVbmRlZiwgZm4ubmFtZSArIFwiIHJlcXVpcmVzIGEgcGF0dGVybiBvciBjaGFubmVsXCIpO1xuICBjaGVjayh3b3JrZXIsIG5vdFVuZGVmLCBmbi5uYW1lICsgXCIgcmVxdWlyZXMgYSBzYWdhIHBhcmFtZXRlclwiKTtcbn07XG5cbmZ1bmN0aW9uIHRha2VFdmVyeSQxKHBhdHRlcm5PckNoYW5uZWwsIHdvcmtlcikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHZhbGlkYXRlVGFrZUVmZmVjdCh0YWtlRXZlcnkkMSwgcGF0dGVybk9yQ2hhbm5lbCwgd29ya2VyKTtcbiAgfVxuXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSwgX2tleSA9IDI7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBmb3JrLmFwcGx5KHZvaWQgMCwgW3Rha2VFdmVyeSwgcGF0dGVybk9yQ2hhbm5lbCwgd29ya2VyXS5jb25jYXQoYXJncykpO1xufVxuZnVuY3Rpb24gdGFrZUxhdGVzdCQxKHBhdHRlcm5PckNoYW5uZWwsIHdvcmtlcikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHZhbGlkYXRlVGFrZUVmZmVjdCh0YWtlTGF0ZXN0JDEsIHBhdHRlcm5PckNoYW5uZWwsIHdvcmtlcik7XG4gIH1cblxuICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAyID8gX2xlbjIgLSAyIDogMCksIF9rZXkyID0gMjsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgIGFyZ3NbX2tleTIgLSAyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gIH1cblxuICByZXR1cm4gZm9yay5hcHBseSh2b2lkIDAsIFt0YWtlTGF0ZXN0LCBwYXR0ZXJuT3JDaGFubmVsLCB3b3JrZXJdLmNvbmNhdChhcmdzKSk7XG59XG5mdW5jdGlvbiB0YWtlTGVhZGluZyQxKHBhdHRlcm5PckNoYW5uZWwsIHdvcmtlcikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHZhbGlkYXRlVGFrZUVmZmVjdCh0YWtlTGVhZGluZyQxLCBwYXR0ZXJuT3JDaGFubmVsLCB3b3JrZXIpO1xuICB9XG5cbiAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4zID4gMiA/IF9sZW4zIC0gMiA6IDApLCBfa2V5MyA9IDI7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICBhcmdzW19rZXkzIC0gMl0gPSBhcmd1bWVudHNbX2tleTNdO1xuICB9XG5cbiAgcmV0dXJuIGZvcmsuYXBwbHkodm9pZCAwLCBbdGFrZUxlYWRpbmcsIHBhdHRlcm5PckNoYW5uZWwsIHdvcmtlcl0uY29uY2F0KGFyZ3MpKTtcbn1cbmZ1bmN0aW9uIHRocm90dGxlJDEobXMsIHBhdHRlcm4sIHdvcmtlcikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNoZWNrKHBhdHRlcm4sIG5vdFVuZGVmLCAndGhyb3R0bGUgcmVxdWlyZXMgYSBwYXR0ZXJuJyk7XG4gICAgY2hlY2sod29ya2VyLCBub3RVbmRlZiwgJ3Rocm90dGxlIHJlcXVpcmVzIGEgc2FnYSBwYXJhbWV0ZXInKTtcbiAgfVxuXG4gIGZvciAodmFyIF9sZW40ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNCA+IDMgPyBfbGVuNCAtIDMgOiAwKSwgX2tleTQgPSAzOyBfa2V5NCA8IF9sZW40OyBfa2V5NCsrKSB7XG4gICAgYXJnc1tfa2V5NCAtIDNdID0gYXJndW1lbnRzW19rZXk0XTtcbiAgfVxuXG4gIHJldHVybiBmb3JrLmFwcGx5KHZvaWQgMCwgW3Rocm90dGxlLCBtcywgcGF0dGVybiwgd29ya2VyXS5jb25jYXQoYXJncykpO1xufVxuZnVuY3Rpb24gcmV0cnkkMShtYXhUcmllcywgZGVsYXlMZW5ndGgsIHdvcmtlcikge1xuICBmb3IgKHZhciBfbGVuNSA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjUgPiAzID8gX2xlbjUgLSAzIDogMCksIF9rZXk1ID0gMzsgX2tleTUgPCBfbGVuNTsgX2tleTUrKykge1xuICAgIGFyZ3NbX2tleTUgLSAzXSA9IGFyZ3VtZW50c1tfa2V5NV07XG4gIH1cblxuICByZXR1cm4gY2FsbC5hcHBseSh2b2lkIDAsIFtyZXRyeSwgbWF4VHJpZXMsIGRlbGF5TGVuZ3RoLCB3b3JrZXJdLmNvbmNhdChhcmdzKSk7XG59XG5mdW5jdGlvbiBkZWJvdW5jZShkZWxheUxlbmd0aCwgcGF0dGVybiwgd29ya2VyKSB7XG4gIGZvciAodmFyIF9sZW42ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNiA+IDMgPyBfbGVuNiAtIDMgOiAwKSwgX2tleTYgPSAzOyBfa2V5NiA8IF9sZW42OyBfa2V5NisrKSB7XG4gICAgYXJnc1tfa2V5NiAtIDNdID0gYXJndW1lbnRzW19rZXk2XTtcbiAgfVxuXG4gIHJldHVybiBmb3JrLmFwcGx5KHZvaWQgMCwgW2RlYm91bmNlSGVscGVyLCBkZWxheUxlbmd0aCwgcGF0dGVybiwgd29ya2VyXS5jb25jYXQoYXJncykpO1xufVxuXG5leHBvcnQgeyBkZWJvdW5jZSwgcmV0cnkkMSBhcyByZXRyeSwgdGFrZUV2ZXJ5JDEgYXMgdGFrZUV2ZXJ5LCB0YWtlTGF0ZXN0JDEgYXMgdGFrZUxhdGVzdCwgdGFrZUxlYWRpbmckMSBhcyB0YWtlTGVhZGluZywgdGhyb3R0bGUkMSBhcyB0aHJvdHRsZSB9O1xuIiwiZnVuY3Rpb24gZGVmZXJyZWQoKSB7XG4gIHZhciBkZWYgPSB7fTtcbiAgZGVmLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgZGVmLnJlc29sdmUgPSByZXNvbHZlO1xuICAgIGRlZi5yZWplY3QgPSByZWplY3Q7XG4gIH0pO1xuICByZXR1cm4gZGVmO1xufVxuZnVuY3Rpb24gYXJyYXlPZkRlZmVycmVkKGxlbmd0aCkge1xuICB2YXIgYXJyID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGFyci5wdXNoKGRlZmVycmVkKCkpO1xuICB9XG5cbiAgcmV0dXJuIGFycjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVmZXJyZWQ7XG5leHBvcnQgeyBhcnJheU9mRGVmZXJyZWQgfTtcbiIsImltcG9ydCB7IENBTkNFTCB9IGZyb20gJ0ByZWR1eC1zYWdhL3N5bWJvbHMnO1xuXG5mdW5jdGlvbiBkZWxheVAobXMsIHZhbCkge1xuICBpZiAodmFsID09PSB2b2lkIDApIHtcbiAgICB2YWwgPSB0cnVlO1xuICB9XG5cbiAgdmFyIHRpbWVvdXRJZDtcbiAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMsIHZhbCk7XG4gIH0pO1xuXG4gIHByb21pc2VbQ0FOQ0VMXSA9IGZ1bmN0aW9uICgpIHtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgfTtcblxuICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVsYXlQO1xuIiwiaW1wb3J0IHsgVEFTSywgU0FHQV9BQ1RJT04sIE1VTFRJQ0FTVCwgSU8gfSBmcm9tICdAcmVkdXgtc2FnYS9zeW1ib2xzJztcblxudmFyIHVuZGVmID0gZnVuY3Rpb24gdW5kZWYodikge1xuICByZXR1cm4gdiA9PT0gbnVsbCB8fCB2ID09PSB1bmRlZmluZWQ7XG59O1xudmFyIG5vdFVuZGVmID0gZnVuY3Rpb24gbm90VW5kZWYodikge1xuICByZXR1cm4gdiAhPT0gbnVsbCAmJiB2ICE9PSB1bmRlZmluZWQ7XG59O1xudmFyIGZ1bmMgPSBmdW5jdGlvbiBmdW5jKGYpIHtcbiAgcmV0dXJuIHR5cGVvZiBmID09PSAnZnVuY3Rpb24nO1xufTtcbnZhciBudW1iZXIgPSBmdW5jdGlvbiBudW1iZXIobikge1xuICByZXR1cm4gdHlwZW9mIG4gPT09ICdudW1iZXInO1xufTtcbnZhciBzdHJpbmcgPSBmdW5jdGlvbiBzdHJpbmcocykge1xuICByZXR1cm4gdHlwZW9mIHMgPT09ICdzdHJpbmcnO1xufTtcbnZhciBhcnJheSA9IEFycmF5LmlzQXJyYXk7XG52YXIgb2JqZWN0ID0gZnVuY3Rpb24gb2JqZWN0KG9iaikge1xuICByZXR1cm4gb2JqICYmICFhcnJheShvYmopICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xufTtcbnZhciBwcm9taXNlID0gZnVuY3Rpb24gcHJvbWlzZShwKSB7XG4gIHJldHVybiBwICYmIGZ1bmMocC50aGVuKTtcbn07XG52YXIgaXRlcmF0b3IgPSBmdW5jdGlvbiBpdGVyYXRvcihpdCkge1xuICByZXR1cm4gaXQgJiYgZnVuYyhpdC5uZXh0KSAmJiBmdW5jKGl0LnRocm93KTtcbn07XG52YXIgaXRlcmFibGUgPSBmdW5jdGlvbiBpdGVyYWJsZShpdCkge1xuICByZXR1cm4gaXQgJiYgZnVuYyhTeW1ib2wpID8gZnVuYyhpdFtTeW1ib2wuaXRlcmF0b3JdKSA6IGFycmF5KGl0KTtcbn07XG52YXIgdGFzayA9IGZ1bmN0aW9uIHRhc2sodCkge1xuICByZXR1cm4gdCAmJiB0W1RBU0tdO1xufTtcbnZhciBzYWdhQWN0aW9uID0gZnVuY3Rpb24gc2FnYUFjdGlvbihhKSB7XG4gIHJldHVybiBCb29sZWFuKGEgJiYgYVtTQUdBX0FDVElPTl0pO1xufTtcbnZhciBvYnNlcnZhYmxlID0gZnVuY3Rpb24gb2JzZXJ2YWJsZShvYikge1xuICByZXR1cm4gb2IgJiYgZnVuYyhvYi5zdWJzY3JpYmUpO1xufTtcbnZhciBidWZmZXIgPSBmdW5jdGlvbiBidWZmZXIoYnVmKSB7XG4gIHJldHVybiBidWYgJiYgZnVuYyhidWYuaXNFbXB0eSkgJiYgZnVuYyhidWYudGFrZSkgJiYgZnVuYyhidWYucHV0KTtcbn07XG52YXIgcGF0dGVybiA9IGZ1bmN0aW9uIHBhdHRlcm4ocGF0KSB7XG4gIHJldHVybiBwYXQgJiYgKHN0cmluZyhwYXQpIHx8IHN5bWJvbChwYXQpIHx8IGZ1bmMocGF0KSB8fCBhcnJheShwYXQpICYmIHBhdC5ldmVyeShwYXR0ZXJuKSk7XG59O1xudmFyIGNoYW5uZWwgPSBmdW5jdGlvbiBjaGFubmVsKGNoKSB7XG4gIHJldHVybiBjaCAmJiBmdW5jKGNoLnRha2UpICYmIGZ1bmMoY2guY2xvc2UpO1xufTtcbnZhciBzdHJpbmdhYmxlRnVuYyA9IGZ1bmN0aW9uIHN0cmluZ2FibGVGdW5jKGYpIHtcbiAgcmV0dXJuIGZ1bmMoZikgJiYgZi5oYXNPd25Qcm9wZXJ0eSgndG9TdHJpbmcnKTtcbn07XG52YXIgc3ltYm9sID0gZnVuY3Rpb24gc3ltYm9sKHN5bSkge1xuICByZXR1cm4gQm9vbGVhbihzeW0pICYmIHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgc3ltLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgc3ltICE9PSBTeW1ib2wucHJvdG90eXBlO1xufTtcbnZhciBtdWx0aWNhc3QgPSBmdW5jdGlvbiBtdWx0aWNhc3QoY2gpIHtcbiAgcmV0dXJuIGNoYW5uZWwoY2gpICYmIGNoW01VTFRJQ0FTVF07XG59O1xudmFyIGVmZmVjdCA9IGZ1bmN0aW9uIGVmZmVjdChlZmYpIHtcbiAgcmV0dXJuIGVmZiAmJiBlZmZbSU9dO1xufTtcblxuZXhwb3J0IHsgYXJyYXksIGJ1ZmZlciwgY2hhbm5lbCwgZWZmZWN0LCBmdW5jLCBpdGVyYWJsZSwgaXRlcmF0b3IsIG11bHRpY2FzdCwgbm90VW5kZWYsIG51bWJlciwgb2JqZWN0LCBvYnNlcnZhYmxlLCBwYXR0ZXJuLCBwcm9taXNlLCBzYWdhQWN0aW9uLCBzdHJpbmcsIHN0cmluZ2FibGVGdW5jLCBzeW1ib2wsIHRhc2ssIHVuZGVmIH07XG4iLCJ2YXIgY3JlYXRlU3ltYm9sID0gZnVuY3Rpb24gY3JlYXRlU3ltYm9sKG5hbWUpIHtcbiAgcmV0dXJuIFwiQEByZWR1eC1zYWdhL1wiICsgbmFtZTtcbn07XG5cbnZhciBDQU5DRUwgPVxuLyojX19QVVJFX18qL1xuY3JlYXRlU3ltYm9sKCdDQU5DRUxfUFJPTUlTRScpO1xudmFyIENIQU5ORUxfRU5EX1RZUEUgPVxuLyojX19QVVJFX18qL1xuY3JlYXRlU3ltYm9sKCdDSEFOTkVMX0VORCcpO1xudmFyIElPID1cbi8qI19fUFVSRV9fKi9cbmNyZWF0ZVN5bWJvbCgnSU8nKTtcbnZhciBNQVRDSCA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVTeW1ib2woJ01BVENIJyk7XG52YXIgTVVMVElDQVNUID1cbi8qI19fUFVSRV9fKi9cbmNyZWF0ZVN5bWJvbCgnTVVMVElDQVNUJyk7XG52YXIgU0FHQV9BQ1RJT04gPVxuLyojX19QVVJFX18qL1xuY3JlYXRlU3ltYm9sKCdTQUdBX0FDVElPTicpO1xudmFyIFNFTEZfQ0FOQ0VMTEFUSU9OID1cbi8qI19fUFVSRV9fKi9cbmNyZWF0ZVN5bWJvbCgnU0VMRl9DQU5DRUxMQVRJT04nKTtcbnZhciBUQVNLID1cbi8qI19fUFVSRV9fKi9cbmNyZWF0ZVN5bWJvbCgnVEFTSycpO1xudmFyIFRBU0tfQ0FOQ0VMID1cbi8qI19fUFVSRV9fKi9cbmNyZWF0ZVN5bWJvbCgnVEFTS19DQU5DRUwnKTtcbnZhciBURVJNSU5BVEUgPVxuLyojX19QVVJFX18qL1xuY3JlYXRlU3ltYm9sKCdURVJNSU5BVEUnKTtcbnZhciBTQUdBX0xPQ0FUSU9OID1cbi8qI19fUFVSRV9fKi9cbmNyZWF0ZVN5bWJvbCgnTE9DQVRJT04nKTtcblxuZXhwb3J0IHsgQ0FOQ0VMLCBDSEFOTkVMX0VORF9UWVBFLCBJTywgTUFUQ0gsIE1VTFRJQ0FTVCwgU0FHQV9BQ1RJT04sIFNBR0FfTE9DQVRJT04sIFNFTEZfQ0FOQ0VMTEFUSU9OLCBUQVNLLCBUQVNLX0NBTkNFTCwgVEVSTUlOQVRFIH07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciByZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuLyoqXG4gKiBDb3B5cmlnaHQgMjAxNSwgWWFob28hIEluYy5cbiAqIENvcHlyaWdodHMgbGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgTGljZW5zZS4gU2VlIHRoZSBhY2NvbXBhbnlpbmcgTElDRU5TRSBmaWxlIGZvciB0ZXJtcy5cbiAqL1xudmFyIFJFQUNUX1NUQVRJQ1MgPSB7XG4gIGNoaWxkQ29udGV4dFR5cGVzOiB0cnVlLFxuICBjb250ZXh0VHlwZTogdHJ1ZSxcbiAgY29udGV4dFR5cGVzOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBnZXREZWZhdWx0UHJvcHM6IHRydWUsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcjogdHJ1ZSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzOiB0cnVlLFxuICBtaXhpbnM6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZSxcbiAgdHlwZTogdHJ1ZVxufTtcbnZhciBLTk9XTl9TVEFUSUNTID0ge1xuICBuYW1lOiB0cnVlLFxuICBsZW5ndGg6IHRydWUsXG4gIHByb3RvdHlwZTogdHJ1ZSxcbiAgY2FsbGVyOiB0cnVlLFxuICBjYWxsZWU6IHRydWUsXG4gIGFyZ3VtZW50czogdHJ1ZSxcbiAgYXJpdHk6IHRydWVcbn07XG52YXIgRk9SV0FSRF9SRUZfU1RBVElDUyA9IHtcbiAgJyQkdHlwZW9mJzogdHJ1ZSxcbiAgcmVuZGVyOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWVcbn07XG52YXIgTUVNT19TVEFUSUNTID0ge1xuICAnJCR0eXBlb2YnOiB0cnVlLFxuICBjb21wYXJlOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWUsXG4gIHR5cGU6IHRydWVcbn07XG52YXIgVFlQRV9TVEFUSUNTID0ge307XG5UWVBFX1NUQVRJQ1NbcmVhY3RJcy5Gb3J3YXJkUmVmXSA9IEZPUldBUkRfUkVGX1NUQVRJQ1M7XG5UWVBFX1NUQVRJQ1NbcmVhY3RJcy5NZW1vXSA9IE1FTU9fU1RBVElDUztcblxuZnVuY3Rpb24gZ2V0U3RhdGljcyhjb21wb25lbnQpIHtcbiAgLy8gUmVhY3QgdjE2LjExIGFuZCBiZWxvd1xuICBpZiAocmVhY3RJcy5pc01lbW8oY29tcG9uZW50KSkge1xuICAgIHJldHVybiBNRU1PX1NUQVRJQ1M7XG4gIH0gLy8gUmVhY3QgdjE2LjEyIGFuZCBhYm92ZVxuXG5cbiAgcmV0dXJuIFRZUEVfU1RBVElDU1tjb21wb25lbnRbJyQkdHlwZW9mJ11dIHx8IFJFQUNUX1NUQVRJQ1M7XG59XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xudmFyIG9iamVjdFByb3RvdHlwZSA9IE9iamVjdC5wcm90b3R5cGU7XG5mdW5jdGlvbiBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIHNvdXJjZUNvbXBvbmVudCwgYmxhY2tsaXN0KSB7XG4gIGlmICh0eXBlb2Ygc291cmNlQ29tcG9uZW50ICE9PSAnc3RyaW5nJykge1xuICAgIC8vIGRvbid0IGhvaXN0IG92ZXIgc3RyaW5nIChodG1sKSBjb21wb25lbnRzXG4gICAgaWYgKG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgdmFyIGluaGVyaXRlZENvbXBvbmVudCA9IGdldFByb3RvdHlwZU9mKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICAgIGlmIChpbmhlcml0ZWRDb21wb25lbnQgJiYgaW5oZXJpdGVkQ29tcG9uZW50ICE9PSBvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgICAgaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBpbmhlcml0ZWRDb21wb25lbnQsIGJsYWNrbGlzdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICBpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICBrZXlzID0ga2V5cy5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZUNvbXBvbmVudCkpO1xuICAgIH1cblxuICAgIHZhciB0YXJnZXRTdGF0aWNzID0gZ2V0U3RhdGljcyh0YXJnZXRDb21wb25lbnQpO1xuICAgIHZhciBzb3VyY2VTdGF0aWNzID0gZ2V0U3RhdGljcyhzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKCFLTk9XTl9TVEFUSUNTW2tleV0gJiYgIShibGFja2xpc3QgJiYgYmxhY2tsaXN0W2tleV0pICYmICEoc291cmNlU3RhdGljcyAmJiBzb3VyY2VTdGF0aWNzW2tleV0pICYmICEodGFyZ2V0U3RhdGljcyAmJiB0YXJnZXRTdGF0aWNzW2tleV0pKSB7XG4gICAgICAgIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZUNvbXBvbmVudCwga2V5KTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIEF2b2lkIGZhaWx1cmVzIGZyb20gcmVhZC1vbmx5IHByb3BlcnRpZXNcbiAgICAgICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXRDb21wb25lbnQsIGtleSwgZGVzY3JpcHRvcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldENvbXBvbmVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBob2lzdE5vblJlYWN0U3RhdGljcztcbiIsInZhciBlLHQ9KGU9cmVxdWlyZShcInF1ZXJ5c3RyaW5nXCIpKSYmXCJvYmplY3RcIj09dHlwZW9mIGUmJlwiZGVmYXVsdFwiaW4gZT9lLmRlZmF1bHQ6ZSxyPS9odHRwcz98ZnRwfGdvcGhlcnxmaWxlLztmdW5jdGlvbiBvKGUpe1wic3RyaW5nXCI9PXR5cGVvZiBlJiYoZT1nKGUpKTt2YXIgbz1mdW5jdGlvbihlLHQscil7dmFyIG89ZS5hdXRoLGE9ZS5ob3N0bmFtZSxzPWUucHJvdG9jb2x8fFwiXCIsYz1lLnBhdGhuYW1lfHxcIlwiLGg9ZS5oYXNofHxcIlwiLHA9ZS5xdWVyeXx8XCJcIixuPSExO289bz9lbmNvZGVVUklDb21wb25lbnQobykucmVwbGFjZSgvJTNBL2ksXCI6XCIpK1wiQFwiOlwiXCIsZS5ob3N0P249bytlLmhvc3Q6YSYmKG49bysofmEuaW5kZXhPZihcIjpcIik/XCJbXCIrYStcIl1cIjphKSxlLnBvcnQmJihuKz1cIjpcIitlLnBvcnQpKSxwJiZcIm9iamVjdFwiPT10eXBlb2YgcCYmKHA9dC5lbmNvZGUocCkpO3ZhciBsPWUuc2VhcmNofHxwJiZcIj9cIitwfHxcIlwiO3JldHVybiBzJiZcIjpcIiE9PXMuc3Vic3RyKC0xKSYmKHMrPVwiOlwiKSxlLnNsYXNoZXN8fCghc3x8ci50ZXN0KHMpKSYmITEhPT1uPyhuPVwiLy9cIisobnx8XCJcIiksYyYmXCIvXCIhPT1jWzBdJiYoYz1cIi9cIitjKSk6bnx8KG49XCJcIiksaCYmXCIjXCIhPT1oWzBdJiYoaD1cIiNcIitoKSxsJiZcIj9cIiE9PWxbMF0mJihsPVwiP1wiK2wpLHtwcm90b2NvbDpzLGhvc3Q6bixwYXRobmFtZTpjPWMucmVwbGFjZSgvWz8jXS9nLGVuY29kZVVSSUNvbXBvbmVudCksc2VhcmNoOmw9bC5yZXBsYWNlKFwiI1wiLFwiJTIzXCIpLGhhc2g6aH19KGUsdCxyKTtyZXR1cm5cIlwiK28ucHJvdG9jb2wrby5ob3N0K28ucGF0aG5hbWUrby5zZWFyY2grby5oYXNofXZhciBhPVwiaHR0cDovL1wiLHM9XCJ3LndcIixjPWErcyxoPS9eKFthLXowLTkuKy1dKjpcXC9cXC9cXC8pKFthLXowLTkuKy1dOlxcLyopPy9pLHA9L2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvO2Z1bmN0aW9uIG4oZSx0KXt2YXIgcj1cInN0cmluZ1wiPT10eXBlb2YgZT9nKGUpOmU7ZT1cIm9iamVjdFwiPT10eXBlb2YgZT9vKGUpOmU7dmFyIHM9Zyh0KSxuPVwiXCI7ci5wcm90b2NvbCYmIXIuc2xhc2hlcyYmKG49ci5wcm90b2NvbCxlPWUucmVwbGFjZShyLnByb3RvY29sLFwiXCIpLG4rPVwiL1wiPT09dFswXXx8XCIvXCI9PT1lWzBdP1wiL1wiOlwiXCIpLG4mJnMucHJvdG9jb2wmJihuPVwiXCIscy5zbGFzaGVzfHwobj1zLnByb3RvY29sLHQ9dC5yZXBsYWNlKHMucHJvdG9jb2wsXCJcIikpKTt2YXIgbD1lLm1hdGNoKGgpO2wmJiFzLnByb3RvY29sJiYoZT1lLnN1YnN0cigobj1sWzFdKyhsWzJdfHxcIlwiKSkubGVuZ3RoKSwvXlxcL1xcL1teL10vLnRlc3QodCkmJihuPW4uc2xpY2UoMCwtMSkpKTt2YXIgaT1uZXcgVVJMKGUsYytcIi9cIiksZj1uZXcgVVJMKHQsaSkudG9TdHJpbmcoKS5yZXBsYWNlKGMsXCJcIiksdT1zLnByb3RvY29sfHxyLnByb3RvY29sO3JldHVybiB1Kz1yLnNsYXNoZXN8fHMuc2xhc2hlcz9cIi8vXCI6XCJcIiwhbiYmdT9mPWYucmVwbGFjZShhLHUpOm4mJihmPWYucmVwbGFjZShhLFwiXCIpKSxwLnRlc3QoZil8fH50LmluZGV4T2YoXCIuXCIpfHxcIi9cIj09PWUuc2xpY2UoLTEpfHxcIi9cIj09PXQuc2xpY2UoLTEpfHxcIi9cIiE9PWYuc2xpY2UoLTEpfHwoZj1mLnNsaWNlKDAsLTEpKSxuJiYoZj1uKyhcIi9cIj09PWZbMF0/Zi5zdWJzdHIoMSk6ZikpLGZ9ZnVuY3Rpb24gbCgpe31sLnBhcnNlPWcsbC5mb3JtYXQ9byxsLnJlc29sdmU9bixsLnJlc29sdmVPYmplY3Q9bjt2YXIgaT0vXmh0dHBzP3xmdHB8Z29waGVyfGZpbGUvLGY9L14oLio/KShbIz9dLiopLyx1PS9eKFthLXowLTkuKy1dKjopKFxcL3swLDN9KSguKikvaSxtPS9eKFthLXowLTkuKy1dKjopP1xcL1xcL1xcLyovaSx2PS9eKFthLXowLTkuKy1dKjopKFxcL3swLDJ9KVxcWyguKilcXF0kL2k7ZnVuY3Rpb24gZChlKXt0cnl7cmV0dXJuIGRlY29kZVVSSShlKX1jYXRjaCh0KXtyZXR1cm4gZX19ZnVuY3Rpb24gZyhlLHIsYSl7aWYodm9pZCAwPT09ciYmKHI9ITEpLHZvaWQgMD09PWEmJihhPSExKSxlJiZcIm9iamVjdFwiPT10eXBlb2YgZSYmZSBpbnN0YW5jZW9mIGwpcmV0dXJuIGU7dmFyIGg9KGU9ZS50cmltKCkpLm1hdGNoKGYpO2U9aD9kKGhbMV0pLnJlcGxhY2UoL1xcXFwvZyxcIi9cIikraFsyXTpkKGUpLnJlcGxhY2UoL1xcXFwvZyxcIi9cIiksdi50ZXN0KGUpJiZcIi9cIiE9PWUuc2xpY2UoLTEpJiYoZSs9XCIvXCIpO3ZhciBwPSEvKF5qYXZhc2NyaXB0KS8udGVzdChlKSYmZS5tYXRjaCh1KSxuPW0udGVzdChlKSxnPVwiXCI7cCYmKGkudGVzdChwWzFdKXx8KGc9cFsxXS50b0xvd2VyQ2FzZSgpLGU9XCJcIitwWzJdK3BbM10pLHBbMl18fChuPSExLGkudGVzdChwWzFdKT8oZz1wWzFdLGU9XCJcIitwWzNdKTplPVwiLy9cIitwWzNdKSwzIT09cFsyXS5sZW5ndGgmJjEhPT1wWzJdLmxlbmd0aHx8KGc9cFsxXSxlPVwiL1wiK3BbM10pKTt2YXIgYix5PShoP2hbMV06ZSkubWF0Y2goLyg6WzAtOV0rKS8pLGo9XCJcIjt5JiZ5WzFdJiYzPT09eVsxXS5sZW5ndGgmJihlPWUucmVwbGFjZShqPXlbMV0saitcIjAwXCIpKTt2YXIgdz1uZXcgbCx4PVwiXCIsVT1cIlwiO3RyeXtiPW5ldyBVUkwoZSl9Y2F0Y2godCl7eD10LGd8fGF8fCEvXlxcL1xcLy8udGVzdChlKXx8L15cXC9cXC8uK1tALl0vLnRlc3QoZSl8fChVPVwiL1wiLGU9ZS5zdWJzdHIoMSkpO3RyeXtiPW5ldyBVUkwoZSxjKX1jYXRjaChlKXtyZXR1cm4gdy5wcm90b2NvbD1nLHcuaHJlZj1nLHd9fXcuc2xhc2hlcz1uJiYhVSx3Lmhvc3Q9Yi5ob3N0PT09cz9cIlwiOmIuaG9zdCx3Lmhvc3RuYW1lPWIuaG9zdG5hbWU9PT1zP1wiXCI6Yi5ob3N0bmFtZS5yZXBsYWNlKC8oXFxbfFxcXSkvZyxcIlwiKSx3LnByb3RvY29sPXg/Z3x8bnVsbDpiLnByb3RvY29sLHcuc2VhcmNoPWIuc2VhcmNoLnJlcGxhY2UoL1xcXFwvZyxcIiU1Q1wiKSx3Lmhhc2g9Yi5oYXNoLnJlcGxhY2UoL1xcXFwvZyxcIiU1Q1wiKTt2YXIgUj1lLnNwbGl0KFwiI1wiKTshdy5zZWFyY2gmJn5SWzBdLmluZGV4T2YoXCI/XCIpJiYody5zZWFyY2g9XCI/XCIpLHcuaGFzaHx8XCJcIiE9PVJbMV18fCh3Lmhhc2g9XCIjXCIpLHcucXVlcnk9cj90LmRlY29kZShiLnNlYXJjaC5zdWJzdHIoMSkpOncuc2VhcmNoLnN1YnN0cigxKSx3LnBhdGhuYW1lPVUrZChiLnBhdGhuYW1lKS5yZXBsYWNlKC9cIi9nLFwiJTIyXCIpLFwiYWJvdXQ6XCI9PT13LnByb3RvY29sJiZcImJsYW5rXCI9PT13LnBhdGhuYW1lJiYody5wcm90b2NvbD1cIlwiLHcucGF0aG5hbWU9XCJcIikseCYmXCIvXCIhPT1lWzBdJiYody5wYXRobmFtZT13LnBhdGhuYW1lLnN1YnN0cigxKSksZyYmIWkudGVzdChnKSYmXCIvXCIhPT1lLnNsaWNlKC0xKSYmXCIvXCI9PT13LnBhdGhuYW1lJiYody5wYXRobmFtZT1cIlwiKSx3LnBhdGg9dy5wYXRobmFtZSt3LnNlYXJjaCx3LmF1dGg9W2IudXNlcm5hbWUsYi5wYXNzd29yZF0ubWFwKGRlY29kZVVSSUNvbXBvbmVudCkuZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCI6XCIpLHcucG9ydD1iLnBvcnQsaiYmKHcuaG9zdD13Lmhvc3QucmVwbGFjZShqK1wiMDBcIixqKSx3LnBvcnQ9dy5wb3J0LnNsaWNlKDAsLTIpKSx3LmhyZWY9VT9cIlwiK3cucGF0aG5hbWUrdy5zZWFyY2grdy5oYXNoOm8odyk7dmFyIE89L14oZmlsZSkvLnRlc3Qody5ocmVmKT9bXCJob3N0XCIsXCJob3N0bmFtZVwiXTpbXTtyZXR1cm4gT2JqZWN0LmtleXModykuZm9yRWFjaChmdW5jdGlvbihlKXt+Ty5pbmRleE9mKGUpfHwod1tlXT13W2VdfHxudWxsKX0pLHd9ZXhwb3J0cy5wYXJzZT1nLGV4cG9ydHMuZm9ybWF0PW8sZXhwb3J0cy5yZXNvbHZlPW4sZXhwb3J0cy5yZXNvbHZlT2JqZWN0PWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGcobihlLHQpKX0sZXhwb3J0cy5Vcmw9bDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG52YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5leHBvcnQgdmFyIEhZRFJBVEUgPSAnX19ORVhUX1JFRFVYX1dSQVBQRVJfSFlEUkFURV9fJztcbmV4cG9ydCB2YXIgU1RPUkVLRVkgPSAnX19ORVhUX1JFRFVYX1dSQVBQRVJfU1RPUkVfXyc7XG52YXIgZ2V0SXNTZXJ2ZXIgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJzsgfTtcbnZhciBnZXREZXNlcmlhbGl6ZWRTdGF0ZSA9IGZ1bmN0aW9uIChpbml0aWFsU3RhdGUsIF9hKSB7XG4gICAgdmFyIGRlc2VyaWFsaXplU3RhdGUgPSAoX2EgPT09IHZvaWQgMCA/IHt9IDogX2EpLmRlc2VyaWFsaXplU3RhdGU7XG4gICAgcmV0dXJuIGRlc2VyaWFsaXplU3RhdGUgPyBkZXNlcmlhbGl6ZVN0YXRlKGluaXRpYWxTdGF0ZSkgOiBpbml0aWFsU3RhdGU7XG59O1xudmFyIGdldFNlcmlhbGl6ZWRTdGF0ZSA9IGZ1bmN0aW9uIChzdGF0ZSwgX2EpIHtcbiAgICB2YXIgc2VyaWFsaXplU3RhdGUgPSAoX2EgPT09IHZvaWQgMCA/IHt9IDogX2EpLnNlcmlhbGl6ZVN0YXRlO1xuICAgIHJldHVybiBzZXJpYWxpemVTdGF0ZSA/IHNlcmlhbGl6ZVN0YXRlKHN0YXRlKSA6IHN0YXRlO1xufTtcbnZhciBnZXRTdG9yZUtleSA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBzdG9yZUtleSA9IChfYSA9PT0gdm9pZCAwID8ge30gOiBfYSkuc3RvcmVLZXk7XG4gICAgcmV0dXJuIHN0b3JlS2V5IHx8IFNUT1JFS0VZO1xufTtcbnZhciBpbml0U3RvcmUgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgbWFrZVN0b3JlID0gX2EubWFrZVN0b3JlLCBjb250ZXh0ID0gX2EuY29udGV4dCwgY29uZmlnID0gX2EuY29uZmlnO1xuICAgIHZhciBzdG9yZUtleSA9IGdldFN0b3JlS2V5KGNvbmZpZyk7XG4gICAgdmFyIGNyZWF0ZVN0b3JlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbWFrZVN0b3JlKGNvbnRleHQpOyB9O1xuICAgIGlmIChnZXRJc1NlcnZlcigpKSB7XG4gICAgICAgIHZhciBjID0gY29udGV4dDtcbiAgICAgICAgdmFyIHJlcSA9IHZvaWQgMDtcbiAgICAgICAgaWYgKGMucmVxKVxuICAgICAgICAgICAgcmVxID0gYy5yZXE7XG4gICAgICAgIGlmIChjLmN0eCAmJiBjLmN0eC5yZXEpXG4gICAgICAgICAgICByZXEgPSBjLmN0eC5yZXE7XG4gICAgICAgIGlmIChyZXEpIHtcbiAgICAgICAgICAgIC8vIEFUVEVOVElPTiEgVEhJUyBJUyBJTlRFUk5BTCwgRE8gTk9UIEFDQ0VTUyBESVJFQ1RMWSBBTllXSEVSRSBFTFNFXG4gICAgICAgICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9raXJpbGwta29uc2hpbi9uZXh0LXJlZHV4LXdyYXBwZXIvcHVsbC8xOTYjaXNzdWVjb21tZW50LTYxMTY3MzU0NlxuICAgICAgICAgICAgaWYgKCFyZXEuX19uZXh0UmVkdXhXcmFwcGVyU3RvcmUpXG4gICAgICAgICAgICAgICAgcmVxLl9fbmV4dFJlZHV4V3JhcHBlclN0b3JlID0gY3JlYXRlU3RvcmUoKTtcbiAgICAgICAgICAgIHJldHVybiByZXEuX19uZXh0UmVkdXhXcmFwcGVyU3RvcmU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNyZWF0ZVN0b3JlKCk7XG4gICAgfVxuICAgIC8vIE1lbW9pemUgc3RvcmUgaWYgY2xpZW50XG4gICAgaWYgKCEoc3RvcmVLZXkgaW4gd2luZG93KSkge1xuICAgICAgICB3aW5kb3dbc3RvcmVLZXldID0gY3JlYXRlU3RvcmUoKTtcbiAgICB9XG4gICAgcmV0dXJuIHdpbmRvd1tzdG9yZUtleV07XG59O1xuZXhwb3J0IHZhciBjcmVhdGVXcmFwcGVyID0gZnVuY3Rpb24gKG1ha2VTdG9yZSwgY29uZmlnKSB7XG4gICAgaWYgKGNvbmZpZyA9PT0gdm9pZCAwKSB7IGNvbmZpZyA9IHt9OyB9XG4gICAgdmFyIG1ha2VQcm9wcyA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSBfYS5jYWxsYmFjaywgY29udGV4dCA9IF9hLmNvbnRleHQsIF9iID0gX2EuaXNBcHAsIGlzQXBwID0gX2IgPT09IHZvaWQgMCA/IGZhbHNlIDogX2I7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHN0b3JlLCBpbml0aWFsUHJvcHMsIF9jLCBzdGF0ZTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2QpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9kLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlID0gaW5pdFN0b3JlKHsgY29udGV4dDogY29udGV4dCwgbWFrZVN0b3JlOiBtYWtlU3RvcmUsIGNvbmZpZzogY29uZmlnIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5kZWJ1ZylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIjEuIGdldFByb3BzIGNyZWF0ZWQgc3RvcmUgd2l0aCBzdGF0ZVwiLCBzdG9yZS5nZXRTdGF0ZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jID0gY2FsbGJhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIV9jKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGNhbGxiYWNrKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1lcmdpbmcgc3RvcmUgaW50byBjb250ZXh0IGluc3RlYWQgb2YganVzdCBwYXNzaW5nIGFzIGFub3RoZXIgYXJndW1lbnQgYmVjYXVzZSBpdCdzIGltcG9zc2libGUgdG8gb3ZlcnJpZGUgZ2V0SW5pdGlhbFByb3BzIHNpZ25hdHVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQXBwID8gX19hc3NpZ24oX19hc3NpZ24oe30sIGNvbnRleHQpLCB7IGN0eDogX19hc3NpZ24oX19hc3NpZ24oe30sIGNvbnRleHQuY3R4KSwgeyBzdG9yZTogc3RvcmUgfSkgfSkgOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgY29udGV4dCksIHsgc3RvcmU6IHN0b3JlIH0pKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jID0gKF9kLnNlbnQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfZC5sYWJlbCA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxQcm9wcyA9IChfYykgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25maWcuZGVidWcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIzLiBnZXRQcm9wcyBhZnRlciBkaXNwYXRjaGVzIGhhcyBzdG9yZSBzdGF0ZVwiLCBzdG9yZS5nZXRTdGF0ZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxQcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsU3RhdGU6IGdldElzU2VydmVyKCkgPyBnZXRTZXJpYWxpemVkU3RhdGUoc3RhdGUsIGNvbmZpZykgOiBzdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICB2YXIgZ2V0SW5pdGlhbFBhZ2VQcm9wcyA9IGZ1bmN0aW9uIChjYWxsYmFjaykgeyByZXR1cm4gZnVuY3Rpb24gKGNvbnRleHQpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIGlmIChjb250ZXh0LnN0b3JlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdObyBuZWVkIHRvIHdyYXAgcGFnZXMgaWYgX2FwcCB3YXMgd3JhcHBlZCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBjYWxsYmFjayhjb250ZXh0KV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgbWFrZVByb3BzKHsgY2FsbGJhY2s6IGNhbGxiYWNrLCBjb250ZXh0OiBjb250ZXh0IH0pXTtcbiAgICAgICAgfSk7XG4gICAgfSk7IH07IH07XG4gICAgdmFyIGdldEluaXRpYWxBcHBQcm9wcyA9IGZ1bmN0aW9uIChjYWxsYmFjaykgeyByZXR1cm4gZnVuY3Rpb24gKGNvbnRleHQpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBtYWtlUHJvcHMoeyBjYWxsYmFjazogY2FsbGJhY2ssIGNvbnRleHQ6IGNvbnRleHQsIGlzQXBwOiB0cnVlIH0pXTtcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIChfYS5zZW50KCkpXTtcbiAgICAgICAgfVxuICAgIH0pOyB9KTsgfTsgfTsgLy8gdGhpcyBpcyBqdXN0IHRvIGNvbnZpbmNlIFRTXG4gICAgdmFyIGdldFN0YXRpY1Byb3BzID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7IHJldHVybiBmdW5jdGlvbiAoY29udGV4dCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgcHJvcHMsIHNldHRpbmdzLCB3cmFwcGVyUHJvcHM7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2MpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2MubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIG1ha2VQcm9wcyh7IGNhbGxiYWNrOiBjYWxsYmFjaywgY29udGV4dDogY29udGV4dCB9KV07XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBfYSA9IF9jLnNlbnQoKSwgX2IgPSBfYS5pbml0aWFsUHJvcHMsIHByb3BzID0gX2IucHJvcHMsIHNldHRpbmdzID0gX19yZXN0KF9iLCBbXCJwcm9wc1wiXSksIHdyYXBwZXJQcm9wcyA9IF9fcmVzdChfYSwgW1wiaW5pdGlhbFByb3BzXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9fYXNzaWduKF9fYXNzaWduKHt9LCBzZXR0aW5ncyksIHsgcHJvcHM6IF9fYXNzaWduKF9fYXNzaWduKHt9LCB3cmFwcGVyUHJvcHMpLCBwcm9wcykgfSldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTsgfTsgfTtcbiAgICB2YXIgZ2V0U2VydmVyU2lkZVByb3BzID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7IHJldHVybiBmdW5jdGlvbiAoY29udGV4dCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgZ2V0U3RhdGljUHJvcHMoY2FsbGJhY2spKGNvbnRleHQpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCBfYS5zZW50KCldOyAvLyBqdXN0IG5vdCB0byByZXBlYXQgbXlzZWxmXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pOyB9OyB9O1xuICAgIHZhciB3aXRoUmVkdXggPSBmdW5jdGlvbiAoQ29tcG9uZW50KSB7XG4gICAgICAgIHZhciBkaXNwbGF5TmFtZSA9IFwid2l0aFJlZHV4KFwiICsgKENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JykgKyBcIilcIjtcbiAgICAgICAgLy9UT0RPIENoZWNrIGlmIHBhZ2VzL19hcHAgd2FzIHdyYXBwZWQgc28gdGhlcmUncyBubyBuZWVkIHRvIHdyYXAgYSBwYWdlIGl0c2VsZlxuICAgICAgICB2YXIgV3JhcHBlciA9IGZ1bmN0aW9uIChfYSwgY29udGV4dCkge1xuICAgICAgICAgICAgdmFyIF9iO1xuICAgICAgICAgICAgdmFyIGluaXRpYWxTdGF0ZSA9IF9hLmluaXRpYWxTdGF0ZSwgaW5pdGlhbFByb3BzID0gX2EuaW5pdGlhbFByb3BzLCBwcm9wcyA9IF9fcmVzdChfYSwgW1wiaW5pdGlhbFN0YXRlXCIsIFwiaW5pdGlhbFByb3BzXCJdKTtcbiAgICAgICAgICAgIHZhciBpc0ZpcnN0UmVuZGVyID0gdXNlUmVmKHRydWUpO1xuICAgICAgICAgICAgLy8gdGhpcyBoYXBwZW5zIHdoZW4gQXBwIGhhcyBwYWdlIHdpdGggZ2V0U2VydmVyU2lkZVByb3BzL2dldFN0YXRpY1Byb3BzXG4gICAgICAgICAgICB2YXIgaW5pdGlhbFN0YXRlRnJvbUdTUG9yR1NTUiA9IChfYiA9IHByb3BzID09PSBudWxsIHx8IHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9wcy5wYWdlUHJvcHMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5pbml0aWFsU3RhdGU7XG4gICAgICAgICAgICBpZiAoY29uZmlnLmRlYnVnKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCc0LiBXcmFwcGVkQXBwIGNyZWF0ZWQgbmV3IHN0b3JlIHdpdGgnLCBkaXNwbGF5TmFtZSwge1xuICAgICAgICAgICAgICAgICAgICBpbml0aWFsU3RhdGU6IGluaXRpYWxTdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFN0YXRlRnJvbUdTUG9yR1NTUjogaW5pdGlhbFN0YXRlRnJvbUdTUG9yR1NTUixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBzdG9yZSA9IHVzZVJlZihpbml0U3RvcmUoeyBtYWtlU3RvcmU6IG1ha2VTdG9yZSwgY29uZmlnOiBjb25maWcsIGNvbnRleHQ6IGNvbnRleHQgfSkpO1xuICAgICAgICAgICAgdmFyIGh5ZHJhdGUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGluaXRpYWxTdGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuY3VycmVudC5kaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBIWURSQVRFLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogZ2V0RGVzZXJpYWxpemVkU3RhdGUoaW5pdGlhbFN0YXRlLCBjb25maWcpLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyBBVFRFTlRJT04hIFRoaXMgY29kZSBhc3N1bWVzIHRoYXQgUGFnZSdzIGdldFNlcnZlclNpZGVQcm9wcyBpcyBleGVjdXRlZCBhZnRlciBBcHAuZ2V0SW5pdGlhbFByb3BzXG4gICAgICAgICAgICAgICAgLy8gc28gd2UgZGlzcGF0Y2ggaW4gdGhpcyBvcmRlclxuICAgICAgICAgICAgICAgIGlmIChpbml0aWFsU3RhdGVGcm9tR1NQb3JHU1NSKVxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5jdXJyZW50LmRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEhZRFJBVEUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiBnZXREZXNlcmlhbGl6ZWRTdGF0ZShpbml0aWFsU3RhdGVGcm9tR1NQb3JHU1NSLCBjb25maWcpLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIFtpbml0aWFsU3RhdGVGcm9tR1NQb3JHU1NSLCBpbml0aWFsU3RhdGVdKTtcbiAgICAgICAgICAgIC8vIGFwcGx5IHN5bmNocm9ub3VzbHkgb24gZmlyc3QgcmVuZGVyIChib3RoIHNlcnZlciBzaWRlIGFuZCBjbGllbnQgc2lkZSlcbiAgICAgICAgICAgIGlmIChpc0ZpcnN0UmVuZGVyLmN1cnJlbnQpXG4gICAgICAgICAgICAgICAgaHlkcmF0ZSgpO1xuICAgICAgICAgICAgLy8gYXBwbHkgYXN5bmMgaW4gY2FzZSBwcm9wcyBoYXZlIGNoYW5nZWQsIG9uIG5hdmlnYXRpb24gZm9yIGV4YW1wbGVcbiAgICAgICAgICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzRmlyc3RSZW5kZXIuY3VycmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpc0ZpcnN0UmVuZGVyLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoeWRyYXRlKCk7XG4gICAgICAgICAgICB9LCBbaHlkcmF0ZV0pO1xuICAgICAgICAgICAgLy8gb3JkZXIgaXMgaW1wb3J0YW50ISBOZXh0LmpzIG92ZXJ3cml0ZXMgcHJvcHMgZnJvbSBwYWdlcy9fYXBwIHdpdGggZ2V0U3RhdGljUHJvcHMgZnJvbSBwYWdlXG4gICAgICAgICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS96ZWl0L25leHQuanMvaXNzdWVzLzExNjQ4XG4gICAgICAgICAgICBpZiAoaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5wYWdlUHJvcHMpXG4gICAgICAgICAgICAgICAgcHJvcHMucGFnZVByb3BzID0gX19hc3NpZ24oX19hc3NpZ24oe30sIGluaXRpYWxQcm9wcy5wYWdlUHJvcHMpLCBwcm9wcy5wYWdlUHJvcHMpO1xuICAgICAgICAgICAgdmFyIHJlc3VsdFByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICAvLyBqdXN0IHNvbWUgY2xlYW51cCB0byBwcmV2ZW50IHBhc3NpbmcgaXQgYXMgcHJvcHMsIHdlIG5lZWQgdG8gY2xvbmUgcHJvcHMgdG8gc2FmZWx5IGRlbGV0ZSBpbml0aWFsU3RhdGVcbiAgICAgICAgICAgIGlmIChpbml0aWFsU3RhdGVGcm9tR1NQb3JHU1NSKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0UHJvcHMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcHJvcHMpLCB7IHBhZ2VQcm9wczogX19hc3NpZ24oe30sIHByb3BzLnBhZ2VQcm9wcykgfSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHJlc3VsdFByb3BzLnBhZ2VQcm9wcy5pbml0aWFsU3RhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUHJvdmlkZXIsIHsgc3RvcmU6IHN0b3JlLmN1cnJlbnQgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX19hc3NpZ24oe30sIGluaXRpYWxQcm9wcywgcmVzdWx0UHJvcHMpKSkpO1xuICAgICAgICB9O1xuICAgICAgICBXcmFwcGVyLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG4gICAgICAgIGlmICgnZ2V0SW5pdGlhbFByb3BzJyBpbiBDb21wb25lbnQpXG4gICAgICAgICAgICBXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IGZ1bmN0aW9uIChjb250ZXh0KSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBjYWxsYmFjaztcbiAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrID0gQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIChjb250ZXh0LmN0eCA/IGdldEluaXRpYWxBcHBQcm9wcyhjYWxsYmFjaykgOiBnZXRJbml0aWFsUGFnZVByb3BzKGNhbGxiYWNrKSkoY29udGV4dCldO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7IH07XG4gICAgICAgIHJldHVybiBXcmFwcGVyO1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0U2VydmVyU2lkZVByb3BzOiBnZXRTZXJ2ZXJTaWRlUHJvcHMsXG4gICAgICAgIGdldFN0YXRpY1Byb3BzOiBnZXRTdGF0aWNQcm9wcyxcbiAgICAgICAgd2l0aFJlZHV4OiB3aXRoUmVkdXgsXG4gICAgfTtcbn07XG4vLyBMZWdhY3lcbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAobWFrZVN0b3JlLCBjb25maWcpIHtcbiAgICBpZiAoY29uZmlnID09PSB2b2lkIDApIHsgY29uZmlnID0ge307IH1cbiAgICBjb25zb2xlLndhcm4oJy8hXFxcXCBZb3UgYXJlIHVzaW5nIGxlZ2FjeSBpbXBsZW1lbnRhaW9uLiBQbGVhc2UgdXBkYXRlIHlvdXIgY29kZTogdXNlIGNyZWF0ZVdyYXBwZXIoKSBhbmQgd3JhcHBlci53aXRoUmVkdXgoKS4nKTtcbiAgICByZXR1cm4gY3JlYXRlV3JhcHBlcihtYWtlU3RvcmUsIGNvbmZpZykud2l0aFJlZHV4O1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIGRsbF81MDMwZjM4N2QzMjhlNDQxNTc4NSAqLyBcImRsbC1yZWZlcmVuY2UgZGxsXzUwMzBmMzg3ZDMyOGU0NDE1Nzg1XCIpKShcIi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC9wb2x5ZmlsbHMvb2JqZWN0LWFzc2lnbi5qc1wiKTsiLCJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL19hcHBcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCJwcml2YXRlLW5leHQtcGFnZXMvX2FwcC5qc1wiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oe30sIF9yb3V0ZXJbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5cbmV4cG9ydCBjb25zdCBSb3V0ZXJDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxOZXh0Um91dGVyPihudWxsIGFzIGFueSlcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgUm91dGVyQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdSb3V0ZXJDb250ZXh0J1xufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBwYXJzZSwgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSAhPT0gMCA/IGJhc2VQYXRoICsgcGF0aCA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpID09PSAwXG4gICAgPyBwYXRoLnN1YnN0cihiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xuICAgIDogcGF0aFxufVxuXG5mdW5jdGlvbiB0b1JvdXRlKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nXG59XG5cbmNvbnN0IHByZXBhcmVSb3V0ZSA9IChwYXRoOiBzdHJpbmcpID0+XG4gIHRvUm91dGUoIXBhdGggfHwgcGF0aCA9PT0gJy8nID8gJy9pbmRleCcgOiBwYXRoKVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG50eXBlIENvbXBvbmVudFJlcyA9IHsgcGFnZTogQ29tcG9uZW50VHlwZTsgbW9kOiBhbnkgfVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxudHlwZSBSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IGFueVxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBSb3V0ZUluZm8sIEFwcD86IENvbXBvbmVudFR5cGUpID0+IHZvaWRcblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBhbnkpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoXG4gIHBhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSB8IG51bGwsXG4gIGlzU2VydmVyUmVuZGVyOiBib29sZWFuLFxuICBjYj86ICguLi5hcmdzOiBhbnkpID0+IGFueVxuKSB7XG4gIGxldCBhdHRlbXB0cyA9IGlzU2VydmVyUmVuZGVyID8gMyA6IDFcbiAgZnVuY3Rpb24gZ2V0UmVzcG9uc2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gZmV0Y2goXG4gICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIF9fTkVYVF9EQVRBX19cbiAgICAgICAgICBgL19uZXh0L2RhdGEvJHtfX05FWFRfREFUQV9fLmJ1aWxkSWR9JHtkZWxCYXNlUGF0aChwYXRobmFtZSl9Lmpzb25gXG4gICAgICAgICksXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgfSksXG4gICAgICB7XG4gICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAvL1xuICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgfVxuICAgICkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICBpZiAoLS1hdHRlbXB0cyA+IDAgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHJldHVybiBjYiA/IGNiKGRhdGEpIDogZGF0YVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAvLyBsb29wLlxuICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICA7KGVyciBhcyBhbnkpLmNvZGUgPSAnUEFHRV9MT0FEX0VSUk9SJ1xuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IENvbXBvbmVudFR5cGVcbiAgICAgIHdyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHsgQ29tcG9uZW50OiBBcHAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgYXNcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG4gICAgfVxuICB9XG5cbiAgLy8gQGRlcHJlY2F0ZWQgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZXZlbiB0aG91Z2ggaXQncyBhIHByaXZhdGUgbWV0aG9kLlxuICBzdGF0aWMgX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIHJldHVybiByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1cmxcbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBpZiAoIWUuc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKFxuICAgICAgZS5zdGF0ZSAmJlxuICAgICAgdGhpcy5pc1NzciAmJlxuICAgICAgZS5zdGF0ZS5hcyA9PT0gdGhpcy5hc1BhdGggJiZcbiAgICAgIHBhcnNlKGUuc3RhdGUudXJsKS5wYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZVxuICAgICkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKGUuc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IGUuc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBhcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdgcG9wc3RhdGVgIGV2ZW50IHRyaWdnZXJlZCBidXQgYGV2ZW50LnN0YXRlYCBkaWQgbm90IGhhdmUgYHVybGAgb3IgYGFzYCBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvcG9wc3RhdGUtc3RhdGUtZW1wdHknXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5yZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICB1cGRhdGUocm91dGU6IHN0cmluZywgbW9kOiBhbnkpIHtcbiAgICBjb25zdCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUgPSBtb2QuZGVmYXVsdCB8fCBtb2RcbiAgICBjb25zdCBkYXRhID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuICAgIGlmICghZGF0YSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgdXBkYXRlIHVuYXZhaWxhYmxlIHJvdXRlOiAke3JvdXRlfWApXG4gICAgfVxuXG4gICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIF9fTl9TU0c6IG1vZC5fX05fU1NHLFxuICAgICAgX19OX1NTUDogbW9kLl9fTl9TU1AsXG4gICAgfSlcbiAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gbmV3RGF0YVxuXG4gICAgLy8gcGFnZXMvX2FwcC5qcyB1cGRhdGVkXG4gICAgaWYgKHJvdXRlID09PSAnL19hcHAnKSB7XG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAocm91dGUgPT09IHRoaXMucm91dGUpIHtcbiAgICAgIHRoaXMubm90aWZ5KG5ld0RhdGEpXG4gICAgfVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIF91cmw6IFVybCxcbiAgICBfYXM6IFVybCxcbiAgICBvcHRpb25zOiBhbnlcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICAgIH1cbiAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgIGlmIChTVCkge1xuICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgICB9XG5cbiAgICAgIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAgICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICAgIGxldCB1cmwgPSB0eXBlb2YgX3VybCA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbihfdXJsKSA6IF91cmxcbiAgICAgIGxldCBhcyA9IHR5cGVvZiBfYXMgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24oX2FzKSA6IF9hc1xuXG4gICAgICB1cmwgPSBhZGRCYXNlUGF0aCh1cmwpXG4gICAgICBhcyA9IGFkZEJhc2VQYXRoKGFzKVxuXG4gICAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkgZm9yIHRoZSBTU1IgcGFnZS5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICBpZiAoX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KSB7XG4gICAgICAgICAgYXMgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChhcylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZChhcylcblxuICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoYXMpKSB7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGFzKVxuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKVxuICAgICAgfVxuXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSwgcHJvdG9jb2wgfSA9IHBhcnNlKHVybCwgdHJ1ZSlcblxuICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSlcbiAgICAgIH1cblxuICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgIGlmICghdGhpcy51cmxJc05ldyhhcykpIHtcbiAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKVxuICAgICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSBwYXJzZShhcylcbiAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgICApXG5cbiAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZWplY3QoXG4gICAgICAgICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2BcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICAgIC8vIElmIHNoYWxsb3cgaXMgdHJ1ZSBhbmQgdGhlIHJvdXRlIGV4aXN0cyBpbiB0aGUgcm91dGVyIGNhY2hlIHdlIHJldXNlIHRoZSBwcmV2aW91cyByZXN1bHRcbiAgICAgIHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBzaGFsbG93KS50aGVuKFxuICAgICAgICAocm91dGVJbmZvKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBlcnJvciB9ID0gcm91dGVJbmZvXG5cbiAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlSW5mbylcblxuICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGFzKVxuICAgICAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKVxuICAgICAgICB9LFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxSb3V0ZUluZm8+IHtcbiAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAvLyBJZiB0aGVyZSBpcyBhIHNoYWxsb3cgcm91dGUgdHJhbnNpdGlvbiBwb3NzaWJsZVxuICAgIC8vIElmIHRoZSByb3V0ZSBpcyBhbHJlYWR5IHJlbmRlcmVkIG9uIHRoZSBzY3JlZW4uXG4gICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNhY2hlZFJvdXRlSW5mbylcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVFcnJvciA9IChcbiAgICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICAgICkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFyayBpdCBhcyBhIGNhbmNlbGxlZCBlcnJvciBhbmQgc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc29sdmUoXG4gICAgICAgICAgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSByZXNcbiAgICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvOiBSb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyIH1cbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIH0gYXMgYW55KS50aGVuKFxuICAgICAgICAgICAgICAgICAgKHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVyclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbylcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAoZ2lwRXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsXG4gICAgICAgICAgICAgICAgICAgICAgZ2lwRXJyXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGhhbmRsZUVycm9yKGVyciwgdHJ1ZSkpXG4gICAgICAgIClcbiAgICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPlxuICAgIH1cblxuICAgIHJldHVybiAobmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKGNhY2hlZFJvdXRlSW5mbykge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oXG4gICAgICAgIChyZXMpID0+XG4gICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pLFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz4pXG4gICAgICAudGhlbigocm91dGVJbmZvOiBSb3V0ZUluZm8pID0+IHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RGF0YTxSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgICAgX19OX1NTR1xuICAgICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGFzKVxuICAgICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoYXMpXG4gICAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICAgIClcbiAgICAgICAgKS50aGVuKChwcm9wcykgPT4ge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpXG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBSb3V0ZUluZm9cbiAgKTogdm9pZCB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBwcm90b2NvbCB9ID0gcGFyc2UodXJsKVxuXG4gICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGNvbnN0IHJvdXRlID0gZGVsQmFzZVBhdGgodG9Sb3V0ZShwYXRobmFtZSkpXG4gICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBkZWxCYXNlUGF0aChhc1BhdGgpKSxcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgICAgXSkudGhlbigoKSA9PiByZXNvbHZlKCksIHJlamVjdClcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Q29tcG9uZW50UmVzPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG4gICAgcm91dGUgPSBkZWxCYXNlUGF0aChyb3V0ZSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGFyc2UoYXNQYXRoKS5wYXRobmFtZSEpXG5cbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1twYXRobmFtZV1cbiAgICAgID8gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW3BhdGhuYW1lXSlcbiAgICAgIDogZmV0Y2hOZXh0RGF0YShcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIHRoaXMuaXNTc3IsXG4gICAgICAgICAgKGRhdGEpID0+ICh0aGlzLnNkY1twYXRobmFtZV0gPSBkYXRhKVxuICAgICAgICApXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZShhc1BhdGgsIHRydWUpXG4gICAgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGF0aG5hbWUhKVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHApXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgY29uc3QgZSA9IG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJylcbiAgICAgIDsoZSBhcyBhbnkpLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGUsIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFJvdXRlSW5mbyk6IHZvaWQge1xuICAgIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCIvLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiB7IHBvczogbnVtYmVyOyByZXBlYXQ6IGJvb2xlYW4gfSB9XG59IHtcbiAgLy8gRXNjYXBlIGFsbCBjaGFyYWN0ZXJzIHRoYXQgY291bGQgYmUgY29uc2lkZXJlZCBSZWdFeFxuICBjb25zdCBlc2NhcGVkUm91dGUgPSBlc2NhcGVSZWdleChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IHsgcG9zOiBudW1iZXI7IHJlcGVhdDogYm9vbGVhbiB9IH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcblxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZShcbiAgICAvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLFxuICAgIChfLCAkMSkgPT4ge1xuICAgICAgY29uc3QgaXNPcHRpb25hbCA9IC9eXFxcXFxcWy4qXFxcXFxcXSQvLnRlc3QoJDEpXG4gICAgICBpZiAoaXNPcHRpb25hbCkge1xuICAgICAgICAkMSA9ICQxLnNsaWNlKDIsIC0yKVxuICAgICAgfVxuICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKVxuICAgICAgaWYgKGlzQ2F0Y2hBbGwpIHtcbiAgICAgICAgJDEgPSAkMS5zbGljZSg2KVxuICAgICAgfVxuICAgICAgZ3JvdXBzW1xuICAgICAgICAkMVxuICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICBdID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0OiBpc0NhdGNoQWxsIH1cbiAgICAgIHJldHVybiBpc0NhdGNoQWxsID8gKGlzT3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICB9XG4gIClcblxuICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKFxuICAgICAgL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZyxcbiAgICAgIChfLCAkMSkgPT4ge1xuICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpXG4gICAgICAgIGNvbnN0IGtleSA9ICQxXG4gICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJylcblxuICAgICAgICByZXR1cm4gaXNDYXRjaEFsbFxuICAgICAgICAgID8gYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9Pi4rPylgXG4gICAgICAgICAgOiBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+W14vXSs/KWBcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKCdeJyArIHBhcmFtZXRlcml6ZWRSb3V0ZSArICcoPzovKT8kJywgJ2knKSxcbiAgICBncm91cHMsXG4gICAgbmFtZWRSZWdleDogbmFtZWRQYXJhbWV0ZXJpemVkUm91dGVcbiAgICAgID8gYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgXG4gICAgICA6IHVuZGVmaW5lZCxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZm9ybWF0LCBVUkxGb3JtYXRPcHRpb25zLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJy4uLy4uL2xpYi9sb2FkLWVudi1jb25maWcnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IGFueVxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIGludGVyZmFjZS1uYW1lXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIHN0YXRpY01hcmt1cDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGRldkZpbGVzOiBzdHJpbmdbXVxuICBmaWxlczogc3RyaW5nW11cbiAgbG93UHJpb3JpdHlGaWxlczogc3RyaW5nW11cbiAgcG9seWZpbGxGaWxlczogc3RyaW5nW11cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBodG1sUHJvcHM6IGFueVxuICBib2R5VGFnczogYW55W11cbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgdXJsOiBVcmxPYmplY3QsXG4gIG9wdGlvbnM/OiBVUkxGb3JtYXRPcHRpb25zXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdCh1cmwgYXMgVVJMLCBvcHRpb25zKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5OyIsImZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRoSG9sZXM7IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2ZcIik7XG5cbnZhciBpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSByZXF1aXJlKFwiLi9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3RcIik7XG5cbmZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICBpZiAoaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9jb25zdHJ1Y3QgPSBSZWZsZWN0LmNvbnN0cnVjdDtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9jb25zdHJ1Y3QgPSBmdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgICAgIHZhciBhID0gW251bGxdO1xuICAgICAgYS5wdXNoLmFwcGx5KGEsIGFyZ3MpO1xuICAgICAgdmFyIENvbnN0cnVjdG9yID0gRnVuY3Rpb24uYmluZC5hcHBseShQYXJlbnQsIGEpO1xuICAgICAgdmFyIGluc3RhbmNlID0gbmV3IENvbnN0cnVjdG9yKCk7XG4gICAgICBpZiAoQ2xhc3MpIHNldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpO1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX2NvbnN0cnVjdC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jb25zdHJ1Y3Q7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTtcbiAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTtcbiAgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTtcblxuICB0cnkge1xuICAgIERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0OyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5TGltaXQ7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVSZXN0OyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mOyIsInZhciBhcnJheVdpdGhIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5TGltaXQgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdFwiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVJlc3QgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVJlc3RcIik7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NsaWNlZFRvQXJyYXk7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXk7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgZGxsXzUwMzBmMzg3ZDMyOGU0NDE1Nzg1ICovIFwiZGxsLXJlZmVyZW5jZSBkbGxfNTAzMGYzODdkMzI4ZTQ0MTU3ODVcIikpKFwiLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qc1wiKTsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbnZhciBjaGVja1Byb3BUeXBlcyA9IHJlcXVpcmUoJy4vY2hlY2tQcm9wVHlwZXMnKTtcblxudmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCgpIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuICB2YXIgSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG4gIHZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJzsgLy8gQmVmb3JlIFN5bWJvbCBzcGVjLlxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpdGVyYXRvciBtZXRob2QgZnVuY3Rpb24gY29udGFpbmVkIG9uIHRoZSBpdGVyYWJsZSBvYmplY3QuXG4gICAqXG4gICAqIEJlIHN1cmUgdG8gaW52b2tlIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBpdGVyYWJsZSBhcyBjb250ZXh0OlxuICAgKlxuICAgKiAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG15SXRlcmFibGUpO1xuICAgKiAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICogICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG15SXRlcmFibGUpO1xuICAgKiAgICAgICAuLi5cbiAgICogICAgIH1cbiAgICpcbiAgICogQHBhcmFtIHs/b2JqZWN0fSBtYXliZUl0ZXJhYmxlXG4gICAqIEByZXR1cm4gez9mdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gbWF5YmVJdGVyYWJsZSAmJiAoSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3JGbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdGlvbiBvZiBtZXRob2RzIHRoYXQgYWxsb3cgZGVjbGFyYXRpb24gYW5kIHZhbGlkYXRpb24gb2YgcHJvcHMgdGhhdCBhcmVcbiAgICogc3VwcGxpZWQgdG8gUmVhY3QgY29tcG9uZW50cy4gRXhhbXBsZSB1c2FnZTpcbiAgICpcbiAgICogICB2YXIgUHJvcHMgPSByZXF1aXJlKCdSZWFjdFByb3BUeXBlcycpO1xuICAgKiAgIHZhciBNeUFydGljbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIHByb3AgbmFtZWQgXCJkZXNjcmlwdGlvblwiLlxuICAgKiAgICAgICBkZXNjcmlwdGlvbjogUHJvcHMuc3RyaW5nLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHJlcXVpcmVkIGVudW0gcHJvcCBuYW1lZCBcImNhdGVnb3J5XCIuXG4gICAqICAgICAgIGNhdGVnb3J5OiBQcm9wcy5vbmVPZihbJ05ld3MnLCdQaG90b3MnXSkuaXNSZXF1aXJlZCxcbiAgICpcbiAgICogICAgICAgLy8gQSBwcm9wIG5hbWVkIFwiZGlhbG9nXCIgdGhhdCByZXF1aXJlcyBhbiBpbnN0YW5jZSBvZiBEaWFsb2cuXG4gICAqICAgICAgIGRpYWxvZzogUHJvcHMuaW5zdGFuY2VPZihEaWFsb2cpLmlzUmVxdWlyZWRcbiAgICogICAgIH0sXG4gICAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkgeyAuLi4gfVxuICAgKiAgIH0pO1xuICAgKlxuICAgKiBBIG1vcmUgZm9ybWFsIHNwZWNpZmljYXRpb24gb2YgaG93IHRoZXNlIG1ldGhvZHMgYXJlIHVzZWQ6XG4gICAqXG4gICAqICAgdHlwZSA6PSBhcnJheXxib29sfGZ1bmN8b2JqZWN0fG51bWJlcnxzdHJpbmd8b25lT2YoWy4uLl0pfGluc3RhbmNlT2YoLi4uKVxuICAgKiAgIGRlY2wgOj0gUmVhY3RQcm9wVHlwZXMue3R5cGV9KC5pc1JlcXVpcmVkKT9cbiAgICpcbiAgICogRWFjaCBhbmQgZXZlcnkgZGVjbGFyYXRpb24gcHJvZHVjZXMgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZS4gVGhpc1xuICAgKiBhbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9ucy4gRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqICB2YXIgTXlMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgb3IgVVJJIHByb3AgbmFtZWQgXCJocmVmXCIuXG4gICAqICAgICAgaHJlZjogZnVuY3Rpb24ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAqICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgKiAgICAgICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBwcm9wVmFsdWUgIT09ICdzdHJpbmcnICYmXG4gICAqICAgICAgICAgICAgIShwcm9wVmFsdWUgaW5zdGFuY2VvZiBVUkkpKSB7XG4gICAqICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAqICAgICAgICAgICAgJ0V4cGVjdGVkIGEgc3RyaW5nIG9yIGFuIFVSSSBmb3IgJyArIHByb3BOYW1lICsgJyBpbiAnICtcbiAgICogICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAqICAgICAgICAgICk7XG4gICAqICAgICAgICB9XG4gICAqICAgICAgfVxuICAgKiAgICB9LFxuICAgKiAgICByZW5kZXI6IGZ1bmN0aW9uKCkgey4uLn1cbiAgICogIH0pO1xuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG5cbiAgdmFyIEFOT05ZTU9VUyA9ICc8PGFub255bW91cz4+JztcblxuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYXJyYXknKSxcbiAgICBib29sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYm9vbGVhbicpLFxuICAgIGZ1bmM6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdmdW5jdGlvbicpLFxuICAgIG51bWJlcjogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ251bWJlcicpLFxuICAgIG9iamVjdDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ29iamVjdCcpLFxuICAgIHN0cmluZzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N0cmluZycpLFxuICAgIHN5bWJvbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N5bWJvbCcpLFxuXG4gICAgYW55OiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpLFxuICAgIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcixcbiAgICBlbGVtZW50OiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSxcbiAgICBlbGVtZW50VHlwZTogY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlcigpLFxuICAgIGluc3RhbmNlT2Y6IGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIsXG4gICAgbm9kZTogY3JlYXRlTm9kZUNoZWNrZXIoKSxcbiAgICBvYmplY3RPZjogY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcixcbiAgICBvbmVPZjogY3JlYXRlRW51bVR5cGVDaGVja2VyLFxuICAgIG9uZU9mVHlwZTogY3JlYXRlVW5pb25UeXBlQ2hlY2tlcixcbiAgICBzaGFwZTogY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcixcbiAgICBleGFjdDogY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcixcbiAgfTtcblxuICAvKipcbiAgICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxuICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbiAgICovXG4gIC8qZXNsaW50LWRpc2FibGUgbm8tc2VsZi1jb21wYXJlKi9cbiAgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAgIC8vIFNhbWVWYWx1ZSBhbGdvcml0aG1cbiAgICBpZiAoeCA9PT0geSkge1xuICAgICAgLy8gU3RlcHMgMS01LCA3LTEwXG4gICAgICAvLyBTdGVwcyA2LmItNi5lOiArMCAhPSAtMFxuICAgICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTdGVwIDYuYTogTmFOID09IE5hTlxuICAgICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgICB9XG4gIH1cbiAgLyplc2xpbnQtZW5hYmxlIG5vLXNlbGYtY29tcGFyZSovXG5cbiAgLyoqXG4gICAqIFdlIHVzZSBhbiBFcnJvci1saWtlIG9iamVjdCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSBhcyBwZW9wbGUgbWF5IGNhbGxcbiAgICogUHJvcFR5cGVzIGRpcmVjdGx5IGFuZCBpbnNwZWN0IHRoZWlyIG91dHB1dC4gSG93ZXZlciwgd2UgZG9uJ3QgdXNlIHJlYWxcbiAgICogRXJyb3JzIGFueW1vcmUuIFdlIGRvbid0IGluc3BlY3QgdGhlaXIgc3RhY2sgYW55d2F5LCBhbmQgY3JlYXRpbmcgdGhlbVxuICAgKiBpcyBwcm9oaWJpdGl2ZWx5IGV4cGVuc2l2ZSBpZiB0aGV5IGFyZSBjcmVhdGVkIHRvbyBvZnRlbiwgc3VjaCBhcyB3aGF0XG4gICAqIGhhcHBlbnMgaW4gb25lT2ZUeXBlKCkgZm9yIGFueSB0eXBlIGJlZm9yZSB0aGUgb25lIHRoYXQgbWF0Y2hlZC5cbiAgICovXG4gIGZ1bmN0aW9uIFByb3BUeXBlRXJyb3IobWVzc2FnZSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5zdGFjayA9ICcnO1xuICB9XG4gIC8vIE1ha2UgYGluc3RhbmNlb2YgRXJyb3JgIHN0aWxsIHdvcmsgZm9yIHJldHVybmVkIGVycm9ycy5cbiAgUHJvcFR5cGVFcnJvci5wcm90b3R5cGUgPSBFcnJvci5wcm90b3R5cGU7XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlID0ge307XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPSAwO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja1R5cGUoaXNSZXF1aXJlZCwgcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgIHByb3BGdWxsTmFtZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcblxuICAgICAgaWYgKHNlY3JldCAhPT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgICAgaWYgKHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgICAgICAgICAvLyBOZXcgYmVoYXZpb3Igb25seSBmb3IgdXNlcnMgb2YgYHByb3AtdHlwZXNgIHBhY2thZ2VcbiAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgJ1VzZSBgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKClgIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAgICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICAgICAgICApO1xuICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIC8vIE9sZCBiZWhhdmlvciBmb3IgcGVvcGxlIHVzaW5nIFJlYWN0LlByb3BUeXBlc1xuICAgICAgICAgIHZhciBjYWNoZUtleSA9IGNvbXBvbmVudE5hbWUgKyAnOicgKyBwcm9wTmFtZTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldICYmXG4gICAgICAgICAgICAvLyBBdm9pZCBzcGFtbWluZyB0aGUgY29uc29sZSBiZWNhdXNlIHRoZXkgYXJlIG9mdGVuIG5vdCBhY3Rpb25hYmxlIGV4Y2VwdCBmb3IgbGliIGF1dGhvcnNcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IDwgM1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgICAnWW91IGFyZSBtYW51YWxseSBjYWxsaW5nIGEgUmVhY3QuUHJvcFR5cGVzIHZhbGlkYXRpb24gJyArXG4gICAgICAgICAgICAgICdmdW5jdGlvbiBmb3IgdGhlIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgcHJvcCBvbiBgJyArIGNvbXBvbmVudE5hbWUgICsgJ2AuIFRoaXMgaXMgZGVwcmVjYXRlZCAnICtcbiAgICAgICAgICAgICAgJ2FuZCB3aWxsIHRocm93IGluIHRoZSBzdGFuZGFsb25lIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICAgJ1lvdSBtYXkgYmUgc2VlaW5nIHRoaXMgd2FybmluZyBkdWUgdG8gYSB0aGlyZC1wYXJ0eSBQcm9wVHlwZXMgJyArXG4gICAgICAgICAgICAgICdsaWJyYXJ5LiBTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWRvbnQtY2FsbC1wcm9wdHlwZXMgJyArICdmb3IgZGV0YWlscy4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkICcgKyAoJ2luIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGBudWxsYC4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYHVuZGVmaW5lZGAuJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG4gICAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKGV4cGVjdGVkVHlwZSkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gZXhwZWN0ZWRUeXBlKSB7XG4gICAgICAgIC8vIGBwcm9wVmFsdWVgIGJlaW5nIGluc3RhbmNlIG9mLCBzYXksIGRhdGUvcmVnZXhwLCBwYXNzIHRoZSAnb2JqZWN0J1xuICAgICAgICAvLyBjaGVjaywgYnV0IHdlIGNhbiBvZmZlciBhIG1vcmUgcHJlY2lzZSBlcnJvciBtZXNzYWdlIGhlcmUgcmF0aGVyIHRoYW5cbiAgICAgICAgLy8gJ29mIHR5cGUgYG9iamVjdGAnLlxuICAgICAgICB2YXIgcHJlY2lzZVR5cGUgPSBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByZWNpc2VUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdgJyArIGV4cGVjdGVkVHlwZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQW55VHlwZUNoZWNrZXIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIGFycmF5T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gYXJyYXkuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBpLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJ1snICsgaSArICddJywgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFSZWFjdElzLmlzVmFsaWRFbGVtZW50VHlwZShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudCB0eXBlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgICB2YXIgYWN0dWFsQ2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKHByb3BzW3Byb3BOYW1lXSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIGFjdHVhbENsYXNzTmFtZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnaW5zdGFuY2Ugb2YgYCcgKyBleHBlY3RlZENsYXNzTmFtZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRW51bVR5cGVDaGVja2VyKGV4cGVjdGVkVmFsdWVzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVmFsdWVzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnRzIHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheSwgZ290ICcgKyBhcmd1bWVudHMubGVuZ3RoICsgJyBhcmd1bWVudHMuICcgK1xuICAgICAgICAgICAgJ0EgY29tbW9uIG1pc3Rha2UgaXMgdG8gd3JpdGUgb25lT2YoeCwgeSwgeikgaW5zdGVhZCBvZiBvbmVPZihbeCwgeSwgel0pLidcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXkuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwZWN0ZWRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzLCBmdW5jdGlvbiByZXBsYWNlcihrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBTdHJpbmcocHJvcFZhbHVlKSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBvbmUgb2YgJyArIHZhbHVlc1N0cmluZyArICcuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBvYmplY3RPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBvYmplY3QuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHByb3BWYWx1ZSkge1xuICAgICAgICBpZiAoaGFzKHByb3BWYWx1ZSwga2V5KSkge1xuICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVW5pb25UeXBlQ2hlY2tlcihhcnJheU9mVHlwZUNoZWNrZXJzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZSwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLiBFeHBlY3RlZCBhbiBhcnJheSBvZiBjaGVjayBmdW5jdGlvbnMsIGJ1dCAnICtcbiAgICAgICAgICAncmVjZWl2ZWQgJyArIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyhjaGVja2VyKSArICcgYXQgaW5kZXggJyArIGkgKyAnLidcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgICBpZiAoY2hlY2tlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOb2RlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBSZWFjdE5vZGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayBhbGwga2V5cyBpbiBjYXNlIHNvbWUgYXJlIHJlcXVpcmVkIGJ1dCBtaXNzaW5nIGZyb21cbiAgICAgIC8vIHByb3BzLlxuICAgICAgdmFyIGFsbEtleXMgPSBhc3NpZ24oe30sIHByb3BzW3Byb3BOYW1lXSwgc2hhcGVUeXBlcyk7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gYWxsS2V5cykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGtleSBgJyArIGtleSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLicgK1xuICAgICAgICAgICAgJ1xcbkJhZCBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9wc1twcm9wTmFtZV0sIG51bGwsICcgICcpICtcbiAgICAgICAgICAgICdcXG5WYWxpZCBrZXlzOiAnICsgIEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKHNoYXBlVHlwZXMpLCBudWxsLCAnICAnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc05vZGUocHJvcFZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgcHJvcFZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHJldHVybiAhcHJvcFZhbHVlO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBwcm9wVmFsdWUuZXZlcnkoaXNOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcFZhbHVlID09PSBudWxsIHx8IGlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihwcm9wVmFsdWUpO1xuICAgICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBwcm9wVmFsdWUuZW50cmllcykge1xuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICBpZiAoIWlzTm9kZShzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05vZGUoZW50cnlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcbiAgICAvLyBOYXRpdmUgU3ltYm9sLlxuICAgIGlmIChwcm9wVHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIGZhbHN5IHZhbHVlIGNhbid0IGJlIGEgU3ltYm9sXG4gICAgaWYgKCFwcm9wVmFsdWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddID09PSAnU3ltYm9sJ1xuICAgIGlmIChwcm9wVmFsdWVbJ0BAdG9TdHJpbmdUYWcnXSA9PT0gJ1N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrIGZvciBub24tc3BlYyBjb21wbGlhbnQgU3ltYm9scyB3aGljaCBhcmUgcG9seWZpbGxlZC5cbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9wVmFsdWUgaW5zdGFuY2VvZiBTeW1ib2wpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEVxdWl2YWxlbnQgb2YgYHR5cGVvZmAgYnV0IHdpdGggc3BlY2lhbCBoYW5kbGluZyBmb3IgYXJyYXkgYW5kIHJlZ2V4cC5cbiAgZnVuY3Rpb24gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSB7XG4gICAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ2FycmF5JztcbiAgICB9XG4gICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgLy8gT2xkIHdlYmtpdHMgKGF0IGxlYXN0IHVudGlsIEFuZHJvaWQgNC4wKSByZXR1cm4gJ2Z1bmN0aW9uJyByYXRoZXIgdGhhblxuICAgICAgLy8gJ29iamVjdCcgZm9yIHR5cGVvZiBhIFJlZ0V4cC4gV2UnbGwgbm9ybWFsaXplIHRoaXMgaGVyZSBzbyB0aGF0IC9ibGEvXG4gICAgICAvLyBwYXNzZXMgUHJvcFR5cGVzLm9iamVjdC5cbiAgICAgIHJldHVybiAnb2JqZWN0JztcbiAgICB9XG4gICAgaWYgKGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ3N5bWJvbCc7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFRoaXMgaGFuZGxlcyBtb3JlIHR5cGVzIHRoYW4gYGdldFByb3BUeXBlYC4gT25seSB1c2VkIGZvciBlcnJvciBtZXNzYWdlcy5cbiAgLy8gU2VlIGBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcmAuXG4gIGZ1bmN0aW9uIGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSkge1xuICAgIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAndW5kZWZpbmVkJyB8fCBwcm9wVmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJyArIHByb3BWYWx1ZTtcbiAgICB9XG4gICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICBpZiAocHJvcFR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4gJ2RhdGUnO1xuICAgICAgfSBlbHNlIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgcmV0dXJuICdyZWdleHAnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgcG9zdGZpeGVkIHRvIGEgd2FybmluZyBhYm91dCBhbiBpbnZhbGlkIHR5cGUuXG4gIC8vIEZvciBleGFtcGxlLCBcInVuZGVmaW5lZFwiIG9yIFwib2YgdHlwZSBhcnJheVwiXG4gIGZ1bmN0aW9uIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyh2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgcmV0dXJuICdhbiAnICsgdHlwZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICBjYXNlICdyZWdleHAnOlxuICAgICAgICByZXR1cm4gJ2EgJyArIHR5cGU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdCwgaWYgYW55LlxuICBmdW5jdGlvbiBnZXRDbGFzc05hbWUocHJvcFZhbHVlKSB7XG4gICAgaWYgKCFwcm9wVmFsdWUuY29uc3RydWN0b3IgfHwgIXByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICByZXR1cm4gQU5PTllNT1VTO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGNoZWNrUHJvcFR5cGVzO1xuICBSZWFjdFByb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShSZWFjdElzLmlzRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSBkbGxfNTAzMGYzODdkMzI4ZTQ0MTU3ODUgKi8gXCJkbGwtcmVmZXJlbmNlIGRsbF81MDMwZjM4N2QzMjhlNDQxNTc4NVwiKSkoXCIuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qc1wiKTsiLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG4vLyBJZiBvYmouaGFzT3duUHJvcGVydHkgaGFzIGJlZW4gb3ZlcnJpZGRlbiwgdGhlbiBjYWxsaW5nXG4vLyBvYmouaGFzT3duUHJvcGVydHkocHJvcCkgd2lsbCBicmVhay5cbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2pveWVudC9ub2RlL2lzc3Vlcy8xNzA3XG5mdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHFzLCBzZXAsIGVxLCBvcHRpb25zKSB7XG4gIHNlcCA9IHNlcCB8fCAnJic7XG4gIGVxID0gZXEgfHwgJz0nO1xuICB2YXIgb2JqID0ge307XG5cbiAgaWYgKHR5cGVvZiBxcyAhPT0gJ3N0cmluZycgfHwgcXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIHZhciByZWdleHAgPSAvXFwrL2c7XG4gIHFzID0gcXMuc3BsaXQoc2VwKTtcblxuICB2YXIgbWF4S2V5cyA9IDEwMDA7XG4gIGlmIChvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLm1heEtleXMgPT09ICdudW1iZXInKSB7XG4gICAgbWF4S2V5cyA9IG9wdGlvbnMubWF4S2V5cztcbiAgfVxuXG4gIHZhciBsZW4gPSBxcy5sZW5ndGg7XG4gIC8vIG1heEtleXMgPD0gMCBtZWFucyB0aGF0IHdlIHNob3VsZCBub3QgbGltaXQga2V5cyBjb3VudFxuICBpZiAobWF4S2V5cyA+IDAgJiYgbGVuID4gbWF4S2V5cykge1xuICAgIGxlbiA9IG1heEtleXM7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgdmFyIHggPSBxc1tpXS5yZXBsYWNlKHJlZ2V4cCwgJyUyMCcpLFxuICAgICAgICBpZHggPSB4LmluZGV4T2YoZXEpLFxuICAgICAgICBrc3RyLCB2c3RyLCBrLCB2O1xuXG4gICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICBrc3RyID0geC5zdWJzdHIoMCwgaWR4KTtcbiAgICAgIHZzdHIgPSB4LnN1YnN0cihpZHggKyAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAga3N0ciA9IHg7XG4gICAgICB2c3RyID0gJyc7XG4gICAgfVxuXG4gICAgayA9IGRlY29kZVVSSUNvbXBvbmVudChrc3RyKTtcbiAgICB2ID0gZGVjb2RlVVJJQ29tcG9uZW50KHZzdHIpO1xuXG4gICAgaWYgKCFoYXNPd25Qcm9wZXJ0eShvYmosIGspKSB7XG4gICAgICBvYmpba10gPSB2O1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheShvYmpba10pKSB7XG4gICAgICBvYmpba10ucHVzaCh2KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqW2tdID0gW29ialtrXSwgdl07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9iajtcbn07XG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoeHMpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4cykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHN0cmluZ2lmeVByaW1pdGl2ZSA9IGZ1bmN0aW9uKHYpIHtcbiAgc3dpdGNoICh0eXBlb2Ygdikge1xuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICByZXR1cm4gdjtcblxuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgcmV0dXJuIHYgPyAndHJ1ZScgOiAnZmFsc2UnO1xuXG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIHJldHVybiBpc0Zpbml0ZSh2KSA/IHYgOiAnJztcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gJyc7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqLCBzZXAsIGVxLCBuYW1lKSB7XG4gIHNlcCA9IHNlcCB8fCAnJic7XG4gIGVxID0gZXEgfHwgJz0nO1xuICBpZiAob2JqID09PSBudWxsKSB7XG4gICAgb2JqID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG1hcChvYmplY3RLZXlzKG9iaiksIGZ1bmN0aW9uKGspIHtcbiAgICAgIHZhciBrcyA9IGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUoaykpICsgZXE7XG4gICAgICBpZiAoaXNBcnJheShvYmpba10pKSB7XG4gICAgICAgIHJldHVybiBtYXAob2JqW2tdLCBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgcmV0dXJuIGtzICsgZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZSh2KSk7XG4gICAgICAgIH0pLmpvaW4oc2VwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBrcyArIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUob2JqW2tdKSk7XG4gICAgICB9XG4gICAgfSkuam9pbihzZXApO1xuXG4gIH1cblxuICBpZiAoIW5hbWUpIHJldHVybiAnJztcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUobmFtZSkpICsgZXEgK1xuICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShvYmopKTtcbn07XG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoeHMpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4cykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuXG5mdW5jdGlvbiBtYXAgKHhzLCBmKSB7XG4gIGlmICh4cy5tYXApIHJldHVybiB4cy5tYXAoZik7XG4gIHZhciByZXMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgIHJlcy5wdXNoKGYoeHNbaV0sIGkpKTtcbiAgfVxuICByZXR1cm4gcmVzO1xufVxuXG52YXIgb2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIChvYmopIHtcbiAgdmFyIHJlcyA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHJlcy5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuZGVjb2RlID0gZXhwb3J0cy5wYXJzZSA9IHJlcXVpcmUoJy4vZGVjb2RlJyk7XG5leHBvcnRzLmVuY29kZSA9IGV4cG9ydHMuc3RyaW5naWZ5ID0gcmVxdWlyZSgnLi9lbmNvZGUnKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgZGxsXzUwMzBmMzg3ZDMyOGU0NDE1Nzg1ICovIFwiZGxsLXJlZmVyZW5jZSBkbGxfNTAzMGYzODdkMzI4ZTQ0MTU3ODVcIikpKFwiLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL2luZGV4LmpzXCIpOyIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlOyAvLyBUT0RPOiBXZSBkb24ndCB1c2UgQXN5bmNNb2RlIG9yIENvbmN1cnJlbnRNb2RlIGFueW1vcmUuIFRoZXkgd2VyZSB0ZW1wb3Jhcnlcbi8vICh1bnN0YWJsZSkgQVBJcyB0aGF0IGhhdmUgYmVlbiByZW1vdmVkLiBDYW4gd2UgcmVtb3ZlIHRoZSBzeW1ib2xzP1xuXG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfU0NPUEVfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFKTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IC8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcblxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IHZhciBSZWFjdFJlZHV4Q29udGV4dCA9XG4vKiNfX1BVUkVfXyovXG5SZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBSZWFjdFJlZHV4Q29udGV4dC5kaXNwbGF5TmFtZSA9ICdSZWFjdFJlZHV4Jztcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3RSZWR1eENvbnRleHQ7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBSZWFjdFJlZHV4Q29udGV4dCB9IGZyb20gJy4vQ29udGV4dCc7XG5pbXBvcnQgU3Vic2NyaXB0aW9uIGZyb20gJy4uL3V0aWxzL1N1YnNjcmlwdGlvbic7XG5cbmZ1bmN0aW9uIFByb3ZpZGVyKF9yZWYpIHtcbiAgdmFyIHN0b3JlID0gX3JlZi5zdG9yZSxcbiAgICAgIGNvbnRleHQgPSBfcmVmLmNvbnRleHQsXG4gICAgICBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW47XG4gIHZhciBjb250ZXh0VmFsdWUgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbihzdG9yZSk7XG4gICAgc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UgPSBzdWJzY3JpcHRpb24ubm90aWZ5TmVzdGVkU3VicztcbiAgICByZXR1cm4ge1xuICAgICAgc3RvcmU6IHN0b3JlLFxuICAgICAgc3Vic2NyaXB0aW9uOiBzdWJzY3JpcHRpb25cbiAgICB9O1xuICB9LCBbc3RvcmVdKTtcbiAgdmFyIHByZXZpb3VzU3RhdGUgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgfSwgW3N0b3JlXSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN1YnNjcmlwdGlvbiA9IGNvbnRleHRWYWx1ZS5zdWJzY3JpcHRpb247XG4gICAgc3Vic2NyaXB0aW9uLnRyeVN1YnNjcmliZSgpO1xuXG4gICAgaWYgKHByZXZpb3VzU3RhdGUgIT09IHN0b3JlLmdldFN0YXRlKCkpIHtcbiAgICAgIHN1YnNjcmlwdGlvbi5ub3RpZnlOZXN0ZWRTdWJzKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHN1YnNjcmlwdGlvbi50cnlVbnN1YnNjcmliZSgpO1xuICAgICAgc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UgPSBudWxsO1xuICAgIH07XG4gIH0sIFtjb250ZXh0VmFsdWUsIHByZXZpb3VzU3RhdGVdKTtcbiAgdmFyIENvbnRleHQgPSBjb250ZXh0IHx8IFJlYWN0UmVkdXhDb250ZXh0O1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGNvbnRleHRWYWx1ZVxuICB9LCBjaGlsZHJlbik7XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIFByb3ZpZGVyLnByb3BUeXBlcyA9IHtcbiAgICBzdG9yZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHN1YnNjcmliZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIGRpc3BhdGNoOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgZ2V0U3RhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgICB9KSxcbiAgICBjb250ZXh0OiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb3ZpZGVyOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5pbXBvcnQgaG9pc3RTdGF0aWNzIGZyb20gJ2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VNZW1vLCB1c2VSZWYsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBpc1ZhbGlkRWxlbWVudFR5cGUsIGlzQ29udGV4dENvbnN1bWVyIH0gZnJvbSAncmVhY3QtaXMnO1xuaW1wb3J0IFN1YnNjcmlwdGlvbiBmcm9tICcuLi91dGlscy9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCB9IGZyb20gJy4uL3V0aWxzL3VzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QnO1xuaW1wb3J0IHsgUmVhY3RSZWR1eENvbnRleHQgfSBmcm9tICcuL0NvbnRleHQnOyAvLyBEZWZpbmUgc29tZSBjb25zdGFudCBhcnJheXMganVzdCB0byBhdm9pZCByZS1jcmVhdGluZyB0aGVzZVxuXG52YXIgRU1QVFlfQVJSQVkgPSBbXTtcbnZhciBOT19TVUJTQ1JJUFRJT05fQVJSQVkgPSBbbnVsbCwgbnVsbF07XG5cbnZhciBzdHJpbmdpZnlDb21wb25lbnQgPSBmdW5jdGlvbiBzdHJpbmdpZnlDb21wb25lbnQoQ29tcCkge1xuICB0cnkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShDb21wKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIFN0cmluZyhDb21wKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gc3RvcmVTdGF0ZVVwZGF0ZXNSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcbiAgdmFyIHVwZGF0ZUNvdW50ID0gc3RhdGVbMV07XG4gIHJldHVybiBbYWN0aW9uLnBheWxvYWQsIHVwZGF0ZUNvdW50ICsgMV07XG59XG5cbmZ1bmN0aW9uIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3RXaXRoQXJncyhlZmZlY3RGdW5jLCBlZmZlY3RBcmdzLCBkZXBlbmRlbmNpZXMpIHtcbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGVmZmVjdEZ1bmMuYXBwbHkodm9pZCAwLCBlZmZlY3RBcmdzKTtcbiAgfSwgZGVwZW5kZW5jaWVzKTtcbn1cblxuZnVuY3Rpb24gY2FwdHVyZVdyYXBwZXJQcm9wcyhsYXN0V3JhcHBlclByb3BzLCBsYXN0Q2hpbGRQcm9wcywgcmVuZGVySXNTY2hlZHVsZWQsIHdyYXBwZXJQcm9wcywgYWN0dWFsQ2hpbGRQcm9wcywgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZSwgbm90aWZ5TmVzdGVkU3Vicykge1xuICAvLyBXZSB3YW50IHRvIGNhcHR1cmUgdGhlIHdyYXBwZXIgcHJvcHMgYW5kIGNoaWxkIHByb3BzIHdlIHVzZWQgZm9yIGxhdGVyIGNvbXBhcmlzb25zXG4gIGxhc3RXcmFwcGVyUHJvcHMuY3VycmVudCA9IHdyYXBwZXJQcm9wcztcbiAgbGFzdENoaWxkUHJvcHMuY3VycmVudCA9IGFjdHVhbENoaWxkUHJvcHM7XG4gIHJlbmRlcklzU2NoZWR1bGVkLmN1cnJlbnQgPSBmYWxzZTsgLy8gSWYgdGhlIHJlbmRlciB3YXMgZnJvbSBhIHN0b3JlIHVwZGF0ZSwgY2xlYXIgb3V0IHRoYXQgcmVmZXJlbmNlIGFuZCBjYXNjYWRlIHRoZSBzdWJzY3JpYmVyIHVwZGF0ZVxuXG4gIGlmIChjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQpIHtcbiAgICBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQgPSBudWxsO1xuICAgIG5vdGlmeU5lc3RlZFN1YnMoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdWJzY3JpYmVVcGRhdGVzKHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcywgc3RvcmUsIHN1YnNjcmlwdGlvbiwgY2hpbGRQcm9wc1NlbGVjdG9yLCBsYXN0V3JhcHBlclByb3BzLCBsYXN0Q2hpbGRQcm9wcywgcmVuZGVySXNTY2hlZHVsZWQsIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUsIG5vdGlmeU5lc3RlZFN1YnMsIGZvcmNlQ29tcG9uZW50VXBkYXRlRGlzcGF0Y2gpIHtcbiAgLy8gSWYgd2UncmUgbm90IHN1YnNjcmliZWQgdG8gdGhlIHN0b3JlLCBub3RoaW5nIHRvIGRvIGhlcmVcbiAgaWYgKCFzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMpIHJldHVybjsgLy8gQ2FwdHVyZSB2YWx1ZXMgZm9yIGNoZWNraW5nIGlmIGFuZCB3aGVuIHRoaXMgY29tcG9uZW50IHVubW91bnRzXG5cbiAgdmFyIGRpZFVuc3Vic2NyaWJlID0gZmFsc2U7XG4gIHZhciBsYXN0VGhyb3duRXJyb3IgPSBudWxsOyAvLyBXZSdsbCBydW4gdGhpcyBjYWxsYmFjayBldmVyeSB0aW1lIGEgc3RvcmUgc3Vic2NyaXB0aW9uIHVwZGF0ZSBwcm9wYWdhdGVzIHRvIHRoaXMgY29tcG9uZW50XG5cbiAgdmFyIGNoZWNrRm9yVXBkYXRlcyA9IGZ1bmN0aW9uIGNoZWNrRm9yVXBkYXRlcygpIHtcbiAgICBpZiAoZGlkVW5zdWJzY3JpYmUpIHtcbiAgICAgIC8vIERvbid0IHJ1biBzdGFsZSBsaXN0ZW5lcnMuXG4gICAgICAvLyBSZWR1eCBkb2Vzbid0IGd1YXJhbnRlZSB1bnN1YnNjcmlwdGlvbnMgaGFwcGVuIHVudGlsIG5leHQgZGlzcGF0Y2guXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGxhdGVzdFN0b3JlU3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICAgIHZhciBuZXdDaGlsZFByb3BzLCBlcnJvcjtcblxuICAgIHRyeSB7XG4gICAgICAvLyBBY3R1YWxseSBydW4gdGhlIHNlbGVjdG9yIHdpdGggdGhlIG1vc3QgcmVjZW50IHN0b3JlIHN0YXRlIGFuZCB3cmFwcGVyIHByb3BzXG4gICAgICAvLyB0byBkZXRlcm1pbmUgd2hhdCB0aGUgY2hpbGQgcHJvcHMgc2hvdWxkIGJlXG4gICAgICBuZXdDaGlsZFByb3BzID0gY2hpbGRQcm9wc1NlbGVjdG9yKGxhdGVzdFN0b3JlU3RhdGUsIGxhc3RXcmFwcGVyUHJvcHMuY3VycmVudCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZXJyb3IgPSBlO1xuICAgICAgbGFzdFRocm93bkVycm9yID0gZTtcbiAgICB9XG5cbiAgICBpZiAoIWVycm9yKSB7XG4gICAgICBsYXN0VGhyb3duRXJyb3IgPSBudWxsO1xuICAgIH0gLy8gSWYgdGhlIGNoaWxkIHByb3BzIGhhdmVuJ3QgY2hhbmdlZCwgbm90aGluZyB0byBkbyBoZXJlIC0gY2FzY2FkZSB0aGUgc3Vic2NyaXB0aW9uIHVwZGF0ZVxuXG5cbiAgICBpZiAobmV3Q2hpbGRQcm9wcyA9PT0gbGFzdENoaWxkUHJvcHMuY3VycmVudCkge1xuICAgICAgaWYgKCFyZW5kZXJJc1NjaGVkdWxlZC5jdXJyZW50KSB7XG4gICAgICAgIG5vdGlmeU5lc3RlZFN1YnMoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU2F2ZSByZWZlcmVuY2VzIHRvIHRoZSBuZXcgY2hpbGQgcHJvcHMuICBOb3RlIHRoYXQgd2UgdHJhY2sgdGhlIFwiY2hpbGQgcHJvcHMgZnJvbSBzdG9yZSB1cGRhdGVcIlxuICAgICAgLy8gYXMgYSByZWYgaW5zdGVhZCBvZiBhIHVzZVN0YXRlL3VzZVJlZHVjZXIgYmVjYXVzZSB3ZSBuZWVkIGEgd2F5IHRvIGRldGVybWluZSBpZiB0aGF0IHZhbHVlIGhhc1xuICAgICAgLy8gYmVlbiBwcm9jZXNzZWQuICBJZiB0aGlzIHdlbnQgaW50byB1c2VTdGF0ZS91c2VSZWR1Y2VyLCB3ZSBjb3VsZG4ndCBjbGVhciBvdXQgdGhlIHZhbHVlIHdpdGhvdXRcbiAgICAgIC8vIGZvcmNpbmcgYW5vdGhlciByZS1yZW5kZXIsIHdoaWNoIHdlIGRvbid0IHdhbnQuXG4gICAgICBsYXN0Q2hpbGRQcm9wcy5jdXJyZW50ID0gbmV3Q2hpbGRQcm9wcztcbiAgICAgIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudCA9IG5ld0NoaWxkUHJvcHM7XG4gICAgICByZW5kZXJJc1NjaGVkdWxlZC5jdXJyZW50ID0gdHJ1ZTsgLy8gSWYgdGhlIGNoaWxkIHByb3BzIF9kaWRfIGNoYW5nZSAob3Igd2UgY2F1Z2h0IGFuIGVycm9yKSwgdGhpcyB3cmFwcGVyIGNvbXBvbmVudCBuZWVkcyB0byByZS1yZW5kZXJcblxuICAgICAgZm9yY2VDb21wb25lbnRVcGRhdGVEaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6ICdTVE9SRV9VUERBVEVEJyxcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIGVycm9yOiBlcnJvclxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07IC8vIEFjdHVhbGx5IHN1YnNjcmliZSB0byB0aGUgbmVhcmVzdCBjb25uZWN0ZWQgYW5jZXN0b3IgKG9yIHN0b3JlKVxuXG5cbiAgc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UgPSBjaGVja0ZvclVwZGF0ZXM7XG4gIHN1YnNjcmlwdGlvbi50cnlTdWJzY3JpYmUoKTsgLy8gUHVsbCBkYXRhIGZyb20gdGhlIHN0b3JlIGFmdGVyIGZpcnN0IHJlbmRlciBpbiBjYXNlIHRoZSBzdG9yZSBoYXNcbiAgLy8gY2hhbmdlZCBzaW5jZSB3ZSBiZWdhbi5cblxuICBjaGVja0ZvclVwZGF0ZXMoKTtcblxuICB2YXIgdW5zdWJzY3JpYmVXcmFwcGVyID0gZnVuY3Rpb24gdW5zdWJzY3JpYmVXcmFwcGVyKCkge1xuICAgIGRpZFVuc3Vic2NyaWJlID0gdHJ1ZTtcbiAgICBzdWJzY3JpcHRpb24udHJ5VW5zdWJzY3JpYmUoKTtcbiAgICBzdWJzY3JpcHRpb24ub25TdGF0ZUNoYW5nZSA9IG51bGw7XG5cbiAgICBpZiAobGFzdFRocm93bkVycm9yKSB7XG4gICAgICAvLyBJdCdzIHBvc3NpYmxlIHRoYXQgd2UgY2F1Z2h0IGFuIGVycm9yIGR1ZSB0byBhIGJhZCBtYXBTdGF0ZSBmdW5jdGlvbiwgYnV0IHRoZVxuICAgICAgLy8gcGFyZW50IHJlLXJlbmRlcmVkIHdpdGhvdXQgdGhpcyBjb21wb25lbnQgYW5kIHdlJ3JlIGFib3V0IHRvIHVubW91bnQuXG4gICAgICAvLyBUaGlzIHNob3VsZG4ndCBoYXBwZW4gYXMgbG9uZyBhcyB3ZSBkbyB0b3AtZG93biBzdWJzY3JpcHRpb25zIGNvcnJlY3RseSwgYnV0XG4gICAgICAvLyBpZiB3ZSBldmVyIGRvIHRob3NlIHdyb25nLCB0aGlzIHRocm93IHdpbGwgc3VyZmFjZSB0aGUgZXJyb3IgaW4gb3VyIHRlc3RzLlxuICAgICAgLy8gSW4gdGhhdCBjYXNlLCB0aHJvdyB0aGUgZXJyb3IgZnJvbSBoZXJlIHNvIGl0IGRvZXNuJ3QgZ2V0IGxvc3QuXG4gICAgICB0aHJvdyBsYXN0VGhyb3duRXJyb3I7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1bnN1YnNjcmliZVdyYXBwZXI7XG59XG5cbnZhciBpbml0U3RhdGVVcGRhdGVzID0gZnVuY3Rpb24gaW5pdFN0YXRlVXBkYXRlcygpIHtcbiAgcmV0dXJuIFtudWxsLCAwXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbm5lY3RBZHZhbmNlZChcbi8qXHJcbiAgc2VsZWN0b3JGYWN0b3J5IGlzIGEgZnVuYyB0aGF0IGlzIHJlc3BvbnNpYmxlIGZvciByZXR1cm5pbmcgdGhlIHNlbGVjdG9yIGZ1bmN0aW9uIHVzZWQgdG9cclxuICBjb21wdXRlIG5ldyBwcm9wcyBmcm9tIHN0YXRlLCBwcm9wcywgYW5kIGRpc3BhdGNoLiBGb3IgZXhhbXBsZTpcclxuICAgICAgZXhwb3J0IGRlZmF1bHQgY29ubmVjdEFkdmFuY2VkKChkaXNwYXRjaCwgb3B0aW9ucykgPT4gKHN0YXRlLCBwcm9wcykgPT4gKHtcclxuICAgICAgdGhpbmc6IHN0YXRlLnRoaW5nc1twcm9wcy50aGluZ0lkXSxcclxuICAgICAgc2F2ZVRoaW5nOiBmaWVsZHMgPT4gZGlzcGF0Y2goYWN0aW9uQ3JlYXRvcnMuc2F2ZVRoaW5nKHByb3BzLnRoaW5nSWQsIGZpZWxkcykpLFxyXG4gICAgfSkpKFlvdXJDb21wb25lbnQpXHJcbiAgICBBY2Nlc3MgdG8gZGlzcGF0Y2ggaXMgcHJvdmlkZWQgdG8gdGhlIGZhY3Rvcnkgc28gc2VsZWN0b3JGYWN0b3JpZXMgY2FuIGJpbmQgYWN0aW9uQ3JlYXRvcnNcclxuICBvdXRzaWRlIG9mIHRoZWlyIHNlbGVjdG9yIGFzIGFuIG9wdGltaXphdGlvbi4gT3B0aW9ucyBwYXNzZWQgdG8gY29ubmVjdEFkdmFuY2VkIGFyZSBwYXNzZWQgdG9cclxuICB0aGUgc2VsZWN0b3JGYWN0b3J5LCBhbG9uZyB3aXRoIGRpc3BsYXlOYW1lIGFuZCBXcmFwcGVkQ29tcG9uZW50LCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LlxyXG4gICAgTm90ZSB0aGF0IHNlbGVjdG9yRmFjdG9yeSBpcyByZXNwb25zaWJsZSBmb3IgYWxsIGNhY2hpbmcvbWVtb2l6YXRpb24gb2YgaW5ib3VuZCBhbmQgb3V0Ym91bmRcclxuICBwcm9wcy4gRG8gbm90IHVzZSBjb25uZWN0QWR2YW5jZWQgZGlyZWN0bHkgd2l0aG91dCBtZW1vaXppbmcgcmVzdWx0cyBiZXR3ZWVuIGNhbGxzIHRvIHlvdXJcclxuICBzZWxlY3Rvciwgb3RoZXJ3aXNlIHRoZSBDb25uZWN0IGNvbXBvbmVudCB3aWxsIHJlLXJlbmRlciBvbiBldmVyeSBzdGF0ZSBvciBwcm9wcyBjaGFuZ2UuXHJcbiovXG5zZWxlY3RvckZhY3RvcnksIC8vIG9wdGlvbnMgb2JqZWN0OlxuX3JlZikge1xuICBpZiAoX3JlZiA9PT0gdm9pZCAwKSB7XG4gICAgX3JlZiA9IHt9O1xuICB9XG5cbiAgdmFyIF9yZWYyID0gX3JlZixcbiAgICAgIF9yZWYyJGdldERpc3BsYXlOYW1lID0gX3JlZjIuZ2V0RGlzcGxheU5hbWUsXG4gICAgICBnZXREaXNwbGF5TmFtZSA9IF9yZWYyJGdldERpc3BsYXlOYW1lID09PSB2b2lkIDAgPyBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiBcIkNvbm5lY3RBZHZhbmNlZChcIiArIG5hbWUgKyBcIilcIjtcbiAgfSA6IF9yZWYyJGdldERpc3BsYXlOYW1lLFxuICAgICAgX3JlZjIkbWV0aG9kTmFtZSA9IF9yZWYyLm1ldGhvZE5hbWUsXG4gICAgICBtZXRob2ROYW1lID0gX3JlZjIkbWV0aG9kTmFtZSA9PT0gdm9pZCAwID8gJ2Nvbm5lY3RBZHZhbmNlZCcgOiBfcmVmMiRtZXRob2ROYW1lLFxuICAgICAgX3JlZjIkcmVuZGVyQ291bnRQcm9wID0gX3JlZjIucmVuZGVyQ291bnRQcm9wLFxuICAgICAgcmVuZGVyQ291bnRQcm9wID0gX3JlZjIkcmVuZGVyQ291bnRQcm9wID09PSB2b2lkIDAgPyB1bmRlZmluZWQgOiBfcmVmMiRyZW5kZXJDb3VudFByb3AsXG4gICAgICBfcmVmMiRzaG91bGRIYW5kbGVTdGEgPSBfcmVmMi5zaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMsXG4gICAgICBzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMgPSBfcmVmMiRzaG91bGRIYW5kbGVTdGEgPT09IHZvaWQgMCA/IHRydWUgOiBfcmVmMiRzaG91bGRIYW5kbGVTdGEsXG4gICAgICBfcmVmMiRzdG9yZUtleSA9IF9yZWYyLnN0b3JlS2V5LFxuICAgICAgc3RvcmVLZXkgPSBfcmVmMiRzdG9yZUtleSA9PT0gdm9pZCAwID8gJ3N0b3JlJyA6IF9yZWYyJHN0b3JlS2V5LFxuICAgICAgX3JlZjIkd2l0aFJlZiA9IF9yZWYyLndpdGhSZWYsXG4gICAgICB3aXRoUmVmID0gX3JlZjIkd2l0aFJlZiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmMiR3aXRoUmVmLFxuICAgICAgX3JlZjIkZm9yd2FyZFJlZiA9IF9yZWYyLmZvcndhcmRSZWYsXG4gICAgICBmb3J3YXJkUmVmID0gX3JlZjIkZm9yd2FyZFJlZiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmMiRmb3J3YXJkUmVmLFxuICAgICAgX3JlZjIkY29udGV4dCA9IF9yZWYyLmNvbnRleHQsXG4gICAgICBjb250ZXh0ID0gX3JlZjIkY29udGV4dCA9PT0gdm9pZCAwID8gUmVhY3RSZWR1eENvbnRleHQgOiBfcmVmMiRjb250ZXh0LFxuICAgICAgY29ubmVjdE9wdGlvbnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmMiwgW1wiZ2V0RGlzcGxheU5hbWVcIiwgXCJtZXRob2ROYW1lXCIsIFwicmVuZGVyQ291bnRQcm9wXCIsIFwic2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzXCIsIFwic3RvcmVLZXlcIiwgXCJ3aXRoUmVmXCIsIFwiZm9yd2FyZFJlZlwiLCBcImNvbnRleHRcIl0pO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKHJlbmRlckNvdW50UHJvcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJyZW5kZXJDb3VudFByb3AgaXMgcmVtb3ZlZC4gcmVuZGVyIGNvdW50aW5nIGlzIGJ1aWx0IGludG8gdGhlIGxhdGVzdCBSZWFjdCBEZXYgVG9vbHMgcHJvZmlsaW5nIGV4dGVuc2lvblwiKTtcbiAgICB9XG5cbiAgICBpZiAod2l0aFJlZikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCd3aXRoUmVmIGlzIHJlbW92ZWQuIFRvIGFjY2VzcyB0aGUgd3JhcHBlZCBpbnN0YW5jZSwgdXNlIGEgcmVmIG9uIHRoZSBjb25uZWN0ZWQgY29tcG9uZW50Jyk7XG4gICAgfVxuXG4gICAgdmFyIGN1c3RvbVN0b3JlV2FybmluZ01lc3NhZ2UgPSAnVG8gdXNlIGEgY3VzdG9tIFJlZHV4IHN0b3JlIGZvciBzcGVjaWZpYyBjb21wb25lbnRzLCBjcmVhdGUgYSBjdXN0b20gUmVhY3QgY29udGV4dCB3aXRoICcgKyBcIlJlYWN0LmNyZWF0ZUNvbnRleHQoKSwgYW5kIHBhc3MgdGhlIGNvbnRleHQgb2JqZWN0IHRvIFJlYWN0IFJlZHV4J3MgUHJvdmlkZXIgYW5kIHNwZWNpZmljIGNvbXBvbmVudHNcIiArICcgbGlrZTogPFByb3ZpZGVyIGNvbnRleHQ9e015Q29udGV4dH0+PENvbm5lY3RlZENvbXBvbmVudCBjb250ZXh0PXtNeUNvbnRleHR9IC8+PC9Qcm92aWRlcj4uICcgKyAnWW91IG1heSBhbHNvIHBhc3MgYSB7Y29udGV4dCA6IE15Q29udGV4dH0gb3B0aW9uIHRvIGNvbm5lY3QnO1xuXG4gICAgaWYgKHN0b3JlS2V5ICE9PSAnc3RvcmUnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3N0b3JlS2V5IGhhcyBiZWVuIHJlbW92ZWQgYW5kIGRvZXMgbm90IGRvIGFueXRoaW5nLiAnICsgY3VzdG9tU3RvcmVXYXJuaW5nTWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIENvbnRleHQgPSBjb250ZXh0O1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcFdpdGhDb25uZWN0KFdyYXBwZWRDb21wb25lbnQpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhaXNWYWxpZEVsZW1lbnRUeXBlKFdyYXBwZWRDb21wb25lbnQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgbXVzdCBwYXNzIGEgY29tcG9uZW50IHRvIHRoZSBmdW5jdGlvbiByZXR1cm5lZCBieSBcIiArIChtZXRob2ROYW1lICsgXCIuIEluc3RlYWQgcmVjZWl2ZWQgXCIgKyBzdHJpbmdpZnlDb21wb25lbnQoV3JhcHBlZENvbXBvbmVudCkpKTtcbiAgICB9XG5cbiAgICB2YXIgd3JhcHBlZENvbXBvbmVudE5hbWUgPSBXcmFwcGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IFdyYXBwZWRDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JztcbiAgICB2YXIgZGlzcGxheU5hbWUgPSBnZXREaXNwbGF5TmFtZSh3cmFwcGVkQ29tcG9uZW50TmFtZSk7XG5cbiAgICB2YXIgc2VsZWN0b3JGYWN0b3J5T3B0aW9ucyA9IF9leHRlbmRzKHt9LCBjb25uZWN0T3B0aW9ucywge1xuICAgICAgZ2V0RGlzcGxheU5hbWU6IGdldERpc3BsYXlOYW1lLFxuICAgICAgbWV0aG9kTmFtZTogbWV0aG9kTmFtZSxcbiAgICAgIHJlbmRlckNvdW50UHJvcDogcmVuZGVyQ291bnRQcm9wLFxuICAgICAgc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzOiBzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMsXG4gICAgICBzdG9yZUtleTogc3RvcmVLZXksXG4gICAgICBkaXNwbGF5TmFtZTogZGlzcGxheU5hbWUsXG4gICAgICB3cmFwcGVkQ29tcG9uZW50TmFtZTogd3JhcHBlZENvbXBvbmVudE5hbWUsXG4gICAgICBXcmFwcGVkQ29tcG9uZW50OiBXcmFwcGVkQ29tcG9uZW50XG4gICAgfSk7XG5cbiAgICB2YXIgcHVyZSA9IGNvbm5lY3RPcHRpb25zLnB1cmU7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVDaGlsZFNlbGVjdG9yKHN0b3JlKSB7XG4gICAgICByZXR1cm4gc2VsZWN0b3JGYWN0b3J5KHN0b3JlLmRpc3BhdGNoLCBzZWxlY3RvckZhY3RvcnlPcHRpb25zKTtcbiAgICB9IC8vIElmIHdlIGFyZW4ndCBydW5uaW5nIGluIFwicHVyZVwiIG1vZGUsIHdlIGRvbid0IHdhbnQgdG8gbWVtb2l6ZSB2YWx1ZXMuXG4gICAgLy8gVG8gYXZvaWQgY29uZGl0aW9uYWxseSBjYWxsaW5nIGhvb2tzLCB3ZSBmYWxsIGJhY2sgdG8gYSB0aW55IHdyYXBwZXJcbiAgICAvLyB0aGF0IGp1c3QgZXhlY3V0ZXMgdGhlIGdpdmVuIGNhbGxiYWNrIGltbWVkaWF0ZWx5LlxuXG5cbiAgICB2YXIgdXNlUHVyZU9ubHlNZW1vID0gcHVyZSA/IHVzZU1lbW8gOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBDb25uZWN0RnVuY3Rpb24ocHJvcHMpIHtcbiAgICAgIHZhciBfdXNlTWVtbyA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBEaXN0aW5ndWlzaCBiZXR3ZWVuIGFjdHVhbCBcImRhdGFcIiBwcm9wcyB0aGF0IHdlcmUgcGFzc2VkIHRvIHRoZSB3cmFwcGVyIGNvbXBvbmVudCxcbiAgICAgICAgLy8gYW5kIHZhbHVlcyBuZWVkZWQgdG8gY29udHJvbCBiZWhhdmlvciAoZm9yd2FyZGVkIHJlZnMsIGFsdGVybmF0ZSBjb250ZXh0IGluc3RhbmNlcykuXG4gICAgICAgIC8vIFRvIG1haW50YWluIHRoZSB3cmFwcGVyUHJvcHMgb2JqZWN0IHJlZmVyZW5jZSwgbWVtb2l6ZSB0aGlzIGRlc3RydWN0dXJpbmcuXG4gICAgICAgIHZhciBmb3J3YXJkZWRSZWYgPSBwcm9wcy5mb3J3YXJkZWRSZWYsXG4gICAgICAgICAgICB3cmFwcGVyUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgW1wiZm9yd2FyZGVkUmVmXCJdKTtcblxuICAgICAgICByZXR1cm4gW3Byb3BzLmNvbnRleHQsIGZvcndhcmRlZFJlZiwgd3JhcHBlclByb3BzXTtcbiAgICAgIH0sIFtwcm9wc10pLFxuICAgICAgICAgIHByb3BzQ29udGV4dCA9IF91c2VNZW1vWzBdLFxuICAgICAgICAgIGZvcndhcmRlZFJlZiA9IF91c2VNZW1vWzFdLFxuICAgICAgICAgIHdyYXBwZXJQcm9wcyA9IF91c2VNZW1vWzJdO1xuXG4gICAgICB2YXIgQ29udGV4dFRvVXNlID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFVzZXJzIG1heSBvcHRpb25hbGx5IHBhc3MgaW4gYSBjdXN0b20gY29udGV4dCBpbnN0YW5jZSB0byB1c2UgaW5zdGVhZCBvZiBvdXIgUmVhY3RSZWR1eENvbnRleHQuXG4gICAgICAgIC8vIE1lbW9pemUgdGhlIGNoZWNrIHRoYXQgZGV0ZXJtaW5lcyB3aGljaCBjb250ZXh0IGluc3RhbmNlIHdlIHNob3VsZCB1c2UuXG4gICAgICAgIHJldHVybiBwcm9wc0NvbnRleHQgJiYgcHJvcHNDb250ZXh0LkNvbnN1bWVyICYmIGlzQ29udGV4dENvbnN1bWVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQocHJvcHNDb250ZXh0LkNvbnN1bWVyLCBudWxsKSkgPyBwcm9wc0NvbnRleHQgOiBDb250ZXh0O1xuICAgICAgfSwgW3Byb3BzQ29udGV4dCwgQ29udGV4dF0pOyAvLyBSZXRyaWV2ZSB0aGUgc3RvcmUgYW5kIGFuY2VzdG9yIHN1YnNjcmlwdGlvbiB2aWEgY29udGV4dCwgaWYgYXZhaWxhYmxlXG5cbiAgICAgIHZhciBjb250ZXh0VmFsdWUgPSB1c2VDb250ZXh0KENvbnRleHRUb1VzZSk7IC8vIFRoZSBzdG9yZSBfbXVzdF8gZXhpc3QgYXMgZWl0aGVyIGEgcHJvcCBvciBpbiBjb250ZXh0LlxuICAgICAgLy8gV2UnbGwgY2hlY2sgdG8gc2VlIGlmIGl0IF9sb29rc18gbGlrZSBhIFJlZHV4IHN0b3JlIGZpcnN0LlxuICAgICAgLy8gVGhpcyBhbGxvd3MgdXMgdG8gcGFzcyB0aHJvdWdoIGEgYHN0b3JlYCBwcm9wIHRoYXQgaXMganVzdCBhIHBsYWluIHZhbHVlLlxuXG4gICAgICB2YXIgZGlkU3RvcmVDb21lRnJvbVByb3BzID0gQm9vbGVhbihwcm9wcy5zdG9yZSkgJiYgQm9vbGVhbihwcm9wcy5zdG9yZS5nZXRTdGF0ZSkgJiYgQm9vbGVhbihwcm9wcy5zdG9yZS5kaXNwYXRjaCk7XG4gICAgICB2YXIgZGlkU3RvcmVDb21lRnJvbUNvbnRleHQgPSBCb29sZWFuKGNvbnRleHRWYWx1ZSkgJiYgQm9vbGVhbihjb250ZXh0VmFsdWUuc3RvcmUpO1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhZGlkU3RvcmVDb21lRnJvbVByb3BzICYmICFkaWRTdG9yZUNvbWVGcm9tQ29udGV4dCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBcXFwic3RvcmVcXFwiIGluIHRoZSBjb250ZXh0IG9mIFwiICsgKFwiXFxcIlwiICsgZGlzcGxheU5hbWUgKyBcIlxcXCIuIEVpdGhlciB3cmFwIHRoZSByb290IGNvbXBvbmVudCBpbiBhIDxQcm92aWRlcj4sIFwiKSArIFwib3IgcGFzcyBhIGN1c3RvbSBSZWFjdCBjb250ZXh0IHByb3ZpZGVyIHRvIDxQcm92aWRlcj4gYW5kIHRoZSBjb3JyZXNwb25kaW5nIFwiICsgKFwiUmVhY3QgY29udGV4dCBjb25zdW1lciB0byBcIiArIGRpc3BsYXlOYW1lICsgXCIgaW4gY29ubmVjdCBvcHRpb25zLlwiKSk7XG4gICAgICB9IC8vIEJhc2VkIG9uIHRoZSBwcmV2aW91cyBjaGVjaywgb25lIG9mIHRoZXNlIG11c3QgYmUgdHJ1ZVxuXG5cbiAgICAgIHZhciBzdG9yZSA9IGRpZFN0b3JlQ29tZUZyb21Qcm9wcyA/IHByb3BzLnN0b3JlIDogY29udGV4dFZhbHVlLnN0b3JlO1xuICAgICAgdmFyIGNoaWxkUHJvcHNTZWxlY3RvciA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBUaGUgY2hpbGQgcHJvcHMgc2VsZWN0b3IgbmVlZHMgdGhlIHN0b3JlIHJlZmVyZW5jZSBhcyBhbiBpbnB1dC5cbiAgICAgICAgLy8gUmUtY3JlYXRlIHRoaXMgc2VsZWN0b3Igd2hlbmV2ZXIgdGhlIHN0b3JlIGNoYW5nZXMuXG4gICAgICAgIHJldHVybiBjcmVhdGVDaGlsZFNlbGVjdG9yKHN0b3JlKTtcbiAgICAgIH0sIFtzdG9yZV0pO1xuXG4gICAgICB2YXIgX3VzZU1lbW8yID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzKSByZXR1cm4gTk9fU1VCU0NSSVBUSU9OX0FSUkFZOyAvLyBUaGlzIFN1YnNjcmlwdGlvbidzIHNvdXJjZSBzaG91bGQgbWF0Y2ggd2hlcmUgc3RvcmUgY2FtZSBmcm9tOiBwcm9wcyB2cy4gY29udGV4dC4gQSBjb21wb25lbnRcbiAgICAgICAgLy8gY29ubmVjdGVkIHRvIHRoZSBzdG9yZSB2aWEgcHJvcHMgc2hvdWxkbid0IHVzZSBzdWJzY3JpcHRpb24gZnJvbSBjb250ZXh0LCBvciB2aWNlIHZlcnNhLlxuXG4gICAgICAgIHZhciBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKHN0b3JlLCBkaWRTdG9yZUNvbWVGcm9tUHJvcHMgPyBudWxsIDogY29udGV4dFZhbHVlLnN1YnNjcmlwdGlvbik7IC8vIGBub3RpZnlOZXN0ZWRTdWJzYCBpcyBkdXBsaWNhdGVkIHRvIGhhbmRsZSB0aGUgY2FzZSB3aGVyZSB0aGUgY29tcG9uZW50IGlzIHVubW91bnRlZCBpblxuICAgICAgICAvLyB0aGUgbWlkZGxlIG9mIHRoZSBub3RpZmljYXRpb24gbG9vcCwgd2hlcmUgYHN1YnNjcmlwdGlvbmAgd2lsbCB0aGVuIGJlIG51bGwuIFRoaXMgY2FuXG4gICAgICAgIC8vIHByb2JhYmx5IGJlIGF2b2lkZWQgaWYgU3Vic2NyaXB0aW9uJ3MgbGlzdGVuZXJzIGxvZ2ljIGlzIGNoYW5nZWQgdG8gbm90IGNhbGwgbGlzdGVuZXJzXG4gICAgICAgIC8vIHRoYXQgaGF2ZSBiZWVuIHVuc3Vic2NyaWJlZCBpbiB0aGUgIG1pZGRsZSBvZiB0aGUgbm90aWZpY2F0aW9uIGxvb3AuXG5cbiAgICAgICAgdmFyIG5vdGlmeU5lc3RlZFN1YnMgPSBzdWJzY3JpcHRpb24ubm90aWZ5TmVzdGVkU3Vicy5iaW5kKHN1YnNjcmlwdGlvbik7XG4gICAgICAgIHJldHVybiBbc3Vic2NyaXB0aW9uLCBub3RpZnlOZXN0ZWRTdWJzXTtcbiAgICAgIH0sIFtzdG9yZSwgZGlkU3RvcmVDb21lRnJvbVByb3BzLCBjb250ZXh0VmFsdWVdKSxcbiAgICAgICAgICBzdWJzY3JpcHRpb24gPSBfdXNlTWVtbzJbMF0sXG4gICAgICAgICAgbm90aWZ5TmVzdGVkU3VicyA9IF91c2VNZW1vMlsxXTsgLy8gRGV0ZXJtaW5lIHdoYXQge3N0b3JlLCBzdWJzY3JpcHRpb259IHZhbHVlIHNob3VsZCBiZSBwdXQgaW50byBuZXN0ZWQgY29udGV4dCwgaWYgbmVjZXNzYXJ5LFxuICAgICAgLy8gYW5kIG1lbW9pemUgdGhhdCB2YWx1ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSBjb250ZXh0IHVwZGF0ZXMuXG5cblxuICAgICAgdmFyIG92ZXJyaWRkZW5Db250ZXh0VmFsdWUgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGRpZFN0b3JlQ29tZUZyb21Qcm9wcykge1xuICAgICAgICAgIC8vIFRoaXMgY29tcG9uZW50IGlzIGRpcmVjdGx5IHN1YnNjcmliZWQgdG8gYSBzdG9yZSBmcm9tIHByb3BzLlxuICAgICAgICAgIC8vIFdlIGRvbid0IHdhbnQgZGVzY2VuZGFudHMgcmVhZGluZyBmcm9tIHRoaXMgc3RvcmUgLSBwYXNzIGRvd24gd2hhdGV2ZXJcbiAgICAgICAgICAvLyB0aGUgZXhpc3RpbmcgY29udGV4dCB2YWx1ZSBpcyBmcm9tIHRoZSBuZWFyZXN0IGNvbm5lY3RlZCBhbmNlc3Rvci5cbiAgICAgICAgICByZXR1cm4gY29udGV4dFZhbHVlO1xuICAgICAgICB9IC8vIE90aGVyd2lzZSwgcHV0IHRoaXMgY29tcG9uZW50J3Mgc3Vic2NyaXB0aW9uIGluc3RhbmNlIGludG8gY29udGV4dCwgc28gdGhhdFxuICAgICAgICAvLyBjb25uZWN0ZWQgZGVzY2VuZGFudHMgd29uJ3QgdXBkYXRlIHVudGlsIGFmdGVyIHRoaXMgY29tcG9uZW50IGlzIGRvbmVcblxuXG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgY29udGV4dFZhbHVlLCB7XG4gICAgICAgICAgc3Vic2NyaXB0aW9uOiBzdWJzY3JpcHRpb25cbiAgICAgICAgfSk7XG4gICAgICB9LCBbZGlkU3RvcmVDb21lRnJvbVByb3BzLCBjb250ZXh0VmFsdWUsIHN1YnNjcmlwdGlvbl0pOyAvLyBXZSBuZWVkIHRvIGZvcmNlIHRoaXMgd3JhcHBlciBjb21wb25lbnQgdG8gcmUtcmVuZGVyIHdoZW5ldmVyIGEgUmVkdXggc3RvcmUgdXBkYXRlXG4gICAgICAvLyBjYXVzZXMgYSBjaGFuZ2UgdG8gdGhlIGNhbGN1bGF0ZWQgY2hpbGQgY29tcG9uZW50IHByb3BzIChvciB3ZSBjYXVnaHQgYW4gZXJyb3IgaW4gbWFwU3RhdGUpXG5cbiAgICAgIHZhciBfdXNlUmVkdWNlciA9IHVzZVJlZHVjZXIoc3RvcmVTdGF0ZVVwZGF0ZXNSZWR1Y2VyLCBFTVBUWV9BUlJBWSwgaW5pdFN0YXRlVXBkYXRlcyksXG4gICAgICAgICAgX3VzZVJlZHVjZXIkID0gX3VzZVJlZHVjZXJbMF0sXG4gICAgICAgICAgcHJldmlvdXNTdGF0ZVVwZGF0ZVJlc3VsdCA9IF91c2VSZWR1Y2VyJFswXSxcbiAgICAgICAgICBmb3JjZUNvbXBvbmVudFVwZGF0ZURpc3BhdGNoID0gX3VzZVJlZHVjZXJbMV07IC8vIFByb3BhZ2F0ZSBhbnkgbWFwU3RhdGUvbWFwRGlzcGF0Y2ggZXJyb3JzIHVwd2FyZHNcblxuXG4gICAgICBpZiAocHJldmlvdXNTdGF0ZVVwZGF0ZVJlc3VsdCAmJiBwcmV2aW91c1N0YXRlVXBkYXRlUmVzdWx0LmVycm9yKSB7XG4gICAgICAgIHRocm93IHByZXZpb3VzU3RhdGVVcGRhdGVSZXN1bHQuZXJyb3I7XG4gICAgICB9IC8vIFNldCB1cCByZWZzIHRvIGNvb3JkaW5hdGUgdmFsdWVzIGJldHdlZW4gdGhlIHN1YnNjcmlwdGlvbiBlZmZlY3QgYW5kIHRoZSByZW5kZXIgbG9naWNcblxuXG4gICAgICB2YXIgbGFzdENoaWxkUHJvcHMgPSB1c2VSZWYoKTtcbiAgICAgIHZhciBsYXN0V3JhcHBlclByb3BzID0gdXNlUmVmKHdyYXBwZXJQcm9wcyk7XG4gICAgICB2YXIgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZSA9IHVzZVJlZigpO1xuICAgICAgdmFyIHJlbmRlcklzU2NoZWR1bGVkID0gdXNlUmVmKGZhbHNlKTtcbiAgICAgIHZhciBhY3R1YWxDaGlsZFByb3BzID0gdXNlUHVyZU9ubHlNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gVHJpY2t5IGxvZ2ljIGhlcmU6XG4gICAgICAgIC8vIC0gVGhpcyByZW5kZXIgbWF5IGhhdmUgYmVlbiB0cmlnZ2VyZWQgYnkgYSBSZWR1eCBzdG9yZSB1cGRhdGUgdGhhdCBwcm9kdWNlZCBuZXcgY2hpbGQgcHJvcHNcbiAgICAgICAgLy8gLSBIb3dldmVyLCB3ZSBtYXkgaGF2ZSBnb3R0ZW4gbmV3IHdyYXBwZXIgcHJvcHMgYWZ0ZXIgdGhhdFxuICAgICAgICAvLyBJZiB3ZSBoYXZlIG5ldyBjaGlsZCBwcm9wcywgYW5kIHRoZSBzYW1lIHdyYXBwZXIgcHJvcHMsIHdlIGtub3cgd2Ugc2hvdWxkIHVzZSB0aGUgbmV3IGNoaWxkIHByb3BzIGFzLWlzLlxuICAgICAgICAvLyBCdXQsIGlmIHdlIGhhdmUgbmV3IHdyYXBwZXIgcHJvcHMsIHRob3NlIG1pZ2h0IGNoYW5nZSB0aGUgY2hpbGQgcHJvcHMsIHNvIHdlIGhhdmUgdG8gcmVjYWxjdWxhdGUgdGhpbmdzLlxuICAgICAgICAvLyBTbywgd2UnbGwgdXNlIHRoZSBjaGlsZCBwcm9wcyBmcm9tIHN0b3JlIHVwZGF0ZSBvbmx5IGlmIHRoZSB3cmFwcGVyIHByb3BzIGFyZSB0aGUgc2FtZSBhcyBsYXN0IHRpbWUuXG4gICAgICAgIGlmIChjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQgJiYgd3JhcHBlclByb3BzID09PSBsYXN0V3JhcHBlclByb3BzLmN1cnJlbnQpIHtcbiAgICAgICAgICByZXR1cm4gY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50O1xuICAgICAgICB9IC8vIFRPRE8gV2UncmUgcmVhZGluZyB0aGUgc3RvcmUgZGlyZWN0bHkgaW4gcmVuZGVyKCkgaGVyZS4gQmFkIGlkZWE/XG4gICAgICAgIC8vIFRoaXMgd2lsbCBsaWtlbHkgY2F1c2UgQmFkIFRoaW5ncyAoVE0pIHRvIGhhcHBlbiBpbiBDb25jdXJyZW50IE1vZGUuXG4gICAgICAgIC8vIE5vdGUgdGhhdCB3ZSBkbyB0aGlzIGJlY2F1c2Ugb24gcmVuZGVycyBfbm90XyBjYXVzZWQgYnkgc3RvcmUgdXBkYXRlcywgd2UgbmVlZCB0aGUgbGF0ZXN0IHN0b3JlIHN0YXRlXG4gICAgICAgIC8vIHRvIGRldGVybWluZSB3aGF0IHRoZSBjaGlsZCBwcm9wcyBzaG91bGQgYmUuXG5cblxuICAgICAgICByZXR1cm4gY2hpbGRQcm9wc1NlbGVjdG9yKHN0b3JlLmdldFN0YXRlKCksIHdyYXBwZXJQcm9wcyk7XG4gICAgICB9LCBbc3RvcmUsIHByZXZpb3VzU3RhdGVVcGRhdGVSZXN1bHQsIHdyYXBwZXJQcm9wc10pOyAvLyBXZSBuZWVkIHRoaXMgdG8gZXhlY3V0ZSBzeW5jaHJvbm91c2x5IGV2ZXJ5IHRpbWUgd2UgcmUtcmVuZGVyLiBIb3dldmVyLCBSZWFjdCB3YXJuc1xuICAgICAgLy8gYWJvdXQgdXNlTGF5b3V0RWZmZWN0IGluIFNTUiwgc28gd2UgdHJ5IHRvIGRldGVjdCBlbnZpcm9ubWVudCBhbmQgZmFsbCBiYWNrIHRvXG4gICAgICAvLyBqdXN0IHVzZUVmZmVjdCBpbnN0ZWFkIHRvIGF2b2lkIHRoZSB3YXJuaW5nLCBzaW5jZSBuZWl0aGVyIHdpbGwgcnVuIGFueXdheS5cblxuICAgICAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdFdpdGhBcmdzKGNhcHR1cmVXcmFwcGVyUHJvcHMsIFtsYXN0V3JhcHBlclByb3BzLCBsYXN0Q2hpbGRQcm9wcywgcmVuZGVySXNTY2hlZHVsZWQsIHdyYXBwZXJQcm9wcywgYWN0dWFsQ2hpbGRQcm9wcywgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZSwgbm90aWZ5TmVzdGVkU3Vic10pOyAvLyBPdXIgcmUtc3Vic2NyaWJlIGxvZ2ljIG9ubHkgcnVucyB3aGVuIHRoZSBzdG9yZS9zdWJzY3JpcHRpb24gc2V0dXAgY2hhbmdlc1xuXG4gICAgICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0V2l0aEFyZ3Moc3Vic2NyaWJlVXBkYXRlcywgW3Nob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcywgc3RvcmUsIHN1YnNjcmlwdGlvbiwgY2hpbGRQcm9wc1NlbGVjdG9yLCBsYXN0V3JhcHBlclByb3BzLCBsYXN0Q2hpbGRQcm9wcywgcmVuZGVySXNTY2hlZHVsZWQsIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUsIG5vdGlmeU5lc3RlZFN1YnMsIGZvcmNlQ29tcG9uZW50VXBkYXRlRGlzcGF0Y2hdLCBbc3RvcmUsIHN1YnNjcmlwdGlvbiwgY2hpbGRQcm9wc1NlbGVjdG9yXSk7IC8vIE5vdyB0aGF0IGFsbCB0aGF0J3MgZG9uZSwgd2UgY2FuIGZpbmFsbHkgdHJ5IHRvIGFjdHVhbGx5IHJlbmRlciB0aGUgY2hpbGQgY29tcG9uZW50LlxuICAgICAgLy8gV2UgbWVtb2l6ZSB0aGUgZWxlbWVudHMgZm9yIHRoZSByZW5kZXJlZCBjaGlsZCBjb21wb25lbnQgYXMgYW4gb3B0aW1pemF0aW9uLlxuXG4gICAgICB2YXIgcmVuZGVyZWRXcmFwcGVkQ29tcG9uZW50ID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFdyYXBwZWRDb21wb25lbnQsIF9leHRlbmRzKHt9LCBhY3R1YWxDaGlsZFByb3BzLCB7XG4gICAgICAgICAgcmVmOiBmb3J3YXJkZWRSZWZcbiAgICAgICAgfSkpO1xuICAgICAgfSwgW2ZvcndhcmRlZFJlZiwgV3JhcHBlZENvbXBvbmVudCwgYWN0dWFsQ2hpbGRQcm9wc10pOyAvLyBJZiBSZWFjdCBzZWVzIHRoZSBleGFjdCBzYW1lIGVsZW1lbnQgcmVmZXJlbmNlIGFzIGxhc3QgdGltZSwgaXQgYmFpbHMgb3V0IG9mIHJlLXJlbmRlcmluZ1xuICAgICAgLy8gdGhhdCBjaGlsZCwgc2FtZSBhcyBpZiBpdCB3YXMgd3JhcHBlZCBpbiBSZWFjdC5tZW1vKCkgb3IgcmV0dXJuZWQgZmFsc2UgZnJvbSBzaG91bGRDb21wb25lbnRVcGRhdGUuXG5cbiAgICAgIHZhciByZW5kZXJlZENoaWxkID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMpIHtcbiAgICAgICAgICAvLyBJZiB0aGlzIGNvbXBvbmVudCBpcyBzdWJzY3JpYmVkIHRvIHN0b3JlIHVwZGF0ZXMsIHdlIG5lZWQgdG8gcGFzcyBpdHMgb3duXG4gICAgICAgICAgLy8gc3Vic2NyaXB0aW9uIGluc3RhbmNlIGRvd24gdG8gb3VyIGRlc2NlbmRhbnRzLiBUaGF0IG1lYW5zIHJlbmRlcmluZyB0aGUgc2FtZVxuICAgICAgICAgIC8vIENvbnRleHQgaW5zdGFuY2UsIGFuZCBwdXR0aW5nIGEgZGlmZmVyZW50IHZhbHVlIGludG8gdGhlIGNvbnRleHQuXG4gICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGV4dFRvVXNlLlByb3ZpZGVyLCB7XG4gICAgICAgICAgICB2YWx1ZTogb3ZlcnJpZGRlbkNvbnRleHRWYWx1ZVxuICAgICAgICAgIH0sIHJlbmRlcmVkV3JhcHBlZENvbXBvbmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVuZGVyZWRXcmFwcGVkQ29tcG9uZW50O1xuICAgICAgfSwgW0NvbnRleHRUb1VzZSwgcmVuZGVyZWRXcmFwcGVkQ29tcG9uZW50LCBvdmVycmlkZGVuQ29udGV4dFZhbHVlXSk7XG4gICAgICByZXR1cm4gcmVuZGVyZWRDaGlsZDtcbiAgICB9IC8vIElmIHdlJ3JlIGluIFwicHVyZVwiIG1vZGUsIGVuc3VyZSBvdXIgd3JhcHBlciBjb21wb25lbnQgb25seSByZS1yZW5kZXJzIHdoZW4gaW5jb21pbmcgcHJvcHMgaGF2ZSBjaGFuZ2VkLlxuXG5cbiAgICB2YXIgQ29ubmVjdCA9IHB1cmUgPyBSZWFjdC5tZW1vKENvbm5lY3RGdW5jdGlvbikgOiBDb25uZWN0RnVuY3Rpb247XG4gICAgQ29ubmVjdC5XcmFwcGVkQ29tcG9uZW50ID0gV3JhcHBlZENvbXBvbmVudDtcbiAgICBDb25uZWN0LmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG5cbiAgICBpZiAoZm9yd2FyZFJlZikge1xuICAgICAgdmFyIGZvcndhcmRlZCA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gZm9yd2FyZENvbm5lY3RSZWYocHJvcHMsIHJlZikge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb25uZWN0LCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgICBmb3J3YXJkZWRSZWY6IHJlZlxuICAgICAgICB9KSk7XG4gICAgICB9KTtcbiAgICAgIGZvcndhcmRlZC5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuICAgICAgZm9yd2FyZGVkLldyYXBwZWRDb21wb25lbnQgPSBXcmFwcGVkQ29tcG9uZW50O1xuICAgICAgcmV0dXJuIGhvaXN0U3RhdGljcyhmb3J3YXJkZWQsIFdyYXBwZWRDb21wb25lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBob2lzdFN0YXRpY3MoQ29ubmVjdCwgV3JhcHBlZENvbXBvbmVudCk7XG4gIH07XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmltcG9ydCBjb25uZWN0QWR2YW5jZWQgZnJvbSAnLi4vY29tcG9uZW50cy9jb25uZWN0QWR2YW5jZWQnO1xuaW1wb3J0IHNoYWxsb3dFcXVhbCBmcm9tICcuLi91dGlscy9zaGFsbG93RXF1YWwnO1xuaW1wb3J0IGRlZmF1bHRNYXBEaXNwYXRjaFRvUHJvcHNGYWN0b3JpZXMgZnJvbSAnLi9tYXBEaXNwYXRjaFRvUHJvcHMnO1xuaW1wb3J0IGRlZmF1bHRNYXBTdGF0ZVRvUHJvcHNGYWN0b3JpZXMgZnJvbSAnLi9tYXBTdGF0ZVRvUHJvcHMnO1xuaW1wb3J0IGRlZmF1bHRNZXJnZVByb3BzRmFjdG9yaWVzIGZyb20gJy4vbWVyZ2VQcm9wcyc7XG5pbXBvcnQgZGVmYXVsdFNlbGVjdG9yRmFjdG9yeSBmcm9tICcuL3NlbGVjdG9yRmFjdG9yeSc7XG4vKlxyXG4gIGNvbm5lY3QgaXMgYSBmYWNhZGUgb3ZlciBjb25uZWN0QWR2YW5jZWQuIEl0IHR1cm5zIGl0cyBhcmdzIGludG8gYSBjb21wYXRpYmxlXHJcbiAgc2VsZWN0b3JGYWN0b3J5LCB3aGljaCBoYXMgdGhlIHNpZ25hdHVyZTpcclxuXHJcbiAgICAoZGlzcGF0Y2gsIG9wdGlvbnMpID0+IChuZXh0U3RhdGUsIG5leHRPd25Qcm9wcykgPT4gbmV4dEZpbmFsUHJvcHNcclxuICBcclxuICBjb25uZWN0IHBhc3NlcyBpdHMgYXJncyB0byBjb25uZWN0QWR2YW5jZWQgYXMgb3B0aW9ucywgd2hpY2ggd2lsbCBpbiB0dXJuIHBhc3MgdGhlbSB0b1xyXG4gIHNlbGVjdG9yRmFjdG9yeSBlYWNoIHRpbWUgYSBDb25uZWN0IGNvbXBvbmVudCBpbnN0YW5jZSBpcyBpbnN0YW50aWF0ZWQgb3IgaG90IHJlbG9hZGVkLlxyXG5cclxuICBzZWxlY3RvckZhY3RvcnkgcmV0dXJucyBhIGZpbmFsIHByb3BzIHNlbGVjdG9yIGZyb20gaXRzIG1hcFN0YXRlVG9Qcm9wcyxcclxuICBtYXBTdGF0ZVRvUHJvcHNGYWN0b3JpZXMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzRmFjdG9yaWVzLCBtZXJnZVByb3BzLFxyXG4gIG1lcmdlUHJvcHNGYWN0b3JpZXMsIGFuZCBwdXJlIGFyZ3MuXHJcblxyXG4gIFRoZSByZXN1bHRpbmcgZmluYWwgcHJvcHMgc2VsZWN0b3IgaXMgY2FsbGVkIGJ5IHRoZSBDb25uZWN0IGNvbXBvbmVudCBpbnN0YW5jZSB3aGVuZXZlclxyXG4gIGl0IHJlY2VpdmVzIG5ldyBwcm9wcyBvciBzdG9yZSBzdGF0ZS5cclxuICovXG5cbmZ1bmN0aW9uIG1hdGNoKGFyZywgZmFjdG9yaWVzLCBuYW1lKSB7XG4gIGZvciAodmFyIGkgPSBmYWN0b3JpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICB2YXIgcmVzdWx0ID0gZmFjdG9yaWVzW2ldKGFyZyk7XG4gICAgaWYgKHJlc3VsdCkgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gsIG9wdGlvbnMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIG9mIHR5cGUgXCIgKyB0eXBlb2YgYXJnICsgXCIgZm9yIFwiICsgbmFtZSArIFwiIGFyZ3VtZW50IHdoZW4gY29ubmVjdGluZyBjb21wb25lbnQgXCIgKyBvcHRpb25zLndyYXBwZWRDb21wb25lbnROYW1lICsgXCIuXCIpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzdHJpY3RFcXVhbChhLCBiKSB7XG4gIHJldHVybiBhID09PSBiO1xufSAvLyBjcmVhdGVDb25uZWN0IHdpdGggZGVmYXVsdCBhcmdzIGJ1aWxkcyB0aGUgJ29mZmljaWFsJyBjb25uZWN0IGJlaGF2aW9yLiBDYWxsaW5nIGl0IHdpdGhcbi8vIGRpZmZlcmVudCBvcHRpb25zIG9wZW5zIHVwIHNvbWUgdGVzdGluZyBhbmQgZXh0ZW5zaWJpbGl0eSBzY2VuYXJpb3NcblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29ubmVjdChfdGVtcCkge1xuICB2YXIgX3JlZiA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wLFxuICAgICAgX3JlZiRjb25uZWN0SE9DID0gX3JlZi5jb25uZWN0SE9DLFxuICAgICAgY29ubmVjdEhPQyA9IF9yZWYkY29ubmVjdEhPQyA9PT0gdm9pZCAwID8gY29ubmVjdEFkdmFuY2VkIDogX3JlZiRjb25uZWN0SE9DLFxuICAgICAgX3JlZiRtYXBTdGF0ZVRvUHJvcHNGID0gX3JlZi5tYXBTdGF0ZVRvUHJvcHNGYWN0b3JpZXMsXG4gICAgICBtYXBTdGF0ZVRvUHJvcHNGYWN0b3JpZXMgPSBfcmVmJG1hcFN0YXRlVG9Qcm9wc0YgPT09IHZvaWQgMCA/IGRlZmF1bHRNYXBTdGF0ZVRvUHJvcHNGYWN0b3JpZXMgOiBfcmVmJG1hcFN0YXRlVG9Qcm9wc0YsXG4gICAgICBfcmVmJG1hcERpc3BhdGNoVG9Qcm8gPSBfcmVmLm1hcERpc3BhdGNoVG9Qcm9wc0ZhY3RvcmllcyxcbiAgICAgIG1hcERpc3BhdGNoVG9Qcm9wc0ZhY3RvcmllcyA9IF9yZWYkbWFwRGlzcGF0Y2hUb1BybyA9PT0gdm9pZCAwID8gZGVmYXVsdE1hcERpc3BhdGNoVG9Qcm9wc0ZhY3RvcmllcyA6IF9yZWYkbWFwRGlzcGF0Y2hUb1BybyxcbiAgICAgIF9yZWYkbWVyZ2VQcm9wc0ZhY3RvciA9IF9yZWYubWVyZ2VQcm9wc0ZhY3RvcmllcyxcbiAgICAgIG1lcmdlUHJvcHNGYWN0b3JpZXMgPSBfcmVmJG1lcmdlUHJvcHNGYWN0b3IgPT09IHZvaWQgMCA/IGRlZmF1bHRNZXJnZVByb3BzRmFjdG9yaWVzIDogX3JlZiRtZXJnZVByb3BzRmFjdG9yLFxuICAgICAgX3JlZiRzZWxlY3RvckZhY3RvcnkgPSBfcmVmLnNlbGVjdG9yRmFjdG9yeSxcbiAgICAgIHNlbGVjdG9yRmFjdG9yeSA9IF9yZWYkc2VsZWN0b3JGYWN0b3J5ID09PSB2b2lkIDAgPyBkZWZhdWx0U2VsZWN0b3JGYWN0b3J5IDogX3JlZiRzZWxlY3RvckZhY3Rvcnk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIF9yZWYyKSB7XG4gICAgaWYgKF9yZWYyID09PSB2b2lkIDApIHtcbiAgICAgIF9yZWYyID0ge307XG4gICAgfVxuXG4gICAgdmFyIF9yZWYzID0gX3JlZjIsXG4gICAgICAgIF9yZWYzJHB1cmUgPSBfcmVmMy5wdXJlLFxuICAgICAgICBwdXJlID0gX3JlZjMkcHVyZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9yZWYzJHB1cmUsXG4gICAgICAgIF9yZWYzJGFyZVN0YXRlc0VxdWFsID0gX3JlZjMuYXJlU3RhdGVzRXF1YWwsXG4gICAgICAgIGFyZVN0YXRlc0VxdWFsID0gX3JlZjMkYXJlU3RhdGVzRXF1YWwgPT09IHZvaWQgMCA/IHN0cmljdEVxdWFsIDogX3JlZjMkYXJlU3RhdGVzRXF1YWwsXG4gICAgICAgIF9yZWYzJGFyZU93blByb3BzRXF1YSA9IF9yZWYzLmFyZU93blByb3BzRXF1YWwsXG4gICAgICAgIGFyZU93blByb3BzRXF1YWwgPSBfcmVmMyRhcmVPd25Qcm9wc0VxdWEgPT09IHZvaWQgMCA/IHNoYWxsb3dFcXVhbCA6IF9yZWYzJGFyZU93blByb3BzRXF1YSxcbiAgICAgICAgX3JlZjMkYXJlU3RhdGVQcm9wc0VxID0gX3JlZjMuYXJlU3RhdGVQcm9wc0VxdWFsLFxuICAgICAgICBhcmVTdGF0ZVByb3BzRXF1YWwgPSBfcmVmMyRhcmVTdGF0ZVByb3BzRXEgPT09IHZvaWQgMCA/IHNoYWxsb3dFcXVhbCA6IF9yZWYzJGFyZVN0YXRlUHJvcHNFcSxcbiAgICAgICAgX3JlZjMkYXJlTWVyZ2VkUHJvcHNFID0gX3JlZjMuYXJlTWVyZ2VkUHJvcHNFcXVhbCxcbiAgICAgICAgYXJlTWVyZ2VkUHJvcHNFcXVhbCA9IF9yZWYzJGFyZU1lcmdlZFByb3BzRSA9PT0gdm9pZCAwID8gc2hhbGxvd0VxdWFsIDogX3JlZjMkYXJlTWVyZ2VkUHJvcHNFLFxuICAgICAgICBleHRyYU9wdGlvbnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmMywgW1wicHVyZVwiLCBcImFyZVN0YXRlc0VxdWFsXCIsIFwiYXJlT3duUHJvcHNFcXVhbFwiLCBcImFyZVN0YXRlUHJvcHNFcXVhbFwiLCBcImFyZU1lcmdlZFByb3BzRXF1YWxcIl0pO1xuXG4gICAgdmFyIGluaXRNYXBTdGF0ZVRvUHJvcHMgPSBtYXRjaChtYXBTdGF0ZVRvUHJvcHMsIG1hcFN0YXRlVG9Qcm9wc0ZhY3RvcmllcywgJ21hcFN0YXRlVG9Qcm9wcycpO1xuICAgIHZhciBpbml0TWFwRGlzcGF0Y2hUb1Byb3BzID0gbWF0Y2gobWFwRGlzcGF0Y2hUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHNGYWN0b3JpZXMsICdtYXBEaXNwYXRjaFRvUHJvcHMnKTtcbiAgICB2YXIgaW5pdE1lcmdlUHJvcHMgPSBtYXRjaChtZXJnZVByb3BzLCBtZXJnZVByb3BzRmFjdG9yaWVzLCAnbWVyZ2VQcm9wcycpO1xuICAgIHJldHVybiBjb25uZWN0SE9DKHNlbGVjdG9yRmFjdG9yeSwgX2V4dGVuZHMoe1xuICAgICAgLy8gdXNlZCBpbiBlcnJvciBtZXNzYWdlc1xuICAgICAgbWV0aG9kTmFtZTogJ2Nvbm5lY3QnLFxuICAgICAgLy8gdXNlZCB0byBjb21wdXRlIENvbm5lY3QncyBkaXNwbGF5TmFtZSBmcm9tIHRoZSB3cmFwcGVkIGNvbXBvbmVudCdzIGRpc3BsYXlOYW1lLlxuICAgICAgZ2V0RGlzcGxheU5hbWU6IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIFwiQ29ubmVjdChcIiArIG5hbWUgKyBcIilcIjtcbiAgICAgIH0sXG4gICAgICAvLyBpZiBtYXBTdGF0ZVRvUHJvcHMgaXMgZmFsc3ksIHRoZSBDb25uZWN0IGNvbXBvbmVudCBkb2Vzbid0IHN1YnNjcmliZSB0byBzdG9yZSBzdGF0ZSBjaGFuZ2VzXG4gICAgICBzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXM6IEJvb2xlYW4obWFwU3RhdGVUb1Byb3BzKSxcbiAgICAgIC8vIHBhc3NlZCB0aHJvdWdoIHRvIHNlbGVjdG9yRmFjdG9yeVxuICAgICAgaW5pdE1hcFN0YXRlVG9Qcm9wczogaW5pdE1hcFN0YXRlVG9Qcm9wcyxcbiAgICAgIGluaXRNYXBEaXNwYXRjaFRvUHJvcHM6IGluaXRNYXBEaXNwYXRjaFRvUHJvcHMsXG4gICAgICBpbml0TWVyZ2VQcm9wczogaW5pdE1lcmdlUHJvcHMsXG4gICAgICBwdXJlOiBwdXJlLFxuICAgICAgYXJlU3RhdGVzRXF1YWw6IGFyZVN0YXRlc0VxdWFsLFxuICAgICAgYXJlT3duUHJvcHNFcXVhbDogYXJlT3duUHJvcHNFcXVhbCxcbiAgICAgIGFyZVN0YXRlUHJvcHNFcXVhbDogYXJlU3RhdGVQcm9wc0VxdWFsLFxuICAgICAgYXJlTWVyZ2VkUHJvcHNFcXVhbDogYXJlTWVyZ2VkUHJvcHNFcXVhbFxuICAgIH0sIGV4dHJhT3B0aW9ucykpO1xuICB9O1xufVxuZXhwb3J0IGRlZmF1bHRcbi8qI19fUFVSRV9fKi9cbmNyZWF0ZUNvbm5lY3QoKTsiLCJpbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50LCB3cmFwTWFwVG9Qcm9wc0Z1bmMgfSBmcm9tICcuL3dyYXBNYXBUb1Byb3BzJztcbmV4cG9ydCBmdW5jdGlvbiB3aGVuTWFwRGlzcGF0Y2hUb1Byb3BzSXNGdW5jdGlvbihtYXBEaXNwYXRjaFRvUHJvcHMpIHtcbiAgcmV0dXJuIHR5cGVvZiBtYXBEaXNwYXRjaFRvUHJvcHMgPT09ICdmdW5jdGlvbicgPyB3cmFwTWFwVG9Qcm9wc0Z1bmMobWFwRGlzcGF0Y2hUb1Byb3BzLCAnbWFwRGlzcGF0Y2hUb1Byb3BzJykgOiB1bmRlZmluZWQ7XG59XG5leHBvcnQgZnVuY3Rpb24gd2hlbk1hcERpc3BhdGNoVG9Qcm9wc0lzTWlzc2luZyhtYXBEaXNwYXRjaFRvUHJvcHMpIHtcbiAgcmV0dXJuICFtYXBEaXNwYXRjaFRvUHJvcHMgPyB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50KGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgIHJldHVybiB7XG4gICAgICBkaXNwYXRjaDogZGlzcGF0Y2hcbiAgICB9O1xuICB9KSA6IHVuZGVmaW5lZDtcbn1cbmV4cG9ydCBmdW5jdGlvbiB3aGVuTWFwRGlzcGF0Y2hUb1Byb3BzSXNPYmplY3QobWFwRGlzcGF0Y2hUb1Byb3BzKSB7XG4gIHJldHVybiBtYXBEaXNwYXRjaFRvUHJvcHMgJiYgdHlwZW9mIG1hcERpc3BhdGNoVG9Qcm9wcyA9PT0gJ29iamVjdCcgPyB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50KGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMobWFwRGlzcGF0Y2hUb1Byb3BzLCBkaXNwYXRjaCk7XG4gIH0pIDogdW5kZWZpbmVkO1xufVxuZXhwb3J0IGRlZmF1bHQgW3doZW5NYXBEaXNwYXRjaFRvUHJvcHNJc0Z1bmN0aW9uLCB3aGVuTWFwRGlzcGF0Y2hUb1Byb3BzSXNNaXNzaW5nLCB3aGVuTWFwRGlzcGF0Y2hUb1Byb3BzSXNPYmplY3RdOyIsImltcG9ydCB7IHdyYXBNYXBUb1Byb3BzQ29uc3RhbnQsIHdyYXBNYXBUb1Byb3BzRnVuYyB9IGZyb20gJy4vd3JhcE1hcFRvUHJvcHMnO1xuZXhwb3J0IGZ1bmN0aW9uIHdoZW5NYXBTdGF0ZVRvUHJvcHNJc0Z1bmN0aW9uKG1hcFN0YXRlVG9Qcm9wcykge1xuICByZXR1cm4gdHlwZW9mIG1hcFN0YXRlVG9Qcm9wcyA9PT0gJ2Z1bmN0aW9uJyA/IHdyYXBNYXBUb1Byb3BzRnVuYyhtYXBTdGF0ZVRvUHJvcHMsICdtYXBTdGF0ZVRvUHJvcHMnKSA6IHVuZGVmaW5lZDtcbn1cbmV4cG9ydCBmdW5jdGlvbiB3aGVuTWFwU3RhdGVUb1Byb3BzSXNNaXNzaW5nKG1hcFN0YXRlVG9Qcm9wcykge1xuICByZXR1cm4gIW1hcFN0YXRlVG9Qcm9wcyA/IHdyYXBNYXBUb1Byb3BzQ29uc3RhbnQoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7fTtcbiAgfSkgOiB1bmRlZmluZWQ7XG59XG5leHBvcnQgZGVmYXVsdCBbd2hlbk1hcFN0YXRlVG9Qcm9wc0lzRnVuY3Rpb24sIHdoZW5NYXBTdGF0ZVRvUHJvcHNJc01pc3NpbmddOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IHZlcmlmeVBsYWluT2JqZWN0IGZyb20gJy4uL3V0aWxzL3ZlcmlmeVBsYWluT2JqZWN0JztcbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0TWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcykge1xuICByZXR1cm4gX2V4dGVuZHMoe30sIG93blByb3BzLCB7fSwgc3RhdGVQcm9wcywge30sIGRpc3BhdGNoUHJvcHMpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBNZXJnZVByb3BzRnVuYyhtZXJnZVByb3BzKSB7XG4gIHJldHVybiBmdW5jdGlvbiBpbml0TWVyZ2VQcm9wc1Byb3h5KGRpc3BhdGNoLCBfcmVmKSB7XG4gICAgdmFyIGRpc3BsYXlOYW1lID0gX3JlZi5kaXNwbGF5TmFtZSxcbiAgICAgICAgcHVyZSA9IF9yZWYucHVyZSxcbiAgICAgICAgYXJlTWVyZ2VkUHJvcHNFcXVhbCA9IF9yZWYuYXJlTWVyZ2VkUHJvcHNFcXVhbDtcbiAgICB2YXIgaGFzUnVuT25jZSA9IGZhbHNlO1xuICAgIHZhciBtZXJnZWRQcm9wcztcbiAgICByZXR1cm4gZnVuY3Rpb24gbWVyZ2VQcm9wc1Byb3h5KHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKSB7XG4gICAgICB2YXIgbmV4dE1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG5cbiAgICAgIGlmIChoYXNSdW5PbmNlKSB7XG4gICAgICAgIGlmICghcHVyZSB8fCAhYXJlTWVyZ2VkUHJvcHNFcXVhbChuZXh0TWVyZ2VkUHJvcHMsIG1lcmdlZFByb3BzKSkgbWVyZ2VkUHJvcHMgPSBuZXh0TWVyZ2VkUHJvcHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoYXNSdW5PbmNlID0gdHJ1ZTtcbiAgICAgICAgbWVyZ2VkUHJvcHMgPSBuZXh0TWVyZ2VkUHJvcHM7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB2ZXJpZnlQbGFpbk9iamVjdChtZXJnZWRQcm9wcywgZGlzcGxheU5hbWUsICdtZXJnZVByb3BzJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgICB9O1xuICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHdoZW5NZXJnZVByb3BzSXNGdW5jdGlvbihtZXJnZVByb3BzKSB7XG4gIHJldHVybiB0eXBlb2YgbWVyZ2VQcm9wcyA9PT0gJ2Z1bmN0aW9uJyA/IHdyYXBNZXJnZVByb3BzRnVuYyhtZXJnZVByb3BzKSA6IHVuZGVmaW5lZDtcbn1cbmV4cG9ydCBmdW5jdGlvbiB3aGVuTWVyZ2VQcm9wc0lzT21pdHRlZChtZXJnZVByb3BzKSB7XG4gIHJldHVybiAhbWVyZ2VQcm9wcyA/IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZGVmYXVsdE1lcmdlUHJvcHM7XG4gIH0gOiB1bmRlZmluZWQ7XG59XG5leHBvcnQgZGVmYXVsdCBbd2hlbk1lcmdlUHJvcHNJc0Z1bmN0aW9uLCB3aGVuTWVyZ2VQcm9wc0lzT21pdHRlZF07IiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5pbXBvcnQgdmVyaWZ5U3Vic2VsZWN0b3JzIGZyb20gJy4vdmVyaWZ5U3Vic2VsZWN0b3JzJztcbmV4cG9ydCBmdW5jdGlvbiBpbXB1cmVGaW5hbFByb3BzU2VsZWN0b3JGYWN0b3J5KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzLCBkaXNwYXRjaCkge1xuICByZXR1cm4gZnVuY3Rpb24gaW1wdXJlRmluYWxQcm9wc1NlbGVjdG9yKHN0YXRlLCBvd25Qcm9wcykge1xuICAgIHJldHVybiBtZXJnZVByb3BzKG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpLCBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG93blByb3BzKSwgb3duUHJvcHMpO1xuICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHB1cmVGaW5hbFByb3BzU2VsZWN0b3JGYWN0b3J5KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzLCBkaXNwYXRjaCwgX3JlZikge1xuICB2YXIgYXJlU3RhdGVzRXF1YWwgPSBfcmVmLmFyZVN0YXRlc0VxdWFsLFxuICAgICAgYXJlT3duUHJvcHNFcXVhbCA9IF9yZWYuYXJlT3duUHJvcHNFcXVhbCxcbiAgICAgIGFyZVN0YXRlUHJvcHNFcXVhbCA9IF9yZWYuYXJlU3RhdGVQcm9wc0VxdWFsO1xuICB2YXIgaGFzUnVuQXRMZWFzdE9uY2UgPSBmYWxzZTtcbiAgdmFyIHN0YXRlO1xuICB2YXIgb3duUHJvcHM7XG4gIHZhciBzdGF0ZVByb3BzO1xuICB2YXIgZGlzcGF0Y2hQcm9wcztcbiAgdmFyIG1lcmdlZFByb3BzO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUZpcnN0Q2FsbChmaXJzdFN0YXRlLCBmaXJzdE93blByb3BzKSB7XG4gICAgc3RhdGUgPSBmaXJzdFN0YXRlO1xuICAgIG93blByb3BzID0gZmlyc3RPd25Qcm9wcztcbiAgICBzdGF0ZVByb3BzID0gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyk7XG4gICAgZGlzcGF0Y2hQcm9wcyA9IG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3duUHJvcHMpO1xuICAgIG1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG4gICAgaGFzUnVuQXRMZWFzdE9uY2UgPSB0cnVlO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU5ld1Byb3BzQW5kTmV3U3RhdGUoKSB7XG4gICAgc3RhdGVQcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpO1xuICAgIGlmIChtYXBEaXNwYXRjaFRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMpIGRpc3BhdGNoUHJvcHMgPSBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG93blByb3BzKTtcbiAgICBtZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU5ld1Byb3BzKCkge1xuICAgIGlmIChtYXBTdGF0ZVRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMpIHN0YXRlUHJvcHMgPSBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKTtcbiAgICBpZiAobWFwRGlzcGF0Y2hUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzKSBkaXNwYXRjaFByb3BzID0gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoLCBvd25Qcm9wcyk7XG4gICAgbWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVOZXdTdGF0ZSgpIHtcbiAgICB2YXIgbmV4dFN0YXRlUHJvcHMgPSBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKTtcbiAgICB2YXIgc3RhdGVQcm9wc0NoYW5nZWQgPSAhYXJlU3RhdGVQcm9wc0VxdWFsKG5leHRTdGF0ZVByb3BzLCBzdGF0ZVByb3BzKTtcbiAgICBzdGF0ZVByb3BzID0gbmV4dFN0YXRlUHJvcHM7XG4gICAgaWYgKHN0YXRlUHJvcHNDaGFuZ2VkKSBtZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVN1YnNlcXVlbnRDYWxscyhuZXh0U3RhdGUsIG5leHRPd25Qcm9wcykge1xuICAgIHZhciBwcm9wc0NoYW5nZWQgPSAhYXJlT3duUHJvcHNFcXVhbChuZXh0T3duUHJvcHMsIG93blByb3BzKTtcbiAgICB2YXIgc3RhdGVDaGFuZ2VkID0gIWFyZVN0YXRlc0VxdWFsKG5leHRTdGF0ZSwgc3RhdGUpO1xuICAgIHN0YXRlID0gbmV4dFN0YXRlO1xuICAgIG93blByb3BzID0gbmV4dE93blByb3BzO1xuICAgIGlmIChwcm9wc0NoYW5nZWQgJiYgc3RhdGVDaGFuZ2VkKSByZXR1cm4gaGFuZGxlTmV3UHJvcHNBbmROZXdTdGF0ZSgpO1xuICAgIGlmIChwcm9wc0NoYW5nZWQpIHJldHVybiBoYW5kbGVOZXdQcm9wcygpO1xuICAgIGlmIChzdGF0ZUNoYW5nZWQpIHJldHVybiBoYW5kbGVOZXdTdGF0ZSgpO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiBwdXJlRmluYWxQcm9wc1NlbGVjdG9yKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKSB7XG4gICAgcmV0dXJuIGhhc1J1bkF0TGVhc3RPbmNlID8gaGFuZGxlU3Vic2VxdWVudENhbGxzKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKSA6IGhhbmRsZUZpcnN0Q2FsbChuZXh0U3RhdGUsIG5leHRPd25Qcm9wcyk7XG4gIH07XG59IC8vIFRPRE86IEFkZCBtb3JlIGNvbW1lbnRzXG4vLyBJZiBwdXJlIGlzIHRydWUsIHRoZSBzZWxlY3RvciByZXR1cm5lZCBieSBzZWxlY3RvckZhY3Rvcnkgd2lsbCBtZW1vaXplIGl0cyByZXN1bHRzLFxuLy8gYWxsb3dpbmcgY29ubmVjdEFkdmFuY2VkJ3Mgc2hvdWxkQ29tcG9uZW50VXBkYXRlIHRvIHJldHVybiBmYWxzZSBpZiBmaW5hbFxuLy8gcHJvcHMgaGF2ZSBub3QgY2hhbmdlZC4gSWYgZmFsc2UsIHRoZSBzZWxlY3RvciB3aWxsIGFsd2F5cyByZXR1cm4gYSBuZXdcbi8vIG9iamVjdCBhbmQgc2hvdWxkQ29tcG9uZW50VXBkYXRlIHdpbGwgYWx3YXlzIHJldHVybiB0cnVlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaW5hbFByb3BzU2VsZWN0b3JGYWN0b3J5KGRpc3BhdGNoLCBfcmVmMikge1xuICB2YXIgaW5pdE1hcFN0YXRlVG9Qcm9wcyA9IF9yZWYyLmluaXRNYXBTdGF0ZVRvUHJvcHMsXG4gICAgICBpbml0TWFwRGlzcGF0Y2hUb1Byb3BzID0gX3JlZjIuaW5pdE1hcERpc3BhdGNoVG9Qcm9wcyxcbiAgICAgIGluaXRNZXJnZVByb3BzID0gX3JlZjIuaW5pdE1lcmdlUHJvcHMsXG4gICAgICBvcHRpb25zID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjIsIFtcImluaXRNYXBTdGF0ZVRvUHJvcHNcIiwgXCJpbml0TWFwRGlzcGF0Y2hUb1Byb3BzXCIsIFwiaW5pdE1lcmdlUHJvcHNcIl0pO1xuXG4gIHZhciBtYXBTdGF0ZVRvUHJvcHMgPSBpbml0TWFwU3RhdGVUb1Byb3BzKGRpc3BhdGNoLCBvcHRpb25zKTtcbiAgdmFyIG1hcERpc3BhdGNoVG9Qcm9wcyA9IGluaXRNYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG9wdGlvbnMpO1xuICB2YXIgbWVyZ2VQcm9wcyA9IGluaXRNZXJnZVByb3BzKGRpc3BhdGNoLCBvcHRpb25zKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHZlcmlmeVN1YnNlbGVjdG9ycyhtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcywgb3B0aW9ucy5kaXNwbGF5TmFtZSk7XG4gIH1cblxuICB2YXIgc2VsZWN0b3JGYWN0b3J5ID0gb3B0aW9ucy5wdXJlID8gcHVyZUZpbmFsUHJvcHNTZWxlY3RvckZhY3RvcnkgOiBpbXB1cmVGaW5hbFByb3BzU2VsZWN0b3JGYWN0b3J5O1xuICByZXR1cm4gc2VsZWN0b3JGYWN0b3J5KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzLCBkaXNwYXRjaCwgb3B0aW9ucyk7XG59IiwiaW1wb3J0IHdhcm5pbmcgZnJvbSAnLi4vdXRpbHMvd2FybmluZyc7XG5cbmZ1bmN0aW9uIHZlcmlmeShzZWxlY3RvciwgbWV0aG9kTmFtZSwgZGlzcGxheU5hbWUpIHtcbiAgaWYgKCFzZWxlY3Rvcikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgdmFsdWUgZm9yIFwiICsgbWV0aG9kTmFtZSArIFwiIGluIFwiICsgZGlzcGxheU5hbWUgKyBcIi5cIik7XG4gIH0gZWxzZSBpZiAobWV0aG9kTmFtZSA9PT0gJ21hcFN0YXRlVG9Qcm9wcycgfHwgbWV0aG9kTmFtZSA9PT0gJ21hcERpc3BhdGNoVG9Qcm9wcycpIHtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzZWxlY3RvciwgJ2RlcGVuZHNPbk93blByb3BzJykpIHtcbiAgICAgIHdhcm5pbmcoXCJUaGUgc2VsZWN0b3IgZm9yIFwiICsgbWV0aG9kTmFtZSArIFwiIG9mIFwiICsgZGlzcGxheU5hbWUgKyBcIiBkaWQgbm90IHNwZWNpZnkgYSB2YWx1ZSBmb3IgZGVwZW5kc09uT3duUHJvcHMuXCIpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlTdWJzZWxlY3RvcnMobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHZlcmlmeShtYXBTdGF0ZVRvUHJvcHMsICdtYXBTdGF0ZVRvUHJvcHMnLCBkaXNwbGF5TmFtZSk7XG4gIHZlcmlmeShtYXBEaXNwYXRjaFRvUHJvcHMsICdtYXBEaXNwYXRjaFRvUHJvcHMnLCBkaXNwbGF5TmFtZSk7XG4gIHZlcmlmeShtZXJnZVByb3BzLCAnbWVyZ2VQcm9wcycsIGRpc3BsYXlOYW1lKTtcbn0iLCJpbXBvcnQgdmVyaWZ5UGxhaW5PYmplY3QgZnJvbSAnLi4vdXRpbHMvdmVyaWZ5UGxhaW5PYmplY3QnO1xuZXhwb3J0IGZ1bmN0aW9uIHdyYXBNYXBUb1Byb3BzQ29uc3RhbnQoZ2V0Q29uc3RhbnQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGluaXRDb25zdGFudFNlbGVjdG9yKGRpc3BhdGNoLCBvcHRpb25zKSB7XG4gICAgdmFyIGNvbnN0YW50ID0gZ2V0Q29uc3RhbnQoZGlzcGF0Y2gsIG9wdGlvbnMpO1xuXG4gICAgZnVuY3Rpb24gY29uc3RhbnRTZWxlY3RvcigpIHtcbiAgICAgIHJldHVybiBjb25zdGFudDtcbiAgICB9XG5cbiAgICBjb25zdGFudFNlbGVjdG9yLmRlcGVuZHNPbk93blByb3BzID0gZmFsc2U7XG4gICAgcmV0dXJuIGNvbnN0YW50U2VsZWN0b3I7XG4gIH07XG59IC8vIGRlcGVuZHNPbk93blByb3BzIGlzIHVzZWQgYnkgY3JlYXRlTWFwVG9Qcm9wc1Byb3h5IHRvIGRldGVybWluZSB3aGV0aGVyIHRvIHBhc3MgcHJvcHMgYXMgYXJnc1xuLy8gdG8gdGhlIG1hcFRvUHJvcHMgZnVuY3Rpb24gYmVpbmcgd3JhcHBlZC4gSXQgaXMgYWxzbyB1c2VkIGJ5IG1ha2VQdXJlUHJvcHNTZWxlY3RvciB0byBkZXRlcm1pbmVcbi8vIHdoZXRoZXIgbWFwVG9Qcm9wcyBuZWVkcyB0byBiZSBpbnZva2VkIHdoZW4gcHJvcHMgaGF2ZSBjaGFuZ2VkLlxuLy9cbi8vIEEgbGVuZ3RoIG9mIG9uZSBzaWduYWxzIHRoYXQgbWFwVG9Qcm9wcyBkb2VzIG5vdCBkZXBlbmQgb24gcHJvcHMgZnJvbSB0aGUgcGFyZW50IGNvbXBvbmVudC5cbi8vIEEgbGVuZ3RoIG9mIHplcm8gaXMgYXNzdW1lZCB0byBtZWFuIG1hcFRvUHJvcHMgaXMgZ2V0dGluZyBhcmdzIHZpYSBhcmd1bWVudHMgb3IgLi4uYXJncyBhbmRcbi8vIHRoZXJlZm9yZSBub3QgcmVwb3J0aW5nIGl0cyBsZW5ndGggYWNjdXJhdGVseS4uXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREZXBlbmRzT25Pd25Qcm9wcyhtYXBUb1Byb3BzKSB7XG4gIHJldHVybiBtYXBUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzICE9PSBudWxsICYmIG1hcFRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMgIT09IHVuZGVmaW5lZCA/IEJvb2xlYW4obWFwVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcykgOiBtYXBUb1Byb3BzLmxlbmd0aCAhPT0gMTtcbn0gLy8gVXNlZCBieSB3aGVuTWFwU3RhdGVUb1Byb3BzSXNGdW5jdGlvbiBhbmQgd2hlbk1hcERpc3BhdGNoVG9Qcm9wc0lzRnVuY3Rpb24sXG4vLyB0aGlzIGZ1bmN0aW9uIHdyYXBzIG1hcFRvUHJvcHMgaW4gYSBwcm94eSBmdW5jdGlvbiB3aGljaCBkb2VzIHNldmVyYWwgdGhpbmdzOlxuLy9cbi8vICAqIERldGVjdHMgd2hldGhlciB0aGUgbWFwVG9Qcm9wcyBmdW5jdGlvbiBiZWluZyBjYWxsZWQgZGVwZW5kcyBvbiBwcm9wcywgd2hpY2hcbi8vICAgIGlzIHVzZWQgYnkgc2VsZWN0b3JGYWN0b3J5IHRvIGRlY2lkZSBpZiBpdCBzaG91bGQgcmVpbnZva2Ugb24gcHJvcHMgY2hhbmdlcy5cbi8vXG4vLyAgKiBPbiBmaXJzdCBjYWxsLCBoYW5kbGVzIG1hcFRvUHJvcHMgaWYgcmV0dXJucyBhbm90aGVyIGZ1bmN0aW9uLCBhbmQgdHJlYXRzIHRoYXRcbi8vICAgIG5ldyBmdW5jdGlvbiBhcyB0aGUgdHJ1ZSBtYXBUb1Byb3BzIGZvciBzdWJzZXF1ZW50IGNhbGxzLlxuLy9cbi8vICAqIE9uIGZpcnN0IGNhbGwsIHZlcmlmaWVzIHRoZSBmaXJzdCByZXN1bHQgaXMgYSBwbGFpbiBvYmplY3QsIGluIG9yZGVyIHRvIHdhcm5cbi8vICAgIHRoZSBkZXZlbG9wZXIgdGhhdCB0aGVpciBtYXBUb1Byb3BzIGZ1bmN0aW9uIGlzIG5vdCByZXR1cm5pbmcgYSB2YWxpZCByZXN1bHQuXG4vL1xuXG5leHBvcnQgZnVuY3Rpb24gd3JhcE1hcFRvUHJvcHNGdW5jKG1hcFRvUHJvcHMsIG1ldGhvZE5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGluaXRQcm94eVNlbGVjdG9yKGRpc3BhdGNoLCBfcmVmKSB7XG4gICAgdmFyIGRpc3BsYXlOYW1lID0gX3JlZi5kaXNwbGF5TmFtZTtcblxuICAgIHZhciBwcm94eSA9IGZ1bmN0aW9uIG1hcFRvUHJvcHNQcm94eShzdGF0ZU9yRGlzcGF0Y2gsIG93blByb3BzKSB7XG4gICAgICByZXR1cm4gcHJveHkuZGVwZW5kc09uT3duUHJvcHMgPyBwcm94eS5tYXBUb1Byb3BzKHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpIDogcHJveHkubWFwVG9Qcm9wcyhzdGF0ZU9yRGlzcGF0Y2gpO1xuICAgIH07IC8vIGFsbG93IGRldGVjdEZhY3RvcnlBbmRWZXJpZnkgdG8gZ2V0IG93blByb3BzXG5cblxuICAgIHByb3h5LmRlcGVuZHNPbk93blByb3BzID0gdHJ1ZTtcblxuICAgIHByb3h5Lm1hcFRvUHJvcHMgPSBmdW5jdGlvbiBkZXRlY3RGYWN0b3J5QW5kVmVyaWZ5KHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpIHtcbiAgICAgIHByb3h5Lm1hcFRvUHJvcHMgPSBtYXBUb1Byb3BzO1xuICAgICAgcHJveHkuZGVwZW5kc09uT3duUHJvcHMgPSBnZXREZXBlbmRzT25Pd25Qcm9wcyhtYXBUb1Byb3BzKTtcbiAgICAgIHZhciBwcm9wcyA9IHByb3h5KHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpO1xuXG4gICAgICBpZiAodHlwZW9mIHByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByb3h5Lm1hcFRvUHJvcHMgPSBwcm9wcztcbiAgICAgICAgcHJveHkuZGVwZW5kc09uT3duUHJvcHMgPSBnZXREZXBlbmRzT25Pd25Qcm9wcyhwcm9wcyk7XG4gICAgICAgIHByb3BzID0gcHJveHkoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB2ZXJpZnlQbGFpbk9iamVjdChwcm9wcywgZGlzcGxheU5hbWUsIG1ldGhvZE5hbWUpO1xuICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH07XG5cbiAgICByZXR1cm4gcHJveHk7XG4gIH07XG59IiwiaW1wb3J0IHsgUmVhY3RSZWR1eENvbnRleHQgfSBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRleHQnO1xuaW1wb3J0IHsgdXNlU3RvcmUgYXMgdXNlRGVmYXVsdFN0b3JlLCBjcmVhdGVTdG9yZUhvb2sgfSBmcm9tICcuL3VzZVN0b3JlJztcbi8qKlxyXG4gKiBIb29rIGZhY3RvcnksIHdoaWNoIGNyZWF0ZXMgYSBgdXNlRGlzcGF0Y2hgIGhvb2sgYm91bmQgdG8gYSBnaXZlbiBjb250ZXh0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWN0LkNvbnRleHR9IFtjb250ZXh0PVJlYWN0UmVkdXhDb250ZXh0XSBDb250ZXh0IHBhc3NlZCB0byB5b3VyIGA8UHJvdmlkZXI+YC5cclxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGB1c2VEaXNwYXRjaGAgaG9vayBib3VuZCB0byB0aGUgc3BlY2lmaWVkIGNvbnRleHQuXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGlzcGF0Y2hIb29rKGNvbnRleHQpIHtcbiAgaWYgKGNvbnRleHQgPT09IHZvaWQgMCkge1xuICAgIGNvbnRleHQgPSBSZWFjdFJlZHV4Q29udGV4dDtcbiAgfVxuXG4gIHZhciB1c2VTdG9yZSA9IGNvbnRleHQgPT09IFJlYWN0UmVkdXhDb250ZXh0ID8gdXNlRGVmYXVsdFN0b3JlIDogY3JlYXRlU3RvcmVIb29rKGNvbnRleHQpO1xuICByZXR1cm4gZnVuY3Rpb24gdXNlRGlzcGF0Y2goKSB7XG4gICAgdmFyIHN0b3JlID0gdXNlU3RvcmUoKTtcbiAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2g7XG4gIH07XG59XG4vKipcclxuICogQSBob29rIHRvIGFjY2VzcyB0aGUgcmVkdXggYGRpc3BhdGNoYCBmdW5jdGlvbi5cclxuICpcclxuICogQHJldHVybnMge2FueXxmdW5jdGlvbn0gcmVkdXggc3RvcmUncyBgZGlzcGF0Y2hgIGZ1bmN0aW9uXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIGltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xyXG4gKiBpbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG4gKlxyXG4gKiBleHBvcnQgY29uc3QgQ291bnRlckNvbXBvbmVudCA9ICh7IHZhbHVlIH0pID0+IHtcclxuICogICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICogICBjb25zdCBpbmNyZWFzZUNvdW50ZXIgPSB1c2VDYWxsYmFjaygoKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdpbmNyZWFzZS1jb3VudGVyJyB9KSwgW10pXHJcbiAqICAgcmV0dXJuIChcclxuICogICAgIDxkaXY+XHJcbiAqICAgICAgIDxzcGFuPnt2YWx1ZX08L3NwYW4+XHJcbiAqICAgICAgIDxidXR0b24gb25DbGljaz17aW5jcmVhc2VDb3VudGVyfT5JbmNyZWFzZSBjb3VudGVyPC9idXR0b24+XHJcbiAqICAgICA8L2Rpdj5cclxuICogICApXHJcbiAqIH1cclxuICovXG5cbmV4cG9ydCB2YXIgdXNlRGlzcGF0Y2ggPVxuLyojX19QVVJFX18qL1xuY3JlYXRlRGlzcGF0Y2hIb29rKCk7IiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0UmVkdXhDb250ZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9Db250ZXh0Jztcbi8qKlxyXG4gKiBBIGhvb2sgdG8gYWNjZXNzIHRoZSB2YWx1ZSBvZiB0aGUgYFJlYWN0UmVkdXhDb250ZXh0YC4gVGhpcyBpcyBhIGxvdy1sZXZlbFxyXG4gKiBob29rIHRoYXQgeW91IHNob3VsZCB1c3VhbGx5IG5vdCBuZWVkIHRvIGNhbGwgZGlyZWN0bHkuXHJcbiAqXHJcbiAqIEByZXR1cm5zIHthbnl9IHRoZSB2YWx1ZSBvZiB0aGUgYFJlYWN0UmVkdXhDb250ZXh0YFxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbiAqIGltcG9ydCB7IHVzZVJlZHV4Q29udGV4dCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG4gKlxyXG4gKiBleHBvcnQgY29uc3QgQ291bnRlckNvbXBvbmVudCA9ICh7IHZhbHVlIH0pID0+IHtcclxuICogICBjb25zdCB7IHN0b3JlIH0gPSB1c2VSZWR1eENvbnRleHQoKVxyXG4gKiAgIHJldHVybiA8ZGl2PntzdG9yZS5nZXRTdGF0ZSgpfTwvZGl2PlxyXG4gKiB9XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUmVkdXhDb250ZXh0KCkge1xuICB2YXIgY29udGV4dFZhbHVlID0gdXNlQ29udGV4dChSZWFjdFJlZHV4Q29udGV4dCk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIWNvbnRleHRWYWx1ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IGZpbmQgcmVhY3QtcmVkdXggY29udGV4dCB2YWx1ZTsgcGxlYXNlIGVuc3VyZSB0aGUgY29tcG9uZW50IGlzIHdyYXBwZWQgaW4gYSA8UHJvdmlkZXI+Jyk7XG4gIH1cblxuICByZXR1cm4gY29udGV4dFZhbHVlO1xufSIsImltcG9ydCB7IHVzZVJlZHVjZXIsIHVzZVJlZiwgdXNlTWVtbywgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJlZHV4Q29udGV4dCBhcyB1c2VEZWZhdWx0UmVkdXhDb250ZXh0IH0gZnJvbSAnLi91c2VSZWR1eENvbnRleHQnO1xuaW1wb3J0IFN1YnNjcmlwdGlvbiBmcm9tICcuLi91dGlscy9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCB9IGZyb20gJy4uL3V0aWxzL3VzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QnO1xuaW1wb3J0IHsgUmVhY3RSZWR1eENvbnRleHQgfSBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRleHQnO1xuXG52YXIgcmVmRXF1YWxpdHkgPSBmdW5jdGlvbiByZWZFcXVhbGl0eShhLCBiKSB7XG4gIHJldHVybiBhID09PSBiO1xufTtcblxuZnVuY3Rpb24gdXNlU2VsZWN0b3JXaXRoU3RvcmVBbmRTdWJzY3JpcHRpb24oc2VsZWN0b3IsIGVxdWFsaXR5Rm4sIHN0b3JlLCBjb250ZXh0U3ViKSB7XG4gIHZhciBfdXNlUmVkdWNlciA9IHVzZVJlZHVjZXIoZnVuY3Rpb24gKHMpIHtcbiAgICByZXR1cm4gcyArIDE7XG4gIH0sIDApLFxuICAgICAgZm9yY2VSZW5kZXIgPSBfdXNlUmVkdWNlclsxXTtcblxuICB2YXIgc3Vic2NyaXB0aW9uID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBTdWJzY3JpcHRpb24oc3RvcmUsIGNvbnRleHRTdWIpO1xuICB9LCBbc3RvcmUsIGNvbnRleHRTdWJdKTtcbiAgdmFyIGxhdGVzdFN1YnNjcmlwdGlvbkNhbGxiYWNrRXJyb3IgPSB1c2VSZWYoKTtcbiAgdmFyIGxhdGVzdFNlbGVjdG9yID0gdXNlUmVmKCk7XG4gIHZhciBsYXRlc3RTZWxlY3RlZFN0YXRlID0gdXNlUmVmKCk7XG4gIHZhciBzZWxlY3RlZFN0YXRlO1xuXG4gIHRyeSB7XG4gICAgaWYgKHNlbGVjdG9yICE9PSBsYXRlc3RTZWxlY3Rvci5jdXJyZW50IHx8IGxhdGVzdFN1YnNjcmlwdGlvbkNhbGxiYWNrRXJyb3IuY3VycmVudCkge1xuICAgICAgc2VsZWN0ZWRTdGF0ZSA9IHNlbGVjdG9yKHN0b3JlLmdldFN0YXRlKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxlY3RlZFN0YXRlID0gbGF0ZXN0U2VsZWN0ZWRTdGF0ZS5jdXJyZW50O1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGxhdGVzdFN1YnNjcmlwdGlvbkNhbGxiYWNrRXJyb3IuY3VycmVudCkge1xuICAgICAgZXJyLm1lc3NhZ2UgKz0gXCJcXG5UaGUgZXJyb3IgbWF5IGJlIGNvcnJlbGF0ZWQgd2l0aCB0aGlzIHByZXZpb3VzIGVycm9yOlxcblwiICsgbGF0ZXN0U3Vic2NyaXB0aW9uQ2FsbGJhY2tFcnJvci5jdXJyZW50LnN0YWNrICsgXCJcXG5cXG5cIjtcbiAgICB9XG5cbiAgICB0aHJvdyBlcnI7XG4gIH1cblxuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBsYXRlc3RTZWxlY3Rvci5jdXJyZW50ID0gc2VsZWN0b3I7XG4gICAgbGF0ZXN0U2VsZWN0ZWRTdGF0ZS5jdXJyZW50ID0gc2VsZWN0ZWRTdGF0ZTtcbiAgICBsYXRlc3RTdWJzY3JpcHRpb25DYWxsYmFja0Vycm9yLmN1cnJlbnQgPSB1bmRlZmluZWQ7XG4gIH0pO1xuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBjaGVja0ZvclVwZGF0ZXMoKSB7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgbmV3U2VsZWN0ZWRTdGF0ZSA9IGxhdGVzdFNlbGVjdG9yLmN1cnJlbnQoc3RvcmUuZ2V0U3RhdGUoKSk7XG5cbiAgICAgICAgaWYgKGVxdWFsaXR5Rm4obmV3U2VsZWN0ZWRTdGF0ZSwgbGF0ZXN0U2VsZWN0ZWRTdGF0ZS5jdXJyZW50KSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhdGVzdFNlbGVjdGVkU3RhdGUuY3VycmVudCA9IG5ld1NlbGVjdGVkU3RhdGU7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgLy8gd2UgaWdub3JlIGFsbCBlcnJvcnMgaGVyZSwgc2luY2Ugd2hlbiB0aGUgY29tcG9uZW50XG4gICAgICAgIC8vIGlzIHJlLXJlbmRlcmVkLCB0aGUgc2VsZWN0b3JzIGFyZSBjYWxsZWQgYWdhaW4sIGFuZFxuICAgICAgICAvLyB3aWxsIHRocm93IGFnYWluLCBpZiBuZWl0aGVyIHByb3BzIG5vciBzdG9yZSBzdGF0ZVxuICAgICAgICAvLyBjaGFuZ2VkXG4gICAgICAgIGxhdGVzdFN1YnNjcmlwdGlvbkNhbGxiYWNrRXJyb3IuY3VycmVudCA9IGVycjtcbiAgICAgIH1cblxuICAgICAgZm9yY2VSZW5kZXIoe30pO1xuICAgIH1cblxuICAgIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlID0gY2hlY2tGb3JVcGRhdGVzO1xuICAgIHN1YnNjcmlwdGlvbi50cnlTdWJzY3JpYmUoKTtcbiAgICBjaGVja0ZvclVwZGF0ZXMoKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbi50cnlVbnN1YnNjcmliZSgpO1xuICAgIH07XG4gIH0sIFtzdG9yZSwgc3Vic2NyaXB0aW9uXSk7XG4gIHJldHVybiBzZWxlY3RlZFN0YXRlO1xufVxuLyoqXHJcbiAqIEhvb2sgZmFjdG9yeSwgd2hpY2ggY3JlYXRlcyBhIGB1c2VTZWxlY3RvcmAgaG9vayBib3VuZCB0byBhIGdpdmVuIGNvbnRleHQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhY3QuQ29udGV4dH0gW2NvbnRleHQ9UmVhY3RSZWR1eENvbnRleHRdIENvbnRleHQgcGFzc2VkIHRvIHlvdXIgYDxQcm92aWRlcj5gLlxyXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgYHVzZVNlbGVjdG9yYCBob29rIGJvdW5kIHRvIHRoZSBzcGVjaWZpZWQgY29udGV4dC5cclxuICovXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNlbGVjdG9ySG9vayhjb250ZXh0KSB7XG4gIGlmIChjb250ZXh0ID09PSB2b2lkIDApIHtcbiAgICBjb250ZXh0ID0gUmVhY3RSZWR1eENvbnRleHQ7XG4gIH1cblxuICB2YXIgdXNlUmVkdXhDb250ZXh0ID0gY29udGV4dCA9PT0gUmVhY3RSZWR1eENvbnRleHQgPyB1c2VEZWZhdWx0UmVkdXhDb250ZXh0IDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB1c2VDb250ZXh0KGNvbnRleHQpO1xuICB9O1xuICByZXR1cm4gZnVuY3Rpb24gdXNlU2VsZWN0b3Ioc2VsZWN0b3IsIGVxdWFsaXR5Rm4pIHtcbiAgICBpZiAoZXF1YWxpdHlGbiA9PT0gdm9pZCAwKSB7XG4gICAgICBlcXVhbGl0eUZuID0gcmVmRXF1YWxpdHk7XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIXNlbGVjdG9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgbXVzdCBwYXNzIGEgc2VsZWN0b3IgdG8gdXNlU2VsZWN0b3JzXCIpO1xuICAgIH1cblxuICAgIHZhciBfdXNlUmVkdXhDb250ZXh0ID0gdXNlUmVkdXhDb250ZXh0KCksXG4gICAgICAgIHN0b3JlID0gX3VzZVJlZHV4Q29udGV4dC5zdG9yZSxcbiAgICAgICAgY29udGV4dFN1YiA9IF91c2VSZWR1eENvbnRleHQuc3Vic2NyaXB0aW9uO1xuXG4gICAgcmV0dXJuIHVzZVNlbGVjdG9yV2l0aFN0b3JlQW5kU3Vic2NyaXB0aW9uKHNlbGVjdG9yLCBlcXVhbGl0eUZuLCBzdG9yZSwgY29udGV4dFN1Yik7XG4gIH07XG59XG4vKipcclxuICogQSBob29rIHRvIGFjY2VzcyB0aGUgcmVkdXggc3RvcmUncyBzdGF0ZS4gVGhpcyBob29rIHRha2VzIGEgc2VsZWN0b3IgZnVuY3Rpb25cclxuICogYXMgYW4gYXJndW1lbnQuIFRoZSBzZWxlY3RvciBpcyBjYWxsZWQgd2l0aCB0aGUgc3RvcmUgc3RhdGUuXHJcbiAqXHJcbiAqIFRoaXMgaG9vayB0YWtlcyBhbiBvcHRpb25hbCBlcXVhbGl0eSBjb21wYXJpc29uIGZ1bmN0aW9uIGFzIHRoZSBzZWNvbmQgcGFyYW1ldGVyXHJcbiAqIHRoYXQgYWxsb3dzIHlvdSB0byBjdXN0b21pemUgdGhlIHdheSB0aGUgc2VsZWN0ZWQgc3RhdGUgaXMgY29tcGFyZWQgdG8gZGV0ZXJtaW5lXHJcbiAqIHdoZXRoZXIgdGhlIGNvbXBvbmVudCBuZWVkcyB0byBiZSByZS1yZW5kZXJlZC5cclxuICpcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gc2VsZWN0b3IgdGhlIHNlbGVjdG9yIGZ1bmN0aW9uXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb249fSBlcXVhbGl0eUZuIHRoZSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgdXNlZCB0byBkZXRlcm1pbmUgZXF1YWxpdHlcclxuICpcclxuICogQHJldHVybnMge2FueX0gdGhlIHNlbGVjdGVkIHN0YXRlXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuICogaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuICpcclxuICogZXhwb3J0IGNvbnN0IENvdW50ZXJDb21wb25lbnQgPSAoKSA9PiB7XHJcbiAqICAgY29uc3QgY291bnRlciA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmNvdW50ZXIpXHJcbiAqICAgcmV0dXJuIDxkaXY+e2NvdW50ZXJ9PC9kaXY+XHJcbiAqIH1cclxuICovXG5cbmV4cG9ydCB2YXIgdXNlU2VsZWN0b3IgPVxuLyojX19QVVJFX18qL1xuY3JlYXRlU2VsZWN0b3JIb29rKCk7IiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0UmVkdXhDb250ZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9Db250ZXh0JztcbmltcG9ydCB7IHVzZVJlZHV4Q29udGV4dCBhcyB1c2VEZWZhdWx0UmVkdXhDb250ZXh0IH0gZnJvbSAnLi91c2VSZWR1eENvbnRleHQnO1xuLyoqXHJcbiAqIEhvb2sgZmFjdG9yeSwgd2hpY2ggY3JlYXRlcyBhIGB1c2VTdG9yZWAgaG9vayBib3VuZCB0byBhIGdpdmVuIGNvbnRleHQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhY3QuQ29udGV4dH0gW2NvbnRleHQ9UmVhY3RSZWR1eENvbnRleHRdIENvbnRleHQgcGFzc2VkIHRvIHlvdXIgYDxQcm92aWRlcj5gLlxyXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgYHVzZVN0b3JlYCBob29rIGJvdW5kIHRvIHRoZSBzcGVjaWZpZWQgY29udGV4dC5cclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdG9yZUhvb2soY29udGV4dCkge1xuICBpZiAoY29udGV4dCA9PT0gdm9pZCAwKSB7XG4gICAgY29udGV4dCA9IFJlYWN0UmVkdXhDb250ZXh0O1xuICB9XG5cbiAgdmFyIHVzZVJlZHV4Q29udGV4dCA9IGNvbnRleHQgPT09IFJlYWN0UmVkdXhDb250ZXh0ID8gdXNlRGVmYXVsdFJlZHV4Q29udGV4dCA6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdXNlQ29udGV4dChjb250ZXh0KTtcbiAgfTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVzZVN0b3JlKCkge1xuICAgIHZhciBfdXNlUmVkdXhDb250ZXh0ID0gdXNlUmVkdXhDb250ZXh0KCksXG4gICAgICAgIHN0b3JlID0gX3VzZVJlZHV4Q29udGV4dC5zdG9yZTtcblxuICAgIHJldHVybiBzdG9yZTtcbiAgfTtcbn1cbi8qKlxyXG4gKiBBIGhvb2sgdG8gYWNjZXNzIHRoZSByZWR1eCBzdG9yZS5cclxuICpcclxuICogQHJldHVybnMge2FueX0gdGhlIHJlZHV4IHN0b3JlXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuICogaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuICpcclxuICogZXhwb3J0IGNvbnN0IEV4YW1wbGVDb21wb25lbnQgPSAoKSA9PiB7XHJcbiAqICAgY29uc3Qgc3RvcmUgPSB1c2VTdG9yZSgpXHJcbiAqICAgcmV0dXJuIDxkaXY+e3N0b3JlLmdldFN0YXRlKCl9PC9kaXY+XHJcbiAqIH1cclxuICovXG5cbmV4cG9ydCB2YXIgdXNlU3RvcmUgPVxuLyojX19QVVJFX18qL1xuY3JlYXRlU3RvcmVIb29rKCk7IiwiaW1wb3J0IFByb3ZpZGVyIGZyb20gJy4vY29tcG9uZW50cy9Qcm92aWRlcic7XG5pbXBvcnQgY29ubmVjdEFkdmFuY2VkIGZyb20gJy4vY29tcG9uZW50cy9jb25uZWN0QWR2YW5jZWQnO1xuaW1wb3J0IHsgUmVhY3RSZWR1eENvbnRleHQgfSBmcm9tICcuL2NvbXBvbmVudHMvQ29udGV4dCc7XG5pbXBvcnQgY29ubmVjdCBmcm9tICcuL2Nvbm5lY3QvY29ubmVjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgY3JlYXRlRGlzcGF0Y2hIb29rIH0gZnJvbSAnLi9ob29rcy91c2VEaXNwYXRjaCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgY3JlYXRlU2VsZWN0b3JIb29rIH0gZnJvbSAnLi9ob29rcy91c2VTZWxlY3Rvcic7XG5pbXBvcnQgeyB1c2VTdG9yZSwgY3JlYXRlU3RvcmVIb29rIH0gZnJvbSAnLi9ob29rcy91c2VTdG9yZSc7XG5pbXBvcnQgeyBzZXRCYXRjaCB9IGZyb20gJy4vdXRpbHMvYmF0Y2gnO1xuaW1wb3J0IHsgdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMgYXMgYmF0Y2ggfSBmcm9tICcuL3V0aWxzL3JlYWN0QmF0Y2hlZFVwZGF0ZXMnO1xuaW1wb3J0IHNoYWxsb3dFcXVhbCBmcm9tICcuL3V0aWxzL3NoYWxsb3dFcXVhbCc7XG5zZXRCYXRjaChiYXRjaCk7XG5leHBvcnQgeyBQcm92aWRlciwgY29ubmVjdEFkdmFuY2VkLCBSZWFjdFJlZHV4Q29udGV4dCwgY29ubmVjdCwgYmF0Y2gsIHVzZURpc3BhdGNoLCBjcmVhdGVEaXNwYXRjaEhvb2ssIHVzZVNlbGVjdG9yLCBjcmVhdGVTZWxlY3Rvckhvb2ssIHVzZVN0b3JlLCBjcmVhdGVTdG9yZUhvb2ssIHNoYWxsb3dFcXVhbCB9OyIsImltcG9ydCB7IGdldEJhdGNoIH0gZnJvbSAnLi9iYXRjaCc7IC8vIGVuY2Fwc3VsYXRlcyB0aGUgc3Vic2NyaXB0aW9uIGxvZ2ljIGZvciBjb25uZWN0aW5nIGEgY29tcG9uZW50IHRvIHRoZSByZWR1eCBzdG9yZSwgYXNcbi8vIHdlbGwgYXMgbmVzdGluZyBzdWJzY3JpcHRpb25zIG9mIGRlc2NlbmRhbnQgY29tcG9uZW50cywgc28gdGhhdCB3ZSBjYW4gZW5zdXJlIHRoZVxuLy8gYW5jZXN0b3IgY29tcG9uZW50cyByZS1yZW5kZXIgYmVmb3JlIGRlc2NlbmRhbnRzXG5cbnZhciBudWxsTGlzdGVuZXJzID0ge1xuICBub3RpZnk6IGZ1bmN0aW9uIG5vdGlmeSgpIHt9XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVMaXN0ZW5lckNvbGxlY3Rpb24oKSB7XG4gIHZhciBiYXRjaCA9IGdldEJhdGNoKCk7XG4gIHZhciBmaXJzdCA9IG51bGw7XG4gIHZhciBsYXN0ID0gbnVsbDtcbiAgcmV0dXJuIHtcbiAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICBmaXJzdCA9IG51bGw7XG4gICAgICBsYXN0ID0gbnVsbDtcbiAgICB9LFxuICAgIG5vdGlmeTogZnVuY3Rpb24gbm90aWZ5KCkge1xuICAgICAgYmF0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbGlzdGVuZXIgPSBmaXJzdDtcblxuICAgICAgICB3aGlsZSAobGlzdGVuZXIpIHtcbiAgICAgICAgICBsaXN0ZW5lci5jYWxsYmFjaygpO1xuICAgICAgICAgIGxpc3RlbmVyID0gbGlzdGVuZXIubmV4dDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBsaXN0ZW5lcnMgPSBbXTtcbiAgICAgIHZhciBsaXN0ZW5lciA9IGZpcnN0O1xuXG4gICAgICB3aGlsZSAobGlzdGVuZXIpIHtcbiAgICAgICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgICBsaXN0ZW5lciA9IGxpc3RlbmVyLm5leHQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBsaXN0ZW5lcnM7XG4gICAgfSxcbiAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uIHN1YnNjcmliZShjYWxsYmFjaykge1xuICAgICAgdmFyIGlzU3Vic2NyaWJlZCA9IHRydWU7XG4gICAgICB2YXIgbGlzdGVuZXIgPSBsYXN0ID0ge1xuICAgICAgICBjYWxsYmFjazogY2FsbGJhY2ssXG4gICAgICAgIG5leHQ6IG51bGwsXG4gICAgICAgIHByZXY6IGxhc3RcbiAgICAgIH07XG5cbiAgICAgIGlmIChsaXN0ZW5lci5wcmV2KSB7XG4gICAgICAgIGxpc3RlbmVyLnByZXYubmV4dCA9IGxpc3RlbmVyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmlyc3QgPSBsaXN0ZW5lcjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgICBpZiAoIWlzU3Vic2NyaWJlZCB8fCBmaXJzdCA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICBpc1N1YnNjcmliZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAobGlzdGVuZXIubmV4dCkge1xuICAgICAgICAgIGxpc3RlbmVyLm5leHQucHJldiA9IGxpc3RlbmVyLnByZXY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGFzdCA9IGxpc3RlbmVyLnByZXY7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGlzdGVuZXIucHJldikge1xuICAgICAgICAgIGxpc3RlbmVyLnByZXYubmV4dCA9IGxpc3RlbmVyLm5leHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmlyc3QgPSBsaXN0ZW5lci5uZXh0O1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfTtcbn1cblxudmFyIFN1YnNjcmlwdGlvbiA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFN1YnNjcmlwdGlvbihzdG9yZSwgcGFyZW50U3ViKSB7XG4gICAgdGhpcy5zdG9yZSA9IHN0b3JlO1xuICAgIHRoaXMucGFyZW50U3ViID0gcGFyZW50U3ViO1xuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBudWxsO1xuICAgIHRoaXMubGlzdGVuZXJzID0gbnVsbExpc3RlbmVycztcbiAgICB0aGlzLmhhbmRsZUNoYW5nZVdyYXBwZXIgPSB0aGlzLmhhbmRsZUNoYW5nZVdyYXBwZXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBTdWJzY3JpcHRpb24ucHJvdG90eXBlO1xuXG4gIF9wcm90by5hZGROZXN0ZWRTdWIgPSBmdW5jdGlvbiBhZGROZXN0ZWRTdWIobGlzdGVuZXIpIHtcbiAgICB0aGlzLnRyeVN1YnNjcmliZSgpO1xuICAgIHJldHVybiB0aGlzLmxpc3RlbmVycy5zdWJzY3JpYmUobGlzdGVuZXIpO1xuICB9O1xuXG4gIF9wcm90by5ub3RpZnlOZXN0ZWRTdWJzID0gZnVuY3Rpb24gbm90aWZ5TmVzdGVkU3VicygpIHtcbiAgICB0aGlzLmxpc3RlbmVycy5ub3RpZnkoKTtcbiAgfTtcblxuICBfcHJvdG8uaGFuZGxlQ2hhbmdlV3JhcHBlciA9IGZ1bmN0aW9uIGhhbmRsZUNoYW5nZVdyYXBwZXIoKSB7XG4gICAgaWYgKHRoaXMub25TdGF0ZUNoYW5nZSkge1xuICAgICAgdGhpcy5vblN0YXRlQ2hhbmdlKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5pc1N1YnNjcmliZWQgPSBmdW5jdGlvbiBpc1N1YnNjcmliZWQoKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odGhpcy51bnN1YnNjcmliZSk7XG4gIH07XG5cbiAgX3Byb3RvLnRyeVN1YnNjcmliZSA9IGZ1bmN0aW9uIHRyeVN1YnNjcmliZSgpIHtcbiAgICBpZiAoIXRoaXMudW5zdWJzY3JpYmUpIHtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUgPSB0aGlzLnBhcmVudFN1YiA/IHRoaXMucGFyZW50U3ViLmFkZE5lc3RlZFN1Yih0aGlzLmhhbmRsZUNoYW5nZVdyYXBwZXIpIDogdGhpcy5zdG9yZS5zdWJzY3JpYmUodGhpcy5oYW5kbGVDaGFuZ2VXcmFwcGVyKTtcbiAgICAgIHRoaXMubGlzdGVuZXJzID0gY3JlYXRlTGlzdGVuZXJDb2xsZWN0aW9uKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by50cnlVbnN1YnNjcmliZSA9IGZ1bmN0aW9uIHRyeVVuc3Vic2NyaWJlKCkge1xuICAgIGlmICh0aGlzLnVuc3Vic2NyaWJlKSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlID0gbnVsbDtcbiAgICAgIHRoaXMubGlzdGVuZXJzLmNsZWFyKCk7XG4gICAgICB0aGlzLmxpc3RlbmVycyA9IG51bGxMaXN0ZW5lcnM7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBTdWJzY3JpcHRpb247XG59KCk7XG5cbmV4cG9ydCB7IFN1YnNjcmlwdGlvbiBhcyBkZWZhdWx0IH07IiwiLy8gRGVmYXVsdCB0byBhIGR1bW15IFwiYmF0Y2hcIiBpbXBsZW1lbnRhdGlvbiB0aGF0IGp1c3QgcnVucyB0aGUgY2FsbGJhY2tcbmZ1bmN0aW9uIGRlZmF1bHROb29wQmF0Y2goY2FsbGJhY2spIHtcbiAgY2FsbGJhY2soKTtcbn1cblxudmFyIGJhdGNoID0gZGVmYXVsdE5vb3BCYXRjaDsgLy8gQWxsb3cgaW5qZWN0aW5nIGFub3RoZXIgYmF0Y2hpbmcgZnVuY3Rpb24gbGF0ZXJcblxuZXhwb3J0IHZhciBzZXRCYXRjaCA9IGZ1bmN0aW9uIHNldEJhdGNoKG5ld0JhdGNoKSB7XG4gIHJldHVybiBiYXRjaCA9IG5ld0JhdGNoO1xufTsgLy8gU3VwcGx5IGEgZ2V0dGVyIGp1c3QgdG8gc2tpcCBkZWFsaW5nIHdpdGggRVNNIGJpbmRpbmdzXG5cbmV4cG9ydCB2YXIgZ2V0QmF0Y2ggPSBmdW5jdGlvbiBnZXRCYXRjaCgpIHtcbiAgcmV0dXJuIGJhdGNoO1xufTsiLCIvKipcclxuICogQHBhcmFtIHthbnl9IG9iaiBUaGUgb2JqZWN0IHRvIGluc3BlY3QuXHJcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBhcmd1bWVudCBhcHBlYXJzIHRvIGJlIGEgcGxhaW4gb2JqZWN0LlxyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKSB7XG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fCBvYmogPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgdmFyIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaik7XG4gIGlmIChwcm90byA9PT0gbnVsbCkgcmV0dXJuIHRydWU7XG4gIHZhciBiYXNlUHJvdG8gPSBwcm90bztcblxuICB3aGlsZSAoT2JqZWN0LmdldFByb3RvdHlwZU9mKGJhc2VQcm90bykgIT09IG51bGwpIHtcbiAgICBiYXNlUHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYmFzZVByb3RvKTtcbiAgfVxuXG4gIHJldHVybiBwcm90byA9PT0gYmFzZVByb3RvO1xufSIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby11bnJlc29sdmVkICovXG5leHBvcnQgeyB1bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyB9IGZyb20gJ3JlYWN0LWRvbSc7IiwiZnVuY3Rpb24gaXMoeCwgeSkge1xuICBpZiAoeCA9PT0geSkge1xuICAgIHJldHVybiB4ICE9PSAwIHx8IHkgIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hhbGxvd0VxdWFsKG9iakEsIG9iakIpIHtcbiAgaWYgKGlzKG9iakEsIG9iakIpKSByZXR1cm4gdHJ1ZTtcblxuICBpZiAodHlwZW9mIG9iakEgIT09ICdvYmplY3QnIHx8IG9iakEgPT09IG51bGwgfHwgdHlwZW9mIG9iakIgIT09ICdvYmplY3QnIHx8IG9iakIgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIga2V5c0EgPSBPYmplY3Qua2V5cyhvYmpBKTtcbiAgdmFyIGtleXNCID0gT2JqZWN0LmtleXMob2JqQik7XG4gIGlmIChrZXlzQS5sZW5ndGggIT09IGtleXNCLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5c0EubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmpCLCBrZXlzQVtpXSkgfHwgIWlzKG9iakFba2V5c0FbaV1dLCBvYmpCW2tleXNBW2ldXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn0iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZUxheW91dEVmZmVjdCB9IGZyb20gJ3JlYWN0JzsgLy8gUmVhY3QgY3VycmVudGx5IHRocm93cyBhIHdhcm5pbmcgd2hlbiB1c2luZyB1c2VMYXlvdXRFZmZlY3Qgb24gdGhlIHNlcnZlci5cbi8vIFRvIGdldCBhcm91bmQgaXQsIHdlIGNhbiBjb25kaXRpb25hbGx5IHVzZUVmZmVjdCBvbiB0aGUgc2VydmVyIChuby1vcCkgYW5kXG4vLyB1c2VMYXlvdXRFZmZlY3QgaW4gdGhlIGJyb3dzZXIuIFdlIG5lZWQgdXNlTGF5b3V0RWZmZWN0IHRvIGVuc3VyZSB0aGUgc3RvcmVcbi8vIHN1YnNjcmlwdGlvbiBjYWxsYmFjayBhbHdheXMgaGFzIHRoZSBzZWxlY3RvciBmcm9tIHRoZSBsYXRlc3QgcmVuZGVyIGNvbW1pdFxuLy8gYXZhaWxhYmxlLCBvdGhlcndpc2UgYSBzdG9yZSB1cGRhdGUgbWF5IGhhcHBlbiBiZXR3ZWVuIHJlbmRlciBhbmQgdGhlIGVmZmVjdCxcbi8vIHdoaWNoIG1heSBjYXVzZSBtaXNzZWQgdXBkYXRlczsgd2UgYWxzbyBtdXN0IGVuc3VyZSB0aGUgc3RvcmUgc3Vic2NyaXB0aW9uXG4vLyBpcyBjcmVhdGVkIHN5bmNocm9ub3VzbHksIG90aGVyd2lzZSBhIHN0b3JlIHVwZGF0ZSBtYXkgb2NjdXIgYmVmb3JlIHRoZVxuLy8gc3Vic2NyaXB0aW9uIGlzIGNyZWF0ZWQgYW5kIGFuIGluY29uc2lzdGVudCBzdGF0ZSBtYXkgYmUgb2JzZXJ2ZWRcblxuZXhwb3J0IHZhciB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50ICE9PSAndW5kZWZpbmVkJyA/IHVzZUxheW91dEVmZmVjdCA6IHVzZUVmZmVjdDsiLCJpbXBvcnQgaXNQbGFpbk9iamVjdCBmcm9tICcuL2lzUGxhaW5PYmplY3QnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAnLi93YXJuaW5nJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVBsYWluT2JqZWN0KHZhbHVlLCBkaXNwbGF5TmFtZSwgbWV0aG9kTmFtZSkge1xuICBpZiAoIWlzUGxhaW5PYmplY3QodmFsdWUpKSB7XG4gICAgd2FybmluZyhtZXRob2ROYW1lICsgXCIoKSBpbiBcIiArIGRpc3BsYXlOYW1lICsgXCIgbXVzdCByZXR1cm4gYSBwbGFpbiBvYmplY3QuIEluc3RlYWQgcmVjZWl2ZWQgXCIgKyB2YWx1ZSArIFwiLlwiKTtcbiAgfVxufSIsIi8qKlxyXG4gKiBQcmludHMgYSB3YXJuaW5nIGluIHRoZSBjb25zb2xlIGlmIGl0IGV4aXN0cy5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgVGhlIHdhcm5pbmcgbWVzc2FnZS5cclxuICogQHJldHVybnMge3ZvaWR9XHJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2FybmluZyhtZXNzYWdlKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY29uc29sZS5lcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG5cblxuICB0cnkge1xuICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgaWYgeW91IGVuYWJsZVxuICAgIC8vIFwiYnJlYWsgb24gYWxsIGV4Y2VwdGlvbnNcIiBpbiB5b3VyIGNvbnNvbGUsXG4gICAgLy8gaXQgd291bGQgcGF1c2UgdGhlIGV4ZWN1dGlvbiBhdCB0aGlzIGxpbmUuXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWVtcHR5ICovXG4gIH0gY2F0Y2ggKGUpIHt9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tZW1wdHkgKi9cblxufSIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgZGxsXzUwMzBmMzg3ZDMyOGU0NDE1Nzg1ICovIFwiZGxsLXJlZmVyZW5jZSBkbGxfNTAzMGYzODdkMzI4ZTQ0MTU3ODVcIikpKFwiLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanNcIik7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjb21wb3NlID0gcmVxdWlyZSgncmVkdXgnKS5jb21wb3NlO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jb21wb3NlV2l0aERldlRvb2xzID0gKFxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fID9cbiAgICB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fIDpcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09ICdvYmplY3QnKSByZXR1cm4gY29tcG9zZTtcbiAgICAgIHJldHVybiBjb21wb3NlLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfVxuKTtcblxuZXhwb3J0cy5kZXZUb29sc0VuaGFuY2VyID0gKFxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyA/XG4gICAgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18gOlxuICAgIGZ1bmN0aW9uKCkgeyByZXR1cm4gZnVuY3Rpb24obm9vcCkgeyByZXR1cm4gbm9vcDsgfSB9XG4pO1xuIiwiaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlX19kZWZhdWx0IGZyb20gJ0ByZWR1eC1zYWdhL2NvcmUnO1xuZXhwb3J0ICogZnJvbSAnQHJlZHV4LXNhZ2EvY29yZSc7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTYWdhTWlkZGxld2FyZV9fZGVmYXVsdDtcbiIsImV4cG9ydCAqIGZyb20gJ0ByZWR1eC1zYWdhL2NvcmUvZWZmZWN0cyc7XG4iLCJpbXBvcnQgJCRvYnNlcnZhYmxlIGZyb20gJ3N5bWJvbC1vYnNlcnZhYmxlJztcblxuLyoqXG4gKiBUaGVzZSBhcmUgcHJpdmF0ZSBhY3Rpb24gdHlwZXMgcmVzZXJ2ZWQgYnkgUmVkdXguXG4gKiBGb3IgYW55IHVua25vd24gYWN0aW9ucywgeW91IG11c3QgcmV0dXJuIHRoZSBjdXJyZW50IHN0YXRlLlxuICogSWYgdGhlIGN1cnJlbnQgc3RhdGUgaXMgdW5kZWZpbmVkLCB5b3UgbXVzdCByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUuXG4gKiBEbyBub3QgcmVmZXJlbmNlIHRoZXNlIGFjdGlvbiB0eXBlcyBkaXJlY3RseSBpbiB5b3VyIGNvZGUuXG4gKi9cbnZhciByYW5kb21TdHJpbmcgPSBmdW5jdGlvbiByYW5kb21TdHJpbmcoKSB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNykuc3BsaXQoJycpLmpvaW4oJy4nKTtcbn07XG5cbnZhciBBY3Rpb25UeXBlcyA9IHtcbiAgSU5JVDogXCJAQHJlZHV4L0lOSVRcIiArIHJhbmRvbVN0cmluZygpLFxuICBSRVBMQUNFOiBcIkBAcmVkdXgvUkVQTEFDRVwiICsgcmFuZG9tU3RyaW5nKCksXG4gIFBST0JFX1VOS05PV05fQUNUSU9OOiBmdW5jdGlvbiBQUk9CRV9VTktOT1dOX0FDVElPTigpIHtcbiAgICByZXR1cm4gXCJAQHJlZHV4L1BST0JFX1VOS05PV05fQUNUSU9OXCIgKyByYW5kb21TdHJpbmcoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBAcGFyYW0ge2FueX0gb2JqIFRoZSBvYmplY3QgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBhcmd1bWVudCBhcHBlYXJzIHRvIGJlIGEgcGxhaW4gb2JqZWN0LlxuICovXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHwgb2JqID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gIHZhciBwcm90byA9IG9iajtcblxuICB3aGlsZSAoT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvKSAhPT0gbnVsbCkge1xuICAgIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvKTtcbiAgfVxuXG4gIHJldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSA9PT0gcHJvdG87XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIFJlZHV4IHN0b3JlIHRoYXQgaG9sZHMgdGhlIHN0YXRlIHRyZWUuXG4gKiBUaGUgb25seSB3YXkgdG8gY2hhbmdlIHRoZSBkYXRhIGluIHRoZSBzdG9yZSBpcyB0byBjYWxsIGBkaXNwYXRjaCgpYCBvbiBpdC5cbiAqXG4gKiBUaGVyZSBzaG91bGQgb25seSBiZSBhIHNpbmdsZSBzdG9yZSBpbiB5b3VyIGFwcC4gVG8gc3BlY2lmeSBob3cgZGlmZmVyZW50XG4gKiBwYXJ0cyBvZiB0aGUgc3RhdGUgdHJlZSByZXNwb25kIHRvIGFjdGlvbnMsIHlvdSBtYXkgY29tYmluZSBzZXZlcmFsIHJlZHVjZXJzXG4gKiBpbnRvIGEgc2luZ2xlIHJlZHVjZXIgZnVuY3Rpb24gYnkgdXNpbmcgYGNvbWJpbmVSZWR1Y2Vyc2AuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVkdWNlciBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgbmV4dCBzdGF0ZSB0cmVlLCBnaXZlblxuICogdGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBhbmQgdGhlIGFjdGlvbiB0byBoYW5kbGUuXG4gKlxuICogQHBhcmFtIHthbnl9IFtwcmVsb2FkZWRTdGF0ZV0gVGhlIGluaXRpYWwgc3RhdGUuIFlvdSBtYXkgb3B0aW9uYWxseSBzcGVjaWZ5IGl0XG4gKiB0byBoeWRyYXRlIHRoZSBzdGF0ZSBmcm9tIHRoZSBzZXJ2ZXIgaW4gdW5pdmVyc2FsIGFwcHMsIG9yIHRvIHJlc3RvcmUgYVxuICogcHJldmlvdXNseSBzZXJpYWxpemVkIHVzZXIgc2Vzc2lvbi5cbiAqIElmIHlvdSB1c2UgYGNvbWJpbmVSZWR1Y2Vyc2AgdG8gcHJvZHVjZSB0aGUgcm9vdCByZWR1Y2VyIGZ1bmN0aW9uLCB0aGlzIG11c3QgYmVcbiAqIGFuIG9iamVjdCB3aXRoIHRoZSBzYW1lIHNoYXBlIGFzIGBjb21iaW5lUmVkdWNlcnNgIGtleXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2VuaGFuY2VyXSBUaGUgc3RvcmUgZW5oYW5jZXIuIFlvdSBtYXkgb3B0aW9uYWxseSBzcGVjaWZ5IGl0XG4gKiB0byBlbmhhbmNlIHRoZSBzdG9yZSB3aXRoIHRoaXJkLXBhcnR5IGNhcGFiaWxpdGllcyBzdWNoIGFzIG1pZGRsZXdhcmUsXG4gKiB0aW1lIHRyYXZlbCwgcGVyc2lzdGVuY2UsIGV0Yy4gVGhlIG9ubHkgc3RvcmUgZW5oYW5jZXIgdGhhdCBzaGlwcyB3aXRoIFJlZHV4XG4gKiBpcyBgYXBwbHlNaWRkbGV3YXJlKClgLlxuICpcbiAqIEByZXR1cm5zIHtTdG9yZX0gQSBSZWR1eCBzdG9yZSB0aGF0IGxldHMgeW91IHJlYWQgdGhlIHN0YXRlLCBkaXNwYXRjaCBhY3Rpb25zXG4gKiBhbmQgc3Vic2NyaWJlIHRvIGNoYW5nZXMuXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlU3RvcmUocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUsIGVuaGFuY2VyKSB7XG4gIHZhciBfcmVmMjtcblxuICBpZiAodHlwZW9mIHByZWxvYWRlZFN0YXRlID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBlbmhhbmNlciA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgZW5oYW5jZXIgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGFyZ3VtZW50c1szXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignSXQgbG9va3MgbGlrZSB5b3UgYXJlIHBhc3Npbmcgc2V2ZXJhbCBzdG9yZSBlbmhhbmNlcnMgdG8gJyArICdjcmVhdGVTdG9yZSgpLiBUaGlzIGlzIG5vdCBzdXBwb3J0ZWQuIEluc3RlYWQsIGNvbXBvc2UgdGhlbSAnICsgJ3RvZ2V0aGVyIHRvIGEgc2luZ2xlIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBwcmVsb2FkZWRTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZW5oYW5jZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZW5oYW5jZXIgPSBwcmVsb2FkZWRTdGF0ZTtcbiAgICBwcmVsb2FkZWRTdGF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZW5oYW5jZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiBlbmhhbmNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgZW5oYW5jZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZW5oYW5jZXIoY3JlYXRlU3RvcmUpKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcmVkdWNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIHJlZHVjZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciBjdXJyZW50UmVkdWNlciA9IHJlZHVjZXI7XG4gIHZhciBjdXJyZW50U3RhdGUgPSBwcmVsb2FkZWRTdGF0ZTtcbiAgdmFyIGN1cnJlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgdmFyIG5leHRMaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzO1xuICB2YXIgaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuICAvKipcbiAgICogVGhpcyBtYWtlcyBhIHNoYWxsb3cgY29weSBvZiBjdXJyZW50TGlzdGVuZXJzIHNvIHdlIGNhbiB1c2VcbiAgICogbmV4dExpc3RlbmVycyBhcyBhIHRlbXBvcmFyeSBsaXN0IHdoaWxlIGRpc3BhdGNoaW5nLlxuICAgKlxuICAgKiBUaGlzIHByZXZlbnRzIGFueSBidWdzIGFyb3VuZCBjb25zdW1lcnMgY2FsbGluZ1xuICAgKiBzdWJzY3JpYmUvdW5zdWJzY3JpYmUgaW4gdGhlIG1pZGRsZSBvZiBhIGRpc3BhdGNoLlxuICAgKi9cblxuICBmdW5jdGlvbiBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCkge1xuICAgIGlmIChuZXh0TGlzdGVuZXJzID09PSBjdXJyZW50TGlzdGVuZXJzKSB7XG4gICAgICBuZXh0TGlzdGVuZXJzID0gY3VycmVudExpc3RlbmVycy5zbGljZSgpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogUmVhZHMgdGhlIHN0YXRlIHRyZWUgbWFuYWdlZCBieSB0aGUgc3RvcmUuXG4gICAqXG4gICAqIEByZXR1cm5zIHthbnl9IFRoZSBjdXJyZW50IHN0YXRlIHRyZWUgb2YgeW91ciBhcHBsaWNhdGlvbi5cbiAgICovXG5cblxuICBmdW5jdGlvbiBnZXRTdGF0ZSgpIHtcbiAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbWF5IG5vdCBjYWxsIHN0b3JlLmdldFN0YXRlKCkgd2hpbGUgdGhlIHJlZHVjZXIgaXMgZXhlY3V0aW5nLiAnICsgJ1RoZSByZWR1Y2VyIGhhcyBhbHJlYWR5IHJlY2VpdmVkIHRoZSBzdGF0ZSBhcyBhbiBhcmd1bWVudC4gJyArICdQYXNzIGl0IGRvd24gZnJvbSB0aGUgdG9wIHJlZHVjZXIgaW5zdGVhZCBvZiByZWFkaW5nIGl0IGZyb20gdGhlIHN0b3JlLicpO1xuICAgIH1cblxuICAgIHJldHVybiBjdXJyZW50U3RhdGU7XG4gIH1cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGFuZ2UgbGlzdGVuZXIuIEl0IHdpbGwgYmUgY2FsbGVkIGFueSB0aW1lIGFuIGFjdGlvbiBpcyBkaXNwYXRjaGVkLFxuICAgKiBhbmQgc29tZSBwYXJ0IG9mIHRoZSBzdGF0ZSB0cmVlIG1heSBwb3RlbnRpYWxseSBoYXZlIGNoYW5nZWQuIFlvdSBtYXkgdGhlblxuICAgKiBjYWxsIGBnZXRTdGF0ZSgpYCB0byByZWFkIHRoZSBjdXJyZW50IHN0YXRlIHRyZWUgaW5zaWRlIHRoZSBjYWxsYmFjay5cbiAgICpcbiAgICogWW91IG1heSBjYWxsIGBkaXNwYXRjaCgpYCBmcm9tIGEgY2hhbmdlIGxpc3RlbmVyLCB3aXRoIHRoZSBmb2xsb3dpbmdcbiAgICogY2F2ZWF0czpcbiAgICpcbiAgICogMS4gVGhlIHN1YnNjcmlwdGlvbnMgYXJlIHNuYXBzaG90dGVkIGp1c3QgYmVmb3JlIGV2ZXJ5IGBkaXNwYXRjaCgpYCBjYWxsLlxuICAgKiBJZiB5b3Ugc3Vic2NyaWJlIG9yIHVuc3Vic2NyaWJlIHdoaWxlIHRoZSBsaXN0ZW5lcnMgYXJlIGJlaW5nIGludm9rZWQsIHRoaXNcbiAgICogd2lsbCBub3QgaGF2ZSBhbnkgZWZmZWN0IG9uIHRoZSBgZGlzcGF0Y2goKWAgdGhhdCBpcyBjdXJyZW50bHkgaW4gcHJvZ3Jlc3MuXG4gICAqIEhvd2V2ZXIsIHRoZSBuZXh0IGBkaXNwYXRjaCgpYCBjYWxsLCB3aGV0aGVyIG5lc3RlZCBvciBub3QsIHdpbGwgdXNlIGEgbW9yZVxuICAgKiByZWNlbnQgc25hcHNob3Qgb2YgdGhlIHN1YnNjcmlwdGlvbiBsaXN0LlxuICAgKlxuICAgKiAyLiBUaGUgbGlzdGVuZXIgc2hvdWxkIG5vdCBleHBlY3QgdG8gc2VlIGFsbCBzdGF0ZSBjaGFuZ2VzLCBhcyB0aGUgc3RhdGVcbiAgICogbWlnaHQgaGF2ZSBiZWVuIHVwZGF0ZWQgbXVsdGlwbGUgdGltZXMgZHVyaW5nIGEgbmVzdGVkIGBkaXNwYXRjaCgpYCBiZWZvcmVcbiAgICogdGhlIGxpc3RlbmVyIGlzIGNhbGxlZC4gSXQgaXMsIGhvd2V2ZXIsIGd1YXJhbnRlZWQgdGhhdCBhbGwgc3Vic2NyaWJlcnNcbiAgICogcmVnaXN0ZXJlZCBiZWZvcmUgdGhlIGBkaXNwYXRjaCgpYCBzdGFydGVkIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIGxhdGVzdFxuICAgKiBzdGF0ZSBieSB0aGUgdGltZSBpdCBleGl0cy5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgQSBjYWxsYmFjayB0byBiZSBpbnZva2VkIG9uIGV2ZXJ5IGRpc3BhdGNoLlxuICAgKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZnVuY3Rpb24gdG8gcmVtb3ZlIHRoaXMgY2hhbmdlIGxpc3RlbmVyLlxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHN1YnNjcmliZShsaXN0ZW5lcikge1xuICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIGxpc3RlbmVyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG1heSBub3QgY2FsbCBzdG9yZS5zdWJzY3JpYmUoKSB3aGlsZSB0aGUgcmVkdWNlciBpcyBleGVjdXRpbmcuICcgKyAnSWYgeW91IHdvdWxkIGxpa2UgdG8gYmUgbm90aWZpZWQgYWZ0ZXIgdGhlIHN0b3JlIGhhcyBiZWVuIHVwZGF0ZWQsIHN1YnNjcmliZSBmcm9tIGEgJyArICdjb21wb25lbnQgYW5kIGludm9rZSBzdG9yZS5nZXRTdGF0ZSgpIGluIHRoZSBjYWxsYmFjayB0byBhY2Nlc3MgdGhlIGxhdGVzdCBzdGF0ZS4gJyArICdTZWUgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvYXBpLXJlZmVyZW5jZS9zdG9yZSNzdWJzY3JpYmVsaXN0ZW5lciBmb3IgbW9yZSBkZXRhaWxzLicpO1xuICAgIH1cblxuICAgIHZhciBpc1N1YnNjcmliZWQgPSB0cnVlO1xuICAgIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKTtcbiAgICBuZXh0TGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgIHJldHVybiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgIGlmICghaXNTdWJzY3JpYmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbWF5IG5vdCB1bnN1YnNjcmliZSBmcm9tIGEgc3RvcmUgbGlzdGVuZXIgd2hpbGUgdGhlIHJlZHVjZXIgaXMgZXhlY3V0aW5nLiAnICsgJ1NlZSBodHRwczovL3JlZHV4LmpzLm9yZy9hcGktcmVmZXJlbmNlL3N0b3JlI3N1YnNjcmliZWxpc3RlbmVyIGZvciBtb3JlIGRldGFpbHMuJyk7XG4gICAgICB9XG5cbiAgICAgIGlzU3Vic2NyaWJlZCA9IGZhbHNlO1xuICAgICAgZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpO1xuICAgICAgdmFyIGluZGV4ID0gbmV4dExpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcbiAgICAgIG5leHRMaXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIGN1cnJlbnRMaXN0ZW5lcnMgPSBudWxsO1xuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIERpc3BhdGNoZXMgYW4gYWN0aW9uLiBJdCBpcyB0aGUgb25seSB3YXkgdG8gdHJpZ2dlciBhIHN0YXRlIGNoYW5nZS5cbiAgICpcbiAgICogVGhlIGByZWR1Y2VyYCBmdW5jdGlvbiwgdXNlZCB0byBjcmVhdGUgdGhlIHN0b3JlLCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZVxuICAgKiBjdXJyZW50IHN0YXRlIHRyZWUgYW5kIHRoZSBnaXZlbiBgYWN0aW9uYC4gSXRzIHJldHVybiB2YWx1ZSB3aWxsXG4gICAqIGJlIGNvbnNpZGVyZWQgdGhlICoqbmV4dCoqIHN0YXRlIG9mIHRoZSB0cmVlLCBhbmQgdGhlIGNoYW5nZSBsaXN0ZW5lcnNcbiAgICogd2lsbCBiZSBub3RpZmllZC5cbiAgICpcbiAgICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb25seSBzdXBwb3J0cyBwbGFpbiBvYmplY3QgYWN0aW9ucy4gSWYgeW91IHdhbnQgdG9cbiAgICogZGlzcGF0Y2ggYSBQcm9taXNlLCBhbiBPYnNlcnZhYmxlLCBhIHRodW5rLCBvciBzb21ldGhpbmcgZWxzZSwgeW91IG5lZWQgdG9cbiAgICogd3JhcCB5b3VyIHN0b3JlIGNyZWF0aW5nIGZ1bmN0aW9uIGludG8gdGhlIGNvcnJlc3BvbmRpbmcgbWlkZGxld2FyZS4gRm9yXG4gICAqIGV4YW1wbGUsIHNlZSB0aGUgZG9jdW1lbnRhdGlvbiBmb3IgdGhlIGByZWR1eC10aHVua2AgcGFja2FnZS4gRXZlbiB0aGVcbiAgICogbWlkZGxld2FyZSB3aWxsIGV2ZW50dWFsbHkgZGlzcGF0Y2ggcGxhaW4gb2JqZWN0IGFjdGlvbnMgdXNpbmcgdGhpcyBtZXRob2QuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gQSBwbGFpbiBvYmplY3QgcmVwcmVzZW50aW5nIOKAnHdoYXQgY2hhbmdlZOKAnS4gSXQgaXNcbiAgICogYSBnb29kIGlkZWEgdG8ga2VlcCBhY3Rpb25zIHNlcmlhbGl6YWJsZSBzbyB5b3UgY2FuIHJlY29yZCBhbmQgcmVwbGF5IHVzZXJcbiAgICogc2Vzc2lvbnMsIG9yIHVzZSB0aGUgdGltZSB0cmF2ZWxsaW5nIGByZWR1eC1kZXZ0b29sc2AuIEFuIGFjdGlvbiBtdXN0IGhhdmVcbiAgICogYSBgdHlwZWAgcHJvcGVydHkgd2hpY2ggbWF5IG5vdCBiZSBgdW5kZWZpbmVkYC4gSXQgaXMgYSBnb29kIGlkZWEgdG8gdXNlXG4gICAqIHN0cmluZyBjb25zdGFudHMgZm9yIGFjdGlvbiB0eXBlcy5cbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH0gRm9yIGNvbnZlbmllbmNlLCB0aGUgc2FtZSBhY3Rpb24gb2JqZWN0IHlvdSBkaXNwYXRjaGVkLlxuICAgKlxuICAgKiBOb3RlIHRoYXQsIGlmIHlvdSB1c2UgYSBjdXN0b20gbWlkZGxld2FyZSwgaXQgbWF5IHdyYXAgYGRpc3BhdGNoKClgIHRvXG4gICAqIHJldHVybiBzb21ldGhpbmcgZWxzZSAoZm9yIGV4YW1wbGUsIGEgUHJvbWlzZSB5b3UgY2FuIGF3YWl0KS5cbiAgICovXG5cblxuICBmdW5jdGlvbiBkaXNwYXRjaChhY3Rpb24pIHtcbiAgICBpZiAoIWlzUGxhaW5PYmplY3QoYWN0aW9uKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBY3Rpb25zIG11c3QgYmUgcGxhaW4gb2JqZWN0cy4gJyArICdVc2UgY3VzdG9tIG1pZGRsZXdhcmUgZm9yIGFzeW5jIGFjdGlvbnMuJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBhY3Rpb24udHlwZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQWN0aW9ucyBtYXkgbm90IGhhdmUgYW4gdW5kZWZpbmVkIFwidHlwZVwiIHByb3BlcnR5LiAnICsgJ0hhdmUgeW91IG1pc3NwZWxsZWQgYSBjb25zdGFudD8nKTtcbiAgICB9XG5cbiAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWR1Y2VycyBtYXkgbm90IGRpc3BhdGNoIGFjdGlvbnMuJyk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGlzRGlzcGF0Y2hpbmcgPSB0cnVlO1xuICAgICAgY3VycmVudFN0YXRlID0gY3VycmVudFJlZHVjZXIoY3VycmVudFN0YXRlLCBhY3Rpb24pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpc0Rpc3BhdGNoaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGxpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnMgPSBuZXh0TGlzdGVuZXJzO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXTtcbiAgICAgIGxpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjdGlvbjtcbiAgfVxuICAvKipcbiAgICogUmVwbGFjZXMgdGhlIHJlZHVjZXIgY3VycmVudGx5IHVzZWQgYnkgdGhlIHN0b3JlIHRvIGNhbGN1bGF0ZSB0aGUgc3RhdGUuXG4gICAqXG4gICAqIFlvdSBtaWdodCBuZWVkIHRoaXMgaWYgeW91ciBhcHAgaW1wbGVtZW50cyBjb2RlIHNwbGl0dGluZyBhbmQgeW91IHdhbnQgdG9cbiAgICogbG9hZCBzb21lIG9mIHRoZSByZWR1Y2VycyBkeW5hbWljYWxseS4gWW91IG1pZ2h0IGFsc28gbmVlZCB0aGlzIGlmIHlvdVxuICAgKiBpbXBsZW1lbnQgYSBob3QgcmVsb2FkaW5nIG1lY2hhbmlzbSBmb3IgUmVkdXguXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IG5leHRSZWR1Y2VyIFRoZSByZWR1Y2VyIGZvciB0aGUgc3RvcmUgdG8gdXNlIGluc3RlYWQuXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHJlcGxhY2VSZWR1Y2VyKG5leHRSZWR1Y2VyKSB7XG4gICAgaWYgKHR5cGVvZiBuZXh0UmVkdWNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgbmV4dFJlZHVjZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICBjdXJyZW50UmVkdWNlciA9IG5leHRSZWR1Y2VyOyAvLyBUaGlzIGFjdGlvbiBoYXMgYSBzaW1pbGlhciBlZmZlY3QgdG8gQWN0aW9uVHlwZXMuSU5JVC5cbiAgICAvLyBBbnkgcmVkdWNlcnMgdGhhdCBleGlzdGVkIGluIGJvdGggdGhlIG5ldyBhbmQgb2xkIHJvb3RSZWR1Y2VyXG4gICAgLy8gd2lsbCByZWNlaXZlIHRoZSBwcmV2aW91cyBzdGF0ZS4gVGhpcyBlZmZlY3RpdmVseSBwb3B1bGF0ZXNcbiAgICAvLyB0aGUgbmV3IHN0YXRlIHRyZWUgd2l0aCBhbnkgcmVsZXZhbnQgZGF0YSBmcm9tIHRoZSBvbGQgb25lLlxuXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogQWN0aW9uVHlwZXMuUkVQTEFDRVxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBJbnRlcm9wZXJhYmlsaXR5IHBvaW50IGZvciBvYnNlcnZhYmxlL3JlYWN0aXZlIGxpYnJhcmllcy5cbiAgICogQHJldHVybnMge29ic2VydmFibGV9IEEgbWluaW1hbCBvYnNlcnZhYmxlIG9mIHN0YXRlIGNoYW5nZXMuXG4gICAqIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWUgdGhlIG9ic2VydmFibGUgcHJvcG9zYWw6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLW9ic2VydmFibGVcbiAgICovXG5cblxuICBmdW5jdGlvbiBvYnNlcnZhYmxlKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIG91dGVyU3Vic2NyaWJlID0gc3Vic2NyaWJlO1xuICAgIHJldHVybiBfcmVmID0ge1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgbWluaW1hbCBvYnNlcnZhYmxlIHN1YnNjcmlwdGlvbiBtZXRob2QuXG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JzZXJ2ZXIgQW55IG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIGFzIGFuIG9ic2VydmVyLlxuICAgICAgICogVGhlIG9ic2VydmVyIG9iamVjdCBzaG91bGQgaGF2ZSBhIGBuZXh0YCBtZXRob2QuXG4gICAgICAgKiBAcmV0dXJucyB7c3Vic2NyaXB0aW9ufSBBbiBvYmplY3Qgd2l0aCBhbiBgdW5zdWJzY3JpYmVgIG1ldGhvZCB0aGF0IGNhblxuICAgICAgICogYmUgdXNlZCB0byB1bnN1YnNjcmliZSB0aGUgb2JzZXJ2YWJsZSBmcm9tIHRoZSBzdG9yZSwgYW5kIHByZXZlbnQgZnVydGhlclxuICAgICAgICogZW1pc3Npb24gb2YgdmFsdWVzIGZyb20gdGhlIG9ic2VydmFibGUuXG4gICAgICAgKi9cbiAgICAgIHN1YnNjcmliZTogZnVuY3Rpb24gc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb2JzZXJ2ZXIgIT09ICdvYmplY3QnIHx8IG9ic2VydmVyID09PSBudWxsKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgdGhlIG9ic2VydmVyIHRvIGJlIGFuIG9iamVjdC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG9ic2VydmVTdGF0ZSgpIHtcbiAgICAgICAgICBpZiAob2JzZXJ2ZXIubmV4dCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChnZXRTdGF0ZSgpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvYnNlcnZlU3RhdGUoKTtcbiAgICAgICAgdmFyIHVuc3Vic2NyaWJlID0gb3V0ZXJTdWJzY3JpYmUob2JzZXJ2ZVN0YXRlKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB1bnN1YnNjcmliZTogdW5zdWJzY3JpYmVcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9LCBfcmVmWyQkb2JzZXJ2YWJsZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LCBfcmVmO1xuICB9IC8vIFdoZW4gYSBzdG9yZSBpcyBjcmVhdGVkLCBhbiBcIklOSVRcIiBhY3Rpb24gaXMgZGlzcGF0Y2hlZCBzbyB0aGF0IGV2ZXJ5XG4gIC8vIHJlZHVjZXIgcmV0dXJucyB0aGVpciBpbml0aWFsIHN0YXRlLiBUaGlzIGVmZmVjdGl2ZWx5IHBvcHVsYXRlc1xuICAvLyB0aGUgaW5pdGlhbCBzdGF0ZSB0cmVlLlxuXG5cbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLklOSVRcbiAgfSk7XG4gIHJldHVybiBfcmVmMiA9IHtcbiAgICBkaXNwYXRjaDogZGlzcGF0Y2gsXG4gICAgc3Vic2NyaWJlOiBzdWJzY3JpYmUsXG4gICAgZ2V0U3RhdGU6IGdldFN0YXRlLFxuICAgIHJlcGxhY2VSZWR1Y2VyOiByZXBsYWNlUmVkdWNlclxuICB9LCBfcmVmMlskJG9ic2VydmFibGVdID0gb2JzZXJ2YWJsZSwgX3JlZjI7XG59XG5cbi8qKlxuICogUHJpbnRzIGEgd2FybmluZyBpbiB0aGUgY29uc29sZSBpZiBpdCBleGlzdHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgVGhlIHdhcm5pbmcgbWVzc2FnZS5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiB3YXJuaW5nKG1lc3NhZ2UpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb25zb2xlLmVycm9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cblxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCBpZiB5b3UgZW5hYmxlXG4gICAgLy8gXCJicmVhayBvbiBhbGwgZXhjZXB0aW9uc1wiIGluIHlvdXIgY29uc29sZSxcbiAgICAvLyBpdCB3b3VsZCBwYXVzZSB0aGUgZXhlY3V0aW9uIGF0IHRoaXMgbGluZS5cbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIH0gY2F0Y2ggKGUpIHt9IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZW1wdHlcblxufVxuXG5mdW5jdGlvbiBnZXRVbmRlZmluZWRTdGF0ZUVycm9yTWVzc2FnZShrZXksIGFjdGlvbikge1xuICB2YXIgYWN0aW9uVHlwZSA9IGFjdGlvbiAmJiBhY3Rpb24udHlwZTtcbiAgdmFyIGFjdGlvbkRlc2NyaXB0aW9uID0gYWN0aW9uVHlwZSAmJiBcImFjdGlvbiBcXFwiXCIgKyBTdHJpbmcoYWN0aW9uVHlwZSkgKyBcIlxcXCJcIiB8fCAnYW4gYWN0aW9uJztcbiAgcmV0dXJuIFwiR2l2ZW4gXCIgKyBhY3Rpb25EZXNjcmlwdGlvbiArIFwiLCByZWR1Y2VyIFxcXCJcIiArIGtleSArIFwiXFxcIiByZXR1cm5lZCB1bmRlZmluZWQuIFwiICsgXCJUbyBpZ25vcmUgYW4gYWN0aW9uLCB5b3UgbXVzdCBleHBsaWNpdGx5IHJldHVybiB0aGUgcHJldmlvdXMgc3RhdGUuIFwiICsgXCJJZiB5b3Ugd2FudCB0aGlzIHJlZHVjZXIgdG8gaG9sZCBubyB2YWx1ZSwgeW91IGNhbiByZXR1cm4gbnVsbCBpbnN0ZWFkIG9mIHVuZGVmaW5lZC5cIjtcbn1cblxuZnVuY3Rpb24gZ2V0VW5leHBlY3RlZFN0YXRlU2hhcGVXYXJuaW5nTWVzc2FnZShpbnB1dFN0YXRlLCByZWR1Y2VycywgYWN0aW9uLCB1bmV4cGVjdGVkS2V5Q2FjaGUpIHtcbiAgdmFyIHJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMocmVkdWNlcnMpO1xuICB2YXIgYXJndW1lbnROYW1lID0gYWN0aW9uICYmIGFjdGlvbi50eXBlID09PSBBY3Rpb25UeXBlcy5JTklUID8gJ3ByZWxvYWRlZFN0YXRlIGFyZ3VtZW50IHBhc3NlZCB0byBjcmVhdGVTdG9yZScgOiAncHJldmlvdXMgc3RhdGUgcmVjZWl2ZWQgYnkgdGhlIHJlZHVjZXInO1xuXG4gIGlmIChyZWR1Y2VyS2V5cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gJ1N0b3JlIGRvZXMgbm90IGhhdmUgYSB2YWxpZCByZWR1Y2VyLiBNYWtlIHN1cmUgdGhlIGFyZ3VtZW50IHBhc3NlZCAnICsgJ3RvIGNvbWJpbmVSZWR1Y2VycyBpcyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSByZWR1Y2Vycy4nO1xuICB9XG5cbiAgaWYgKCFpc1BsYWluT2JqZWN0KGlucHV0U3RhdGUpKSB7XG4gICAgcmV0dXJuIFwiVGhlIFwiICsgYXJndW1lbnROYW1lICsgXCIgaGFzIHVuZXhwZWN0ZWQgdHlwZSBvZiBcXFwiXCIgKyB7fS50b1N0cmluZy5jYWxsKGlucHV0U3RhdGUpLm1hdGNoKC9cXHMoW2EtenxBLVpdKykvKVsxXSArIFwiXFxcIi4gRXhwZWN0ZWQgYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBcIiArIChcImtleXM6IFxcXCJcIiArIHJlZHVjZXJLZXlzLmpvaW4oJ1wiLCBcIicpICsgXCJcXFwiXCIpO1xuICB9XG5cbiAgdmFyIHVuZXhwZWN0ZWRLZXlzID0gT2JqZWN0LmtleXMoaW5wdXRTdGF0ZSkuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gIXJlZHVjZXJzLmhhc093blByb3BlcnR5KGtleSkgJiYgIXVuZXhwZWN0ZWRLZXlDYWNoZVtrZXldO1xuICB9KTtcbiAgdW5leHBlY3RlZEtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdW5leHBlY3RlZEtleUNhY2hlW2tleV0gPSB0cnVlO1xuICB9KTtcbiAgaWYgKGFjdGlvbiAmJiBhY3Rpb24udHlwZSA9PT0gQWN0aW9uVHlwZXMuUkVQTEFDRSkgcmV0dXJuO1xuXG4gIGlmICh1bmV4cGVjdGVkS2V5cy5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIFwiVW5leHBlY3RlZCBcIiArICh1bmV4cGVjdGVkS2V5cy5sZW5ndGggPiAxID8gJ2tleXMnIDogJ2tleScpICsgXCIgXCIgKyAoXCJcXFwiXCIgKyB1bmV4cGVjdGVkS2V5cy5qb2luKCdcIiwgXCInKSArIFwiXFxcIiBmb3VuZCBpbiBcIiArIGFyZ3VtZW50TmFtZSArIFwiLiBcIikgKyBcIkV4cGVjdGVkIHRvIGZpbmQgb25lIG9mIHRoZSBrbm93biByZWR1Y2VyIGtleXMgaW5zdGVhZDogXCIgKyAoXCJcXFwiXCIgKyByZWR1Y2VyS2V5cy5qb2luKCdcIiwgXCInKSArIFwiXFxcIi4gVW5leHBlY3RlZCBrZXlzIHdpbGwgYmUgaWdub3JlZC5cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXNzZXJ0UmVkdWNlclNoYXBlKHJlZHVjZXJzKSB7XG4gIE9iamVjdC5rZXlzKHJlZHVjZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgcmVkdWNlciA9IHJlZHVjZXJzW2tleV07XG4gICAgdmFyIGluaXRpYWxTdGF0ZSA9IHJlZHVjZXIodW5kZWZpbmVkLCB7XG4gICAgICB0eXBlOiBBY3Rpb25UeXBlcy5JTklUXG4gICAgfSk7XG5cbiAgICBpZiAodHlwZW9mIGluaXRpYWxTdGF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlZHVjZXIgXFxcIlwiICsga2V5ICsgXCJcXFwiIHJldHVybmVkIHVuZGVmaW5lZCBkdXJpbmcgaW5pdGlhbGl6YXRpb24uIFwiICsgXCJJZiB0aGUgc3RhdGUgcGFzc2VkIHRvIHRoZSByZWR1Y2VyIGlzIHVuZGVmaW5lZCwgeW91IG11c3QgXCIgKyBcImV4cGxpY2l0bHkgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLiBUaGUgaW5pdGlhbCBzdGF0ZSBtYXkgXCIgKyBcIm5vdCBiZSB1bmRlZmluZWQuIElmIHlvdSBkb24ndCB3YW50IHRvIHNldCBhIHZhbHVlIGZvciB0aGlzIHJlZHVjZXIsIFwiICsgXCJ5b3UgY2FuIHVzZSBudWxsIGluc3RlYWQgb2YgdW5kZWZpbmVkLlwiKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJlZHVjZXIodW5kZWZpbmVkLCB7XG4gICAgICB0eXBlOiBBY3Rpb25UeXBlcy5QUk9CRV9VTktOT1dOX0FDVElPTigpXG4gICAgfSkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZWR1Y2VyIFxcXCJcIiArIGtleSArIFwiXFxcIiByZXR1cm5lZCB1bmRlZmluZWQgd2hlbiBwcm9iZWQgd2l0aCBhIHJhbmRvbSB0eXBlLiBcIiArIChcIkRvbid0IHRyeSB0byBoYW5kbGUgXCIgKyBBY3Rpb25UeXBlcy5JTklUICsgXCIgb3Igb3RoZXIgYWN0aW9ucyBpbiBcXFwicmVkdXgvKlxcXCIgXCIpICsgXCJuYW1lc3BhY2UuIFRoZXkgYXJlIGNvbnNpZGVyZWQgcHJpdmF0ZS4gSW5zdGVhZCwgeW91IG11c3QgcmV0dXJuIHRoZSBcIiArIFwiY3VycmVudCBzdGF0ZSBmb3IgYW55IHVua25vd24gYWN0aW9ucywgdW5sZXNzIGl0IGlzIHVuZGVmaW5lZCwgXCIgKyBcImluIHdoaWNoIGNhc2UgeW91IG11c3QgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLCByZWdhcmRsZXNzIG9mIHRoZSBcIiArIFwiYWN0aW9uIHR5cGUuIFRoZSBpbml0aWFsIHN0YXRlIG1heSBub3QgYmUgdW5kZWZpbmVkLCBidXQgY2FuIGJlIG51bGwuXCIpO1xuICAgIH1cbiAgfSk7XG59XG4vKipcbiAqIFR1cm5zIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIGRpZmZlcmVudCByZWR1Y2VyIGZ1bmN0aW9ucywgaW50byBhIHNpbmdsZVxuICogcmVkdWNlciBmdW5jdGlvbi4gSXQgd2lsbCBjYWxsIGV2ZXJ5IGNoaWxkIHJlZHVjZXIsIGFuZCBnYXRoZXIgdGhlaXIgcmVzdWx0c1xuICogaW50byBhIHNpbmdsZSBzdGF0ZSBvYmplY3QsIHdob3NlIGtleXMgY29ycmVzcG9uZCB0byB0aGUga2V5cyBvZiB0aGUgcGFzc2VkXG4gKiByZWR1Y2VyIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcmVkdWNlcnMgQW4gb2JqZWN0IHdob3NlIHZhbHVlcyBjb3JyZXNwb25kIHRvIGRpZmZlcmVudFxuICogcmVkdWNlciBmdW5jdGlvbnMgdGhhdCBuZWVkIHRvIGJlIGNvbWJpbmVkIGludG8gb25lLiBPbmUgaGFuZHkgd2F5IHRvIG9idGFpblxuICogaXQgaXMgdG8gdXNlIEVTNiBgaW1wb3J0ICogYXMgcmVkdWNlcnNgIHN5bnRheC4gVGhlIHJlZHVjZXJzIG1heSBuZXZlciByZXR1cm5cbiAqIHVuZGVmaW5lZCBmb3IgYW55IGFjdGlvbi4gSW5zdGVhZCwgdGhleSBzaG91bGQgcmV0dXJuIHRoZWlyIGluaXRpYWwgc3RhdGVcbiAqIGlmIHRoZSBzdGF0ZSBwYXNzZWQgdG8gdGhlbSB3YXMgdW5kZWZpbmVkLCBhbmQgdGhlIGN1cnJlbnQgc3RhdGUgZm9yIGFueVxuICogdW5yZWNvZ25pemVkIGFjdGlvbi5cbiAqXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgcmVkdWNlciBmdW5jdGlvbiB0aGF0IGludm9rZXMgZXZlcnkgcmVkdWNlciBpbnNpZGUgdGhlXG4gKiBwYXNzZWQgb2JqZWN0LCBhbmQgYnVpbGRzIGEgc3RhdGUgb2JqZWN0IHdpdGggdGhlIHNhbWUgc2hhcGUuXG4gKi9cblxuXG5mdW5jdGlvbiBjb21iaW5lUmVkdWNlcnMocmVkdWNlcnMpIHtcbiAgdmFyIHJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMocmVkdWNlcnMpO1xuICB2YXIgZmluYWxSZWR1Y2VycyA9IHt9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmVkdWNlcktleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0gcmVkdWNlcktleXNbaV07XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiByZWR1Y2Vyc1trZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB3YXJuaW5nKFwiTm8gcmVkdWNlciBwcm92aWRlZCBmb3Iga2V5IFxcXCJcIiArIGtleSArIFwiXFxcIlwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJlZHVjZXJzW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGZpbmFsUmVkdWNlcnNba2V5XSA9IHJlZHVjZXJzW2tleV07XG4gICAgfVxuICB9XG5cbiAgdmFyIGZpbmFsUmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhmaW5hbFJlZHVjZXJzKTsgLy8gVGhpcyBpcyB1c2VkIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCB3YXJuIGFib3V0IHRoZSBzYW1lXG4gIC8vIGtleXMgbXVsdGlwbGUgdGltZXMuXG5cbiAgdmFyIHVuZXhwZWN0ZWRLZXlDYWNoZTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHVuZXhwZWN0ZWRLZXlDYWNoZSA9IHt9O1xuICB9XG5cbiAgdmFyIHNoYXBlQXNzZXJ0aW9uRXJyb3I7XG5cbiAgdHJ5IHtcbiAgICBhc3NlcnRSZWR1Y2VyU2hhcGUoZmluYWxSZWR1Y2Vycyk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBzaGFwZUFzc2VydGlvbkVycm9yID0gZTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiBjb21iaW5hdGlvbihzdGF0ZSwgYWN0aW9uKSB7XG4gICAgaWYgKHN0YXRlID09PSB2b2lkIDApIHtcbiAgICAgIHN0YXRlID0ge307XG4gICAgfVxuXG4gICAgaWYgKHNoYXBlQXNzZXJ0aW9uRXJyb3IpIHtcbiAgICAgIHRocm93IHNoYXBlQXNzZXJ0aW9uRXJyb3I7XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciB3YXJuaW5nTWVzc2FnZSA9IGdldFVuZXhwZWN0ZWRTdGF0ZVNoYXBlV2FybmluZ01lc3NhZ2Uoc3RhdGUsIGZpbmFsUmVkdWNlcnMsIGFjdGlvbiwgdW5leHBlY3RlZEtleUNhY2hlKTtcblxuICAgICAgaWYgKHdhcm5pbmdNZXNzYWdlKSB7XG4gICAgICAgIHdhcm5pbmcod2FybmluZ01lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBoYXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgdmFyIG5leHRTdGF0ZSA9IHt9O1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGZpbmFsUmVkdWNlcktleXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2tleSA9IGZpbmFsUmVkdWNlcktleXNbX2ldO1xuICAgICAgdmFyIHJlZHVjZXIgPSBmaW5hbFJlZHVjZXJzW19rZXldO1xuICAgICAgdmFyIHByZXZpb3VzU3RhdGVGb3JLZXkgPSBzdGF0ZVtfa2V5XTtcbiAgICAgIHZhciBuZXh0U3RhdGVGb3JLZXkgPSByZWR1Y2VyKHByZXZpb3VzU3RhdGVGb3JLZXksIGFjdGlvbik7XG5cbiAgICAgIGlmICh0eXBlb2YgbmV4dFN0YXRlRm9yS2V5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YXIgZXJyb3JNZXNzYWdlID0gZ2V0VW5kZWZpbmVkU3RhdGVFcnJvck1lc3NhZ2UoX2tleSwgYWN0aW9uKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yTWVzc2FnZSk7XG4gICAgICB9XG5cbiAgICAgIG5leHRTdGF0ZVtfa2V5XSA9IG5leHRTdGF0ZUZvcktleTtcbiAgICAgIGhhc0NoYW5nZWQgPSBoYXNDaGFuZ2VkIHx8IG5leHRTdGF0ZUZvcktleSAhPT0gcHJldmlvdXNTdGF0ZUZvcktleTtcbiAgICB9XG5cbiAgICBoYXNDaGFuZ2VkID0gaGFzQ2hhbmdlZCB8fCBmaW5hbFJlZHVjZXJLZXlzLmxlbmd0aCAhPT0gT2JqZWN0LmtleXMoc3RhdGUpLmxlbmd0aDtcbiAgICByZXR1cm4gaGFzQ2hhbmdlZCA/IG5leHRTdGF0ZSA6IHN0YXRlO1xuICB9O1xufVxuXG5mdW5jdGlvbiBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9yLCBkaXNwYXRjaCkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBkaXNwYXRjaChhY3Rpb25DcmVhdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9O1xufVxuLyoqXG4gKiBUdXJucyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBhY3Rpb24gY3JlYXRvcnMsIGludG8gYW4gb2JqZWN0IHdpdGggdGhlXG4gKiBzYW1lIGtleXMsIGJ1dCB3aXRoIGV2ZXJ5IGZ1bmN0aW9uIHdyYXBwZWQgaW50byBhIGBkaXNwYXRjaGAgY2FsbCBzbyB0aGV5XG4gKiBtYXkgYmUgaW52b2tlZCBkaXJlY3RseS4gVGhpcyBpcyBqdXN0IGEgY29udmVuaWVuY2UgbWV0aG9kLCBhcyB5b3UgY2FuIGNhbGxcbiAqIGBzdG9yZS5kaXNwYXRjaChNeUFjdGlvbkNyZWF0b3JzLmRvU29tZXRoaW5nKCkpYCB5b3Vyc2VsZiBqdXN0IGZpbmUuXG4gKlxuICogRm9yIGNvbnZlbmllbmNlLCB5b3UgY2FuIGFsc28gcGFzcyBhbiBhY3Rpb24gY3JlYXRvciBhcyB0aGUgZmlyc3QgYXJndW1lbnQsXG4gKiBhbmQgZ2V0IGEgZGlzcGF0Y2ggd3JhcHBlZCBmdW5jdGlvbiBpbiByZXR1cm4uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbnxPYmplY3R9IGFjdGlvbkNyZWF0b3JzIEFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIGFjdGlvblxuICogY3JlYXRvciBmdW5jdGlvbnMuIE9uZSBoYW5keSB3YXkgdG8gb2J0YWluIGl0IGlzIHRvIHVzZSBFUzYgYGltcG9ydCAqIGFzYFxuICogc3ludGF4LiBZb3UgbWF5IGFsc28gcGFzcyBhIHNpbmdsZSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBkaXNwYXRjaCBUaGUgYGRpc3BhdGNoYCBmdW5jdGlvbiBhdmFpbGFibGUgb24geW91ciBSZWR1eFxuICogc3RvcmUuXG4gKlxuICogQHJldHVybnMge0Z1bmN0aW9ufE9iamVjdH0gVGhlIG9iamVjdCBtaW1pY2tpbmcgdGhlIG9yaWdpbmFsIG9iamVjdCwgYnV0IHdpdGhcbiAqIGV2ZXJ5IGFjdGlvbiBjcmVhdG9yIHdyYXBwZWQgaW50byB0aGUgYGRpc3BhdGNoYCBjYWxsLiBJZiB5b3UgcGFzc2VkIGFcbiAqIGZ1bmN0aW9uIGFzIGBhY3Rpb25DcmVhdG9yc2AsIHRoZSByZXR1cm4gdmFsdWUgd2lsbCBhbHNvIGJlIGEgc2luZ2xlXG4gKiBmdW5jdGlvbi5cbiAqL1xuXG5cbmZ1bmN0aW9uIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpIHtcbiAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9ycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9ycyAhPT0gJ29iamVjdCcgfHwgYWN0aW9uQ3JlYXRvcnMgPT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJiaW5kQWN0aW9uQ3JlYXRvcnMgZXhwZWN0ZWQgYW4gb2JqZWN0IG9yIGEgZnVuY3Rpb24sIGluc3RlYWQgcmVjZWl2ZWQgXCIgKyAoYWN0aW9uQ3JlYXRvcnMgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgYWN0aW9uQ3JlYXRvcnMpICsgXCIuIFwiICsgXCJEaWQgeW91IHdyaXRlIFxcXCJpbXBvcnQgQWN0aW9uQ3JlYXRvcnMgZnJvbVxcXCIgaW5zdGVhZCBvZiBcXFwiaW1wb3J0ICogYXMgQWN0aW9uQ3JlYXRvcnMgZnJvbVxcXCI/XCIpO1xuICB9XG5cbiAgdmFyIGJvdW5kQWN0aW9uQ3JlYXRvcnMgPSB7fTtcblxuICBmb3IgKHZhciBrZXkgaW4gYWN0aW9uQ3JlYXRvcnMpIHtcbiAgICB2YXIgYWN0aW9uQ3JlYXRvciA9IGFjdGlvbkNyZWF0b3JzW2tleV07XG5cbiAgICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGJvdW5kQWN0aW9uQ3JlYXRvcnNba2V5XSA9IGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3IsIGRpc3BhdGNoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYm91bmRBY3Rpb25DcmVhdG9ycztcbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICBrZXlzLnB1c2guYXBwbHkoa2V5cywgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpKTtcbiAgfVxuXG4gIGlmIChlbnVtZXJhYmxlT25seSkga2V5cyA9IGtleXMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgfSk7XG4gIHJldHVybiBrZXlzO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkMih0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcblxuICAgIGlmIChpICUgMikge1xuICAgICAgb3duS2V5cyhzb3VyY2UsIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG93bktleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG4vKipcbiAqIENvbXBvc2VzIHNpbmdsZS1hcmd1bWVudCBmdW5jdGlvbnMgZnJvbSByaWdodCB0byBsZWZ0LiBUaGUgcmlnaHRtb3N0XG4gKiBmdW5jdGlvbiBjYW4gdGFrZSBtdWx0aXBsZSBhcmd1bWVudHMgYXMgaXQgcHJvdmlkZXMgdGhlIHNpZ25hdHVyZSBmb3JcbiAqIHRoZSByZXN1bHRpbmcgY29tcG9zaXRlIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7Li4uRnVuY3Rpb259IGZ1bmNzIFRoZSBmdW5jdGlvbnMgdG8gY29tcG9zZS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBmdW5jdGlvbiBvYnRhaW5lZCBieSBjb21wb3NpbmcgdGhlIGFyZ3VtZW50IGZ1bmN0aW9uc1xuICogZnJvbSByaWdodCB0byBsZWZ0LiBGb3IgZXhhbXBsZSwgY29tcG9zZShmLCBnLCBoKSBpcyBpZGVudGljYWwgdG8gZG9pbmdcbiAqICguLi5hcmdzKSA9PiBmKGcoaCguLi5hcmdzKSkpLlxuICovXG5mdW5jdGlvbiBjb21wb3NlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZnVuY3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgZnVuY3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAoZnVuY3MubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgIHJldHVybiBhcmc7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChmdW5jcy5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gZnVuY3NbMF07XG4gIH1cblxuICByZXR1cm4gZnVuY3MucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhKGIuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpKTtcbiAgICB9O1xuICB9KTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RvcmUgZW5oYW5jZXIgdGhhdCBhcHBsaWVzIG1pZGRsZXdhcmUgdG8gdGhlIGRpc3BhdGNoIG1ldGhvZFxuICogb2YgdGhlIFJlZHV4IHN0b3JlLiBUaGlzIGlzIGhhbmR5IGZvciBhIHZhcmlldHkgb2YgdGFza3MsIHN1Y2ggYXMgZXhwcmVzc2luZ1xuICogYXN5bmNocm9ub3VzIGFjdGlvbnMgaW4gYSBjb25jaXNlIG1hbm5lciwgb3IgbG9nZ2luZyBldmVyeSBhY3Rpb24gcGF5bG9hZC5cbiAqXG4gKiBTZWUgYHJlZHV4LXRodW5rYCBwYWNrYWdlIGFzIGFuIGV4YW1wbGUgb2YgdGhlIFJlZHV4IG1pZGRsZXdhcmUuXG4gKlxuICogQmVjYXVzZSBtaWRkbGV3YXJlIGlzIHBvdGVudGlhbGx5IGFzeW5jaHJvbm91cywgdGhpcyBzaG91bGQgYmUgdGhlIGZpcnN0XG4gKiBzdG9yZSBlbmhhbmNlciBpbiB0aGUgY29tcG9zaXRpb24gY2hhaW4uXG4gKlxuICogTm90ZSB0aGF0IGVhY2ggbWlkZGxld2FyZSB3aWxsIGJlIGdpdmVuIHRoZSBgZGlzcGF0Y2hgIGFuZCBgZ2V0U3RhdGVgIGZ1bmN0aW9uc1xuICogYXMgbmFtZWQgYXJndW1lbnRzLlxuICpcbiAqIEBwYXJhbSB7Li4uRnVuY3Rpb259IG1pZGRsZXdhcmVzIFRoZSBtaWRkbGV3YXJlIGNoYWluIHRvIGJlIGFwcGxpZWQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgc3RvcmUgZW5oYW5jZXIgYXBwbHlpbmcgdGhlIG1pZGRsZXdhcmUuXG4gKi9cblxuZnVuY3Rpb24gYXBwbHlNaWRkbGV3YXJlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgbWlkZGxld2FyZXMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgbWlkZGxld2FyZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGNyZWF0ZVN0b3JlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzdG9yZSA9IGNyZWF0ZVN0b3JlLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcblxuICAgICAgdmFyIF9kaXNwYXRjaCA9IGZ1bmN0aW9uIGRpc3BhdGNoKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Rpc3BhdGNoaW5nIHdoaWxlIGNvbnN0cnVjdGluZyB5b3VyIG1pZGRsZXdhcmUgaXMgbm90IGFsbG93ZWQuICcgKyAnT3RoZXIgbWlkZGxld2FyZSB3b3VsZCBub3QgYmUgYXBwbGllZCB0byB0aGlzIGRpc3BhdGNoLicpO1xuICAgICAgfTtcblxuICAgICAgdmFyIG1pZGRsZXdhcmVBUEkgPSB7XG4gICAgICAgIGdldFN0YXRlOiBzdG9yZS5nZXRTdGF0ZSxcbiAgICAgICAgZGlzcGF0Y2g6IGZ1bmN0aW9uIGRpc3BhdGNoKCkge1xuICAgICAgICAgIHJldHVybiBfZGlzcGF0Y2guYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdmFyIGNoYWluID0gbWlkZGxld2FyZXMubWFwKGZ1bmN0aW9uIChtaWRkbGV3YXJlKSB7XG4gICAgICAgIHJldHVybiBtaWRkbGV3YXJlKG1pZGRsZXdhcmVBUEkpO1xuICAgICAgfSk7XG4gICAgICBfZGlzcGF0Y2ggPSBjb21wb3NlLmFwcGx5KHZvaWQgMCwgY2hhaW4pKHN0b3JlLmRpc3BhdGNoKTtcbiAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkMih7fSwgc3RvcmUsIHtcbiAgICAgICAgZGlzcGF0Y2g6IF9kaXNwYXRjaFxuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcbn1cblxuLypcbiAqIFRoaXMgaXMgYSBkdW1teSBmdW5jdGlvbiB0byBjaGVjayBpZiB0aGUgZnVuY3Rpb24gbmFtZSBoYXMgYmVlbiBhbHRlcmVkIGJ5IG1pbmlmaWNhdGlvbi5cbiAqIElmIHRoZSBmdW5jdGlvbiBoYXMgYmVlbiBtaW5pZmllZCBhbmQgTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJywgd2FybiB0aGUgdXNlci5cbiAqL1xuXG5mdW5jdGlvbiBpc0NydXNoZWQoKSB7fVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgaXNDcnVzaGVkLm5hbWUgPT09ICdzdHJpbmcnICYmIGlzQ3J1c2hlZC5uYW1lICE9PSAnaXNDcnVzaGVkJykge1xuICB3YXJuaW5nKCdZb3UgYXJlIGN1cnJlbnRseSB1c2luZyBtaW5pZmllZCBjb2RlIG91dHNpZGUgb2YgTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiLiAnICsgJ1RoaXMgbWVhbnMgdGhhdCB5b3UgYXJlIHJ1bm5pbmcgYSBzbG93ZXIgZGV2ZWxvcG1lbnQgYnVpbGQgb2YgUmVkdXguICcgKyAnWW91IGNhbiB1c2UgbG9vc2UtZW52aWZ5IChodHRwczovL2dpdGh1Yi5jb20vemVydG9zaC9sb29zZS1lbnZpZnkpIGZvciBicm93c2VyaWZ5ICcgKyAnb3Igc2V0dGluZyBtb2RlIHRvIHByb2R1Y3Rpb24gaW4gd2VicGFjayAoaHR0cHM6Ly93ZWJwYWNrLmpzLm9yZy9jb25jZXB0cy9tb2RlLykgJyArICd0byBlbnN1cmUgeW91IGhhdmUgdGhlIGNvcnJlY3QgY29kZSBmb3IgeW91ciBwcm9kdWN0aW9uIGJ1aWxkLicpO1xufVxuXG5leHBvcnQgeyBBY3Rpb25UeXBlcyBhcyBfX0RPX05PVF9VU0VfX0FjdGlvblR5cGVzLCBhcHBseU1pZGRsZXdhcmUsIGJpbmRBY3Rpb25DcmVhdG9ycywgY29tYmluZVJlZHVjZXJzLCBjb21wb3NlLCBjcmVhdGVTdG9yZSB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBwb255ZmlsbCBmcm9tICcuL3BvbnlmaWxsLmpzJztcblxudmFyIHJvb3Q7XG5cbmlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IHNlbGY7XG59IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSB3aW5kb3c7XG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSBnbG9iYWw7XG59IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSBtb2R1bGU7XG59IGVsc2Uge1xuICByb290ID0gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbn1cblxudmFyIHJlc3VsdCA9IHBvbnlmaWxsKHJvb3QpO1xuZXhwb3J0IGRlZmF1bHQgcmVzdWx0O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ltYm9sT2JzZXJ2YWJsZVBvbnlmaWxsKHJvb3QpIHtcblx0dmFyIHJlc3VsdDtcblx0dmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5cdGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0aWYgKFN5bWJvbC5vYnNlcnZhYmxlKSB7XG5cdFx0XHRyZXN1bHQgPSBTeW1ib2wub2JzZXJ2YWJsZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzdWx0ID0gU3ltYm9sKCdvYnNlcnZhYmxlJyk7XG5cdFx0XHRTeW1ib2wub2JzZXJ2YWJsZSA9IHJlc3VsdDtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmVzdWx0ID0gJ0BAb2JzZXJ2YWJsZSc7XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWxNb2R1bGUpIHtcblx0aWYgKCFvcmlnaW5hbE1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHR2YXIgbW9kdWxlID0gT2JqZWN0LmNyZWF0ZShvcmlnaW5hbE1vZHVsZSk7XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiZXhwb3J0c1wiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJpbXBvcnQgeyB3cmFwcGVyIH0gZnJvbSAnLi4vc3RvcmUnXG5cbmZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoQXBwKVxuIiwiaW1wb3J0IHsgYWN0aW9uVHlwZXMgfSBmcm9tICcuL2FjdGlvbnMnXG5pbXBvcnQgeyBIWURSQVRFIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGNvdW50OiAwLFxuICBlcnJvcjogZmFsc2UsXG4gIGxhc3RVcGRhdGU6IDAsXG4gIGxpZ2h0OiBmYWxzZSxcbiAgcGxhY2Vob2xkZXJEYXRhOiBudWxsLFxufVxuXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgSFlEUkFURToge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH1cbiAgICB9XG5cbiAgICBjYXNlIGFjdGlvblR5cGVzLkZBSUxVUkU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLi4ueyBlcnJvcjogYWN0aW9uLmVycm9yIH0sXG4gICAgICB9XG5cbiAgICBjYXNlIGFjdGlvblR5cGVzLklOQ1JFTUVOVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAuLi57IGNvdW50OiBzdGF0ZS5jb3VudCArIDEgfSxcbiAgICAgIH1cblxuICAgIGNhc2UgYWN0aW9uVHlwZXMuREVDUkVNRU5UOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIC4uLnsgY291bnQ6IHN0YXRlLmNvdW50IC0gMSB9LFxuICAgICAgfVxuXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5SRVNFVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAuLi57IGNvdW50OiBpbml0aWFsU3RhdGUuY291bnQgfSxcbiAgICAgIH1cblxuICAgIGNhc2UgYWN0aW9uVHlwZXMuTE9BRF9EQVRBX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLi4ueyBwbGFjZWhvbGRlckRhdGE6IGFjdGlvbi5kYXRhIH0sXG4gICAgICB9XG5cbiAgICBjYXNlIGFjdGlvblR5cGVzLlRJQ0tfQ0xPQ0s6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLi4ueyBsYXN0VXBkYXRlOiBhY3Rpb24udHMsIGxpZ2h0OiAhIWFjdGlvbi5saWdodCB9LFxuICAgICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJcbiIsImltcG9ydCB7IGFsbCwgY2FsbCwgZGVsYXksIHB1dCwgdGFrZSwgdGFrZUxhdGVzdCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cydcbmltcG9ydCB7IGFjdGlvblR5cGVzLCBmYWlsdXJlLCBsb2FkRGF0YVN1Y2Nlc3MsIHRpY2tDbG9jayB9IGZyb20gJy4vYWN0aW9ucydcblxuZnVuY3Rpb24qIHJ1bkNsb2NrU2FnYSgpIHtcbiAgeWllbGQgdGFrZShhY3Rpb25UeXBlcy5TVEFSVF9DTE9DSylcbiAgd2hpbGUgKHRydWUpIHtcbiAgICB5aWVsZCBwdXQodGlja0Nsb2NrKGZhbHNlKSlcbiAgICB5aWVsZCBkZWxheSgxMDAwKVxuICB9XG59XG5cbmZ1bmN0aW9uKiBsb2FkRGF0YVNhZ2EoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0geWllbGQgZmV0Y2goJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2VycycpXG4gICAgY29uc3QgZGF0YSA9IHlpZWxkIHJlcy5qc29uKClcbiAgICB5aWVsZCBwdXQobG9hZERhdGFTdWNjZXNzKGRhdGEpKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICB5aWVsZCBwdXQoZmFpbHVyZShlcnIpKVxuICB9XG59XG5cbmZ1bmN0aW9uKiByb290U2FnYSgpIHtcbiAgeWllbGQgYWxsKFtcbiAgICBjYWxsKHJ1bkNsb2NrU2FnYSksXG4gICAgdGFrZUxhdGVzdChhY3Rpb25UeXBlcy5MT0FEX0RBVEEsIGxvYWREYXRhU2FnYSksXG4gIF0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RTYWdhXG4iLCJpbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSdcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXG5cbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuL3JlZHVjZXInXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi9zYWdhJ1xuXG5jb25zdCBiaW5kTWlkZGxld2FyZSA9IChtaWRkbGV3YXJlKSA9PiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gPSByZXF1aXJlKCdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nKVxuICAgIHJldHVybiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSlcbiAgfVxuICByZXR1cm4gYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpXG59XG5cbmV4cG9ydCBjb25zdCBtYWtlU3RvcmUgPSAoY29udGV4dCkgPT4ge1xuICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKClcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgYmluZE1pZGRsZXdhcmUoW3NhZ2FNaWRkbGV3YXJlXSkpXG5cbiAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpXG5cbiAgcmV0dXJuIHN0b3JlXG59XG5cbmV4cG9ydCBjb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihtYWtlU3RvcmUsIHsgZGVidWc6IHRydWUgfSlcbiIsIm1vZHVsZS5leHBvcnRzID0gZGxsXzUwMzBmMzg3ZDMyOGU0NDE1Nzg1OyJdLCJzb3VyY2VSb290IjoiIn0=