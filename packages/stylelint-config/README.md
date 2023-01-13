# Stylelint Config

## Usage

### Install

```sh
$ npm i -D @xip-online-applications/stylelint-config
```

### Add config

Add the config to your `package.json`. Alternatively you can make a seperate config file.

```jsonc
{
  // ...
  "stylelint": {
    "extends": "@xip-online-applications/stylelint-config"
  }
}
```

### Add script

```jsonc
{
  // ...
  "scripts": {
    // ...
    "lint:style": "stylelint 'YOUR_SOURCE_FOLDER/**/*.{css,scss}'"
    // ...
  }
}
```

### Prettier

This config uses Stylelint Prettier to not conflict with Prettier's config, so make sure you install XIPs Prettier config as well.
