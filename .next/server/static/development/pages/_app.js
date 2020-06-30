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

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/store */ \"./redux/store.ts\");\n/* harmony import */ var _src_Styles_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/Styles/main.scss */ \"./src/Styles/main.scss\");\n/* harmony import */ var _src_Styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_Styles_main_scss__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/home/mohammad/Public/next-go/Next-app/pages/_app.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n // import with  from 'next-redux-saga';\n\n\n\n\nfunction App({\n  Component,\n  pageProps,\n  store\n}) {\n  return (// <Provider store={store}>\n    __jsx(Component, _extends({}, pageProps, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 5\n      }\n    })) // </Provider>\n\n  );\n}\n\nApp.getInitialProps = async ({\n  Component,\n  ctx\n}) => {\n  const pageProps = Component.getInitialProps ? await Component.getInitialProps({\n    ctx\n  }) : {};\n  return {\n    pageProps\n  };\n}; // class MyApp extends App {\n//   static async getInitialProps({ Component, ctx }) {\n//     const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};\n//     return { pageProps };\n//   }\n// }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default()(_redux_store__WEBPACK_IMPORTED_MODULE_2__[\"makeStore\"])(App));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD83MjE2Il0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInN0b3JlIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Iiwid2l0aFJlZHV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztDQUdBOztBQUNBO0FBQ2lDOztBQUVqQyxTQUFTQSxHQUFULENBQWE7QUFBRUMsV0FBRjtBQUFhQyxXQUFiO0FBQXlCQztBQUF6QixDQUFiLEVBQWtEO0FBQ2hELFNBQ0U7QUFDQSxVQUFDLFNBQUQsZUFBZUQsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRkYsQ0FHRTs7QUFIRjtBQUtEOztBQUVERixHQUFHLENBQUNJLGVBQUosR0FBc0IsT0FBTztBQUFDSCxXQUFEO0FBQVlJO0FBQVosQ0FBUCxLQUE0QjtBQUNoRCxRQUFNSCxTQUFTLEdBQUdELFNBQVMsQ0FBQ0csZUFBVixHQUE0QixNQUFNSCxTQUFTLENBQUNHLGVBQVYsQ0FBMEI7QUFBQ0M7QUFBRCxHQUExQixDQUFsQyxHQUFxRSxFQUF2RjtBQUNBLFNBQU87QUFBRUg7QUFBRixHQUFQO0FBQ0QsQ0FIRCxDLENBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDZUksd0hBQVMsQ0FBQ0gsc0RBQUQsQ0FBVCxDQUFpQkgsR0FBakIsQ0FBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gXCIuLi9yZWR1eC9zdG9yZVwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG4vLyBpbXBvcnQgd2l0aCAgZnJvbSAnbmV4dC1yZWR1eC1zYWdhJztcbmltcG9ydCB7bWFrZVN0b3JlIGFzIHN0b3JlfSBmcm9tICcuLi9yZWR1eC9zdG9yZSc7XG5pbXBvcnQgXCIuLi9zcmMvU3R5bGVzL21haW4uc2Nzc1wiO1xuXG5mdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyAsIHN0b3JlfTphbnkpIHtcbiAgcmV0dXJuIChcbiAgICAvLyA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgLy8gPC9Qcm92aWRlcj5cbiAgKTtcbn1cblxuQXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7Q29tcG9uZW50ICxjdHh9KSA9PiB7XG4gIGNvbnN0IHBhZ2VQcm9wcyA9IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMgPyBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKHtjdHh9KSA6IHt9O1xuICByZXR1cm4geyBwYWdlUHJvcHMgfTsgXG59XG5cbi8vIGNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcbi8vICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IENvbXBvbmVudCwgY3R4IH0pIHtcbi8vICAgICBjb25zdCBwYWdlUHJvcHMgPSBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzID8gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpIDoge307XG4vLyAgICAgcmV0dXJuIHsgcGFnZVByb3BzIH07XG4vLyAgIH1cbi8vIH1cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChzdG9yZSkoQXBwKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./redux/Auth/action.ts":
/*!******************************!*\
  !*** ./redux/Auth/action.ts ***!
  \******************************/
