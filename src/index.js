const createPlugin = require('stylelint').createPlugin;
const namespace = require('./utils/namespace');
const rules = require('./rules');

const rulesPlugins = Object.keys(rules).map(ruleName => createPlugin(namespace(ruleName), rules[ruleName].rule));

module.exports = rulesPlugins;
