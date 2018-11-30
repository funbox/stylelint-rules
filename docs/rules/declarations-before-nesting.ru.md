# Declarations Before Nesting

Правило `declarations-before-nesting` cледит за тем, чтобы собственные свойства блока всегда были выше вложенных.

Пример **допустимого** кода при включенном правиле:

```scss
.foo {
  content: 'baz';

  .bar {
    content: 'qux';
  }
}
```

Пример **недопустимого** кода при включенном правиле:

```scss
.foo {
  .bar {
    content: 'qux';
  }
  
  content: 'baz';
}
```