/*! exports provided: registerUser, registerSuccess, checkToken, login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"registerUser\", function() { return registerUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"registerSuccess\", function() { return registerSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkToken\", function() { return checkToken; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"login\", function() { return login; });\n/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ \"./redux/Auth/actionTypes.ts\");\n\nconst registerUser = payload => ({\n  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"REGISTERUSER\"],\n  payload\n});\nconst registerSuccess = () => ({\n  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"SUCCESSREGISTER\"]\n});\nconst checkToken = () => {\n  const tokenStorage = JSON.parse(window.localStorage.getItem('token'));\n  console.log(tokenStorage);\n  return {\n    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"GETTOKENSTORAGE\"],\n    tokenStorage\n  };\n};\nconst login = data => {\n  window.localStorage.setItem('token', JSON.stringify(data.token));\n  return {\n    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"LOGINUSER\"],\n    data\n  };\n}; // import { IAuthRegisterAction, IAuthloginAction, authActionTypes, IAuthcheckLoginAction, IAuthSkipAction } from './actionType';\n// // import axios from '../../../API/api';\n// import { AxiosResponse } from 'axios';\n// import { Dispatch, ActionCreator, AnyAction } from 'redux';\n// // import { browserHistory } from '../../Route/history';\n// import { ThunkAction } from 'redux-thunk';\n// import { IApplicationState } from '../reducers';\n// interface Props {\n// \temail: string,\n// \tpassword: string\n// }\n// interface IPost {\n// \temail: string,\n// \tpassword: string,\n// \treturnSecureToken: boolean\n// }\n// export const checkLogin: ActionCreator<ThunkAction<AnyAction, IApplicationState, undefined, IAuthcheckLoginAction>> = () => (dispatch: Dispatch, getState: () => IApplicationState) => {\n// \tconst auth = getState().auth;\n// \treturn dispatch({\n// \t\ttype: authActionTypes.CHECK_LOGIN,\n// \t\tpayload: auth\n// \t});\n// };\n// // export const checkLogin: ActionCreator<IAuthcheckLoginAction> = (getState) => {\n// // \tconst auth = getState().auth;\n// // \treturn {\n// // \t\ttype: authActionTypes.CHECK_LOGIN,\n// // \t\tpayload: auth\n// // \t}\n// // }\n// // const auth = getState().auth;\n// // dispatch({\n// // \tpayload: auth\n// // });\n// export const skipAuth: ActionCreator<IAuthSkipAction> = () => ({\n// \ttype: authActionTypes.SKIPAUTH,\n// \tpayload: {\n// \t\tlogged: true\n// \t}\n// })\n// // export const skipAuth: ActionCreator<IAuthSkipAction> = () => ({\n// // \ttype: authActionTypes.SKIPAUTH\n// // });\n// export const checkVerfify = (response: any, values: any) => (dispatch: any) => {\n// \tconsole.log(response, values);\n// \tif (response.additionalUserInfo.isNewUser) {\n// \t\treturn dispatch(registerAction(values));\n// \t} else {\n// \t\treturn dispatch(loginAction(values));\n// \t}\n// };\n// export const loginAction: ActionCreator<ThunkAction<Promise<AnyAction>, IApplicationState, undefined, IAuthloginAction>> = ({ email, password }: Props) => (dispatch: Dispatch, getState: () => IApplicationState) => {\n// \tdebugger;\n// \treturn axios\n// \t\t.post('/accounts:signInWithCustomToken?key=AIzaSyDa29GWAYmBAuPEE7gxgVepxYYr6JAyfMQ', {\n// \t\t\temail: email,\n// \t\t\tpassword: password,\n// \t\t\treturnSecureToken: true\n// \t\t})\n// \t\t.then((Response: AxiosResponse) => {\n// \t\t\tconst data = Response.data;\n// \t\t\t// browserHistory.push('/');\n// \t\t\tconsole.log(data);\n// \t\t\treturn dispatch({\n// \t\t\t\ttype: authActionTypes.AUTH_LOGIN,\n// \t\t\t\tpayload: {\n// \t\t\t\t\t...data,\n// \t\t\t\t\tlogged: true\n// \t\t\t\t}\n// \t\t\t});\n// \t\t});\n// };\n// export const registerAction: ActionCreator<ThunkAction<Promise<AnyAction>, IApplicationState, undefined, IAuthRegisterAction>> = ({ email, password }: Props) => (dispatch: Dispatch) => {\n// \tdebugger;\n// \treturn axios\n// \t\t.post<IPost>(\n// \t\t\t'/accounts:signUp?key=AIzaSyDa29GWAYmBAuPEE7gxgVepxYYr6JAyfMQ',\n// \t\t\t{\n// \t\t\t\tcredentials: 'same-origin'\n// \t\t\t},\n// \t\t\t{\n// \t\t\t\temail: email,\n// \t\t\t\tpassword: password,\n// \t\t\t\treturnSecureToken: true\n// \t\t\t}\n// \t\t)\n// \t\t.then((Response: AxiosResponse) => {\n// \t\t\t// /accounts:signUp?key=AIzaSyDa29GWAYmBAuPEE7gxgVepxYYr6JAyfMQ\n// \t\t\t///accounts:signInWithPassword?key=AIzaSyDa29GWAYmBAuPEE7gxgVepxYYr6JAyfMQ\n// \t\t\tconst data = Response.data;\n// \t\t\t// browserHistory.push('/');\n// \t\t\tconsole.log(data);\n// \t\t\treturn dispatch({\n// \t\t\t\ttype: authActionTypes.AUTH_REGISTER,\n// \t\t\t\tpayload: {\n// \t\t\t\t\t...data,\n// \t\t\t\t\tlogged: true\n// \t\t\t\t}\n// \t\t\t});\n// \t\t});\n// };//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9BdXRoL2FjdGlvbi50cz9jNzI1Il0sIm5hbWVzIjpbInJlZ2lzdGVyVXNlciIsInBheWxvYWQiLCJ0eXBlIiwiUkVHSVNURVJVU0VSIiwicmVnaXN0ZXJTdWNjZXNzIiwiU1VDQ0VTU1JFR0lTVEVSIiwiY2hlY2tUb2tlbiIsInRva2VuU3RvcmFnZSIsIkpTT04iLCJwYXJzZSIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwiR0VUVE9LRU5TVE9SQUdFIiwibG9naW4iLCJkYXRhIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInRva2VuIiwiTE9HSU5VU0VSIl0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1BLFlBQVksR0FBSUMsT0FBRCxLQUFjO0FBQ3pDQyxNQUFJLEVBQUVDLHlEQURtQztBQUV6Q0Y7QUFGeUMsQ0FBZCxDQUFyQjtBQUtBLE1BQU1HLGVBQWUsR0FBRyxPQUFPO0FBQ3JDRixNQUFJLEVBQUNHLDREQUFlQTtBQURpQixDQUFQLENBQXhCO0FBSUEsTUFBTUMsVUFBVSxHQUFHLE1BQU07QUFDL0IsUUFBTUMsWUFBWSxHQUFJQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsTUFBTSxDQUFDQyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixPQUE1QixDQUFYLENBQXRCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUCxZQUFaO0FBQ0EsU0FBTztBQUNOTCxRQUFJLEVBQUNhLDREQURDO0FBRU5SO0FBRk0sR0FBUDtBQUlBLENBUE07QUFTQSxNQUFNUyxLQUFLLEdBQUlDLElBQUQsSUFBVTtBQUM5QlAsUUFBTSxDQUFDQyxZQUFQLENBQW9CTyxPQUFwQixDQUE0QixPQUE1QixFQUFvQ1YsSUFBSSxDQUFDVyxTQUFMLENBQWVGLElBQUksQ0FBQ0csS0FBcEIsQ0FBcEM7QUFDQSxTQUFPO0FBQ05sQixRQUFJLEVBQUNtQixzREFEQztBQUVOSjtBQUZNLEdBQVA7QUFJQSxDQU5NLEMsQ0FnQlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3JlZHV4L0F1dGgvYWN0aW9uLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IFJFR0lTVEVSVVNFUiAsIFNVQ0NFU1NSRUdJU1RFUiAsTE9HSU5VU0VSICwgR0VUVE9LRU5TVE9SQUdFfSBmcm9tICcuL2FjdGlvblR5cGVzJztcclxuXHJcbmV4cG9ydCBjb25zdCByZWdpc3RlclVzZXIgPSAocGF5bG9hZCkgPT4gKHtcclxuXHR0eXBlOiBSRUdJU1RFUlVTRVIsXHJcblx0cGF5bG9hZFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyU3VjY2VzcyA9ICgpID0+ICh7XHJcblx0dHlwZTpTVUNDRVNTUkVHSVNURVIsXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgY2hlY2tUb2tlbiA9ICgpID0+IHtcclxuXHRjb25zdCB0b2tlblN0b3JhZ2UgID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykpO1xyXG5cdGNvbnNvbGUubG9nKHRva2VuU3RvcmFnZSlcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTpHRVRUT0tFTlNUT1JBR0UsXHJcblx0XHR0b2tlblN0b3JhZ2VcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpbiA9IChkYXRhKSA9PiB7XHJcblx0d2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsSlNPTi5zdHJpbmdpZnkoZGF0YS50b2tlbikpXHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6TE9HSU5VU0VSLFxyXG5cdFx0ZGF0YVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBpbXBvcnQgeyBJQXV0aFJlZ2lzdGVyQWN0aW9uLCBJQXV0aGxvZ2luQWN0aW9uLCBhdXRoQWN0aW9uVHlwZXMsIElBdXRoY2hlY2tMb2dpbkFjdGlvbiwgSUF1dGhTa2lwQWN0aW9uIH0gZnJvbSAnLi9hY3Rpb25UeXBlJztcclxuLy8gLy8gaW1wb3J0IGF4aW9zIGZyb20gJy4uLy4uLy4uL0FQSS9hcGknO1xyXG4vLyBpbXBvcnQgeyBBeGlvc1Jlc3BvbnNlIH0gZnJvbSAnYXhpb3MnO1xyXG4vLyBpbXBvcnQgeyBEaXNwYXRjaCwgQWN0aW9uQ3JlYXRvciwgQW55QWN0aW9uIH0gZnJvbSAncmVkdXgnO1xyXG4vLyAvLyBpbXBvcnQgeyBicm93c2VySGlzdG9yeSB9IGZyb20gJy4uLy4uL1JvdXRlL2hpc3RvcnknO1xyXG4vLyBpbXBvcnQgeyBUaHVua0FjdGlvbiB9IGZyb20gJ3JlZHV4LXRodW5rJztcclxuLy8gaW1wb3J0IHsgSUFwcGxpY2F0aW9uU3RhdGUgfSBmcm9tICcuLi9yZWR1Y2Vycyc7XHJcblxyXG4vLyBpbnRlcmZhY2UgUHJvcHMge1xyXG4vLyBcdGVtYWlsOiBzdHJpbmcsXHJcbi8vIFx0cGFzc3dvcmQ6IHN0cmluZ1xyXG4vLyB9XHJcbi8vIGludGVyZmFjZSBJUG9zdCB7XHJcbi8vIFx0ZW1haWw6IHN0cmluZyxcclxuLy8gXHRwYXNzd29yZDogc3RyaW5nLFxyXG4vLyBcdHJldHVyblNlY3VyZVRva2VuOiBib29sZWFuXHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBjb25zdCBjaGVja0xvZ2luOiBBY3Rpb25DcmVhdG9yPFRodW5rQWN0aW9uPEFueUFjdGlvbiwgSUFwcGxpY2F0aW9uU3RhdGUsIHVuZGVmaW5lZCwgSUF1dGhjaGVja0xvZ2luQWN0aW9uPj4gPSAoKSA9PiAoZGlzcGF0Y2g6IERpc3BhdGNoLCBnZXRTdGF0ZTogKCkgPT4gSUFwcGxpY2F0aW9uU3RhdGUpID0+IHtcclxuLy8gXHRjb25zdCBhdXRoID0gZ2V0U3RhdGUoKS5hdXRoO1xyXG4vLyBcdHJldHVybiBkaXNwYXRjaCh7XHJcbi8vIFx0XHR0eXBlOiBhdXRoQWN0aW9uVHlwZXMuQ0hFQ0tfTE9HSU4sXHJcbi8vIFx0XHRwYXlsb2FkOiBhdXRoXHJcbi8vIFx0fSk7XHJcbi8vIH07XHJcbi8vIC8vIGV4cG9ydCBjb25zdCBjaGVja0xvZ2luOiBBY3Rpb25DcmVhdG9yPElBdXRoY2hlY2tMb2dpbkFjdGlvbj4gPSAoZ2V0U3RhdGUpID0+IHtcclxuLy8gLy8gXHRjb25zdCBhdXRoID0gZ2V0U3RhdGUoKS5hdXRoO1xyXG4vLyAvLyBcdHJldHVybiB7XHJcbi8vIC8vIFx0XHR0eXBlOiBhdXRoQWN0aW9uVHlwZXMuQ0hFQ0tfTE9HSU4sXHJcbi8vIC8vIFx0XHRwYXlsb2FkOiBhdXRoXHJcbi8vIC8vIFx0fVxyXG4vLyAvLyB9XHJcbi8vIC8vIGNvbnN0IGF1dGggPSBnZXRTdGF0ZSgpLmF1dGg7XHJcbi8vIC8vIGRpc3BhdGNoKHtcclxuXHJcbi8vIC8vIFx0cGF5bG9hZDogYXV0aFxyXG4vLyAvLyB9KTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBza2lwQXV0aDogQWN0aW9uQ3JlYXRvcjxJQXV0aFNraXBBY3Rpb24+ID0gKCkgPT4gKHtcclxuLy8gXHR0eXBlOiBhdXRoQWN0aW9uVHlwZXMuU0tJUEFVVEgsXHJcbi8vIFx0cGF5bG9hZDoge1xyXG4vLyBcdFx0bG9nZ2VkOiB0cnVlXHJcbi8vIFx0fVxyXG4vLyB9KVxyXG5cclxuLy8gLy8gZXhwb3J0IGNvbnN0IHNraXBBdXRoOiBBY3Rpb25DcmVhdG9yPElBdXRoU2tpcEFjdGlvbj4gPSAoKSA9PiAoe1xyXG4vLyAvLyBcdHR5cGU6IGF1dGhBY3Rpb25UeXBlcy5TS0lQQVVUSFxyXG4vLyAvLyB9KTtcclxuLy8gZXhwb3J0IGNvbnN0IGNoZWNrVmVyZmlmeSA9IChyZXNwb25zZTogYW55LCB2YWx1ZXM6IGFueSkgPT4gKGRpc3BhdGNoOiBhbnkpID0+IHtcclxuLy8gXHRjb25zb2xlLmxvZyhyZXNwb25zZSwgdmFsdWVzKTtcclxuXHJcbi8vIFx0aWYgKHJlc3BvbnNlLmFkZGl0aW9uYWxVc2VySW5mby5pc05ld1VzZXIpIHtcclxuLy8gXHRcdHJldHVybiBkaXNwYXRjaChyZWdpc3RlckFjdGlvbih2YWx1ZXMpKTtcclxuLy8gXHR9IGVsc2Uge1xyXG4vLyBcdFx0cmV0dXJuIGRpc3BhdGNoKGxvZ2luQWN0aW9uKHZhbHVlcykpO1xyXG4vLyBcdH1cclxuLy8gfTtcclxuXHJcblxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGxvZ2luQWN0aW9uOiBBY3Rpb25DcmVhdG9yPFRodW5rQWN0aW9uPFByb21pc2U8QW55QWN0aW9uPiwgSUFwcGxpY2F0aW9uU3RhdGUsIHVuZGVmaW5lZCwgSUF1dGhsb2dpbkFjdGlvbj4+ID0gKHsgZW1haWwsIHBhc3N3b3JkIH06IFByb3BzKSA9PiAoZGlzcGF0Y2g6IERpc3BhdGNoLCBnZXRTdGF0ZTogKCkgPT4gSUFwcGxpY2F0aW9uU3RhdGUpID0+IHtcclxuLy8gXHRkZWJ1Z2dlcjtcclxuXHJcbi8vIFx0cmV0dXJuIGF4aW9zXHJcbi8vIFx0XHQucG9zdCgnL2FjY291bnRzOnNpZ25JbldpdGhDdXN0b21Ub2tlbj9rZXk9QUl6YVN5RGEyOUdXQVltQkF1UEVFN2d4Z1ZlcHhZWXI2SkF5Zk1RJywge1xyXG4vLyBcdFx0XHRlbWFpbDogZW1haWwsXHJcbi8vIFx0XHRcdHBhc3N3b3JkOiBwYXNzd29yZCxcclxuLy8gXHRcdFx0cmV0dXJuU2VjdXJlVG9rZW46IHRydWVcclxuLy8gXHRcdH0pXHJcbi8vIFx0XHQudGhlbigoUmVzcG9uc2U6IEF4aW9zUmVzcG9uc2UpID0+IHtcclxuLy8gXHRcdFx0Y29uc3QgZGF0YSA9IFJlc3BvbnNlLmRhdGE7XHJcbi8vIFx0XHRcdC8vIGJyb3dzZXJIaXN0b3J5LnB1c2goJy8nKTtcclxuLy8gXHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcbi8vIFx0XHRcdHJldHVybiBkaXNwYXRjaCh7XHJcbi8vIFx0XHRcdFx0dHlwZTogYXV0aEFjdGlvblR5cGVzLkFVVEhfTE9HSU4sXHJcbi8vIFx0XHRcdFx0cGF5bG9hZDoge1xyXG4vLyBcdFx0XHRcdFx0Li4uZGF0YSxcclxuLy8gXHRcdFx0XHRcdGxvZ2dlZDogdHJ1ZVxyXG4vLyBcdFx0XHRcdH1cclxuLy8gXHRcdFx0fSk7XHJcbi8vIFx0XHR9KTtcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCByZWdpc3RlckFjdGlvbjogQWN0aW9uQ3JlYXRvcjxUaHVua0FjdGlvbjxQcm9taXNlPEFueUFjdGlvbj4sIElBcHBsaWNhdGlvblN0YXRlLCB1bmRlZmluZWQsIElBdXRoUmVnaXN0ZXJBY3Rpb24+PiA9ICh7IGVtYWlsLCBwYXNzd29yZCB9OiBQcm9wcykgPT4gKGRpc3BhdGNoOiBEaXNwYXRjaCkgPT4ge1xyXG4vLyBcdGRlYnVnZ2VyO1xyXG4vLyBcdHJldHVybiBheGlvc1xyXG4vLyBcdFx0LnBvc3Q8SVBvc3Q+KFxyXG4vLyBcdFx0XHQnL2FjY291bnRzOnNpZ25VcD9rZXk9QUl6YVN5RGEyOUdXQVltQkF1UEVFN2d4Z1ZlcHhZWXI2SkF5Zk1RJyxcclxuLy8gXHRcdFx0e1xyXG4vLyBcdFx0XHRcdGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXHJcbi8vIFx0XHRcdH0sXHJcbi8vIFx0XHRcdHtcclxuLy8gXHRcdFx0XHRlbWFpbDogZW1haWwsXHJcbi8vIFx0XHRcdFx0cGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4vLyBcdFx0XHRcdHJldHVyblNlY3VyZVRva2VuOiB0cnVlXHJcbi8vIFx0XHRcdH1cclxuLy8gXHRcdClcclxuLy8gXHRcdC50aGVuKChSZXNwb25zZTogQXhpb3NSZXNwb25zZSkgPT4ge1xyXG4vLyBcdFx0XHQvLyAvYWNjb3VudHM6c2lnblVwP2tleT1BSXphU3lEYTI5R1dBWW1CQXVQRUU3Z3hnVmVweFlZcjZKQXlmTVFcclxuLy8gXHRcdFx0Ly8vYWNjb3VudHM6c2lnbkluV2l0aFBhc3N3b3JkP2tleT1BSXphU3lEYTI5R1dBWW1CQXVQRUU3Z3hnVmVweFlZcjZKQXlmTVFcclxuLy8gXHRcdFx0Y29uc3QgZGF0YSA9IFJlc3BvbnNlLmRhdGE7XHJcbi8vIFx0XHRcdC8vIGJyb3dzZXJIaXN0b3J5LnB1c2goJy8nKTtcclxuLy8gXHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblxyXG5cclxuLy8gXHRcdFx0cmV0dXJuIGRpc3BhdGNoKHtcclxuLy8gXHRcdFx0XHR0eXBlOiBhdXRoQWN0aW9uVHlwZXMuQVVUSF9SRUdJU1RFUixcclxuLy8gXHRcdFx0XHRwYXlsb2FkOiB7XHJcbi8vIFx0XHRcdFx0XHQuLi5kYXRhLFxyXG4vLyBcdFx0XHRcdFx0bG9nZ2VkOiB0cnVlXHJcbi8vIFx0XHRcdFx0fVxyXG4vLyBcdFx0XHR9KTtcclxuLy8gXHRcdH0pO1xyXG4vLyB9O1xyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/Auth/action.ts\n");

/***/ }),

