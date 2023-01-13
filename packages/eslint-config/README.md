# Eslint config

Company-wide [Eslint](https://eslint.org/) config for JS based projects.

## Usage

### Install

```sh
$ npm i -D @xip-online-applications/eslint-config
```

### Add config

```jsonc
{
  // ...
  "eslintConfig": {
    "extends": "@xip-online-applications/eslint-config"
  }
}
```

#### Or in an NX repo

```jsonc
{
  "files": ["*.ts", "*.tsx"],
  "extends": ["plugin:@nrwl/nx/typescript", "@xip-online-applications/eslint-config"],
  "rules": {}
},
{
  "files": ["*.js", "*.jsx"],
  "extends": ["plugin:@nrwl/nx/javascript", "@xip-online-applications/eslint-config"],
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
