module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    jsx: true,
    useJSXTextNode: true,
  },
  ignorePatterns: ['*.js'],
  plugins: ['react', '@typescript-eslint'],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    'no-shadow': 'off',
    'no-plusplus': 'off',
    'no-confusing-arrow': 'off',
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    'react/jsx-curly-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/no-unresolved': 'off',
    'react/display-name': 'off',
    'operator-linebreak': 'off',
    'no-param-reassign': 'off',
    'arrow-body-style': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'no-unneeded-ternary': 'off',
    'object-curly-newline': 'off',
    'consistent-return': 'off',
    'react/no-did-update-set-state': 'off',
    'react/jsx-closing-tag-location': 'off',
    'function-paren-newline': 'off',
    'react/state-in-constructor': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.tsx', '.ts'],
      },
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'max-classes-per-file': 'off',
    'prefer-const': 'off',
    'react/prop-types': 'off',
    'react/prefer-stateless-function': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-wrap-multilines': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    curly: ['error', 'all'],
    'no-mixed-operators': 'error',
    camelcase: 'warn',
    'no-console': 'warn',
    'max-len': [
      'warn',
      {
        code: 120,
        ignoreStrings: true,
        ignorePattern: '^\\s*var\\s.+=\\s*require\\s*\\(',
        ignoreUrls: true,
      },
    ],
    'dot-notation': 'warn',
    'no-continue': 'warn',
    'jsx-a11y/alt-text': 'off',
    indent: 'warn',
    'unicode-bom': 'off',
    'no-process-exit': 'error',
    'import/first': 'error',
    'import/order': 'off',
    'import/extensions': 'off',
    'import/newline-after-import': 'error',
    'import/no-amd': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        peerDependencies: true,
        optionalDependencies: false,
      },
    ],
    'import/no-mutable-exports': 'error',
    'import/no-named-default': 'error',
    'import/no-named-export': 'off',
    'import/no-self-import': 'error',
    'import/prefer-default-export': 'off',
    'linebreak-style': 0,
    'no-nested-ternary': 'off',
    semi: ['error', 'never'],
    'react/require-default-props': 'off',
    'react/function-component-definition': 'off',
    'no-restricted-exports': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'array-callback-return': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'arrow-parens': ['error', 'always'],
    'react/no-unstable-nested-components': 'off',
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
    cache: false,
  },
}