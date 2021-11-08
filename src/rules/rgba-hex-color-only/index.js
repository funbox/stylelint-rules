const utils = require('stylelint').utils;
const namespace = require('../../utils/namespace');

const ruleName = namespace('rgba-hex-color-only');

const messages = utils.ruleMessages(ruleName, {
  rejected: 'Expected hex color code notation to be used in "rgba" function',
});

const rule = actual => (root, result) => {
  const validOptions = utils.validateOptions(result, ruleName, { actual });

  if (!validOptions) {
    return;
  }

  root.walkDecls(decl => {
    if (isRgbaValid(decl.value)) return;

    utils.report({
      message: messages.rejected,
      node: decl,
      result,
      ruleName,
    });
  });
};

module.exports = {
  ruleName,
  messages,
  rule,
};

function isRgbaValid(value) {
  // if first rgba argument starts with a digit, then it is not a hex notation
  return !value.match(/rgba\s*\(\s*\d/g);
}
