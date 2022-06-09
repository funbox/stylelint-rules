/**
 * Check whether a string has less interpolation
 *
 * @param {string} string
 * @return {boolean} If `true`, a string has less interpolation
 */
// eslint-disable-next-line func-names
module.exports = function (string) {
  return /@{.+?}/.test(string);
};
