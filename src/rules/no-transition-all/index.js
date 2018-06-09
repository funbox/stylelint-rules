import { utils } from "stylelint";
import { namespace } from "../../utils";

export const ruleName = namespace("no-transition-all");

export const messages = utils.ruleMessages(ruleName, {
  rejected: propertyName => 'The keyword `all` should not be used with the property `' + propertyName + '`'
});

export default function (actual) {
  return (root, result) => {
    const validOptions = utils.validateOptions(result, ruleName, {actual});

    if (!validOptions) {
      return;
    }

    root.walkDecls(/transition/, decl => {
      const valueArr = decl.value.split(' ');

      if (valueArr.find(val => val === 'all')) {
        utils.report({
          message: messages.rejected,
          node: decl,
          result,
          ruleName
        });
      }
    });
  };
};