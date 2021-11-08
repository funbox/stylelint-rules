# `rgba` Hex Color Only

Следит за тем, чтобы функция `rgba` вызывалась только с hex-нотацией цвета в качестве первого аргумента.

Пример **недопустимого** кода при включенном правиле:

```scss
.color {
  color: rgba(0, 0, 0, .4);
}

.bg {
  background: linear-gradient(to right, rgba(0, 0, 0, .4), rgba(100, 100, 100, 0));
}
```
