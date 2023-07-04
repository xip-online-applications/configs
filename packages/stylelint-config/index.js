module.exports = {
  extends: [
    'stylelint-prettier/recommended', // https://github.com/prettier/stylelint-prettier
  ],
  plugins: [
    'stylelint-declaration-block-no-ignored-properties', // https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties
    'stylelint-order', // https://github.com/hudochenkov/stylelint-order
    'stylelint-prettier', // https://github.com/prettier/stylelint-prettier
  ],
  rules: {
    'order/properties-alphabetical-order': true, // https://github.com/hudochenkov/stylelint-order/blob/master/rules/properties-alphabetical-order/README.md

    /**
     * Other
     */
    'alpha-value-notation': 'number', // https://stylelint.io/user-guide/rules/alpha-value-notation/
    'at-rule-no-unknown': null, // Disabled because of stylelint-scss // https://stylelint.io/user-guide/rules/at-rule-no-unknown/
    'font-weight-notation': 'named-where-possible', // https://stylelint.io/user-guide/rules/font-weight-notation/
    'shorthand-property-no-redundant-values': true, // https://stylelint.io/user-guide/rules/shorthand-property-no-redundant-values/
    'no-empty-source': null, // https://stylelint.io/user-guide/rules/no-empty-source/
    'import-notation': null, // https://stylelint.io/user-guide/rules/import-notation/
    'declaration-property-value-no-unknown': true, // https://stylelint.io/user-guide/rules/declaration-property-value-no-unknown

    /**
     * Quotes
     */
    'font-family-name-quotes': 'always-where-recommended', // https://stylelint.io/user-guide/rules/font-family-name-quotes/
    'function-url-quotes': 'always', // https://stylelint.io/user-guide/rules/function-url-quotes/
    'selector-attribute-quotes': 'always', // https://stylelint.io/user-guide/rules/selector-attribute-quotes/

    /**
     * Vendor prefixes
     */
    'at-rule-no-vendor-prefix': true, // https://stylelint.io/user-guide/rules/at-rule-no-vendor-prefix/
    'media-feature-name-no-vendor-prefix': true, // https://stylelint.io/user-guide/rules/media-feature-name-no-vendor-prefix/
    'property-no-vendor-prefix': true, // https://stylelint.io/user-guide/rules/property-no-vendor-prefix/
    'selector-no-vendor-prefix': true, // https://stylelint.io/user-guide/rules/selector-no-vendor-prefix/
    'value-no-vendor-prefix': true, // https://stylelint.io/user-guide/rules/value-no-vendor-prefix/

    /**
     * Specificity
     */
    'max-nesting-depth': 4, // https://stylelint.io/user-guide/rules/max-nesting-depth/
    'selector-max-specificity': '0,4,2', // https://stylelint.io/user-guide/rules/selector-max-specificity/

    /**
     * Selector types, units, properties, functions and words in comments
     */
    'color-named': [
      'never',
      {
        ignore: ['inside-function'],
      },
    ], // https://stylelint.io/user-guide/rules/color-named/
    'color-no-hex': true, // https://stylelint.io/user-guide/rules/color-no-hex/
    'declaration-no-important': true, // https://stylelint.io/user-guide/rules/declaration-no-important/
    'declaration-property-unit-allowed-list': {
      'line-height': [''],
    }, // https://stylelint.io/user-guide/rules/declaration-property-unit-allowed-list/
    'declaration-property-value-disallowed-list': {
      '/^transition/': ['/all/'],
      '/^background/': ['http:', 'https:'],
      '/^border/': ['none'],
      '/.+/': ['initial'],
    }, // https://stylelint.io/user-guide/rules/declaration-property-value-disallowed-list/
    'selector-max-attribute': 1, // https://stylelint.io/user-guide/rules/selector-max-attribute/
    'selector-max-class': 3, // https://stylelint.io/user-guide/rules/selector-max-class/
    'selector-max-compound-selectors': 3, // https://stylelint.io/user-guide/rules/selector-compound-selectors/
    'selector-max-combinators': 2, // https://stylelint.io/user-guide/rules/selector-max-combinators/
    'selector-max-id': 0, // https://stylelint.io/user-guide/rules/selector-max-id/
    'selector-max-pseudo-class': 4, // https://stylelint.io/user-guide/rules/selector-max-pseudo-class/
    'selector-max-type': 2, // https://stylelint.io/user-guide/rules/selector-max-type/
    'selector-max-universal': 1, // https://stylelint.io/user-guide/rules/selector-max-universal/

    /**
     * Plugins
     */
    'plugin/declaration-block-no-ignored-properties': true, // https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties
  },
};
