const keywordSets = {};

keywordSets.shadowTreePseudoElements = new Set(['part']);

keywordSets.pseudoElements = uniteSets(
  keywordSets.shadowTreePseudoElements,
);

keywordSets.aNPlusBNotationPseudoClasses = new Set([
  'nth-column',
  'nth-last-column',
  'nth-last-of-type',
  'nth-of-type',
]);

keywordSets.linguisticPseudoClasses = new Set(['dir', 'lang']);

keywordSets.logicalCombinationsPseudoClasses = new Set(['has', 'is', 'matches', 'not', 'where']);

keywordSets.aNPlusBOfSNotationPseudoClasses = new Set(['nth-child', 'nth-last-child']);

keywordSets.pseudoClasses = uniteSets(
  keywordSets.aNPlusBNotationPseudoClasses,
  keywordSets.linguisticPseudoClasses,
  keywordSets.logicalCombinationsPseudoClasses,
  keywordSets.aNPlusBOfSNotationPseudoClasses,
);

keywordSets.keyframeSelectorKeywords = new Set(['from', 'to']);

/**
 * @param {(string[] | Set<string>)[]} args
 */
function uniteSets(...args) {
  return new Set(
    [...args].reduce((/** @type {string[]} */ result, set) => result.concat([...set]), []),
  );
}

module.exports = keywordSets;
