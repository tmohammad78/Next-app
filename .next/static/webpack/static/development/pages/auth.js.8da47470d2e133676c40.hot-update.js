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
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register */ "./pages/auth/register.tsx");
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
  }, "lvnjbfjb"), __jsx(_register__WEBPACK_IMPORTED_MODULE_2__["default"], {
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

/***/ "./pages/auth/register.tsx":
/*!*********************************!*\
  !*** ./pages/auth/register.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "E:\\MainProject\\frontend\\Next-app\\pages\\auth\\register.tsx",
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

/***/ }),

/***/ "./pages/auth/test.tsx":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hdXRoL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hdXRoL3JlZ2lzdGVyLnRzeCJdLCJuYW1lcyI6WyJBdXRoUGFnZSIsInByb3BzIiwidXNlU3RhdGUiLCJSZWdpc3RlclVpIiwic2V0UmVnaXN0ZXJVaSIsImhhbmRsZVNob3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztBQUVBLElBQU1BLFFBQXdCLEdBQUcsU0FBM0JBLFFBQTJCLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUN4QztBQUR3QyxrQkFFSkMsc0RBQVEsQ0FBQyxLQUFELENBRko7QUFBQSxNQUVqQ0MsVUFGaUM7QUFBQSxNQUVyQkMsYUFGcUIsaUJBR3hDOzs7QUFFQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3JCRCxpQkFBYSxDQUFDLEtBQUQsQ0FBYjtBQUNILEdBRkQ7O0FBSUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLEVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKSixFQU9JLE1BQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBKLENBREosQ0FESjtBQXVCSCxDQWhDRDs7R0FBTUosUTs7S0FBQUEsUTtBQWlDU0EsdUVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTs7QUFFQTtBQUNBO0FBRUEsSUFBTUEsUUFBd0IsR0FBRyxTQUEzQkEsUUFBMkIsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQzNDO0FBRDJDLGtCQUVQQyxzREFBUSxDQUFDLEtBQUQsQ0FGRDtBQUFBLE1BRXBDQyxVQUZvQztBQUFBLE1BRXhCQyxhQUZ3QixpQkFHM0M7OztBQUVBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDeEJELGlCQUFhLENBQUMsS0FBRCxDQUFiO0FBQ0EsR0FGRDs7QUFJQSxTQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBREQsRUFJQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkQsQ0FERCxDQUREO0FBc0JBLENBL0JEOztHQUFNSixROztLQUFBQSxRO0FBZ0NTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYXV0aC5qcy44ZGE0NzQ3MGQyZTEzMzY3NmM0MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBSZWdpc3RlciBmcm9tICcuL3JlZ2lzdGVyJztcclxuLy8gaW1wb3J0ICcuL3N0eWxlLm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IEF1dGhQYWdlOiBSZWFjdC5TRkM8YW55PiA9IChwcm9wcykgPT4ge1xyXG4gICAgLy8gY29uc3QgbG9nZ2VkID0gdXNlU2VsZWN0b3I8SUFwcGxpY2F0aW9uU3RhdGUsIEF1dGhTdGF0ZT4oc3RhdGUgPT4gc3RhdGUuYXV0aCk7XHJcbiAgICBjb25zdCBbUmVnaXN0ZXJVaSwgc2V0UmVnaXN0ZXJVaV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnaW4gYXV0aHBhZ2UnLCBwcm9wcylcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTaG93ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFJlZ2lzdGVyVWkoZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbWFnZS1iYWNrZ3JvdW5kJz5cclxuICAgICAgICAgICAgICAgIDxwaWN0dXJlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdteV9pbWcnPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9waWN0dXJlPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICBsdm5qYmZqYlxyXG5cdFx0XHRcdDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPFJlZ2lzdGVyIC8+XHJcbiAgICAgICAgICAgICAgICB7LyogPE1haW5BdXRoIGNhbGxCYWNrQ2hhbmdlU3RhdGU9e2hhbmRsZVNob3d9IC8+ICovfVxyXG4gICAgICAgICAgICAgICAgey8qIDxSb3V0ZVxyXG5cdFx0XHRcdFx0ZXhhY3RcclxuXHRcdFx0XHRcdHBhdGg9eycvYXV0aCd9XHJcblx0XHRcdFx0XHRjb21wb25lbnQ9eygpID0+IChcclxuXHRcdFx0XHRcdFx0PE1haW5BdXRoIHsuLi5wcm9wc30gY2FsbEJhY2tDaGFuZ2VTdGF0ZT17aGFuZGxlU2hvd30gaGFuZGxlU2tpcEF1dGg9e2hhbmRsZVNraXBBdXRofSAvPlxyXG5cdFx0XHRcdFx0KX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxSb3V0ZSBleGFjdCBwYXRoPScvYXV0aC90ZXN0JyBjb21wb25lbnQ9e1JlZ2lzdGVyfSAvPiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQXV0aFBhZ2U7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG4vLyBpbXBvcnQgTWFpbkF1dGggZnJvbSAnLi9NYWluL2luZGV4JztcclxuLy8gaW1wb3J0ICcuL3N0eWxlLm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IEF1dGhQYWdlOiBSZWFjdC5TRkM8YW55PiA9IChwcm9wcykgPT4ge1xyXG5cdC8vIGNvbnN0IGxvZ2dlZCA9IHVzZVNlbGVjdG9yPElBcHBsaWNhdGlvblN0YXRlLCBBdXRoU3RhdGU+KHN0YXRlID0+IHN0YXRlLmF1dGgpO1xyXG5cdGNvbnN0IFtSZWdpc3RlclVpLCBzZXRSZWdpc3RlclVpXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHQvLyBjb25zb2xlLmxvZygnaW4gYXV0aHBhZ2UnLCBwcm9wcylcclxuXHJcblx0Y29uc3QgaGFuZGxlU2hvdyA9ICgpID0+IHtcclxuXHRcdHNldFJlZ2lzdGVyVWkoZmFsc2UpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0naW1hZ2UtYmFja2dyb3VuZCc+XHJcblx0XHRcdFx0PHBpY3R1cmU+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbXlfaW1nJz48L2Rpdj5cclxuXHRcdFx0XHQ8L3BpY3R1cmU+XHJcblx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdGx2bmpiXHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0ey8qIDxNYWluQXV0aCBjYWxsQmFja0NoYW5nZVN0YXRlPXtoYW5kbGVTaG93fSAvPiAqL31cclxuXHRcdFx0XHR7LyogPFJvdXRlXHJcblx0XHRcdFx0XHRleGFjdFxyXG5cdFx0XHRcdFx0cGF0aD17Jy9hdXRoJ31cclxuXHRcdFx0XHRcdGNvbXBvbmVudD17KCkgPT4gKFxyXG5cdFx0XHRcdFx0XHQ8TWFpbkF1dGggey4uLnByb3BzfSBjYWxsQmFja0NoYW5nZVN0YXRlPXtoYW5kbGVTaG93fSBoYW5kbGVTa2lwQXV0aD17aGFuZGxlU2tpcEF1dGh9IC8+XHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PFJvdXRlIGV4YWN0IHBhdGg9Jy9hdXRoL3Rlc3QnIGNvbXBvbmVudD17UmVnaXN0ZXJ9IC8+ICovfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBBdXRoUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==