/***/ "./redux/Auth/actionTypes.ts":
/*!***********************************!*\
  !*** ./redux/Auth/actionTypes.ts ***!
  \***********************************/
/*! exports provided: REGISTERUSER, SUCCESSREGISTER, LOGINUSER, GETTOKENSTORAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REGISTERUSER\", function() { return REGISTERUSER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SUCCESSREGISTER\", function() { return SUCCESSREGISTER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOGINUSER\", function() { return LOGINUSER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GETTOKENSTORAGE\", function() { return GETTOKENSTORAGE; });\nconst REGISTERUSER = 'REGISTERUSER';\nconst SUCCESSREGISTER = 'SUCCESSREGISTER';\nconst LOGINUSER = 'LOGINUSER';\nconst GETTOKENSTORAGE = 'GETTOKENSTORAGE';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9BdXRoL2FjdGlvblR5cGVzLnRzPzMyNDkiXSwibmFtZXMiOlsiUkVHSVNURVJVU0VSIiwiU1VDQ0VTU1JFR0lTVEVSIiwiTE9HSU5VU0VSIiwiR0VUVE9LRU5TVE9SQUdFIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTUEsWUFBWSxHQUFHLGNBQXJCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLE1BQU1DLFNBQVMsR0FBRyxXQUFsQjtBQUNBLE1BQU1DLGVBQWUsR0FBRyxpQkFBeEIiLCJmaWxlIjoiLi9yZWR1eC9BdXRoL2FjdGlvblR5cGVzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFJFR0lTVEVSVVNFUiA9ICdSRUdJU1RFUlVTRVInO1xuZXhwb3J0IGNvbnN0IFNVQ0NFU1NSRUdJU1RFUiA9ICdTVUNDRVNTUkVHSVNURVInO1xuZXhwb3J0IGNvbnN0IExPR0lOVVNFUiA9ICdMT0dJTlVTRVInO1xuZXhwb3J0IGNvbnN0IEdFVFRPS0VOU1RPUkFHRSA9ICdHRVRUT0tFTlNUT1JBR0UnOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/Auth/actionTypes.ts\n");

/***/ }),

