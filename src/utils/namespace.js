const prefix = 'funbox-stylelint-rules';

export default function namespace(ruleName) {
  return `${prefix}/${ruleName}`;
}
