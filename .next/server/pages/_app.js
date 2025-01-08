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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ScrollContext: () => (/* binding */ ScrollContext),\n/* harmony export */   ScrollProvider: () => (/* binding */ ScrollProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n// ----------------------------------------------------------------------\nconst initialState = {\n    isScroll: false\n};\nconst ScrollContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(initialState);\n// ----------------------------------------------------------------------\nScrollProvider.propTypes = {\n    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)\n};\nfunction ScrollProvider({ children }) {\n    const [isScroll, setIsScroll] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const jumpToTop = ()=>{\n        window.scrollTo({\n            top: 0,\n            behavior: 'smooth'\n        });\n    };\n    const jumpToDown = ()=>{\n        window.scrollTo({\n            top: 600,\n            behavior: 'smooth'\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"ScrollProvider.useEffect\": ()=>{\n            const handleScroll = {\n                \"ScrollProvider.useEffect.handleScroll\": ()=>{\n                    if (window.scrollY > 70) {\n                        setIsScroll(true);\n                    } else {\n                        setIsScroll(false);\n                    }\n                }\n            }[\"ScrollProvider.useEffect.handleScroll\"];\n            window.addEventListener('scroll', handleScroll);\n            return ({\n                \"ScrollProvider.useEffect\": ()=>{\n                    window.removeEventListener('scroll', handleScroll);\n                }\n            })[\"ScrollProvider.useEffect\"];\n        }\n    }[\"ScrollProvider.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ScrollContext.Provider, {\n        value: {\n            isScroll: isScroll,\n            jumpToTop: jumpToTop,\n            jumpToDown: jumpToDown\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"E:\\\\ReactRedux\\\\dev-portfolio\\\\src\\\\context\\\\ScrollContext.js\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9TY3JvbGxDb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFtQztBQUN3QjtBQUUzRCx5RUFBeUU7QUFFekUsTUFBTUksZUFBZTtJQUNuQkMsVUFBVTtBQUNaO0FBRUEsTUFBTUMsOEJBQWdCTCxvREFBYUEsQ0FBQ0c7QUFFcEMseUVBQXlFO0FBRXpFRyxlQUFlQyxTQUFTLEdBQUc7SUFDekJDLFVBQVVULHdEQUFjO0FBQzFCO0FBRUEsU0FBU08sZUFBZSxFQUFFRSxRQUFRLEVBQUU7SUFDbEMsTUFBTSxDQUFDSixVQUFVTSxZQUFZLEdBQUdULCtDQUFRQSxDQUFDO0lBRXpDLE1BQU1VLFlBQVk7UUFDaEJDLE9BQU9DLFFBQVEsQ0FBQztZQUNkQyxLQUFLO1lBQ0xDLFVBQVU7UUFDWjtJQUNGO0lBRUEsTUFBTUMsYUFBYTtRQUNqQkosT0FBT0MsUUFBUSxDQUFDO1lBQ2RDLEtBQUs7WUFDTEMsVUFBVTtRQUNaO0lBQ0Y7SUFFQWIsZ0RBQVNBO29DQUFDO1lBQ1IsTUFBTWU7eURBQWU7b0JBQ25CLElBQUlMLE9BQU9NLE9BQU8sR0FBRyxJQUFJO3dCQUN2QlIsWUFBWTtvQkFDZCxPQUFPO3dCQUNMQSxZQUFZO29CQUNkO2dCQUNGOztZQUNBRSxPQUFPTyxnQkFBZ0IsQ0FBQyxVQUFVRjtZQUNsQzs0Q0FBTztvQkFDTEwsT0FBT1EsbUJBQW1CLENBQUMsVUFBVUg7Z0JBQ3ZDOztRQUNGO21DQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ1osY0FBY2dCLFFBQVE7UUFDckJDLE9BQU87WUFDTGxCLFVBQVVBO1lBQ1ZPLFdBQVdBO1lBQ1hLLFlBQVlBO1FBQ2Q7a0JBRUNSOzs7Ozs7QUFHUDtBQUV5QyIsInNvdXJjZXMiOlsiRTpcXFJlYWN0UmVkdXhcXGRldi1wb3J0Zm9saW9cXHNyY1xcY29udGV4dFxcU2Nyb2xsQ29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGlzU2Nyb2xsOiBmYWxzZSxcclxufTtcclxuXHJcbmNvbnN0IFNjcm9sbENvbnRleHQgPSBjcmVhdGVDb250ZXh0KGluaXRpYWxTdGF0ZSk7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5TY3JvbGxQcm92aWRlci5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gU2Nyb2xsUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW2lzU2Nyb2xsLCBzZXRJc1Njcm9sbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGp1bXBUb1RvcCA9ICgpID0+IHtcclxuICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuICBcclxuICBjb25zdCBqdW1wVG9Eb3duID0gKCkgPT4ge1xyXG4gICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgdG9wOiA2MDAsXHJcbiAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDcwKSB7XHJcbiAgICAgICAgc2V0SXNTY3JvbGwodHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0SXNTY3JvbGwoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNjcm9sbENvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICBpc1Njcm9sbDogaXNTY3JvbGwsXHJcbiAgICAgICAganVtcFRvVG9wOiBqdW1wVG9Ub3AsXHJcbiAgICAgICAganVtcFRvRG93bjoganVtcFRvRG93bixcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9TY3JvbGxDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IFNjcm9sbENvbnRleHQsIFNjcm9sbFByb3ZpZGVyIH07XHJcbiJdLCJuYW1lcyI6WyJQcm9wVHlwZXMiLCJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJpbml0aWFsU3RhdGUiLCJpc1Njcm9sbCIsIlNjcm9sbENvbnRleHQiLCJTY3JvbGxQcm92aWRlciIsInByb3BUeXBlcyIsImNoaWxkcmVuIiwibm9kZSIsInNldElzU2Nyb2xsIiwianVtcFRvVG9wIiwid2luZG93Iiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsImp1bXBUb0Rvd24iLCJoYW5kbGVTY3JvbGwiLCJzY3JvbGxZIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJQcm92aWRlciIsInZhbHVlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/ScrollContext.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_ScrollContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/ScrollContext */ \"./src/context/ScrollContext.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n// provider\n\n// style\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_ScrollContext__WEBPACK_IMPORTED_MODULE_2__.ScrollProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"E:\\\\ReactRedux\\\\dev-portfolio\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\ReactRedux\\\\dev-portfolio\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n// ---------------------------------------\nMyApp.propTypes = {\n    Component: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().elementType),\n    pageProps: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),\n    emotionCache: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBbUM7QUFDbkMsV0FBVztBQUMrQztBQUMxRCxRQUFRO0FBQ3VCO0FBRWhCLFNBQVNFLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDcEQscUJBQ0UsOERBQUNILGtFQUFjQTtrQkFDYiw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QjtBQUVBLDBDQUEwQztBQUUxQ0YsTUFBTUcsU0FBUyxHQUFHO0lBQ2hCRixXQUFXSCwrREFBcUI7SUFDaENJLFdBQVdKLDBEQUFnQjtJQUMzQlEsY0FBY1IsMERBQWdCO0FBQ2hDIiwic291cmNlcyI6WyJFOlxcUmVhY3RSZWR1eFxcZGV2LXBvcnRmb2xpb1xcc3JjXFxwYWdlc1xcX2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG4vLyBwcm92aWRlclxyXG5pbXBvcnQgeyBTY3JvbGxQcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHQvU2Nyb2xsQ29udGV4dCc7XHJcbi8vIHN0eWxlXHJcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U2Nyb2xsUHJvdmlkZXI+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvU2Nyb2xsUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5NeUFwcC5wcm9wVHlwZXMgPSB7XHJcbiAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXHJcbiAgcGFnZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGVtb3Rpb25DYWNoZTogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuIl0sIm5hbWVzIjpbIlByb3BUeXBlcyIsIlNjcm9sbFByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJwcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsIm9iamVjdCIsImVtb3Rpb25DYWNoZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

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