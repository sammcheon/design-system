module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
    },
    env: {
        browser: true,
        es6: true
    },
    extends: [
        'airbnb-base',
        'plugin:vue/essential'
    ],
    plugins: [
        'vue',
        'html'
    ],
    rules: {
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'comma-dangle': [ 'error', 'never'],
        'space-before-function-paren': ['error', 'always'],
        'no-console': 'error',
        'no-duplicate-imports': 'error',
        'indent': 'off',
        'eol-last': 'off',
        'no-dupe-keys': 'off',
        'object-property-newline': 'off',
        'import/no-unresolved': 'off',
        'import/newline-after-import': 'off',
        'import/no-extraneous-dependencies': 'off',
        'vue/script-indent': ['error', 4, {'baseIndent': 1}]
    }
};