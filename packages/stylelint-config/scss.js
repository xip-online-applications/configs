module.exports = {
  extends: [
    'stylelint-config-standard-scss', // https://github.com/stylelint-scss/stylelint-config-standard-scss
  ],
  rules: {
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
