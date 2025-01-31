// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import angular from 'angular-eslint';

import jsdoc from 'eslint-plugin-jsdoc';
import prettier from 'eslint-plugin-prettier';
import * as importPlugin from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';

export default tseslint.config(
  {
    ignores: [
      '.*/',
      'dist/',
      'coverage/',
      'junit/',
      'ng-alain/',
      'schematics/**/files/**/*',
      'src/dist/**/*',
      'src/templates/**/*',
      'src/app/routes/gen/**/*'
    ]
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        project: ['tsconfig.json'],
        tsconfigRootDir: import.meta.dirname
      }
    },
    plugins: {
      jsdoc,
      import: importPlugin,
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
      'prettier/prettier': ['error', {}],
      'jsdoc/tag-lines': [
        'error',
        'any',
        {
          startLines: 1,
        },
      ],
      '@angular-eslint/component-class-suffix': [
        'error',
        {
          suffixes: ['Directive', 'Component', 'Base', 'Widget']
        }
      ],
      '@angular-eslint/directive-class-suffix': [
        'error',
        {
          suffixes: ['Directive', 'Component', 'Base', 'Widget']
        }
      ],
      '@angular-eslint/component-selector': [
        'off',
        {
          type: ['element', 'attribute'],
          prefix: ['app', 'test'],
          style: 'kebab-case'
        }
      ],
      '@angular-eslint/directive-selector': [
        'off',
        {
          type: 'attribute',
          prefix: ['app']
        }
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
      'import/no-duplicates': 'error',
      'import/no-unused-modules': 'error',
      'import/no-unassigned-import': 'error',
      'import/order': [
        'error',
        {
          alphabetize: { order: 'asc', caseInsensitive: false },
          'newlines-between': 'always',
          groups: ['external', 'internal', ['parent', 'sibling', 'index']],
          pathGroups: [],
          pathGroupsExcludedImportTypes: []
        }
      ],
      '@typescript-eslint/no-this-alias': 'error',
      '@typescript-eslint/member-ordering': 'off',
      'no-irregular-whitespace': 'error',
      'no-multiple-empty-lines': 'error',
      'no-sparse-arrays': 'error',
      'prefer-object-spread': 'error',
      'prefer-template': 'error',
      'prefer-const': 'off',
      'max-len': 'off',
      '@typescript-eslint/no-deprecated': 'warn',
      "no-empty-function": "off",
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-explicit-any': 'warn'
    }
  },
  {
    files: ['**/*.html'],
    extends: [
      ...angular.configs.templateRecommended
      // todo(a11y)
      // ...angular.configs.templateAccessibility,
    ],
    rules: {}
  }
);
