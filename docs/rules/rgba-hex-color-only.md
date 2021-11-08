# `rgba` Hex Color Only

Prevents use `rgba` function with non-hex color as a first argument.

Example of **disallowed** code when the rule is enabled:

```scss
.color {
  color: rgba(0, 0, 0, .4);
}

.bg {
  background: linear-gradient(to right, rgba(0, 0, 0, .4), rgba(100, 100, 100, 0));
}
```
