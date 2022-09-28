"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./utils/constants.js":
/*!****************************!*\
  !*** ./utils/constants.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scaleFactor": function() { return /* binding */ scaleFactor; },
/* harmony export */   "collegeDetailsApi": function() { return /* binding */ collegeDetailsApi; },
/* harmony export */   "placementInterestApi": function() { return /* binding */ placementInterestApi; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var scaleFactor = 621 / 900;
var baseUrl = 'http://localhost:3002/functionup';
var collegeDetailsApi = function collegeDetailsApi(collegeName) {
  return "".concat(baseUrl, "/collegeDetails?collegeName=").concat(collegeName);
};
var placementInterestApi = "".concat(baseUrl, "/interns");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjU1YmU4ZTdlMmJlOTIwMzA4ZTguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsV0FBVyxHQUFHLE1BQU0sR0FBMUI7QUFFUCxJQUFNQyxPQUFPLEdBQUcsa0NBQWhCO0FBQ08sSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFBQyxXQUFXO0FBQUEsbUJBQU9GLE9BQVAseUNBQTZDRSxXQUE3QztBQUFBLENBQXJDO0FBQ0EsSUFBTUMsb0JBQW9CLGFBQU1ILE9BQU4sYUFBMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvY29uc3RhbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzY2FsZUZhY3RvciA9IDYyMSAvIDkwMFxyXG5cclxuY29uc3QgYmFzZVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDIvZnVuY3Rpb251cCdcclxuZXhwb3J0IGNvbnN0IGNvbGxlZ2VEZXRhaWxzQXBpID0gY29sbGVnZU5hbWUgPT4gYCR7YmFzZVVybH0vY29sbGVnZURldGFpbHM/Y29sbGVnZU5hbWU9JHtjb2xsZWdlTmFtZX1gXHJcbmV4cG9ydCBjb25zdCBwbGFjZW1lbnRJbnRlcmVzdEFwaSA9IGAke2Jhc2VVcmx9L2ludGVybnNgXHJcbiJdLCJuYW1lcyI6WyJzY2FsZUZhY3RvciIsImJhc2VVcmwiLCJjb2xsZWdlRGV0YWlsc0FwaSIsImNvbGxlZ2VOYW1lIiwicGxhY2VtZW50SW50ZXJlc3RBcGkiXSwic291cmNlUm9vdCI6IiJ9