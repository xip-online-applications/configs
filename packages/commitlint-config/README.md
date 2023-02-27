# Commitlint config

Company-wide [Commitlint](https://commitlint.js.org/) config for using conventional commits, plus other commit lint rules we want to enforce.

## Usage

### Install

```sh
npm i -D husky @xip-online-applications/commitlint-config
```

### Add Husky install

Add `husky install` to your `prepare` script in `package.json` so that husky is installed when you run `npm/yarn/pnpm install`.

```jsonc
"scripts": {
  "prepare": "husky install",
  // ...
}
```

### Add Commit hook with Husky

```sh
npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'

```
