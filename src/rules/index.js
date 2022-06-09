const declarationsBeforeNesting = require('./declarations-before-nesting');
const noTransitionAll = require('./no-transition-all');
const rgbaHexColorOnly = require('./rgba-hex-color-only');
const selectorMaxType = require('./selector-max-type');

module.exports = {
  'declarations-before-nesting': declarationsBeforeNesting,
  'no-transition-all': noTransitionAll,
  'rgba-hex-color-only': rgbaHexColorOnly,
  'selector-max-type': selectorMaxType,
};