/***/ "./redux/Auth/reducer.ts":
/*!*******************************!*\
  !*** ./redux/Auth/reducer.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ \"./redux/Auth/actionTypes.ts\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst initialState = {\n  message: '',\n  name: '',\n  email: '',\n  phone: '',\n  token: ''\n};\n\nconst AuthReducer = (state = initialState, action) => {\n  switch (action.type) {\n    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"SUCCESSREGISTER\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        message: 'successfull'\n      });\n\n    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"LOGINUSER\"]:\n      const {\n        user,\n        token\n      } = action.data;\n      return _objectSpread(_objectSpread({}, state), {}, {\n        name: user.name,\n        email: user.email,\n        phone: user.phone,\n        token: token\n      });\n\n    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"GETTOKENSTORAGE\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        token: action.tokenStorage\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9BdXRoL3JlZHVjZXIudHM/ZmJkMSJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtZXNzYWdlIiwibmFtZSIsImVtYWlsIiwicGhvbmUiLCJ0b2tlbiIsIkF1dGhSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiU1VDQ0VTU1JFR0lTVEVSIiwiTE9HSU5VU0VSIiwidXNlciIsImRhdGEiLCJHRVRUT0tFTlNUT1JBR0UiLCJ0b2tlblN0b3JhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFVQSxNQUFNQSxZQUF5QixHQUFHO0FBQzlCQyxTQUFPLEVBQUcsRUFEb0I7QUFFOUJDLE1BQUksRUFBQyxFQUZ5QjtBQUc5QkMsT0FBSyxFQUFDLEVBSHdCO0FBSTlCQyxPQUFLLEVBQUMsRUFKd0I7QUFLOUJDLE9BQUssRUFBQztBQUx3QixDQUFsQzs7QUFRQSxNQUFNQyxXQUFXLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHUCxZQUFULEVBQXVCUSxNQUF2QixLQUFrQztBQUNsRCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDSSxTQUFLQyw0REFBTDtBQUNJLDZDQUNPSCxLQURQO0FBRUlOLGVBQU8sRUFBQztBQUZaOztBQUlKLFNBQUtVLHNEQUFMO0FBQ0EsWUFBTTtBQUFFQyxZQUFGO0FBQVNQO0FBQVQsVUFBa0JHLE1BQU0sQ0FBQ0ssSUFBL0I7QUFDQSw2Q0FDT04sS0FEUDtBQUVJTCxZQUFJLEVBQUNVLElBQUksQ0FBQ1YsSUFGZDtBQUdJQyxhQUFLLEVBQUNTLElBQUksQ0FBQ1QsS0FIZjtBQUlJQyxhQUFLLEVBQUNRLElBQUksQ0FBQ1IsS0FKZjtBQUtJQyxhQUFLLEVBQUdBO0FBTFo7O0FBT0EsU0FBS1MsNERBQUw7QUFDSSw2Q0FDT1AsS0FEUDtBQUVJRixhQUFLLEVBQUNHLE1BQU0sQ0FBQ087QUFGakI7O0FBSUo7QUFDSSxhQUFPUixLQUFQO0FBckJSO0FBdUJILENBeEJEOztBQTBCZUQsMEVBQWYiLCJmaWxlIjoiLi9yZWR1eC9BdXRoL3JlZHVjZXIudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSRUdJU1RFUlVTRVIgLCBTVUNDRVNTUkVHSVNURVIgLExPR0lOVVNFUiwgR0VUVE9LRU5TVE9SQUdFfSBmcm9tICcuL2FjdGlvblR5cGVzJztcclxuXHJcbmludGVyZmFjZSBJQXV0aFN0YXRlIHtcclxuICAgIG1lc3NhZ2U/OnN0cmluZyxcclxuICAgIG5hbWU6c3RyaW5nLFxyXG4gICAgZW1haWw6c3RyaW5nLFxyXG4gICAgcGhvbmU6c3RyaW5nLFxyXG4gICAgdG9rZW46c3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA6IElBdXRoU3RhdGUgPSB7XHJcbiAgICBtZXNzYWdlIDogJycsXHJcbiAgICBuYW1lOicnLFxyXG4gICAgZW1haWw6JycsXHJcbiAgICBwaG9uZTonJyxcclxuICAgIHRva2VuOicnXHJcbn1cclxuXHJcbmNvbnN0IEF1dGhSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgU1VDQ0VTU1JFR0lTVEVSOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOidzdWNjZXNzZnVsbCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9HSU5VU0VSIDogXHJcbiAgICAgICAgY29uc3QgeyB1c2VyICwgdG9rZW59ID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIG5hbWU6dXNlci5uYW1lLFxyXG4gICAgICAgICAgICBlbWFpbDp1c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICBwaG9uZTp1c2VyLnBob25lLFxyXG4gICAgICAgICAgICB0b2tlbiA6IHRva2VuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgR0VUVE9LRU5TVE9SQUdFOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB0b2tlbjphY3Rpb24udG9rZW5TdG9yYWdlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0IDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlIDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aFJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/Auth/reducer.ts\n");

/***/ }),

