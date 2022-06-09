# @funboxteam/stylelint-rules

[![npm](https://img.shields.io/npm/v/@funboxteam/stylelint-rules.svg)](https://www.npmjs.com/package/@funboxteam/stylelint-rules)

Плагин для [Stylelint](https://stylelint.io/), добавляющий кастомные правила линтинга.

## Установка

```
npm install --save-dev @funboxteam/stylelint-rules
```

Помимо этого, очевидно, нужно установить сам Stylelint.

## Список правил

- [declarations-before-nesting](./docs/rules/declarations-before-nesting.ru.md) — следит за тем, чтобы собственные свойства блока всегда были выше вложенных.
- [no-transition-all](./docs/rules/no-transition-all.ru.md) — следит за тем, чтобы внутри свойств `transition` и `transition-property` не использовалось значение `all`.
- [rgba-hex-color-only](./docs/rules/rgba-hex-color-only.ru.md) — следит за тем, чтобы функция `rgba` вызывалась только с hex-нотацией цвета в качестве первого аргумента.
- [selector-max-type](./docs/rules/selector-max-type.md) — ограничивает кол-во селекторов по типу в одном селекторе (совместимо с [@funboxteam/scss-vars-loader](https://github.com/funbox/scss-vars-loader)).

[![Sponsored by FunBox](https://funbox.ru/badges/sponsored_by_funbox_centered.svg)](https://funbox.ru)
