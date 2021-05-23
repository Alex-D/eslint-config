# ESLint config for TypeScript and JavaScript

These are my settings for ESLint

## Install

```sh
npx install-peerdeps --dev @alex-d/eslint-config
```

## .eslintrc.js

```js
/* eslint-env node, browser:false */

module.exports = {
  extends: [
    '@alex-d/eslint-config',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
}
```
