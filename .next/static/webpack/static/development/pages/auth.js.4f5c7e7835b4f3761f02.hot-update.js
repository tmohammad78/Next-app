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
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register */ "./pages/auth/register.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
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

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var pathname = next_router__WEBPACK_IMPORTED_MODULE_2___default.a.pathname;

    if (RegisterUi) {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/hello-nextjs');
    }
  });
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "image-background",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx("picture", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "my_img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, "lvnjbfjb"), __jsx(_register__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  })));
};

_s(AuthPage, "kA1hYVigBeZKypH+wGxCUVMrv0s=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hdXRoL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJBdXRoUGFnZSIsInByb3BzIiwidXNlU3RhdGUiLCJSZWdpc3RlclVpIiwic2V0UmVnaXN0ZXJVaSIsImhhbmRsZVNob3ciLCJ1c2VFZmZlY3QiLCJwYXRobmFtZSIsIlJvdXRlciIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7Q0FFQTs7QUFFQSxJQUFNQSxRQUF3QixHQUFHLFNBQTNCQSxRQUEyQixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDeEM7QUFEd0Msa0JBRUpDLHNEQUFRLENBQUMsS0FBRCxDQUZKO0FBQUEsTUFFakNDLFVBRmlDO0FBQUEsTUFFckJDLGFBRnFCLGlCQUd4Qzs7O0FBRUEsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUNyQkQsaUJBQWEsQ0FBQyxLQUFELENBQWI7QUFDSCxHQUZEOztBQUlBRSx5REFBUyxDQUFDLFlBQU07QUFBQSxRQUNKQyxRQURJLEdBQ1NDLGtEQURULENBQ0pELFFBREk7O0FBRVosUUFBSUosVUFBSixFQUFnQjtBQUNaSyx3REFBTSxDQUFDQyxJQUFQLENBQVksZUFBWjtBQUNIO0FBQ0osR0FMUSxDQUFUO0FBTUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLEVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKSixFQVFJLE1BQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJKLENBREosQ0FESjtBQXdCSCxDQXZDRDs7R0FBTVQsUTs7S0FBQUEsUTtBQXdDU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGF1dGguanMuNGY1YzdlNzgzNWI0ZjM3NjFmMDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBSZWdpc3RlciBmcm9tICcuL3JlZ2lzdGVyJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuLy8gaW1wb3J0ICcuL3N0eWxlLm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IEF1dGhQYWdlOiBSZWFjdC5TRkM8YW55PiA9IChwcm9wcykgPT4ge1xyXG4gICAgLy8gY29uc3QgbG9nZ2VkID0gdXNlU2VsZWN0b3I8SUFwcGxpY2F0aW9uU3RhdGUsIEF1dGhTdGF0ZT4oc3RhdGUgPT4gc3RhdGUuYXV0aCk7XHJcbiAgICBjb25zdCBbUmVnaXN0ZXJVaSwgc2V0UmVnaXN0ZXJVaV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnaW4gYXV0aHBhZ2UnLCBwcm9wcylcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTaG93ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFJlZ2lzdGVyVWkoZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IFJvdXRlclxyXG4gICAgICAgIGlmIChSZWdpc3RlclVpKSB7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvaGVsbG8tbmV4dGpzJylcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW1hZ2UtYmFja2dyb3VuZCc+XHJcbiAgICAgICAgICAgICAgICA8cGljdHVyZT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXlfaW1nJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvcGljdHVyZT5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgbHZuamJmamJcclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8UmVnaXN0ZXIgLz5cclxuICAgICAgICAgICAgICAgIHsvKiA8TWFpbkF1dGggY2FsbEJhY2tDaGFuZ2VTdGF0ZT17aGFuZGxlU2hvd30gLz4gKi99XHJcbiAgICAgICAgICAgICAgICB7LyogPFJvdXRlXHJcblx0XHRcdFx0XHRleGFjdFxyXG5cdFx0XHRcdFx0cGF0aD17Jy9hdXRoJ31cclxuXHRcdFx0XHRcdGNvbXBvbmVudD17KCkgPT4gKFxyXG5cdFx0XHRcdFx0XHQ8TWFpbkF1dGggey4uLnByb3BzfSBjYWxsQmFja0NoYW5nZVN0YXRlPXtoYW5kbGVTaG93fSBoYW5kbGVTa2lwQXV0aD17aGFuZGxlU2tpcEF1dGh9IC8+XHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PFJvdXRlIGV4YWN0IHBhdGg9Jy9hdXRoL3Rlc3QnIGNvbXBvbmVudD17UmVnaXN0ZXJ9IC8+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBBdXRoUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==