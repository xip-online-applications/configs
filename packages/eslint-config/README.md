# Eslint config

Company-wide [Eslint](https://eslint.org/) config for JS based projects.

## Usage

### Install

```sh
npm i -D eslint @xip-online-applications/eslint-config
```

### Add config

```jsonc
{
  // ...
  "eslintConfig": {
    "extends": "@xip-online-applications/eslint-config"
    // TypeScript flavour
    // "extends": "@xip-online-applications/eslint-config/typescript"
  }
}
```

#### Or in an NX repo

```jsonc
{
  "files": ["*.ts", "*.tsx"],
  "extends": ["plugin:@nx/typescript", "@xip-online-applications/eslint-config/typescript"],
  "rules": {}
},
{
  "files": ["*.js", "*.jsx"],
  "extends": ["plugin:@nx/javascript", "@xip-online-applications/eslint-config"],
  "rules": {}
}
```

### Add script

```jsonc
{
  // ...
  "scripts": {
    // ...
    "lint": "eslint --ext .js, YOUR_SOURCE_FOLDER"
    // ...
  }
}
```
