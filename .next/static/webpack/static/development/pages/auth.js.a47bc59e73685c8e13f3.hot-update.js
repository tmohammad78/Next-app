webpackHotUpdate("static\\development\\pages\\auth.js",{

/***/ "./pages/auth/index.tsx":
/*!******************************!*\
  !*** ./pages/auth/index.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test */ "./pages/auth/test.tsx");
var _this = undefined,
    _jsxFileName = "E:\\MainProject\\frontend\\Next-app\\pages\\auth\\index.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import './style.module.scss';

var AuthPage = function AuthPage(props) {
  _s();

  // const logged = useSelector<IApplicationState, AuthState>(state => state.auth);
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      RegisterUi = _useState[0],
      setRegisterUi = _useState[1]; // console.log('in authpage', props)


  var handleShow = function handleShow() {
    setRegisterUi(false);
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "image-background",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx("picture", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "my_img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, "lvnjbfjb"), __jsx(_test__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  })));
};

_s(AuthPage, "F840uXF8h8HEsHm2uJHCQ8G3vlc=");

_c = AuthPage;
/* harmony default export */ __webpack_exports__["default"] = (AuthPage);

var _c;

$RefreshReg$(_c, "AuthPage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/auth/test.tsx":
/*!*****************************!*\
  !*** ./pages/auth/test.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "E:\\MainProject\\frontend\\Next-app\\pages\\auth\\test.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


// import MainAuth from './Main/index';
// import './style.module.scss';
var AuthPage = function AuthPage(props) {
  _s();

  // const logged = useSelector<IApplicationState, AuthState>(state => state.auth);
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      RegisterUi = _useState[0],
      setRegisterUi = _useState[1]; // console.log('in authpage', props)


  var handleShow = function handleShow() {
    setRegisterUi(false);
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "image-background",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }
  }, __jsx("picture", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "my_img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 6
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, "lvnjb")));
};

_s(AuthPage, "F840uXF8h8HEsHm2uJHCQ8G3vlc=");

_c = AuthPage;
/* harmony default export */ __webpack_exports__["default"] = (AuthPage);

var _c;

$RefreshReg$(_c, "AuthPage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hdXRoL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hdXRoL3Rlc3QudHN4Il0sIm5hbWVzIjpbIkF1dGhQYWdlIiwicHJvcHMiLCJ1c2VTdGF0ZSIsIlJlZ2lzdGVyVWkiLCJzZXRSZWdpc3RlclVpIiwiaGFuZGxlU2hvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBRUEsSUFBTUEsUUFBd0IsR0FBRyxTQUEzQkEsUUFBMkIsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ3hDO0FBRHdDLGtCQUVKQyxzREFBUSxDQUFDLEtBQUQsQ0FGSjtBQUFBLE1BRWpDQyxVQUZpQztBQUFBLE1BRXJCQyxhQUZxQixpQkFHeEM7OztBQUVBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDckJELGlCQUFhLENBQUMsS0FBRCxDQUFiO0FBQ0gsR0FGRDs7QUFJQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosRUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKLEVBT0ksTUFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEosQ0FESixDQURKO0FBdUJILENBaENEOztHQUFNSixROztLQUFBQSxRO0FBaUNTQSx1RUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBOztBQUVBO0FBQ0E7QUFFQSxJQUFNQSxRQUF3QixHQUFHLFNBQTNCQSxRQUEyQixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDM0M7QUFEMkMsa0JBRVBDLHNEQUFRLENBQUMsS0FBRCxDQUZEO0FBQUEsTUFFcENDLFVBRm9DO0FBQUEsTUFFeEJDLGFBRndCLGlCQUczQzs7O0FBRUEsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN4QkQsaUJBQWEsQ0FBQyxLQUFELENBQWI7QUFDQSxHQUZEOztBQUlBLFNBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0FERCxFQUlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRCxDQURELENBREQ7QUFzQkEsQ0EvQkQ7O0dBQU1KLFE7O0tBQUFBLFE7QUFnQ1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhdXRoLmpzLmE0N2JjNTllNzM2ODVjOGUxM2YzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFJlZ2lzdGVyIGZyb20gJy4vdGVzdCc7XHJcbi8vIGltcG9ydCAnLi9zdHlsZS5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBBdXRoUGFnZTogUmVhY3QuU0ZDPGFueT4gPSAocHJvcHMpID0+IHtcclxuICAgIC8vIGNvbnN0IGxvZ2dlZCA9IHVzZVNlbGVjdG9yPElBcHBsaWNhdGlvblN0YXRlLCBBdXRoU3RhdGU+KHN0YXRlID0+IHN0YXRlLmF1dGgpO1xyXG4gICAgY29uc3QgW1JlZ2lzdGVyVWksIHNldFJlZ2lzdGVyVWldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2luIGF1dGhwYWdlJywgcHJvcHMpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2hvdyA9ICgpID0+IHtcclxuICAgICAgICBzZXRSZWdpc3RlclVpKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW1hZ2UtYmFja2dyb3VuZCc+XHJcbiAgICAgICAgICAgICAgICA8cGljdHVyZT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXlfaW1nJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvcGljdHVyZT5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgbHZuamJmamJcclxuXHRcdFx0XHQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxSZWdpc3RlciAvPlxyXG4gICAgICAgICAgICAgICAgey8qIDxNYWluQXV0aCBjYWxsQmFja0NoYW5nZVN0YXRlPXtoYW5kbGVTaG93fSAvPiAqL31cclxuICAgICAgICAgICAgICAgIHsvKiA8Um91dGVcclxuXHRcdFx0XHRcdGV4YWN0XHJcblx0XHRcdFx0XHRwYXRoPXsnL2F1dGgnfVxyXG5cdFx0XHRcdFx0Y29tcG9uZW50PXsoKSA9PiAoXHJcblx0XHRcdFx0XHRcdDxNYWluQXV0aCB7Li4ucHJvcHN9IGNhbGxCYWNrQ2hhbmdlU3RhdGU9e2hhbmRsZVNob3d9IGhhbmRsZVNraXBBdXRoPXtoYW5kbGVTa2lwQXV0aH0gLz5cclxuXHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8Um91dGUgZXhhY3QgcGF0aD0nL2F1dGgvdGVzdCcgY29tcG9uZW50PXtSZWdpc3Rlcn0gLz4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhQYWdlO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuLy8gaW1wb3J0IE1haW5BdXRoIGZyb20gJy4vTWFpbi9pbmRleCc7XHJcbi8vIGltcG9ydCAnLi9zdHlsZS5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBBdXRoUGFnZTogUmVhY3QuU0ZDPGFueT4gPSAocHJvcHMpID0+IHtcclxuXHQvLyBjb25zdCBsb2dnZWQgPSB1c2VTZWxlY3RvcjxJQXBwbGljYXRpb25TdGF0ZSwgQXV0aFN0YXRlPihzdGF0ZSA9PiBzdGF0ZS5hdXRoKTtcclxuXHRjb25zdCBbUmVnaXN0ZXJVaSwgc2V0UmVnaXN0ZXJVaV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Ly8gY29uc29sZS5sb2coJ2luIGF1dGhwYWdlJywgcHJvcHMpXHJcblxyXG5cdGNvbnN0IGhhbmRsZVNob3cgPSAoKSA9PiB7XHJcblx0XHRzZXRSZWdpc3RlclVpKGZhbHNlKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2ltYWdlLWJhY2tncm91bmQnPlxyXG5cdFx0XHRcdDxwaWN0dXJlPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J215X2ltZyc+PC9kaXY+XHJcblx0XHRcdFx0PC9waWN0dXJlPlxyXG5cdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRsdm5qYlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdHsvKiA8TWFpbkF1dGggY2FsbEJhY2tDaGFuZ2VTdGF0ZT17aGFuZGxlU2hvd30gLz4gKi99XHJcblx0XHRcdFx0ey8qIDxSb3V0ZVxyXG5cdFx0XHRcdFx0ZXhhY3RcclxuXHRcdFx0XHRcdHBhdGg9eycvYXV0aCd9XHJcblx0XHRcdFx0XHRjb21wb25lbnQ9eygpID0+IChcclxuXHRcdFx0XHRcdFx0PE1haW5BdXRoIHsuLi5wcm9wc30gY2FsbEJhY2tDaGFuZ2VTdGF0ZT17aGFuZGxlU2hvd30gaGFuZGxlU2tpcEF1dGg9e2hhbmRsZVNraXBBdXRofSAvPlxyXG5cdFx0XHRcdFx0KX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxSb3V0ZSBleGFjdCBwYXRoPScvYXV0aC90ZXN0JyBjb21wb25lbnQ9e1JlZ2lzdGVyfSAvPiAqL31cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQXV0aFBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=