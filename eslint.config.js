import js from "@eslint/js";
import globals from "globals";

export default [
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.browser,
                myCustomGlobal: "readonly",
            }
        },
        rules: {
            "no-unused-vars": "warn",
            "no-console": "off",
        },
        ignores: [
            "dist/", "coverage/**"],
    }
];