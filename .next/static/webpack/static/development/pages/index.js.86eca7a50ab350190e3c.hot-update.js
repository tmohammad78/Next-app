webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./actions.js");
/* harmony import */ var _components_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/page */ "./components/page.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_Hoc_Auth___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/Hoc/Auth/ */ "./src/Hoc/Auth/index.tsx");
var _this = undefined,
    _jsxFileName = "E:\\MainProject\\frontend\\Next-app\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Index = function Index() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      logged = _useState[0],
      setLogged = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!logged) {
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/auth");
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["startClock"])());
  }, [dispatch]);
  return __jsx(_src_Hoc_Auth___WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  });
};

_s(Index, "jIrkK8yspuu8xTVL6TdAwv3QOpU=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"]];
});

_c = Index;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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

    console.log(props);
    var auth = useSelector(function (state) {
      return state.auth;
    });

    if (auth.logged) {
      return __jsx(ComposedComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9,
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
        lineNumber: 11,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSG9jL0F1dGgvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkluZGV4IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVN0YXRlIiwibG9nZ2VkIiwic2V0TG9nZ2VkIiwidXNlRWZmZWN0IiwiUm91dGVyIiwicHVzaCIsInN0YXJ0Q2xvY2siLCJBdXRoUmVxdWlyZSIsIkNvbXBvc2VkQ29tcG9uZW50IiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiYXV0aCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwYXRobmFtZSIsImxvY2F0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQ2xCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRGtCLGtCQUdVQyxzREFBUSxDQUFDLEtBQUQsQ0FIbEI7QUFBQSxNQUdYQyxNQUhXO0FBQUEsTUFHSEMsU0FIRzs7QUFJbEJDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUksQ0FBQ0YsTUFBTCxFQUFhO0FBQ1hHLHdEQUFNLENBQUNDLElBQVAsQ0FBWSxPQUFaO0FBQ0Q7QUFDRixHQUpRLENBQVQ7QUFLQUYseURBQVMsQ0FBQyxZQUFNO0FBQ2RMLFlBQVEsQ0FBQ1EsMkRBQVUsRUFBWCxDQUFSO0FBQ0QsR0FGUSxFQUVOLENBQUNSLFFBQUQsQ0FGTSxDQUFUO0FBSUEsU0FDRSxNQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERjtBQUtELENBbEJEOztHQUFNRCxLO1VBQ2FFLHVEOzs7S0FEYkYsSzs7QUErQlNBLG9FQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDQTs7QUFFQSxJQUFNVSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxpQkFBRCxFQUE0QjtBQUFBOztBQUU1QyxZQUFPLFVBQUNDLEtBQUQsRUFBZ0I7QUFBQTs7QUFDbkJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0EsUUFBTUcsSUFBSSxHQUFHQyxXQUFXLENBQStCLFVBQUFDLEtBQUs7QUFBQSxhQUFJQSxLQUFLLENBQUNGLElBQVY7QUFBQSxLQUFwQyxDQUF4Qjs7QUFDQSxRQUFJQSxJQUFJLENBQUNYLE1BQVQsRUFBaUI7QUFDYixhQUFPLE1BQUMsaUJBQUQseUZBQXVCUSxLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVA7QUFDSDs7QUFDRCxXQUFPLE1BQUMsUUFBRDtBQUFVLFFBQUUsRUFBRTtBQUNqQk0sZ0JBQVEsRUFBRSxPQURPO0FBRWpCRCxhQUFLLEVBQUVMLEtBQUssQ0FBQ087QUFGSSxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBUDtBQUlILEdBVkQ7QUFXSCxDQWJEOztLQUFNVCxXO0FBZVNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy44NmVjYTdhNTBhYjM1MDE5MGUzYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IEVORCB9IGZyb20gXCJyZWR1eC1zYWdhXCI7XG5pbXBvcnQgeyB3cmFwcGVyIH0gZnJvbSBcIi4uL3N0b3JlXCI7XG5pbXBvcnQgeyBsb2FkRGF0YSwgc3RhcnRDbG9jaywgdGlja0Nsb2NrIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcbmltcG9ydCBQYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL3BhZ2VcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgQXV0aFJlcXVpcmUgZnJvbSAnLi4vc3JjL0hvYy9BdXRoLydcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICBjb25zdCBbbG9nZ2VkLCBzZXRMb2dnZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghbG9nZ2VkKSB7XG4gICAgICBSb3V0ZXIucHVzaChcIi9hdXRoXCIpO1xuICAgIH1cbiAgfSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goc3RhcnRDbG9jaygpKTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8QXV0aFJlcXVpcmU+XG4gICAgICBcbiAgICA8L0F1dGhSZXF1aXJlPlxuICApXG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSB3cmFwcGVyLmdldFN0YXRpY1Byb3BzKGFzeW5jICh7IHN0b3JlIH0pID0+IHtcbiAgc3RvcmUuZGlzcGF0Y2godGlja0Nsb2NrKGZhbHNlKSk7XG5cbiAgaWYgKCFzdG9yZS5nZXRTdGF0ZSgpLnBsYWNlaG9sZGVyRGF0YSkge1xuICAgIHN0b3JlLmRpc3BhdGNoKGxvYWREYXRhKCkpO1xuICAgIHN0b3JlLmRpc3BhdGNoKEVORCk7XG4gIH1cblxuICBhd2FpdCBzdG9yZS5zYWdhVGFzay50b1Byb21pc2UoKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBBdXRoUmVxdWlyZSA9IChDb21wb3NlZENvbXBvbmVudDogYW55KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChwcm9wczogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvcHMpO1xyXG4gICAgICAgIGNvbnN0IGF1dGggPSB1c2VTZWxlY3RvcjxJQXBwbGljYXRpb25TdGF0ZSwgQXV0aFN0YXRlPihzdGF0ZSA9PiBzdGF0ZS5hdXRoKTtcclxuICAgICAgICBpZiAoYXV0aC5sb2dnZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCB7Li4ucHJvcHN9IC8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiA8UmVkaXJlY3QgdG89e3tcclxuICAgICAgICAgICAgcGF0aG5hbWU6ICcvYXV0aCcsXHJcbiAgICAgICAgICAgIHN0YXRlOiBwcm9wcy5sb2NhdGlvblxyXG4gICAgICAgIH19IC8+XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhSZXF1aXJlOyJdLCJzb3VyY2VSb290IjoiIn0=