/***/ "./redux/reducers.ts":
/*!***************************!*\
  !*** ./redux/reducers.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Auth/reducer */ \"./redux/Auth/reducer.ts\");\n\n\nconst rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  auth: _Auth_reducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy50cz9jY2VkIl0sIm5hbWVzIjpbInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiYXV0aCIsImF1dGhSZWR1Y2VyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxNQUFNQSxXQUFXLEdBQUdDLDZEQUFlLENBQUM7QUFDaENDLE1BQUksRUFBQ0MscURBQVdBO0FBRGdCLENBQUQsQ0FBbkM7QUFJZUgsMEVBQWYiLCJmaWxlIjoiLi9yZWR1eC9yZWR1Y2Vycy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IGF1dGhSZWR1Y2VyIGZyb20gJy4vQXV0aC9yZWR1Y2VyJztcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgIGF1dGg6YXV0aFJlZHVjZXJcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/reducers.ts\n");

/***/ }),

/***/ "./redux/saga/auth.ts":
/*!****************************!*\
  !*** ./redux/saga/auth.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return registerSaga; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Auth_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Auth/action */ \"./redux/Auth/action.ts\");\n/* harmony import */ var _Auth_actionTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Auth/actionTypes */ \"./redux/Auth/actionTypes.ts\");\n\n\n\n\n\nfunction registerCall(data) {\n  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('http://localhost:8080/user-api/user', {\n    name: data.name,\n    email: data.email,\n    password: data.password,\n    phone: data.phonenumber\n  }).then(res => {\n    return res;\n  }).catch(err => console.log(err)); // console.log(data)\n}\n\nfunction* registerUser(payload) {\n  let data = payload;\n\n  try {\n    let response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(registerCall, payload.payload);\n    console.log(response);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])(Object(_Auth_action__WEBPACK_IMPORTED_MODULE_2__[\"registerSuccess\"])());\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])(Object(_Auth_action__WEBPACK_IMPORTED_MODULE_2__[\"login\"])(response.data)); // response.data.token  ? Router.push('/') : null   \n  } catch {}\n}\n\nfunction* registerSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"all\"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_Auth_actionTypes__WEBPACK_IMPORTED_MODULE_3__[\"REGISTERUSER\"], registerUser)]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9zYWdhL2F1dGgudHM/Yjg3MyJdLCJuYW1lcyI6WyJyZWdpc3RlckNhbGwiLCJkYXRhIiwiYXhpb3MiLCJwb3N0IiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJwaG9uZSIsInBob25lbnVtYmVyIiwidGhlbiIsInJlcyIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInJlZ2lzdGVyVXNlciIsInBheWxvYWQiLCJyZXNwb25zZSIsImNhbGwiLCJwdXQiLCJyZWdpc3RlclN1Y2Nlc3MiLCJsb2dpbiIsInJlZ2lzdGVyU2FnYSIsImFsbCIsInRha2VMYXRlc3QiLCJSRUdJU1RFUlVTRVIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxTQUFTQSxZQUFULENBQXNCQyxJQUF0QixFQUE0QjtBQUN6QixTQUFPQyw0Q0FBSyxDQUFDQyxJQUFOLENBQVcscUNBQVgsRUFBaUQ7QUFDbkRDLFFBQUksRUFBQ0gsSUFBSSxDQUFDRyxJQUR5QztBQUVuREMsU0FBSyxFQUFDSixJQUFJLENBQUNJLEtBRndDO0FBR25EQyxZQUFRLEVBQUNMLElBQUksQ0FBQ0ssUUFIcUM7QUFJbkRDLFNBQUssRUFBQ04sSUFBSSxDQUFDTztBQUp3QyxHQUFqRCxFQU1MQyxJQU5LLENBTUNDLEdBQUQsSUFBTztBQUNULFdBQU9BLEdBQVA7QUFDSCxHQVJLLEVBU0xDLEtBVEssQ0FTQ0MsR0FBRyxJQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQVRSLENBQVAsQ0FEeUIsQ0FXeEI7QUFDSDs7QUFDRCxVQUFVRyxZQUFWLENBQXVCQyxPQUF2QixFQUFnQztBQUM1QixNQUFJZixJQUFJLEdBQUdlLE9BQVg7O0FBQ0EsTUFBSTtBQUNBLFFBQUlDLFFBQVEsR0FBRyxNQUFNQywrREFBSSxDQUFDbEIsWUFBRCxFQUFlZ0IsT0FBTyxDQUFDQSxPQUF2QixDQUF6QjtBQUNBSCxXQUFPLENBQUNDLEdBQVIsQ0FBWUcsUUFBWjtBQUNBLFVBQU1FLDhEQUFHLENBQUNDLG9FQUFlLEVBQWhCLENBQVQ7QUFDQSxVQUFNRCw4REFBRyxDQUFDRSwwREFBSyxDQUFDSixRQUFRLENBQUNoQixJQUFWLENBQU4sQ0FBVCxDQUpBLENBS0E7QUFDSCxHQU5ELENBTUUsTUFBSyxDQUVOO0FBQ0o7O0FBR2MsVUFBVXFCLFlBQVYsR0FBeUI7QUFDcEMsUUFBTUMsOERBQUcsQ0FBQyxDQUNOQyxxRUFBVSxDQUFDQyw4REFBRCxFQUFlVixZQUFmLENBREosQ0FBRCxDQUFUO0FBR0giLCJmaWxlIjoiLi9yZWR1eC9zYWdhL2F1dGgudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGwsIHRha2VMYXRlc3QsIGNhbGwsIHB1dCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHJlZ2lzdGVyU3VjY2VzcyAsIGxvZ2luIH0gZnJvbSAnLi4vQXV0aC9hY3Rpb24nO1xyXG5pbXBvcnQgeyBSRUdJU1RFUlVTRVIgfSBmcm9tICcuLi9BdXRoL2FjdGlvblR5cGVzJztcclxuXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyQ2FsbChkYXRhKSB7XHJcbiAgIHJldHVybiBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjgwODAvdXNlci1hcGkvdXNlcicse1xyXG4gICAgICAgIG5hbWU6ZGF0YS5uYW1lLFxyXG4gICAgICAgIGVtYWlsOmRhdGEuZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmQ6ZGF0YS5wYXNzd29yZCxcclxuICAgICAgICBwaG9uZTpkYXRhLnBob25lbnVtYmVyXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHJlcyk9PntcclxuICAgICAgICByZXR1cm4gcmVzXHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG4gICAgLy8gY29uc29sZS5sb2coZGF0YSlcclxufVxyXG5mdW5jdGlvbiogcmVnaXN0ZXJVc2VyKHBheWxvYWQpIHtcclxuICAgIGxldCBkYXRhID0gcGF5bG9hZDtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0geWllbGQgY2FsbChyZWdpc3RlckNhbGwsIHBheWxvYWQucGF5bG9hZClcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICB5aWVsZCBwdXQocmVnaXN0ZXJTdWNjZXNzKCkpO1xyXG4gICAgICAgIHlpZWxkIHB1dChsb2dpbihyZXNwb25zZS5kYXRhKSk7XHJcbiAgICAgICAgLy8gcmVzcG9uc2UuZGF0YS50b2tlbiAgPyBSb3V0ZXIucHVzaCgnLycpIDogbnVsbCAgIFxyXG4gICAgfSBjYXRjaHtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcmVnaXN0ZXJTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICB0YWtlTGF0ZXN0KFJFR0lTVEVSVVNFUiwgcmVnaXN0ZXJVc2VyKVxyXG4gICAgXSlcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/saga/auth.ts\n");

