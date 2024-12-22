/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context/ScrollContext.js":
/*!**************************************!*\
  !*** ./src/context/ScrollContext.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ScrollContext\": () => (/* binding */ ScrollContext),\n/* harmony export */   \"ScrollProvider\": () => (/* binding */ ScrollProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n// ----------------------------------------------------------------------\nconst initialState = {\n    isScroll: false\n};\nconst ScrollContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(initialState);\n// ----------------------------------------------------------------------\nScrollProvider.propTypes = {\n    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)\n};\nfunction ScrollProvider({ children  }) {\n    const [isScroll, setIsScroll] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const jumpToTop = ()=>{\n        window.scrollTo({\n            top: 0,\n            behavior: \"smooth\"\n        });\n    };\n    const jumpToDown = ()=>{\n        window.scrollTo({\n            top: 600,\n            behavior: \"smooth\"\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            if (window.scrollY > 70) {\n                setIsScroll(true);\n            } else {\n                setIsScroll(false);\n            }\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ScrollContext.Provider, {\n        value: {\n            isScroll: isScroll,\n            jumpToTop: jumpToTop,\n            jumpToDown: jumpToDown\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"E:\\\\ReactRedux\\\\dev-portfolio\\\\src\\\\context\\\\ScrollContext.js\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9TY3JvbGxDb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBbUM7QUFDd0I7QUFFM0QseUVBQXlFO0FBRXpFLE1BQU1JLGVBQWU7SUFDbkJDLFVBQVUsS0FBSztBQUNqQjtBQUVBLE1BQU1DLDhCQUFnQkwsb0RBQWFBLENBQUNHO0FBRXBDLHlFQUF5RTtBQUV6RUcsZUFBZUMsU0FBUyxHQUFHO0lBQ3pCQyxVQUFVVCx3REFBYztBQUMxQjtBQUVBLFNBQVNPLGVBQWUsRUFBRUUsU0FBUSxFQUFFLEVBQUU7SUFDcEMsTUFBTSxDQUFDSixVQUFVTSxZQUFZLEdBQUdULCtDQUFRQSxDQUFDLEtBQUs7SUFFOUMsTUFBTVUsWUFBWSxJQUFNO1FBQ3RCQyxPQUFPQyxRQUFRLENBQUM7WUFDZEMsS0FBSztZQUNMQyxVQUFVO1FBQ1o7SUFDRjtJQUVBLE1BQU1DLGFBQWEsSUFBTTtRQUN2QkosT0FBT0MsUUFBUSxDQUFDO1lBQ2RDLEtBQUs7WUFDTEMsVUFBVTtRQUNaO0lBQ0Y7SUFFQWIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1lLGVBQWUsSUFBTTtZQUN6QixJQUFJTCxPQUFPTSxPQUFPLEdBQUcsSUFBSTtnQkFDdkJSLFlBQVksSUFBSTtZQUNsQixPQUFPO2dCQUNMQSxZQUFZLEtBQUs7WUFDbkIsQ0FBQztRQUNIO1FBQ0FFLE9BQU9PLGdCQUFnQixDQUFDLFVBQVVGO1FBQ2xDLE9BQU8sSUFBTTtZQUNYTCxPQUFPUSxtQkFBbUIsQ0FBQyxVQUFVSDtRQUN2QztJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDWixjQUFjZ0IsUUFBUTtRQUNyQkMsT0FBTztZQUNMbEIsVUFBVUE7WUFDVk8sV0FBV0E7WUFDWEssWUFBWUE7UUFDZDtrQkFFQ1I7Ozs7OztBQUdQO0FBRXlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2NvbnRleHQvU2Nyb2xsQ29udGV4dC5qcz8zMDY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgaXNTY3JvbGw6IGZhbHNlLFxyXG59O1xyXG5cclxuY29uc3QgU2Nyb2xsQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoaW5pdGlhbFN0YXRlKTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblNjcm9sbFByb3ZpZGVyLnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBTY3JvbGxQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBbaXNTY3JvbGwsIHNldElzU2Nyb2xsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QganVtcFRvVG9wID0gKCkgPT4ge1xyXG4gICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIFxyXG4gIGNvbnN0IGp1bXBUb0Rvd24gPSAoKSA9PiB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICB0b3A6IDYwMCxcclxuICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gNzApIHtcclxuICAgICAgICBzZXRJc1Njcm9sbCh0cnVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRJc1Njcm9sbChmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U2Nyb2xsQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17e1xyXG4gICAgICAgIGlzU2Nyb2xsOiBpc1Njcm9sbCxcclxuICAgICAgICBqdW1wVG9Ub3A6IGp1bXBUb1RvcCxcclxuICAgICAgICBqdW1wVG9Eb3duOiBqdW1wVG9Eb3duLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1Njcm9sbENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IHsgU2Nyb2xsQ29udGV4dCwgU2Nyb2xsUHJvdmlkZXIgfTtcclxuIl0sIm5hbWVzIjpbIlByb3BUeXBlcyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImluaXRpYWxTdGF0ZSIsImlzU2Nyb2xsIiwiU2Nyb2xsQ29udGV4dCIsIlNjcm9sbFByb3ZpZGVyIiwicHJvcFR5cGVzIiwiY2hpbGRyZW4iLCJub2RlIiwic2V0SXNTY3JvbGwiLCJqdW1wVG9Ub3AiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwianVtcFRvRG93biIsImhhbmRsZVNjcm9sbCIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/ScrollContext.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_ScrollContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/ScrollContext */ \"./src/context/ScrollContext.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n// provider\n\n// style\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_ScrollContext__WEBPACK_IMPORTED_MODULE_2__.ScrollProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"E:\\\\ReactRedux\\\\dev-portfolio\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\ReactRedux\\\\dev-portfolio\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n// ---------------------------------------\nMyApp.propTypes = {\n    Component: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().elementType),\n    pageProps: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),\n    emotionCache: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQW1DO0FBQ25DLFdBQVc7QUFDK0M7QUFDMUQsUUFBUTtBQUN1QjtBQUVoQixTQUFTRSxNQUFNLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFLEVBQUU7SUFDdEQscUJBQ0UsOERBQUNILGtFQUFjQTtrQkFDYiw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QixDQUFDO0FBRUQsMENBQTBDO0FBRTFDRixNQUFNRyxTQUFTLEdBQUc7SUFDaEJGLFdBQVdILCtEQUFxQjtJQUNoQ0ksV0FBV0osMERBQWdCO0lBQzNCUSxjQUFjUiwwREFBZ0I7QUFDaEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvcGFnZXMvX2FwcC5qcz84ZmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbi8vIHByb3ZpZGVyXHJcbmltcG9ydCB7IFNjcm9sbFByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dC9TY3JvbGxDb250ZXh0JztcclxuLy8gc3R5bGVcclxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTY3JvbGxQcm92aWRlcj5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9TY3JvbGxQcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbk15QXBwLnByb3BUeXBlcyA9IHtcclxuICBDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcclxuICBwYWdlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgZW1vdGlvbkNhY2hlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG59O1xyXG4iXSwibmFtZXMiOlsiUHJvcFR5cGVzIiwiU2Nyb2xsUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwib2JqZWN0IiwiZW1vdGlvbkNhY2hlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();