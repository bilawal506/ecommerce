"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/faqs/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Navbar: function() { return /* binding */ Navbar; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cards */ \"(app-pages-browser)/./src/app/cards.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer */ \"(app-pages-browser)/./src/app/footer.tsx\");\n/* eslint-disable @next/next/no-img-element */ /* __next_internal_client_entry_do_not_use__ Navbar,default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst PhotoSlider = ()=>{\n    _s();\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    const images = [\n        \"https://fastly.picsum.photos/id/983/400/400.jpg?hmac=jodhwpLVwTS-eP9BbNG9JGVYimkYDjh52Gi1z_MKznA\",\n        \"https://fastly.picsum.photos/id/998/400/400.jpg?hmac=WetZ0aq7zNlX1LHIsGSzZwV5MdHfytypy_ji8IU5ocE\",\n        \"https://fastly.picsum.photos/id/966/400/400.jpg?hmac=vTfdl7XUAXbnfiOQraT_4rOs-cUPhso7ZM6TihvkFhk\",\n        \"https://fastly.picsum.photos/id/444/400/400.jpg?hmac=f2rSUPeVxSw12QU0uWwrZTFUWNo9DXtOXXQoTFefoKU\",\n        \"https://fastly.picsum.photos/id/1018/400/400.jpg?hmac=MwHJoMaVXsBbqg-LFoDVL6P8TCDkSEikExptCkkHESQ\"\n    ];\n    const [currentImageIndex, setCurrentImageIndex] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const imageRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const handleNextClick = ()=>{\n        const nextIndex = (currentImageIndex + 1) % images.length;\n        setCurrentImageIndex(nextIndex);\n    };\n    const handlePrevClick = ()=>{\n        const prevIndex = (currentImageIndex - 1 + images.length) % images.length;\n        setCurrentImageIndex(prevIndex);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (imageRef.current) {\n            imageRef.current.style.opacity = \"0\";\n            setTimeout(()=>{\n                if (imageRef.current) {\n                    imageRef.current.src = images[currentImageIndex];\n                    imageRef.current.alt = \"Image \".concat(currentImageIndex + 1);\n                    imageRef.current.style.opacity = \"1\";\n                }\n            }, 300); // Adjust the transition duration as needed\n        }\n    }, [\n        currentImageIndex,\n        images\n    ]);\n    const arrowsContainer = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // Auto-translate images every 5 seconds\n        const autoTranslate = setInterval(()=>{\n            const nextIndex = (currentImageIndex + 1) % images.length;\n            setCurrentImageIndex(nextIndex);\n        }, 5000);\n        return ()=>{\n            // Clear the interval when the component unmounts\n            clearInterval(autoTranslate);\n        };\n    }, [\n        currentImageIndex,\n        images\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"photo-slider\",\n        style: {\n            position: \"relative\",\n            display: \"flex\",\n            alignItems: \"center\",\n            justifyContent: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                ref: imageRef,\n                alt: \"Image \".concat(currentImageIndex + 1),\n                style: {\n                    transition: \"opacity 0.3s\",\n                    width: \"600px\",\n                    height: \"500px\"\n                }\n            }, void 0, false, {\n                fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"arrows\",\n                style: {\n                    position: \"absolute\",\n                    top: \"50%\",\n                    transform: \"translateY(-50%)\",\n                    display: \"flex\",\n                    alignItems: \"center\"\n                },\n                onMouseEnter: ()=>{\n                    if (arrowsContainer.current) {\n                        arrowsContainer.current.style.display = \"block\";\n                    }\n                },\n                onMouseLeave: ()=>{\n                    if (arrowsContainer.current) {\n                        arrowsContainer.current.style.display = \"none\";\n                    }\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"arrow next\",\n                        onClick: handlePrevClick,\n                        style: {\n                            cursor: \"pointer\",\n                            marginRight: \"250px\",\n                            fontSize: \"100px\",\n                            color: \"white\",\n                            position: \"absolute\",\n                            right: \"0\",\n                            display: \"block\"\n                        },\n                        children: \"‹\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"arrow prev\",\n                        onClick: handleNextClick,\n                        style: {\n                            cursor: \"pointer\",\n                            marginLeft: \"250px\",\n                            fontSize: \"100px\",\n                            color: \"white\",\n                            position: \"absolute\",\n                            left: \"0\",\n                            display: \"block\"\n                        },\n                        children: \"›\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pagination-dots\",\n                style: {\n                    textAlign: \"center\",\n                    position: \"absolute\",\n                    bottom: \"10px\",\n                    width: \"100%\"\n                },\n                children: images.map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"dot \".concat(index === currentImageIndex ? \"active\" : \"\"),\n                        onClick: ()=>setCurrentImageIndex(index),\n                        style: {\n                            cursor: \"pointer\",\n                            display: \"inline-block\",\n                            width: \"10px\",\n                            height: \"10px\",\n                            backgroundColor: index === currentImageIndex ? \"black\" : \"gray\",\n                            borderRadius: \"50%\",\n                            margin: \"5px\"\n                        }\n                    }, index, false, {\n                        fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 122,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 120,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PhotoSlider, \"8O/Wr9JeZz7b9WAIbNhlX1b3ADg=\");\n_c = PhotoSlider;\nconst Navbar = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        class: \"navbar\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"menu-toggle\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"bar\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 146,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"bar\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 147,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"bar\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 148,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 145,\n                columnNumber: 3\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                class: \"menu\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#\",\n                            children: \"Home\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 151,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 151,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#\",\n                            children: \"About\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 152,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 152,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#\",\n                            children: \"Services\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 153,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 153,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#\",\n                            children: \"Contact\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 154,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 154,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 150,\n                columnNumber: 3\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 144,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = Navbar;\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                children: \"Home | My Website\"\n            }, void 0, false, {\n                fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 163,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Navbar, {}, void 0, false, {\n                fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 163,\n                columnNumber: 45\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 163,\n                columnNumber: 55\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"heading\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    style: {\n                        \"textAlign\": \"center\",\n                        \"color\": \"white\",\n                        \"paddingTop\": \"50px\"\n                    },\n                    className: \"text-4xl font-bold text-gray-800\",\n                    children: \"This one of my assignment website !\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 163,\n                    columnNumber: 86\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 163,\n                columnNumber: 61\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 163,\n                columnNumber: 251\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_cards__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 163,\n                columnNumber: 257\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PhotoSlider, {}, void 0, false, {\n                fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 163,\n                columnNumber: 264\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 163,\n                columnNumber: 278\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c2 = Home;\n/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n    src: \"/logo.png\",\n    width: 240,\n    height: 100,\n    className: \"NavImg\",\n    alt: \"Company Logo\"\n}, void 0, false, {\n    fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n    lineNumber: 165,\n    columnNumber: 1\n}, undefined);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"PhotoSlider\");\n$RefreshReg$(_c1, \"Navbar\");\n$RefreshReg$(_c2, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNENBQTRDOztBQUVsQjtBQUM2QjtBQUN4QjtBQUNEO0FBRTlCLE1BQU1PLGNBQWM7O0lBQ2xCLHVEQUF1RDtJQUN2RCxNQUFNQyxTQUFTO1FBQ2I7UUFFQTtRQUVBO1FBRUE7UUFFQTtLQUNEO0lBQ0QsTUFBTSxDQUFDQyxtQkFBbUJDLHFCQUFxQixHQUFHTiwrQ0FBUUEsQ0FBQztJQUMzRCxNQUFNTyxXQUFXUiw2Q0FBTUEsQ0FBMEI7SUFFakQsTUFBTVMsa0JBQWtCO1FBQ3RCLE1BQU1DLFlBQVksQ0FBQ0osb0JBQW9CLEtBQUtELE9BQU9NLE1BQU07UUFDekRKLHFCQUFxQkc7SUFDdkI7SUFFQSxNQUFNRSxrQkFBa0I7UUFDdEIsTUFBTUMsWUFBWSxDQUFDUCxvQkFBb0IsSUFBSUQsT0FBT00sTUFBTSxJQUFJTixPQUFPTSxNQUFNO1FBQ3pFSixxQkFBcUJNO0lBQ3ZCO0lBRUFkLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSVMsU0FBU00sT0FBTyxFQUFFO1lBQ3BCTixTQUFTTSxPQUFPLENBQUNDLEtBQUssQ0FBQ0MsT0FBTyxHQUFHO1lBQ2pDQyxXQUFXO2dCQUNULElBQUlULFNBQVNNLE9BQU8sRUFBRTtvQkFDcEJOLFNBQVNNLE9BQU8sQ0FBQ0ksR0FBRyxHQUFHYixNQUFNLENBQUNDLGtCQUFrQjtvQkFDaERFLFNBQVNNLE9BQU8sQ0FBQ0ssR0FBRyxHQUFHLFNBQStCLE9BQXRCYixvQkFBb0I7b0JBQ3BERSxTQUFTTSxPQUFPLENBQUNDLEtBQUssQ0FBQ0MsT0FBTyxHQUFHO2dCQUNuQztZQUNGLEdBQUcsTUFBTSwyQ0FBMkM7UUFDdEQ7SUFDRixHQUFHO1FBQUNWO1FBQW1CRDtLQUFPO0lBRTlCLE1BQU1lLGtCQUFrQnBCLDZDQUFNQSxDQUF3QjtJQUV0REQsZ0RBQVNBLENBQUM7UUFDUix3Q0FBd0M7UUFDeEMsTUFBTXNCLGdCQUFnQkMsWUFBWTtZQUNoQyxNQUFNWixZQUFZLENBQUNKLG9CQUFvQixLQUFLRCxPQUFPTSxNQUFNO1lBQ3pESixxQkFBcUJHO1FBQ3ZCLEdBQUc7UUFFSCxPQUFPO1lBQ0wsaURBQWlEO1lBQ2pEYSxjQUFjRjtRQUNoQjtJQUNGLEdBQUc7UUFBQ2Y7UUFBbUJEO0tBQU87SUFFOUIscUJBQ0UsOERBQUNtQjtRQUFJQyxXQUFVO1FBQWVWLE9BQU87WUFBRVcsVUFBVTtZQUFZQyxTQUFTO1lBQVFDLFlBQVk7WUFBVUMsZ0JBQWdCO1FBQVM7OzBCQUMzSCw4REFBQ0M7Z0JBQ0NDLEtBQUt2QjtnQkFDTFcsS0FBSyxTQUErQixPQUF0QmIsb0JBQW9CO2dCQUNsQ1MsT0FBTztvQkFBRWlCLFlBQVk7b0JBQWdCQyxPQUFPO29CQUFTQyxRQUFRO2dCQUFROzs7Ozs7MEJBRXZFLDhEQUFDVjtnQkFDQ0MsV0FBVTtnQkFDVlYsT0FBTztvQkFDTFcsVUFBVTtvQkFDVlMsS0FBSztvQkFDTEMsV0FBVztvQkFDWFQsU0FBUztvQkFDVEMsWUFBWTtnQkFDZDtnQkFDQVMsY0FBYztvQkFDWixJQUFJakIsZ0JBQWdCTixPQUFPLEVBQUU7d0JBQzNCTSxnQkFBZ0JOLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDWSxPQUFPLEdBQUc7b0JBQzFDO2dCQUNGO2dCQUNBVyxjQUFjO29CQUNaLElBQUlsQixnQkFBZ0JOLE9BQU8sRUFBRTt3QkFDM0JNLGdCQUFnQk4sT0FBTyxDQUFDQyxLQUFLLENBQUNZLE9BQU8sR0FBRztvQkFDMUM7Z0JBQ0Y7O2tDQUVBLDhEQUFDWTt3QkFDQ2QsV0FBVTt3QkFDVmUsU0FBUzVCO3dCQUNURyxPQUFPOzRCQUNMMEIsUUFBUTs0QkFDUkMsYUFBYTs0QkFDYkMsVUFBVTs0QkFDVkMsT0FBTzs0QkFDUGxCLFVBQVU7NEJBQ1ZtQixPQUFPOzRCQUNQbEIsU0FBUzt3QkFDWDtrQ0FDRDs7Ozs7O2tDQUdELDhEQUFDWTt3QkFDQ2QsV0FBVTt3QkFDVmUsU0FBUy9CO3dCQUNUTSxPQUFPOzRCQUNMMEIsUUFBUTs0QkFDUkssWUFBWTs0QkFDWkgsVUFBVTs0QkFDVkMsT0FBTzs0QkFDUGxCLFVBQVU7NEJBQ1ZxQixNQUFNOzRCQUNOcEIsU0FBUzt3QkFDWDtrQ0FDRDs7Ozs7Ozs7Ozs7OzBCQUlILDhEQUFDSDtnQkFBSUMsV0FBVTtnQkFBa0JWLE9BQU87b0JBQUVpQyxXQUFXO29CQUFVdEIsVUFBVTtvQkFBWXVCLFFBQVE7b0JBQVFoQixPQUFPO2dCQUFPOzBCQUNoSDVCLE9BQU82QyxHQUFHLENBQUMsQ0FBQ0MsR0FBR0Msc0JBQ2QsOERBQUNiO3dCQUVDZCxXQUFXLE9BQW1ELE9BQTVDMkIsVUFBVTlDLG9CQUFvQixXQUFXO3dCQUMzRGtDLFNBQVMsSUFBTWpDLHFCQUFxQjZDO3dCQUNwQ3JDLE9BQU87NEJBQ0wwQixRQUFROzRCQUNSZCxTQUFTOzRCQUNUTSxPQUFPOzRCQUNQQyxRQUFROzRCQUNSbUIsaUJBQWlCRCxVQUFVOUMsb0JBQW9CLFVBQVU7NEJBQ3pEZ0QsY0FBYzs0QkFDZEMsUUFBUTt3QkFDVjt1QkFYS0g7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQmpCO0dBcElNaEQ7S0FBQUE7QUFxSUMsTUFBTW9ELFNBQW1CO0lBQzlCLHFCQUVFLDhEQUFDQztRQUFJQyxPQUFNOzswQkFDYiw4REFBQ2xDO2dCQUFJa0MsT0FBTTs7a0NBQ1QsOERBQUNsQzt3QkFBSWtDLE9BQU07Ozs7OztrQ0FDWCw4REFBQ2xDO3dCQUFJa0MsT0FBTTs7Ozs7O2tDQUNYLDhEQUFDbEM7d0JBQUlrQyxPQUFNOzs7Ozs7Ozs7Ozs7MEJBRWIsOERBQUNDO2dCQUFHRCxPQUFNOztrQ0FDUiw4REFBQ0U7a0NBQUcsNEVBQUNDOzRCQUFFQyxNQUFLO3NDQUFJOzs7Ozs7Ozs7OztrQ0FDaEIsOERBQUNGO2tDQUFHLDRFQUFDQzs0QkFBRUMsTUFBSztzQ0FBSTs7Ozs7Ozs7Ozs7a0NBQ2hCLDhEQUFDRjtrQ0FBRyw0RUFBQ0M7NEJBQUVDLE1BQUs7c0NBQUk7Ozs7Ozs7Ozs7O2tDQUNoQiw4REFBQ0Y7a0NBQUcsNEVBQUNDOzRCQUFFQyxNQUFLO3NDQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1wQixFQUFFO01BbkJXTjtBQXFCRSxTQUFTTztJQUN0QixxQkFBUTs7MEJBQUUsOERBQUNDOzBCQUFNOzs7Ozs7MEJBQXlCLDhEQUFDUjs7Ozs7MEJBQVMsOERBQUNTOzs7OzswQkFBSyw4REFBQ3pDO2dCQUFJQyxXQUFVOzBCQUFVLDRFQUFDeUM7b0JBQUduRCxPQUFPO3dCQUFFLGFBQVk7d0JBQVUsU0FBUTt3QkFBUSxjQUFhO29CQUFPO29CQUFHVSxXQUFVOzhCQUFtQzs7Ozs7Ozs7Ozs7MEJBQThDLDhEQUFDd0M7Ozs7OzBCQUFLLDhEQUFDcEUsOENBQUlBOzs7OzswQkFBRSw4REFBQ087Ozs7OzBCQUFhLDhEQUFDRCwrQ0FBTUE7Ozs7Ozs7QUFDNVI7TUFGd0I0RDtjQUd4Qiw4REFBQzdELG1EQUFLQTtJQUFDZ0IsS0FBSTtJQUFZZSxPQUFPO0lBQUtDLFFBQVE7SUFBS1QsV0FBVTtJQUFTTixLQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAbmV4dC9uZXh0L25vLWltZy1lbGVtZW50ICovXG5cInVzZSBjbGllbnRcIlxuaW1wb3J0IENhcmQgZnJvbSBcIi4vY2FyZHNcIlxuaW1wb3J0IFJlYWN0LHt1c2VFZmZlY3QsIHVzZVJlZix1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuY29uc3QgUGhvdG9TbGlkZXIgPSAoKSA9PiB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgY29uc3QgaW1hZ2VzID0gW1xuICAgICdodHRwczovL2Zhc3RseS5waWNzdW0ucGhvdG9zL2lkLzk4My80MDAvNDAwLmpwZz9obWFjPWpvZGh3cExWd1RTLWVQOUJiTkc5SkdWWWlta1lEamg1MkdpMXpfTUt6bkEnLFxuXG4gICAgJ2h0dHBzOi8vZmFzdGx5LnBpY3N1bS5waG90b3MvaWQvOTk4LzQwMC80MDAuanBnP2htYWM9V2V0WjBhcTd6TmxYMUxISXNHU3pad1Y1TWRIZnl0eXB5X2ppOElVNW9jRScsXG5cbiAgICAnaHR0cHM6Ly9mYXN0bHkucGljc3VtLnBob3Rvcy9pZC85NjYvNDAwLzQwMC5qcGc/aG1hYz12VGZkbDdYVUFYYm5maU9RcmFUXzRyT3MtY1VQaHNvN1pNNlRpaHZrRmhrJyxcblxuICAgICdodHRwczovL2Zhc3RseS5waWNzdW0ucGhvdG9zL2lkLzQ0NC80MDAvNDAwLmpwZz9obWFjPWYyclNVUGVWeFN3MTJRVTB1V3dyWlRGVVdObzlEWHRPWFhRb1RGZWZvS1UnLFxuXG4gICAgJ2h0dHBzOi8vZmFzdGx5LnBpY3N1bS5waG90b3MvaWQvMTAxOC80MDAvNDAwLmpwZz9obWFjPU13SEpvTWFWWHNCYnFnLUxGb0RWTDZQOFRDRGtTRWlrRXhwdENra0hFU1EnXG4gIF1cbiAgY29uc3QgW2N1cnJlbnRJbWFnZUluZGV4LCBzZXRDdXJyZW50SW1hZ2VJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgaW1hZ2VSZWYgPSB1c2VSZWY8SFRNTEltYWdlRWxlbWVudCB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZU5leHRDbGljayA9ICgpID0+IHtcbiAgICBjb25zdCBuZXh0SW5kZXggPSAoY3VycmVudEltYWdlSW5kZXggKyAxKSAlIGltYWdlcy5sZW5ndGg7XG4gICAgc2V0Q3VycmVudEltYWdlSW5kZXgobmV4dEluZGV4KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVQcmV2Q2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJldkluZGV4ID0gKGN1cnJlbnRJbWFnZUluZGV4IC0gMSArIGltYWdlcy5sZW5ndGgpICUgaW1hZ2VzLmxlbmd0aDtcbiAgICBzZXRDdXJyZW50SW1hZ2VJbmRleChwcmV2SW5kZXgpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGltYWdlUmVmLmN1cnJlbnQpIHtcbiAgICAgIGltYWdlUmVmLmN1cnJlbnQuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoaW1hZ2VSZWYuY3VycmVudCkge1xuICAgICAgICAgIGltYWdlUmVmLmN1cnJlbnQuc3JjID0gaW1hZ2VzW2N1cnJlbnRJbWFnZUluZGV4XTtcbiAgICAgICAgICBpbWFnZVJlZi5jdXJyZW50LmFsdCA9IGBJbWFnZSAke2N1cnJlbnRJbWFnZUluZGV4ICsgMX1gO1xuICAgICAgICAgIGltYWdlUmVmLmN1cnJlbnQuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgfVxuICAgICAgfSwgMzAwKTsgLy8gQWRqdXN0IHRoZSB0cmFuc2l0aW9uIGR1cmF0aW9uIGFzIG5lZWRlZFxuICAgIH1cbiAgfSwgW2N1cnJlbnRJbWFnZUluZGV4LCBpbWFnZXNdKTtcblxuICBjb25zdCBhcnJvd3NDb250YWluZXIgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQgfCBudWxsPihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIEF1dG8tdHJhbnNsYXRlIGltYWdlcyBldmVyeSA1IHNlY29uZHNcbiAgICBjb25zdCBhdXRvVHJhbnNsYXRlID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgY29uc3QgbmV4dEluZGV4ID0gKGN1cnJlbnRJbWFnZUluZGV4ICsgMSkgJSBpbWFnZXMubGVuZ3RoO1xuICAgICAgc2V0Q3VycmVudEltYWdlSW5kZXgobmV4dEluZGV4KTtcbiAgICB9LCA1MDAwKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAvLyBDbGVhciB0aGUgaW50ZXJ2YWwgd2hlbiB0aGUgY29tcG9uZW50IHVubW91bnRzXG4gICAgICBjbGVhckludGVydmFsKGF1dG9UcmFuc2xhdGUpO1xuICAgIH07XG4gIH0sIFtjdXJyZW50SW1hZ2VJbmRleCwgaW1hZ2VzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBob3RvLXNsaWRlclwiIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XG4gICAgICA8aW1nXG4gICAgICAgIHJlZj17aW1hZ2VSZWZ9XG4gICAgICAgIGFsdD17YEltYWdlICR7Y3VycmVudEltYWdlSW5kZXggKyAxfWB9XG4gICAgICAgIHN0eWxlPXt7IHRyYW5zaXRpb246ICdvcGFjaXR5IDAuM3MnLCB3aWR0aDogJzYwMHB4JywgaGVpZ2h0OiAnNTAwcHgnIH19XG4gICAgICAvPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJhcnJvd3NcIlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgIHRvcDogJzUwJScsXG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKScsXG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICB9fVxuICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHtcbiAgICAgICAgICBpZiAoYXJyb3dzQ29udGFpbmVyLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGFycm93c0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB7XG4gICAgICAgICAgaWYgKGFycm93c0NvbnRhaW5lci5jdXJyZW50KSB7XG4gICAgICAgICAgICBhcnJvd3NDb250YWluZXIuY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBjbGFzc05hbWU9XCJhcnJvdyBuZXh0XCJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVQcmV2Q2xpY2t9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcyNTBweCcsXG4gICAgICAgICAgICBmb250U2l6ZTogJzEwMHB4JywgLy8gQWRqdXN0IGFycm93IHNpemVcbiAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICByaWdodDogJzAnLFxuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgJiM4MjQ5O1xuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYXJyb3cgcHJldlwiXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlTmV4dENsaWNrfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICcyNTBweCcsXG4gICAgICAgICAgICBmb250U2l6ZTogJzEwMHB4JywgLy8gQWRqdXN0IGFycm93IHNpemVcbiAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICBsZWZ0OiAnMCcsXG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICAmIzgyNTA7XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uLWRvdHNcIiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBwb3NpdGlvbjogJ2Fic29sdXRlJywgYm90dG9tOiAnMTBweCcsIHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgIHtpbWFnZXMubWFwKChfLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgZG90ICR7aW5kZXggPT09IGN1cnJlbnRJbWFnZUluZGV4ID8gJ2FjdGl2ZScgOiAnJ31gfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q3VycmVudEltYWdlSW5kZXgoaW5kZXgpfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICB3aWR0aDogJzEwcHgnLFxuICAgICAgICAgICAgICBoZWlnaHQ6ICcxMHB4JyxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpbmRleCA9PT0gY3VycmVudEltYWdlSW5kZXggPyAnYmxhY2snIDogJ2dyYXknLFxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgICAgICAgICBtYXJnaW46ICc1cHgnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuZXhwb3J0IGNvbnN0IE5hdmJhcjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgXG4gICAgPG5hdiBjbGFzcz1cIm5hdmJhclwiPlxuICA8ZGl2IGNsYXNzPVwibWVudS10b2dnbGVcIj5cbiAgICA8ZGl2IGNsYXNzPVwiYmFyXCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImJhclwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJiYXJcIj48L2Rpdj5cbiAgPC9kaXY+XG4gIDx1bCBjbGFzcz1cIm1lbnVcIj5cbiAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ib21lPC9hPjwvbGk+XG4gICAgPGxpPjxhIGhyZWY9XCIjXCI+QWJvdXQ8L2E+PC9saT5cbiAgICA8bGk+PGEgaHJlZj1cIiNcIj5TZXJ2aWNlczwvYT48L2xpPlxuICAgIDxsaT48YSBocmVmPVwiI1wiPkNvbnRhY3Q8L2E+PC9saT5cbiAgPC91bD5cbjwvbmF2PlxuXG4gICk7XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoPD48dGl0bGU+SG9tZSB8IE15IFdlYnNpdGU8L3RpdGxlPjxOYXZiYXIgLz48YnIgLz48ZGl2IGNsYXNzTmFtZT1cImhlYWRpbmdcIj48aDEgc3R5bGU9e3sgJ3RleHRBbGlnbic6J2NlbnRlcicsICdjb2xvcic6J3doaXRlJywncGFkZGluZ1RvcCc6JzUwcHgnIH19IGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktODAwXCI+VGhpcyBvbmUgb2YgbXkgYXNzaWdubWVudCB3ZWJzaXRlICE8L2gxPjwvZGl2PjxiciAvPjxDYXJkLz48UGhvdG9TbGlkZXIvPjxGb290ZXIvPjwvPilcbn1cbjxJbWFnZSBzcmM9XCIvbG9nby5wbmdcIiB3aWR0aD17MjQwfSBoZWlnaHQ9ezEwMH0gY2xhc3NOYW1lPVwiTmF2SW1nXCIgYWx0PVwiQ29tcGFueSBMb2dvXCIgLz4gICJdLCJuYW1lcyI6WyJDYXJkIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiRm9vdGVyIiwiUGhvdG9TbGlkZXIiLCJpbWFnZXMiLCJjdXJyZW50SW1hZ2VJbmRleCIsInNldEN1cnJlbnRJbWFnZUluZGV4IiwiaW1hZ2VSZWYiLCJoYW5kbGVOZXh0Q2xpY2siLCJuZXh0SW5kZXgiLCJsZW5ndGgiLCJoYW5kbGVQcmV2Q2xpY2siLCJwcmV2SW5kZXgiLCJjdXJyZW50Iiwic3R5bGUiLCJvcGFjaXR5Iiwic2V0VGltZW91dCIsInNyYyIsImFsdCIsImFycm93c0NvbnRhaW5lciIsImF1dG9UcmFuc2xhdGUiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJkaXYiLCJjbGFzc05hbWUiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJpbWciLCJyZWYiLCJ0cmFuc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJ0b3AiLCJ0cmFuc2Zvcm0iLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJzcGFuIiwib25DbGljayIsImN1cnNvciIsIm1hcmdpblJpZ2h0IiwiZm9udFNpemUiLCJjb2xvciIsInJpZ2h0IiwibWFyZ2luTGVmdCIsImxlZnQiLCJ0ZXh0QWxpZ24iLCJib3R0b20iLCJtYXAiLCJfIiwiaW5kZXgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJtYXJnaW4iLCJOYXZiYXIiLCJuYXYiLCJjbGFzcyIsInVsIiwibGkiLCJhIiwiaHJlZiIsIkhvbWUiLCJ0aXRsZSIsImJyIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});