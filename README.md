# @funboxteam/stylelint-rules

[![npm](https://img.shields.io/npm/v/@funboxteam/stylelint-rules.svg)](https://www.npmjs.com/package/@funboxteam/stylelint-rules)

[Stylelint](https://stylelint.io/) plugin with custom rules.

[По-русски](./README.ru.md)

## Installation

```
npm install --save-dev @funboxteam/stylelint-rules
```

Obviously Stylelint should be installed too.

## Rules

- [declarations-before-nesting](./docs/rules/declarations-before-nesting.md) — forces block rules be placed above the nested blocks.
- [no-transition-all](./docs/rules/no-transition-all.md) — prevents use `all` value for `transition` & `transition-property` props.
- [rgba-hex-color-only](./docs/rules/rgba-hex-color-only.md) — prevents use `rgba` function with non-hex color as a first argument.
- [selector-max-type](./docs/rules/selector-max-type.md) — limit the number of type selectors in a selector (compatible with [@funboxteam/scss-vars-loader](https://github.com/funbox/scss-vars-loader)).

[![Sponsored by FunBox](https://funbox.ru/badges/sponsored_by_funbox_centered.svg)](https://funbox.ru)
