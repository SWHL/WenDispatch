module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es2022: true,
    },
    parser: require.resolve('@typescript-eslint/parser'),
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'vue'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-recommended',
    ],
    overrides: [
        {
            files: ['*.vue'],
            parser: require.resolve('vue-eslint-parser'),
            parserOptions: {
                parser: require.resolve('@typescript-eslint/parser'),
                sourceType: 'module',
            },
        },
    ],
    rules: {
        'no-console': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'vue/multi-word-component-names': 'off',
    },
    ignorePatterns: [
        'node_modules/',
        'dist/',
        'apps/extension/public/',
        'md/',
    ],
}