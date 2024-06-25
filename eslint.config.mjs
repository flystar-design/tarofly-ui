import globals from 'globals';
import js from '@eslint/js';
import tsEslint from 'typescript-eslint';
import { fixupConfigRules } from '@eslint/compat';
import reactJsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js'
import reactConfig from 'eslint-plugin-react/configs/recommended.js';
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  eslintConfigPrettier,
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.es2020,
        ...globals.es2021,
        ...globals.node,
      },
    },
    rules: {
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
    }
  },
  ...tsEslint.configs.recommended,
  ...fixupConfigRules([reactConfig,reactJsxRuntime]),
];
