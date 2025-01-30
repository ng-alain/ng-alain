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
      '@angular-eslint/component-selector': [
        'off',
        {
          type: ['element', 'attribute'],
          prefix: ['nz', 'test'],
          style: 'kebab-case'
        }
      ],
      '@angular-eslint/component-class-suffix': [
        'off',
        {
          suffixes: ['Directive', 'Component', 'Base', 'Widget', 'Property', 'HarnessTest']
        }
      ],
      '@angular-eslint/directive-class-suffix': [
        'off',
        {
          suffixes: ['Directive', 'Component', 'Base', 'Widget']
        }
      ],
      '@angular-eslint/directive-selector': [
        'off',
        {
          type: 'attribute',
          prefix: ['nz']
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
      'import/no-duplicates': 'error',
      'import/no-unused-modules': 'error',
      'import/no-unassigned-import': 'error',
      'import/order': [
        'error',
        {
          alphabetize: { order: 'asc', caseInsensitive: false },
          'newlines-between': 'always',
          groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
          pathGroups: [
            {
              pattern: '{@angular/**,rxjs}',
              group: 'external',
              position: 'before'
            },
            {
              pattern: '{ng-zorro-antd/**,@delon/**}',
              group: 'internal',
              position: 'before'
            },
            {
              pattern: '{@core,@share,@env/*}',
              group: 'parent',
              position: 'before'
            }
          ],
          "pathGroupsExcludedImportTypes": []
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
      '@angular-eslint/no-input-rename': 'off',
      '@angular-eslint/no-output-native': 'off',
      '@typescript-eslint/member-ordering': 'off',
      'no-shadow': 'off',
      'prefer-const': 'off',
      'max-len': 'off',
      'no-empty': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-deprecated': 'warn'
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
