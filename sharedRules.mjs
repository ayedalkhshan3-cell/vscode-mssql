import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import { copyrightNotice } from "./eslint.config.mjs";

// Shared rules for all extensions
export const sharedRules = {
    ...eslintPluginPrettierRecommended.rules,
    "notice/notice": [
        "error",
        {
            template: copyrightNotice,
        },
    ],
    "no-undef": "off",
    "no-unused-vars": "off",
    "constructor-super": "warn",
    curly: "off",
    eqeqeq: "warn",
    "no-buffer-constructor": "warn",
    "no-caller": "warn",
    "no-debugger": "warn",
    "no-duplicate-case": "warn",
    "no-duplicate-imports": "error",
    "no-eval": "warn",
    "no-async-promise-executor": "off",
    "no-extra-semi": "warn",
    "no-new-wrappers": "warn",
    "no-redeclare": "off",
    "no-sparse-arrays": "warn",
    "no-throw-literal": "off",
    "no-unsafe-finally": "warn",
    "no-unused-labels": "warn",
    "no-restricted-globals": [
        "warn",
        "name",
        "length",
        "event",
        "closed",
        "external",
        "status",
        "origin",
        "orientation",
        "context",
    ],
    "no-var": "off",
    "jsdoc/no-types": "warn",
    "no-restricted-syntax": ["warn", "Literal[raw='null']"],
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-deprecated": "warn",
    "@typescript-eslint/no-inferrable-types": [
        "warn",
        {
            ignoreParameters: true,
            ignoreProperties: true,
        },
    ],
    "@typescript-eslint/no-unused-vars": [
        "error",
        {
            argsIgnorePattern: "^_",
        },
    ],
    "@typescript-eslint/no-floating-promises": [
        "error",
        {
            ignoreVoid: true,
        },
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/naming-convention": [
        "warn",
        {
            selector: "property",
            modifiers: ["private"],
            format: ["camelCase"],
            leadingUnderscore: "require",
        },
    ],
    "@stylistic/semi": "warn",
};
