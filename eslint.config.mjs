// @ts-check

import tseslint from "typescript-eslint";
import notice from "eslint-plugin-notice";
import jsdoc from "eslint-plugin-jsdoc";
import { includeIgnoreFile } from "@eslint/compat";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";
import react from "eslint-plugin-react";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import path from "node:path";
import { fileURLToPath } from "node:url";
import customRules from "@microsoft/vscode-mssql-eslint-plugin-custom-rules";
import stylistic from "@stylistic/eslint-plugin";
import { sharedRules } from "./sharedRules.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, ".gitignore");

// Common copyright notice template
export const copyrightNotice =
    "/*---------------------------------------------------------------------------------------------" +
    "\n" +
    " *  Copyright (c) Microsoft Corporation. All rights reserved." +
    "\n" +
    " *  Licensed under the MIT License. See License.txt in the project root for license information." +
    "\n" +
    " *--------------------------------------------------------------------------------------------*/" +
    "\n" +
    "\n";

export default [
    // Global ignores
    {
        ignores: [
            "**/out/**/*",
            "**/dist/**/*",
            "**/node_modules/**/*",
            "**/coverage/**/*",
            "**/*.d.ts",
            "**/sqltoolsservice/**/*",
        ],
    },

    // mssql extension - with React support
    {
        files: [
            "extensions/mssql/src/**/*.ts",
            "extensions/mssql/src/**/*.tsx",
            "extensions/mssql/test/**/*.ts",
        ],
        ignores: [
            ...(includeIgnoreFile(gitignorePath).ignores || []),
            "extensions/mssql/src/prompts/**/*.ts", // Ignore prompts files as they are copied from other repos
        ],
        languageOptions: {
            ...reactRecommended.languageOptions,
            ecmaVersion: "latest",
            sourceType: "module",
            parser: tseslint.parser,
            parserOptions: {
                tsconfigRootDir: __dirname,
                project: [
                    "./extensions/mssql/tsconfig.extension.json",
                    "./extensions/mssql/tsconfig.webviews.json",
                ],
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            notice,
            jsdoc,
            ["@typescript-eslint"]: tseslint.plugin,
            react,
            ...eslintPluginPrettierRecommended.plugins,
            "@stylistic": stylistic,
            "custom-eslint-rules": customRules,
        },
        settings: {
            react: {
                version: "detect",
            },
        },
        rules: {
            ...sharedRules,
            "custom-eslint-rules/banned-imports": "error",
            "custom-eslint-rules/no-direct-l10n": "error",
        },
    },

    // data-workspace extension
    {
        files: ["extensions/data-workspace/src/**/*.ts", "extensions/data-workspace/test/**/*.ts"],
        ignores: [...(includeIgnoreFile(gitignorePath).ignores || [])],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            parser: tseslint.parser,
            parserOptions: {
                tsconfigRootDir: __dirname,
                project: "./extensions/data-workspace/tsconfig.json",
            },
        },
        plugins: {
            notice,
            jsdoc,
            ["@typescript-eslint"]: tseslint.plugin,
            ...eslintPluginPrettierRecommended.plugins,
            "@stylistic": stylistic,
            "custom-eslint-rules": customRules,
        },
        rules: {
            ...sharedRules,
            "custom-eslint-rules/banned-imports": "error",
            "custom-eslint-rules/no-direct-l10n": "error",
        },
    },

    // sql-database-projects extension
    {
        files: [
            "extensions/sql-database-projects/src/**/*.ts",
            "extensions/sql-database-projects/test/**/*.ts",
        ],
        ignores: [...(includeIgnoreFile(gitignorePath).ignores || [])],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            parser: tseslint.parser,
            parserOptions: {
                tsconfigRootDir: __dirname,
                project: "./extensions/sql-database-projects/tsconfig.extension.json",
            },
        },
        plugins: {
            notice,
            jsdoc,
            ["@typescript-eslint"]: tseslint.plugin,
            ...eslintPluginPrettierRecommended.plugins,
            "@stylistic": stylistic,
            "custom-eslint-rules": customRules,
        },
        rules: {
            ...sharedRules,
            "custom-eslint-rules/banned-imports": "error",
            "custom-eslint-rules/no-direct-l10n": "error",
        },
    },
];
