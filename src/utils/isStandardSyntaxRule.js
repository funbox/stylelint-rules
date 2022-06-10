const _ = require('lodash');
const isCustomPropertySet = require('./isCustomPropertySet');
const isStandardSyntaxSelector = require('./isStandardSyntaxSelector');

/**
 * Check whether a Node is a standard rule
 *
 * @param {import('postcss').Rule | import('postcss-less').Rule} rule
 * @returns {boolean}
 */
// eslint-disable-next-line func-names
module.exports = function (rule) {
  if (rule.type !== 'rule') {
    return false;
  }

  // Get full selector
  const selector = _.get(rule, 'raws.selector.raw', rule.selector);

  if (!isStandardSyntaxSelector(rule.selector)) {
    return false;
  }

  // Custom property set (e.g. --custom-property-set: {})
  if (isCustomPropertySet(rule)) {
    return false;
  }

  // Ignore Scss nested properties
  return !selector.endsWith(':');
};
