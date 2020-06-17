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

  return _s(function (props) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvSG9jL0F1dGgvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkF1dGhSZXF1aXJlIiwiQ29tcG9zZWRDb21wb25lbnQiLCJwcm9wcyIsImF1dGgiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwibG9nZ2VkIiwicGF0aG5hbWUiLCJsb2NhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxpQkFBRCxFQUE0QjtBQUFBOztBQUU1QyxZQUFPLFVBQUNDLEtBQUQsRUFBZ0I7QUFBQTs7QUFDbkIsUUFBTUMsSUFBSSxHQUFHQyxXQUFXLENBQStCLFVBQUFDLEtBQUs7QUFBQSxhQUFJQSxLQUFLLENBQUNGLElBQVY7QUFBQSxLQUFwQyxDQUF4Qjs7QUFDQSxRQUFJQSxJQUFJLENBQUNHLE1BQVQsRUFBaUI7QUFDYixhQUFPLE1BQUMsaUJBQUQseUZBQXVCSixLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVA7QUFDSDs7QUFDRCxXQUFPLE1BQUMsUUFBRDtBQUFVLFFBQUUsRUFBRTtBQUNqQkssZ0JBQVEsRUFBRSxPQURPO0FBRWpCRixhQUFLLEVBQUVILEtBQUssQ0FBQ007QUFGSSxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBUDtBQUlILEdBVEQ7QUFVSCxDQVpEOztLQUFNUixXO0FBY1NBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5hYjk3MDlhYThlMmVhNzFhM2JlOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEF1dGhSZXF1aXJlID0gKENvbXBvc2VkQ29tcG9uZW50OiBhbnkpID0+IHtcclxuXHJcbiAgICByZXR1cm4gKHByb3BzOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBhdXRoID0gdXNlU2VsZWN0b3I8SUFwcGxpY2F0aW9uU3RhdGUsIEF1dGhTdGF0ZT4oc3RhdGUgPT4gc3RhdGUuYXV0aCk7XHJcbiAgICAgICAgaWYgKGF1dGgubG9nZ2VkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgey4uLnByb3BzfSAvPlxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gPFJlZGlyZWN0IHRvPXt7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lOiAnL2F1dGgnLFxyXG4gICAgICAgICAgICBzdGF0ZTogcHJvcHMubG9jYXRpb25cclxuICAgICAgICB9fSAvPlxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoUmVxdWlyZTsiXSwic291cmNlUm9vdCI6IiJ9