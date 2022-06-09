/**
 * Check whether a string has postcss-simple-vars interpolation
 *
 * @param {string} string
 */
// eslint-disable-next-line func-names
module.exports = function (string) {
  return /\$\(.+?\)/.test(string);
};
