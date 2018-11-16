const utils = require('stylelint').utils;
const namespace = require('../../utils/namespace');

const ruleName = namespace('declarations-before-nesting');

const messages = utils.ruleMessages(ruleName, {
  expected: 'Expected all declarations to come before nestings',
});

const rule = expectation => (root, result) => {
  const validOptions = utils.validateOptions(result, ruleName, {
    actual: expectation,
  });

  if (!validOptions) {
    return;
  }

  root.walkRules(block => {
    let rulesetIndex;

    block.each((item, j) => {
      let declarationIndex;
      let declaration;

      if (item.type === 'rule' && typeof rulesetIndex === 'undefined') {
        rulesetIndex = j;
      }

      if (item.type === 'decl') {
        declarationIndex = j;
        declaration = item;
      }

      if (rulesetIndex < declarationIndex && declaration) {
        utils.report({
          message: messages.expected,
          node: declaration,
          result,
          ruleName,
        });
      }
    });

    rulesetIndex = null;
  });
};

module.exports = {
  ruleName,
  messages,
  rule,
};
