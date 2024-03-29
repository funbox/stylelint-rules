# Changelog

## 3.0.0 (08.06.2023)

Dropped Node.js 12 support.

The package is probably still working on that version though, because we have not touched a line. But watch out.


## 2.2.0 (16.06.2022)

Added `selector-max-type` rule.


## 2.1.1 (17.11.2021)

Fixed false-positive `no-transition-all` for complex animation functions such as `cubic-bezier`.


## 2.1.0 (08.11.2021)

Added `rgba-hex-color-only` rule.


## 2.0.1. (11.08.2021)

Fixed `no-transition-all` rule. Now it may check implicit `all`, e.g. `transition: 2s;`.


## 2.0.0 (23.10.2020)

Breaking change: Added Stylelint as a peer dep.

Also updated the deps, added LICENSE, fix audit errors, remove unused deps & code.


## 1.3.0 (16.08.2019)

Updated the deps.


## 1.2.0 (27.06.2019)

Added installation info to README.


## 1.1.0 (03.12.2018)

Added description for `declarations-before-nesting` & `no-transition-all`.


## 1.0.2 (30.11.2018)

Fixed `declarations-before-nestings` to allow comments after the nested rules.


## 1.0.1 (27.09.2018)

Fixed typo.


## 1.0.0 (26.09.2018)

Init version.
