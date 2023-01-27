module.exports = {
  extends: [
    'stylelint-config-standard-scss', // https://github.com/stylelint-scss/stylelint-config-standard-scss
    'stylelint-config-idiomatic-order', // https://github.com/ream88/stylelint-config-idiomatic-order
    'stylelint-prettier/recommended', // https://github.com/prettier/stylelint-prettier
  ],
  plugins: [
    'stylelint-declaration-block-no-ignored-properties', // https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties
    'stylelint-order', // https://github.com/hudochenkov/stylelint-order
    'stylelint-prettier', // https://github.com/prettier/stylelint-prettier
  ],
  rules: {
    /**
     * Other
     */
    'alpha-value-notation': 'number', // https://stylelint.io/user-guide/rules/alpha-value-notation/
    'at-rule-no-unknown': null, // Disabled because of stylelint-scss // https://stylelint.io/user-guide/rules/at-rule-no-unknown/
    'font-weight-notation': 'named-where-possible', // https://stylelint.io/user-guide/rules/font-weight-notation/
    'shorthand-property-no-redundant-values': true, // https://stylelint.io/user-guide/rules/shorthand-property-no-redundant-values/

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
    'selector-max-pseudo-class': 2, // https://stylelint.io/user-guide/rules/selector-max-pseudo-class/
    'selector-max-type': 2, // https://stylelint.io/user-guide/rules/selector-max-type/
    'selector-max-universal': 1, // https://stylelint.io/user-guide/rules/selector-max-universal/

    /**
     * Plugins
     */
    'plugin/declaration-block-no-ignored-properties': true, // https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties
    'scss/at-each-key-value-single-line': true, // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-each-key-value-single-line/README.md
    'scss/at-extend-no-missing-placeholder': true, // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-extend-no-missing-placeholder/README.md
    'scss/at-import-no-partial-leading-underscore': true, // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-import-no-partial-leading-underscore/README.md
    'scss/at-import-partial-extension': 'never', // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-import-partial-extension/README.md
    'scss/at-mixin-argumentless-call-parentheses': 'always', // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-mixin-argumentless-call-parentheses/README.md
    'scss/at-rule-conditional-no-parentheses': true, // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-rule-conditional-no-parentheses/README.md
    'scss/at-rule-no-unknown': true, // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-rule-no-unknown/README.md
    'scss/comment-no-loud': true, // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/comment-no-loud/README.md
    'scss/declaration-nested-properties': 'never', // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/declaration-nested-properties/README.md
    'scss/function-color-relative': true, // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/function-color-relative/README.md
    'scss/no-duplicate-mixins': true, // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/no-duplicate-mixins/README.md
    'scss/selector-no-redundant-nesting-selector': true, // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/selector-no-redundant-nesting-selector/README.md
  },
};
