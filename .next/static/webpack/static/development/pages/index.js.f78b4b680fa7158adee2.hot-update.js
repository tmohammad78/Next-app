webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/Hoc/Auth/index.tsx":
/*!********************************!*\
  !*** ./src/Hoc/Auth/index.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _this = undefined,
    _jsxFileName = "E:\\MainProject\\frontend\\Next-app\\src\\Hoc\\Auth\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var AuthRequire = function AuthRequire(ComposedComponent) {
  var _s = $RefreshSig$();

  return _s(function () {
    _s();

    var auth = useSelector(function (state) {
      return state.auth;
    });

    if (auth.logged) {
      return __jsx(ComposedComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 20
        }
      }));
    }

    return __jsx(Redirect, {
      to: {
        pathname: '/auth',
        state: props.location
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 16
      }
    });
  }, "SvwR9yfdOSlAizXx+1ujAxpoAFQ=", true);
};

_c = AuthRequire;
/* harmony default export */ __webpack_exports__["default"] = (AuthRequire);

var _c;

$RefreshReg$(_c, "AuthRequire");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvSG9jL0F1dGgvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkF1dGhSZXF1aXJlIiwiQ29tcG9zZWRDb21wb25lbnQiLCJhdXRoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImxvZ2dlZCIsInByb3BzIiwicGF0aG5hbWUiLCJsb2NhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxpQkFBRCxFQUE0QjtBQUFBOztBQUU1QyxZQUFPLFlBQU07QUFBQTs7QUFDVCxRQUFNQyxJQUFJLEdBQUdDLFdBQVcsQ0FBK0IsVUFBQUMsS0FBSztBQUFBLGFBQUlBLEtBQUssQ0FBQ0YsSUFBVjtBQUFBLEtBQXBDLENBQXhCOztBQUNBLFFBQUlBLElBQUksQ0FBQ0csTUFBVCxFQUFpQjtBQUNiLGFBQU8sTUFBQyxpQkFBRCx5RkFBdUJDLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBUDtBQUNIOztBQUNELFdBQU8sTUFBQyxRQUFEO0FBQVUsUUFBRSxFQUFFO0FBQ2pCQyxnQkFBUSxFQUFFLE9BRE87QUFFakJILGFBQUssRUFBRUUsS0FBSyxDQUFDRTtBQUZJLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFQO0FBSUgsR0FURDtBQVVILENBWkQ7O0tBQU1SLFc7QUFjU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmY3OGI0YjY4MGZhNzE1OGFkZWUyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQXV0aFJlcXVpcmUgPSAoQ29tcG9zZWRDb21wb25lbnQ6IGFueSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYXV0aCA9IHVzZVNlbGVjdG9yPElBcHBsaWNhdGlvblN0YXRlLCBBdXRoU3RhdGU+KHN0YXRlID0+IHN0YXRlLmF1dGgpO1xyXG4gICAgICAgIGlmIChhdXRoLmxvZ2dlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHsuLi5wcm9wc30gLz5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDxSZWRpcmVjdCB0bz17e1xyXG4gICAgICAgICAgICBwYXRobmFtZTogJy9hdXRoJyxcclxuICAgICAgICAgICAgc3RhdGU6IHByb3BzLmxvY2F0aW9uXHJcbiAgICAgICAgfX0gLz5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aFJlcXVpcmU7Il0sInNvdXJjZVJvb3QiOiIifQ==