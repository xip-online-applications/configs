# Stylelint Config

## 👨🏻‍💻 Usage

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

## With Vue

You can use the [recommended Vue Stylelint config](https://github.com/ota-meshi/stylelint-config-recommended-vue) alongside our base config like this for Vue 3.

```jsonc
{
  // ...
  "stylelint": {
    "extends": [
      "@xip-online-applications/stylelint-config",
      "stylelint-config-recommended-vue/scss"
    ]
  }
}
```

### Modify script

Add the vue file extension to your script so these files are linted as well.

```jsonc
{
  // ...
  "scripts": {
    // ...
    "lint:style": "stylelint 'YOUR_SOURCE_FOLDER/**/*.{css,scss,vue}'"
    // ...
  }
}
```
