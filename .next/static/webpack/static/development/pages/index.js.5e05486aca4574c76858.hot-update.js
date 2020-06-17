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
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["startClock"])());
  }, [dispatch]);
  return __jsx(_components_page__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Index Page",
    linkTo: "/other",
    NavigateTo: "Other Page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 10
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsImxvZ2dlZCIsInNldExvZ2dlZCIsInVzZUVmZmVjdCIsIlJvdXRlciIsInB1c2giLCJzdGFydENsb2NrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQ2xCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRGtCLGtCQUdVQyxzREFBUSxDQUFDLEtBQUQsQ0FIbEI7QUFBQSxNQUdYQyxNQUhXO0FBQUEsTUFHSEMsU0FIRzs7QUFJbEJDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUksQ0FBQ0YsTUFBTCxFQUFhO0FBQ1hHLHdEQUFNLENBQUNDLElBQVAsQ0FBWSxPQUFaO0FBQ0Q7QUFDRixHQUpRLEVBSU4sRUFKTSxDQUFUO0FBS0FGLHlEQUFTLENBQUMsWUFBTTtBQUNkTCxZQUFRLENBQUNRLDJEQUFVLEVBQVgsQ0FBUjtBQUNELEdBRlEsRUFFTixDQUFDUixRQUFELENBRk0sQ0FBVDtBQUlBLFNBQU8sTUFBQyx3REFBRDtBQUFNLFNBQUssRUFBQyxZQUFaO0FBQXlCLFVBQU0sRUFBQyxRQUFoQztBQUF5QyxjQUFVLEVBQUMsWUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFQO0FBQ0QsQ0FkRDs7R0FBTUQsSztVQUNhRSx1RDs7O0tBRGJGLEs7O0FBMkJTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNWUwNTQ4NmFjYTQ1NzRjNzY4NTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBFTkQgfSBmcm9tIFwicmVkdXgtc2FnYVwiO1xuaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gXCIuLi9zdG9yZVwiO1xuaW1wb3J0IHsgbG9hZERhdGEsIHN0YXJ0Q2xvY2ssIHRpY2tDbG9jayB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XG5pbXBvcnQgUGFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9wYWdlXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIGNvbnN0IFtsb2dnZWQsIHNldExvZ2dlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFsb2dnZWQpIHtcbiAgICAgIFJvdXRlci5wdXNoKFwiL2F1dGhcIik7XG4gICAgfVxuICB9LCBbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goc3RhcnRDbG9jaygpKTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG5cbiAgcmV0dXJuIDxQYWdlIHRpdGxlPVwiSW5kZXggUGFnZVwiIGxpbmtUbz1cIi9vdGhlclwiIE5hdmlnYXRlVG89XCJPdGhlciBQYWdlXCIgLz47XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSB3cmFwcGVyLmdldFN0YXRpY1Byb3BzKGFzeW5jICh7IHN0b3JlIH0pID0+IHtcbiAgc3RvcmUuZGlzcGF0Y2godGlja0Nsb2NrKGZhbHNlKSk7XG5cbiAgaWYgKCFzdG9yZS5nZXRTdGF0ZSgpLnBsYWNlaG9sZGVyRGF0YSkge1xuICAgIHN0b3JlLmRpc3BhdGNoKGxvYWREYXRhKCkpO1xuICAgIHN0b3JlLmRpc3BhdGNoKEVORCk7XG4gIH1cblxuICBhd2FpdCBzdG9yZS5zYWdhVGFzay50b1Byb21pc2UoKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=