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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Navbar: function() { return /* binding */ Navbar; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cards */ \"(app-pages-browser)/./src/app/cards.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer */ \"(app-pages-browser)/./src/app/footer.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* eslint-disable @next/next/no-img-element */ /* __next_internal_client_entry_do_not_use__ Navbar,default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst PhotoSlider = ()=>{\n    _s();\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    const images = [\n        \"https://fastly.picsum.photos/id/983/400/400.jpg?hmac=jodhwpLVwTS-eP9BbNG9JGVYimkYDjh52Gi1z_MKznA\",\n        \"https://fastly.picsum.photos/id/998/400/400.jpg?hmac=WetZ0aq7zNlX1LHIsGSzZwV5MdHfytypy_ji8IU5ocE\",\n        \"https://fastly.picsum.photos/id/966/400/400.jpg?hmac=vTfdl7XUAXbnfiOQraT_4rOs-cUPhso7ZM6TihvkFhk\",\n        \"https://fastly.picsum.photos/id/444/400/400.jpg?hmac=f2rSUPeVxSw12QU0uWwrZTFUWNo9DXtOXXQoTFefoKU\",\n        \"https://fastly.picsum.photos/id/1018/400/400.jpg?hmac=MwHJoMaVXsBbqg-LFoDVL6P8TCDkSEikExptCkkHESQ\"\n    ];\n    const [currentImageIndex, setCurrentImageIndex] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const imageRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const handleNextClick = ()=>{\n        const nextIndex = (currentImageIndex + 1) % images.length;\n        setCurrentImageIndex(nextIndex);\n    };\n    const handlePrevClick = ()=>{\n        const prevIndex = (currentImageIndex - 1 + images.length) % images.length;\n        setCurrentImageIndex(prevIndex);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (imageRef.current) {\n            imageRef.current.style.opacity = \"0\";\n            setTimeout(()=>{\n                if (imageRef.current) {\n                    imageRef.current.src = images[currentImageIndex];\n                    imageRef.current.alt = \"Image \".concat(currentImageIndex + 1);\n                    imageRef.current.style.opacity = \"1\";\n                }\n            }, 300); // Adjust the transition duration as needed\n        }\n    }, [\n        currentImageIndex,\n        images\n    ]);\n    const arrowsContainer = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // Auto-translate images every 5 seconds\n        const autoTranslate = setInterval(()=>{\n            const nextIndex = (currentImageIndex + 1) % images.length;\n            setCurrentImageIndex(nextIndex);\n        }, 5000);\n        return ()=>{\n            // Clear the interval when the component unmounts\n            clearInterval(autoTranslate);\n        };\n    }, [\n        currentImageIndex,\n        images\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"photo-slider\",\n        style: {\n            position: \"relative\",\n            display: \"flex\",\n            alignItems: \"center\",\n            justifyContent: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                ref: imageRef,\n                alt: \"Image \".concat(currentImageIndex + 1),\n                style: {\n                    transition: \"opacity 0.3s\",\n                    width: \"600px\",\n                    height: \"500px\"\n                }\n            }, void 0, false, {\n                fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"arrows\",\n                style: {\n                    position: \"absolute\",\n                    top: \"50%\",\n                    transform: \"translateY(-50%)\",\n                    display: \"flex\",\n                    alignItems: \"center\"\n                },\n                onMouseEnter: ()=>{\n                    if (arrowsContainer.current) {\n                        arrowsContainer.current.style.display = \"block\";\n                    }\n                },\n                onMouseLeave: ()=>{\n                    if (arrowsContainer.current) {\n                        arrowsContainer.current.style.display = \"none\";\n                    }\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"arrow next\",\n                        onClick: handlePrevClick,\n                        style: {\n                            cursor: \"pointer\",\n                            marginRight: \"250px\",\n                            fontSize: \"100px\",\n                            color: \"white\",\n                            position: \"absolute\",\n                            right: \"0\",\n                            display: \"block\"\n                        },\n                        children: \"‹\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"arrow prev\",\n                        onClick: handleNextClick,\n                        style: {\n                            cursor: \"pointer\",\n                            marginLeft: \"250px\",\n                            fontSize: \"100px\",\n                            color: \"white\",\n                            position: \"absolute\",\n                            left: \"0\",\n                            display: \"block\"\n                        },\n                        children: \"›\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pagination-dots\",\n                style: {\n                    textAlign: \"center\",\n                    position: \"absolute\",\n                    bottom: \"10px\",\n                    width: \"100%\"\n                },\n                children: images.map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"dot \".concat(index === currentImageIndex ? \"active\" : \"\"),\n                        onClick: ()=>setCurrentImageIndex(index),\n                        style: {\n                            cursor: \"pointer\",\n                            display: \"inline-block\",\n                            width: \"10px\",\n                            height: \"10px\",\n                            backgroundColor: index === currentImageIndex ? \"black\" : \"gray\",\n                            borderRadius: \"50%\",\n                            margin: \"5px\"\n                        }\n                    }, index, false, {\n                        fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 122,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 120,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PhotoSlider, \"8O/Wr9JeZz7b9WAIbNhlX1b3ADg=\");\n_c = PhotoSlider;\nconst menu_btn = document.querySelector(\".hamburger\");\nif (menu_btn) {\n    menu_btn.addEventListener(\"click\", function() {\n        menu_btn.classList.toggle(\"is-active\");\n    });\n}\nconst Navbar = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: \"navbar\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: \"/logo.png\",\n                                width: 240,\n                                height: 100,\n                                className: \"NavImg\",\n                                alt: \"Company Logo\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 151,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"NavLinks\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    href: \"http://localhost:3000/\",\n                                    children: \"Home\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 152,\n                                    columnNumber: 34\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 152,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"NavLinks\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    href: \"/about\",\n                                    children: \"About Us\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 153,\n                                    columnNumber: 34\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 153,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"NavLinks\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    href: \"/faqs\",\n                                    children: \"FAQs\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 154,\n                                    columnNumber: 34\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 154,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"NavLinks\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    href: \"/contact\",\n                                    children: \"Contact Us\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 155,\n                                    columnNumber: 34\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 155,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 150,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"hamburger\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bar\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 158,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 157,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 149,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"\"\n            }, void 0, false, {\n                fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 161,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c1 = Navbar;\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                children: \"Home | My Website\"\n            }, void 0, false, {\n                fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 168,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Navbar, {}, void 0, false, {\n                fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 168,\n                columnNumber: 45\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 168,\n                columnNumber: 55\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"heading\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    style: {\n                        \"textAlign\": \"center\",\n                        \"color\": \"white\",\n                        \"paddingTop\": \"50px\"\n                    },\n                    className: \"text-4xl font-bold text-gray-800\",\n                    children: \"This one of my assignment website !\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 168,\n                    columnNumber: 86\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 168,\n                columnNumber: 61\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 168,\n                columnNumber: 251\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_cards__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 168,\n                columnNumber: 257\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PhotoSlider, {}, void 0, false, {\n                fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 168,\n                columnNumber: 264\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\web\\\\learn-next-js\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 168,\n                columnNumber: 278\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c2 = Home;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"PhotoSlider\");\n$RefreshReg$(_c1, \"Navbar\");\n$RefreshReg$(_c2, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBNEM7O0FBRWxCO0FBQzZCO0FBQ3hCO0FBQ0Q7QUFDRDtBQUM3QixNQUFNUSxjQUFjOztJQUNsQix1REFBdUQ7SUFDdkQsTUFBTUMsU0FBUztRQUNiO1FBRUE7UUFFQTtRQUVBO1FBRUE7S0FDRDtJQUNELE1BQU0sQ0FBQ0MsbUJBQW1CQyxxQkFBcUIsR0FBR1AsK0NBQVFBLENBQUM7SUFDM0QsTUFBTVEsV0FBV1QsNkNBQU1BLENBQTBCO0lBRWpELE1BQU1VLGtCQUFrQjtRQUN0QixNQUFNQyxZQUFZLENBQUNKLG9CQUFvQixLQUFLRCxPQUFPTSxNQUFNO1FBQ3pESixxQkFBcUJHO0lBQ3ZCO0lBRUEsTUFBTUUsa0JBQWtCO1FBQ3RCLE1BQU1DLFlBQVksQ0FBQ1Asb0JBQW9CLElBQUlELE9BQU9NLE1BQU0sSUFBSU4sT0FBT00sTUFBTTtRQUN6RUoscUJBQXFCTTtJQUN2QjtJQUVBZixnREFBU0EsQ0FBQztRQUNSLElBQUlVLFNBQVNNLE9BQU8sRUFBRTtZQUNwQk4sU0FBU00sT0FBTyxDQUFDQyxLQUFLLENBQUNDLE9BQU8sR0FBRztZQUNqQ0MsV0FBVztnQkFDVCxJQUFJVCxTQUFTTSxPQUFPLEVBQUU7b0JBQ3BCTixTQUFTTSxPQUFPLENBQUNJLEdBQUcsR0FBR2IsTUFBTSxDQUFDQyxrQkFBa0I7b0JBQ2hERSxTQUFTTSxPQUFPLENBQUNLLEdBQUcsR0FBRyxTQUErQixPQUF0QmIsb0JBQW9CO29CQUNwREUsU0FBU00sT0FBTyxDQUFDQyxLQUFLLENBQUNDLE9BQU8sR0FBRztnQkFDbkM7WUFDRixHQUFHLE1BQU0sMkNBQTJDO1FBQ3REO0lBQ0YsR0FBRztRQUFDVjtRQUFtQkQ7S0FBTztJQUU5QixNQUFNZSxrQkFBa0JyQiw2Q0FBTUEsQ0FBd0I7SUFFdERELGdEQUFTQSxDQUFDO1FBQ1Isd0NBQXdDO1FBQ3hDLE1BQU11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QVU7MENBQVksNEVBQUN0QixrREFBSUE7b0NBQUM4RCxNQUFLOzhDQUFTOzs7Ozs7Ozs7OzswQ0FDN0MsOERBQUNEO2dDQUFFdkMsV0FBVTswQ0FBWSw0RUFBQ3RCLGtEQUFJQTtvQ0FBQzhELE1BQUs7OENBQVE7Ozs7Ozs7Ozs7OzBDQUM1Qyw4REFBQ0Q7Z0NBQUV2QyxXQUFVOzBDQUFZLDRFQUFDdEIsa0RBQUlBO29DQUFDOEQsTUFBSzs4Q0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBRWpELDhEQUFDQzt3QkFBT3pDLFdBQVU7a0NBQ2hCLDRFQUFDRDs0QkFBSUMsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR25CLDhEQUFDc0M7Z0JBQUl0QyxXQUFVOzs7Ozs7OztBQUluQixFQUFFO01BbEJXcUM7QUFvQkUsU0FBU0s7SUFDdEIscUJBQVE7OzBCQUFFLDhEQUFDQzswQkFBTTs7Ozs7OzBCQUF5Qiw4REFBQ047Ozs7OzBCQUFTLDhEQUFDTzs7Ozs7MEJBQUssOERBQUM3QztnQkFBSUMsV0FBVTswQkFBVSw0RUFBQzZDO29CQUFHdkQsT0FBTzt3QkFBRSxhQUFZO3dCQUFVLFNBQVE7d0JBQVEsY0FBYTtvQkFBTztvQkFBR1UsV0FBVTs4QkFBbUM7Ozs7Ozs7Ozs7OzBCQUE4Qyw4REFBQzRDOzs7OzswQkFBSyw4REFBQ3pFLDhDQUFJQTs7Ozs7MEJBQUUsOERBQUNROzs7OzswQkFBYSw4REFBQ0YsK0NBQU1BOzs7Ozs7O0FBQzVSO01BRndCaUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEBuZXh0L25leHQvbm8taW1nLWVsZW1lbnQgKi9cblwidXNlIGNsaWVudFwiXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi9jYXJkc1wiXG5pbXBvcnQgUmVhY3Qse3VzZUVmZmVjdCwgdXNlUmVmLHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vZm9vdGVyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5jb25zdCBQaG90b1NsaWRlciA9ICgpID0+IHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICBjb25zdCBpbWFnZXMgPSBbXG4gICAgJ2h0dHBzOi8vZmFzdGx5LnBpY3N1bS5waG90b3MvaWQvOTgzLzQwMC80MDAuanBnP2htYWM9am9kaHdwTFZ3VFMtZVA5QmJORzlKR1ZZaW1rWURqaDUyR2kxel9NS3puQScsXG5cbiAgICAnaHR0cHM6Ly9mYXN0bHkucGljc3VtLnBob3Rvcy9pZC85OTgvNDAwLzQwMC5qcGc/aG1hYz1XZXRaMGFxN3pObFgxTEhJc0dTelp3VjVNZEhmeXR5cHlfamk4SVU1b2NFJyxcblxuICAgICdodHRwczovL2Zhc3RseS5waWNzdW0ucGhvdG9zL2lkLzk2Ni80MDAvNDAwLmpwZz9obWFjPXZUZmRsN1hVQVhibmZpT1FyYVRfNHJPcy1jVVBoc283Wk02VGlodmtGaGsnLFxuXG4gICAgJ2h0dHBzOi8vZmFzdGx5LnBpY3N1bS5waG90b3MvaWQvNDQ0LzQwMC80MDAuanBnP2htYWM9ZjJyU1VQZVZ4U3cxMlFVMHVXd3JaVEZVV05vOURYdE9YWFFvVEZlZm9LVScsXG5cbiAgICAnaHR0cHM6Ly9mYXN0bHkucGljc3VtLnBob3Rvcy9pZC8xMDE4LzQwMC80MDAuanBnP2htYWM9TXdISm9NYVZYc0JicWctTEZvRFZMNlA4VENEa1NFaWtFeHB0Q2trSEVTUSdcbiAgXVxuICBjb25zdCBbY3VycmVudEltYWdlSW5kZXgsIHNldEN1cnJlbnRJbWFnZUluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBpbWFnZVJlZiA9IHVzZVJlZjxIVE1MSW1hZ2VFbGVtZW50IHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlTmV4dENsaWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IG5leHRJbmRleCA9IChjdXJyZW50SW1hZ2VJbmRleCArIDEpICUgaW1hZ2VzLmxlbmd0aDtcbiAgICBzZXRDdXJyZW50SW1hZ2VJbmRleChuZXh0SW5kZXgpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVByZXZDbGljayA9ICgpID0+IHtcbiAgICBjb25zdCBwcmV2SW5kZXggPSAoY3VycmVudEltYWdlSW5kZXggLSAxICsgaW1hZ2VzLmxlbmd0aCkgJSBpbWFnZXMubGVuZ3RoO1xuICAgIHNldEN1cnJlbnRJbWFnZUluZGV4KHByZXZJbmRleCk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaW1hZ2VSZWYuY3VycmVudCkge1xuICAgICAgaW1hZ2VSZWYuY3VycmVudC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmIChpbWFnZVJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgaW1hZ2VSZWYuY3VycmVudC5zcmMgPSBpbWFnZXNbY3VycmVudEltYWdlSW5kZXhdO1xuICAgICAgICAgIGltYWdlUmVmLmN1cnJlbnQuYWx0ID0gYEltYWdlICR7Y3VycmVudEltYWdlSW5kZXggKyAxfWA7XG4gICAgICAgICAgaW1hZ2VSZWYuY3VycmVudC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICB9XG4gICAgICB9LCAzMDApOyAvLyBBZGp1c3QgdGhlIHRyYW5zaXRpb24gZHVyYXRpb24gYXMgbmVlZGVkXG4gICAgfVxuICB9LCBbY3VycmVudEltYWdlSW5kZXgsIGltYWdlc10pO1xuXG4gIGNvbnN0IGFycm93c0NvbnRhaW5lciA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudCB8IG51bGw+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gQXV0by10cmFuc2xhdGUgaW1hZ2VzIGV2ZXJ5IDUgc2Vjb25kc1xuICAgIGNvbnN0IGF1dG9UcmFuc2xhdGUgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBjb25zdCBuZXh0SW5kZXggPSAoY3VycmVudEltYWdlSW5kZXggKyAxKSAlIGltYWdlcy5sZW5ndGg7XG4gICAgICBzZXRDdXJyZW50SW1hZ2VJbmRleChuZXh0SW5kZXgpO1xuICAgIH0sIDUwMDApO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIC8vIENsZWFyIHRoZSBpbnRlcnZhbCB3aGVuIHRoZSBjb21wb25lbnQgdW5tb3VudHNcbiAgICAgIGNsZWFySW50ZXJ2YWwoYXV0b1RyYW5zbGF0ZSk7XG4gICAgfTtcbiAgfSwgW2N1cnJlbnRJbWFnZUluZGV4LCBpbWFnZXNdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGhvdG8tc2xpZGVyXCIgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cbiAgICAgIDxpbWdcbiAgICAgICAgcmVmPXtpbWFnZVJlZn1cbiAgICAgICAgYWx0PXtgSW1hZ2UgJHtjdXJyZW50SW1hZ2VJbmRleCArIDF9YH1cbiAgICAgICAgc3R5bGU9e3sgdHJhbnNpdGlvbjogJ29wYWNpdHkgMC4zcycsIHdpZHRoOiAnNjAwcHgnLCBoZWlnaHQ6ICc1MDBweCcgfX1cbiAgICAgIC8+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImFycm93c1wiXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgdG9wOiAnNTAlJyxcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpJyxcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIH19XG4gICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4ge1xuICAgICAgICAgIGlmIChhcnJvd3NDb250YWluZXIuY3VycmVudCkge1xuICAgICAgICAgICAgYXJyb3dzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHtcbiAgICAgICAgICBpZiAoYXJyb3dzQ29udGFpbmVyLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGFycm93c0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzTmFtZT1cImFycm93IG5leHRcIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByZXZDbGlja31cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgICAgICBtYXJnaW5SaWdodDogJzI1MHB4JyxcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMTAwcHgnLCAvLyBBZGp1c3QgYXJyb3cgc2l6ZVxuICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHJpZ2h0OiAnMCcsXG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICAmIzgyNDk7XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBjbGFzc05hbWU9XCJhcnJvdyBwcmV2XCJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVOZXh0Q2xpY2t9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgICAgbWFyZ2luTGVmdDogJzI1MHB4JyxcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMTAwcHgnLCAvLyBBZGp1c3QgYXJyb3cgc2l6ZVxuICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIGxlZnQ6ICcwJyxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgICYjODI1MDtcbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRpb24tZG90c1wiIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBib3R0b206ICcxMHB4Jywgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAge2ltYWdlcy5tYXAoKF8sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Bkb3QgJHtpbmRleCA9PT0gY3VycmVudEltYWdlSW5kZXggPyAnYWN0aXZlJyA6ICcnfWB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDdXJyZW50SW1hZ2VJbmRleChpbmRleCl9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgIHdpZHRoOiAnMTBweCcsXG4gICAgICAgICAgICAgIGhlaWdodDogJzEwcHgnLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGluZGV4ID09PSBjdXJyZW50SW1hZ2VJbmRleCA/ICdibGFjaycgOiAnZ3JheScsXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICAgICAgICAgIG1hcmdpbjogJzVweCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5jb25zdCBtZW51X2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXInKVxuaWYgKG1lbnVfYnRuKSB7XG4gIG1lbnVfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIG1lbnVfYnRuLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpXG4gIH0pXG59XG5leHBvcnQgY29uc3QgTmF2YmFyOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgcmV0dXJuICg8PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxuICAgICAgICA8SW1hZ2Ugc3JjPVwiL2xvZ28ucG5nXCIgd2lkdGg9ezI0MH0gaGVpZ2h0PXsxMDB9IGNsYXNzTmFtZT1cIk5hdkltZ1wiIGFsdD1cIkNvbXBhbnkgTG9nb1wiIC8+ICBcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiTmF2TGlua3NcIiA+PExpbmsgaHJlZj1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9cIj5Ib21lPC9MaW5rPjwvYT5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiTmF2TGlua3NcIiA+PExpbmsgaHJlZj1cIi9hYm91dFwiPkFib3V0IFVzPC9MaW5rPjwvYT5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiTmF2TGlua3NcIiA+PExpbmsgaHJlZj1cIi9mYXFzXCI+RkFRczwvTGluaz48L2E+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIk5hdkxpbmtzXCIgPjxMaW5rIGhyZWY9XCIvY29udGFjdFwiPkNvbnRhY3QgVXM8L0xpbms+PC9hPlxuICAgICAgPC9uYXY+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImhhbWJ1cmdlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhclwiPjwvZGl2PiBcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxuYXYgY2xhc3NOYW1lPVwiXCI+PC9uYXY+XG4gIDwvPlxuICApO1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKDw+PHRpdGxlPkhvbWUgfCBNeSBXZWJzaXRlPC90aXRsZT48TmF2YmFyIC8+PGJyIC8+PGRpdiBjbGFzc05hbWU9XCJoZWFkaW5nXCI+PGgxIHN0eWxlPXt7ICd0ZXh0QWxpZ24nOidjZW50ZXInLCAnY29sb3InOid3aGl0ZScsJ3BhZGRpbmdUb3AnOic1MHB4JyB9fSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1ncmF5LTgwMFwiPlRoaXMgb25lIG9mIG15IGFzc2lnbm1lbnQgd2Vic2l0ZSAhPC9oMT48L2Rpdj48YnIgLz48Q2FyZC8+PFBob3RvU2xpZGVyLz48Rm9vdGVyLz48Lz4pXG59XG4iXSwibmFtZXMiOlsiQ2FyZCIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJJbWFnZSIsIkZvb3RlciIsIkxpbmsiLCJQaG90b1NsaWRlciIsImltYWdlcyIsImN1cnJlbnRJbWFnZUluZGV4Iiwic2V0Q3VycmVudEltYWdlSW5kZXgiLCJpbWFnZVJlZiIsImhhbmRsZU5leHRDbGljayIsIm5leHRJbmRleCIsImxlbmd0aCIsImhhbmRsZVByZXZDbGljayIsInByZXZJbmRleCIsImN1cnJlbnQiLCJzdHlsZSIsIm9wYWNpdHkiLCJzZXRUaW1lb3V0Iiwic3JjIiwiYWx0IiwiYXJyb3dzQ29udGFpbmVyIiwiYXV0b1RyYW5zbGF0ZSIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImRpdiIsImNsYXNzTmFtZSIsInBvc2l0aW9uIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImltZyIsInJlZiIsInRyYW5zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsInRvcCIsInRyYW5zZm9ybSIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsInNwYW4iLCJvbkNsaWNrIiwiY3Vyc29yIiwibWFyZ2luUmlnaHQiLCJmb250U2l6ZSIsImNvbG9yIiwicmlnaHQiLCJtYXJnaW5MZWZ0IiwibGVmdCIsInRleHRBbGlnbiIsImJvdHRvbSIsIm1hcCIsIl8iLCJpbmRleCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsIm1hcmdpbiIsIm1lbnVfYnRuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIk5hdmJhciIsIm5hdiIsImEiLCJocmVmIiwiYnV0dG9uIiwiSG9tZSIsInRpdGxlIiwiYnIiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});