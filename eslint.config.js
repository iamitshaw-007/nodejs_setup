import globals from "globals";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
    { files: ["**/*.{js,mjs,cjs,ts}"] },
    { languageOptions: { globals: globals.browser } },
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    eslintConfigPrettier,
    {
        ignores: [
            "node_modules/*",
            "dist/*",
            "module_config/**/*.{ts,js,json}",
            "*.config.{ts,js,json}",
        ],
    },
    {
        rules: {
            quotes: ["error", "double", { allowTemplateLiterals: true }],
            "arrow-body-style":
                "warn" /* Prefer arrow functions with a concise body */,
            "constructor-super":
                "error" /* Ensure `super()` is called in constructors of derived classes */,
            curly: "error" /* Require curly braces for all control statements */,
            "dot-notation":
                "off" /* Allow dot notation or bracket notation for accessing properties */,
            eqeqeq: [
                "error",
                "smart",
            ] /* Require the use of === and !== with exceptions for comparing with null */,
            "id-match":
                "error" /* Enforce a specific naming convention for identifiers */,
            "max-len": [
                "error" /* Enforce a maximum line length */,
                {
                    code: 200 /* Set the maximum line length to 200 characters */,
                },
            ],
            "no-bitwise":
                "warn" /* Warn against the use of bitwise operators */,
            "no-console": [
                "error" /* Disallow the use of console, except for the following methods */,
                {
                    allow: [
                        "warn",
                        "dir",
                        "timeLog",
                        "assert",
                        "clear",
                        "count",
                        "countReset",
                        "group",
                        "groupEnd",
                        "table",
                        "dirxml",
                        "error",
                        "groupCollapsed",
                        "Console",
                        "profile",
                        "profileEnd",
                        "timeStamp",
                        "context",
                    ],
                },
            ],
            "no-debugger":
                "error" /* Disallow the use of `debugger` statements */,
            "no-empty": "error" /* Disallow empty block statements */,
            "no-empty-function": "error" /* Allow empty functions */,
            "no-eval": "error" /* Disallow the use of `eval()` */,
            "no-fallthrough":
                "error" /* Disallow fallthrough of `case` statements */,
            "no-redeclare": "error" /* Disallow variable redeclaration */,
            "no-shadow":
                "off" /* Allow variable declarations from shadowing variables declared in the outer scope */,
            "no-underscore-dangle":
                "off" /* Allow dangling underscores in identifiers */,
            "no-unused-expressions": "off" /* Allow unused expressions */,
            "no-unused-vars":
                "off" /* Allow variables to be declared and not used */,
            "no-var":
                "error" /* Disallow the use of `var`, prefer `let` or `const` */,
            "prefer-const":
                "error" /* Prefer `const` over `let` when variables are not reassigned */,
            radix: "error" /* Require the use of the radix argument when using `parseInt()` */,
            "spaced-comment": [
                "error" /* Enforce consistent spacing after the `//` or `/*` in a comment */,
                "always",
                {
                    markers: ["/"] /* Exception for specific markers */,
                },
            ],
        },
    },
];
