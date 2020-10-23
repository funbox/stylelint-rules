# Declarations Before Nesting

Forces block rules be placed above the nested blocks.

Example of **allowed** code when the rule is enabled:

```scss
.foo {
  content: 'baz';

  .bar {
    content: 'qux';
  }
}
```

Example of **disallowed** code when the rule is enabled:

```scss
.foo {
  .bar {
    content: 'qux';
  }
  
  content: 'baz';
}
```
