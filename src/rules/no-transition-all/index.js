const utils = require('stylelint').utils;
const namespace = require('../../utils/namespace');

const ruleName = namespace('no-transition-all');

const messages = utils.ruleMessages(ruleName, {
  rejected: 'The keyword "all" should not be used with the "transition" property explicitly or implicitly',
});

const isImplicitTransitionAll = (shorthandValue) => {
  const valueParts = shorthandValue.split(',').map(value => value.trim().split(' '));

  const TIMING_FUNCTION_REGEXP = /^(ease|linear|step|cubic-bezier)/;
  const PROPERTY_REGEXP = /^[a-z]+(-[a-z]+)?$/;

  for (let i = 0; i < valueParts.length; i += 1) {
    if (!valueParts[i].some(value => PROPERTY_REGEXP.test(value) && !TIMING_FUNCTION_REGEXP.test(value))) {
      return true;
    }
  }

  return false;
};

const rule = actual => (root, result) => {
  const validOptions = utils.validateOptions(result, ruleName, { actual });

  if (!validOptions) {
    return;
  }

  root.walkDecls(/transition/, (decl) => {
    const isExplicitAll = () => decl.value.split(',').flatMap(val => val.trim().split(' ')).some(val => val === 'all');
    const isImplicitAll = () => decl.prop === 'transition' && isImplicitTransitionAll(decl.value);

    if (isExplicitAll() || isImplicitAll()) {
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
