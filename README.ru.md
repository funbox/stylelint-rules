# @funboxteam/stylelint-rules

Плагин для [Stylelint](https://stylelint.io/), добавляющий кастомные правила линтинга.

Используется в пакете scss-lint-config.

## Установка

```
npm install -D @funboxteam/stylelint-rules
```

## Список правил

[declarations-before-nesting](./docs/rules/declarations-before-nesting.ru.md) — следит за тем, чтобы собственные свойства блока всегда были выше вложенных.

Соответствует аналогичному правилу линтера sass-lint.

[no-transition-all](./docs/rules/no-transition-all.ru.md) — следит за тем, чтобы внутри свойств `transition` и `transition-property` не использовалось значение `all`.

Соответствует аналогичному правилу линтера sass-lint.
