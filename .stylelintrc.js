const { propertyGroups } = require('stylelint-config-clean-order');

const propertiesOrder = propertyGroups.map(properties => ({
  noEmptyLineBetween: true,
  emptyLineBefore: 'never',
  properties
}));

module.exports = {
  extends: ['stylelint-config-standard'],
  customSyntax: 'postcss-less',
  plugins: ['stylelint-order', 'stylelint-declaration-block-no-ignored-properties'],
  rules: {
    'function-no-unknown': null,
    'no-descending-specificity': null,
    'plugin/declaration-block-no-ignored-properties': true,
    'selector-type-no-unknown': [
      true,
      {
        ignoreTypes: ['/^g2-/', '/^nz-/', '/^app-/']
      }
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['ng-deep']
      }
    ],
    'import-notation': 'string',
    'media-feature-range-notation': 'prefix',
    'media-query-no-invalid': null,
    'order/order': [
      [
        'dollar-variables',
        'at-variables',
        'custom-properties',
        { type: 'at-rule', name: 'custom-media' },
        { type: 'at-rule', name: 'function' },
        { type: 'at-rule', name: 'mixin' },
        { type: 'at-rule', name: 'extend' },
        { type: 'at-rule', name: 'include' },
        'declarations',
        'less-mixins',
        {
          type: 'rule',
          selector: /^&::[\w-]+/,
          hasBlock: true
        },
        'rules',
        { type: 'at-rule', name: 'media', hasBlock: true }
      ],
      { severity: 'warning' }
    ],
    'order/properties-order': [
      propertiesOrder,
      {
        severity: 'warning',
        unspecified: 'bottomAlphabetical'
      }
    ]
  },
  ignoreFiles: ['src/assets/**/*']
};
