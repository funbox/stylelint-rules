/**
 * Check whether a string has JS template literal interpolation or HTML-like template
 *
 * @param {string} string
 * @return {boolean} If `true`, a string has template literal interpolation
 */
// eslint-disable-next-line func-names
module.exports = function (string) {
  return /{.+?}/.test(string);
};
