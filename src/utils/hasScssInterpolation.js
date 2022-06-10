/**
 * Check whether a string has scss interpolation
 *
 * @param {string} string
 */
// eslint-disable-next-line func-names
module.exports = function (string) {
  return /#{(?!\$b).+?}/.test(string);
};
