import js from "@eslint/js";

export default [
    {
        env: {
            "browser": true,
            "es2021": true,
            "jest": true
        },
        extends: "airbnb-base",
        parserOptions: {
            "ecmaVersion": "latest",
            "sourceType": "module"
        },
        rules: {
            "no-unused-vars": "warn"
        }
    }
];