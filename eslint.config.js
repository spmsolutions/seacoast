// eslint.config.js
import { Linter } from "eslint";

/** @type {Linter.Config} */
const config = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  rules: {
    // Add your rules here
  },
};

export default config;
