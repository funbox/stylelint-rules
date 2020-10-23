const { getObjectPath } = require('@funboxteam/diamonds');
const stylelint = require('stylelint');

global.testRule = (rule, schema) => {
  describe(schema.ruleName, () => {
    const stylelintConfig = {
      plugins: ['./src'],
      rules: {
        [schema.ruleName]: schema.config,
      },
    };

    if (schema.accept && schema.accept.length) {
      describe('accept', () => {
        schema.accept.forEach(testCase => {
          const spec = testCase.only ? it.only : it;

          spec(testCase.description || 'no description', () => {
            const options = {
              code: testCase.code,
              config: stylelintConfig,
              syntax: schema.syntax,
            };

            return stylelint.lint(options).then(output => {
              expect(output.results[0].warnings).toEqual([]);
              if (!schema.fix) {
                return undefined;
              }

              // Check the fix
              return stylelint
                .lint(Object.assign({ fix: true }, options))
                .then(output2 => {
                  const fixedCode = getOutputCss(output2);
                  expect(fixedCode).toBe(testCase.code);
                });
            });
          });
        });
      });
    }

    if (schema.reject && schema.reject.length) {
      describe('reject', () => {
        schema.reject.forEach(testCase => {
          const spec = testCase.only ? it.only : it;

          spec(testCase.description || 'no description', () => {
            const options = {
              code: testCase.code,
              config: stylelintConfig,
              syntax: schema.syntax,
            };

            return stylelint.lint(options).then(output => {
              const warnings = output.results[0].warnings;
              const warning = warnings[0];

              expect(warnings.length).toBeGreaterThanOrEqual(1);

              if (testCase.message !== undefined) {
                expect(getObjectPath(warning, 'text')).toBe(testCase.message);
              }

              if (testCase.line !== undefined) {
                expect(getObjectPath(warning, 'line')).toBe(testCase.line);
              }

              if (testCase.column !== undefined) {
                expect(getObjectPath(warning, 'column')).toBe(testCase.column);
              }

              if (!schema.fix) {
                return undefined;
              }

              if (!testCase.fixed) {
                throw new Error(
                  'If using { fix: true } in test schema, all reject cases must have { fixed: .. }',
                );
              }

              // Check the fix
              return stylelint
                .lint(Object.assign({ fix: true }, options))
                .then(output2 => {
                  const fixedCode = getOutputCss(output2);

                  expect(fixedCode).toBe(testCase.fixed);
                });
            });
          });
        });
      });
    }
  });
};

function getOutputCss(output) {
  // eslint-disable-next-line no-underscore-dangle
  const result = output.results[0]._postcssResult;
  return result.root.toString(result.opts.syntax);
}
