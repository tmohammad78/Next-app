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
    console.log('test');
    var pathname = next_router__WEBPACK_IMPORTED_MODULE_2___default.a.pathname;

    if (RegisterUi) {
      debugger; // Router.push('/hello-nextjs')
    }
  });
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "image-background",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx("picture", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "my_img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, "lvnjbfjb"), __jsx(_register__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hdXRoL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJBdXRoUGFnZSIsInByb3BzIiwidXNlU3RhdGUiLCJSZWdpc3RlclVpIiwic2V0UmVnaXN0ZXJVaSIsImhhbmRsZVNob3ciLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwicGF0aG5hbWUiLCJSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7Q0FFQTs7QUFFQSxJQUFNQSxRQUF3QixHQUFHLFNBQTNCQSxRQUEyQixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDeEM7QUFEd0Msa0JBRUpDLHNEQUFRLENBQUMsS0FBRCxDQUZKO0FBQUEsTUFFakNDLFVBRmlDO0FBQUEsTUFFckJDLGFBRnFCLGlCQUd4Qzs7O0FBRUEsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUNyQkQsaUJBQWEsQ0FBQyxLQUFELENBQWI7QUFDSCxHQUZEOztBQUlBRSx5REFBUyxDQUFDLFlBQU07QUFDWkMsV0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQURZLFFBRUpDLFFBRkksR0FFU0Msa0RBRlQsQ0FFSkQsUUFGSTs7QUFHWixRQUFJTixVQUFKLEVBQWdCO0FBQ1osZUFEWSxDQUVaO0FBQ0g7QUFDSixHQVBRLENBQVQ7QUFRQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosRUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKLEVBUUksTUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkosQ0FESixDQURKO0FBd0JILENBekNEOztHQUFNSCxROztLQUFBQSxRO0FBMENTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYXV0aC5qcy4zYjljN2QzYzI5OTdmYTFmNDk2My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFJlZ2lzdGVyIGZyb20gJy4vcmVnaXN0ZXInO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG4vLyBpbXBvcnQgJy4vc3R5bGUubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgQXV0aFBhZ2U6IFJlYWN0LlNGQzxhbnk+ID0gKHByb3BzKSA9PiB7XHJcbiAgICAvLyBjb25zdCBsb2dnZWQgPSB1c2VTZWxlY3RvcjxJQXBwbGljYXRpb25TdGF0ZSwgQXV0aFN0YXRlPihzdGF0ZSA9PiBzdGF0ZS5hdXRoKTtcclxuICAgIGNvbnN0IFtSZWdpc3RlclVpLCBzZXRSZWdpc3RlclVpXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdpbiBhdXRocGFnZScsIHByb3BzKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNob3cgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0UmVnaXN0ZXJVaShmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Rlc3QnKVxyXG4gICAgICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IFJvdXRlclxyXG4gICAgICAgIGlmIChSZWdpc3RlclVpKSB7XHJcbiAgICAgICAgICAgIGRlYnVnZ2VyXHJcbiAgICAgICAgICAgIC8vIFJvdXRlci5wdXNoKCcvaGVsbG8tbmV4dGpzJylcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW1hZ2UtYmFja2dyb3VuZCc+XHJcbiAgICAgICAgICAgICAgICA8cGljdHVyZT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXlfaW1nJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvcGljdHVyZT5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgbHZuamJmamJcclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8UmVnaXN0ZXIgLz5cclxuICAgICAgICAgICAgICAgIHsvKiA8TWFpbkF1dGggY2FsbEJhY2tDaGFuZ2VTdGF0ZT17aGFuZGxlU2hvd30gLz4gKi99XHJcbiAgICAgICAgICAgICAgICB7LyogPFJvdXRlXHJcblx0XHRcdFx0XHRleGFjdFxyXG5cdFx0XHRcdFx0cGF0aD17Jy9hdXRoJ31cclxuXHRcdFx0XHRcdGNvbXBvbmVudD17KCkgPT4gKFxyXG5cdFx0XHRcdFx0XHQ8TWFpbkF1dGggey4uLnByb3BzfSBjYWxsQmFja0NoYW5nZVN0YXRlPXtoYW5kbGVTaG93fSBoYW5kbGVTa2lwQXV0aD17aGFuZGxlU2tpcEF1dGh9IC8+XHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PFJvdXRlIGV4YWN0IHBhdGg9Jy9hdXRoL3Rlc3QnIGNvbXBvbmVudD17UmVnaXN0ZXJ9IC8+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBBdXRoUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==