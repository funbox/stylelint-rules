# No Transition All

Prevents use `all` value for `transition` & `transition-property` props.

Example of **disallowed** code when the rule is enabled:

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
