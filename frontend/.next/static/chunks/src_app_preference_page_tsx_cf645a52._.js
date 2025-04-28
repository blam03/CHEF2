(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/preference/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PreferencesPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const steps = [
    {
        question: 'What are your Goals?',
        options: [
            'Lose Weight',
            'Gain Weight',
            'Eat Healthy',
            'Build Muscle',
            'Save Money',
            'Save Time'
        ],
        key: 'goals',
        type: 'checkbox'
    },
    {
        question: 'Do you have any Allergies?',
        options: [
            'Dairy',
            'Nuts',
            'Gluten',
            'No Allergies'
        ],
        key: 'allergies',
        type: 'checkbox'
    },
    {
        question: 'Any Dietary Restrictions?',
        options: [
            'Vegan',
            'Vegetarian',
            'Halal',
            'None'
        ],
        key: 'dietaryRestrictions',
        type: 'checkbox'
    },
    {
        question: 'What times do you usually eat?',
        key: 'mealTimes',
        type: 'time'
    },
    {
        question: 'What are your Favorite Cuisines?',
        options: [
            'Italian',
            'Indian',
            'Mexican',
            'Japanese',
            'American',
            'Thai',
            'Chinese'
        ],
        key: 'favoriteCuisines',
        type: 'checkbox'
    }
];
function PreferencesPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        goals: [],
        allergies: [],
        dietaryRestrictions: [],
        mealTimes: {
            breakfast: '',
            lunch: '',
            dinner: ''
        },
        favoriteCuisines: []
    });
    const handleCheckboxToggle = (option)=>{
        const key = steps[currentStep].key;
        setAnswers((prev)=>{
            const currentOptions = prev[key];
            if (currentOptions.includes(option)) {
                return {
                    ...prev,
                    [key]: currentOptions.filter((item)=>item !== option)
                };
            } else {
                return {
                    ...prev,
                    [key]: [
                        ...currentOptions,
                        option
                    ]
                };
            }
        });
    };
    const handleNext = ()=>{
        if (currentStep < steps.length - 1) {
            setCurrentStep((prev)=>prev + 1);
        } else {
            console.log('Final answers:', answers);
            router.push('/subscription');
        }
    };
    const handleBack = ()=>{
        if (currentStep > 0) {
            setCurrentStep((prev)=>prev - 1);
        } else {
            router.back();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-100 flex items-center justify-center p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-xl shadow-lg p-8 max-w-md w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        x: 100
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    exit: {
                        opacity: 0,
                        x: -100
                    },
                    transition: {
                        duration: 0.5
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold text-gray-800 mb-6",
                            children: steps[currentStep].question
                        }, void 0, false, {
                            fileName: "[project]/src/app/preference/page.tsx",
                            lineNumber: 94,
                            columnNumber: 13
                        }, this),
                        steps[currentStep].type === 'checkbox' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-4",
                            children: steps[currentStep].options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex items-center gap-3 cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: answers[steps[currentStep].key].includes(option),
                                            onChange: ()=>handleCheckboxToggle(option),
                                            className: "h-5 w-5 text-blue-600 rounded focus:ring-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/preference/page.tsx",
                                            lineNumber: 102,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-700 text-sm",
                                            children: option
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/preference/page.tsx",
                                            lineNumber: 108,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, option, true, {
                                    fileName: "[project]/src/app/preference/page.tsx",
                                    lineNumber: 101,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/preference/page.tsx",
                            lineNumber: 99,
                            columnNumber: 15
                        }, this),
                        steps[currentStep].type === 'time' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-4",
                            children: [
                                'Breakfast',
                                'Lunch',
                                'Dinner'
                            ].map((meal)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex flex-col gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium text-gray-700",
                                            children: [
                                                meal,
                                                " Time:"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/preference/page.tsx",
                                            lineNumber: 118,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: answers.mealTimes[meal.toLowerCase()],
                                            onChange: (e)=>setAnswers((prev)=>({
                                                        ...prev,
                                                        mealTimes: {
                                                            ...prev.mealTimes,
                                                            [meal.toLowerCase()]: e.target.value
                                                        }
                                                    })),
                                            className: "p-2 border rounded text-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Select a time"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/preference/page.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 23
                                                }, this),
                                                [
                                                    '6 AM',
                                                    '7 AM',
                                                    '8 AM',
                                                    '9 AM',
                                                    '10 AM',
                                                    '11 AM',
                                                    '12 PM',
                                                    '1 PM',
                                                    '2 PM',
                                                    '3 PM',
                                                    '4 PM',
                                                    '5 PM',
                                                    '6 PM',
                                                    '7 PM',
                                                    '8 PM',
                                                    '9 PM'
                                                ].map((time)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: time,
                                                        children: time
                                                    }, time, false, {
                                                        fileName: "[project]/src/app/preference/page.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 25
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/preference/page.tsx",
                                            lineNumber: 119,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, meal, true, {
                                    fileName: "[project]/src/app/preference/page.tsx",
                                    lineNumber: 117,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/preference/page.tsx",
                            lineNumber: 115,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleBack,
                                    className: "px-6 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg",
                                    children: "Back"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/preference/page.tsx",
                                    lineNumber: 141,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleNext,
                                    className: "px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg",
                                    disabled: steps[currentStep].type === 'checkbox' && answers[steps[currentStep].key].length === 0,
                                    children: currentStep === steps.length - 1 ? 'Finish' : 'Next'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/preference/page.tsx",
                                    lineNumber: 147,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/preference/page.tsx",
                            lineNumber: 140,
                            columnNumber: 13
                        }, this)
                    ]
                }, currentStep, true, {
                    fileName: "[project]/src/app/preference/page.tsx",
                    lineNumber: 87,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/preference/page.tsx",
                lineNumber: 86,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/preference/page.tsx",
            lineNumber: 85,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/preference/page.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
_s(PreferencesPage, "Ri3zTuaJ4NAXQAeTensVddx+bP8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = PreferencesPage;
var _c;
__turbopack_context__.k.register(_c, "PreferencesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_preference_page_tsx_cf645a52._.js.map