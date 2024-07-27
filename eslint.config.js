import eslintPluginAstro from 'eslint-plugin-astro';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';

export default [
  js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
    },
    rules: {
      semi: ['error', 'always'],
      'require-await': 'error',
      'no-var': 'error',
      'no-shadow': 'error',
      curly: ['error', 'all'],
      'object-curly-spacing': ['error', 'always'],
      'space-in-parens': ['error', 'never'],
      'block-spacing': ['error', 'always'],
      'brace-style': ['error', '1tbs', { 'allowSingleLine': false }],
      quotes: ['error', 'single'],
      indent: ['error', 2],
      '@typescript-eslint/semi': ['error', 'always'],
      '@typescript-eslint/member-delimiter-style': ['error', {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: true,
        },
      }],
      '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
      'astro/no-set-html-directive': 'error',
      'eol-last': ['error', 'always'],
    },
  },
];
