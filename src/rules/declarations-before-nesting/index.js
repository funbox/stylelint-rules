import { utils } from 'stylelint';
import namespace from '../../utils/namespace';

export const ruleName = namespace('declarations-before-nesting');

export const messages = utils.ruleMessages(ruleName, {
  expected: 'Expected all declarations to come before nestings',
});

export default function (expectation) {
  return (root, result) => {
    const validOptions = utils.validateOptions(result, ruleName, {
      actual: expectation,
    });

    if (!validOptions) {
      return;
    }

    root.walkRules((block) => {
      let rulesetIndex;

      block.each((item, j) => {
        let declarationIndex;
        let declaration;

        if (item.type === 'rule' && typeof rulesetIndex === 'undefined') {
          rulesetIndex = j;
        }

        if (item.type !== 'rule') {
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
}
