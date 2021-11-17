const { rule, ruleName, messages } = require('..');

testRule(rule, {
  ruleName,
  config: [true],
  syntax: 'scss',

  accept: [
    {
      code: `
      .test-single-pass {
        -webkit-transition: width 2s;
        transition: width 2s;
      }
     `,
      description: 'One property.',
    },
    {
      code: `
      .test-multiple-pass {
        -webkit-transition: width 2s, height 2s, background-color 2s, -webkit-transform 2s;
        transition: width 2s, height 2s, background-color 2s, transform 2s;
      }
     `,
      description: 'Multiple properties.',
    },
    {
      code: `
      .test-trans-property-pass {
        transition-property: none;
        transition-property: width;
        transition-property: test_05;
        transition-property: -specific;
        transition-property: sliding-vertically;
      }
     `,
      description: 'Different transition properties.',
    },
    {
      code: `
      .test-custom-animation {
        -webkit-transition: width 2s cubic-bezier(.23, 1, .32, 1);
        transition: width 2s cubic-bezier(.23, 1, .32, 1);
      }
     `,
      description: 'Custom animation function.',
    },
    {
      code: `
      .test-custom-animation-compact {
        -webkit-transition: width 2s cubic-bezier(.23,1,.32,1);
        transition: width 2s cubic-bezier(.23,1,.32,1);
      }
     `,
      description: 'Custom animation function compact.',
    },
    {
      code: `
      .test-linear-animation {
        -webkit-transition: width 2s linear;
        transition: width 2s linear;
      }
     `,
      description: 'Linear animation function.',
    },
  ],

  reject: [
    {
      code: `
      .test-single-fail {
        -webkit-transition: all 2s;
        transition: all 2s;
      }
     `,
      line: 3,
      messages: messages.rejected,
      description: 'One property, all value is used.',
    },
    {
      code: `
      .test-multiple-fail {
        -webkit-transition: all 2s, height 2s, background-color 2s, -webkit-transform 2s;
        transition: width 2s, height 2s, all 2s, transform 2s;
      }
     `,
      line: 3,
      messages: messages.rejected,
      description: 'Multiple properties, all value is used.',
    },
    {
      code: `
      .test-trans-property-fail {
        transition-property: all;
      }
     `,
      line: 3,
      messages: messages.rejected,
      description: 'One transition property, all value is used.',
    },
    {
      code: `
      .test-implicit-all-fail {
        transition: 2s ease-in, width 7s;
      }
     `,
      line: 3,
      messages: messages.expected,
      description: 'One explicit property and one implicit all value is used.',
    },
    {
      code: `
      .test-custom-animation {
        -webkit-transition: 2s cubic-bezier(.23, 1, .32, 1);
        transition: 2s cubic-bezier(.23, 1, .32, 1);
      }
     `,
      description: 'Custom animation function.',
    },

    {
      code: `
      .test-custom-animation {
        -webkit-transition: 2s cubic-bezier(.23,1,.32,1);
        transition: 2s cubic-bezier(.23,1,.32,1);
      }
     `,
      description: 'Custom animation function compact.',
    },
    {
      code: `
      .test-linear-animation {
        -webkit-transition: 2s linear;
        transition: 2s linear;
      }
     `,
      description: 'Linear animation function.',
    },
  ],
});
