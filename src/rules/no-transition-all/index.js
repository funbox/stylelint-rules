const utils = require('stylelint').utils;
const namespace = require('../../utils/namespace');

const ruleName = namespace('no-transition-all');

const messages = utils.ruleMessages(ruleName, {
  rejected: 'The keyword "all" should not be used with the "transition" property',
});

const rule = actual => (root, result) => {
  const validOptions = utils.validateOptions(result, ruleName, { actual });

  if (!validOptions) {
    return;
  }

  root.walkDecls(/transition/, (decl) => {
    const valueArr = decl.value.split(' ');

    if (valueArr.find(val => val === 'all')) {
      utils.report({
        message: messages.rejected,
        node: decl,
        result,
        ruleName,
      });
    }
  });
};

module.exports = {
  ruleName,
  messages,
  rule,
};
