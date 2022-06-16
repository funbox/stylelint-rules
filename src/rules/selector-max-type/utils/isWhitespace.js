/**
 * Check if a character is whitespace.
 *
 * @param {string} char
 * @returns {boolean}
 */
// eslint-disable-next-line func-names
module.exports = function (char) {
  return [' ', '\n', '\t', '\r', '\f'].includes(char);
};
