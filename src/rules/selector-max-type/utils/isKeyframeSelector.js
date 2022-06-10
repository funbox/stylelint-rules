const keywordSets = require('../reference/keywordSets');

/**
 * Check whether a string is a keyframe selector.
 *
 * @param {string} selector
 * @returns {boolean}
 */
// eslint-disable-next-line func-names
module.exports = function (selector) {
  if (keywordSets.keyframeSelectorKeywords.has(selector)) {
    return true;
  }

  // Percentages
  return /^(?:\d+\.?\d*|\d*\.?\d+)%$/.test(selector);
};