/***/ }),

/***/ "./redux/saga/index.ts":
/*!*****************************!*\
  !*** ./redux/saga/index.ts ***!
  \*****************************/
/*! exports provided: rootSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rootSaga\", function() { return rootSaga; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ \"./redux/saga/auth.ts\");\n\n\nfunction* rootSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"all\"])([Object(_auth__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9zYWdhL2luZGV4LnRzPzI1NDkiXSwibmFtZXMiOlsicm9vdFNhZ2EiLCJhbGwiLCJyZWdpc3RlclNhZ2EiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRU8sVUFBVUEsUUFBVixHQUFxQjtBQUN4QixRQUFNQyw4REFBRyxDQUFDLENBQ05DLHFEQUFZLEVBRE4sQ0FBRCxDQUFUO0FBR0giLCJmaWxlIjoiLi9yZWR1eC9zYWdhL2luZGV4LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgcmVnaXN0ZXJTYWdhIGZyb20gXCIuL2F1dGhcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIHJlZ2lzdGVyU2FnYSgpLFxyXG4gICAgXSk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/saga/index.ts\n");

/***/ }),

/***/ "./redux/store.ts":
/*!************************!*\
  !*** ./redux/store.ts ***!
  \************************/
/*! exports provided: makeStore, wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeStore\", function() { return makeStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wrapper\", function() { return wrapper; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ \"./redux/reducers.ts\");\n/* harmony import */ var _saga_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./saga/index */ \"./redux/saga/index.ts\");\n\n\n\n\n\n\nconst bindMiddleware = middleware => {\n  if (true) {\n    const {\n      composeWithDevTools\n    } = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n\n    return composeWithDevTools(Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(...middleware));\n  }\n\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(...middleware);\n};\n\nconst makeStore = context => {\n  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();\n  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_3__[\"default\"], bindMiddleware([sagaMiddleware]));\n  store.sagaTask = sagaMiddleware.run(_saga_index__WEBPACK_IMPORTED_MODULE_4__[\"rootSaga\"]);\n  return store;\n};\nconst wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__[\"createWrapper\"])(makeStore, {\n  debug: true\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9zdG9yZS50cz84ODQ3Il0sIm5hbWVzIjpbImJpbmRNaWRkbGV3YXJlIiwibWlkZGxld2FyZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJyZXF1aXJlIiwiYXBwbHlNaWRkbGV3YXJlIiwibWFrZVN0b3JlIiwiY29udGV4dCIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwicm9vdFJlZHVjZXIiLCJzYWdhVGFzayIsInJ1biIsInJvb3RTYWdhIiwid3JhcHBlciIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsTUFBTUEsY0FBYyxHQUFJQyxVQUFELElBQWdCO0FBQ3JDLFlBQTJDO0FBQ3pDLFVBQU07QUFBRUM7QUFBRixRQUEwQkMsbUJBQU8sQ0FBQywwREFBRCxDQUF2Qzs7QUFDQSxXQUFPRCxtQkFBbUIsQ0FBQ0UsNkRBQWUsQ0FBQyxHQUFHSCxVQUFKLENBQWhCLENBQTFCO0FBQ0Q7O0FBQ0QsU0FBT0csNkRBQWUsQ0FBQyxHQUFHSCxVQUFKLENBQXRCO0FBQ0QsQ0FORDs7QUFRTyxNQUFNSSxTQUFTLEdBQUlDLE9BQUQsSUFBYTtBQUNwQyxRQUFNQyxjQUFjLEdBQUdDLGlEQUFvQixFQUEzQztBQUNBLFFBQU1DLEtBQUssR0FBR0MseURBQVcsQ0FBQ0MsaURBQUQsRUFBY1gsY0FBYyxDQUFDLENBQUNPLGNBQUQsQ0FBRCxDQUE1QixDQUF6QjtBQUVBRSxPQUFLLENBQUNHLFFBQU4sR0FBaUJMLGNBQWMsQ0FBQ00sR0FBZixDQUFtQkMsb0RBQW5CLENBQWpCO0FBRUEsU0FBT0wsS0FBUDtBQUNELENBUE07QUFTQSxNQUFNTSxPQUFPLEdBQUdDLHdFQUFhLENBQUNYLFNBQUQsRUFBWTtBQUFFWSxPQUFLLEVBQUU7QUFBVCxDQUFaLENBQTdCIiwiZmlsZSI6Ii4vcmVkdXgvc3RvcmUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJ1xyXG5pbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xyXG5cclxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMnXHJcbmltcG9ydCB7IHJvb3RTYWdhIH0gZnJvbSAnLi9zYWdhL2luZGV4J1xyXG5cclxuY29uc3QgYmluZE1pZGRsZXdhcmUgPSAobWlkZGxld2FyZSkgPT4ge1xyXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICBjb25zdCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSA9IHJlcXVpcmUoJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbicpXHJcbiAgICByZXR1cm4gY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSkpXHJcbiAgfVxyXG4gIHJldHVybiBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1ha2VTdG9yZSA9IChjb250ZXh0KSA9PiB7XHJcbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpXHJcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgYmluZE1pZGRsZXdhcmUoW3NhZ2FNaWRkbGV3YXJlXSkpXHJcblxyXG4gIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKVxyXG5cclxuICByZXR1cm4gc3RvcmVcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKG1ha2VTdG9yZSwgeyBkZWJ1ZzogdHJ1ZSB9KVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/store.ts\n");

/***/ }),

/***/ "./src/Styles/main.scss":
/*!******************************!*\
  !*** ./src/Styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9TdHlsZXMvbWFpbi5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Styles/main.scss\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-wrapper\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIj8wMWMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtcmVkdXgtd3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-redux-wrapper\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIj81YWE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LWRldnRvb2xzLWV4dGVuc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-devtools-extension\n");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCI/Mzg3YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWR1eC1zYWdhLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-saga\n");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga/effects\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIj80MGI3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LXNhZ2EvZWZmZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-saga/effects\n");

/***/ })

/******/ });