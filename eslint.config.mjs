// @ts-check
import { defineConfig } from 'eslint/config';
import eslint from '@eslint/js';
import markdown from '@eslint/markdown';
import tseslint from 'typescript-eslint';
import angular from 'angular-eslint';

import jsdoc from 'eslint-plugin-jsdoc';
import prettier from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import-x';
import unusedImports from 'eslint-plugin-unused-imports';

export default defineConfig(
  {
    ignores: [
      '.*/',
      'dist/',
      'coverage/',
      'junit/'
    ]
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    },
    plugins: {
      jsdoc,
      'import-x': importPlugin,
      prettier,
      'unused-imports': unusedImports
    },
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended
    ],
    processor: angular.processInlineTemplates,
    rules: {
      'prettier/prettier': ['error'],
      'jsdoc/tag-lines': [
        'error',
        'any',
        {
          startLines: 1,
        },
      ],
      '@angular-eslint/no-attribute-decorator': 'error',
      '@angular-eslint/no-conflicting-lifecycle': 'off',
      '@angular-eslint/no-forward-ref': 'off',
      '@angular-eslint/no-host-metadata-property': 'off',
      '@angular-eslint/no-lifecycle-call': 'off',
      '@angular-eslint/no-pipe-impure': 'error',
      '@angular-eslint/prefer-output-readonly': 'error',
      '@angular-eslint/use-component-selector': 'off',
      '@angular-eslint/use-component-view-encapsulation': 'off',
      '@angular-eslint/no-input-rename': 'off',
      '@angular-eslint/no-output-native': 'off',
      '@typescript-eslint/array-type': [
        'error',
        {
          default: 'array-simple'
        }
      ],
      '@typescript-eslint/ban-types': [
        'off',
        {
          types: {
            Object: {
              message: 'Use {} instead.'
            },
            String: {
              message: 'Use string instead.'
            },
            Number: {
              message: 'Use number instead.'
            },
            Boolean: {
              message: 'Use boolean instead.'
            },
            Function: {
              message: 'Use specific callable interface instead.'
            }
          }
        }
      ],
      '@typescript-eslint/consistent-type-definitions': 'error',
      '@typescript-eslint/explicit-member-accessibility': [
        'off',
        {
          accessibility: 'explicit'
        }
      ],
      '@typescript-eslint/no-explicit-any': [
        'off',
        {
          ignoreRestArgs: true
        }
      ],
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-for-in-array': 'error',
      '@typescript-eslint/no-inferrable-types': [
        'error',
        {
          ignoreParameters: true,
          ignoreProperties: true
        }
      ],
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-this-alias': 'error',
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
          allowExpressions: true,
          allowConciseArrowFunctionExpressionsStartingWithVoid: true
        }
      ],
      'prefer-arrow/prefer-arrow-functions': 'off',
      'import-x/no-duplicates': 'error',
      'import-x/no-unassigned-import': 'error',
      'import-x/order': [
        'error',
        {
          alphabetize: { order: 'asc', caseInsensitive: false },
          'newlines-between': 'always',
          groups: ['external', 'internal', ['parent', 'sibling', 'index']],
          pathGroups: [],
          pathGroupsExcludedImportTypes: []
        }
      ],
      'no-bitwise': 'off',
      'no-duplicate-imports': 'error',
      'no-invalid-this': 'off',
      'no-irregular-whitespace': 'error',
      'no-magic-numbers': 'off',
      'no-multiple-empty-lines': 'error',
      'no-redeclare': 'off',
      'no-underscore-dangle': 'off',
      'no-sparse-arrays': 'error',
      'no-template-curly-in-string': 'off',
      'prefer-object-spread': 'error',
      'prefer-template': 'error',
      yoda: 'error',
      '@typescript-eslint/member-ordering': 'off',
      'no-shadow': 'off',
      'prefer-const': 'off',
      'max-len': 'off',
      'no-empty': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-deprecated': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_'
        }
      ]
    }
  },
  {
    files: ['**/*.html'],
    plugins: {
      prettier
    },
    extends: [
      ...angular.configs.templateRecommended
      // todo(a11y)
      // ...angular.configs.templateAccessibility,
    ],
    rules: {
      'prettier/prettier': [
        'error',
        {
          parser: 'angular'
        },
        {
          usePrettierrc: true
        }
      ],
      '@angular-eslint/template/prefer-self-closing-tags': 'error',
      '@angular-eslint/template/prefer-at-empty': 'error',
      '@angular-eslint/template/prefer-static-string-properties': 'error',
      '@angular-eslint/template/prefer-contextual-for-variables': 'error',
      '@angular-eslint/template/eqeqeq': 'off'
    }
  },
  {
    files: ['**/*.md'],
    plugins: {
      prettier,
      markdown
    },
    extends: [markdown.configs.recommended],
    rules: {
      'prettier/prettier': 'error',
      'markdown/no-missing-label-refs': 'off',
      'markdown/no-unused-definitions': 'off',
      'markdown/no-duplicate-definitions': 'off'
    }
  }
);
