/**
 * Check whether a selector is standard
 *
 * @param {string} selector
 * @returns {boolean}
 */
// eslint-disable-next-line func-names
module.exports = function (selector) {
  // SCSS interpolation (compatible with @funboxteam/scss-vars-loader)
  if (/#{(?!\$b).+?}/.test(selector)) {
    return false;
  }

  // SCSS placeholder selectors
  return !selector.startsWith('%');
};
