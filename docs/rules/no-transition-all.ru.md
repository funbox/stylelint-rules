# No Transition All

Правило `no-transition-all` следит за тем, чтобы внутри свойств `transition` и `transition-property` не использовалось значение `all`.

Пример **недопустимого** кода при включенном правиле:

```scss
.foo {
  transition: all 2s;
}

.bar {
  transition-property: all 2s;
}

.quz {
  -webkit-transition: all 2s, height 2s, background-color 2s, -webkit-transform 2s;
}
```
