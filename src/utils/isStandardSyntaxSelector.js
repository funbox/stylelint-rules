const hasInterpolation = require('./hasInterpolation');

/**
 * Check whether a selector is standard
 *
 * @param {string} selector
 * @returns {boolean}
 */
// eslint-disable-next-line func-names
module.exports = function (selector) {
  // SCSS or Less interpolation
  if (hasInterpolation(selector)) {
    return false;
  }

  // SCSS placeholder selectors
  if (selector.startsWith('%')) {
    return false;
  }

  // Less :extend()
  if (/:extend(\(.*?\))?/.test(selector)) {
    return false;
  }

  // Less mixin with resolved nested selectors (e.g. .foo().bar or .foo(@a, @b)[bar])
  if (/\.[\w-]+\(.*\).+/i.test(selector)) {
    return false;
  }

  // ERB template tags
  return !(selector.includes('<%') || selector.includes('%>'));
};
